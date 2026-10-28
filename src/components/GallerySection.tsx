import React from 'react';
import { GALLERY_ITEMS } from '../data/cafeData';

export const GallerySection: React.FC = () => {
  return (
    <section className="section gallery" id="gallery">
      <div className="container">
        <div className="section-heading reveal">
          <div className="section-label">Inside Velvet Bean</div>
          <h2 className="section-title">
            A space worth
            <br />
            staying for.
          </h2>
          <p className="section-text">
            Take a look around our little corner of coffee, comfort and good conversations.
          </p>
        </div>

        <div className="gallery-grid">
          {GALLERY_ITEMS.map((item) => (
            <div key={item.id} className="gallery-item reveal">
              <img src={item.imageUrl} alt={item.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
