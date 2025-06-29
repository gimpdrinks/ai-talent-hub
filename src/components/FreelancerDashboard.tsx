import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { User, Shield, Star, Award, Crown, ExternalLink, Edit3, Save, X } from 'lucide-react';

const FreelancerDashboard: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [profile, setProfile] = useState({
    name: 'John Doe',
    region: 'Americas',
    bio: 'AI specialist passionate about building intelligent systems',
    skills: ['Prompt Engineering', 'LangChain'],
    hourly_rate: 75,
    portfolio_url: 'https://johndoe.dev',
    phone: '',
    linkedin: ''
  });

  const [verificationStatus] = useState({
    submitted: true,
    status: 'approved',
    badge_level: 'Professional',
    score: 87
  });

  const [subscription] = useState({
    active: false,
    plan: 'free',
    expires_at: null
  });

  const handleProfileSave = () => {
    // Here you would save to Supabase
    setIsEditingProfile(false);
  };

  const handleUpgrade = () => {
    // Here you would integrate with Stripe
    console.log('Redirecting to Stripe checkout...');
  };

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'verification', label: 'Verification', icon: Shield },
    { id: 'subscription', label: 'Subscription', icon: Crown }
  ];

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Freelancer Dashboard</h1>
          <p className="text-gray-600 mt-2">Manage your profile and grow your AI consulting business</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <User className="h-4 w-4 text-blue-600" />
                </div>
              </div>
              <div className="ml-4">
                <div className="text-2xl font-bold text-gray-900">12</div>
                <div className="text-sm text-gray-600">Profile Views</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <Star className="h-4 w-4 text-green-600" />
                </div>
              </div>
              <div className="ml-4">
                <div className="text-2xl font-bold text-gray-900">4.8</div>
                <div className="text-sm text-gray-600">Rating</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <Award className="h-4 w-4 text-purple-600" />
                </div>
              </div>
              <div className="ml-4">
                <div className="text-2xl font-bold text-gray-900">Professional</div>
                <div className="text-sm text-gray-600">Badge Level</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Crown className="h-4 w-4 text-yellow-600" />
                </div>
              </div>
              <div className="ml-4">
                <div className="text-2xl font-bold text-gray-900">{subscription.active ? 'Featured' : 'Basic'}</div>
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
              {activeTab === 'profile' && (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold text-gray-900">Profile Information</h2>
                    {!isEditingProfile ? (
                      <button
                        onClick={() => setIsEditingProfile(true)}
                        className="flex items-center space-x-2 text-blue-600 hover:text-blue-800"
                      >
                        <Edit3 className="h-4 w-4" />
                        <span>Edit</span>
                      </button>
                    ) : (
                      <div className="flex space-x-2">
                        <button
                          onClick={handleProfileSave}
                          className="flex items-center space-x-2 bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700"
                        >
                          <Save className="h-4 w-4" />
                          <span>Save</span>
                        </button>
                        <button
                          onClick={() => setIsEditingProfile(false)}
                          className="flex items-center space-x-2 text-gray-600 hover:text-gray-800"
                        >
                          <X className="h-4 w-4" />
                          <span>Cancel</span>
                        </button>
                      </div>
                    )}
                  </div>

                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name
                        </label>
                        {isEditingProfile ? (
                          <input
                            type="text"
                            value={profile.name}
                            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          />
                        ) : (
                          <p className="text-gray-900">{profile.name}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Region
                        </label>
                        {isEditingProfile ? (
                          <select
                            value={profile.region}
                            onChange={(e) => setProfile({ ...profile, region: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          >
                            <option value="Americas">Americas</option>
                            <option value="Europe">Europe</option>
                            <option value="Asia">Asia</option>
                            <option value="Africa">Africa</option>
                            <option value="Oceania">Oceania</option>
                          </select>
                        ) : (
                          <p className="text-gray-900">{profile.region}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Bio
                      </label>
                      {isEditingProfile ? (
                        <textarea
                          value={profile.bio}
                          onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                          rows={3}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Tell clients about your expertise..."
                        />
                      ) : (
                        <p className="text-gray-900">{profile.bio}</p>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Hourly Rate ($)
                        </label>
                        {isEditingProfile ? (
                          <input
                            type="number"
                            value={profile.hourly_rate}
                            onChange={(e) => setProfile({ ...profile, hourly_rate: parseInt(e.target.value) })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          />
                        ) : (
                          <p className="text-gray-900">${profile.hourly_rate}/hr</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Portfolio URL
                        </label>
                        {isEditingProfile ? (
                          <input
                            type="url"
                            value={profile.portfolio_url}
                            onChange={(e) => setProfile({ ...profile, portfolio_url: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="https://..."
                          />
                        ) : (
                          <a
                            href={profile.portfolio_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 flex items-center space-x-1"
                          >
                            <span>{profile.portfolio_url}</span>
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Skills
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {profile.skills.map((skill, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                        {isEditingProfile && (
                          <button className="px-3 py-1 border-2 border-dashed border-gray-300 rounded-full text-sm text-gray-500 hover:border-gray-400">
                            + Add Skill
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'verification' && (
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">AI Skill Verification</h2>
                  
                  {verificationStatus.submitted ? (
                    <div className="space-y-6">
                      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                            <Shield className="h-5 w-5 text-green-600" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-green-900">Verification Complete!</h3>
                            <p className="text-green-700">Your AI skills have been verified</p>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-green-900">{verificationStatus.score}/100</div>
                            <div className="text-sm text-green-700">Assessment Score</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold text-green-900">{verificationStatus.badge_level}</div>
                            <div className="text-sm text-green-700">Badge Level</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold text-green-900">Verified</div>
                            <div className="text-sm text-green-700">Status</div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                        <h4 className="font-semibold text-blue-900 mb-2">Next Steps</h4>
                        <ul className="space-y-2 text-blue-800">
                          <li>• Your verified badge is now displayed on your profile</li>
                          <li>• Clients can see your verification level in search results</li>
                          <li>• Consider upgrading to featured placement for more visibility</li>
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <Shield className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Get AI Verified</h3>
                      <p className="text-gray-600 mb-6">
                        Complete our AI assessment to get verified and stand out to clients
                      </p>
                      <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                        Start Verification
                      </button>
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'subscription' && (
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">Subscription & Features</h2>
                  
                  <div className="space-y-6">
                    <div className="border border-gray-200 rounded-lg p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">Current Plan: {subscription.active ? 'Featured' : 'Basic'}</h3>
                          <p className="text-gray-600">
                            {subscription.active ? 'Your profile is featured in search results' : 'Standard profile visibility'}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-gray-900">
                            {subscription.active ? '$100' : '$0'}
                          </div>
                          <div className="text-sm text-gray-500">
                            {subscription.active ? '/year' : 'free'}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <div className={`w-4 h-4 rounded-full ${subscription.active ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                          <span className="text-gray-700">Featured placement in search results</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className={`w-4 h-4 rounded-full ${subscription.active ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                          <span className="text-gray-700">Priority listing in directory</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className={`w-4 h-4 rounded-full ${subscription.active ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                          <span className="text-gray-700">Enhanced profile analytics</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className={`w-4 h-4 rounded-full ${subscription.active ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                          <span className="text-gray-700">Featured badge on profile</span>
                        </div>
                      </div>

                      {!subscription.active && (
                        <div className="mt-6">
                          <button
                            onClick={handleUpgrade}
                            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                          >
                            Upgrade to Featured - $100/year
                          </button>
                          <p className="text-xs text-gray-500 text-center mt-2">
                            Get 3x more profile views and higher conversion rates
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="bg-gray-50 rounded-lg p-6">
                      <h4 className="font-semibold text-gray-900 mb-4">Why Upgrade?</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Star className="h-3 w-3 text-blue-600" />
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">3x More Visibility</div>
                            <div className="text-sm text-gray-600">Featured freelancers get 3x more profile views</div>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Award className="h-3 w-3 text-green-600" />
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">Higher Conversions</div>
                            <div className="text-sm text-gray-600">Featured badge increases client trust</div>
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

export default FreelancerDashboard;