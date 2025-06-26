import { useState, useEffect } from 'react';
import { RiCloseLine, RiMenu3Line } from '@remixicon/react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking on a link
  const handleNavClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0b15]/95 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <a 
            href="#" 
            className="text-3xl font-bold tracking-tight text-transparent transition-all duration-300 bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text hover:from-yellow-300 hover:to-amber-400"
          >
            Portfolio
          </a>

          {/* Desktop Navigation */}
          <div className="items-center hidden space-x-8 md:flex">
            <NavLink href="#About" text="About" />
            <NavLink href="#Experience" text="Experience" />
            <NavLink href="#Projects" text="Projects" />
            <NavLink href="#Contact" text="Contact" />
            <button className="px-6 py-2 font-medium text-black transition-all duration-300 rounded-lg bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 hover:shadow-lg hover:shadow-amber-500/30">
              Resume
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <RiCloseLine size={28} className="text-white" />
              ) : (
                <RiMenu3Line size={28} className="text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-4 pt-2 pb-8 space-y-4 bg-[#0a0b15]/95 backdrop-blur-md border-t border-gray-800">
          <MobileNavLink href="#About" text="About" onClick={handleNavClick} />
          <MobileNavLink href="#Experience" text="Experience" onClick={handleNavClick} />
          <MobileNavLink href="#Projects" text="Projects" onClick={handleNavClick} />
          <MobileNavLink href="#Contact" text="Contact" onClick={handleNavClick} />
          <button className="w-full px-6 py-3 mt-4 font-medium text-black transition-all duration-300 rounded-lg bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400">
            Download Resume
          </button>
        </div>
      </div>
    </nav>
  );
};

// Reusable NavLink component for desktop
const NavLink = ({ href, text }) => (
  <a
    href={href}
    className="relative text-lg font-medium text-gray-300 transition-colors duration-300 hover:text-white group"
  >
    {text}
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-400 transition-all duration-300 group-hover:w-full"></span>
  </a>
);

// Reusable MobileNavLink component
const MobileNavLink = ({ href, text, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="block px-3 py-3 text-lg font-medium text-gray-300 transition-colors duration-300 rounded-md hover:text-white hover:bg-gray-900/50"
  >
    {text}
  </a>
);

export default Navbar;