import React from 'react';
import TechStack from '../components/techStack';
import { certifications } from '../data/stackData';

import '../styles/commonstyles.css';
import '../styles/stack.css';

export default function Stack() {
  return (
    <div>
      <TechStack />

      <section className="certifications-section">
        <h3 className="section-name">certifications</h3>

        <div className="certifications-grid">
          {certifications.map((cert) => (
            <div key={cert.id} className="cert-card">
              <img src={cert.icon} alt={cert.title} className="cert-icon" />

              <span className="cert-issuer">{cert.issuer}</span>
              <h4 className="cert-title">{cert.title}</h4>
              <code className="cert-date">{cert.date}</code>

              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="view-cert-btn"
              >
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}