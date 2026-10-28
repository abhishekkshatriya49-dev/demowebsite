import React, { useState } from 'react';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/cafeData';
import { MenuCategory } from '../types';

export const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('coffee');

  const filteredItems = MENU_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section className="section menu-section" id="menu">
      <div className="container">
        <div className="section-heading reveal">
          <div className="section-label">Our Menu</div>
          <h2 className="section-title">
            Something delicious
            <br />
            for everyone.
          </h2>
          <p className="section-text">
            From your morning coffee to an evening dessert, discover our carefully curated café menu.
          </p>
        </div>

        <div className="menu-tabs">
          {MENU_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`menu-tab ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id as MenuCategory)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="menu-grid" id="menuGrid">
          {filteredItems.map((item) => (
            <div key={item.id} className="menu-item">
              <div>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
              <div className="price">{item.price}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
