import { createBrowserRouter } from 'react-router';
import { LoginPage } from './pages/LoginPage';
import { StudentDashboard } from './pages/StudentDashboard';
import { LiveTracking } from './pages/LiveTracking';
import { NotificationPage } from './pages/NotificationPage';
import { StudentProfile } from './pages/StudentProfile';
import { AdminDashboard } from './pages/AdminDashboard';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: LoginPage,
  },
  {
    path: '/student',
    Component: StudentDashboard,
  },
  {
    path: '/student/tracking',
    Component: LiveTracking,
  },
  {
    path: '/student/notifications',
    Component: NotificationPage,
  },
  {
    path: '/student/profile',
    Component: StudentProfile,
  },
  {
    path: '/admin',
    Component: AdminDashboard,
  },
]);
