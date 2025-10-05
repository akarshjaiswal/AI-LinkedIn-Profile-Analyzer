import { Upload, Brain, Download, ArrowRight, CheckCircle } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: Upload,
      title: "Upload Profile",
      description: "Simply connect your LinkedIn profile or upload your resume. Our secure system ensures your data privacy.",
      step: "01",
      color: "from-[#0A66C2] to-blue-600"
    },
    {
      icon: Brain,
      title: "AI Analysis",
      description: "Our advanced AI algorithms analyze your profile against thousands of successful profiles and recruiter preferences.",
      step: "02",
      color: "from-purple-600 to-purple-700"
    },
    {
      icon: Download,
      title: "Download Report",
      description: "Get your comprehensive report with personalized suggestions, scoring, and actionable improvement recommendations.",
      step: "03",
      color: "from-cyan-500 to-cyan-600"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#0A66C2]/10 to-purple-600/10 border border-[#0A66C2]/20 mb-6">
            <span className="text-sm text-[#0A66C2]">Simple Process</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            How it works
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get professional insights in just three simple steps. 
            Our streamlined process ensures you get actionable results quickly.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#0A66C2] via-purple-600 to-cyan-500 transform -translate-y-1/2 z-0" />
          
          <div className="relative z-10 grid lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Card */}
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg`}>
                      <span className="text-white font-bold text-sm">{step.step}</span>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Features List */}
                  <div className="mt-6 space-y-2">
                    {index === 0 && (
                      <>
                        <div className="flex items-center text-sm text-gray-500">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          LinkedIn integration
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          Secure & private
                        </div>
                      </>
                    )}
                    {index === 1 && (
                      <>
                        <div className="flex items-center text-sm text-gray-500">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          Advanced algorithms
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          Real-time scoring
                        </div>
                      </>
                    )}
                    {index === 2 && (
                      <>
                        <div className="flex items-center text-sm text-gray-500">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          Detailed insights
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          PDF export
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Arrow (Desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-20">
                    <div className="w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center">
                      <ArrowRight className="w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to optimize your LinkedIn profile?
            </h3>
            <p className="text-gray-600 mb-6">
              Join thousands of professionals who've enhanced their career prospects
            </p>
            <button className="bg-gradient-to-r from-[#0A66C2] to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 group">
              Get Started Now
              <ArrowRight className="w-5 h-5 ml-2 inline group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}