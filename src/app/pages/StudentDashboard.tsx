import { useState } from "react";
import { motion } from "motion/react";
import {
  Bus,
  MapPin,
  Clock,
  Bell,
  ChevronDown,
  Navigation,
} from "lucide-react";
import { useNavigate } from "react-router";
import { BottomNav } from "../components/BottomNav";
import { buses, routes } from "../data/busData";

export function StudentDashboard() {
  const navigate = useNavigate();
  const [selectedBus, setSelectedBus] = useState("01");
  const [selectedRoute, setSelectedRoute] = useState("R1");
  const [showBusDropdown, setShowBusDropdown] = useState(false);
  const [showRouteDropdown, setShowRouteDropdown] = useState(false);

  const selectedBusData = buses.find((b) => b.busNumber === selectedBus);
  const selectedRouteData = routes.find((r) => r.routeNumber === selectedRoute);
  const assignedStop = selectedRouteData?.stops[2]; // Mock assigned stop
  const eta = "8 min";

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 pb-24 md:pb-8">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white px-6 pt-12 pb-8 rounded-b-[2rem] shadow-xl">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold mb-1">Hello, Student! 👋</h1>
              <p className="text-blue-100">Track your bus in real-time</p>
            </div>
            <button
              onClick={() => navigate("/student/notifications")}
              className="relative w-12 h-12 rounded-xl bg-white/20 backdrop-blur-xl flex items-center justify-center hover:bg-white/30 transition-all"
            >
              <Bell className="w-6 h-6" />
              <div className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            </button>
          </div>

          {/* Bus and Route Selection */}
          <div className="grid grid-cols-2 gap-3">
            {/* Bus Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setShowBusDropdown(!showBusDropdown);
                  setShowRouteDropdown(false);
                }}
                className="w-full px-4 py-3 rounded-xl bg-white/20 backdrop-blur-xl border border-white/20 flex items-center justify-between hover:bg-white/30 transition-all"
              >
                <div className="flex items-center gap-2">
                  <Bus className="w-5 h-5" />
                  <span className="font-medium">{selectedBus}</span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${showBusDropdown ? "rotate-180" : ""}`}
                />
              </button>

              {showBusDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-full mt-2 w-full bg-white rounded-xl shadow-xl overflow-hidden z-50"
                >
                  {buses.map((bus) => (
                    <button
                      key={bus.id}
                      onClick={() => {
                        setSelectedBus(bus.busNumber);
                        setSelectedRoute(bus.route);
                        setShowBusDropdown(false);
                      }}
                      className="w-full px-4 py-3 text-left hover:bg-blue-50 transition-all flex items-center justify-between"
                    >
                      <span className="text-gray-900">{bus.busNumber}</span>
                      <span className="text-sm text-gray-500">
                        Route {bus.route}
                      </span>
                    </button>
                  ))}
                </motion.div>
              )}
            </div>

            {/* Route Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setShowRouteDropdown(!showRouteDropdown);
                  setShowBusDropdown(false);
                }}
                className="w-full px-4 py-3 rounded-xl bg-white/20 backdrop-blur-xl border border-white/20 flex items-center justify-between hover:bg-white/30 transition-all"
              >
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span className="font-medium">{selectedRoute}</span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${showRouteDropdown ? "rotate-180" : ""}`}
                />
              </button>

              {showRouteDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-full mt-2 w-full bg-white rounded-xl shadow-xl overflow-hidden z-50"
                >
                  {routes.map((route) => (
                    <button
                      key={route.id}
                      onClick={() => {
                        setSelectedRoute(route.routeNumber);
                        setShowRouteDropdown(false);
                      }}
                      className="w-full px-4 py-3 text-left hover:bg-blue-50 transition-all"
                    >
                      <div className="text-gray-900 font-medium">
                        {route.routeNumber}
                      </div>
                      <div className="text-xs text-gray-500">
                        {route.routeName}
                      </div>
                    </button>
                  ))}
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 -mt-6">
        {/* Assigned Stop Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl bg-white/60 backdrop-blur-xl border border-white/20 shadow-lg shadow-blue-500/10 p-6 mb-4"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900">Your Assigned Stop</h3>
            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
              <MapPin className="w-4 h-4 text-green-600" />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-medium text-gray-900">
                {assignedStop?.name}
              </h4>
              <p className="text-sm text-gray-600">
                Lat: {assignedStop?.location.lat.toFixed(4)}, Lng:{" "}
                {assignedStop?.location.lng.toFixed(4)}
              </p>
            </div>
          </div>
        </motion.div>

        {/* ETA Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 text-white shadow-lg shadow-green-500/30 p-6 mb-4"
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-5 h-5" />
                <span className="text-sm font-medium">Estimated Arrival</span>
              </div>
              <div className="text-4xl font-bold">{eta}</div>
              <p className="text-green-100 text-sm mt-1">Bus is on the way</p>
            </div>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-xl flex items-center justify-center"
            >
              <Bus className="w-8 h-8" />
            </motion.div>
          </div>
        </motion.div>

        {/* Live Tracking Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="rounded-2xl bg-white/60 backdrop-blur-xl border border-white/20 shadow-lg shadow-blue-500/10 p-6 mb-4"
        >
          <h3 className="font-semibold text-gray-900 mb-4">
            Live Bus Tracking
          </h3>

          {/* Map Placeholder */}
          <div
            onClick={() => {
              const lat = selectedBusData?.currentLocation.lat;
              const lng = selectedBusData?.currentLocation.lng;

              if (lat && lng) {
                const url = `https://www.google.com/maps?q=${lat},${lng}`;
                window.open(url, "_blank");
              }
            }}
            className="relative h-64 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 mb-4 overflow-hidden cursor-pointer group"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <Navigation className="w-12 h-12 text-gray-400 mx-auto mb-2 group-hover:text-blue-500 transition-colors" />
                <p className="text-gray-600 font-medium">
                  Tap to view live map
                </p>
              </div>
            </div>

            {/* Mock Route Path */}
            <svg className="absolute inset-0 w-full h-full">
              <path
                d="M 50 200 Q 100 100, 200 150 T 350 100"
                stroke="#3B82F6"
                strokeWidth="3"
                fill="none"
                strokeDasharray="5,5"
                className="animate-pulse"
              />
            </svg>

            {/* Mock Bus Position */}
            <motion.div
              animate={{ x: [0, 20, 0], y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-1/2 left-1/3 w-8 h-8 bg-blue-500 rounded-full shadow-lg flex items-center justify-center"
            >
              <Bus className="w-4 h-4 text-white" />
            </motion.div>
          </div>

          {/* Bus Info */}
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-blue-50 p-3">
              <div className="text-sm text-gray-600 mb-1">Current Speed</div>
              <div className="text-xl font-semibold text-gray-900">
                {selectedBusData?.speed} km/h
              </div>
            </div>
            <div className="rounded-xl bg-blue-50 p-3">
              <div className="text-sm text-gray-600 mb-1">Next Stop</div>
              <div className="text-xl font-semibold text-gray-900">5 min</div>
            </div>
          </div>
        </motion.div>

        {/* Recent Notifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="rounded-2xl bg-white/60 backdrop-blur-xl border border-white/20 shadow-lg shadow-blue-500/10 p-6"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900">Recent Alerts</h3>
            <button
              onClick={() => navigate("/student/notifications")}
              className="text-sm text-blue-600 hover:text-blue-700 font-medium"
            >
              View All
            </button>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 rounded-xl bg-green-50">
              <div className="w-8 h-8 rounded-lg bg-green-500 flex items-center justify-center flex-shrink-0">
                <Bell className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900">
                  Bus Arriving Soon
                </p>
                <p className="text-xs text-gray-600">
                  {selectedBus} will arrive in 8 minutes
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-xl bg-orange-50">
              <div className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center flex-shrink-0">
                <Clock className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900">
                  Slight Delay
                </p>
                <p className="text-xs text-gray-600">
                  Traffic detected on route
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <BottomNav />
    </div>
  );
}
