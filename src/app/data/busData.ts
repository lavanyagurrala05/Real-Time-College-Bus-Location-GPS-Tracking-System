export interface Bus {
  id: string;
  busNumber: string;
  route: string;
  driver: string;
  capacity: number;
  status: "active" | "inactive" | "maintenance";
  currentLocation: {
    lat: number;
    lng: number;
  };
  speed: number;
}

export interface Route {
  id: string;
  routeNumber: string;
  routeName: string;
  stops: Stop[];
  totalDistance: string;
  estimatedTime: string;
}

export interface Stop {
  id: string;
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  arrivalTime: string;
}

export interface Notification {
  id: string;
  type: "arrival" | "delay" | "route_change" | "info";
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
}

export const buses: Bus[] = [
  {
    id: "1",
    busNumber: "01",
    route: "R1",
    driver: "Raju",
    capacity: 50,
    status: "active",
    currentLocation: { lat: 40.7128, lng: -74.006 },
    speed: 35,
  },
  {
    id: "2",
    busNumber: "02",
    route: "R2",
    driver: "Ramu",
    capacity: 45,
    status: "active",
    currentLocation: { lat: 40.7589, lng: -73.9851 },
    speed: 28,
  },
  {
    id: "3",
    busNumber: "03",
    route: "R3",
    driver: "Ramesh",
    capacity: 50,
    status: "active",
    currentLocation: { lat: 40.7489, lng: -73.968 },
    speed: 32,
  },
  {
    id: "4",
    busNumber: "04",
    route: "R1",
    driver: "Rohit",
    capacity: 40,
    status: "inactive",
    currentLocation: { lat: 40.7282, lng: -73.7949 },
    speed: 0,
  },
  {
    id: "5",
    busNumber: "05",
    route: "R4",
    driver: "Rahul",
    capacity: 50,
    status: "active",
    currentLocation: { lat: 40.758, lng: -73.9855 },
    speed: 40,
  },
];

export const routes: Route[] = [
  {
    id: "1",
    routeNumber: "R1",
    routeName: "Uppal",
    totalDistance: "12.5 km",
    estimatedTime: "35 min",
    stops: [
      {
        id: "s1",
        name: "Ring Road",
        location: { lat: 40.7128, lng: -74.006 },
        arrivalTime: "08:00 AM",
      },
      {
        id: "s2",
        name: "Bus Stop",
        location: { lat: 40.7148, lng: -74.004 },
        arrivalTime: "08:05 AM",
      },
      {
        id: "s3",
        name: "Boduppal",
        location: { lat: 40.7168, lng: -74.002 },
        arrivalTime: "08:10 AM",
      },
      {
        id: "s4",
        name: "Medipally",
        location: { lat: 40.7188, lng: -74.0 },
        arrivalTime: "08:15 AM",
      },
      {
        id: "s5",
        name: "Narapally",
        location: { lat: 40.7208, lng: -73.998 },
        arrivalTime: "08:20 AM",
      },
      {
        id: "s6",
        name: "Jodimetla",
        location: { lat: 40.7228, lng: -73.996 },
        arrivalTime: "08:25 AM",
      },
    ],
  },
  {
    id: "2",
    routeNumber: "R2",
    routeName: "ECL",
    totalDistance: "8.3 km",
    estimatedTime: "25 min",
    stops: [
      {
        id: "s7",
        name: "Bus Stop",
        location: { lat: 40.7589, lng: -73.9851 },
        arrivalTime: "08:00 AM",
      },
      {
        id: "s8",
        name: "ECL Hospital",
        location: { lat: 40.7609, lng: -73.9831 },
        arrivalTime: "08:07 AM",
      },
      {
        id: "s9",
        name: "Computer Center",
        location: { lat: 40.7629, lng: -73.9811 },
        arrivalTime: "08:14 AM",
      },
      {
        id: "s10",
        name: "Ghatkesar",
        location: { lat: 40.7649, lng: -73.9791 },
        arrivalTime: "08:21 AM",
      },
    ],
  },
  {
    id: "3",
    routeNumber: "R3",
    routeName: "Madhapur",
    totalDistance: "10.2 km",
    estimatedTime: "30 min",
    stops: [
      {
        id: "s11",
        name: "Madhapur Bus Stop",
        location: { lat: 40.7489, lng: -73.968 },
        arrivalTime: "08:00 AM",
      },
      {
        id: "s12",
        name: "Koti",
        location: { lat: 40.7509, lng: -73.966 },
        arrivalTime: "08:08 AM",
      },
      {
        id: "s13",
        name: "Law College",
        location: { lat: 40.7529, lng: -73.964 },
        arrivalTime: "08:16 AM",
      },
      {
        id: "s14",
        name: "Main Road",
        location: { lat: 40.7549, lng: -73.962 },
        arrivalTime: "08:24 AM",
      },
    ],
  },
  {
    id: "4",
    routeNumber: "R4",
    routeName: "Malakpet",
    totalDistance: "15.7 km",
    estimatedTime: "40 min",
    stops: [
      {
        id: "s15",
        name: "OPP DMART",
        location: { lat: 40.758, lng: -73.9855 },
        arrivalTime: "08:00 AM",
      },
      {
        id: "s16",
        name: "Dilshuknagar Near Theatre",
        location: { lat: 40.76, lng: -73.9875 },
        arrivalTime: "08:10 AM",
      },
    ],
  },
];

export const notifications: Notification[] = [
  {
    id: "1",
    type: "arrival",
    title: "Bus Arriving Soon",
    message: "01 will arrive at Main Campus Gate in 5 minutes",
    timestamp: "2 minutes ago",
    read: false,
  },
  {
    id: "2",
    type: "delay",
    title: "Delay Alert",
    message: "02 is running 10 minutes late due to traffic",
    timestamp: "15 minutes ago",
    read: false,
  },
  {
    id: "3",
    type: "route_change",
    title: "Route Modified",
    message:
      "R3 route has been temporarily diverted. New stop added at Student Center",
    timestamp: "1 hour ago",
    read: true,
  },
  {
    id: "4",
    type: "info",
    title: "Service Update",
    message: "Additional bus 06 added to R1 route during peak hours",
    timestamp: "2 hours ago",
    read: true,
  },
  {
    id: "5",
    type: "arrival",
    title: "Bus Departed",
    message: "03 has departed from East Entrance",
    timestamp: "3 hours ago",
    read: true,
  },
];
