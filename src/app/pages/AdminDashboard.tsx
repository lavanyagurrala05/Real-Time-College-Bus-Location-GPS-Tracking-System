import { useState } from 'react';
import { motion } from 'motion/react';
import { Bus as BusIcon, Plus, MapPin, Users, Menu, X, Settings, LogOut, BarChart3 } from 'lucide-react';
import { useNavigate } from 'react-router';
import { BusCard } from '../components/BusCard';
import { buses, routes } from '../data/busData';

export function AdminDashboard() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'buses' | 'routes' | 'map'>('buses');
  const [showAddBusModal, setShowAddBusModal] = useState(false);

  const activeBuses = buses.filter(b => b.status === 'active').length;
  const totalRoutes = routes.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <motion.div
        initial={false}
        animate={{ x: sidebarOpen ? 0 : -320 }}
        className="fixed left-0 top-0 bottom-0 w-80 bg-white shadow-2xl z-50 lg:translate-x-0"
      >
        <div className="h-full flex flex-col">
          {/* Logo */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                  <BusIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="font-bold text-gray-900">Bus Tracker</h2>
                  <p className="text-sm text-gray-600">Admin Panel</p>
                </div>
              </div>
              <button
                onClick={() => setSidebarOpen(false)}
                className="lg:hidden w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            <button
              onClick={() => setActiveTab('buses')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                activeTab === 'buses'
                  ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <BusIcon className="w-5 h-5" />
              <span className="font-medium">Manage Buses</span>
            </button>
            <button
              onClick={() => setActiveTab('routes')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                activeTab === 'routes'
                  ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <MapPin className="w-5 h-5" />
              <span className="font-medium">Routes & Stops</span>
            </button>
            <button
              onClick={() => setActiveTab('map')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                activeTab === 'map'
                  ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <MapPin className="w-5 h-5" />
              <span className="font-medium">All Buses Map</span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-100 transition-all">
              <BarChart3 className="w-5 h-5" />
              <span className="font-medium">Analytics</span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-100 transition-all">
              <Settings className="w-5 h-5" />
              <span className="font-medium">Settings</span>
            </button>
          </nav>

          {/* Logout */}
          <div className="p-4 border-t border-gray-200">
            <button
              onClick={() => navigate('/')}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 transition-all"
            >
              <LogOut className="w-5 h-5" />
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="lg:ml-80">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-30">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden w-10 h-10 rounded-xl hover:bg-gray-100 flex items-center justify-center"
              >
                <Menu className="w-5 h-5" />
              </button>
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  {activeTab === 'buses' && 'Manage Buses'}
                  {activeTab === 'routes' && 'Routes & Stops'}
                  {activeTab === 'map' && 'Live Map View'}
                </h1>
                <p className="text-sm text-gray-600">Overview and management</p>
              </div>
            </div>
            {activeTab === 'buses' && (
              <button
                onClick={() => setShowAddBusModal(true)}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg hover:shadow-xl transition-all"
              >
                <Plus className="w-5 h-5" />
                <span className="font-medium">Add Bus</span>
              </button>
            )}
            {activeTab === 'routes' && (
              <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg hover:shadow-xl transition-all">
                <Plus className="w-5 h-5" />
                <span className="font-medium">Add Route</span>
              </button>
            )}
          </div>
        </div>

        {/* Stats Cards */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 shadow-lg shadow-blue-500/30"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-xl flex items-center justify-center">
                  <BusIcon className="w-6 h-6" />
                </div>
                <span className="text-2xl font-bold">{buses.length}</span>
              </div>
              <h3 className="font-semibold mb-1">Total Buses</h3>
              <p className="text-sm text-blue-100">{activeBuses} active right now</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 text-white p-6 shadow-lg shadow-green-500/30"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <span className="text-2xl font-bold">{totalRoutes}</span>
              </div>
              <h3 className="font-semibold mb-1">Active Routes</h3>
              <p className="text-sm text-green-100">All routes operational</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="rounded-2xl bg-gradient-to-br from-purple-500 to-violet-500 text-white p-6 shadow-lg shadow-purple-500/30"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-xl flex items-center justify-center">
                  <Users className="w-6 h-6" />
                </div>
                <span className="text-2xl font-bold">1,247</span>
              </div>
              <h3 className="font-semibold mb-1">Active Students</h3>
              <p className="text-sm text-purple-100">Currently tracking</p>
            </motion.div>
          </div>

          {/* Content based on active tab */}
          {activeTab === 'buses' && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900">All Buses</h2>
                <div className="flex gap-2">
                  <button className="px-4 py-2 rounded-xl bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 text-sm">
                    Filter
                  </button>
                  <button className="px-4 py-2 rounded-xl bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 text-sm">
                    Sort
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {buses.map((bus, index) => (
                  <motion.div
                    key={bus.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <BusCard bus={bus} />
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'routes' && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900">All Routes</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {routes.map((route, index) => (
                  <motion.div
                    key={route.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="rounded-2xl bg-white/60 backdrop-blur-xl border border-white/20 shadow-lg shadow-blue-500/10 p-6"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{route.routeNumber}</h3>
                        <p className="text-gray-600">{route.routeName}</p>
                      </div>
                      <button className="px-3 py-1 rounded-lg bg-blue-100 text-blue-700 text-sm font-medium hover:bg-blue-200">
                        Edit
                      </button>
                    </div>
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="p-3 rounded-xl bg-gray-50">
                        <div className="text-sm text-gray-600">Distance</div>
                        <div className="font-semibold text-gray-900">{route.totalDistance}</div>
                      </div>
                      <div className="p-3 rounded-xl bg-gray-50">
                        <div className="text-sm text-gray-600">Duration</div>
                        <div className="font-semibold text-gray-900">{route.estimatedTime}</div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">Stops</span>
                        <span className="text-sm text-gray-600">{route.stops.length} locations</span>
                      </div>
                      <div className="space-y-2 max-h-32 overflow-y-auto">
                        {route.stops.map((stop, idx) => (
                          <div key={stop.id} className="flex items-center gap-2 text-sm">
                            <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-semibold">
                              {idx + 1}
                            </div>
                            <span className="text-gray-700">{stop.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'map' && (
            <div className="rounded-2xl bg-white/60 backdrop-blur-xl border border-white/20 shadow-lg shadow-blue-500/10 p-6">
              <div className="relative h-[600px] rounded-xl bg-gradient-to-br from-blue-100 via-gray-100 to-green-100 overflow-hidden">
                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="grid grid-cols-12 grid-rows-12 h-full">
                    {Array.from({ length: 144 }).map((_, i) => (
                      <div key={i} className="border border-gray-300" />
                    ))}
                  </div>
                </div>

                {/* All Buses on Map */}
                {buses.filter(b => b.status === 'active').map((bus, index) => (
                  <motion.div
                    key={bus.id}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    style={{
                      position: 'absolute',
                      left: `${20 + index * 18}%`,
                      top: `${30 + (index % 3) * 20}%`
                    }}
                    className="flex flex-col items-center cursor-pointer group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-xl shadow-blue-500/50 flex items-center justify-center relative group-hover:scale-110 transition-transform">
                      <BusIcon className="w-6 h-6 text-white" />
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white animate-pulse" />
                    </div>
                    <div className="mt-2 px-2 py-1 rounded-lg bg-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                      <p className="text-xs font-bold text-gray-900 whitespace-nowrap">{bus.busNumber}</p>
                      <p className="text-xs text-gray-600">{bus.speed} km/h</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Add Bus Modal */}
      {showAddBusModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">Add New Bus</h3>
              <button
                onClick={() => setShowAddBusModal(false)}
                className="w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Bus Number
                </label>
                <input
                  type="text"
                  placeholder="CB-106"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Route
                </label>
                <select className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none">
                  <option>Select Route</option>
                  {routes.map(route => (
                    <option key={route.id} value={route.routeNumber}>
                      {route.routeNumber} - {route.routeName}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Driver Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Capacity
                </label>
                <input
                  type="number"
                  placeholder="50"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none"
                />
              </div>
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowAddBusModal(false)}
                  className="flex-1 px-4 py-3 rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50 font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-3 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white font-medium shadow-lg"
                >
                  Add Bus
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
}
