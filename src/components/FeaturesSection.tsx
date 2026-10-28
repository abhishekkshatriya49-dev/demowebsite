import React from 'react';
import { FEATURES } from '../data/cafeData';

export const FeaturesSection: React.FC = () => {
  return (
    <section className="section features">
      <div className="container">
        <div className="section-heading reveal">
          <div className="section-label">The Café Experience</div>
          <h2 className="section-title">Made for your moments.</h2>
        </div>

        <div className="feature-grid">
          {FEATURES.map((feature) => (
            <div key={feature.id} className="feature-card shine-border reveal">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
