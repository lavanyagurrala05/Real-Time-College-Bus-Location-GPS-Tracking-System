import { Bell, Clock, AlertTriangle, Info } from 'lucide-react';
import { motion } from 'motion/react';
import type { Notification } from '../data/busData';

interface NotificationCardProps {
  notification: Notification;
}

export function NotificationCard({ notification }: NotificationCardProps) {
  const iconMap = {
    arrival: Bell,
    delay: Clock,
    route_change: AlertTriangle,
    info: Info
  };

  const colorMap = {
    arrival: 'from-green-500 to-emerald-500',
    delay: 'from-orange-500 to-amber-500',
    route_change: 'from-purple-500 to-violet-500',
    info: 'from-blue-500 to-cyan-500'
  };

  const Icon = iconMap[notification.type];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`relative overflow-hidden rounded-2xl bg-white/60 backdrop-blur-xl border border-white/20 shadow-lg shadow-blue-500/10 p-4 ${
        !notification.read ? 'border-l-4 border-l-blue-500' : ''
      }`}
    >
      <div className="flex items-start gap-3">
        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${colorMap[notification.type]} flex items-center justify-center shadow-lg flex-shrink-0`}>
          <Icon className="w-5 h-5 text-white" />
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <h4 className="font-semibold text-gray-900">{notification.title}</h4>
            {!notification.read && (
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse flex-shrink-0 mt-1" />
            )}
          </div>
          <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
          <p className="text-xs text-gray-400 mt-2">{notification.timestamp}</p>
        </div>
      </div>
    </motion.div>
  );
}
