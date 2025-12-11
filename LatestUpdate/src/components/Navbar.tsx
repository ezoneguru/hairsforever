import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when screen resizes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav 
      className="sticky top-0 left-0 w-full z-[9999] border-b border-white/10 shadow-lg"
      style={{ 
        position: 'sticky', 
        top: 0, 
        zIndex: 9999, 
        backgroundColor: 'rgba(0, 0, 0, 0.3)', 
        backdropFilter: 'blur(10px)', 
        WebkitBackdropFilter: 'blur(10px)' 
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
        <div className="text-white">
          <h1 className="text-2xl font-bold">HairsForever</h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 text-white">
          <a href="#services" className="hover:text-amber-400 transition-colors font-medium">Services</a>
          <a href="#about" className="hover:text-amber-400 transition-colors font-medium">About</a>
          <a href="#gallery" className="hover:text-amber-400 transition-colors font-medium">Gallery</a>
          <a href="#products" className="hover:text-amber-400 transition-colors font-medium">Products</a>
          <a href="#testimonials" className="hover:text-amber-400 transition-colors font-medium">Testimonials</a>
          <a href="#contact" className="hover:text-amber-400 transition-colors font-medium">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white mobile-menu-button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black border-t border-white/10 px-6 py-4 flex flex-col gap-4 mobile-dropdown">
          <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="text-white text-lg hover:text-amber-400 transition-colors py-2 border-b border-white/10">Services</a>
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-white text-lg hover:text-amber-400 transition-colors py-2 border-b border-white/10">About</a>
          <a href="#gallery" onClick={() => setIsMobileMenuOpen(false)} className="text-white text-lg hover:text-amber-400 transition-colors py-2 border-b border-white/10">Gallery</a>
          <a href="#products" onClick={() => setIsMobileMenuOpen(false)} className="text-white text-lg hover:text-amber-400 transition-colors py-2 border-b border-white/10">Products</a>
          <a href="#testimonials" onClick={() => setIsMobileMenuOpen(false)} className="text-white text-lg hover:text-amber-400 transition-colors py-2 border-b border-white/10">Testimonials</a>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-white text-lg hover:text-amber-400 transition-colors py-2">Contact</a>
        </div>
      )}
      
      {/* CSS to force hide on desktop */}
      <style>{`
        @media (min-width: 768px) {
          .mobile-menu-button,
          .mobile-dropdown {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
}
