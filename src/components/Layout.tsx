// src/components/Layout.tsx
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }: any) => {
	return (
		<>
			<Navbar />
			<main className="container mx-auto px-4">{children}</main>
			<Footer />
		</>
	);
};

export default Layout;
