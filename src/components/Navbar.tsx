// src/components/Navbar.tsx
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">Vignesh Kumar</div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:underline">Home</Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline">About</Link>
          </li>
          <li>
            <Link href="/projects" className="hover:underline">Projects</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
