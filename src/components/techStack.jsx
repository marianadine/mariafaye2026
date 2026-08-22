import React from 'react';
import '../styles/commonstyles.css';

export default function techStack() {
  const categories = [
    {
      title: 'UI/UX DESIGN',
      skills: ['FIGMA', 'CANVA', 'ADOBE PHOTOSHOP', 'BALSAMIQ', 'AFFINITY'],
    },
    {
      title: 'FRONTEND & WEB',
      skills: ['REACTJS', 'JAVASCRIPT', 'HTML5 / CSS3'],
    },
    {
      title: 'MOBILE DEVELOPMENT',
      skills: ['REACT NATIVE', 'FLUTTER'],
    },
    {
      title: 'LANGUAGES',
      skills: ['JAVA', 'JAVASCRIPT'],
    },
    {
      title: 'WORKFLOW &  MANAGEMENT',
      skills: ['GITHUB', 'NOTION', 'MICROSOFT OFFICE SUITE', 'ASANA'],
    },
  ];

  return (
    <section className="tech-stack-section">
      <h3 className="section-name">tech stack</h3>
      <code className="section-description">a curated collection of the tools I live in — no fluff, just the essentials</code>

      <div className="stack-grid">
        {categories.map((cat, index) => (
          <div key={index} className="stack-group">
            <span className="group-title">{cat.title}</span>
            <div className="badge-list">
              {cat.skills.map((skill, sIndex) => (
                <span key={sIndex} className="tech-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}