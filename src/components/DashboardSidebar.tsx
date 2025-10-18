import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LayoutDashboard, Upload, BarChart3, FileText, Settings, LogOut, Menu, X } from 'lucide-react';

interface DashboardSidebarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onLogout: () => void;
  isOpen: boolean;
  onToggle: () => void;
}

export const DashboardSidebar: React.FC<DashboardSidebarProps> = ({
  currentPage,
  onNavigate,
  onLogout,
  isOpen,
  onToggle
}) => {
  const menuItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { id: 'upload', icon: Upload, label: 'Upload' },
    { id: 'analysis', icon: BarChart3, label: 'Analysis' },
    { id: 'reports', icon: FileText, label: 'Reports' },
    { id: 'settings', icon: Settings, label: 'Settings' }
  ];

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={onToggle}
        className="fixed top-4 left-4 z-50 lg:hidden w-10 h-10 rounded-xl gradient-primary flex items-center justify-center text-white shadow-lg"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Desktop Sidebar - Always visible */}
      <aside className="hidden lg:flex fixed left-0 top-0 bottom-0 w-72 gradient-footer text-white z-40 shadow-2xl">
        <div className="p-6 pt-8 h-full flex flex-col w-full overflow-y-auto">
          {/* Profile Section */}
          <div className="mb-8 pb-6 border-b border-white/20">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-xl">
                👤
              </div>
              <div>
                <h3 className="text-white">Rahul Kumar</h3>
                <p className="text-white/70 text-sm">rahul.kumar@example.com</p>
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              
              return (
                <motion.button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  whileHover={{ x: 8 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    isActive
                      ? 'bg-white/20 text-white neon-glow'
                      : 'text-white/70 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="ml-auto w-2 h-2 rounded-full bg-white"
                    />
                  )}
                </motion.button>
              );
            })}
          </nav>

          {/* Logout Button */}
          <motion.button
            onClick={onLogout}
            whileHover={{ x: 8 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/70 hover:bg-white/10 hover:text-white transition-all"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </motion.button>
        </div>
      </aside>

      {/* Mobile Sidebar - Slide in */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ x: -288 }}
            animate={{ x: 0 }}
            exit={{ x: -288 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="lg:hidden fixed left-0 top-0 bottom-0 w-72 gradient-footer text-white z-40 shadow-2xl"
          >
            <div className="p-6 pt-8 h-full flex flex-col overflow-y-auto">
              {/* Profile Section */}
              <div className="mb-8 pb-6 border-b border-white/20">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-xl">
                    👤
                  </div>
                  <div>
                    <h3 className="text-white">Rahul Kumar</h3>
                    <p className="text-white/70 text-sm">rahul.kumar@example.com</p>
                  </div>
                </div>
              </div>

              {/* Menu Items */}
              <nav className="flex-1 space-y-2">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = currentPage === item.id;
                  
                  return (
                    <motion.button
                      key={item.id}
                      onClick={() => {
                        onNavigate(item.id);
                        onToggle(); // Close sidebar on mobile after navigation
                      }}
                      whileHover={{ x: 8 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                        isActive
                          ? 'bg-white/20 text-white neon-glow'
                          : 'text-white/70 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{item.label}</span>
                      {isActive && (
                        <motion.div
                          className="ml-auto w-2 h-2 rounded-full bg-white"
                        />
                      )}
                    </motion.button>
                  );
                })}
              </nav>

              {/* Logout Button */}
              <motion.button
                onClick={() => {
                  onLogout();
                  onToggle();
                }}
                whileHover={{ x: 8 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/70 hover:bg-white/10 hover:text-white transition-all"
              >
                <LogOut className="w-5 h-5" />
                <span>Logout</span>
              </motion.button>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Overlay for mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onToggle}
            className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
};
