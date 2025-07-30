import { useState } from "react";
import DOMPurify from 'dompurify'
type Message={
    id:number,
    role:"user"|"bot",
    content:string,
    visuals?:any[]
}


export function useChat() {
  const [messages, setMessages] = useState <Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e:React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage:Message = { id: Date.now(), role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      console.log("querying microservice...")
      const response = await fetch("/api/query", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ question: input })
      });

      const data = await response.json();
      console.log("response..",data)
      const answer=data.response||data.error
      const allvisuals=data.visualizatons?data.visualizatons:[]
      const visuals=allvisuals?allvisuals.map((visual:string)=>`data:image/png;base64,${visual}`):[]
      
      const formatted = answer
      .replace(/\\n/g, '\n') // Convert escaped newlines to actual ones
      .replace(/\\"/g, '"')  // Convert escaped quotes to normal quotes
      .replace(/<think>/g, '<strong>Think:</strong><br />')
      .replace(/<\/think>/g, '')

      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')      // Convert markdown-style bold (**text**) to <strong>text</strong>
      .replace(/^# (.+?)$/gm, '<h1 class="text-2xl font-black mt-8 mb-4">$1</h1>')       // H1
      .replace(/^## (.+?)$/gm, '<h2 class="text-xl font-extrabold mt-6 mb-3">$1</h2>')    // H2
      .replace(/^### (.+?)$/gm, '<h3 class="text-lg font-bold mt-5 mb-2">$1</h3>')        // H3
      .replace(/^#### (.+?)$/gm, '<h4 class="text-base font-semibold mt-4 mb-2">$1</h4>') // H4
      .replace(/^##### (.+?)$/gm, '<h5 class="text-sm font-medium mt-3 mb-1">$1</h5>')    // H5
      .replace(/^###### (.+?)$/gm, '<h6 class="text-xs font-normal mt-2 mb-1">$1</h6>')   // H6
 

      .replace(/\n{2,}/g, '</p><p>')       // Paragraph break for double newlines
      
      .replace(/\n/g, '<br />') // Line break for single newline
      .replace(/^/, '<p>').concat('</p>');  // Wrap the whole thing in <p> tags
    
         
         const safeHTML =DOMPurify.sanitize(formatted)
        //  const safeHTML="Get started creating, deploying, and managing applications—across multiple clouds, on-premises, and at the edge—with scalable and cost-efficient Azure services. Get started creating, deploying, and managing applications—across multiple clouds, on-premises, and at the edge—with scalable and cost-efficient Azure services.Get started creating, deploying, and managing applications—across multiple clouds, on-premises, and at the edge—with scalable and cost-efficient Azure services."

      const botMessage :Message = {
        id: Date.now() + 1,
        role: "bot",
        content: safeHTML,
        visuals:visuals
      };

      setMessages((prev) => [...prev, botMessage]);
      setInput("");
    }catch(error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };
  const handleX=()=>{
    setMessages([])

  }

  return {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    handleX,
    isLoading
  };
}
