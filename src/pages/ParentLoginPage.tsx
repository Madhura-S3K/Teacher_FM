import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ArrowLeft, ArrowRight, AlertCircle } from 'lucide-react';
import parentAvatar from '../assets/avatars/parent_avatar.png';
import { useAuth } from '../context/AuthContext';

export const ParentLoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      setError('Please enter both your Email / Parent ID and password.');
      return;
    }

    setError('');
    login('parent', { name: 'Priya Sharma', email });
    navigate('/parent/dashboard');
  };

  return (
    <div className="min-h-screen bg-[#faf8fd] dark:bg-[#101014] flex flex-col justify-between antialiased selection:bg-blue-100 dark:selection:bg-blue-900/40 transition-colors">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center p-6 max-w-md mx-auto w-full">
        <div className="bg-white dark:bg-[#18181b] rounded-2xl p-8 border border-[#f0ebf8] dark:border-[#27272f] shadow-lg shadow-purple-900/5 dark:shadow-none w-full text-center">
          <div className="flex items-center justify-between mb-6">
            <Link
              to="/"
              className="inline-flex items-center text-xs font-semibold text-[#7032e3] dark:text-[#a855f7] hover:underline"
            >
              <ArrowLeft className="w-4 h-4 mr-1" /> Back to Role Selection
            </Link>
          </div>

          <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-4 border border-gray-100 dark:border-gray-800 shadow-xs flex items-center justify-center bg-gray-50">
            <img src={parentAvatar} alt="Parent Portal" className="w-full h-full object-cover" />
          </div>

          <h1 className="text-2xl font-bold text-[#0d52ce] dark:text-[#3b82f6] mb-2">Parent Login</h1>
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-6">
            Access your parent portal, track your child's learning progress, and view performance insights.
          </p>

          {error && (
            <div className="mb-4 p-3 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 rounded-xl text-left flex items-center space-x-2 text-red-600 dark:text-red-400 text-xs font-medium">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4 text-left">
            <div>
              <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email / Parent ID
              </label>
              <input
                type="text"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError('');
                }}
                placeholder="parent@example.com or PRN-8092"
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 dark:border-[#27272f] bg-white dark:bg-[#101014] text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#0d52ce]/40 transition-all"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
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
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 dark:border-[#27272f] bg-white dark:bg-[#101014] text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#0d52ce]/40 transition-all"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 rounded-xl text-white font-semibold text-sm bg-[#0d52ce] hover:bg-[#0b43aa] transition-colors shadow-md shadow-blue-500/20 cursor-pointer mt-2 flex items-center justify-center space-x-1.5"
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
