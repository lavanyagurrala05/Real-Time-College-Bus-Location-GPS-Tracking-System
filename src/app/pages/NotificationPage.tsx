import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Bell, Filter, Check } from 'lucide-react';
import { useNavigate } from 'react-router';
import { BottomNav } from '../components/BottomNav';
import { NotificationCard } from '../components/NotificationCard';
import { notifications } from '../data/busData';

export function NotificationPage() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<'all' | 'unread'>('all');

  const filteredNotifications = filter === 'all' 
    ? notifications 
    : notifications.filter(n => !n.read);

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 pb-24 md:pb-8">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white px-6 pt-12 pb-8 rounded-b-[2rem] shadow-xl">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <button
              onClick={() => navigate('/student')}
              className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-xl flex items-center justify-center hover:bg-white/30 transition-all"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="flex-1">
              <h1 className="text-2xl font-bold">Notifications</h1>
              <p className="text-blue-100 text-sm">
                {unreadCount} unread notification{unreadCount !== 1 ? 's' : ''}
              </p>
            </div>
            <button className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-xl flex items-center justify-center hover:bg-white/30 transition-all">
              <Filter className="w-5 h-5" />
            </button>
          </div>

          {/* Filter Tabs */}
          <div className="flex gap-3">
            <button
              onClick={() => setFilter('all')}
              className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all ${
                filter === 'all'
                  ? 'bg-white text-blue-600 shadow-lg'
                  : 'bg-white/20 backdrop-blur-xl border border-white/20 hover:bg-white/30'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('unread')}
              className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all ${
                filter === 'unread'
                  ? 'bg-white text-blue-600 shadow-lg'
                  : 'bg-white/20 backdrop-blur-xl border border-white/20 hover:bg-white/30'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <span>Unread</span>
                {unreadCount > 0 && (
                  <span className="px-2 py-0.5 rounded-full bg-red-500 text-white text-xs">
                    {unreadCount}
                  </span>
                )}
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Notifications List */}
      <div className="max-w-4xl mx-auto px-6 -mt-6">
        {filteredNotifications.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-2xl bg-white/60 backdrop-blur-xl border border-white/20 shadow-lg shadow-blue-500/10 p-12 text-center"
          >
            <div className="w-20 h-20 rounded-full bg-gray-100 mx-auto mb-4 flex items-center justify-center">
              <Bell className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No Notifications</h3>
            <p className="text-gray-600">You're all caught up! Check back later for updates.</p>
          </motion.div>
        ) : (
          <>
            {/* Mark All as Read */}
            {unreadCount > 0 && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4 flex justify-end"
              >
                <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/60 backdrop-blur-xl border border-white/20 text-gray-700 hover:bg-white transition-all">
                  <Check className="w-4 h-4" />
                  <span className="text-sm font-medium">Mark all as read</span>
                </button>
              </motion.div>
            )}

            {/* Notifications */}
            <div className="space-y-3">
              {filteredNotifications.map((notification, index) => (
                <motion.div
                  key={notification.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <NotificationCard notification={notification} />
                </motion.div>
              ))}
            </div>

            {/* Load More */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-6 text-center"
            >
              <button className="px-6 py-3 rounded-xl bg-white/60 backdrop-blur-xl border border-white/20 text-gray-700 hover:bg-white transition-all font-medium">
                Load More
              </button>
            </motion.div>
          </>
        )}
      </div>

      <BottomNav />
    </div>
  );
}
