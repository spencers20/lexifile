import { useState } from "react";
import DOMPurify from 'dompurify'
type Message={
    id:number,
    role:"user"|"bot",
    content:string
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
      
      const formatted = answer
      .replace(/\\n/g, '\n') // Turn escaped newlines into real ones
      .replace(/\\"/g, '"')  // Replace escaped quotes
      .replace(/<think>/g, '<strong>Think:</strong><br />') // Custom tag formatting
      .replace(/<\/think>/g, '')
      .replace(/\*\*(.*?)\*\*/g, '$1') // Remove markdown bold (**text**) and keep only inner text
      .replace(/\n\n/g, '</p><p>') // Double newlines → paragraph break
      .replace(/\n/g, '<br />'); // Single newline → line break
    
         
         const safeHTML =DOMPurify.sanitize(formatted)
        //  const safeHTML="Get started creating, deploying, and managing applications—across multiple clouds, on-premises, and at the edge—with scalable and cost-efficient Azure services. Get started creating, deploying, and managing applications—across multiple clouds, on-premises, and at the edge—with scalable and cost-efficient Azure services.Get started creating, deploying, and managing applications—across multiple clouds, on-premises, and at the edge—with scalable and cost-efficient Azure services."

      const botMessage :Message = {
        id: Date.now() + 1,
        role: "bot",
        content: safeHTML
      };

      setMessages((prev) => [...prev, botMessage]);
      setInput("");
    }catch(error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    isLoading
  };
}
