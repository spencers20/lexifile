"use client"

import type React from "react"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { useState, useRef,useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Upload, FileText, Bot, Sparkles, User, Send, X, Minimize2,Menu,ChevronLeft} from "lucide-react"
import { useChat } from "../hooks/useChat"
import Header from "../component/header"


export default function ChatPage() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat()
  const [document, setDocument] = useState<File | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [documentProcessed, setDocumentProcessed] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showDocumentPanel,setShowDocumentPanel]=useState<boolean>(false)
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
    <div className="flex flex-col md:flex-row h-screen">
      {/* Mobile Header - Sticky at top on mobile */}
      <div className="md:hidden bg-white/90 backdrop-blur-sm border-b border-gray-200 p-3 sm:p-4 sticky top-0 z-20">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
              <Bot className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-white" />
            </div>
            <div>
              <h2 className="font-semibold text-gray-900 text-xs sm:text-sm">Lexi</h2>
              <p className="text-xs text-gray-500">Your document assistant</p>
            </div>
          </div>
          {document && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowDocumentPanel(!showDocumentPanel)}
              className="p-1.5 sm:p-2"
            >
              <Menu className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </Button>
          )}
        </div>
      </div>
  
      {/* Document Panel - Left Side */}
      <div
        className={`
      ${showDocumentPanel ? "block" : "hidden"} md:block
      w-full md:w-80 
      bg-white/90 backdrop-blur-sm 
      border-b md:border-b-0 md:border-r border-gray-200 
      flex flex-col
      fixed md:relative
      top-14 sm:top-16 md:top-0
      left-0 right-0
      z-10 md:z-auto
      max-h-[calc(100vh-3.5rem)] sm:max-h-[calc(100vh-4rem)] md:max-h-none
    `}
      >
        <div className="p-3 md:p-4 border-b border-gray-200">
          <div className="flex items-center justify-between mb-3 md:mb-4">
            <h3 className="font-semibold text-gray-800 text-sm md:text-base">Document</h3>
            <div className="flex space-x-1 md:space-x-2">
              <Button variant="ghost" size="sm" className="md:hidden p-1" onClick={() => setShowDocumentPanel(false)}>
                <ChevronLeft className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="hidden md:inline-flex p-1 md:p-2">
                <Minimize2 className="h-3 w-3 md:h-4 md:w-4" />
              </Button>
              <Button variant="ghost" size="sm" onClick={resetDocument} className="p-1 md:p-2">
                <X className="h-3 w-3 md:h-4 md:w-4" />
              </Button>
            </div>
          </div>
  
          {document && (
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-3 md:p-4">
              <div className="flex items-center space-x-2 md:space-x-3">
                <div className="p-1.5 md:p-2 bg-blue-100 rounded-lg">
                  <FileText className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-gray-900 truncate text-sm md:text-base">{document.name}</p>
                  <p className="text-xs md:text-sm text-gray-500">{(document.size / 1024 / 1024).toFixed(2)} MB</p>
                </div>
              </div>
            </div>
          )}
        </div>
  
        {/* Document Preview Area */}
        <div className="flex-1 p-3 md:p-4">
          <div className="h-32 md:h-full bg-gray-50 rounded-lg border-2 border-dashed border-gray-200 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <FileText className="h-6 w-6 sm:h-8 sm:w-8 md:h-12 md:w-12 mx-auto mb-2 md:mb-3 text-gray-400" />
              <p className="text-xs md:text-sm">Document preview</p>
              <p className="text-xs text-gray-400">Coming soon</p>
            </div>
          </div>
        </div>
      </div>
  
      {/* Chat Panel - Right Side */}
      <div className="flex-1 flex flex-col min-h-0 relative">
        {/* Chat Header - Hidden on mobile (shown in mobile header instead) */}
        <div className="hidden md:block bg-white/90 backdrop-blur-sm border-b border-gray-200 p-4">
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
  
        {/* Messages Area - Scrollable content */}
        <div
          className="flex-1 overflow-y-auto p-3 sm:p-4 md:p-6 space-y-3 sm:space-y-4 md:space-y-6 pb-20 md:pb-6  h-[calc(100vh-7rem)] md:h-auto"
          ref={scrollRef}
            // style={{
            //   height: "calc(100vh - 7rem)", // Mobile: account for header + input
            //   "@media (min-width: 768px)": {
            //     height: "auto",
            //   },
            // }}
        >
          {messages.length === 0 && (
            <div className="text-center py-6 sm:py-8 md:py-12">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <Bot className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-white" />
              </div>
              <p className="text-base sm:text-lg md:text-xl font-medium mb-2 text-gray-700">
                Great! I've analyzed your document.
              </p>
              <p className="text-gray-500 text-sm sm:text-base md:text-lg">What would you like to know about it?</p>
            </div>
          )}
  
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex items-start space-x-2 md:space-x-4 ${
                message.role === "user" ? "flex-row-reverse space-x-reverse" : ""
              }`}
            >
              <div
                className={`w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                  message.role === "user" ? "bg-blue-600" : "bg-gradient-to-r from-purple-500 to-blue-500"
                }`}
              >
                {message.role === "user" ? (
                  <User className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 text-white" />
                ) : (
                  <Bot className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 text-white" />
                )}
              </div>
              <div
                className={`max-w-[85%] md:max-w-[75%] p-2.5 sm:p-3 md:p-4 rounded-2xl text-xs sm:text-sm md:text-base ${
                  message.role === "user"
                    ? "bg-blue-600 text-white rounded-tr-md"
                    : "bg-white text-gray-900 rounded-tl-md shadow-sm border border-gray-100"
                }`}
              >
                {message.role === "user" ? (
                  <div className="whitespace-pre-wrap">{message.content}</div>
                ) : (
                  <div dangerouslySetInnerHTML={{ __html: message.content }} />
                )}
              </div>
            </div>
          ))}
  
          {isLoading && (
            <div className="flex items-start space-x-2 md:space-x-4">
              <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                <Bot className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 text-white" />
              </div>
              <div className="bg-white text-gray-900 p-2.5 sm:p-3 md:p-4 rounded-2xl rounded-tl-md shadow-sm border border-gray-100">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="flex space-x-1">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div
                      className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.20s" }}
                    ></div>
                    <div
                      className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.20s" }}
                    ></div>
                  </div>
                  <span className="text-gray-600 text-xs sm:text-sm md:text-base">Thinking...</span>
                </div>
              </div>
            </div>
          )}
        </div>
  
        {/* Input Area - Sticky at bottom on mobile */}
        <div className="bg-white/95 backdrop-blur-sm border-t border-gray-200 p-3 sm:p-4 md:p-6 sticky bottom-0 z-20 md:relative md:z-auto">
          <form onSubmit={handleSubmit} className="flex space-x-2 md:space-x-4">
            <div className="flex-1 relative">
              <Input
                value={input}
                onChange={handleInputChange}
                placeholder="Ask me anything about your document..."
                className="h-9 sm:h-10 md:h-12 rounded-xl border-gray-200 focus:border-blue-400 focus:ring-blue-400 text-xs sm:text-sm md:text-base px-3 sm:px-4"
                disabled={isLoading}
              />
            </div>
            <Button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="h-9 sm:h-10 md:h-12 px-3 sm:px-4 md:px-8 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
            >
              <Send className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

