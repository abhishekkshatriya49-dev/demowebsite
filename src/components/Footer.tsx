import React from 'react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="logo">
            Velvet <span>Bean</span>
          </div>
          <p>
            Coffee, conversations and beautiful moments — all under one roof.
          </p>
        </div>

        <div className="footer-column">
          <h4>Explore</h4>
          <button type="button" onClick={() => onNavigate('home')}>
            Home
          </button>
          <button type="button" onClick={() => onNavigate('about')}>
            About
          </button>
          <button type="button" onClick={() => onNavigate('menu')}>
            Menu
          </button>
          <button type="button" onClick={() => onNavigate('gallery')}>
            Gallery
          </button>
        </div>

        <div className="footer-column">
          <h4>Visit</h4>
          <button type="button" onClick={() => onNavigate('contact')}>
            Location
          </button>
          <button type="button" onClick={() => onNavigate('contact')}>
            Opening Hours
          </button>
          <button type="button" onClick={() => onNavigate('contact')}>
            Contact
          </button>
        </div>

        <div className="footer-column">
          <h4>Follow</h4>
          <a href="#instagram" onClick={(e) => e.preventDefault()}>
            Instagram
          </a>
          <a href="#facebook" onClick={(e) => e.preventDefault()}>
            Facebook
          </a>
          <a href="#googlemaps" onClick={(e) => e.preventDefault()}>
            Google Maps
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Velvet Bean Café. All rights reserved.</span>
        <span>Crafted with ☕ & passion.</span>
      </div>
    </footer>
  );
};
