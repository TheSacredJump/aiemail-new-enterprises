"use client"
// deploy

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const Waitlist = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true)
      setLoading(false)
    }, 1500)
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Quote Section - Left Half */}
      <div className="hidden md:flex w-full md:w-1/2 bg-gradient-to-br from-purple-600 to-orange-500 p-8 flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-md mx-auto text-white"
        >
          <div className="mb-8">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <span className="text-white font-bold">S</span>
              </div>
              <span className="text-xl font-medium text-white">Sentinel</span>
            </Link>
          </div>
          
          <h2 className="text-3xl font-bold mb-6">
            "Telecom customer service teams waste 15+ hours weekly sorting unprioritized inboxes. Agents are drowning in tickets with no clear way to identify what matters most."
          </h2>
          
          <div className="flex items-center mt-8">
            <div className="w-12 h-12 rounded-full bg-white/20 mr-4"></div>
            <div>
              <p className="font-medium">Michael Reynolds</p>
              <p className="text-white/80 text-sm">Support Director, TeleConnect Solutions</p>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Waitlist Form - Right Half */}
      <div className="w-full md:w-1/2 bg-white p-8 flex items-center justify-center">
        <div className="max-w-md w-full">
          {!submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-8">
                <h1 className="text-3xl font-medium text-neutral-900 mb-4">
                  Join our Waitlist
                </h1>
                <p className="text-neutral-600">
                  Be among the first to experience our AI-powered inbox solution for customer service teams.
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="text-neutral-900 w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="text-neutral-900 w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                    placeholder="you@company.com"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 px-6 rounded-lg bg-neutral-900 text-white font-medium text-base hover:shadow-lg transition-all duration-300 disabled:opacity-70"
                >
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    "Join the Waitlist"
                  )}
                </button>
              </form>
              
              <div className="mt-6 text-center">
                <Link href="/" className="text-sm text-gray-500 hover:text-purple-500 transition-colors">
                  Return to Home
                </Link>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-medium text-gray-900 mb-2">You're on the list!</h2>
              <p className="text-gray-600 mb-6">
                Thank you for joining our waitlist. We'll notify you when we're ready to launch.
              </p>
              <Link href="/" className="inline-block px-6 py-3 rounded-lg bg-gray-100 text-gray-800 font-medium hover:bg-gray-200 transition-colors">
                Return Home
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Waitlist