import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-gray-900 text-white sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold">Portfolio</Link>

                {/* Mobile menu button */}
                <button
                    className="md:hidden focus:outline-none"
                    onClick={toggleMenu}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6">
                    <Link to="/" className="hover:text-blue-400 transition">Home</Link>
                    <Link to="/about" className="hover:text-blue-400 transition">About</Link>
                    <Link to="/skills" className="hover:text-blue-400 transition">Skills</Link>
                    <Link to="/experience" className="hover:text-blue-400 transition">Experience</Link>
                    <Link to="/contact" className="hover:text-blue-400 transition">Contact</Link>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-gray-800 px-4 py-2">
                    <div className="flex flex-col space-y-3">
                        <Link to="/" className="block py-2 hover:text-blue-400 transition" onClick={toggleMenu}>Home</Link>
                        <Link to="/about" className="block py-2 hover:text-blue-400 transition" onClick={toggleMenu}>About</Link>
                        <Link to="/skills" className="block py-2 hover:text-blue-400 transition" onClick={toggleMenu}>Skills</Link>
                        <Link to="/experience" className="block py-2 hover:text-blue-400 transition" onClick={toggleMenu}>Experience</Link>
                        <Link to="/contact" className="block py-2 hover:text-blue-400 transition" onClick={toggleMenu}>Contact</Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;