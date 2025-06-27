"use client"

import type React from "react"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { useState, useRef,useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Upload, FileText, Bot, Sparkles, User, Send, X, Minimize2 } from "lucide-react"
import { useChat } from "../hooks/useChat"
import Header from "../component/header"


export default function ChatPage() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat()
  const [document, setDocument] = useState<File | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [documentProcessed, setDocumentProcessed] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
    if (scrollRef.current) {
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }
  }, [messages]);


  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("sending file....")
    
    const file = event.target.files?.[0]
    if (file) {
      setDocument(file)
      setIsProcessing(true)

      const formdata=new FormData()
      formdata.append('Document',file)
      try{
        console.log("sending file to upsert")
        const upsertingdata=await fetch(
          '/api/upserting',
          {
          method:'POST',
          body:formdata
          }
           )

        const upserting=await upsertingdata.json()
        console.log('upserting...',upserting)

        if(upserting.success){
          // Simulate document processing
          setTimeout(() => {
            setIsProcessing(false)
            setDocumentProcessed(true)
          }, 3000)

        }
        

      }catch(e){
        console.log('error in sending data to upsert',e)
      }


    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    const file = e.dataTransfer.files[0]
    if (file) {
      setDocument(file)
      setIsProcessing(true)

      // Simulate document processing
      setTimeout(() => {
        setIsProcessing(false)
        setDocumentProcessed(true)
      }, 3000)
    }
  }

  const resetDocument = () => {
    setDocument(null)
    setDocumentProcessed(false)
    setIsProcessing(false)
  }

  // Header component
 

  // Initial state - centered upload with intro
  if (!document || (!isProcessing && !documentProcessed)) {
    return (
      <div className="bg-gradient-to-br from-slate-50 to-blue-50 ">
        <Header/>
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
            <ArrowLeft className="h-5 w-5" />
            <span>Back</span>
          </Link>
    
        </div>
        
        <div className="flex items-center justify-center" >
          <div className="container mx-auto px-4 max-w-lg">
            {/* Lexi Introduction */}
            <div className="text-center mb-5">
              <div className="flex items-center justify-center mb-4">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                    <Bot className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1">
                    <Sparkles className="h-6 w-6 text-yellow-500 animate-pulse" />
                  </div>
                </div>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-3">
                Hello, I'm{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Lexi</span>
              </h1>
              <p className="text-lg text-gray-600 mb-3">Your intelligent document assistant</p>
              <p className="text-gray-500 leading-relaxed">
                Upload any document and I'll help you understand, analyze, and extract insights from it. Ask me
                questions, get summaries, or explore your content in new ways.
              </p>
            </div>

            {/* Upload Area */}
            <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
              <CardContent className="p-4">
                <div
                  className="border-2 border-dashed border-blue-200 rounded-xl p-8 text-center hover:border-blue-400 hover:bg-blue-50/50 transition-all duration-300 cursor-pointer group"
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                >
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    <Upload className="h-10 w-10 text-blue-400 mx-auto mb-4" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">Drop your document here</h3>
                  <p className="text-gray-500 mb-2">or click to browse files</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {["PDF", "DOC", "DOCX", "CSV", "XLS", "XLSX"].map((format) => (
                      <Badge key={format} variant="secondary" className="text-xs px-2 py-1">
                        {format}
                      </Badge>
                    ))}
                  </div>
                  <input
                    ref={fileInputRef}
                    type="file"
                    className="hidden"
                    accept=".pdf,.doc,.docx,.csv,.xls,.xlsx"
                    onChange={handleFileUpload}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    )
  }

  // Processing state
  if (isProcessing) {
    return (
      <div>
        <Header/>
  
        <div className="flex items-center justify-center" style={{ height: "calc(100vh - 80px)" }}>
          <div className="container mx-auto px-4 max-w-lg">
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                    <Bot className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1">
                    <div className="animate-spin rounded-full h-6 w-6 border-2 border-yellow-300 border-t-yellow-600"></div>
                  </div>
                </div>
              </div>

              <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-4 mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <FileText className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-gray-900 truncate">{document?.name}</p>
                        <p className="text-sm text-gray-500">
                          {document && (document.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-4">
                    <div className="flex items-center space-x-3">
                      <div className="animate-spin rounded-full h-6 w-6 border-2 border-amber-300 border-t-amber-600"></div>
                      <div>
                        <p className="font-semibold text-amber-800">Processing document...</p>
                        <p className="text-sm text-amber-600">Analyzing content and preparing for chat</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Chat state - split layout
  return (
   
   
      <div className="flex h-screen">
        {/* Document Panel - Left Side */}
        <div className="w-80 bg-white/90 backdrop-blur-sm border-r border-gray-200 flex flex-col">
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-800">Document</h3>
              <div className="flex space-x-2">
                <Button variant="ghost" size="sm">
                  <Minimize2 className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" onClick={resetDocument}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <FileText className="h-5 w-5 text-blue-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-gray-900 truncate">{document?.name}</p>
                  <p className="text-sm text-gray-500">{document && (document.size / 1024 / 1024).toFixed(2)} MB</p>
                </div>
              </div>
            </div>
          </div>

          {/* Document Preview Area */}
          <div className="flex-1 p-4">
            <div className="h-full bg-gray-50 rounded-lg border-2 border-dashed border-gray-200 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <FileText className="h-12 w-12 mx-auto mb-3 text-gray-400" />
                <p className="text-sm">Document preview</p>
                <p className="text-xs text-gray-400">Coming soon</p>
              </div>
            </div>
          </div>
        </div>

        {/* Chat Panel - Right Side */}
        <div className="flex-1 flex flex-col">
          {/* Chat Header */}
          <div className="bg-white/90 backdrop-blur-sm border-b border-gray-200 p-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <Bot className="h-5 w-5 text-white" />
              </div>
              <div>
                <h2 className="font-semibold text-gray-900">Lexi</h2>
                <p className="text-sm text-gray-500">Your document assistant</p>
              </div>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6" ref={scrollRef}>
            {messages.length === 0 && (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bot className="h-8 w-8 text-white" />
                </div>
                <p className="text-xl font-medium mb-2 text-gray-700">Great! I've analyzed your document.</p>
                <p className="text-gray-500 text-lg">What would you like to know about it?</p>
              </div>
            )}

            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start space-x-4 ${message.role === "user" ? "flex-row-reverse space-x-reverse" : ""}`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.role === "user" ? "bg-blue-600" : "bg-gradient-to-r from-purple-500 to-blue-500"
                  }`}
                >
                  {message.role === "user" ? (
                    <User className="h-5 w-5 text-white" />
                  ) : (
                    <Bot className="h-5 w-5 text-white" />
                  )}
                </div>
                <div
                  className={`max-w-[75%] p-4 rounded-2xl ${
                    message.role === "user"
                      ? "bg-blue-600 text-white rounded-tr-md"
                      : "bg-white text-gray-900 rounded-tl-md shadow-sm border border-gray-100"
                  }`}
                > 
                {
                  message.role==="user"? (
                    <div className="whitespace-pre-wrap">{message.content}</div>

                  ):(
                    <div dangerouslySetInnerHTML={{__html:message.content}}/>
                  )
                }
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                  <Bot className="h-5 w-5 text-white" />
                </div>
                <div className="bg-white text-gray-900 p-4 rounded-2xl rounded-tl-md shadow-sm border border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.20s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.20s" }}
                      ></div>
                    </div>
                    <span className="text-gray-600">Thinking...</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="bg-white/90 backdrop-blur-sm border-t border-gray-200 p-6">
            <form onSubmit={handleSubmit} className="flex space-x-4">
              <div className="flex-1 relative">
                <Input
                  value={input}
                  onChange={handleInputChange}
                  placeholder="Ask me anything about your document..."
                  className="h-12 rounded-xl border-gray-200 focus:border-blue-400 focus:ring-blue-400 text-base"
                  disabled={isLoading}
                />
              </div>
              <Button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="h-12 px-8 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
              >
                <Send className="h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
   
  )
}
