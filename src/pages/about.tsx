'use client';
import AboutComponent from '@/components/About';
import '../app/globals.css';
import Layout from '@/components/Layout';
import Head from 'next/head';

// src/app/about.tsx

export default function AboutPage() {
	return (
		<>
			<Head>
				<title>Vignesh Kumar | About</title>
				<meta
					name="description"
					content="About Vignesh Kumar - A software engineer with 3+ years of experience."
				/>
			</Head>
			<Layout>
				<AboutComponent />
			</Layout>
		</>
	);
}
