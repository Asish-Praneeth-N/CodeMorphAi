"use client";

import { motion } from 'framer-motion';
import { Upload, Cpu, Download, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: Upload,
    title: "Upload Design",
    description: "Drop your Figma link or upload an image of your design",
    color: "text-blue-400"
  },
  {
    icon: Cpu,
    title: "AI Analysis",
    description: "Our AI analyzes your design and identifies components",
    color: "text-purple-400"
  },
  {
    icon: Download,
    title: "Generate Code",
    description: "Get clean, production-ready HTML, CSS, and React code",
    color: "text-green-400"
  }
];

export default function HowItWorks() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-mono font-bold mb-6">
            How It <span className="text-royal-blue">Works</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your designs into code with our streamlined, AI-powered process
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative"
            >
              <div className="glassmorphism rounded-xl p-8 text-center h-full hover:glow-effect transition-all duration-300">
                <motion.div
                  className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-royal-blue to-purple-600 flex items-center justify-center floating-animation`}
                  style={{ animationDelay: `${index * 0.5}s` }}
                >
                  <step.icon className="h-8 w-8 text-white" />
                </motion.div>
                
                <h3 className="text-2xl font-mono font-bold mb-4">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <motion.div
                  className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }}
                >
                  <ArrowRight className="h-8 w-8 text-royal-blue" />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="glassmorphism rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-mono font-bold mb-4">
              Ready in <span className="text-royal-blue">Seconds</span>
            </h3>
            <p className="text-gray-300 mb-6">
              Our AI processes your design and generates clean, maintainable code faster than manual conversion.
            </p>
            <div className="flex justify-center space-x-8 text-sm text-gray-400">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                <span>99% Accuracy</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                <span>30s Average</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                <span>Multiple Formats</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}