import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import { Plus, FileText, DollarSign, Calendar, Users, Zap, CheckCircle, ArrowRight } from 'lucide-react';

const PostProject: React.FC = () => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    budget: '',
    timeline: '',
    skills: [] as string[],
    projectType: 'fixed',
    urgency: 'medium'
  });

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const skillOptions = [
    'Prompt Engineering', 'LangChain', 'OpenAI API', 'Chatbot Development', 
    'Machine Learning', 'RAG Systems', 'Vector Databases', 'AI Strategy',
    'NLP', 'Computer Vision', 'Fine-tuning', 'API Integration'
  ];

  const handleSkillToggle = (skill: string) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter(s => s !== skill)
        : [...prev.skills, skill]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would save the project to Supabase
    console.log('Project posted:', formData);
    alert('Project posted successfully! Freelancers will be notified.');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Your AI Project</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connect with verified AI specialists and bring your vision to life
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Project Title */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Title
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g., Build an AI chatbot for customer support"
                    required
                  />
                </div>

                {/* Project Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Description
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Describe your project in detail. What are you trying to achieve? What features do you need?"
                    required
                  />
                </div>

                {/* Project Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Project Type
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <label className={`cursor-pointer border-2 rounded-lg p-4 text-center transition-colors ${
                      formData.projectType === 'fixed' ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-gray-400'
                    }`}>
                      <input
                        type="radio"
                        value="fixed"
                        checked={formData.projectType === 'fixed'}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="sr-only"
                      />
                      <DollarSign className="h-6 w-6 mx-auto mb-2 text-gray-600" />
                      <div className="font-medium text-gray-900">Fixed Price</div>
                      <div className="text-sm text-gray-500">One-time payment</div>
                    </label>

                    <label className={`cursor-pointer border-2 rounded-lg p-4 text-center transition-colors ${
                      formData.projectType === 'hourly' ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-gray-400'
                    }`}>
                      <input
                        type="radio"
                        value="hourly"
                        checked={formData.projectType === 'hourly'}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="sr-only"
                      />
                      <Calendar className="h-6 w-6 mx-auto mb-2 text-gray-600" />
                      <div className="font-medium text-gray-900">Hourly Rate</div>
                      <div className="text-sm text-gray-500">Pay by the hour</div>
                    </label>
                  </div>
                </div>

                {/* Budget */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Budget Range
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    >
                      <option value="">Select budget range</option>
                      <option value="under-1k">Under $1,000</option>
                      <option value="1k-5k">$1,000 - $5,000</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k-plus">$50,000+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Timeline
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP (Rush job)</option>
                      <option value="1-week">Within 1 week</option>
                      <option value="2-4-weeks">2-4 weeks</option>
                      <option value="1-3-months">1-3 months</option>
                      <option value="3-plus-months">3+ months</option>
                    </select>
                  </div>
                </div>

                {/* Skills Required */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Skills Required
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {skillOptions.map((skill) => (
                      <label
                        key={skill}
                        className={`cursor-pointer border-2 rounded-lg p-3 text-center transition-colors ${
                          formData.skills.includes(skill)
                            ? 'border-blue-500 bg-blue-50 text-blue-700'
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={formData.skills.includes(skill)}
                          onChange={() => handleSkillToggle(skill)}
                          className="sr-only"
                        />
                        <div className="text-sm font-medium">{skill}</div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center space-x-2"
                  >
                    <Plus className="h-5 w-5" />
                    <span>Post Project</span>
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Tips */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">💡 Tips for Success</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                  <span>Be specific about your requirements</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                  <span>Include examples or references</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                  <span>Set realistic timelines</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                  <span>Choose multiple relevant skills</span>
                </li>
              </ul>
            </div>

            {/* What Happens Next */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">What happens next?</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">1</div>
                  <span className="text-blue-800 text-sm">Verified freelancers review your project</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">2</div>
                  <span className="text-blue-800 text-sm">You receive proposals within 24 hours</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">3</div>
                  <span className="text-blue-800 text-sm">Interview and hire the best candidate</span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Platform Stats</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Avg. Response Time</span>
                  <span className="font-semibold text-gray-900">8 hours</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Project Success Rate</span>
                  <span className="font-semibold text-green-600">98%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Verified Freelancers</span>
                  <span className="font-semibold text-gray-900">500+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostProject;