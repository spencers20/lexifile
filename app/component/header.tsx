import { FileText,Link } from "lucide-react"
import {Button} from '@/components/ui/button'

export default function Header(){
    return(
        <>
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <FileText className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">Lexifile</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition-colors">
              How it Works
            </a>
            <Link href="/chat">
              <Button>Get Started</Button>
            </Link>
          </nav>
        </div>
        </header>
        </>

    )
}