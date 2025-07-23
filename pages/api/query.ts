
import { NextApiRequest, NextApiResponse } from "next";
import 'dotenv/config'
import { parse } from "cookie";
import fs from 'fs'
// lib/callFlowise.js

// {
//   "question":"yes the milestones",
//   "thread_id":"f079f854-cd24-43e6-8573-5ebe988bd717",
//   "namespace":"lexi-04de153a"
// }

type lexipayload={
    question:string,
    namespace?:string,
    file_path?:string
    
}
type  chatlexipayload={
    question:string,
    namespace?:string,
    file_path?:string,
    thread_id:string
}

// type 
export async function calllexi(data:lexipayload |chatlexipayload ) {
    try {
      const response = await fetch(process.env.LEXI_URL as string, {
        method: "POST",
        headers: {  
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      const result = await response.json();
      console.log("results...", result);
      return result;
    } catch (e) {
      console.error("error in calling flowise", e);
      throw e;
    }
  }
  

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const cookies=parse(req.headers.cookie||"")
    const namespace = cookies.namespace?cookies.namespace:""
    const file_path=cookies.file_path?cookies.file_path:""
    // let file_path;
    // if (file_path &&fs.existsSync(cookie_file_path)){
    //   // console.log('file_path...',file_path)
    //   file_path=cookie_file_path
    // }
    
    if (namespace=="" && file_path=="") {
      
      return res.status(500).json({
        error: "Namespace / file_path not available. Please upload the document again to proceed.",
      });
    }

    console.log("flowise entered...");
    const body = req.body;
    const query = body.question;
   

    let chatId = ""; // This can be enhanced later with session state or DB

    if (!chatId) {
      const lexipayload :lexipayload = {
        question: query,
        namespace:namespace,
        file_path:file_path

      };
      const results = await calllexi(lexipayload);
      if (results) {
        chatId = results.chatId;
        console.log("results", results.response);
        return res.status(200).json({ response: results.response, origin_res:results.text_response, visualizatons:results.visuals });
      }
    } else {
      const chatlexipayload : chatlexipayload = {
        question: query,
        namespace:namespace,
        thread_id: chatId,
      };
      const results = await calllexi(chatlexipayload);
      return res.status(200).json({ response: results.response, origin_res:results.text_response, visualizatons:results.visuals });
      // return res.status(200).json({ response: results.response });//made change
    }
  } catch (e) {
    console.error("error querying flowise", e);
    res.status(500).json({
      error: `I'm sorry, I couldn't process your request at the moment. Please try again later.`,
    });
  }
}
