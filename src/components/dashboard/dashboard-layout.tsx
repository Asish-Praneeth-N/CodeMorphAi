"use client";

import { useState } from "react";
import { Sidebar } from "./sidebar";
import { motion } from "framer-motion";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isOpen, setIsOpen] = useState(true);
  const sidebarWidth = 256; // 16rem

  return (
    <div className="h-screen bg-background relative overflow-x-hidden">
      <div className="flex h-full">
        {/* Sidebar */}
        <Sidebar isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} />

        {/* Animated Main Content */}
        <motion.div
          className="flex-1 flex flex-col"
          initial={false}
          animate={{
            transform: isOpen
              ? `translateX(${sidebarWidth}px) scale(0.98)`
              : "translateX(0px) scale(1)",
            opacity: 1,
          }}
          transition={{
            transform: {
              type: "spring",
              stiffness: 100,
              damping: 18,
              mass: 1,
            },
            opacity: {
              duration: 0.3,
              ease: "easeInOut",
            },
          }}
          style={{ originX: 0 }}
        >
          <main className="flex-1 overflow-hidden flex items-center justify-center">
            <div className="h-full w-full flex items-center justify-center">
              {children}
            </div>
          </main>
        </motion.div>
      </div>
    </div>
  );
}
