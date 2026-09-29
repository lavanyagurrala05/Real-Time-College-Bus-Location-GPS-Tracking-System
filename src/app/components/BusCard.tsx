import { Bus as BusIcon, User, Users } from 'lucide-react';
import { motion } from 'motion/react';
import type { Bus } from '../data/busData';

interface BusCardProps {
  bus: Bus;
  onClick?: () => void;
}

export function BusCard({ bus, onClick }: BusCardProps) {
  const statusColors = {
    active: 'bg-green-500',
    inactive: 'bg-gray-400',
    maintenance: 'bg-orange-500'
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="relative overflow-hidden rounded-2xl bg-white/60 backdrop-blur-xl border border-white/20 shadow-lg shadow-blue-500/10 p-4 cursor-pointer group"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-transparent rounded-full -mr-16 -mt-16" />
      
      <div className="relative flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
            <BusIcon className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">{bus.busNumber}</h3>
            <p className="text-sm text-gray-600">Route {bus.route}</p>
          </div>
        </div>
        
        <div className={`w-2 h-2 rounded-full ${statusColors[bus.status]} animate-pulse`} />
      </div>

      <div className="mt-4 flex items-center justify-between text-sm">
        <div className="flex items-center gap-2 text-gray-600">
          <User className="w-4 h-4" />
          <span>{bus.driver}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <Users className="w-4 h-4" />
          <span>{bus.capacity} seats</span>
        </div>
      </div>

      {bus.status === 'active' && (
        <div className="mt-3 pt-3 border-t border-gray-200/50">
          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-500">Current Speed</span>
            <span className="font-semibold text-blue-600">{bus.speed} km/h</span>
          </div>
        </div>
      )}
    </motion.div>
  );
}
