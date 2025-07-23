
"use client";

import { motion } from 'framer-motion';
import { Code, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-2 mb-4 md:mb-0"
          >
            <div className="p-2 royal-blue-gradient rounded-lg">
              <Code className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-mono font-bold">CodeMorphAI</span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p>© 2025 CodeMorphAI. All rights reserved. Transform designs into code, instantly.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center text-gray-400 text-sm"
          >
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 mx-1" />
            <span>for creators</span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}