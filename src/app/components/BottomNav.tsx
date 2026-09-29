import { Home, MapPin, Bell, User } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router';

export function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { icon: Home, label: 'Home', path: '/student' },
    { icon: MapPin, label: 'Track', path: '/student/tracking' },
    { icon: Bell, label: 'Alerts', path: '/student/notifications' },
    { icon: User, label: 'Profile', path: '/student/profile' }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="mx-4 mb-4 rounded-3xl bg-white/80 backdrop-blur-xl border border-white/20 shadow-lg shadow-blue-500/10">
        <div className="flex justify-around items-center px-2 py-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`flex flex-col items-center gap-1 px-4 py-2 rounded-2xl transition-all ${
                  isActive 
                    ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white scale-105' 
                    : 'text-gray-600 hover:bg-blue-50'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'animate-bounce' : ''}`} />
                <span className="text-xs font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
