import { Brain, Linkedin, Mail, Phone, MapPin, Twitter, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Linkedin className="w-8 h-8 text-[#0A66C2]" />
                <Brain className="w-4 h-4 text-purple-400 absolute -top-1 -right-1" />
              </div>
              <span className="bg-gradient-to-r from-[#0A66C2] to-purple-400 bg-clip-text text-transparent font-bold text-xl">
                AI ProfileAnalyzer
              </span>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              Empowering professionals with AI-driven LinkedIn profile optimization. 
              Transform your career prospects with personalized insights and recommendations.
            </p>
            
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-[#0A66C2] to-blue-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer">
                <Twitter className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-gradient-to-r from-[#0A66C2] to-blue-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer">
                <Linkedin className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer">
                <Github className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Product</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">How it Works</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">API</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Integrations</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Press</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Partners</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#0A66C2] drop-shadow-sm" />
                <span className="text-white drop-shadow-sm hover:text-gray-200 transition-colors">akarshjaiswal01@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#0A66C2] drop-shadow-sm" />
                <span className="text-white drop-shadow-sm hover:text-gray-200 transition-colors">+91 9651779642</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-[#0A66C2] drop-shadow-sm" />
                <span className="text-white drop-shadow-sm hover:text-gray-200 transition-colors">Prayagraj, Uttar Pradesh, India</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <h4 className="font-semibold text-white mb-3">Stay Updated</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-[#0A66C2] text-white placeholder-gray-400"
                />
                <button className="bg-gradient-to-r from-[#0A66C2] to-purple-600 px-4 py-2 rounded-r-lg hover:from-[#0A66C2]/90 hover:to-purple-600/90 transition-all duration-300">
                  <Mail className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col lg:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 AI ProfileAnalyzer. All rights reserved.
          </p>
          
          <div className="flex space-x-6 mt-4 lg:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}