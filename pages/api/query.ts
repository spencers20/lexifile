
import { NextApiRequest, NextApiResponse } from "next";
import 'dotenv/config'
import { parse } from "cookie";
// lib/callFlowise.js

type flowisepayload={
    question:string,
    overrideConfig: {
        pineconeNamespace: string,
      },
    
}
type  chatflowisepayload={
    question:string,
    chatId:string
}
export async function callflowise(data:flowisepayload |chatflowisepayload ) {
    try {
      const response = await fetch(process.env.API_KEY as string, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.AUTH_KEY}`,
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
    const namespace = cookies.namespace
    if (!namespace) {
      return res.status(500).json({
        error: "Namespace not available. Please upload the document again to proceed.",
      });
    }

    console.log("flowise entered...");
    const body = req.body;
    const query = body.question;
   

    let chatId = ""; // This can be enhanced later with session state or DB

    if (!chatId) {
      const flowisepayload :flowisepayload = {
        question: query,
        overrideConfig: {
          pineconeNamespace: namespace,
        },
      };
      const results = await callflowise(flowisepayload);
      if (results) {
        chatId = results.chatId;
        console.log("results", results.text);
        return res.status(200).json({ response: results.text });
      }
    } else {
      const chatflowisepayload : chatflowisepayload = {
        question: query,
        chatId: chatId,
      };
      const results = await callflowise(chatflowisepayload);
      return res.status(200).json({ response: results.text });
    }
  } catch (e) {
    console.error("error querying flowise", e);
    res.status(500).json({
      error: `I'm sorry, I couldn't process your request at the moment. Please try again later.`,
    });
  }
}
