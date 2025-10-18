import React from 'react';
import { motion } from 'motion/react';
import { Brain, Target, TrendingUp, Download, Play, Linkedin, Github, Mail, Star } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './imagewithfallback/ImageWithFallback';

interface LandingPageProps {
  onNavigate: (page: string) => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
  const features = [
    {
      icon: Brain,
      title: 'Smart AI Suggestions',
      description: 'Get personalized recommendations powered by advanced AI to optimize every section of your profile.'
    },
    {
      icon: Target,
      title: 'Recruiter Scoring System',
      description: 'See how recruiters view your profile with our proprietary scoring algorithm.'
    },
    {
      icon: Download,
      title: 'Profile Report Download',
      description: 'Export detailed analytics and improvement suggestions in PDF or Excel format.'
    }
  ];

  const steps = [
    {
      number: '01',
      title: 'Upload Your Profile',
      description: 'Share your LinkedIn profile URL or upload your resume.'
    },
    {
      number: '02',
      title: 'AI Analyzes in Seconds',
      description: 'Our AI scans every detail to identify improvement opportunities.'
    },
    {
      number: '03',
      title: 'Get Instant Reports',
      description: 'Receive actionable insights with visual charts and recommendations.'
    }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Software Engineer',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      rating: 5,
      text: 'This tool helped me land my dream job! The AI suggestions were spot-on.'
    },
    {
      name: 'Arjun Patel',
      role: 'Product Manager',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      rating: 5,
      text: 'Incredible insights! My profile views increased by 300% in just one week.'
    },
    {
      name: 'Ananya Reddy',
      role: 'Marketing Director',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
      rating: 5,
      text: 'The recruiter scoring system is a game-changer. Highly recommended!'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Animated Background */}
        <div className="absolute inset-0 gradient-primary animate-gradient opacity-90"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl text-white mb-6">
                Optimize Your LinkedIn Profile with AI
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Upload your LinkedIn data to get smart recruiter insights and personalized recommendations.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  onClick={() => onNavigate('upload')}
                  className="bg-white text-[#0A66C2] hover:bg-white/90 neon-glow px-8 py-6"
                >
                  ANALYZE NOW
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 px-8 py-6"
                >
                  <Play className="w-4 h-4 mr-2" />
                  WATCH DEMO
                </Button>
              </div>
            </motion.div>

            {/* Right Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="animate-float">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1655393001768-d946c97d6fd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwQUklMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MDY3NjU2OXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="AI Analysis"
                  className="w-full h-auto rounded-3xl shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-600">Everything you need to stand out to recruiters</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(10, 102, 194, 0.2)' }}
                className="glass-dark rounded-3xl p-8 text-center transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-6 neon-glow">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-[#F3F6F9]">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Get started in three simple steps</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                <div className="glass rounded-3xl p-8">
                  <div className="text-6xl gradient-primary bg-clip-text text-transparent mb-6 opacity-50">
                    {step.number}
                  </div>
                  <h3 className="text-2xl mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#0A66C2] to-[#6A00FF]"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl mb-4">What Our Users Say</h2>
            <p className="text-xl text-gray-600">Join thousands of satisfied professionals</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="glass-dark rounded-3xl p-8"
              >
                <div className="flex items-center gap-4 mb-4">
                  <ImageWithFallback
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4>{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700">{testimonial.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600">Have questions? We'd love to hear from you</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-dark rounded-3xl p-8"
            >
              <form className="space-y-6">
                <div>
                  <label className="block mb-2 text-sm">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl bg-white/50 border border-gray-200 focus:border-[#0A66C2] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm">Email</label>
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/50 border border-gray-200 focus:border-[#0A66C2] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm">Message</label>
                  <textarea
                    rows={5}
                    placeholder="Tell us how we can help..."
                    className="w-full px-4 py-3 rounded-xl bg-white/50 border border-gray-200 focus:border-[#0A66C2] focus:outline-none transition-colors resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full gradient-primary text-white rounded-xl h-12 neon-glow"
                >
                  SEND MESSAGE
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="glass-dark rounded-3xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center neon-glow">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg mb-1">Email Us</h4>
                    <p className="text-gray-600">support@aiprofileanalyzer.com</p>
                    <p className="text-gray-600">contact@aiprofileanalyzer.com</p>
                  </div>
                </div>
              </div>

              <div className="glass-dark rounded-3xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center neon-glow">
                    <Linkedin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg mb-1">Connect on LinkedIn</h4>
                    <p className="text-gray-600">Follow us for updates and tips</p>
                    <a href="#" className="text-[#0A66C2] hover:underline">@AIProfileAnalyzer</a>
                  </div>
                </div>
              </div>

              <div className="glass-dark rounded-3xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center neon-glow">
                    <Github className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg mb-1">Open Source</h4>
                    <p className="text-gray-600">Check out our repositories</p>
                    <a href="#" className="text-[#0A66C2] hover:underline">github.com/aiprofileanalyzer</a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="gradient-footer text-white py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Brain className="w-8 h-8" />
                <span className="text-xl">AI Profile Analyzer</span>
              </div>
              <p className="text-white/80">
                Empowering professionals to create outstanding LinkedIn profiles with AI-driven insights.
              </p>
            </div>
            <div>
              <h4 className="text-lg mb-4">Quick Links</h4>
              <div className="space-y-2">
                <button className="block hover:text-[#1DA1F2] transition-colors">About Us</button>
                <button className="block hover:text-[#1DA1F2] transition-colors">Privacy Policy</button>
                <button className="block hover:text-[#1DA1F2] transition-colors">Terms of Service</button>
                <button className="block hover:text-[#1DA1F2] transition-colors">Support</button>
              </div>
            </div>
            <div>
              <h4 className="text-lg mb-4">Connect With Us</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/80">
            © 2025 AI Profile Analyzer | Designed by Akarsh Jaiswal
          </div>
        </div>
      </footer>
    </div>
  );
};
