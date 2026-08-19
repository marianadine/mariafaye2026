import TechStack from '../components/techStack';
import '../styles/commonstyles.css';
import '../styles/stack.css';

import htmlCssBadge from '../imgs/ITS-Badge-HTMLCSS.png';
import jsBadge from '../imgs/ITS-Badge-JS.png';
import simplilearnLogo from '../imgs/simplilearn_logo.png';
import canvaLogo from '../imgs/canva_logo.jfif';

export default function Stack() {
  const certifications = [
    {
      id: 1,
      issuer: 'Certiport',
      title: 'Information Technology Specialist in HTML & CSS',
      date: 'Issued Apr 2026 · Expires Apr 2031',
      icon: htmlCssBadge,
      link: '#',
    },
    {
      id: 2,
      issuer: 'Certiport',
      title: 'Information Technology Specialist in JavaScript',
      date: 'Issued Apr 2026 · Expires Apr 2031',
      icon: jsBadge,
      link: '#',
    },
    {
      id: 3,
      issuer: 'Simplilearn',
      title: 'Introduction to Graphic Design; Basics of UI/UX',
      date: 'Issued Oct 2025',
      icon: simplilearnLogo,
      link: '#',
    },
    {
      id: 4,
      issuer: 'Simplilearn',
      title: 'Introduction to Figma',
      date: 'Issued Oct 2025',
      icon: simplilearnLogo,
      link: '#',
    },
    {
      id: 5,
      issuer: 'Canva',
      title: 'Graphic Design Essentials',
      date: 'Issued Oct 2025',
      icon: canvaLogo,
      link: '#',
    },
  ];

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