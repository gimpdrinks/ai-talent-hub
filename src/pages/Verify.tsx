import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import { Brain, CheckCircle, Clock, ArrowRight, ArrowLeft } from 'lucide-react';

const Verify: React.FC = () => {
  const { user } = useAuth();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const questions = [
    {
      id: 1,
      question: "What is the primary advantage of using prompt engineering in AI applications?",
      options: [
        "It reduces computational costs",
        "It improves model accuracy and output quality",
        "It eliminates the need for training data",
        "It makes AI models run faster"
      ],
      correct: 1
    },
    {
      id: 2,
      question: "In LangChain, what is the purpose of a 'chain'?",
      options: [
        "To store conversation history",
        "To connect multiple AI models",
        "To sequence multiple steps in a workflow",
        "To validate input data"
      ],
      correct: 2
    },
    {
      id: 3,
      question: "What is RAG (Retrieval-Augmented Generation) primarily used for?",
      options: [
        "Reducing model size",
        "Improving training speed",
        "Combining retrieved information with generated responses",
        "Encrypting AI outputs"
      ],
      correct: 2
    },
    {
      id: 4,
      question: "When implementing a chatbot, what is the most important consideration for user experience?",
      options: [
        "Response speed only",
        "Context awareness and conversational flow",
        "Using the largest available model",
        "Minimizing the number of interactions"
      ],
      correct: 1
    },
    {
      id: 5,
      question: "What is the key benefit of using vector databases in AI applications?",
      options: [
        "They store data more efficiently",
        "They enable semantic search and similarity matching",
        "They process data faster than traditional databases",
        "They require less maintenance"
      ],
      correct: 1
    }
  ];

  const handleAnswerSelect = (answerIndex: number) => {
    setAnswers({
      ...answers,
      [currentQuestion]: answerIndex.toString()
    });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    // Calculate score
    let correctAnswers = 0;
    questions.forEach((question, index) => {
      if (answers[index] && parseInt(answers[index]) === question.correct) {
        correctAnswers++;
      }
    });
    
    const finalScore = Math.round((correctAnswers / questions.length) * 100);
    setScore(finalScore);
    setSubmitted(true);
    
    // Here you would save the assessment to Supabase
    console.log('Saving assessment result:', {
      user_id: user.id,
      score: finalScore,
      answers: answers,
      submitted_at: new Date().toISOString()
    });
  };

  const getBadgeLevel = (score: number) => {
    if (score >= 90) return 'Expert';
    if (score >= 75) return 'Professional';
    if (score >= 60) return 'Intermediate';
    return 'Beginner';
  };

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

  if (submitted) {
    const badgeLevel = getBadgeLevel(score);
    const badgeColor = getBadgeColor(badgeLevel);

    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-sm p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Assessment Complete!</h1>
            <p className="text-lg text-gray-600 mb-8">
              Your AI skills have been evaluated and your verification is being processed.
            </p>

            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-1">{score}/100</div>
                  <div className="text-sm text-gray-600">Your Score</div>
                </div>
                <div className="text-center">
                  <div className={`inline-block px-3 py-1 rounded-full border text-lg font-semibold ${badgeColor}`}>
                    {badgeLevel}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">Badge Level</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-green-600 mb-1">Verified</div>
                  <div className="text-sm text-gray-600">Status</div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-blue-900 mb-2">What happens next?</h3>
              <ul className="text-left space-y-2 text-blue-800">
                <li>• Your verified badge will appear on your profile within 24 hours</li>
                <li>• Clients can now see your verification level in search results</li>
                <li>• You'll receive an email confirmation with your certificate</li>
                <li>• Consider upgrading to featured placement for maximum visibility</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.location.href = '/dashboard'}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Go to Dashboard
              </button>
              <button
                onClick={() => window.location.href = '/directory'}
                className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Browse Directory
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Brain className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">AI Skill Assessment</h1>
          </div>
          <p className="text-gray-600">
            Complete this assessment to get verified and showcase your AI expertise
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
            <span>Question {currentQuestion + 1} of {questions.length}</span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            {currentQ.question}
          </h2>

          <div className="space-y-3">
            {currentQ.options.map((option, index) => (
              <label
                key={index}
                className={`block cursor-pointer border-2 rounded-lg p-4 transition-colors ${
                  answers[currentQuestion] === index.toString()
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <input
                  type="radio"
                  name={`question-${currentQuestion}`}
                  value={index}
                  checked={answers[currentQuestion] === index.toString()}
                  onChange={() => handleAnswerSelect(index)}
                  className="sr-only"
                />
                <div className="flex items-center space-x-3">
                  <div className={`w-4 h-4 rounded-full border-2 ${
                    answers[currentQuestion] === index.toString()
                      ? 'border-blue-500 bg-blue-500'
                      : 'border-gray-300'
                  }`}>
                    {answers[currentQuestion] === index.toString() && (
                      <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>
                    )}
                  </div>
                  <span className="text-gray-900">{option}</span>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Previous</span>
          </button>

          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4 text-gray-400" />
            <span className="text-sm text-gray-600">No time limit</span>
          </div>

          {currentQuestion === questions.length - 1 ? (
            <button
              onClick={handleSubmit}
              disabled={!answers[currentQuestion]}
              className="flex items-center space-x-2 bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <span>Submit Assessment</span>
              <CheckCircle className="h-4 w-4" />
            </button>
          ) : (
            <button
              onClick={handleNext}
              disabled={!answers[currentQuestion]}
              className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <span>Next</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Verify;