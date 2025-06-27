'use client'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, MessageSquare, Upload, Brain } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Header from "./component/header"

export default function Home(){
  return(
  <div>
    <Header/>
    
  {/* Hero Section */}
  <section className="relative py-20 px-4 overflow-hidden">
  <div className="container mx-auto">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Left Content */}
      <div className="space-y-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Unlock the Power of Your
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-400">
            {" "}
            Documents
          </span>
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
        Transform your documents into intelligent conversations. Unlock instant answers, insights, and analysis your documents.
        </p>

        {/* Key Benefits */}
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            <span className="text-gray-700">Process any document format instantly</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
            <span className="text-gray-700">Get intelligent answers in natural language</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-green-600 rounded-full"></div>
            <span className="text-gray-700">Extract insights and patterns automatically</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/chat">
            <Button
              size="lg"
              className="text-lg px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-700 hover:to-purple-700"
            >
              Start Analyzing Documents
            </Button>
          </Link>
          {/* <Button
            variant="outline"
            size="lg"
            className="text-lg px-8 py-3 bg-white text-gray-700 hover:bg-gray-50"
          >
            Watch Demo
          </Button> */}
        </div>
      </div>

      {/* Right Image */}
      <div className="relative">
        <div className="relative z-10 items-center justify-center">
          <img
            src="https://i.cdnxp.com/2024/featured/20240327071810_29651.png"
            alt="AI-powered document analysis with professional workspace showing connected AI technologies"
            width={700}
            height={500}
            className="rounded-2xl shadow-2xl w-full"
          />
        </div>

        {/* Floating Elements */}
        {/* <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center z-20">
          <Brain className="h-10 w-10 text-blue-600" />
        </div>
        <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center z-20">
          <FileText className="h-8 w-8 text-purple-600" />
        </div> */}

        {/* Background Gradient */}
        {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl transform rotate-2 -z-10"></div> */}
      </div>
    </div>
  </div>

  {/* Background Pattern */}
  <div className="absolute top-0 right-0 w-1/3 h-full opacity-5">
    <div className="w-full h-full bg-gradient-to-l from-blue-600 to-transparent"></div>
  </div>
</section>

{/* Stats Section */}
<section className="py-16 px-4 bg-white border-t border-b">
  <div className="container mx-auto">
    <div className="grid md:grid-cols-4 gap-8 text-center">
      <div>
        <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
        <div className="text-gray-600">File Formats Supported</div>
      </div>
      <div>
        <div className="text-3xl font-bold text-purple-600 mb-2">99.9%</div>
        <div className="text-gray-600">Accuracy Rate</div>
      </div>
      <div>
        <div className="text-3xl font-bold text-green-600 mb-2">5s</div>
        <div className="text-gray-600">Average Processing Time</div>
      </div>
      <div>
        <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
        <div className="text-gray-600">Available Support</div>
      </div>
    </div>
  </div>
</section>

{/* Features Section */}
<section id="features" className="py-20 px-4 bg-white">
  <div className="container mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">Revolutionize How You Work with Documents</h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Experience the future of document analysis with AI that understands context, extracts insights, and
        delivers intelligent responses in seconds.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
        <CardContent className="p-8 text-center">
          <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <Upload className="h-8 w-8 text-blue-600" />
          </div>
          <h3 className="text-2xl font-semibold mb-4">Universal Upload</h3>
          <p className="text-gray-600">
            Support for PDFs, Word docs, Excel sheets, CSVs, and more. Simply drag, drop, and start chatting.
          </p>
        </CardContent>
      </Card>

      <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
        <CardContent className="p-8 text-center">
          <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <Brain className="h-8 w-8 text-purple-600" />
          </div>
          <h3 className="text-2xl font-semibold mb-4">AI-Powered Analysis</h3>
          <p className="text-gray-600">
            Advanced AI understands context, relationships, and patterns in your documents for intelligent
            responses.
          </p>
        </CardContent>
      </Card>

      <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
        <CardContent className="p-8 text-center">
          <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <MessageSquare className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-semibold mb-4">Natural Conversations</h3>
          <p className="text-gray-600">
            Ask questions in plain English and get clear, contextual answers backed by your document content.
          </p>
        </CardContent>
      </Card>
    </div>
  </div>
</section>

{/* How It Works Section */}
<section id="how-it-works" className="py-20 px-4 bg-gray-50">
  <div className="container mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">How Lexifile Works</h2>
      <p className="text-xl text-gray-600">Three simple steps to unlock your document insights</p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      <div className="text-center">
        <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
          1
        </div>
        <h3 className="text-xl font-semibold mb-4">Upload Your Document</h3>
        <p className="text-gray-600">
          Drag and drop any document format. We'll process it securely and prepare it for analysis.
        </p>
      </div>

      <div className="text-center">
        <div className="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
          2
        </div>
        <h3 className="text-xl font-semibold mb-4">Start Asking Questions</h3>
        <p className="text-gray-600">
          Type your questions naturally. Ask for summaries, specific data points, or complex analysis.
        </p>
      </div>

      <div className="text-center">
        <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
          3
        </div>
        <h3 className="text-xl font-semibold mb-4">Get Instant Insights</h3>
        <p className="text-gray-600">
          Receive intelligent responses with citations and context from your documents.
        </p>
      </div>
    </div>
  </div>
</section>

{/* CTA Section */}
<section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
  <div className="container mx-auto text-center">
    <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Documents?</h2>
    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
      Join thousands of professionals who are already getting more insights from their data with Lexifile.
    </p>
    <Link href="/chat">
      <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
        Start Your First Chat
      </Button>
    </Link>
  </div>
</section>

{/* Footer */}
<footer className="bg-gray-900 text-white py-12 px-4">
  <div className="container mx-auto">
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <FileText className="h-6 w-6" />
        <span className="text-xl font-bold">Lexifile</span>
      </div>
      <p className="text-gray-400">© 2025 Lexifile. All rights reserved.</p>
    </div>
  </div>
</footer>
</div>

  )
  
  
}