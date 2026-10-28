import React from 'react';
import { FAVORITE_PRODUCTS } from '../data/cafeData';

export const FavoritesSection: React.FC = () => {
  return (
    <section className="section products">
      <div className="container">
        <div className="section-heading reveal">
          <div className="section-label">Café Favorites</div>
          <h2 className="section-title">Made to be your new favorite.</h2>
        </div>

        <div className="product-grid">
          {FAVORITE_PRODUCTS.map((prod) => (
            <div key={prod.id} className="product-card reveal">
              <div className="product-image">
                <img src={prod.imageUrl} alt={prod.imageAlt} loading="lazy" />
              </div>

              <div className="product-info">
                <h3>{prod.name}</h3>
                <p>{prod.description}</p>

                <div className="product-bottom">
                  <span className="product-price">{prod.price}</span>
                  <span>{prod.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
