import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    setIsMobileOpen(false);
    onNavigate(id);
  };

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="nav-inner">
        <button
          type="button"
          onClick={() => handleLinkClick('home')}
          className="logo"
          style={{ background: 'none', border: 'none', textAlign: 'left', padding: 0 }}
        >
          Velvet <span>Bean</span>
        </button>

        <ul className={`nav-links ${isMobileOpen ? 'mobile-open' : ''}`}>
          <li>
            <button type="button" onClick={() => handleLinkClick('home')}>
              Home
            </button>
          </li>
          <li>
            <button type="button" onClick={() => handleLinkClick('about')}>
              About
            </button>
          </li>
          <li>
            <button type="button" onClick={() => handleLinkClick('menu')}>
              Menu
            </button>
          </li>
          <li>
            <button type="button" onClick={() => handleLinkClick('gallery')}>
              Gallery
            </button>
          </li>
          <li>
            <button type="button" onClick={() => handleLinkClick('reviews')}>
              Reviews
            </button>
          </li>
          <li>
            <button type="button" onClick={() => handleLinkClick('contact')}>
              Contact
            </button>
          </li>
        </ul>

        <button
          type="button"
          onClick={() => handleLinkClick('contact')}
          className="nav-btn"
        >
          Visit Us
        </button>

        <button
          type="button"
          className="mobile-menu"
          aria-label="Toggle Navigation Menu"
          onClick={() => setIsMobileOpen((prev) => !prev)}
        >
          {isMobileOpen ? '✕' : '☰'}
        </button>
      </div>
    </header>
  );
};
