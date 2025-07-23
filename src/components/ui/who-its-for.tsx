"use client";

import { motion } from 'framer-motion';
import { Users, Paintbrush, Building, Ambulance as Freelance } from 'lucide-react';

const personas = [
  {
    icon: Users,
    title: "Developers",
    description: "Skip the tedious HTML/CSS conversion and focus on logic",
    benefits: ["Faster prototyping", "Consistent markup", "Time savings"],
    color: "from-blue-500 to-purple-600"
  },
  {
    icon: Paintbrush,
    title: "UI/UX Designers",
    description: "Bridge the gap between design and development",
    benefits: ["Design validation", "Handoff efficiency", "Collaboration"],
    color: "from-pink-500 to-red-600"
  },
  {
    icon: Building,
    title: "Agencies",
    description: "Streamline client project delivery and reduce costs",
    benefits: ["Faster delivery", "Cost reduction", "Quality assurance"],
    color: "from-green-500 to-teal-600"
  },
  {
    icon: Freelance,
    title: "Freelancers",
    description: "Take on more projects with automated code generation",
    benefits: ["Higher productivity", "More clients", "Better margins"],
    color: "from-yellow-500 to-orange-600"
  }
];

export default function WhoItsFor() {
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
            {/* ✅ Escaped apostrophe below */}
            Who It&apos;s <span className="text-royal-blue">For</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            CodeMorphAI empowers creators across the entire design-to-development spectrum
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {personas.map((persona, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="glassmorphism rounded-xl p-6 hover:glow-effect transition-all duration-300 group"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${persona.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <persona.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-xl font-mono font-bold mb-3">{persona.title}</h3>
              <p className="text-gray-300 mb-4">{persona.description}</p>
              
              <div className="space-y-2">
                {persona.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-center text-sm text-gray-400">
                    <div className="w-1.5 h-1.5 bg-royal-blue rounded-full mr-2"></div>
                    {benefit}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
