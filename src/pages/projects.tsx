// src/pages/projects.tsx
import ProjectCard from "../components/ProjectCard";
import "../app/globals.css";
import Layout from "../components/Layout";
import Head from "next/head";
import { projectList } from "@/data/projects";

const Projects = () => {

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
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 mt-8">My Projects</h1>
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
