"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { UserButton, useUser } from "@clerk/nextjs";
import { Plus, Image, FileText, Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const uploadHistory = [
  { id: 1, name: "Landing Page Design", date: "2 hours ago", type: "image" },
  { id: 2, name: "Dashboard Figma", date: "1 day ago", type: "figma" },
  { id: 3, name: "Mobile App Screen", date: "2 days ago", type: "image" },
  { id: 4, name: "E-commerce Layout", date: "3 days ago", type: "figma" },
  { id: 5, name: "Portfolio Website", date: "1 week ago", type: "image" },
];

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function Sidebar({ isOpen, onToggle }: SidebarProps) {
  const { user } = useUser();
  const [userName, setUserName] = useState<string>("");
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  useEffect(() => {
    if (user) {
      const fullName = `${user.firstName || ""} ${user.lastName || ""}`.trim();
      setUserName(
        fullName || user.emailAddresses[0]?.emailAddress.split("@")[0] || "User"
      );
    }
  }, [user]);

  const sidebarVariants = {
    open: { x: 0, opacity: 1 },
    closed: { x: "-100%", opacity: 0.7 },
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="h-full bg-card border-r border-border flex flex-col fixed top-0 left-0 z-40"
            initial="closed"
            animate="open"
            exit="closed"
            variants={sidebarVariants}
            transition={{ duration: 0.3 }}
            style={{ width: "16rem" }}
          >
            <div className="p-6 flex justify-between items-center border-b border-border">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">
                    CM
                  </span>
                </div>
                <h1 className="text-xl font-bold">CodeMorphAI</h1>
              </div>
              <Button variant="ghost" size="icon" onClick={onToggle}>
                <Menu className="h-6 w-6" />
              </Button>
            </div>
            <div className="px-6 py-4">
              <Button
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                size="lg"
              >
                <Plus className="w-4 h-4 mr-2" />
                New Conversion
              </Button>
            </div>
            <div className="flex-1 px-6 py-4">
              <h2 className="text-sm font-semibold text-muted-foreground mb-3">
                Recent Conversions
              </h2>
              <div className="space-y-1">
                {uploadHistory.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Button
                      variant={selectedItem === item.id ? "secondary" : "ghost"}
                      className="w-full justify-start h-auto p-3 text-left"
                      onClick={() => setSelectedItem(item.id)}
                    >
                      <div className="flex items-start space-x-3">
                        <div className="mt-1">
                          {item.type === "image" ? (
                            <Image className="w-4 h-4 text-muted-foreground" />
                          ) : (
                            <FileText className="w-4 h-4 text-muted-foreground" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium truncate">
                            {item.name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {item.date}
                          </p>
                        </div>
                      </div>
                    </Button>
                    {selectedItem === item.id && (
                      <Link
                        href="/code-editor"
                        className="block text-sm text-primary mt-1 ml-10"
                      >
                        View Code
                      </Link>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="p-6 border-t border-border flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <UserButton afterSignOutUrl="/" />
                <span className="text-sm font-medium text-foreground">
                  {userName}
                </span>
              </div>
              <ThemeToggle />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {!isOpen && (
        <div className="fixed top-4 left-4 z-50">
          <Button variant="ghost" size="icon" onClick={onToggle}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      )}
    </>
  );
}
