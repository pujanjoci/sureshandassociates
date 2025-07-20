import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 10) {
        // Scrolling down
        setVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Fixed header container */}
      <div className={`fixed top-0 w-full z-50 ${visible ? 'translate-y-0' : '-translate-y-full'} transition-transform duration-300`}>
        {/* Header with white background */}
        <header className="bg-white shadow-md">
          <div className="container mx-auto px-6 py-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Link to="/" className="text-2xl font-bold text-primary">
                  <img 
                    src={Logo}
                    alt="Logo" 
                    className="h-12 w-18 mr-2" 
                  />
                </Link>
              </div>
              
              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-gray-500 hover:text-primary focus:outline-none"
                  aria-label="Toggle menu"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {isOpen ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                  </svg>
                </button>
              </div>
              
              {/* Desktop Navigation */}
              <nav className="hidden md:flex space-x-8">
                <Link to="/" className="text-gray-700 hover:text-primary font-medium">Home</Link>
                <Link to="/about" className="text-gray-700 hover:text-primary font-medium">About Us</Link>
                <Link to="/services" className="text-gray-700 hover:text-primary font-medium">Services</Link>
                <Link to="/contact" className="text-gray-700 hover:text-primary font-medium">Contact</Link>
              </nav>
            </div>
          </div>
        </header>
        
        {/* Mobile Navigation - Absolute positioned overlay */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-lg absolute w-full">
            <div className="container mx-auto px-6 py-4">
              <div className="flex flex-col space-y-3">
                <Link to="/" className="text-gray-700 hover:text-primary font-medium py-2" onClick={() => setIsOpen(false)}>Home</Link>
                <Link to="/about" className="text-gray-700 hover:text-primary font-medium py-2" onClick={() => setIsOpen(false)}>About Us</Link>
                <Link to="/services" className="text-gray-700 hover:text-primary font-medium py-2" onClick={() => setIsOpen(false)}>Services</Link>
                <Link to="/contact" className="text-gray-700 hover:text-primary font-medium py-2" onClick={() => setIsOpen(false)}>Contact</Link>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Spacer div to prevent content from being hidden under fixed header */}
      <div className="h-16"></div>
    </>
  );
};

export default Header;