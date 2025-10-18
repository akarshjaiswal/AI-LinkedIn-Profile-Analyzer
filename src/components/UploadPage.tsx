import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, TrendingUp, AlertCircle, Lightbulb, Stars, BarChart3, CheckCircle, ArrowRight } from 'lucide-react';
import { DashboardSidebar } from './DashboardSidebar';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Progress } from './ui/progress';

interface UploadPageProps {
  onNavigate: (page: string) => void;
}

interface AIAnalysisResult {
  scoreBefore: number;
  scoreAfter: number;
  problems: string[];
  suggestions: string[];
  enhanced: {
    headline: string;
    about: string;
    experience: string;
  };
}

export const UploadPage: React.FC<UploadPageProps> = ({ onNavigate }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [analysisProgress, setAnalysisProgress] = useState(0);
  
  const [formData, setFormData] = useState({
    name: '',
    headline: '',
    about: '',
    skills: '',
    experience: '',
    education: ''
  });

  const [aiResults, setAiResults] = useState<AIAnalysisResult>({
    scoreBefore: 0,
    scoreAfter: 0,
    problems: [],
    suggestions: [],
    enhanced: {
      headline: '',
      about: '',
      experience: ''
    }
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const generateAIAnalysis = (): AIAnalysisResult => {
    // Simulate AI analysis with mock data
    const scoreBefore = Math.floor(Math.random() * 25) + 50; // 50-75
    const scoreAfter = Math.floor(Math.random() * 20) + 80; // 80-100

    return {
      scoreBefore,
      scoreAfter,
      problems: [
        'Headline lacks industry-specific keywords and measurable achievements',
        'About section is too generic and doesn\'t showcase unique value proposition',
        'Experience descriptions missing quantifiable results and impact metrics',
        'Skills section not aligned with current job market trends',
        'Missing power words and action verbs in professional summary'
      ],
      suggestions: [
        'Add specific metrics and KPIs to demonstrate your impact (e.g., "Increased revenue by 40%")',
        'Include trending industry keywords: AI/ML, Cloud Computing, Data Analytics, DevOps',
        'Start experience bullets with strong action verbs: Led, Architected, Optimized, Spearheaded',
        'Highlight 3-5 major achievements in your About section with concrete numbers',
        'Request recommendations from recent colleagues and supervisors',
        'Add relevant certifications and online courses to boost credibility'
      ],
      enhanced: {
        headline: formData.headline 
          ? `${formData.headline} | Driving Innovation & Growth | AI/ML Specialist | 10+ Years Experience`
          : 'Senior Software Engineer | AI/ML Specialist | Driving Innovation & Scalable Solutions | 10+ Years Experience',
        about: formData.about 
          ? `${formData.about}\n\n✨ Enhanced Version:\n\nResults-driven professional with a proven track record of delivering high-impact solutions. Specialized in leveraging cutting-edge technologies to solve complex business challenges.\n\n🎯 Key Achievements:\n• Led cross-functional teams to deliver projects 30% ahead of schedule\n• Architected scalable systems handling 10M+ daily users\n• Reduced operational costs by 40% through innovative automation\n• Mentored 15+ junior developers, fostering technical excellence\n\n💡 Core Expertise: Strategic Planning • Technical Leadership • Innovation • Problem Solving • Team Building`
          : '✨ AI-Enhanced About Section:\n\nResults-driven professional with a proven track record of delivering high-impact solutions. Specialized in leveraging cutting-edge technologies to solve complex business challenges.\n\n🎯 Key Achievements:\n• Led cross-functional teams to deliver projects 30% ahead of schedule\n• Architected scalable systems handling 10M+ daily users\n• Reduced operational costs by 40% through innovative automation\n• Mentored 15+ junior developers, fostering technical excellence',
        experience: formData.experience
          ? `${formData.experience}\n\n✨ Enhanced Version:\n\n🚀 Senior Software Engineer | Tech Corp | 2020 - Present\n• Spearheaded development of AI-powered analytics platform, increasing user engagement by 45%\n• Architected microservices infrastructure serving 5M+ users with 99.9% uptime\n• Led team of 8 engineers in agile environment, delivering 12+ major features\n• Reduced deployment time by 60% through CI/CD pipeline optimization\n\n💼 Software Engineer | Innovation Labs | 2018 - 2020\n• Developed customer-facing features used by 2M+ active users\n• Improved application performance by 50% through code optimization\n• Collaborated with product team to define technical requirements\n• Implemented automated testing, reducing bugs by 40%`
          : '✨ AI-Enhanced Experience:\n\n🚀 Senior Software Engineer | Tech Corp | 2020 - Present\n• Spearheaded development of AI-powered analytics platform, increasing user engagement by 45%\n• Architected microservices infrastructure serving 5M+ users with 99.9% uptime\n• Led team of 8 engineers in agile environment, delivering 12+ major features\n• Reduced deployment time by 60% through CI/CD pipeline optimization'
      }
    };
  };

  const handleRunAnalysis = () => {
    setIsAnalyzing(true);
    setAnalysisProgress(0);

    // Simulate analysis progress
    const interval = setInterval(() => {
      setAnalysisProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsAnalyzing(false);
          setShowResults(true);
          
          // Generate AI results
          const results = generateAIAnalysis();
          setAiResults(results);
          
          return 100;
        }
        return prev + 5;
      });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-[#F3F6F9]">
      <DashboardSidebar
        currentPage="upload"
        onNavigate={onNavigate}
        onLogout={() => onNavigate('landing')}
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
      />

      <div className="lg:ml-72">
        <div className="p-4 sm:p-6 lg:p-8 pt-8 min-h-screen">
          {/* Animated Background Pattern */}
          <div className="fixed inset-0 -z-10 opacity-10">
            <div className="absolute inset-0 gradient-primary animate-gradient"></div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-5xl mx-auto"
          >
            {/* Header */}
            <div className="text-center mb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200 }}
                className="w-20 h-20 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4 neon-glow"
              >
                <Sparkles className="w-10 h-10 text-white" />
              </motion.div>
              <h1 className="text-4xl mb-4">AI Profile Analyzer</h1>
              <p className="text-xl text-gray-600">
                Copy-paste your LinkedIn sections and get AI-powered insights
              </p>
            </div>

            {/* Input Form */}
            {!showResults && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass rounded-3xl p-6 sm:p-8 mb-8"
              >
                <div className="space-y-6">
                  {/* Name */}
                  <div>
                    <Label htmlFor="name" className="text-base mb-2 block">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="e.g., Rahul Kumar"
                      className="h-12 rounded-xl bg-white/50"
                    />
                  </div>

                  {/* Headline */}
                  <div>
                    <Label htmlFor="headline" className="text-base mb-2 block">
                      LinkedIn Headline *
                    </Label>
                    <Input
                      id="headline"
                      value={formData.headline}
                      onChange={(e) => handleInputChange('headline', e.target.value)}
                      placeholder="e.g., Senior Software Engineer at Tech Corp"
                      className="h-12 rounded-xl bg-white/50"
                    />
                  </div>

                  {/* About */}
                  <div>
                    <Label htmlFor="about" className="text-base mb-2 block">
                      About Section
                    </Label>
                    <Textarea
                      id="about"
                      value={formData.about}
                      onChange={(e) => handleInputChange('about', e.target.value)}
                      placeholder="Paste your LinkedIn About/Summary section here..."
                      className="min-h-32 rounded-xl bg-white/50 resize-y"
                      rows={4}
                    />
                  </div>

                  {/* Skills */}
                  <div>
                    <Label htmlFor="skills" className="text-base mb-2 block">
                      Skills (comma-separated)
                    </Label>
                    <Textarea
                      id="skills"
                      value={formData.skills}
                      onChange={(e) => handleInputChange('skills', e.target.value)}
                      placeholder="e.g., JavaScript, React, Node.js, Python, AI/ML, Cloud Computing"
                      className="min-h-24 rounded-xl bg-white/50 resize-y"
                      rows={3}
                    />
                  </div>

                  {/* Experience */}
                  <div>
                    <Label htmlFor="experience" className="text-base mb-2 block">
                      Experience
                    </Label>
                    <Textarea
                      id="experience"
                      value={formData.experience}
                      onChange={(e) => handleInputChange('experience', e.target.value)}
                      placeholder="Paste your work experience here..."
                      className="min-h-40 rounded-xl bg-white/50 resize-y"
                      rows={5}
                    />
                  </div>

                  {/* Education */}
                  <div>
                    <Label htmlFor="education" className="text-base mb-2 block">
                      Education
                    </Label>
                    <Textarea
                      id="education"
                      value={formData.education}
                      onChange={(e) => handleInputChange('education', e.target.value)}
                      placeholder="Paste your education details here..."
                      className="min-h-24 rounded-xl bg-white/50 resize-y"
                      rows={3}
                    />
                  </div>
                </div>

                {/* Analysis Progress */}
                <AnimatePresence>
                  {isAnalyzing && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="mt-6 bg-white rounded-2xl p-6"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-[#0A66C2] animate-pulse" />
                          AI is analyzing your profile...
                        </span>
                        <span className="text-sm">{analysisProgress}%</span>
                      </div>
                      <Progress value={analysisProgress} className="h-3" />
                      <p className="text-xs text-gray-500 mt-3 text-center">
                        Detecting problems, generating suggestions, and creating enhanced content...
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Run Analysis Button */}
                <Button
                  onClick={handleRunAnalysis}
                  disabled={isAnalyzing || !formData.name || !formData.headline}
                  className="w-full gradient-primary text-white rounded-xl py-6 mt-6 neon-glow disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isAnalyzing ? (
                    <>
                      <Sparkles className="w-5 h-5 mr-2 animate-pulse" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5 mr-2" />
                      RUN AI ANALYSIS
                    </>
                  )}
                </Button>

                {(!formData.name || !formData.headline) && (
                  <p className="text-sm text-gray-500 text-center mt-3">
                    * Name and Headline are required fields
                  </p>
                )}
              </motion.div>
            )}

            {/* AI Analysis Results */}
            <AnimatePresence>
              {showResults && (
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  {/* Header with back button */}
                  <div className="flex items-center justify-between">
                    <h2 className="text-3xl flex items-center gap-3">
                      🧠 Profile Analysis Result
                    </h2>
                    <Button
                      onClick={() => {
                        setShowResults(false);
                        setAnalysisProgress(0);
                      }}
                      variant="outline"
                      className="rounded-xl"
                    >
                      Analyze Again
                    </Button>
                  </div>

                  {/* Score Comparison */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 }}
                    className="glass rounded-3xl p-6 sm:p-8"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <BarChart3 className="w-6 h-6 text-[#0A66C2]" />
                      <h3 className="text-2xl">Profile Score Analysis</h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Before Score */}
                      <div className="bg-white/50 rounded-2xl p-6 text-center">
                        <p className="text-gray-600 mb-3">Before Optimization</p>
                        <div className="relative inline-block">
                          <svg className="w-32 h-32 transform -rotate-90">
                            <circle
                              cx="64"
                              cy="64"
                              r="56"
                              stroke="#e5e7eb"
                              strokeWidth="8"
                              fill="none"
                            />
                            <circle
                              cx="64"
                              cy="64"
                              r="56"
                              stroke="#ef4444"
                              strokeWidth="8"
                              fill="none"
                              strokeDasharray={`${2 * Math.PI * 56}`}
                              strokeDashoffset={`${2 * Math.PI * 56 * (1 - aiResults.scoreBefore / 100)}`}
                              strokeLinecap="round"
                            />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center text-3xl">
                            {aiResults.scoreBefore}%
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mt-3">Needs Improvement</p>
                      </div>

                      {/* After Score */}
                      <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6 text-center border-2 border-green-300">
                        <p className="text-gray-600 mb-3">After AI Enhancement</p>
                        <div className="relative inline-block">
                          <svg className="w-32 h-32 transform -rotate-90">
                            <circle
                              cx="64"
                              cy="64"
                              r="56"
                              stroke="#e5e7eb"
                              strokeWidth="8"
                              fill="none"
                            />
                            <circle
                              cx="64"
                              cy="64"
                              r="56"
                              stroke="url(#scoreGradient)"
                              strokeWidth="8"
                              fill="none"
                              strokeDasharray={`${2 * Math.PI * 56}`}
                              strokeDashoffset={`${2 * Math.PI * 56 * (1 - aiResults.scoreAfter / 100)}`}
                              strokeLinecap="round"
                            />
                            <defs>
                              <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#10b981" />
                                <stop offset="100%" stopColor="#0A66C2" />
                              </linearGradient>
                            </defs>
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center text-3xl">
                            {aiResults.scoreAfter}%
                          </div>
                        </div>
                        <p className="text-sm text-green-600 mt-3 flex items-center justify-center gap-1">
                          <TrendingUp className="w-4 h-4" />
                          +{aiResults.scoreAfter - aiResults.scoreBefore}% Improvement
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Problems Detected */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="glass rounded-3xl p-6 sm:p-8"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <AlertCircle className="w-6 h-6 text-orange-500" />
                      <h3 className="text-2xl">⚠️ Detected Problems</h3>
                    </div>
                    <div className="space-y-3">
                      {aiResults.problems.map((problem, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + index * 0.05 }}
                          className="bg-orange-50 border-l-4 border-orange-400 rounded-xl p-4 flex items-start gap-3"
                        >
                          <span className="text-orange-500 mt-1">⚠️</span>
                          <p className="text-gray-700 flex-1">{problem}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* AI Suggestions */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="glass rounded-3xl p-6 sm:p-8"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <Lightbulb className="w-6 h-6 text-yellow-500" />
                      <h3 className="text-2xl">💡 AI Suggestions & Improvements</h3>
                    </div>
                    <div className="space-y-3">
                      {aiResults.suggestions.map((suggestion, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + index * 0.05 }}
                          className="bg-blue-50 border-l-4 border-blue-400 rounded-xl p-4 flex items-start gap-3"
                        >
                          <span className="text-blue-500 mt-1">💡</span>
                          <p className="text-gray-700 flex-1">{suggestion}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Enhanced Content */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="glass-dark rounded-3xl p-6 sm:p-8 neon-glow"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <Stars className="w-6 h-6 text-[#0A66C2]" />
                      <h3 className="text-2xl">✨ Enhanced Version of Your Content</h3>
                    </div>

                    <div className="space-y-6">
                      {/* Enhanced Headline */}
                      <div className="bg-white/50 rounded-2xl p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <Sparkles className="w-5 h-5 text-[#0A66C2]" />
                          <h4 className="text-lg">Enhanced Headline</h4>
                        </div>
                        <p className="text-gray-700 leading-relaxed">{aiResults.enhanced.headline}</p>
                      </div>

                      {/* Enhanced About */}
                      <div className="bg-white/50 rounded-2xl p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <Sparkles className="w-5 h-5 text-[#0A66C2]" />
                          <h4 className="text-lg">Enhanced About Section</h4>
                        </div>
                        <p className="text-gray-700 leading-relaxed whitespace-pre-line">{aiResults.enhanced.about}</p>
                      </div>

                      {/* Enhanced Experience */}
                      <div className="bg-white/50 rounded-2xl p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <Sparkles className="w-5 h-5 text-[#0A66C2]" />
                          <h4 className="text-lg">Enhanced Experience</h4>
                        </div>
                        <p className="text-gray-700 leading-relaxed whitespace-pre-line">{aiResults.enhanced.experience}</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Action Buttons */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-wrap gap-4 justify-center pt-4"
                  >
                    <Button
                      onClick={() => onNavigate('dashboard')}
                      variant="outline"
                      className="rounded-xl px-8 py-6 border-2"
                    >
                      Back to Dashboard
                    </Button>
                    <Button
                      onClick={() => onNavigate('reports')}
                      className="gradient-primary text-white rounded-xl px-8 py-6 neon-glow"
                    >
                      View Full Report
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Info Cards */}
            {!showResults && !isAnalyzing && (
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                {[
                  { icon: '🤖', title: 'AI-Powered', desc: 'Advanced algorithms analyze your profile' },
                  { icon: '⚡', title: 'Instant Results', desc: 'Get insights in seconds' },
                  { icon: '🎯', title: 'Actionable Tips', desc: 'Specific recommendations to improve' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="glass-dark rounded-2xl p-6 text-center"
                  >
                    <div className="text-4xl mb-3">{item.icon}</div>
                    <h4 className="mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
