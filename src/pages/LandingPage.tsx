import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, CheckCircle, Star, Users, Shield, Zap, ArrowRight, Quote } from 'lucide-react';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pt-24 sm:pb-20">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Connect with top Filipino
              <span className="block text-blue-300">AI specialists</span>
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Access a curated pool of highly skilled Filipino AI professionals who combine 
              technical excellence with strong English proficiency and competitive rates.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link 
                to="/directory"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300"
              >
                <Users className="h-5 w-5" />
                <span>Browse Filipino Talent</span>
                Find Filipino AI Experts
              </Link>
              <Link 
                to="/signup"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300 flex items-center space-x-2"
              >
                Join as Filipino Expert
                <span>Join as Filipino Expert</span>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-200">800+</div>
                <div className="text-blue-100">Filipino AI Experts</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-200">2,500+</div>
                <div className="text-blue-100">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-200">98%</div>
                <div className="text-blue-100">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-200">45+</div>
                <div className="text-blue-100">Countries Served</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Filipino AI Talent?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Filipino AI professionals offer the perfect blend of technical expertise, 
              cultural compatibility, and exceptional value for global businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">English Proficiency</h3>
              <p className="text-gray-600">
                Native-level English speakers with excellent communication skills, ensuring 
                seamless collaboration across time zones and cultural boundaries.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Technical Excellence</h3>
              <p className="text-gray-600">
                Rigorously tested AI specialists with deep expertise in machine learning, 
                prompt engineering, and cutting-edge AI technologies.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Exceptional Value</h3>
              <p className="text-gray-600">
                Access world-class AI expertise at competitive rates, delivering premium 
                quality while optimizing your project budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <Quote className="h-6 w-6 text-blue-600 mr-2" />
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Our Filipino AI specialist exceeded expectations. Outstanding technical skills, 
                perfect English, and delivered our chatbot ahead of schedule."
              </p>
              <div className="font-semibold text-gray-900">James Mitchell, CTO at TechFlow</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <Quote className="h-6 w-6 text-blue-600 mr-2" />
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Working with Filipino AI talent through this platform has been game-changing. 
                Great communication, timezone alignment, and exceptional AI expertise."
              </p>
              <div className="font-semibold text-gray-900">Sarah Chen, Founder of AIStart</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <Quote className="h-6 w-6 text-blue-600 mr-2" />
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "As a Filipino AI engineer, this platform connected me with amazing global clients 
                who value our skills and cultural work ethic."
              </p>
              <div className="font-semibold text-gray-900">Maria Santos, AI Specialist</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Choose the plan that works best for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Client Plan */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-blue-300 transition-colors duration-300">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">For Clients</h3>
                <div className="text-4xl font-bold text-blue-600 mb-4">$99<span className="text-lg text-gray-500">/month</span></div>
                <p className="text-gray-600 mb-8">Access verified freelancer contact details</p>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Unlimited freelancer browsing</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Direct contact access</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Advanced search filters</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Priority support</span>
                  </li>
                </ul>
                
                <Link 
                  to="/signup"
                  className="block bg-blue-600 text-white text-center py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
                >
                  Start Free Trial
                </Link>
              </div>
            </div>

            {/* Freelancer Plan */}
            <div className="bg-gradient-to-br from-purple-600 to-blue-600 text-white rounded-xl p-8 transform hover:scale-105 transition-transform duration-300">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">For Freelancers</h3>
                <div className="text-4xl font-bold mb-4">$100<span className="text-lg opacity-75">/year</span></div>
                <p className="opacity-90 mb-8">Get featured and boost your visibility</p>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-300 mr-3" />
                    <span>Free verification assessment</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-300 mr-3" />
                    <span>Featured listing placement</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-300 mr-3" />
                    <span>Profile optimization tools</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-300 mr-3" />
                    <span>Analytics dashboard</span>
                  </li>
                </ul>
                
                <Link 
                  to="/signup"
                  className="block bg-white text-purple-600 text-center py-3 px-6 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
                >
                  Get Verified
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of clients and freelancers who trust AI TalentHub for their AI projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/directory"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Browse Talent Now
            </Link>
            <Link 
              to="/signup"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors duration-300"
            >
              Join as Freelancer
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Brain className="h-8 w-8 text-blue-400" />
                <span className="text-xl font-bold">AI TalentHub</span>
              </div>
              <p className="text-gray-400">
                Connecting verified AI talent with forward-thinking companies.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">For Clients</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/directory" className="hover:text-white transition-colors">Browse Talent</Link></li>
                <li><Link to="/post-project" className="hover:text-white transition-colors">Post a Project</Link></li>
                <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">For Freelancers</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/signup" className="hover:text-white transition-colors">Get Verified</Link></li>
                <li><Link to="/verify" className="hover:text-white transition-colors">Take Assessment</Link></li>
                <li><Link to="/dashboard" className="hover:text-white transition-colors">Dashboard</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 AI TalentHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;