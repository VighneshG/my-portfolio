'use client';
import Layout from '@/components/Layout';
import AboutComponent from '@/components/About';
import SkillsComponent from '@/components/Skills';
import ProjectsComponent from '@/components/Projects';
import HomeComponent from '@/components/Home';
import ContactComponent from '@/components/Contact';

export default function HomePage() {
	return (
		<Layout>
			<HomeComponent />
			<AboutComponent />
			<SkillsComponent />
			<ProjectsComponent />
			<ContactComponent />
		</Layout>
	);
}
