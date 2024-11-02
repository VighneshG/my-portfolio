'use client';
// src/app/skills.tsx
import '../app/globals.css';
import Layout from '@/components/Layout'; // Assuming you have a Layout component
import Head from 'next/head';
import SkillsComponent from '@/components/Skills';

export default function SkillsPage() {
	return (
		<>
			<Head>
				<title>Vignesh Kumar | Skills</title>
				<meta
					name="description"
					content="Skills page of Vignesh Kumar - A software engineer with 3+ years of experience."
				/>
			</Head>
			<Layout>
				<SkillsComponent />
			</Layout>
		</>
	);
}
