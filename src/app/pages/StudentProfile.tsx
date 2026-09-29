import { motion } from "motion/react";
import {
  ArrowLeft,
  User,
  Mail,
  Phone,
  MapPin,
  Bus,
  Bell,
  LogOut,
  ChevronRight,
} from "lucide-react";
import { useNavigate } from "react-router";
import { BottomNav } from "../components/BottomNav";

export function StudentProfile() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 pb-24 md:pb-8">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white px-6 pt-12 pb-20 rounded-b-[2rem] shadow-xl">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <button
              onClick={() => navigate("/student")}
              className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-xl flex items-center justify-center hover:bg-white/30 transition-all"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h1 className="text-2xl font-bold">Profile</h1>
          </div>
        </div>
      </div>

      {/* Profile Card */}
      <div className="max-w-4xl mx-auto px-6 -mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl bg-white/60 backdrop-blur-xl border border-white/20 shadow-lg shadow-blue-500/10 p-6 mb-4"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
              JD
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-gray-900">John Doe</h2>
              <p className="text-gray-600">Student ID: STU-2024-001</p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                <Mail className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Email</p>
                <p className="font-medium text-gray-900">
                  john.doe@college.edu
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50">
              <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                <Phone className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Phone</p>
                <p className="font-medium text-gray-900">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50">
              <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Assigned Stop</p>
                <p className="font-medium text-gray-900">Library Square</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50">
              <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center">
                <Bus className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Regular Bus</p>
                <p className="font-medium text-gray-900">01 (Route R1)</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="rounded-2xl bg-white/60 backdrop-blur-xl border border-white/20 shadow-lg shadow-blue-500/10 p-6 mb-4"
        >
          <h3 className="font-semibold text-gray-900 mb-4">Settings</h3>

          <div className="space-y-2">
            <button className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-all">
              <div className="flex items-center gap-3">
                <Bell className="w-5 h-5 text-gray-600" />
                <span className="font-medium text-gray-900">Notifications</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>

            <button className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-all">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-gray-600" />
                <span className="font-medium text-gray-900">Change Stop</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>

            <button className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-all">
              <div className="flex items-center gap-3">
                <User className="w-5 h-5 text-gray-600" />
                <span className="font-medium text-gray-900">Edit Profile</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </motion.div>

        {/* Logout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <button
            onClick={() => navigate("/")}
            className="w-full flex items-center justify-center gap-2 p-4 rounded-2xl bg-red-50 text-red-600 hover:bg-red-100 transition-all font-medium"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </motion.div>
      </div>

      <BottomNav />
    </div>
  );
}
