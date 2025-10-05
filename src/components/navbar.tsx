import { Button } from "./ui/button";
import { Brain, Linkedin } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-200/50 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Linkedin className="w-8 h-8 text-[#0A66C2]" />
              <Brain className="w-4 h-4 text-purple-600 absolute -top-1 -right-1" />
            </div>
            <span className="bg-gradient-to-r from-[#0A66C2] to-purple-600 bg-clip-text text-transparent font-bold text-xl">
              AI ProfileAnalyzer
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-[#0A66C2] transition-colors">
              Home
            </a>
            <a href="#features" className="text-gray-700 hover:text-[#0A66C2] transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-gray-700 hover:text-[#0A66C2] transition-colors">
              How It Works
            </a>
            <a href="#contact" className="text-gray-700 hover:text-[#0A66C2] transition-colors">
              Contact
            </a>
            <Button variant="outline" className="rounded-full border-[#0A66C2] text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white">
              Login
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}