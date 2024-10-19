import "../app/globals.css";
import { motion } from "framer-motion";
import Layout from "@/components/Layout"; // Assuming you have a Layout component

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const skills = [
  { name: "TypeScript", icon: `${basePath}/icons/typescript.png` },
  { name: "AWS CDK", icon: `${basePath}/icons/aws-cdk.png` },
  { name: "React", icon: `${basePath}/icons/react.webp` },
  { name: "NextJs", icon: `${basePath}/icons/nextjs.png` },

  { name: "Java", icon: `${basePath}/icons/java.png` },
  { name: "Spring Boot", icon: `${basePath}/icons/spring-boot.png` },
  { name: "Microservices", icon: `${basePath}/icons/microservices.png` },
  { name: "AWS", icon: `${basePath}/icons/aws.png` },

  { name: "Python", icon: `${basePath}/icons/python.png` },
  { name: "MySQL", icon: `${basePath}/icons/mysql.png` },
  { name: "PostgreSQL", icon: `${basePath}/icons/postgresql.png` },
  { name: "Docker", icon: `${basePath}/icons/docker.png` },

  { name: "HTML", icon: `${basePath}/icons/html.png` },
  { name: "CSS", icon: `${basePath}/icons/css.png` },
  { name: "JavaScript", icon: `${basePath}/icons/javascript.png` },
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
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8"
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
