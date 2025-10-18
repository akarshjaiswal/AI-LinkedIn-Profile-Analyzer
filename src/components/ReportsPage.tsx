import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Download, FileText, FileSpreadsheet, TrendingUp, TrendingDown } from 'lucide-react';
import { DashboardSidebar } from './DashboardSidebar';
import { Button } from './ui/button';
import { PieChart, Pie, Cell, BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

interface ReportsPageProps {
  onNavigate: (page: string) => void;
}

export const ReportsPage: React.FC<ReportsPageProps> = ({ onNavigate }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const beforeData = {
    score: 65,
    views: 1200,
    connections: 450,
    engagement: 3.2
  };

  const afterData = {
    score: 88,
    views: 2847,
    connections: 650,
    engagement: 7.8
  };

  const scoreComparisonData = [
    { name: 'Before', value: 35, color: '#ef4444' },
    { name: 'After', value: 88, color: '#10b981' }
  ];

  const skillMatchData = [
    { name: 'Jan', before: 45, after: 72 },
    { name: 'Feb', before: 52, after: 78 },
    { name: 'Mar', before: 58, after: 85 },
    { name: 'Apr', before: 62, after: 88 },
    { name: 'May', before: 65, after: 90 },
    { name: 'Jun', before: 65, after: 92 }
  ];

  const engagementData = [
    { month: 'Jan', value: 120 },
    { month: 'Feb', value: 180 },
    { month: 'Mar', value: 250 },
    { month: 'Apr', value: 320 },
    { month: 'May', value: 420 },
    { month: 'Jun', value: 580 }
  ];

  const radarData = [
    { category: 'Completeness', before: 60, after: 95 },
    { category: 'Keywords', before: 45, after: 88 },
    { category: 'Experience', before: 70, after: 90 },
    { category: 'Skills', before: 55, after: 92 },
    { category: 'Network', before: 65, after: 85 }
  ];

  const improvements = [
    { metric: 'Profile Score', before: '65%', after: '88%', change: '+23%', positive: true },
    { metric: 'Profile Views', before: '1,200', after: '2,847', change: '+137%', positive: true },
    { metric: 'Skill Match', before: '65%', after: '92%', change: '+27%', positive: true },
    { metric: 'Engagement Rate', before: '3.2%', after: '7.8%', change: '+143%', positive: true }
  ];

  const COLORS = ['#ef4444', '#10b981'];

  const handleDownload = (format: 'pdf' | 'excel') => {
    // Simulate download
    alert(`Downloading report as ${format.toUpperCase()}...`);
  };

  return (
    <div className="min-h-screen bg-[#F3F6F9]">
      <DashboardSidebar
        currentPage="reports"
        onNavigate={onNavigate}
        onLogout={() => onNavigate('landing')}
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
      />

      <div className="lg:ml-72">
        <div className="p-4 sm:p-6 lg:p-8 pt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div>
                <h1 className="text-4xl mb-2">Detailed AI Report</h1>
                <p className="text-xl text-gray-600">
                  Comprehensive analysis of your profile optimization
                </p>
              </div>
              <div className="flex gap-3">
                <Button
                  onClick={() => handleDownload('pdf')}
                  className="gradient-primary text-white rounded-xl neon-glow"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
                <Button
                  onClick={() => handleDownload('excel')}
                  variant="outline"
                  className="rounded-xl border-2"
                >
                  <FileSpreadsheet className="w-4 h-4 mr-2" />
                  Download Excel
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Comparison Cards */}
          <div className="grid lg:grid-cols-4 gap-6 mb-8">
            {improvements.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass rounded-3xl p-6"
              >
                <p className="text-sm text-gray-600 mb-3">{item.metric}</p>
                <div className="flex items-end gap-3 mb-3">
                  <div className="flex-1">
                    <p className="text-xs text-gray-500">Before</p>
                    <p className="text-2xl text-red-600">{item.before}</p>
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-gray-500">After</p>
                    <p className="text-2xl text-green-600">{item.after}</p>
                  </div>
                </div>
                <div className={`flex items-center gap-1 text-sm ${item.positive ? 'text-green-600' : 'text-red-600'}`}>
                  {item.positive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                  <span>{item.change}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Before/After Comparison */}
          <div className="grid lg:grid-cols-2 gap-6 mb-8">
            {/* Before Panel */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="glass rounded-3xl p-6 border-2 border-red-200"
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <h3 className="text-xl">Before Optimization</h3>
              </div>
              <div className="bg-white rounded-2xl p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b">
                    <span className="text-gray-600">Profile Completeness</span>
                    <span className="text-red-600">60%</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b">
                    <span className="text-gray-600">Keyword Optimization</span>
                    <span className="text-red-600">45%</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b">
                    <span className="text-gray-600">Experience Details</span>
                    <span className="text-red-600">70%</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b">
                    <span className="text-gray-600">Skills Match</span>
                    <span className="text-red-600">55%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Network Score</span>
                    <span className="text-red-600">65%</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* After Panel */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="glass rounded-3xl p-6 border-2 border-green-200"
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <h3 className="text-xl">After Optimization</h3>
              </div>
              <div className="bg-white rounded-2xl p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b">
                    <span className="text-gray-600">Profile Completeness</span>
                    <span className="text-green-600">95%</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b">
                    <span className="text-gray-600">Keyword Optimization</span>
                    <span className="text-green-600">88%</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b">
                    <span className="text-gray-600">Experience Details</span>
                    <span className="text-green-600">90%</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b">
                    <span className="text-gray-600">Skills Match</span>
                    <span className="text-green-600">92%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Network Score</span>
                    <span className="text-green-600">85%</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Charts Grid */}
          <div className="grid lg:grid-cols-2 gap-6 mb-8">
            {/* Score Comparison Donut */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="glass rounded-3xl p-6"
            >
              <h3 className="text-xl mb-6">Profile Score Comparison</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={scoreComparisonData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {scoreComparisonData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex justify-center gap-6 mt-4">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-red-500"></div>
                  <span className="text-sm">Before: 35%</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-green-500"></div>
                  <span className="text-sm">After: 88%</span>
                </div>
              </div>
            </motion.div>

            {/* Radar Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="glass rounded-3xl p-6"
            >
              <h3 className="text-xl mb-6">Multi-Dimensional Analysis</h3>
              <ResponsiveContainer width="100%" height={300}>
                <RadarChart data={radarData}>
                  <PolarGrid stroke="#e5e7eb" />
                  <PolarAngleAxis dataKey="category" tick={{ fontSize: 12 }} />
                  <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fontSize: 10 }} />
                  <Radar name="Before" dataKey="before" stroke="#ef4444" fill="#ef4444" fillOpacity={0.3} />
                  <Radar name="After" dataKey="after" stroke="#10b981" fill="#10b981" fillOpacity={0.3} />
                  <Legend />
                  <Tooltip />
                </RadarChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Skill Match Improvement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="glass rounded-3xl p-6"
            >
              <h3 className="text-xl mb-6">Skill Match Improvement</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={skillMatchData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="before" fill="#ef4444" radius={[8, 8, 0, 0]} />
                  <Bar dataKey="after" fill="#10b981" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Engagement Over Time */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="glass rounded-3xl p-6"
            >
              <h3 className="text-xl mb-6">Engagement Over Time</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={engagementData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#0A66C2" 
                    strokeWidth={3} 
                    dot={{ fill: '#0A66C2', r: 6 }} 
                    name="Profile Views"
                  />
                </LineChart>
              </ResponsiveContainer>
            </motion.div>
          </div>

          {/* Key Recommendations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="glass-dark rounded-3xl p-8 neon-glow"
          >
            <h3 className="text-2xl mb-6">Key Recommendations</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Optimize Your Headline',
                  description: 'Include target role keywords and quantifiable achievements',
                  impact: 'High Impact'
                },
                {
                  title: 'Expand Experience Section',
                  description: 'Add measurable results and action verbs to each role',
                  impact: 'High Impact'
                },
                {
                  title: 'Add Relevant Skills',
                  description: 'Include 5-10 industry-specific skills aligned with your goals',
                  impact: 'Medium Impact'
                },
                {
                  title: 'Request Recommendations',
                  description: 'Aim for 5+ recommendations from recent colleagues',
                  impact: 'Medium Impact'
                }
              ].map((rec, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.1 + index * 0.1 }}
                  className="bg-white/50 rounded-2xl p-6 hover:bg-white/70 transition-colors"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg">{rec.title}</h4>
                    <span className={`text-xs px-3 py-1 rounded-full ${
                      rec.impact === 'High Impact' 
                        ? 'bg-red-100 text-red-600' 
                        : 'bg-yellow-100 text-yellow-600'
                    }`}>
                      {rec.impact}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">{rec.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
