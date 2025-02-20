import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white py-4 shadow-md">
      <div className="container mx-auto px-4 flex flex-wrap items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center mb-4 lg:mb-0">
          <div className="rounded-full border border-black w-10 h-9 mr-2 overflow-hidden">
            <img src="images/cropped_image.png" alt="Logo" className="w-full h-full object-cover" />
          </div>
          <span className="font-bold text-xl">OJT Monitoring</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-800 hover:text-blue-500 focus:outline-none z-10" // Added z-index
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"} // Accessibility
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h14" />
            )}
          </svg>
        </button>

        {/* Navigation */}
        <nav className={`w-full lg:w-auto mb-4 lg:mb-1 lg:block ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col lg:flex-row lg:space-x-8 lg:items-center">
            <li>
              <Link href="/features" className="text-gray-800 hover:text-blue-500 block lg:inline-block py-2 lg:py-0">
                Home
              </Link>
            </li>
            <li>
              <Link href="/projects" className="text-gray-800 hover:text-blue-500 block lg:inline-block py-2 lg:py-0">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-800 hover:text-blue-500 block lg:inline-block py-2 lg:py-0">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/external" className="text-gray-800 hover:text-blue-500 block lg:inline-block py-2 lg:py-0">
                My Account
              </Link>
            </li>
          </ul>
        </nav>

        {/* Login Button */}
        <Link href="/contact" className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition duration-300 whitespace-nowrap">
          Login
        </Link>

      </div>
    </header>
  );
};

export default Header;