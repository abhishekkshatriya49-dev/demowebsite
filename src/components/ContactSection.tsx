import React from 'react';
import { CONTACT_INFO, OPENING_HOURS } from '../data/cafeData';

export const ContactSection: React.FC = () => {
  const cleanPhone = CONTACT_INFO.phone.replace(/\s+/g, '');

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="section-heading reveal">
          <div className="section-label">Visit Us</div>
          <h2 className="section-title">Come say hello.</h2>
          <p className="section-text">We're always happy to welcome you.</p>
        </div>

        <div className="contact-grid">
          <div className="contact-card reveal">
            <div className="contact-row">
              <div className="contact-icon" aria-hidden="true">📍</div>
              <div>
                <h4>Our Location</h4>
                <p>
                  {CONTACT_INFO.addressLine1}
                  <br />
                  {CONTACT_INFO.city}
                </p>
                <a
                  href={`https://maps.google.com/?q=Velvet+Bean+Cafe+${encodeURIComponent(CONTACT_INFO.city)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-action-link"
                >
                  Get Directions →
                </a>
              </div>
            </div>

            <div className="contact-row">
              <div className="contact-icon" aria-hidden="true">📞</div>
              <div>
                <h4>Call Us</h4>
                <a href={`tel:${cleanPhone}`} className="contact-phone-link">
                  {CONTACT_INFO.phone}
                </a>
                <span className="contact-hint">Tap to call directly</span>
              </div>
            </div>

            <div className="contact-row">
              <div className="contact-icon" aria-hidden="true">✉</div>
              <div>
                <h4>Email</h4>
                <a href={`mailto:${CONTACT_INFO.email}`} className="contact-phone-link">
                  {CONTACT_INFO.email}
                </a>
              </div>
            </div>

            <h4 style={{ margin: '30px 0 12px' }}>Opening Hours</h4>

            {OPENING_HOURS.map((oh) => (
              <div key={oh.day} className="hours">
                <span>{oh.day}</span>
                <strong>{oh.time}</strong>
              </div>
            ))}
          </div>

          <div className="map reveal">
            <div className="map-label">
              <strong>Velvet Bean Café</strong>
              <br />
              <span style={{ fontSize: '12px', color: '#716965' }}>
                {CONTACT_INFO.city}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
