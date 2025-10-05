import { Button } from "./ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-[#0A66C2]/20 to-purple-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#0A66C2]/10 to-purple-600/10 border border-[#0A66C2]/20">
            <Sparkles className="w-4 h-4 text-[#0A66C2] mr-2" />
            <span className="text-sm text-[#0A66C2]">AI-Powered Professional Enhancement</span>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-[#0A66C2] via-purple-600 to-cyan-500 bg-clip-text text-transparent">
              Optimize Your LinkedIn Profile
            </span>
            <br />
            <span className="text-gray-900">with AI</span>
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
            Get personalized, recruiter-ready insights to boost your professional brand. 
            Our AI analyzes your profile and provides actionable recommendations for maximum impact.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-[#0A66C2] to-purple-600 hover:from-[#0A66C2]/90 hover:to-purple-600/90 text-white rounded-full px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              Analyze My Profile
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full px-8 py-4 border-2 border-[#0A66C2] text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white"
            >
              Watch Demo
            </Button>
          </div>
          
          <div className="flex items-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
              Free Analysis
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
              Instant Results
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-purple-500 rounded-full mr-2" />
              Privacy Protected
            </div>
          </div>
        </div>

        {/* Right Content - 3D Illustration */}
        <div className="relative">
          <div className="relative z-10">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1673255745677-e36f618550d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2UlMjBicmFpbiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU3NDk0MTgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="AI Brain Technology"
              className="rounded-2xl shadow-2xl"
            />
          </div>
          
          {/* Floating Cards */}
          <div className="absolute -top-4 -left-4 bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-[#0A66C2] to-purple-600 rounded-full flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-900">AI Analysis</div>
                <div className="text-xs text-gray-500">95% Accuracy</div>
              </div>
            </div>
          </div>
          
          <div className="absolute -bottom-4 -right-4 bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                <ArrowRight className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-900">Profile Score</div>
                <div className="text-xs text-gray-500">8.7/10</div>
              </div>
            </div>
          </div>
          
          {/* Glowing Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A66C2]/20 to-purple-600/20 rounded-2xl blur-3xl -z-10 scale-110" />
        </div>
      </div>
    </section>
  );
}