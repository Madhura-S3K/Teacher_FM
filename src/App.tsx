import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { WelcomeBackPage } from './pages/WelcomeBackPage';
import { TeacherLoginPage } from './pages/TeacherLoginPage';
import { TeacherDashboard } from './pages/TeacherDashboard';
import { PlaceholderLoginPage } from './pages/PlaceholderLoginPage';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<WelcomeBackPage />} />
          <Route path="/login/teacher" element={<TeacherLoginPage />} />
          <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
          <Route path="/login/student" element={<PlaceholderLoginPage role="Student" color="text-[#7b4dff]" />} />
          <Route path="/login/parent" element={<PlaceholderLoginPage role="Parent" color="text-[#4c9eeb]" />} />
          <Route path="/login/admin" element={<PlaceholderLoginPage role="Admin" color="text-[#e18a2c]" />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
