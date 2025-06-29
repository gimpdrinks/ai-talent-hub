import React, { useState } from 'react';
import { CheckCircle, X, Crown, Users, Zap, Shield, Star, ArrowRight } from 'lucide-react';

const PricingPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const clientPlans = [
    {
      name: 'Starter',
      price: { monthly: 0, yearly: 0 },
      description: 'Perfect for trying out the platform',
      features: [
        'Browse freelancer profiles',
        'View basic information',
        'Post 1 project per month',
        'Basic search filters',
        'Community support'
      ],
      limitations: [
        'No contact details access',
        'Limited to 5 profile views',
        'No advanced filters'
      ],
      popular: false,
      buttonText: 'Get Started',
      buttonClass: 'border border-gray-300 text-gray-700 hover:bg-gray-50'
    },
    {
      name: 'Professional',
      price: { monthly: 99, yearly: 990 },
      description: 'For businesses hiring Filipino AI talent regularly',
      features: [
        'Everything in Starter',
        'Unlimited Filipino specialist contact access',
        'Advanced search & filters',
        'Unlimited project posts',
        'Priority support',
        'Project management tools',
        'Saved specialist lists',
        'Analytics dashboard'
      ],
      limitations: [],
      popular: true,
      buttonText: 'Start Free Trial',
      buttonClass: 'bg-blue-600 text-white hover:bg-blue-700'
    },
    {
      name: 'Enterprise',
      price: { monthly: 299, yearly: 2990 },
      description: 'For large organizations with complex needs',
      features: [
        'Everything in Professional',
        'Dedicated account manager',
        'Custom integrations',
        'API access',
        'Advanced analytics',
        'Team collaboration tools',
        'Custom contracts',
        'SLA guarantee'
      ],
      limitations: [],
      popular: false,
      buttonText: 'Contact Sales',
      buttonClass: 'bg-purple-600 text-white hover:bg-purple-700'
    }
  ];

  const freelancerPlans = [
    {
      name: 'Basic',
      price: { monthly: 0, yearly: 0 },
      description: 'Filipino AI professionals: Start your global career',
      features: [
        'Create profile',
        'Basic verification',
        'Apply to projects',
        'Standard listing',
        'Community access'
      ],
      limitations: [
        'Limited visibility',
        'No featured placement',
        'Basic analytics'
      ],
      popular: false,
      buttonText: 'Join Free',
      buttonClass: 'border border-gray-300 text-gray-700 hover:bg-gray-50'
    },
    {
      name: 'Featured',
      price: { monthly: 100, yearly: 1000 },
      description: 'Filipino experts: Boost visibility to global clients',
      features: [
        'Everything in Basic',
        'Featured profile placement',
        'Priority in search results',
        'Advanced analytics',
        'Profile optimization tools',
        'Enhanced verification badge',
        'Portfolio showcase',
        'Direct client matching'
      ],
      limitations: [],
      popular: true,
      buttonText: 'Go Featured',
      buttonClass: 'bg-blue-600 text-white hover:bg-blue-700'
    }
  ];

  const getSavingsPercentage = (plan: any) => {
    if (plan.price.yearly === 0) return 0;
    const monthlyTotal = plan.price.monthly * 12;
    const savings = monthlyTotal - plan.price.yearly;
    return Math.round((savings / monthlyTotal) * 100);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Access premium Filipino AI talent with transparent pricing. No hidden fees, no long-term contracts.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                billingCycle === 'monthly'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                billingCycle === 'yearly'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Yearly
              <span className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                Save up to 17%
              </span>
            </button>
          </div>
        </div>

        {/* Client Plans */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">For Clients</h2>
            <p className="text-lg text-gray-600">Find and hire the best Filipino AI talent for your projects</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clientPlans.map((plan, index) => (
              <div
                key={plan.name}
                className={`relative bg-white rounded-2xl shadow-sm ${
                  plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''
                } transition-transform hover:scale-105`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                      <Star className="h-4 w-4" />
                      <span>Most Popular</span>
                    </span>
                  </div>
                )}

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>

                  <div className="mb-6">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold text-gray-900">
                        ${plan.price[billingCycle]}
                      </span>
                      <span className="text-gray-500 ml-2">
                        /{billingCycle === 'monthly' ? 'month' : 'year'}
                      </span>
                    </div>
                    {billingCycle === 'yearly' && plan.price.yearly > 0 && (
                      <div className="text-sm text-green-600 mt-1">
                        Save {getSavingsPercentage(plan)}% vs monthly
                      </div>
                    )}
                  </div>

                  <button className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${plan.buttonClass}`}>
                    {plan.buttonText}
                  </button>

                  <div className="mt-8">
                    <h4 className="font-semibold text-gray-900 mb-4">What's included:</h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {plan.limitations.length > 0 && (
                      <div className="mt-6">
                        <h4 className="font-semibold text-gray-900 mb-4">Not included:</h4>
                        <ul className="space-y-3">
                          {plan.limitations.map((limitation, limitationIndex) => (
                            <li key={limitationIndex} className="flex items-center space-x-3">
                              <X className="h-5 w-5 text-gray-400 flex-shrink-0" />
                              <span className="text-gray-500">{limitation}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Freelancer Plans */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">For Freelancers</h2>
            <p className="text-lg text-gray-600">Filipino AI professionals: Grow your consulting business globally</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {freelancerPlans.map((plan, index) => (
              <div
                key={plan.name}
                className={`relative bg-white rounded-2xl shadow-sm ${
                  plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''
                } transition-transform hover:scale-105`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                      <Crown className="h-4 w-4" />
                      <span>Recommended</span>
                    </span>
                  </div>
                )}

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>

                  <div className="mb-6">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold text-gray-900">
                        ${plan.price[billingCycle]}
                      </span>
                      <span className="text-gray-500 ml-2">
                        /{billingCycle === 'monthly' ? 'month' : 'year'}
                      </span>
                    </div>
                    {billingCycle === 'yearly' && plan.price.yearly > 0 && (
                      <div className="text-sm text-green-600 mt-1">
                        Save {getSavingsPercentage(plan)}% vs monthly
                      </div>
                    )}
                  </div>

                  <button className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${plan.buttonClass}`}>
                    {plan.buttonText}
                  </button>

                  <div className="mt-8">
                    <h4 className="font-semibold text-gray-900 mb-4">What's included:</h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {plan.limitations.length > 0 && (
                      <div className="mt-6">
                        <h4 className="font-semibold text-gray-900 mb-4">Limitations:</h4>
                        <ul className="space-y-3">
                          {plan.limitations.map((limitation, limitationIndex) => (
                            <li key={limitationIndex} className="flex items-center space-x-3">
                              <X className="h-5 w-5 text-gray-400 flex-shrink-0" />
                              <span className="text-gray-500">{limitation}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I cancel my subscription anytime?</h3>
              <p className="text-gray-600">Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you offer refunds?</h3>
              <p className="text-gray-600">We offer a 14-day money-back guarantee for all paid plans. If you're not satisfied, we'll provide a full refund.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-600">We accept all major credit cards, PayPal, and bank transfers for enterprise plans.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How does the verification process work?</h3>
              <p className="text-gray-600">Our AI assessment evaluates technical skills of Filipino professionals through practical questions, code challenges, and scenario-based problems specific to AI development.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-xl opacity-90 mb-8">Join thousands of satisfied clients and freelancers</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2">
              <Users className="h-5 w-5" />
              <span>Start Hiring</span>
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center space-x-2">
              <Shield className="h-5 w-5" />
              <span>Get Verified</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;