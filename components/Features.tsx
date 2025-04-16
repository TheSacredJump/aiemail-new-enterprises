import React from 'react'
import { Mail, MessageSquareText, BarChart2, Link2 } from 'lucide-react'

const Features = () => {
  const features = [
    {
      title: "Smart Email Classification",
      description: "AI-powered categorization of customer inquiries for faster response times.",
      icon: Mail
    },
    {
      title: "Automated Responses",
      description: "Generate accurate replies to common telecom support questions instantly.",
      icon: MessageSquareText
    },
    {
      title: "Sentiment Analysis",
      description: "Identify urgent customer issues and prioritize critical communications.",
      icon: BarChart2
    },
    {
      title: "Integration Ready",
      description: "Seamlessly connects with your existing telecom CRM and support systems.",
      icon: Link2
    }
  ]

  return (
    <section className="py-20 relative overflow-hidden bg-gray-50">
      {/* Background glow effects */}
      <div className="absolute top-40 -left-40 w-80 h-80 bg-purple-500 opacity-20 rounded-full blur-[100px]" />
      <div className="absolute top-60 -right-40 w-80 h-80 bg-orange-500 opacity-20 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-neutral-900">
            Powerful Features for Customer Service Teams
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Our AI-powered email inbox transforms how customer service teams handle communications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-6 rounded-xl border border-neutral-200 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:border-purple-300 group"
            >
              <div className="w-14 h-14 mb-4 rounded-lg bg-gradient-to-br from-purple-500 to-orange-500 p-3 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-purple-500/20 transition-all duration-300">
                <feature.icon size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-neutral-900">{feature.title}</h3>
              <p className="text-neutral-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features