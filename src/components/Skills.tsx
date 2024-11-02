import '../app/globals.css';
import { motion } from 'framer-motion';
import { skills } from '../data/skills';

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

export default function SkillsComponent() {
	return (
		<>
			<main className="flex flex-col items-center justify-center min-h-screen bg-grey-900 text-white p-8">
				<h1 className="text-4xl font-bold mb-8">Skills</h1>
				<motion.div
					className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-16"
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
		</>
	);
}
