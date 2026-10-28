import React from 'react';
import { TESTIMONIALS } from '../data/cafeData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="section testimonials" id="reviews">
      <div className="container">
        <div className="section-heading reveal">
          <div className="section-label">Guest Stories</div>
          <h2 className="section-title">Loved by coffee people.</h2>
        </div>

        <div className="testimonial-grid">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="testimonial shine-border reveal">
              <div className="stars">{t.rating}</div>
              <p>{t.quote}</p>

              <div className="customer">
                <img
                  className="customer-avatar"
                  src={t.avatarUrl}
                  alt={t.name}
                  loading="lazy"
                />
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
