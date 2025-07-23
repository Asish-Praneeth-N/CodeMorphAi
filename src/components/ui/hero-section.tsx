
"use client";

import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import { Button } from './button';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen mt-36 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-royal-blue/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(65,105,225,0.1)_0%,transparent_50%)]"></div>
      
      <motion.div
        className="absolute top-1/4 left-1/4 w-2 h-2 bg-royal-blue rounded-full floating-animation"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      />
      <motion.div
        className="absolute top-1/3 right-1/3 w-1 h-1 bg-grey rounded-full floating-animation"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{ animationDelay: '1s' }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-royal-blue/50 rounded-full floating-animation"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        style={{ animationDelay: '2s' }}
      />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-6xl md:text-8xl font-mono font-bold mb-8 leading-tight">
            Turn <span className="gradient-text">Designs</span> into{' '}
            <span className="gradient-text">Code</span> — <br />
            <span className="text-royal-blue">Instantly</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Upload your design or Figma link. Get production-ready code in seconds.
            <br />
            <span className="text-royal-blue">AI-powered. Developer-friendly. Export-ready.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/sign-up">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white/20 hover:to-blue-300 hover:bg-blue-300 text-white px-8 py-4 text-lg"
                >
                  <Zap className="mr-2 h-5 w-5" />
                  Get Started
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <div className="glassmorphism rounded-xl p-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-sm text-gray-400 font-mono">Generated Code</span>
            </div>
            <div className="text-left">
              <motion.pre
                className="text-sm font-mono text-gray-300 overflow-x-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
              >
                <code>{`<div className="hero-section">
  <h1 className="text-4xl font-bold">
    Welcome to the Future
  </h1>
  <p className="text-gray-600 mt-4">
    AI-generated from your design
  </p>
  <button className="bg-blue-500 hover:bg-blue-600 
    text-white px-6 py-3 rounded-lg mt-6">
    Get Started
  </button>
</div>`}</code>
              </motion.pre>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
