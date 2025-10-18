import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Bell, Search, User, TrendingUp, Eye, Target, Sparkles } from 'lucide-react';
import { DashboardSidebar } from './DashboardSidebar';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Progress } from './ui/progress';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, LineChart, Line } from 'recharts';

interface DashboardProps {
  onNavigate: (page: string) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const keywordData = [
    { name: 'Leadership', value: 85 },
    { name: 'Management', value: 72 },
    { name: 'Strategy', value: 68 },
    { name: 'Innovation', value: 90 },
    { name: 'Analytics', value: 78 }
  ];

  const skillAlignmentData = [
    { skill: 'Technical Skills', score: 85 },
    { skill: 'Communication', score: 72 },
    { skill: 'Leadership', score: 90 },
    { skill: 'Problem Solving', score: 78 },
    { skill: 'Teamwork', score: 88 }
  ];

  const trendData = [
    { month: 'Jan', score: 65 },
    { month: 'Feb', score: 70 },
    { month: 'Mar', score: 75 },
    { month: 'Apr', score: 72 },
    { month: 'May', score: 82 },
    { month: 'Jun', score: 88 }
  ];

  const aiSuggestions = [
    "Add measurable achievements to your current role",
    "Include 3-5 relevant certifications",
    "Optimize your headline with industry keywords",
    "Request recommendations from recent colleagues",
    "Update your skills section with trending technologies"
  ];

  return (
    <div className="min-h-screen bg-[#F3F6F9]">
      <DashboardSidebar
        currentPage="dashboard"
        onNavigate={onNavigate}
        onLogout={() => onNavigate('landing')}
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
      />

      {/* Main Content */}
      <div className="lg:ml-72">
        {/* Top Navbar */}
        <div className="fixed top-0 right-0 left-0 lg:left-72 z-30 bg-white/80 backdrop-blur-md border-b border-gray-200 px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Search */}
            <div className="flex-1 max-w-md relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Search..."
                className="pl-10 rounded-xl bg-white/50"
              />
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative w-10 h-10 rounded-full bg-white/50 flex items-center justify-center hover:bg-white/70 transition-colors"
              >
                <Bell className="w-5 h-5 text-gray-700" />
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
                  3
                </span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/50 hover:bg-white/70 transition-colors"
              >
                <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center text-white">
                  <User className="w-4 h-4" />
                </div>
                <span className="hidden sm:block">Profile</span>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-4 sm:p-6 lg:p-8 pt-24">
          {/* Welcome Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-3xl mb-2">Welcome back, Rahul! 👋</h1>
            <p className="text-gray-600">Here's your LinkedIn profile performance overview</p>
          </motion.div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Profile Score */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(10, 102, 194, 0.2)' }}
              className="glass rounded-3xl p-6 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-gray-600 text-sm mb-1">Profile Score</p>
                  <h3 className="text-3xl">88%</h3>
                </div>
                <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center neon-glow">
                  <Target className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="relative w-24 h-24 mx-auto">
                <svg className="transform -rotate-90 w-24 h-24">
                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="#e5e7eb"
                    strokeWidth="8"
                    fill="none"
                  />
                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="url(#gradient)"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 40}`}
                    strokeDashoffset={`${2 * Math.PI * 40 * (1 - 0.88)}`}
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0A66C2" />
                      <stop offset="100%" stopColor="#6A00FF" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-xl">
                  88%
                </div>
              </div>
              <p className="text-center text-sm text-green-600 mt-2">+5% from last week</p>
            </motion.div>

            {/* Profile Views */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(10, 102, 194, 0.2)' }}
              className="glass rounded-3xl p-6 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-gray-600 text-sm mb-1">Profile Views</p>
                  <h3 className="text-3xl">2,847</h3>
                </div>
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <Eye className="w-6 h-6 text-[#0A66C2]" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">This Week</span>
                  <span>342</span>
                </div>
                <Progress value={75} className="h-2" />
              </div>
              <p className="text-sm text-green-600 mt-4">↑ 12% increase</p>
            </motion.div>

            {/* Skill Match */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(10, 102, 194, 0.2)' }}
              className="glass rounded-3xl p-6 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-gray-600 text-sm mb-1">Skill Match</p>
                  <h3 className="text-3xl">92%</h3>
                </div>
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-purple-600" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Target Role</span>
                  <span>Senior Developer</span>
                </div>
                <Progress value={92} className="h-2" />
              </div>
              <p className="text-sm text-green-600 mt-4">Excellent match!</p>
            </motion.div>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Profile Preview & AI Insights */}
            <div className="lg:col-span-2 space-y-6">
              {/* Profile Preview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="glass rounded-3xl p-6"
              >
                <h3 className="text-xl mb-4">Profile Preview</h3>
                <div className="bg-white rounded-2xl p-6 border border-gray-200">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-20 h-20 rounded-full gradient-primary flex items-center justify-center text-white text-2xl">
                      RK
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl">Rahul Kumar</h4>
                      <p className="text-gray-600">Senior Software Engineer | AI Enthusiast</p>
                      <p className="text-sm text-gray-500 mt-1">Bangalore, India · 500+ connections</p>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-gray-700">
                      Passionate software engineer with 8+ years of experience in building scalable applications. 
                      Specialized in AI/ML integration and cloud architecture.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Charts Row */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Keyword Chart */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="glass rounded-3xl p-6"
                >
                  <h3 className="text-lg mb-4">Keyword Frequency</h3>
                  <ResponsiveContainer width="100%" height={200}>
                    <BarChart data={keywordData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                      <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                      <YAxis tick={{ fontSize: 12 }} />
                      <Tooltip />
                      <Bar dataKey="value" fill="url(#barGradient)" radius={[8, 8, 0, 0]} />
                      <defs>
                        <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#0A66C2" />
                          <stop offset="100%" stopColor="#6A00FF" />
                        </linearGradient>
                      </defs>
                    </BarChart>
                  </ResponsiveContainer>
                </motion.div>

                {/* Trend Chart */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="glass rounded-3xl p-6"
                >
                  <h3 className="text-lg mb-4">Profile Score Trend</h3>
                  <ResponsiveContainer width="100%" height={200}>
                    <LineChart data={trendData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                      <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                      <YAxis tick={{ fontSize: 12 }} />
                      <Tooltip />
                      <Line type="monotone" dataKey="score" stroke="#0A66C2" strokeWidth={3} dot={{ fill: '#0A66C2', r: 5 }} />
                    </LineChart>
                  </ResponsiveContainer>
                </motion.div>
              </div>
            </div>

            {/* AI Insights Panel */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="glass-dark rounded-3xl p-6 h-fit neon-glow"
            >
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-[#0A66C2]" />
                <h3 className="text-xl">AI Insights</h3>
              </div>
              <div className="space-y-3">
                {aiSuggestions.map((suggestion, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="bg-white/50 rounded-xl p-4 hover:bg-white/70 transition-colors cursor-pointer"
                  >
                    <p className="text-sm text-gray-700">{suggestion}</p>
                  </motion.div>
                ))}
              </div>
              <Button
                onClick={() => onNavigate('reports')}
                className="w-full mt-6 gradient-primary text-white rounded-xl"
              >
                View Full Report
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
