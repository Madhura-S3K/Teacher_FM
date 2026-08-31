import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';

import { WelcomeBackPage } from './pages/WelcomeBackPage';
import { TeacherLoginPage } from './pages/TeacherLoginPage';
import { ParentLoginPage } from './pages/ParentLoginPage';

import { TeacherDashboard } from './pages/TeacherDashboard';
import { StudentProgressPage } from './pages/StudentProgressPage';
import { TeacherSettingsPage } from './pages/TeacherSettingsPage';

import { ParentDashboard } from './pages/parent/ParentDashboard';
import { ParentChildProgressPage } from './pages/parent/ParentChildProgressPage';
import { ParentSettingsPage } from './pages/parent/ParentSettingsPage';

import { PlaceholderLoginPage } from './pages/PlaceholderLoginPage';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<WelcomeBackPage />} />
            <Route path="/login/teacher" element={<TeacherLoginPage />} />
            <Route path="/login/parent" element={<ParentLoginPage />} />
            <Route path="/login/student" element={<PlaceholderLoginPage role="Student" color="text-[#7b4dff]" />} />
            <Route path="/login/admin" element={<PlaceholderLoginPage role="Admin" color="text-[#e18a2c]" />} />

            {/* Teacher Protected Routes */}
            <Route
              path="/teacher/dashboard"
              element={
                <ProtectedRoute allowedRoles={['teacher']}>
                  <TeacherDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/teacher/student-progress"
              element={
                <ProtectedRoute allowedRoles={['teacher']}>
                  <StudentProgressPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/teacher/settings"
              element={
                <ProtectedRoute allowedRoles={['teacher']}>
                  <TeacherSettingsPage />
                </ProtectedRoute>
              }
            />

            {/* Parent Protected Routes */}
            <Route
              path="/parent/dashboard"
              element={
                <ProtectedRoute allowedRoles={['parent']}>
                  <ParentDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/parent/child-progress"
              element={
                <ProtectedRoute allowedRoles={['parent']}>
                  <ParentChildProgressPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/parent/settings"
              element={
                <ProtectedRoute allowedRoles={['parent']}>
                  <ParentSettingsPage />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
