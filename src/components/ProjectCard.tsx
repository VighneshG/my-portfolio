'use client';
import Link from 'next/link';

interface ProjectCardProps {
	title: string;
	description: string;
	demoLink?: string; // Optional link to a live demo
	repoLink: string; // Link to the GitHub repository
}

const ProjectCard: React.FC<ProjectCardProps> = ({
	title,
	description,
	demoLink,
	repoLink,
}) => {
	return (
		<div className="bg-white shadow-md rounded-lg overflow-hidden p-4 mb-6">
			<h3 className="text-xl text-gray-900 font-semibold mb-2">{title}</h3>
			<p className="text-gray-700 mb-4">{description}</p>
			<div className="flex justify-between">
				{demoLink && (
					<Link
						href={demoLink}
						target="_blank"
						rel="noopener noreferrer"
						className="text-blue-600 hover:underline"
					>
						Live Demo
					</Link>
				)}
				<Link
					href={repoLink}
					target="_blank"
					rel="noopener noreferrer"
					className="text-blue-600 hover:underline"
				>
					GitHub Repo
				</Link>
			</div>
		</div>
	);
};

export default ProjectCard;
