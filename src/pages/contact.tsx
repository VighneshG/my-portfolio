'use client';
import Layout from '../components/Layout';
import '../app/globals.css';
import Head from 'next/head';
import ContactComponent from '@/components/Contact';

const Contact = () => {
	return (
		<>
			<Head>
				<title>Vignesh Kumar | Contact</title>
				<meta
					name="description"
					content="Contact Vignesh Kumar - A software engineer with 3+ years of experience."
				/>
			</Head>
			<Layout>
				<ContactComponent />
			</Layout>
		</>
	);
};

export default Contact;
