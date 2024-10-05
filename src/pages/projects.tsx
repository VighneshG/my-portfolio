// src/pages/projects.tsx
import ProjectCard from "../components/ProjectCard";
import "../app/globals.css";
import Layout from "../components/Layout";
import Head from "next/head";

const Projects = () => {
  const projectList = [
    {
      title: "Project One",
      description: "Description of Project One.",
      demoLink: "https://example.com/demo1",
      repoLink: "https://github.com/yourusername/project-one",
    },
    {
      title: "Project Two",
      description: "Description of Project Two.",
      demoLink: "https://example.com/demo2",
      repoLink: "https://github.com/yourusername/project-two",
    },
    {
      title: "Project Three",
      description: "Description of Project Three.",
      repoLink: "https://github.com/yourusername/project-three",
    },
    // Add more projects as needed
  ];

  return (
    <>
      <Head>
        <title>Vignesh Kumar | Projects</title>
        <meta
          name="description"
          content="Projects done by Vignesh Kumar"
        />
      </Head>
    <Layout>
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">My Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projectList.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </Layout>
    </>
  );
};

export default Projects;
