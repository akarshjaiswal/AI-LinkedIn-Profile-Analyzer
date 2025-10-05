import { MessageCircle, Gauge, FileDown, ArrowRight } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function Features() {
  const features = [
    {
      icon: MessageCircle,
      title: "Smart AI Suggestions",
      description: "Get personalized recommendations to optimize your headline, summary, and experience sections with AI-powered insights.",
      gradient: "from-[#0A66C2] to-blue-600",
      bgGradient: "from-blue-50 to-blue-100/50"
    },
    {
      icon: Gauge,
      title: "Recruiter-Optimized Scoring",
      description: "Real-time scoring system that evaluates your profile against recruiter preferences and ATS algorithms.",
      gradient: "from-purple-600 to-purple-700",
      bgGradient: "from-purple-50 to-purple-100/50"
    },
    {
      icon: FileDown,
      title: "Downloadable Reports",
      description: "Comprehensive PDF reports with detailed analysis, improvement suggestions, and before/after comparisons.",
      gradient: "from-cyan-500 to-cyan-600",
      bgGradient: "from-cyan-50 to-cyan-100/50"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#0A66C2]/10 to-purple-600/10 border border-[#0A66C2]/20 mb-6">
            <span className="text-sm text-[#0A66C2]">Powerful Features</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Everything you need to
            <span className="bg-gradient-to-r from-[#0A66C2] to-purple-600 bg-clip-text text-transparent"> supercharge</span>
            <br />your LinkedIn profile
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI-powered platform provides comprehensive analysis and actionable insights 
            to help you stand out to recruiters and build a stronger professional brand.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden bg-white/60 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <CardContent className="relative p-8">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700">
                  {feature.description}
                </p>

                {/* Learn More Link */}
                <div className="flex items-center text-sm text-[#0A66C2] group-hover:text-purple-600 transition-colors duration-300">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>

                {/* Glassmorphism Border */}
                <div className="absolute inset-0 rounded-lg border border-white/20 group-hover:border-white/40 transition-all duration-500" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-[#0A66C2] to-purple-600 border-2 border-white flex items-center justify-center text-white text-xs">
                  {i}
                </div>
              ))}
            </div>
            <span className="text-gray-600">Join 10,000+ professionals who've enhanced their profiles</span>
          </div>
        </div>
      </div>
    </section>
  );
}