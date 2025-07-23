"use client";

import { motion } from 'framer-motion';
import { Code, LogIn } from 'lucide-react';
import { Button } from './button';
import Link from 'next/link';

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/20 border-b border-white/10"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <div className="p-2 royal-blue-gradient rounded-lg">
              <Code className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-mono font-bold">CodeMorphAI</span>
          </motion.div>
          
          <div className="flex items-center space-x-4">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link href="/sign-in">
                <Button variant="outline" size="sm" className="border-white text-white hover:white hover:text-blue-400">
                  <LogIn className="h-4 w-4 mr-2" />
                  Sign In
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}