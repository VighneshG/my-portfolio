'use client';
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";

const roles = ["a Software Developer", "a Software Engineer", "a Lifelong Learner"];

export default function HomePage() {
  const [currentRole, setCurrentRole] = useState(0);

  // Change role every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prevRole) => (prevRole + 1) % roles.length);
    }, 3000); // Change role every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      <main className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
        {/* Animated Introduction */}
        <div className="text-center">
          <motion.h1
            className="text-4xl font-bold"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Hello, my name is <span className="text-cyan-400">Vignesh Kumar</span>
          </motion.h1>

          {/* Role Changing Section */}
          <motion.h2
            className="text-2xl mt-4"
            key={currentRole}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            and I am {roles[currentRole]}
          </motion.h2>
        </div>
      </main>
    </Layout>
  );
}
