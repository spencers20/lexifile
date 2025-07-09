import { NextApiRequest, NextApiResponse } from "next";
import { cookies } from "next/headers";
import { parse } from "cookie";
import { Pinecone } from "@pinecone-database/pinecone";
import 'dotenv/config'


const pc=new Pinecone({apiKey:process.env.PINECONE_API as string})
const index=pc.index(process.env.INDEX_NAME as string, process.env.INDEX_HOST)
export default async function handler(req:NextApiRequest,res:NextApiResponse){
    if (req.method!=='POST') return res.status(405).json({"error":"Method not allowed "})
    try{
        const cookies=parse(req.headers.cookie||" ")
        const namespace=cookies.namespace

        if(!namespace) return res.status(500).json({
            error: "Namespace not available. Please upload the document again to proceed.",
          });

        console.log("namespace available ",namespace)

        const namespaceexists=await index.describeNamespace(namespace)
        console.log("namespaceexits..",namespaceexists)
        if(namespaceexists.name===namespace){
            await index.namespace(namespace).deleteAll()
            // console.log("deleteindex,...",deleteindex)
        }



    }catch(e){
        console.log('error in eracing the namespace ',e)
    }
}