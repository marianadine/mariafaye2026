import React from 'react';
import { experiences, education } from '../data/expData';

import '../styles/commonstyles.css';
import '../styles/experience.css';

export default function Exp() {
  return (
    <section className="exp-container">
      {/* Experience Section */}
      <div className="works-header">
        <div>
          <h3 className="section-name">experience</h3>
          <code className="section-description">
            companies that i have worked with ☆
          </code>
        </div>
      </div>

      <div className="experience-list">
        {experiences.map((exp) => (
          <ExperienceCard key={exp.id} item={exp} />
        ))}
      </div>

      <hr className="section-divider" />

      {/* Education Section */}
      <div className="works-header">
        <div>
          <h3 className="section-name">education</h3>
          <code className="section-description">
            four years of bachelor's degree led me to experience and work with multiple organizations and companies
          </code>
        </div>
      </div>

      <div className="experience-list">
        {education.map((edu) => (
          <ExperienceCard key={edu.id} item={edu} />
        ))}
      </div>
    </section>
  );
}

function ExperienceCard({ item }) {
  return (
    <div className="experience-card">
      <div className="card-header">
        <img
          src={item.logo}
          alt={item.company || item.institution}
          className="company-logo"
        />
        <div className="company-meta">
          <h4 className="company-name">{item.company || item.institution}</h4>
          <code className="experience-period">{item.period}</code>
        </div>
      </div>

      <div className="roles-container">
        {item.roles.map((role, idx) => (
          <div key={idx} className="role-group">
            <code className="role-title">{role.title}</code>
            <ul className="role-bullets">
              {role.bullets.map((bullet, bulletIdx) => (
                <li key={bulletIdx}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}