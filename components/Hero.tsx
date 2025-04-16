"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { SparklesIcon } from 'lucide-react'

const Hero = () => {
  const [email, setEmail] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  
  const handleSubmit = () => {
    if (!email || !email.includes('@')) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset success state after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
        setEmail('');
      }, 3000);
    }, 1500);
  };
  
  return (
    <div className='min-h-screen w-full bg-gradient-to-b from-white to-gray-50 flex flex-col justify-center items-center px-4 md:px-8 pb-10 relative overflow-hidden'>
      {/* Decorative gradient orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-20 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='max-w-5xl mx-auto text-center space-y-8 pt-48 relative z-10'
      >
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className='text-4xl md:text-6xl lg:text-7xl font-medium text-center text-neutral-900 leading-tight drop-shadow-sm'
        >
          The First AI Inbox for <br className='hidden md:block' /> 
          <motion.span 
            initial={{ backgroundPosition: '0% 50%' }}
            animate={{ backgroundPosition: '100% 50%' }}
            transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse' }}
            className='text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-pink-400 to-amber-500 drop-shadow-glow'
          >
            Customer Service Teams
          </motion.span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className='text-neutral-600 max-w-2xl mx-auto italic'
        >
          Save hours of manual work and prioritize your inbox so you can breathe easy at your job.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-3 justify-center items-center mt-14 my-5 relative"
        >
          <input
            type="email"
            placeholder="Enter your work email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isSubmitting || isSuccess}
            className={`text-neutral-900 px-6 py-2 rounded-lg border ${isSuccess ? 'border-green-400' : 'border-neutral-200'} w-full sm:w-96 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-inner transition-all duration-300`}
          />
          
          {isSuccess ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute right-3 top-2.5 text-green-500 flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">Thanks for joining!</span>
            </motion.div>
          ) : (
            <button 
              onClick={handleSubmit}
              disabled={isSubmitting || !email || !email.includes('@')}
              className={`hover:cursor-pointer hover:scale-105 w-full sm:w-auto px-8 py-2 rounded-full ${isSubmitting ? 'bg-purple-400' : 'bg-black'} text-white font-medium hover:shadow-lg hover:shadow-purple-200 transition-all duration-300 shadow-md flex items-center justify-center`}
            >
              {isSubmitting ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                />
              ) : (
                'Join Waitlist'
              )}
            </button>
          )}
        </motion.div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="mt-16 w-full max-w-6xl relative z-10"
      >
        <div className="relative w-full rounded-xl overflow-hidden border border-neutral-200 p-4 bg-gradient-to-b from-black to-neutral-800">
          {/* Glow effect behind the UI */}
          <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 blur-xl"></div>
          
          {/* Modern AI Email Inbox UI */}
          <div className="flex h-[600px] bg-white p-4 rounded-xl relative z-10 overflow-hidden">
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden absolute top-4 left-4 p-2 rounded-lg hover:bg-gray-100 z-50"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </button>

            {/* Sidebar - Mobile Drawer */}
            <div className={`fixed inset-y-0 left-0 transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 w-64 bg-white transition-transform duration-300 ease-in-out z-40 md:block border-r border-gray-200`}>
              <div className="h-full overflow-y-auto p-4">
                <div className="flex items-center space-x-2 mb-8">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-violet-500 to-orange-500 shadow-md shadow-purple-200"></div>
                  <h3 className="font-medium">Sentinel</h3>
                </div>
                
                {/* Navigation */}
                <nav>
                  <ul className="space-y-1">
                    {['Inbox', 'Prioritized', 'Completed', 'Drafts', 'Archived'].map((item, i) => (
                      <li key={i} className={`px-3 py-2 rounded-lg ${i === 0 ? 'bg-gradient-to-r from-purple-50 to-fuchsia-50 text-purple-600' : 'text-gray-600 hover:bg-gray-50'}`}>
                        {item} {i === 0 && <span className="ml-2 bg-purple-100 text-purple-600 text-xs px-2 py-0.5 rounded-full">12</span>}
                      </li>
                    ))}
                  </ul>
                </nav>
                
                <div className="mt-8">
                  <h4 className="text-xs uppercase text-gray-500 font-medium mb-2">AI Assistants</h4>
                  <ul className="space-y-1">
                    {['Customer Support', 'Sales Inquiries', 'Returns'].map((item, i) => (
                      <li key={i} className="px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50 flex items-center">
                        <div className="w-2 h-2 rounded-full bg-green-400 mr-2 shadow-sm shadow-green-200"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className='flex flex-col gap-2 mt-4 rounded-xl p-4 bg-gradient-to-br from-violet-500 via-pink-400 to-amber-500 shadow-lg'>
                  <div className='flex flex-col gap-2'>
                    <div className='flex flex-row gap-2 items-center'>
                      <SparklesIcon className='w-5 h-5 text-white drop-shadow-md' />
                      <h1 className='text-white font-bold drop-shadow-sm'>Try Sentinel Pro</h1>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="flex-1 flex flex-col ml-0 md:ml-4">
              {/* Header */}
              <div className="border-b border-gray-200 pb-4 flex justify-between items-center pt-12 md:pt-0">
                <h2 className="font-medium ml-12 md:ml-0">Prioritized Inbox</h2>
                <div className="relative">
                  <input type="text" placeholder="Search..." className="pl-8 pr-4 py-1 rounded-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-purple-500 text-sm shadow-inner w-32 md:w-auto" />
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 absolute left-2 top-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
              
              {/* Email List */}
              <div className="overflow-y-auto flex-1">
                {[
                  { priority: 'high', sender: 'John Smith', subject: 'Order #1234 Issue', preview: 'I haven\'t received my order yet and it\'s been 2 weeks...', time: '10:23 AM', unread: true },
                  { priority: 'high', sender: 'Sarah Johnson', subject: 'Refund Request', preview: 'I would like to request a refund for my recent purchase...', time: '9:45 AM', unread: true },
                  { priority: 'medium', sender: 'Michael Brown', subject: 'Product Question', preview: 'Does this product come with a warranty? I\'m considering...', time: 'Yesterday', unread: false },
                  { priority: 'low', sender: 'Emily Davis', subject: 'Newsletter Feedback', preview: 'I really enjoyed your latest newsletter! The tips on...', time: 'Yesterday', unread: false },
                  { priority: 'medium', sender: 'Robert Wilson', subject: 'Account Access', preview: 'I\'m having trouble logging into my account after the recent...', time: 'Jul 12', unread: false },
                ].map((email, i) => (
                  <div key={i} className={`p-3 border-b border-gray-100 hover:bg-gradient-to-r hover:from-purple-50/50 hover:to-transparent cursor-pointer transition-all duration-300 ${email.unread ? 'bg-gradient-to-r from-purple-50 to-fuchsia-50/30' : ''}`}>
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center">
                        <div className={`w-2 h-2 rounded-full mr-2 ${
                          email.priority === 'high' ? 'bg-red-500 shadow-sm shadow-red-200' : 
                          email.priority === 'medium' ? 'bg-yellow-500 shadow-sm shadow-yellow-200' : 'bg-green-500 shadow-sm shadow-green-200'
                        }`}></div>
                        <span className={`font-medium ${email.unread ? 'text-black' : 'text-gray-700'}`}>{email.sender}</span>
                      </div>
                      <span className="text-xs text-gray-500">{email.time}</span>
                    </div>
                    <h4 className={`text-sm ${email.unread ? 'font-medium' : ''}`}>{email.subject}</h4>
                    <p className="text-xs text-gray-500 truncate">{email.preview}</p>
                    {i === 0 && (
                      <div className="mt-2 flex flex-wrap gap-2">
                        <span className="text-xs bg-gradient-to-r from-purple-100 to-fuchsia-100 text-purple-600 px-2 py-0.5 rounded-full shadow-sm">AI Suggested: Shipping Issue</span>
                        <span className="text-xs bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-600 px-2 py-0.5 rounded-full shadow-sm">Priority Customer</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              {/* AI Assistant Bar */}
              <div className="border-t border-gray-200 p-3 bg-gradient-to-r from-gray-50 to-purple-50/30">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 flex items-center justify-center text-white mr-3 shadow-md shadow-purple-200">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <input type="text" placeholder="Ask AI..." className="w-full bg-white rounded-lg border border-gray-200 px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-purple-500 shadow-inner" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Add CSS for animations */}
      <style jsx global>{`
        @keyframes blob {
          0% { transform: scale(1) translate(0px, 0px); }
          33% { transform: scale(1.1) translate(30px, -50px); }
          66% { transform: scale(0.9) translate(-20px, 20px); }
          100% { transform: scale(1) translate(0px, 0px); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .drop-shadow-glow {
          filter: drop-shadow(0 0 8px rgba(167, 139, 250, 0.3));
        }
      `}</style>
    </div>
  )
}

export default Hero