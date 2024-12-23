'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const roles = [
	'a Software Engineer',
	'a Tech Enthusiast',
	'a Lifelong Learner',
];

const roleVariants = {
	hidden: { opacity: 0, y: 10 },
	visible: { opacity: 1, y: 0 },
	exit: { opacity: 0, y: -10 },
};

export default function HomeComponent() {
	const [currentRole, setCurrentRole] = useState(0);
	const [initialLoad, setInitialLoad] = useState(true);

	// Change role every 3 seconds
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentRole((prevRole) => (prevRole + 1) % roles.length);
			setInitialLoad(false); // Disable initial load after the first change
		}, 3000);
		return () => clearInterval(interval);
	}, []);

	return (
		<>
			<main className="flex flex-col items-center justify-center min-h-screen text-foreground">
				{/* Animated Introduction */}
				<div className="text-center">
					{/* "Hello World!" with motion effect */}
					<motion.h1
						className="text-4xl sm:text-3xl lg:text-5xl font-bold"
						initial={{ opacity: 0, y: -50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1 }}
					>
						Hello World!
					</motion.h1>

					{/* "My name is Vignesh Kumar" with motion effect */}
					<motion.h1
						className="text-5xl sm:text-4xl lg:text-6xl font-bold mt-4"
						initial={{ opacity: 0, y: -50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1.5 }}
					>
						My name is{' '}
						<span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
							Vignesh Kumar
						</span>
					</motion.h1>

					{/* Smooth Role Transition Section */}
					<div className="text-2xl sm:text-3xl lg:text-4xl mt-4 flex items-center justify-center">
						{/* Add motion for the entire "and, I am a" + role section */}
						<motion.div
							className="flex items-center"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 1.5 }}
						>
							<span>and, I am&nbsp;</span>
							<div className="inline-block">
								<AnimatePresence mode="wait">
									<motion.span
										key={currentRole}
										variants={roleVariants}
										initial="hidden"
										animate="visible"
										exit="exit"
										transition={{ duration: 0.5 }}
										className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500"
									>
										{roles[currentRole]}
									</motion.span>
								</AnimatePresence>
							</div>
						</motion.div>
					</div>

					{/* Cool Resume Download Button with Silver/Golden Border */}
					<div className="mt-8">
						<a
							href="/files/Vignesh_Resume.pdf"
							download="Vignesh_Kumar_Resume.pdf"
							className="relative inline-block text-lg font-semibold text-white px-8 py-4 rounded-lg shadow-lg transition-transform transform-gpu hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-300"
							style={{
								
								border: '2px solid',
								borderImage: 'linear-gradient(to right, cyan, gold) 1',
							}}
						>
							<span className="absolute inset-0 opacity-40 bg-gradient-to-br from-transparent via-black to-transparent blur-lg rounded-lg -z-10"></span>
							Download Resume
						</a>
					</div>
				</div>
			</main>
		</>
	);
}
