import React from 'react';
import { 
  Camera, 
  Leaf, 
  TrendingUp, 
  Users, 
  AlertCircle, 
  Bell, 
  Mic, 
  BarChart3 
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Camera,
      title: "Smart Receipt Stream",
      description: "Real-time camera-based receipt capture overlay using Gemini Vision models to extract line items instantly.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Leaf,
      title: "Environmental Impact Insights",
      description: "Calculate carbon footprint per receipt with visual eco-impact summaries and suggestions for greener choices.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: TrendingUp,
      title: "Predictive Need Forecast",
      description: "Predicts item depletion dates based on purchase frequency and generates smart shopping lists with reminders.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Users,
      title: "Receipt Sharing & Split Payments",
      description: "AI splits group receipts by individual orders with instant Google Pay payments for each share.",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: AlertCircle,
      title: "Price Drop Alerts",
      description: "Monitors post-purchase price drops and notifies users to return and repurchase within store policies.",
      color: "from-red-500 to-red-600"
    },
    {
      icon: Bell,
      title: "Context-Aware Notifications",
      description: "Smart notifications based on location, shopping history, and store sales for timely reminders.",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: Mic,
      title: "Voice & Multimodal Query",
      description: "Ask spending or product queries using voice. Gemini Vision + NLP returns contextual, actionable responses.",
      color: "from-teal-500 to-teal-600"
    },
    {
      icon: BarChart3,
      title: "Visual Expense Insights",
      description: "Line, bar, pie, and stacked graphs for spending analysis with local language summaries and emojis.",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Modern Receipt Management
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the future of expense tracking with AI-powered insights and seamless Google Wallet integration.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;