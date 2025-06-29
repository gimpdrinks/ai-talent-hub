import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import { Shield, CheckCircle, XCircle, Clock, User, Award } from 'lucide-react';

const Admin: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('pending');

  // Mock admin check - in real app, check user role from database
  const isAdmin = user?.email === 'admin@aitalenthub.com';

  if (!user || !isAdmin) {
    return <Navigate to="/" replace />;
  }

  const [submissions] = useState([
    {
      id: '1',
      user_id: 'user1',
      freelancer_name: 'Alex Thompson',
      email: 'alex@email.com',
      submitted_at: '2025-01-15T10:30:00Z',
      score: 87,
      status: 'pending',
      answers: {
        0: '1',
        1: '2',
        2: '2',
        3: '1',
        4: '1'
      }
    },
    {
      id: '2',
      user_id: 'user2',
      freelancer_name: 'Maria Garcia',
      email: 'maria@email.com',
      submitted_at: '2025-01-14T15:45:00Z',
      score: 92,
      status: 'approved',
      badge_level: 'Expert',
      answers: {
        0: '1',
        1: '2',
        2: '2',
        3: '1',
        4: '1'
      }
    },
    {
      id: '3',
      user_id: 'user3',
      freelancer_name: 'John Smith',
      email: 'john@email.com',
      submitted_at: '2025-01-13T09:15:00Z',
      score: 45,
      status: 'rejected',
      rejection_reason: 'Score below minimum threshold (60%)',
      answers: {
        0: '0',
        1: '1',
        2: '0',
        3: '2',
        4: '0'
      }
    }
  ]);

  const getBadgeLevel = (score: number) => {
    if (score >= 90) return 'Expert';
    if (score >= 75) return 'Professional';
    if (score >= 60) return 'Intermediate';
    return 'Beginner';
  };

  const getBadgeColor = (level: string) => {
    switch (level) {
      case 'Expert':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'Professional':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Intermediate':
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const handleApprove = (submissionId: string) => {
    // Here you would update the submission status in Supabase
    console.log('Approving submission:', submissionId);
  };

  const handleReject = (submissionId: string, reason: string) => {
    // Here you would update the submission status in Supabase
    console.log('Rejecting submission:', submissionId, 'Reason:', reason);
  };

  const filteredSubmissions = submissions.filter(submission => {
    if (activeTab === 'pending') return submission.status === 'pending';
    if (activeTab === 'approved') return submission.status === 'approved';
    if (activeTab === 'rejected') return submission.status === 'rejected';
    return true;
  });

  const tabs = [
    { id: 'pending', label: 'Pending Review', icon: Clock, count: submissions.filter(s => s.status === 'pending').length },
    { id: 'approved', label: 'Approved', icon: CheckCircle, count: submissions.filter(s => s.status === 'approved').length },
    { id: 'rejected', label: 'Rejected', icon: XCircle, count: submissions.filter(s => s.status === 'rejected').length }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-2">
            <Shield className="h-8 w-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          </div>
          <p className="text-gray-600">Review and manage AI skill verification submissions</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Clock className="h-4 w-4 text-yellow-600" />
                </div>
              </div>
              <div className="ml-4">
                <div className="text-2xl font-bold text-gray-900">{submissions.filter(s => s.status === 'pending').length}</div>
                <div className="text-sm text-gray-600">Pending Review</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                </div>
              </div>
              <div className="ml-4">
                <div className="text-2xl font-bold text-gray-900">{submissions.filter(s => s.status === 'approved').length}</div>
                <div className="text-sm text-gray-600">Approved</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                  <XCircle className="h-4 w-4 text-red-600" />
                </div>
              </div>
              <div className="ml-4">
                <div className="text-2xl font-bold text-gray-900">{submissions.filter(s => s.status === 'rejected').length}</div>
                <div className="text-sm text-gray-600">Rejected</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <User className="h-4 w-4 text-blue-600" />
                </div>
              </div>
              <div className="ml-4">
                <div className="text-2xl font-bold text-gray-900">{submissions.length}</div>
                <div className="text-sm text-gray-600">Total Submissions</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === tab.id
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{tab.label}</span>
                    {tab.count > 0 && (
                      <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                        activeTab === tab.id ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
                      }`}>
                        {tab.count}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Content */}
          <div className="p-6">
            {filteredSubmissions.length > 0 ? (
              <div className="space-y-4">
                {filteredSubmissions.map((submission) => (
                  <div key={submission.id} className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">{submission.freelancer_name}</h3>
                          <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                            submission.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                            submission.status === 'approved' ? 'bg-green-100 text-green-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {submission.status.charAt(0).toUpperCase() + submission.status.slice(1)}
                          </span>
                        </div>
                        
                        <p className="text-gray-600 mb-2">{submission.email}</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                          <div>
                            <div className="text-sm text-gray-500">Score</div>
                            <div className="text-lg font-semibold text-gray-900">{submission.score}/100</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-500">Suggested Badge</div>
                            <span className={`inline-block px-2 py-1 text-sm font-semibold rounded-full border ${getBadgeColor(getBadgeLevel(submission.score))}`}>
                              {getBadgeLevel(submission.score)}
                            </span>
                          </div>
                          <div>
                            <div className="text-sm text-gray-500">Submitted</div>
                            <div className="text-sm text-gray-900">
                              {new Date(submission.submitted_at).toLocaleDateString()}
                            </div>
                          </div>
                        </div>

                        {submission.status === 'rejected' && submission.rejection_reason && (
                          <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
                            <div className="text-sm text-red-800">
                              <strong>Rejection Reason:</strong> {submission.rejection_reason}
                            </div>
                          </div>
                        )}
                      </div>

                      {submission.status === 'pending' && (
                        <div className="flex space-x-2 ml-4">
                          <button
                            onClick={() => handleReject(submission.id, 'Score below minimum threshold')}
                            className="flex items-center space-x-1 px-3 py-2 border border-red-300 text-red-700 rounded-lg hover:bg-red-50 transition-colors"
                          >
                            <XCircle className="h-4 w-4" />
                            <span>Reject</span>
                          </button>
                          <button
                            onClick={() => handleApprove(submission.id)}
                            className="flex items-center space-x-1 px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                          >
                            <CheckCircle className="h-4 w-4" />
                            <span>Approve</span>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <div className="text-gray-400 mb-4">
                  {activeTab === 'pending' && <Clock className="h-12 w-12 mx-auto" />}
                  {activeTab === 'approved' && <CheckCircle className="h-12 w-12 mx-auto" />}
                  {activeTab === 'rejected' && <XCircle className="h-12 w-12 mx-auto" />}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  No {activeTab} submissions
                </h3>
                <p className="text-gray-600">
                  {activeTab === 'pending' && 'All submissions have been reviewed.'}
                  {activeTab === 'approved' && 'No approved submissions yet.'}
                  {activeTab === 'rejected' && 'No rejected submissions yet.'}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;