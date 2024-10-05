// src/components/Navbar.tsx
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-navbar text-white p-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-extrabold tracking-wider">Vignesh Kumar</div>
        <ul className="flex space-x-6 text-lg">
          <li>
            <Link href="/" className="hover:text-gray-300 transition-colors duration-300">Home</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-300 transition-colors duration-300">About</Link>
          </li>
          <li>
            <Link href="/projects" className="hover:text-gray-300 transition-colors duration-300">Projects</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-300 transition-colors duration-300">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
