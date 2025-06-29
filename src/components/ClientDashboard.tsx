import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Users, Heart, CreditCard, Search, Star, Crown } from 'lucide-react';

const ClientDashboard: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('browse');

  const [subscription] = useState({
    active: false,
    plan: 'free',
    expires_at: null
  });

  const [savedFreelancers] = useState([
    {
      id: '1',
      name: 'Sarah Chen',
      skills: ['Prompt Engineering', 'LangChain'],
      rating: 4.9,
      hourly_rate: 85,
      badge_level: 'Expert'
    },
    {
      id: '2',
      name: 'Marcus Rodriguez',
      skills: ['Chatbot Development', 'Machine Learning'],
      rating: 4.8,
      hourly_rate: 75,
      badge_level: 'Professional'
    }
  ]);

  const handleUpgrade = () => {
    // Here you would integrate with Stripe
    console.log('Redirecting to Stripe checkout...');
  };

  const tabs = [
    { id: 'browse', label: 'Browse Talent', icon: Search },
    { id: 'saved', label: 'Saved Freelancers', icon: Heart },
    { id: 'subscription', label: 'Subscription', icon: CreditCard }
  ];

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Client Dashboard</h1>
          <p className="text-gray-600 mt-2">Find and hire the best AI talent for your projects</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <Search className="h-4 w-4 text-blue-600" />
                </div>
              </div>
              <div className="ml-4">
                <div className="text-2xl font-bold text-gray-900">47</div>
                <div className="text-sm text-gray-600">Talent Viewed</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                  <Heart className="h-4 w-4 text-red-600" />
                </div>
              </div>
              <div className="ml-4">
                <div className="text-2xl font-bold text-gray-900">{savedFreelancers.length}</div>
                <div className="text-sm text-gray-600">Saved Freelancers</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <Users className="h-4 w-4 text-green-600" />
                </div>
              </div>
              <div className="ml-4">
                <div className="text-2xl font-bold text-gray-900">3</div>
                <div className="text-sm text-gray-600">Contacted</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <Crown className="h-4 w-4 text-purple-600" />
                </div>
              </div>
              <div className="ml-4">
                <div className="text-2xl font-bold text-gray-900">{subscription.active ? 'Premium' : 'Free'}</div>
                <div className="text-sm text-gray-600">Plan</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <nav className="space-y-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                        activeTab === tab.id
                          ? 'bg-blue-50 text-blue-700 border border-blue-200'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-sm p-6">
              {activeTab === 'browse' && (
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">Find AI Talent</h2>
                  
                  {!subscription.active && (
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <Crown className="h-5 w-5 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-blue-900 mb-1">Upgrade to Premium</h3>
                          <p className="text-blue-800 text-sm mb-3">
                            Get unlimited access to freelancer contact details and advanced search filters.
                          </p>
                          <button
                            onClick={handleUpgrade}
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors"
                          >
                            Upgrade Now - $99/month
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="space-y-4">
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">Quick Search</h3>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <input
                          type="text"
                          placeholder="Search skills, names, or keywords..."
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                          Search
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                        <h4 className="font-medium text-gray-900 mb-1">Prompt Engineering</h4>
                        <p className="text-sm text-gray-600 mb-2">87 verified experts</p>
                        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                          Browse →
                        </button>
                      </div>

                      <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                        <h4 className="font-medium text-gray-900 mb-1">LangChain Development</h4>
                        <p className="text-sm text-gray-600 mb-2">45 verified experts</p>
                        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                          Browse →
                        </button>
                      </div>

                      <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                        <h4 className="font-medium text-gray-900 mb-1">Chatbot Development</h4>
                        <p className="text-sm text-gray-600 mb-2">62 verified experts</p>
                        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                          Browse →
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'saved' && (
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">Saved Freelancers</h2>
                  
                  {savedFreelancers.length > 0 ? (
                    <div className="space-y-4">
                      {savedFreelancers.map((freelancer) => (
                        <div key={freelancer.id} className="border border-gray-200 rounded-lg p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <div className="flex items-center space-x-3 mb-2">
                                <h3 className="font-semibold text-gray-900">{freelancer.name}</h3>
                                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                                  {freelancer.badge_level}
                                </span>
                                <div className="flex items-center">
                                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                                  <span className="text-sm text-gray-600 ml-1">{freelancer.rating}</span>
                                </div>
                              </div>
                              <div className="flex flex-wrap gap-2 mb-2">
                                {freelancer.skills.map((skill, index) => (
                                  <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                                    {skill}
                                  </span>
                                ))}
                              </div>
                              <div className="text-lg font-semibold text-gray-900">
                                ${freelancer.hourly_rate}/hr
                              </div>
                            </div>
                            <div className="flex space-x-2">
                              <button className="text-red-600 hover:text-red-800 p-2">
                                <Heart className="h-5 w-5 fill-current" />
                              </button>
                              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                                Contact
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <Heart className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">No saved freelancers yet</h3>
                      <p className="text-gray-600 mb-4">
                        Start browsing talent and save freelancers you're interested in working with.
                      </p>
                      <button
                        onClick={() => setActiveTab('browse')}
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Browse Talent
                      </button>
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'subscription' && (
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">Subscription & Access</h2>
                  
                  <div className="space-y-6">
                    <div className="border border-gray-200 rounded-lg p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">Current Plan: {subscription.active ? 'Premium' : 'Free'}</h3>
                          <p className="text-gray-600">
                            {subscription.active ? 'Full access to all freelancer details' : 'Limited access to basic profiles'}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-gray-900">
                            {subscription.active ? '$99' : '$0'}
                          </div>
                          <div className="text-sm text-gray-500">
                            {subscription.active ? '/month' : 'free'}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <div className={`w-4 h-4 rounded-full ${subscription.active ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                          <span className="text-gray-700">Access to freelancer contact details</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className={`w-4 h-4 rounded-full ${subscription.active ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                          <span className="text-gray-700">Advanced search and filtering</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className={`w-4 h-4 rounded-full ${subscription.active ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                          <span className="text-gray-700">Unlimited freelancer saves</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className={`w-4 h-4 rounded-full ${subscription.active ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                          <span className="text-gray-700">Priority customer support</span>
                        </div>
                      </div>

                      {!subscription.active && (
                        <div className="mt-6">
                          <button
                            onClick={handleUpgrade}
                            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                          >
                            Upgrade to Premium - $99/month
                          </button>
                          <p className="text-xs text-gray-500 text-center mt-2">
                            Cancel anytime. No long-term contracts.
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="bg-gray-50 rounded-lg p-6">
                      <h4 className="font-semibold text-gray-900 mb-4">Why Upgrade?</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Users className="h-3 w-3 text-blue-600" />
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">Direct Contact</div>
                            <div className="text-sm text-gray-600">Get email and contact details for all freelancers</div>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Search className="h-3 w-3 text-green-600" />
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">Advanced Search</div>
                            <div className="text-sm text-gray-600">Filter by rates, availability, and experience</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;