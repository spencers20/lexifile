import { NextApiRequest, NextApiResponse } from "next";
import { cookies } from "next/headers";
import { parse } from "cookie";
import { Pinecone } from "@pinecone-database/pinecone";
import 'dotenv/config'
import {del} from '@vercel/blob'


const pc=new Pinecone({apiKey:process.env.PINECONE_API as string})
const index=pc.index(process.env.INDEX_NAME as string, process.env.INDEX_HOST)
export default async function handler(req:NextApiRequest,res:NextApiResponse){
    if (req.method!=='POST') return res.status(405).json({"error":"Method not allowed "})
    try{
        const cookies=parse(req.headers.cookie||" ")
        const namespace=cookies.namespace
        const file_path=cookies.file_path
        if (file_path && file_path!==""){
            await del(file_path,{
                token:process.env.BLOB_R_W_TOKEN_READ_WRITE_TOKEN
            })

            return res.status(200).json({"success":"file_deleted succfully"})
            
        }

        if(!namespace && !file_path ) return res.status(500).json({
            error: "Namespace and file_path  not available. Please upload the document again to proceed.",
          });

        if (namespace && namespace!==""){

            console.log("namespace available ",namespace)
    
            const namespaceexists=await index.describeNamespace(namespace)
            console.log("namespaceexits..",namespaceexists)
            if(namespaceexists.name===namespace){
                await index.namespace(namespace).deleteAll()
                // console.log("deleteindex,...",deleteindex)
            }
        }
 



    }catch(e){
        console.log('error in eracing the namespace ',e)
    }
}