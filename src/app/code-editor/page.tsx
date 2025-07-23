"use client";

import { CodeEditor } from "@/components/code-editor/code-editor";
import { motion } from "framer-motion";

export default function CodeEditorPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="h-screen bg-background flex flex-col"
    >
      <CodeEditor />
    </motion.div>
  );
}