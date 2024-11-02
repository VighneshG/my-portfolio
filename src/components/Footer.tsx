'use client';
const Footer = () => {
	return (
		<footer className="bg-[var(--footer)] text-white p-4 mt-10">
			<div className="container mx-auto text-center">
				<p>
					&copy; {new Date().getFullYear()} Vignesh Kumar. All rights reserved.
				</p>
				<p>
					<a
						href="https://github.com/VighneshG"
						rel="noopener noreferrer"
						className="hover:underline"
					>
						GitHub
					</a>{' '}
					|{' '}
					<a
						href="https://linkedin.com/in/VighneshKumar"
						rel="noopener noreferrer"
						className="hover:underline"
					>
						LinkedIn
					</a>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
