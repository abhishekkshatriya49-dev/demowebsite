import React from 'react';

interface AboutSectionProps {
  onDiscoverMenu: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onDiscoverMenu }) => {
  return (
    <section className="section intro" id="about">
      <div className="container">
        <div className="intro-grid">
          <div className="intro-image reveal">
            <img
              src="/images/about-interior.webp"
              alt="Cozy Velvet Bean cafe interior"
              loading="lazy"
              width="1000"
              height="600"
            />

            <div className="floating-card shine-border">
              <strong>11:11</strong>
              <p>A little pause in your busy day.</p>
            </div>
          </div>

          <div className="reveal">
            <div className="section-label">Our Story</div>

            <h2 className="section-title">
              More than coffee.
              <br />
              It's a feeling.
            </h2>

            <p className="section-text">
              We created Velvet Bean Café as a place where great coffee meets good conversations.
              Every cup is carefully crafted, every plate is thoughtfully prepared, and every corner
              is designed to make you feel at home.
            </p>

            <br />

            <p className="section-text">
              Whether you're meeting someone special, working on your next big idea or simply taking
              a break — there's always a seat waiting for you.
            </p>

            <br />

            <button
              type="button"
              onClick={onDiscoverMenu}
              className="primary-btn"
              style={{ background: 'var(--wine)', color: 'white' }}
            >
              Discover Our Menu
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
