import ProjectsComponent from '@/components/Projects';
import '../app/globals.css';
import Layout from '../components/Layout';
import Head from 'next/head';

const Projects = () => {
	return (
		<>
			<Head>
				<title>Vignesh Kumar | Projects</title>
				<meta name="description" content="Projects done by Vignesh Kumar" />
			</Head>
			<Layout>
				<div style={{ minHeight: '100vh' }}>
					<ProjectsComponent />
				</div>
			</Layout>
		</>
	);
};

export default Projects;
