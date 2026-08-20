import smLogo from '../imgs/SMLogo.webp';
import kmcLogoLight from '../imgs/kmclogolight.png';
import nuLogo from '../imgs/nulogo.webp';
import uphsdLogo from '../imgs/uphsdlogo.png';

import '../styles/commonstyles.css';
import '../styles/experience.css';

export default function Exp() {
  const experiences = [
    {
      id: 1,
      company: 'SM Retail',
      period: 'February 2026 - June 2026',
      logo: smLogo,
      roles: [
        {
          title: 'UI/UX Design',
          bullets: [
            'Used Figma Auto Layout to design dashboards and interface components, specifically leading the design for the SMAC&SHOP Road to Prestige project and an end-to-end transportation application.',
            'Conducted on-site field research at the Prestige Lounge to analyze day-to-day operational workflows, translating user behaviors and system blueprints into a highly optimized Management System.',
            'Studied established design systems through the tactical recreation of industry-standard mobile applications, deepening understanding of user navigation, structural consistency, and visual ergonomics.',
          ],
        },
        {
          title: 'Campaign Management',
          bullets: [
            'Quality assurance testing for SMS, Viber, and Push Notifications within the SMAC&SHOP application to ensure deliverability for live broadcasts.',
            'Managed end-to-end campaign deployments and documentation, validating technical triggers for high-volume broadcasts.',
            'Managed comprehensive performance reports to analyze user engagement with promotional campaigns and broadcast communications.',
          ],
        },
      ],
    },
    {
      id: 2,
      company: 'KMC Solutions',
      period: 'November 2025 - February 2026',
      logo: kmcLogoLight,
      roles: [
        {
          title: 'IT Asset Management',
          bullets: [
            'Maintained well-organized and accurate digital records by structuring asset data and documentation to ensure consistency and reliability.',
            'Validated inventory data and tracked updates to resolve record discrepancies and maintain data integrity.',
          ],
        },
      ],
    },
  ];

  const education = [
    {
      id: 1,
      institution: 'National University – Mall of Asia',
      period: 'July 2026',
      logo: nuLogo,
      roles: [
        {
          title: 'Bachelor of Science in Information Technology with Specialization in Mobile and Web Applications',
          bullets: [
            'CGWA: 3.86 | Summa Cum Laude',
            "Achievements: First Honor Dean's Lister for 12 consecutive terms (2022 - 2026) | Best Presenter at SITCON 2026",
            'Capstone Project: SolarSphere: A Web and Mobile Application for Smart Solar Planning with Heatmap Visualization',
          ],
        },
        {
          title: 'Junior Philippine Computer Society | Vice President - Internal & External',
          bullets: [
            'Coordinated workshops and coding challenges, boosting IT awareness and skills across the campus.',
            'Increased student engagement through peer-led learning sessions and active participation in JPCS activities.',
            'Managed the rebranding and partnership efforts, delivering a new logo, website, and increased event support from sponsors and universities.',
            'Oversaw UI/UX design for organizational websites and integrated programming activities into events.',
          ],
        },
      ],
    },
    {
      id: 2,
      institution: 'University of Perpetual Help – Molino Campus',
      period: 'August 2022',
      logo: uphsdLogo,
      roles: [
        {
          title: 'Senior High School Graduate - STEM Strand',
          bullets: ['Achievements: With High Honors'],
        },
      ],
    },
  ];

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