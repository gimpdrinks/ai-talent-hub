import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import FreelancerDashboard from '../components/FreelancerDashboard';
import ClientDashboard from '../components/ClientDashboard';

const Dashboard: React.FC = () => {
  const { user, loading } = useAuth();
  const [userRole, setUserRole] = useState<string | null>(null);

  useEffect(() => {
    if (user) {
      // In a real app, you'd fetch this from your database
      // For now, we'll use metadata from the auth signup or default to 'client'
      const role = user.user_metadata?.role || 'client';
      setUserRole(role);
    }
  }, [user]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {userRole === 'freelancer' ? (
        <FreelancerDashboard />
      ) : (
        <ClientDashboard />
      )}
    </div>
  );
};

export default Dashboard;