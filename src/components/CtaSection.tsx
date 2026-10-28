import React from 'react';

interface CtaSectionProps {
  onPlanVisit: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onPlanVisit }) => {
  return (
    <section className="cta">
      <div className="cta-content reveal">
        <div className="section-label">Your Table Is Waiting</div>
        <h2>
          Good coffee.
          <br />
          Good people.
          <br />
          Good moments.
        </h2>
        <p>Come in, slow down and enjoy a little moment for yourself.</p>
        <button
          type="button"
          onClick={onPlanVisit}
          className="primary-btn"
        >
          Plan Your Visit →
        </button>
      </div>
    </section>
  );
};
