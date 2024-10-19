'use client';
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/Layout";

const roles = ["a Software Engineer", "a Tech Enthusiast", "a Lifelong Learner"];

const roleVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

export default function HomePage() {
  const [currentRole, setCurrentRole] = useState(0);

  // Change role every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prevRole) => (prevRole + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      <main className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
        {/* Animated Introduction */}
        <div className="text-center">
          {/* Combining "Hello World" and "My name is" on the same line */}
          <div className="flex justify-center items-center text-5xl font-bold">
            <h1>Hello World!</h1>
            <motion.h1
              className="ml-2" // Adds space between the two texts
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              My name is <span className="text-cyan-400">Vignesh Kumar</span>
            </motion.h1>
          </div>

          {/* Smooth Role Transition Section */}
          <div className="text-3xl mt-4 flex items-center justify-center">
            <span>and, I am&nbsp;</span>
            <div className="inline-block">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentRole}
                  variants={roleVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.5 }}
                  className="text-yellow-400"
                >
                  {roles[currentRole]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          {/* Cool Resume Download Button with Silver/Golden Border */}
          <div className="mt-8">
            <a
              href="/files/Vignesh_Resume.pdf"
              download="Vignesh_Kumar_Resume.pdf"
              className="relative inline-block text-lg font-semibold text-white px-8 py-4 rounded-lg shadow-lg transition-transform transform-gpu hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-300"
              style={{
                background: "linear-gradient(to right, transparent, black, transparent)",
                border: "2px solid",
                borderImage: "linear-gradient(to right, silver, gold) 1",
              }}
            >
              <span className="absolute inset-0 opacity-40 bg-gradient-to-br from-transparent via-black to-transparent blur-lg rounded-lg -z-10"></span>
              Download Resume
            </a>
          </div>
        </div>
      </main>
    </Layout>
  );
}
