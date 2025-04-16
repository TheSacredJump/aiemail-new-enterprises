"use client"

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-3 md:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div 
          className="backdrop-blur-md bg-white/70 rounded-full shadow-sm border border-gray-200/50 px-4 py-3 flex items-center justify-between"
        >
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              {/* You can replace this with your actual logo */}
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-orange-500"></div>
              <span className="text-xl font-medium text-neutral-900">Sentinel</span>
            </Link>
          </div>
          
          <Link href="/waitlist" className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-500 to-orange-500 text-white font-medium text-sm hover:shadow-lg transition-all duration-300">
            Join the Waitlist
          </Link>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar