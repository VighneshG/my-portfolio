// src/app/skills.tsx
import "../app/globals.css";
import { motion } from "framer-motion";
import Layout from "@/components/Layout"; // Assuming you have a Layout component

const skills = [
  // AWS CDK, Typescript, React, Next Js
  { name: "TypeScript", icon: "/icons/typescript.png" },
  { name: "AWS CDK", icon: "/icons/aws-cdk.png" },
  { name: "React", icon: "/icons/react.webp" },
  { name: "NextJs", icon: "/icons/nextjs.png" },

  // Java Stack
  { name: "Java", icon: "./icons/java.png" },
  { name: "Spring Boot", icon: "/icons/spring-boot.png" },
  { name: "Microservices", icon: "/icons/microservices.png" },
  { name: "AWS", icon: "/icons/aws.png" },

  { name: "Python", icon: "/icons/python.png" },
  { name: "MySQL", icon: "/icons/mysql.png" },
  { name: "PostgreSQL", icon: "/icons/postgresql.png" },
  { name: "Docker", icon: "/icons/docker.png" },

  { name: "HTML", icon: "/icons/html.png" },
  { name: "CSS", icon: "/icons/css.png" },
  { name: "JavaScript", icon: "/icons/javascript.png" },
];

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
};

export default function SkillsPage() {
  return (
    <Layout>
      <main className="flex flex-col items-center justify-center min-h-screen bg-grey-900 text-white p-8">
        <h1 className="text-4xl font-bold mb-8">Skills</h1>
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-16"
          initial="hidden"
          animate="show"
          variants={containerVariants}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              variants={itemVariants}
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-16 h-16 mb-4"
              />
              <span className="text-xl">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </Layout>
  );
}
