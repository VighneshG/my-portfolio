// src/pages/index.tsx
import Layout from '../components/Layout';
import '../app/globals.css';

const Home = () => {
	return (
		<Layout>
			<section className="my-20">
				<h1 className="text-4xl font-bold">Hi, I'm Vignesh Kumar</h1>
				<p className="mt-4 text-lg">
					A passionate Software Engineer specializing in Java, Typescript,
					Sprinboot, NextJs and AWS.
				</p>
			</section>
			{/* Add more sections as needed */}
		</Layout>
	);
};

export default Home;
