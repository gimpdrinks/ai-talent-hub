import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Brain, Mail, Lock, User, AlertCircle, CheckCircle } from 'lucide-react';

const Signup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('client');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { signUp } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password || !confirmPassword) {
      setError('Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const { error } = await signUp(email, password, role);
      if (error) {
        setError(error.message);
      } else {
        navigate('/dashboard');
      }
    } catch (err) {
      setError('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <Link to="/" className="flex items-center justify-center space-x-2 mb-6">
            <Brain className="h-12 w-12 text-white" />
            <span className="text-2xl font-bold text-white">AI TalentHub</span>
          </Link>
          <h2 className="text-3xl font-bold text-white mb-2">Create your account</h2>
          <p className="text-blue-200">Join the AI talent revolution</p>
        </div>

        <div className="bg-white rounded-xl shadow-2xl p-8">
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-2">
              <AlertCircle className="h-5 w-5 text-red-500" />
              <span className="text-red-700">{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Role Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                I want to...
              </label>
              <div className="grid grid-cols-2 gap-3">
                <label className={`cursor-pointer border-2 rounded-lg p-4 text-center transition-colors ${
                  role === 'client' ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-gray-400'
                }`}>
                  <input
                    type="radio"
                    value="client"
                    checked={role === 'client'}
                    onChange={(e) => setRole(e.target.value)}
                    className="sr-only"
                  />
                  <User className="h-6 w-6 mx-auto mb-2 text-gray-600" />
                  <div className="font-medium text-gray-900">Hire Talent</div>
                  <div className="text-xs text-gray-500">Find AI freelancers</div>
                </label>
                
                <label className={`cursor-pointer border-2 rounded-lg p-4 text-center transition-colors ${
                  role === 'freelancer' ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-gray-400'
                }`}>
                  <input
                    type="radio"
                    value="freelancer"
                    checked={role === 'freelancer'}
                    onChange={(e) => setRole(e.target.value)}
                    className="sr-only"
                  />
                  <Brain className="h-6 w-6 mx-auto mb-2 text-gray-600" />
                  <div className="font-medium text-gray-900">Offer Services</div>
                  <div className="text-xs text-gray-500">Filipino AI experts</div>
                </label>
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Create a password"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                Confirm password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Confirm your password"
                  required
                />
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="terms"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                required
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                I agree to the{' '}
                <a href="#" className="text-blue-600 hover:text-blue-800">Terms of Service</a>
                {' '}and{' '}
                <a href="#" className="text-blue-600 hover:text-blue-800">Privacy Policy</a>
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Creating account...' : 'Create account'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="text-blue-600 hover:text-blue-800 font-semibold">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;