import { useState } from 'react';
import { motion } from 'motion/react';
import { Bus, Mail, Lock, ArrowRight, UserCircle, Shield } from 'lucide-react';
import { useNavigate } from 'react-router';

export function LoginPage() {
  const navigate = useNavigate();
  const [userType, setUserType] = useState<'student' | 'admin'>('student');
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userType === 'student') {
      navigate('/student');
    } else {
      navigate('/admin');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            x: [0, 10, 0]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            x: [0, -10, 0]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md relative z-10"
      >
        {/* Logo and Title */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-2xl shadow-blue-500/50 mb-4"
          >
            <Bus className="w-10 h-10 text-white" />
          </motion.div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Campus Bus Tracker</h1>
          <p className="text-gray-600">Track your campus bus in real-time</p>
        </div>

        {/* User Type Selection */}
        <div className="flex gap-3 mb-6">
          <button
            onClick={() => setUserType('student')}
            className={`flex-1 py-3 px-4 rounded-2xl font-medium transition-all ${
              userType === 'student'
                ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/30'
                : 'bg-white/60 backdrop-blur-xl border border-white/20 text-gray-600 hover:bg-white/80'
            }`}
          >
            <div className="flex items-center justify-center gap-2">
              <UserCircle className="w-5 h-5" />
              <span>Student</span>
            </div>
          </button>
          <button
            onClick={() => setUserType('admin')}
            className={`flex-1 py-3 px-4 rounded-2xl font-medium transition-all ${
              userType === 'admin'
                ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/30'
                : 'bg-white/60 backdrop-blur-xl border border-white/20 text-gray-600 hover:bg-white/80'
            }`}
          >
            <div className="flex items-center justify-center gap-2">
              <Shield className="w-5 h-5" />
              <span>Admin</span>
            </div>
          </button>
        </div>

        {/* Login/Signup Form */}
        <motion.div
          key={isLogin ? 'login' : 'signup'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="rounded-3xl bg-white/60 backdrop-blur-xl border border-white/20 shadow-2xl shadow-blue-500/10 p-8"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <UserCircle className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/80 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  placeholder="your.email@college.edu"
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/80 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/80 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                />
              </div>
            </div>

            {isLogin && (
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded border-gray-300" />
                  <span className="text-gray-600">Remember me</span>
                </label>
                <a href="#" className="text-blue-600 hover:text-blue-700">
                  Forgot password?
                </a>
              </div>
            )}

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white font-semibold shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all flex items-center justify-center gap-2"
            >
              <span>{isLogin ? 'Sign In' : 'Sign Up'}</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-gray-600 hover:text-gray-900"
            >
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <span className="text-blue-600 font-semibold">
                {isLogin ? 'Sign Up' : 'Sign In'}
              </span>
            </button>
          </div>
        </motion.div>

        <p className="text-center text-xs text-gray-500 mt-6">
          By continuing, you agree to our Terms of Service and Privacy Policy
        </p>
      </motion.div>
    </div>
  );
}
