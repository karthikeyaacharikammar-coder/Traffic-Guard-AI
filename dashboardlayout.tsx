import { Outlet, Link, useLocation } from "react-router";
import { motion } from "motion/react";
import { 
  LayoutDashboard, 
  Upload, 
  FileText, 
  BarChart3, 
  Settings, 
  User,
  ShieldCheck,
  LogOut
} from "lucide-react";

const menuItems = [
  { path: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { path: "/dashboard/upload", label: "Upload Video", icon: Upload },
  { path: "/dashboard/reports", label: "Reports", icon: FileText },
  { path: "/dashboard/analytics", label: "Analytics", icon: BarChart3 },
  { path: "/dashboard/settings", label: "Settings", icon: Settings },
];

export function DashboardLayout() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[#0A192F]">
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#0F1E37]/80 border-b border-[#00BFFF]/20">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/dashboard" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00BFFF] to-[#0080FF] flex items-center justify-center shadow-lg shadow-[#00BFFF]/50 group-hover:shadow-[#00BFFF]/70 transition-all">
                <ShieldCheck className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-white font-bold text-lg">TrafficGuard AI</div>
                <div className="text-[#00BFFF] text-xs">Smart Monitoring</div>
              </div>
            </Link>

            {/* Menu Items */}
            <div className="flex items-center gap-1">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="relative"
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-all ${
                        isActive 
                          ? "bg-[#00BFFF]/20 text-[#00BFFF]" 
                          : "text-white/70 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="text-sm">{item.label}</span>
                    </motion.div>
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00BFFF] rounded-full shadow-lg shadow-[#00BFFF]/50"
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* User Profile */}
            <div className="flex items-center gap-3">
              <div className="text-right mr-3">
                <div className="text-white text-sm font-medium">Admin User</div>
                <div className="text-white/50 text-xs">System Administrator</div>
              </div>
              <div className="relative group">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00BFFF] to-[#0080FF] flex items-center justify-center cursor-pointer shadow-lg shadow-[#00BFFF]/30"
                >
                  <User className="w-5 h-5 text-white" />
                </motion.div>
                
                {/* Dropdown */}
                <div className="absolute right-0 top-full mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="backdrop-blur-xl bg-[#0F1E37]/95 border border-[#00BFFF]/20 rounded-[14px] shadow-2xl overflow-hidden">
                    <Link
                      to="/dashboard/settings"
                      className="flex items-center gap-3 px-4 py-3 text-white/80 hover:bg-[#00BFFF]/10 hover:text-white transition-all"
                    >
                      <Settings className="w-4 h-4" />
                      <span className="text-sm">Settings</span>
                    </Link>
                    <Link
                      to="/"
                      className="flex items-center gap-3 px-4 py-3 text-[#FF4C4C]/80 hover:bg-[#FF4C4C]/10 hover:text-[#FF4C4C] transition-all border-t border-white/5"
                    >
                      <LogOut className="w-4 h-4" />
                      <span className="text-sm">Sign Out</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20 min-h-screen">
        <Outlet />
      </main>
    </div>
  );
}
