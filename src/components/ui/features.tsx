"use client";

import { motion } from 'framer-motion';
import { 
  Figma, 
  Code2, 
  Zap, 
  Palette, 
  Smartphone, 
  Settings,
  Download
} from 'lucide-react';

const features = [
  {
    icon: Figma,
    title: "Figma Integration",
    description: "Seamlessly convert Figma designs with public link support",
    color: "from-pink-500 to-purple-600"
  },
  {
    icon: Code2,
    title: "Clean Code Generation",
    description: "Production-ready HTML, CSS, React, and Vue.js code",
    color: "from-blue-500 to-cyan-600"
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Get your code in seconds, not hours of manual work",
    color: "from-yellow-500 to-orange-600"
  },
  {
    icon: Palette,
    title: "Design System Aware",
    description: "Automatically detects and maintains design consistency",
    color: "from-green-500 to-emerald-600"
  },
  {
    icon: Smartphone,
    title: "Responsive Ready",
    description: "Generated code includes mobile-first responsive design",
    color: "from-indigo-500 to-purple-600"
  },
  {
    icon: Settings,
    title: "Customizable Output",
    description: "Configure frameworks, styling approaches, and preferences",
    color: "from-red-500 to-pink-600"
  }
];

const codeOutputs = [
  {
    name: "HTML + CSS",
    description: "Clean semantic HTML with modern CSS",
    icon: "🌐"
  },
  {
    name: "React",
    description: "Component-based React with hooks",
    icon: "⚛️"
  },
  {
    name: "Vue.js",
    description: "Vue 3 composition API components",
    icon: "💚"
  },
  {
    name: "Tailwind CSS",
    description: "Utility-first CSS framework",
    icon: "🎨"
  }
];

export default function Features() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-mono font-bold mb-6">
            Powerful <span className="text-royal-blue">Features</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to transform designs into production-ready code
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="glassmorphism rounded-xl p-6 hover:glow-effect transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}>
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-mono font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="glassmorphism rounded-xl p-8"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-mono font-bold mb-6">
                <span className="text-royal-blue">Multiple</span> Output Formats
              </h3>
              <p className="text-gray-300 mb-6">
                Choose your preferred framework and styling approach. Our AI adapts to your workflow.
              </p>
              
              <div className="space-y-4">
                {codeOutputs.map((output, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <span className="text-2xl">{output.icon}</span>
                    <div>
                      <h4 className="font-mono font-semibold">{output.name}</h4>
                      <p className="text-sm text-gray-400">{output.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="glassmorphism-dark rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-400 font-mono">component.tsx</span>
                  <Download className="h-4 w-4 text-royal-blue" />
                </div>
                <pre className="text-sm text-gray-300 font-mono overflow-x-auto">
                  <code>{`export default function Hero() {
  return (
    <div className="hero-section">
      <h1 className="text-4xl font-bold
        text-gray-900 mb-4">
        Welcome to the Future
      </h1>
      <p className="text-lg text-gray-600">
        AI-generated from your design
      </p>
    </div>
  );
}`}</code>
                </pre>
              </div>
              
              <div className="glassmorphism-dark rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-400 font-mono">styles.css</span>
                  <Download className="h-4 w-4 text-royal-blue" />
                </div>
                <pre className="text-sm text-gray-300 font-mono overflow-x-auto">
                  <code>{`.hero-section {
  padding: 4rem 2rem;
  text-align: center;
  background: linear-gradient(
    135deg, #667eea 0%, #764ba2 100%
  );
}`}</code>
                </pre>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}