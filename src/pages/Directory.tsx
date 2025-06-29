import React, { useState, useEffect } from 'react';
import { Search, Filter, MapPin, Star, Shield, ChevronDown } from 'lucide-react';
import FreelancerCard from '../components/FreelancerCard';

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
}

const Directory: React.FC = () => {
  const [freelancers, setFreelancers] = useState<Freelancer[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSkill, setSelectedSkill] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  // Mock data for demonstration
  useEffect(() => {
    const mockFreelancers: Freelancer[] = [
      {
        id: '1',
        name: 'Maria Santos',
        region: 'Manila, Philippines',
        skills: ['Prompt Engineering', 'LangChain', 'OpenAI API'],
        rating: 4.9,
        verified: true,
        badge_level: 'Expert',
        bio: 'Filipino AI specialist with 5+ years building conversational AI systems for global clients',
        hourly_rate: 85,
        featured: true,
        avatar_url: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      {
        id: '2',
        name: 'Carlos Reyes',
        region: 'Cebu, Philippines',
        skills: ['Chatbot Development', 'Machine Learning', 'Python'],
        rating: 4.8,
        verified: true,
        badge_level: 'Professional',
        bio: 'Full-stack AI developer from Philippines specializing in enterprise chatbots',
        hourly_rate: 75,
        featured: true,
        avatar_url: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      {
        id: '3',
        name: 'Anna Rodriguez',
        region: 'Makati, Philippines',
        skills: ['AI Strategy', 'Prompt Engineering', 'GPT Integration'],
        rating: 4.9,
        verified: true,
        badge_level: 'Expert',
        bio: 'Filipino AI consultant helping global companies integrate LLMs into workflows',
        hourly_rate: 95,
        featured: false,
        avatar_url: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      {
        id: '4',
        name: 'Miguel Cruz',
        region: 'Davao, Philippines',
        skills: ['LangChain', 'Vector Databases', 'RAG Systems'],
        rating: 4.7,
        verified: true,
        badge_level: 'Professional',
        bio: 'Filipino backend engineer specializing in retrieval-augmented generation',
        hourly_rate: 70,
        featured: false,
        avatar_url: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      {
        id: '5',
        name: 'Sofia Dela Cruz',
        region: 'Quezon City, Philippines',
        skills: ['AI Ethics', 'Prompt Engineering', 'Content Generation'],
        rating: 4.8,
        verified: true,
        badge_level: 'Professional',
        bio: 'Filipino AI content strategist with expertise in responsible AI practices',
        hourly_rate: 80,
        featured: false,
        avatar_url: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      {
        id: '6',
        name: 'Jose Mendoza',
        region: 'Iloilo, Philippines',
        skills: ['NLP', 'Transformers', 'Fine-tuning'],
        rating: 4.6,
        verified: true,
        badge_level: 'Intermediate',
        bio: 'Filipino ML engineer focused on natural language processing applications',
        hourly_rate: 65,
        featured: false,
        avatar_url: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400'
      }
    ];

    setTimeout(() => {
      setFreelancers(mockFreelancers);
      setLoading(false);
    }, 500);
  }, []);

  const skills = ['Prompt Engineering', 'LangChain', 'Chatbot Development', 'Machine Learning', 'OpenAI API', 'AI Strategy'];
  const regions = ['Manila', 'Cebu', 'Davao', 'Makati', 'Quezon City', 'Iloilo', 'Baguio', 'Cagayan de Oro'];
  const levels = ['Intermediate', 'Professional', 'Expert'];

  const filteredFreelancers = freelancers.filter(freelancer => {
    const matchesSearch = freelancer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         freelancer.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesSkill = !selectedSkill || freelancer.skills.includes(selectedSkill);
    const matchesRegion = !selectedRegion || freelancer.region === selectedRegion;
    const matchesLevel = !selectedLevel || freelancer.badge_level === selectedLevel;
    
    return matchesSearch && matchesSkill && matchesRegion && matchesLevel;
  });

  // Sort to show featured freelancers first
  const sortedFreelancers = filteredFreelancers.sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return 0;
  });

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Find Filipino AI Talent</h1>
          <p className="text-lg text-gray-600">Browse {freelancers.length} verified Filipino AI specialists ready for your project</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search Filipino AI experts by name or skills..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Filter Toggle Button (Mobile) */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center justify-center space-x-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              <Filter className="h-5 w-5" />
              <span>Filters</span>
              <ChevronDown className={`h-4 w-4 transform ${showFilters ? 'rotate-180' : ''}`} />
            </button>

            {/* Filters */}
            <div className={`lg:flex lg:space-x-4 ${showFilters ? 'block' : 'hidden'} lg:block`}>
              <select
                value={selectedSkill}
                onChange={(e) => setSelectedSkill(e.target.value)}
                className="w-full lg:w-auto px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">All Skills</option>
                {skills.map(skill => (
                  <option key={skill} value={skill}>{skill}</option>
                ))}
              </select>

              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="w-full lg:w-auto px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">All Philippine Cities</option>
                {regions.map(region => (
                  <option key={region} value={region}>{region}</option>
                ))}
              </select>

              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="w-full lg:w-auto px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">All Levels</option>
                {levels.map(level => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {sortedFreelancers.length} Filipino AI specialist{sortedFreelancers.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Freelancer Grid */}
        {sortedFreelancers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedFreelancers.map(freelancer => (
              <FreelancerCard key={freelancer.id} freelancer={freelancer} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="h-12 w-12 mx-auto" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No Filipino AI specialists found</h3>
            <p className="text-gray-600">Try adjusting your search criteria or browse all Filipino talent.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Directory;