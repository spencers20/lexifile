import formidable ,{Files,Fields} from "formidable";
import { NextApiRequest, NextApiResponse } from "next";
import  {parse} from 'csv-parse'
import mammoth from "mammoth"
import pdfParse from 'pdf-parse'
import fs from 'fs'
import {RecursiveCharacterTextSplitter} from "langchain/text_splitter"
import {Document} from 'langchain/document'
import {CohereClient} from 'cohere-ai'
import 'dotenv/config'
// import { embedJobs } from "cohere-ai/api";
import { Pinecone } from '@pinecone-database/pinecone';
import {serialize} from 'cookie'

const pc = new Pinecone({
  apiKey : process.env.PINECONE_API as string
});
const index = pc.index(process.env.INDEX_NAME as string,process.env.INDEX_HOST);
// const cohere = new CohereClient({});

const co=new CohereClient({token: process.env.COHERE_API} )

type UpsertedDoc = {
    id: string;
    values: number[];
    metadata: {
      text: string;
      chunk_index: number;
    };
  };

export const config={
    api:{
        bodyParser:false,
    }
}
// function to get the data 
async function getdata(file:formidable.File,ext:string):Promise<{text:string}> {
    const filepath=file.filepath
    let text =''
    let  filetype=''

    if(ext==='pdf'){
        const dataBuffer=fs.readFileSync(filepath)
        const data=await pdfParse(dataBuffer)
        text=data.text
        filetype='pdf'
    }else if(ext==='txt'){
        text=fs.readFileSync(filepath,'utf-8')
        filetype='txt'
    // }else if(ext==='csv'){
    //     const csvData = fs.readFileSync(filepath, 'utf-8');
    //       parse(csvData, { columns: true }, (err, output) => {
    //         if (err) return reject('CSV parsing error');
    //         text = JSON.stringify(output, null, 2);
    //         filetype = 'csv';
    //         resolve({ text, filetype });
    //       });
    //       return;
    }else if(ext==='docx'){
        const buffer=fs.readFileSync(filepath)
        const result=await mammoth.extractRawText({buffer})
        text=result.value
        filetype='docx'
    
    }else{
        throw new Error('unsupported file ')
        
    }
    return {text}
    
}


// function to  chunk the documents using recursive
async function chunkdocs(text:string, filename:string): Promise<{allchunks:Document[]}>{
    try{
        const textsplitter=new RecursiveCharacterTextSplitter({
            chunkSize:1800,
            chunkOverlap:200,
            lengthFunction:(text)=>text.split(/\s+/).length
        })
        const doc=[new Document({
            pageContent:text,
            metadata:{source:filename}
        })]

        const allchunks=await textsplitter.splitDocuments(doc)
        return {allchunks}

    }catch(e){
        console.log('error in chunking the documents')
        return {allchunks:[]}
    }

}

async function generateembeddings(chunkeddata:Document[]):Promise<{embeddings:number[][]}>{
    try{
        const text=chunkeddata.map(doc=>doc.pageContent)
        const embed=await co.v2.embed({
            texts:text,
            model:"embed-english-v3.0",
            inputType:"search_document",
            embeddingTypes:["float"]

        })
        const embeddings=embed.embeddings?.float??[]
        return {embeddings}



    }catch(e){
        console.log('errror in chunking the data',e)
        return {embeddings:[]}
    }
}

function upsertingdoc(embeddings:number[][],chunkeddata:Document[]) : UpsertedDoc[] {
    try{
        const finaldoc:UpsertedDoc[]=[]
        const texts=chunkeddata.map(doc=>doc.pageContent)

        embeddings.forEach((embedding,i)=>{
            const text=texts[i]
            const doc={
                id:String(i),
                values:embedding,
                metadata:{
                    text:text,
                    chunk_index:i
                }
            }

            finaldoc.push(doc)
        })

        return finaldoc

    }catch(e){
        console.log('error in preparing the upserting document')
        return []
    }
}

function generateNamespace() {
    const prefix = 'lexi';
    const uuid = crypto.randomUUID().replace(/-/g, '').slice(0, 8);
    return `${prefix}-${uuid}`;
  }
  
export default async function handler(req:NextApiRequest,res:NextApiResponse){
    if(req.method!=='POST'){
        return res.status(400).json({error:"wrong  request made"})
    }

    const form=formidable({
        keepExtensions:true,      
    })

    form.parse(req,async(err:any,fields:formidable.Fields,files:formidable.Files)=>{
        try{

           if (err){
                return res.status(500).json({error:"an error occured in parsing the files"})        
            }
            const actualfile=files.Document as formidable.File | formidable.File[]||undefined
            const file =Array.isArray(actualfile)?actualfile[0]:actualfile
    
            if(!file){
                console.log('no file detected')
                return res.status(400).json({error:"no file detected please upload"})
            }
            const filename=file.originalFilename??""
            const ext=filename.split('.').pop()?.toLowerCase()
            if (!ext) {
                throw new Error("File extension is missing or invalid.");
              }
            const {text}= await getdata(file,ext)
            const {allchunks}=await chunkdocs(text,filename)
            const {embeddings}= await generateembeddings(allchunks)
            const upsertdoc=upsertingdoc(embeddings,allchunks)
            const namespace =generateNamespace() as string
            // if (!namespace){

            // }
            // console.log()
            // console.log("upsertdoc reuslts",upsertdoc)
            console.log('namespace',namespace)
            const upserteddocs=await index.namespace(namespace).upsert(upsertdoc)
            // const host = req.headers.host; // example: localhost:3000 or yourdomain.com
            // const protocol = process.env.NODE_ENV === "development" ? "http" : "https";
            // const queryUrl = `${protocol}://${host}/api/namespace`;
            res.setHeader(
                'Set-Cookie',
                serialize("namespace",namespace,{
                    path:'/',
                    httpOnly:true,
                    sameSite:'lax',
                    maxAge: 60 * 5,
                })
            )
            res.status(200).json({success:`success in upserting doc ${upserteddocs}`})
            
              

        }catch(e){
         console.log("error in parsing / upserting data",e)
    
        }

    })

}