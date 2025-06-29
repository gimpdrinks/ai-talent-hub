import React from 'react';
import { Shield, Eye, Lock, Users, FileText, Clock } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  const lastUpdated = 'January 15, 2025';

  const sections = [
    {
      id: 'information-collection',
      title: 'Information We Collect',
      icon: Eye,
      content: [
        {
          subtitle: 'Personal Information',
          text: 'We collect information you provide directly to us, such as when you create an account, complete your profile, take assessments, or contact us for support. This includes your name, email address, professional information, and payment details.'
        },
        {
          subtitle: 'Assessment Data',
          text: 'When you take our AI skill assessments, we collect your responses, scores, and performance metrics. This data is used to verify your skills and create your verification badge.'
        },
        {
          subtitle: 'Usage Information',
          text: 'We automatically collect information about your interactions with our platform, including pages visited, features used, and time spent on the platform.'
        }
      ]
    },
    {
      id: 'information-use',
      title: 'How We Use Your Information',
      icon: FileText,
      content: [
        {
          subtitle: 'Platform Services',
          text: 'We use your information to provide, maintain, and improve our services, including matching freelancers with clients, processing payments, and providing customer support.'
        },
        {
          subtitle: 'Skill Verification',
          text: 'Assessment data is used exclusively for skill verification purposes and to determine appropriate badge levels. This information helps maintain the quality and integrity of our platform.'
        },
        {
          subtitle: 'Communication',
          text: 'We may use your contact information to send you important updates about your account, platform changes, and relevant opportunities.'
        }
      ]
    },
    {
      id: 'information-sharing',
      title: 'Information Sharing',
      icon: Users,
      content: [
        {
          subtitle: 'Public Profiles',
          text: 'Information in your freelancer profile (name, skills, bio, verification status) is visible to clients browsing our platform. You control what information to include in your public profile.'
        },
        {
          subtitle: 'With Clients',
          text: 'When clients have premium access, they may view additional contact information to facilitate project communication.'
        },
        {
          subtitle: 'Service Providers',
          text: 'We may share information with trusted third-party service providers who help us operate our platform, process payments, or provide customer support.'
        }
      ]
    },
    {
      id: 'data-security',
      title: 'Data Security',
      icon: Lock,
      content: [
        {
          subtitle: 'Protection Measures',
          text: 'We implement industry-standard security measures to protect your personal information, including encryption, secure servers, and regular security audits.'
        },
        {
          subtitle: 'Access Controls',
          text: 'Access to personal information is restricted to authorized personnel who need it to perform their job functions. All team members are trained on privacy and security practices.'
        },
        {
          subtitle: 'Data Retention',
          text: 'We retain your information for as long as your account is active or as needed to provide services. You can request deletion of your account and associated data at any time.'
        }
      ]
    }
  ];

  const principles = [
    {
      icon: Shield,
      title: 'Privacy by Design',
      description: 'Privacy considerations are built into every feature and process from the ground up.'
    },
    {
      icon: Lock,
      title: 'Data Minimization',
      description: 'We only collect and retain information that is necessary for our services.'
    },
    {
      icon: Users,
      title: 'User Control',
      description: 'You have control over your personal information and how it\'s used on our platform.'
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'We\'re clear about what data we collect and how we use it.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Shield className="h-10 w-10 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-900">Privacy Policy</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
          <div className="flex items-center justify-center space-x-2 text-gray-500">
            <Clock className="h-4 w-4" />
            <span>Last updated: {lastUpdated}</span>
          </div>
        </div>

        {/* Privacy Principles */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Our Privacy Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{principle.title}</h3>
                  <p className="text-gray-600 text-sm">{principle.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {/* Table of Contents */}
          <div className="bg-gray-50 px-8 py-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Table of Contents</h2>
            <nav className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {sections.map((section, index) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="text-blue-600 hover:text-blue-800 transition-colors py-1"
                >
                  {index + 1}. {section.title}
                </a>
              ))}
            </nav>
          </div>

          {/* Sections */}
          <div className="px-8 py-8 space-y-12">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <section key={section.id} id={section.id}>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      {index + 1}. {section.title}
                    </h2>
                  </div>
                  
                  <div className="space-y-6">
                    {section.content.map((item, itemIndex) => (
                      <div key={itemIndex}>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">
                          {item.subtitle}
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              );
            })}

            {/* Additional Important Information */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Rights and Choices</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Access and Update</h3>
                  <p className="text-gray-700">You can access and update your personal information through your account settings at any time.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Data Portability</h3>
                  <p className="text-gray-700">You can request a copy of your personal data in a structured, machine-readable format.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Account Deletion</h3>
                  <p className="text-gray-700">You can delete your account and associated data at any time through your account settings or by contacting support.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Marketing Communications</h3>
                  <p className="text-gray-700">You can opt out of marketing communications while continuing to receive important account-related messages.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Cookies and Tracking</h2>
              <p className="text-gray-700 mb-4">
                We use cookies and similar technologies to enhance your experience on our platform. Cookies help us:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Remember your preferences and settings</li>
                <li>Provide personalized content and features</li>
                <li>Analyze platform usage and performance</li>
                <li>Ensure security and prevent fraud</li>
              </ul>
              <p className="text-gray-700">
                You can control cookie settings through your browser preferences. Note that disabling certain cookies may affect platform functionality.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">International Data Transfers</h2>
              <p className="text-gray-700">
                As a global platform, we may transfer your information to servers located outside your country of residence. 
                We ensure appropriate safeguards are in place to protect your privacy rights, including using standard contractual 
                clauses approved by relevant data protection authorities.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Children's Privacy</h2>
              <p className="text-gray-700">
                Our platform is not intended for individuals under the age of 18. We do not knowingly collect personal information 
                from children under 18. If we become aware that we have collected such information, we will take steps to delete it promptly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Changes to This Policy</h2>
              <p className="text-gray-700">
                We may update this privacy policy from time to time to reflect changes in our practices or applicable laws. 
                We will notify you of any material changes by posting the updated policy on our platform and updating the 
                "last updated" date. Your continued use of our services after such changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about this privacy policy or our privacy practices, please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="space-y-2 text-gray-700">
                  <p><strong>Email:</strong> privacy@aitalenthub.com</p>
                  <p><strong>Address:</strong> AI TalentHub Inc., 123 Tech Street, Suite 100, San Francisco, CA 94105</p>
                  <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-xl p-8 text-center">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">Questions about our privacy practices?</h3>
          <p className="text-blue-800 mb-6">
            Our team is here to help you understand how we protect your information.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Contact Privacy Team
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;