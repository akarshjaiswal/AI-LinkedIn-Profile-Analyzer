import React, { useState } from 'react';
import { motion } from 'motion/react';
import { User, Mail, Lock, Bell, Palette, Check } from 'lucide-react';
import { DashboardSidebar } from './DashboardSidebar';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Switch } from './ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

interface SettingsPageProps {
  onNavigate: (page: string) => void;
}

export const SettingsPage: React.FC<SettingsPageProps> = ({ onNavigate }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  
  const [profileData, setProfileData] = useState({
    name: 'Rahul Kumar',
    email: 'rahul.kumar@example.com',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [preferences, setPreferences] = useState({
    autoSuggestions: true,
    emailNotifications: true
  });

  const [notifications, setNotifications] = useState({
    profileViews: true,
    newConnections: true,
    weeklyReports: true,
    systemUpdates: false
  });

  const handleSaveChanges = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen bg-[#F3F6F9]">
      <DashboardSidebar
        currentPage="settings"
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
            <h1 className="text-4xl mb-2">Settings</h1>
            <p className="text-xl text-gray-600">
              Manage your account preferences and configuration
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass rounded-3xl p-8"
          >
            <Tabs defaultValue="profile" className="w-full">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
                <TabsTrigger value="profile" className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span className="hidden sm:inline">Profile</span>
                </TabsTrigger>
                <TabsTrigger value="preferences" className="flex items-center gap-2">
                  <Bell className="w-4 h-4" />
                  <span className="hidden sm:inline">Preferences</span>
                </TabsTrigger>
                <TabsTrigger value="notifications" className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span className="hidden sm:inline">Notifications</span>
                </TabsTrigger>
                <TabsTrigger value="appearance" className="flex items-center gap-2">
                  <Palette className="w-4 h-4" />
                  <span className="hidden sm:inline">Appearance</span>
                </TabsTrigger>
              </TabsList>

              {/* Profile Tab */}
              <TabsContent value="profile">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-6"
                >
                  <div className="flex justify-center mb-8">
                    <div className="relative">
                      <div className="w-32 h-32 rounded-full gradient-primary flex items-center justify-center text-white text-4xl">
                        RK
                      </div>
                      <button className="absolute bottom-0 right-0 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
                        📷
                      </button>
                    </div>
                  </div>

                  <form onSubmit={handleSaveChanges} className="space-y-6 max-w-2xl mx-auto">
                    {/* Name */}
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={profileData.name}
                        onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                        className="rounded-xl h-12 bg-white/50"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={profileData.email}
                        onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                        className="rounded-xl h-12 bg-white/50"
                      />
                    </div>

                    <div className="border-t pt-6">
                      <h3 className="text-lg mb-4">Change Password</h3>
                      
                      {/* Current Password */}
                      <div className="space-y-2 mb-4">
                        <Label htmlFor="currentPassword">Current Password</Label>
                        <Input
                          id="currentPassword"
                          type="password"
                          value={profileData.currentPassword}
                          onChange={(e) => setProfileData({ ...profileData, currentPassword: e.target.value })}
                          className="rounded-xl h-12 bg-white/50"
                        />
                      </div>

                      {/* New Password */}
                      <div className="space-y-2 mb-4">
                        <Label htmlFor="newPassword">New Password</Label>
                        <Input
                          id="newPassword"
                          type="password"
                          value={profileData.newPassword}
                          onChange={(e) => setProfileData({ ...profileData, newPassword: e.target.value })}
                          className="rounded-xl h-12 bg-white/50"
                        />
                      </div>

                      {/* Confirm Password */}
                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Confirm New Password</Label>
                        <Input
                          id="confirmPassword"
                          type="password"
                          value={profileData.confirmPassword}
                          onChange={(e) => setProfileData({ ...profileData, confirmPassword: e.target.value })}
                          className="rounded-xl h-12 bg-white/50"
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full gradient-primary text-white h-12 rounded-xl neon-glow"
                    >
                      SAVE CHANGES
                    </Button>
                  </form>
                </motion.div>
              </TabsContent>

              {/* Preferences Tab */}
              <TabsContent value="preferences">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-6 max-w-2xl mx-auto"
                >
                  <div className="space-y-6">
                    {/* Auto AI Suggestions */}
                    <div className="flex items-center justify-between p-6 rounded-2xl bg-white/50 hover:bg-white/70 transition-colors">
                      <div className="flex-1">
                        <h4 className="mb-1">Auto AI Suggestions</h4>
                        <p className="text-sm text-gray-600">
                          Automatically receive AI-powered profile improvement suggestions
                        </p>
                      </div>
                      <Switch
                        checked={preferences.autoSuggestions}
                        onCheckedChange={(checked) => setPreferences({ ...preferences, autoSuggestions: checked })}
                      />
                    </div>

                    {/* Email Notifications */}
                    <div className="flex items-center justify-between p-6 rounded-2xl bg-white/50 hover:bg-white/70 transition-colors">
                      <div className="flex-1">
                        <h4 className="mb-1">Email Notifications</h4>
                        <p className="text-sm text-gray-600">
                          Receive email updates about your profile performance
                        </p>
                      </div>
                      <Switch
                        checked={preferences.emailNotifications}
                        onCheckedChange={(checked) => setPreferences({ ...preferences, emailNotifications: checked })}
                      />
                    </div>
                  </div>

                  <Button
                    onClick={handleSaveChanges}
                    className="w-full gradient-primary text-white h-12 rounded-xl neon-glow"
                  >
                    SAVE PREFERENCES
                  </Button>
                </motion.div>
              </TabsContent>

              {/* Notifications Tab */}
              <TabsContent value="notifications">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-6 max-w-2xl mx-auto"
                >
                  <div className="space-y-4">
                    {/* Profile Views */}
                    <div className="flex items-center justify-between p-6 rounded-2xl bg-white/50 hover:bg-white/70 transition-colors">
                      <div className="flex-1">
                        <h4 className="mb-1">Profile Views</h4>
                        <p className="text-sm text-gray-600">
                          Get notified when someone views your profile
                        </p>
                      </div>
                      <Switch
                        checked={notifications.profileViews}
                        onCheckedChange={(checked) => setNotifications({ ...notifications, profileViews: checked })}
                      />
                    </div>

                    {/* New Connections */}
                    <div className="flex items-center justify-between p-6 rounded-2xl bg-white/50 hover:bg-white/70 transition-colors">
                      <div className="flex-1">
                        <h4 className="mb-1">New Connections</h4>
                        <p className="text-sm text-gray-600">
                          Alerts when you gain new LinkedIn connections
                        </p>
                      </div>
                      <Switch
                        checked={notifications.newConnections}
                        onCheckedChange={(checked) => setNotifications({ ...notifications, newConnections: checked })}
                      />
                    </div>

                    {/* Weekly Reports */}
                    <div className="flex items-center justify-between p-6 rounded-2xl bg-white/50 hover:bg-white/70 transition-colors">
                      <div className="flex-1">
                        <h4 className="mb-1">Weekly Reports</h4>
                        <p className="text-sm text-gray-600">
                          Receive weekly summary of your profile performance
                        </p>
                      </div>
                      <Switch
                        checked={notifications.weeklyReports}
                        onCheckedChange={(checked) => setNotifications({ ...notifications, weeklyReports: checked })}
                      />
                    </div>

                    {/* System Updates */}
                    <div className="flex items-center justify-between p-6 rounded-2xl bg-white/50 hover:bg-white/70 transition-colors">
                      <div className="flex-1">
                        <h4 className="mb-1">System Updates</h4>
                        <p className="text-sm text-gray-600">
                          Important updates about new features and changes
                        </p>
                      </div>
                      <Switch
                        checked={notifications.systemUpdates}
                        onCheckedChange={(checked) => setNotifications({ ...notifications, systemUpdates: checked })}
                      />
                    </div>
                  </div>

                  <Button
                    onClick={handleSaveChanges}
                    className="w-full gradient-primary text-white h-12 rounded-xl neon-glow"
                  >
                    SAVE NOTIFICATIONS
                  </Button>
                </motion.div>
              </TabsContent>

              {/* Appearance Tab */}
              <TabsContent value="appearance">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-6 max-w-2xl mx-auto"
                >
                  <div>
                    <h3 className="text-lg mb-4">Theme Preference</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {/* Light Theme */}
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setTheme('light')}
                        className={`relative p-6 rounded-2xl border-2 transition-all ${
                          theme === 'light'
                            ? 'border-[#0A66C2] bg-white shadow-lg'
                            : 'border-gray-200 bg-white/50 hover:border-gray-300'
                        }`}
                      >
                        <div className="aspect-video bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg mb-4"></div>
                        <h4 className="mb-1">Light Mode</h4>
                        <p className="text-sm text-gray-600">Classic bright theme</p>
                        {theme === 'light' && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#0A66C2] flex items-center justify-center"
                          >
                            <Check className="w-5 h-5 text-white" />
                          </motion.div>
                        )}
                      </motion.button>

                      {/* Dark Theme */}
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setTheme('dark')}
                        className={`relative p-6 rounded-2xl border-2 transition-all ${
                          theme === 'dark'
                            ? 'border-[#0A66C2] bg-white shadow-lg'
                            : 'border-gray-200 bg-white/50 hover:border-gray-300'
                        }`}
                      >
                        <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg mb-4"></div>
                        <h4 className="mb-1">Dark Mode</h4>
                        <p className="text-sm text-gray-600">Easy on the eyes</p>
                        {theme === 'dark' && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#0A66C2] flex items-center justify-center"
                          >
                            <Check className="w-5 h-5 text-white" />
                          </motion.div>
                        )}
                      </motion.button>
                    </div>
                  </div>

                  <Button
                    onClick={handleSaveChanges}
                    className="w-full gradient-primary text-white h-12 rounded-xl neon-glow"
                  >
                    SAVE APPEARANCE
                  </Button>
                </motion.div>
              </TabsContent>
            </Tabs>
          </motion.div>

          {/* Success Message */}
          {showSuccess && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="fixed bottom-6 right-6 glass-dark rounded-2xl p-6 shadow-2xl neon-glow z-50"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="mb-1">Settings Saved!</h4>
                  <p className="text-sm text-gray-600">Your changes have been saved successfully</p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};
