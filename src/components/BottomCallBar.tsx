import React from 'react';
import { CONTACT_INFO } from '../data/cafeData';

interface BottomCallBarProps {
  onNavigateToContact: () => void;
}

export const BottomCallBar: React.FC<BottomCallBarProps> = ({ onNavigateToContact }) => {
  return (
    <aside
      className="mobile-bottom-bar"
      aria-label="Quick contact actions"
    >
      <div className="mobile-bottom-bar-inner">
        <a
          href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`}
          className="mobile-call-btn"
          aria-label={`Call Velvet Bean Café at ${CONTACT_INFO.phone}`}
        >
          <span className="mobile-call-icon" aria-hidden="true">📞</span>
          <div className="mobile-call-text">
            <strong>Call to Reserve</strong>
            <small>{CONTACT_INFO.phone}</small>
          </div>
        </a>

        <button
          type="button"
          onClick={onNavigateToContact}
          className="mobile-directions-btn"
          aria-label="View Location & Hours"
        >
          <span aria-hidden="true">📍</span>
          <span>Directions</span>
        </button>
      </div>
    </aside>
  );
};
