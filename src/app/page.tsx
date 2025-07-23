"use client";

import Navbar from '@/components/ui/navbar';
import HeroSection from '@/components/ui/hero-section';
import HowItWorks from '@/components/ui/how-it-works';
import Features from '@/components/ui/features';
import WhoItsFor from '@/components/ui/who-its-for';
import Footer from '@/components/ui/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <Features />
      <WhoItsFor />
      <Footer />
    </div>
  );
}