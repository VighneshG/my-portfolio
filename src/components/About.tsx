'use client';
export default function AboutComponent() {
	return (
		<>
			<main className="flex flex-col items-center justify-center min-h-screen  text-foreground p-4">
				<h1 className="text-4xl font-bold">About Me</h1>
				<p className="mt-4 text-lg">
					I am a software engineer with over 3 years of experience in developing
					robust applications.
				</p>
				<h2 className="mt-6 text-2xl font-semibold">Skills</h2>
				<ul className="mt-2 list-disc list-inside">
					<li>JavaScript & TypeScript</li>
					<li>React & Next.js</li>
					<li>AWS Services (Lambda, DynamoDB, S3)</li>
					<li>Database Management (PostgreSQL, MySQL)</li>
					<li>Version Control (Git)</li>
				</ul>
				<h2 className="mt-6 text-2xl font-semibold">Interests</h2>
				<p className="mt-2">
					I enjoy exploring new technologies, contributing to open-source
					projects, and building innovative solutions.
				</p>
				{/* Add more sections as needed */}
			</main>
		</>
	);
}
