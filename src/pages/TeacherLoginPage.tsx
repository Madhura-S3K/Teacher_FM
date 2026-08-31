import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ArrowLeft, ArrowRight, AlertCircle } from 'lucide-react';

import { useAuth } from '../context/AuthContext';

export const TeacherLoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      setError('Please enter both your Email / Teacher ID and password.');
      return;
    }

    setError('');
    login('teacher', { name: 'Anaya Sharma', email });
    navigate('/teacher/dashboard');
  };

  return (
    <div className="min-h-screen bg-[#faf8fd] flex flex-col justify-between antialiased selection:bg-purple-100">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center p-6 max-w-md mx-auto w-full">
        <div className="bg-white rounded-2xl p-8 border border-[#f0ebf8] shadow-lg shadow-purple-900/5 w-full text-center">
          <div className="flex items-center justify-between mb-6">
            <Link
              to="/"
              className="inline-flex items-center text-xs font-semibold text-[#7032e3] hover:underline"
            >
              <ArrowLeft className="w-4 h-4 mr-1" /> Back to Role Selection
            </Link>
          </div>

          <h1 className="text-2xl font-bold text-[#3faf6c] mb-2">Teacher Login</h1>
          <p className="text-xs text-gray-500 mb-6">
            Access your teacher portal, manage curriculum, and track student performance.
          </p>

          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-left flex items-center space-x-2 text-red-600 text-xs font-medium">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4 text-left">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Email / Teacher ID
              </label>
              <input
                type="text"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError('');
                }}
                placeholder="teacher@school.edu or TCH-1024"
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#3faf6c]/40 transition-all"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (error) setError('');
                }}
                placeholder="••••••••"
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#3faf6c]/40 transition-all"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 rounded-xl text-white font-semibold text-sm bg-[#3faf6c] hover:bg-[#34985c] transition-colors shadow-md shadow-emerald-500/20 cursor-pointer mt-2 flex items-center justify-center space-x-1.5"
            >
              <span>Login</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};
