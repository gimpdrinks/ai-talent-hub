import React from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin, Shield, Crown } from 'lucide-react';

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

interface FreelancerCardProps {
  freelancer: Freelancer;
}

const FreelancerCard: React.FC<FreelancerCardProps> = ({ freelancer }) => {
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

  return (
    <div className={`bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden ${
      freelancer.featured ? 'ring-2 ring-blue-200 relative' : ''
    }`}>
      {freelancer.featured && (
        <div className="absolute top-0 right-0 bg-gradient-to-l from-blue-600 to-purple-600 text-white px-3 py-1 text-xs font-semibold rounded-bl-lg flex items-center space-x-1">
          <Crown className="h-3 w-3" />
          <span>Featured</span>
        </div>
      )}
      
      <div className="p-6">
        {/* Avatar and Basic Info */}
        <div className="flex items-start space-x-4 mb-4">
          <div className="relative">
            <img
              src={freelancer.avatar_url || `https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400`}
              alt={freelancer.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            {freelancer.verified && (
              <div className="absolute -bottom-1 -right-1 bg-blue-600 rounded-full p-1">
                <Shield className="h-3 w-3 text-white" />
              </div>
            )}
          </div>
          
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-1">{freelancer.name}</h3>
            <div className="flex items-center text-gray-600 text-sm mb-2">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{freelancer.region}</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span className="text-sm font-medium text-gray-900 ml-1">{freelancer.rating}</span>
              </div>
              <span className={`px-2 py-1 text-xs font-semibold rounded-full border ${getBadgeColor(freelancer.badge_level)}`}>
                {freelancer.badge_level}
              </span>
            </div>
          </div>
        </div>

        {/* Bio */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{freelancer.bio}</p>

        {/* Skills */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {freelancer.skills.slice(0, 3).map((skill, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
              >
                {skill}
              </span>
            ))}
            {freelancer.skills.length > 3 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-md">
                +{freelancer.skills.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Rate and CTA */}
        <div className="flex items-center justify-between">
          <div className="text-lg font-bold text-gray-900">
            ${freelancer.hourly_rate}
            <span className="text-sm font-normal text-gray-500">/hr</span>
          </div>
          <Link
            to={`/freelancer/${freelancer.id}`}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
          >
            View Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FreelancerCard;