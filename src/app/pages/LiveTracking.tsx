import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Navigation, MapPin, Bus as BusIcon, Clock, Users, Maximize2 } from 'lucide-react';
import { useNavigate } from 'react-router';
import { BottomNav } from '../components/BottomNav';
import { buses, routes } from '../data/busData';

export function LiveTracking() {
  const navigate = useNavigate();
  const [selectedBus] = useState('01');
  const selectedBusData = buses.find(b => b.busNumber === selectedBus);
  const selectedRouteData = routes.find(r => r.routeNumber === selectedBusData?.route);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Map Container */}
      <div className="relative h-screen">
        {/* Mock Map Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-gray-100 to-green-100">
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="grid grid-cols-8 grid-rows-8 h-full">
              {Array.from({ length: 64 }).map((_, i) => (
                <div key={i} className="border border-gray-300" />
              ))}
            </div>
          </div>

          {/* Mock Roads */}
          <svg className="absolute inset-0 w-full h-full">
            <path
              d="M 0 200 L 400 200"
              stroke="#94A3B8"
              strokeWidth="4"
              fill="none"
            />
            <path
              d="M 200 0 L 200 400"
              stroke="#94A3B8"
              strokeWidth="4"
              fill="none"
            />
            <path
              d="M 100 100 Q 200 150, 300 100 T 500 150"
              stroke="#3B82F6"
              strokeWidth="6"
              fill="none"
              strokeDasharray="10,5"
              className="animate-pulse"
            />
          </svg>

          {/* Route Stops */}
          {selectedRouteData?.stops.slice(0, 5).map((stop, index) => (
            <motion.div
              key={stop.id}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.1 }}
              style={{
                position: 'absolute',
                left: `${20 + index * 15}%`,
                top: `${30 + (index % 2) * 20}%`
              }}
              className="flex flex-col items-center"
            >
              <div className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center border-2 border-blue-500">
                <MapPin className="w-5 h-5 text-blue-600" />
              </div>
              <div className="mt-2 px-3 py-1 rounded-lg bg-white/90 backdrop-blur-xl shadow-lg">
                <p className="text-xs font-medium text-gray-900 whitespace-nowrap">{stop.name}</p>
              </div>
            </motion.div>
          ))}

          {/* Animated Bus */}
          <motion.div
            animate={{ 
              x: [0, 100, 200, 300, 200, 100, 0],
              y: [0, -20, 10, -30, 20, -10, 0]
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              position: 'absolute',
              left: '20%',
              top: '40%'
            }}
            className="flex flex-col items-center"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-2xl shadow-blue-500/50 flex items-center justify-center relative">
              <BusIcon className="w-7 h-7 text-white" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white animate-pulse" />
            </div>
            <div className="mt-2 px-3 py-1 rounded-lg bg-blue-600 text-white shadow-lg">
              <p className="text-xs font-bold">{selectedBus}</p>
            </div>
          </motion.div>
        </div>

        {/* Top Bar */}
        <div className="absolute top-0 left-0 right-0 z-10 p-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/student')}
              className="w-12 h-12 rounded-xl bg-white/90 backdrop-blur-xl shadow-lg flex items-center justify-center hover:bg-white transition-all"
            >
              <ArrowLeft className="w-5 h-5 text-gray-900" />
            </button>
            <div className="flex-1 rounded-xl bg-white/90 backdrop-blur-xl shadow-lg px-4 py-3">
              <div className="flex items-center gap-2">
                <Navigation className="w-5 h-5 text-blue-600" />
                <span className="font-semibold text-gray-900">Live Tracking</span>
              </div>
            </div>
            <button className="w-12 h-12 rounded-xl bg-white/90 backdrop-blur-xl shadow-lg flex items-center justify-center hover:bg-white transition-all">
              <Maximize2 className="w-5 h-5 text-gray-900" />
            </button>
          </div>
        </div>

        {/* Bus Info Card */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="absolute bottom-24 md:bottom-8 left-4 right-4 z-10"
        >
          <div className="rounded-2xl bg-white/90 backdrop-blur-xl border border-white/20 shadow-2xl shadow-blue-500/20 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white px-6 py-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold">{selectedBus}</h3>
                <div className="px-3 py-1 rounded-full bg-green-500 text-xs font-semibold">
                  Active
                </div>
              </div>
              <p className="text-blue-100 text-sm">Route {selectedBusData?.route} - {selectedRouteData?.routeName}</p>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Current Location */}
              <div className="mb-4 p-4 rounded-xl bg-gray-50">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span className="font-semibold text-gray-900">Current Location</span>
                </div>
                <div className="text-sm text-gray-600 font-mono">
                  Lat: {selectedBusData?.currentLocation.lat.toFixed(6)}
                  <br />
                  Lng: {selectedBusData?.currentLocation.lng.toFixed(6)}
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-3 mb-4">
                <div className="text-center p-3 rounded-xl bg-blue-50">
                  <Navigation className="w-5 h-5 text-blue-600 mx-auto mb-1" />
                  <div className="text-lg font-bold text-gray-900">{selectedBusData?.speed}</div>
                  <div className="text-xs text-gray-600">km/h</div>
                </div>
                <div className="text-center p-3 rounded-xl bg-green-50">
                  <Clock className="w-5 h-5 text-green-600 mx-auto mb-1" />
                  <div className="text-lg font-bold text-gray-900">8</div>
                  <div className="text-xs text-gray-600">min ETA</div>
                </div>
                <div className="text-center p-3 rounded-xl bg-purple-50">
                  <Users className="w-5 h-5 text-purple-600 mx-auto mb-1" />
                  <div className="text-lg font-bold text-gray-900">{selectedBusData?.capacity}</div>
                  <div className="text-xs text-gray-600">seats</div>
                </div>
              </div>

              {/* Next Stops */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Upcoming Stops</h4>
                <div className="space-y-2">
                  {selectedRouteData?.stops.slice(0, 3).map((stop, index) => (
                    <div key={stop.id} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        index === 0 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'
                      }`}>
                        {index + 1}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-gray-900 text-sm">{stop.name}</p>
                        <p className="text-xs text-gray-500">{stop.arrivalTime}</p>
                      </div>
                      {index === 0 && (
                        <span className="px-2 py-1 rounded-lg bg-blue-100 text-blue-700 text-xs font-semibold">
                          Next
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <BottomNav />
    </div>
  );
}
