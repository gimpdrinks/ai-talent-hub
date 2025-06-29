import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, MapPin, Shield, Crown, ExternalLink, Mail, Clock, Award } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface Freelancer {
  id: string;
  name: string;
  region: string;
  skills: string[];
  rating: number;
  verified: boolean;
  badge_level: string;
  bio: string;
  hourly_rate: number;
  avatar_url?: string;
  featured: boolean;
  portfolio_url?: string;
  email: string;
  experience_years: number;
  completed_projects: number;
  description: string;
}

const FreelancerProfile: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { user } = useAuth();
  const [freelancer, setFreelancer] = useState<Freelancer | null>(null);
  const [loading, setLoading] = useState(true);
  const [showContactModal, setShowContactModal] = useState(false);

  // Mock data for demonstration
  useEffect(() => {
    const mockFreelancers: Record<string, Freelancer> = {
      '1': {
        id: '1',
        name: 'Maria Santos',
        region: 'Manila, Philippines',
        skills: ['Prompt Engineering', 'LangChain', 'OpenAI API', 'RAG Systems', 'Vector Databases'],
        rating: 4.9,
        verified: true,
        badge_level: 'Expert',
        bio: 'Filipino AI specialist with 5+ years building conversational AI systems',
        hourly_rate: 85,
        featured: true,
        avatar_url: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
        portfolio_url: 'https://maria-ai-portfolio.com',
        email: 'maria.santos@email.com',
        experience_years: 5,
        completed_projects: 47,
        description: `I'm a passionate Filipino AI engineer with over 5 years of experience in building cutting-edge conversational AI systems for global clients. My expertise spans across the entire AI development lifecycle, from initial concept and prompt engineering to deployment and optimization.

Based in Manila, I specialize in creating sophisticated chatbots and AI assistants that deliver exceptional user experiences. My strong English communication skills and cultural adaptability make me an ideal partner for international projects. My technical stack includes advanced prompt engineering techniques, LangChain for building complex AI workflows, and various vector databases for implementing robust RAG systems.

Recent achievements include:
• Built a customer service AI that reduced response times by 80% for a Fortune 500 company
• Developed a legal document analysis system using RAG that processes 1000+ documents per hour for a US law firm
• Created a multi-language content generation platform serving 50,000+ daily users

I'm committed to delivering high-quality solutions that not only meet technical requirements but also drive real business value. As a Filipino professional, I bring dedication, reliability, and cultural understanding to every project. Let's discuss how I can help bring your AI vision to life.`
      },
      '2': {
        id: '2',
        name: 'Carlos Reyes',
        region: 'Cebu, Philippines',
        skills: ['Chatbot Development', 'Machine Learning', 'Python', 'TensorFlow', 'API Integration'],
        rating: 4.8,
        verified: true,
        badge_level: 'Professional',
        bio: 'Filipino full-stack AI developer specializing in enterprise chatbots',
        hourly_rate: 75,
        featured: true,
        avatar_url: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
        portfolio_url: 'https://carlos-dev.io',
        email: 'carlos@email.com',
        experience_years: 4,
        completed_projects: 32,
        description: `Filipino full-stack AI developer based in Cebu with a passion for creating intelligent chatbots that transform how businesses interact with their customers. With 4 years of hands-on experience, I've helped dozens of international companies implement AI solutions that drive engagement and efficiency.

Working from the Philippines, I bring the perfect combination of technical excellence, strong English communication, and cost-effective solutions to global clients. My approach ensures that every AI solution I build delivers measurable value. I specialize in enterprise-grade chatbots that can handle complex workflows, integrate with existing systems, and scale to serve thousands of users simultaneously.

Technical expertise includes:
• Advanced machine learning algorithms and model optimization
• Full-stack development with Python, TensorFlow, and modern web technologies
• API design and integration for seamless system connectivity
• Performance optimization and scalability planning

I pride myself on clear communication, cultural adaptability, and collaborative problem-solving. Every project begins with understanding your specific needs and ends with a solution that exceeds expectations.`
      }
    };

    setTimeout(() => {
      if (id && mockFreelancers[id]) {
        setFreelancer(mockFreelancers[id]);
      }
      setLoading(false);
    }, 500);
  }, [id]);

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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!freelancer) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Freelancer not found</h1>
          <Link to="/directory" className="text-blue-600 hover:text-blue-800">
            ← Back to directory
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link 
          to="/directory" 
          className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to directory</span>
        </Link>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {freelancer.featured && (
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3">
              <div className="flex items-center space-x-2">
                <Crown className="h-4 w-4" />
                <span className="text-sm font-semibold">Featured Freelancer</span>
              </div>
            </div>
          )}

          {/* Header */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex flex-col md:flex-row md:items-start md:space-x-6">
              <div className="relative mb-4 md:mb-0">
                <img
                  src={freelancer.avatar_url}
                  alt={freelancer.name}
                  className="w-24 h-24 rounded-full object-cover"
                />
                {freelancer.verified && (
                  <div className="absolute -bottom-2 -right-2 bg-blue-600 rounded-full p-2">
                    <Shield className="h-4 w-4 text-white" />
                  </div>
                )}
              </div>

              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">{freelancer.name}</h1>
                    <div className="flex items-center text-gray-600 mb-3">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{freelancer.region}</span>
                    </div>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="flex items-center">
                        <Star className="h-5 w-5 text-yellow-400 fill-current" />
                        <span className="text-lg font-semibold text-gray-900 ml-1">{freelancer.rating}</span>
                        <span className="text-gray-500 ml-1">rating</span>
                      </div>
                      <span className={`px-3 py-1 text-sm font-semibold rounded-full border ${getBadgeColor(freelancer.badge_level)}`}>
                        <Award className="h-3 w-3 inline mr-1" />
                        {freelancer.badge_level}
                      </span>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-3xl font-bold text-gray-900 mb-1">
                      ${freelancer.hourly_rate}
                      <span className="text-lg font-normal text-gray-500">/hr</span>
                    </div>
                    <button
                      onClick={() => setShowContactModal(true)}
                      className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2"
                    >
                      <Mail className="h-4 w-4" />
                      <span>Contact</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-gray-900">{freelancer.experience_years}</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">{freelancer.completed_projects}</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">98%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* About */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">About</h2>
              <div className="prose max-w-none text-gray-700">
                {freelancer.description.split('\n').map((paragraph, index) => (
                  <p key={index} className="mb-4 leading-relaxed">{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Skills</h2>
              <div className="flex flex-wrap gap-3">
                {freelancer.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Portfolio */}
            {freelancer.portfolio_url && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Portfolio</h2>
                <a
                  href={freelancer.portfolio_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-medium"
                >
                  <span>View Portfolio</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-md w-full p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact {freelancer.name}</h3>
            
            {user ? (
              <div>
                <p className="text-gray-600 mb-4">
                  Ready to start your project? Send a message to get the conversation started.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                  <div className="flex items-center space-x-2 text-blue-800">
                    <Mail className="h-4 w-4" />
                    <span className="font-medium">{freelancer.email}</span>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <button
                    onClick={() => setShowContactModal(false)}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <a
                    href={`mailto:${freelancer.email}?subject=Project Inquiry&body=Hi ${freelancer.name}, I found your profile on AI TalentHub and would like to discuss a project...`}
                    className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center"
                  >
                    Send Email
                  </a>
                </div>
              </div>
            ) : (
              <div>
                <p className="text-gray-600 mb-4">
                  Please sign in to access freelancer contact information and start your project.
                </p>
                <div className="flex space-x-3">
                  <button
                    onClick={() => setShowContactModal(false)}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <Link
                    to="/login"
                    className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center"
                  >
                    Sign In
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default FreelancerProfile;