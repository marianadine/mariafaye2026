import { useState } from 'react';
import solarSphereIcon from '../imgs/icons/solarspherelogo.png';
import byahekoIcon from '../imgs/icons/byahekologo.png';
import maisonIcon from '../imgs/icons/maisonsucrelogo.png';
import madeByFeiIcon from '../imgs/icons/madebyfeilogo.png';
import photoBoothIcon from '../imgs/icons/clickdlogodark.png';
import uniqloIcon from '../imgs/icons/uniqlologo.png';
import pawsitiveIcon from '../imgs/icons/pawlogo.png';
import atmIcon from '../imgs/icons/atmlogo.png';
import bulldogsExchangeIcon from '../imgs/icons/bulldogsexchangelogodark.png';
import clickdIcon from '../imgs/icons/clickdlogodark.png';
import exploreSphereIcon from '../imgs/icons/espherelogo.png';
import jpcsIcon from '../imgs/icons/jpcslogo.png';

// Thumbnails
import solarSphereThumb from '../imgs/thumbnail/SOLARSPHERE.png';
import byahekoThumb from '../imgs/thumbnail/BYAHEKO.png';
import maisonThumb from '../imgs/thumbnail/MAISON SUCRE.png';
import madeByFeiThumb from '../imgs/thumbnail/MADEBYFEI.png';
import clickdThumb from '../imgs/thumbnail/CLICKD.png';
import uniqloThumb from '../imgs/thumbnail/UNIQLO.png';
import pawsitiveThumb from '../imgs/thumbnail/PAWSITIVE care.png';
import atmThumb from '../imgs/thumbnail/ATM.png';
import bulldogsExchangeThumb from '../imgs/thumbnail/NU MOA BE.png';
import exploreSphereThumb from '../imgs/thumbnail/ESPHERE.png';
import jpcsThumb from '../imgs/thumbnail/JPCS NU MOA.png';

import '../styles/commonstyles.css';
import '../styles/home.css';
import '../styles/card.css';
import '../styles/works.css';

export default function Works() {
  const [viewMode, setViewMode] = useState('list');

  const featuredProjects = [
    {
      id: 1,
      title: 'SolarSphere',
      description: 'smart solar planning platform with solar visualization and personalized recommendations',
      icon: solarSphereIcon,
      thumbnail: solarSphereThumb,
      tags: ['Solar Planning', 'Energy Saver', 'Cost Estimation'],
      links: [
        { label: 'Website ↗', url: '#' },
        { label: 'Mobile Application ↗', url: '#' },
      ],
      badge: 'Capstone Project',
    },
    {
      id: 2,
      title: 'ByaheKo',
      description: 'mobile app for discovering routes and making local commuting more convenient',
      icon: byahekoIcon,
      thumbnail: byahekoThumb,
      tags: ['Transportation', 'Route Discovery', 'Local Commuting'],
      links: [
        { label: 'Website ↗', url: '#' },
        { label: 'Case Study ↗', url: '#' },
      ],
      badge: 'Capstone Project',
    },
  ];

  const moreProjects = [
    {
      id: 3,
      title: 'Clickd',
      description: 'Interactive photobooth application for capturing and customizing photos.',
      icon: clickdIcon,
      thumbnail: clickdThumb,
      tags: ['React', 'JavaScript', 'Camera', 'Photo Editing', 'UI/UX'],
      links: [{ label: 'Website ↗', url: '#' }],
      badge: 'Web Application',
    },
    {
      id: 4,
      title: 'Maison Sucre',
      description: 'Elegant bakery website showcasing products and brand identity.',
      icon: maisonIcon,
      thumbnail: maisonThumb,
      tags: ['Web Design', 'UI/UX', 'HTML', 'CSS', 'JavaScript', 'Branding'],
      links: [{ label: 'Website ↗', url: '#' }],
      badge: 'Web Application',
    },
    {
      id: 5,
      title: 'Uniqlo Inventory',
      description: 'Inventory management system for tracking and organizing product stock.',
      icon: uniqloIcon,
      thumbnail: uniqloThumb,
      tags: ['Java', 'CRUD', 'Database', 'Inventory', 'UI/UX'],
      links: [{ label: 'Repository ↗', url: '#' }],
      badge: 'Desktop Application',
    },
    {
      id: 6,
      title: 'Pawsitive Care',
      description: 'Pet care platform for managing essential pet information and services.',
      icon: pawsitiveIcon,
      thumbnail: pawsitiveThumb,
      tags: ['React', 'Web App', 'Database', 'Pet Care', 'UI/UX'],
      links: [{ label: 'Website ↗', url: '#' }],
      badge: 'Web Application',
    },
    {
      id: 7,
      title: 'ATM',
      description: 'ATM simulation demonstrating essential banking transactions and account management.',
      icon: atmIcon,
      thumbnail: atmThumb,
      tags: ['Java', 'OOP', 'Banking', 'CRUD', 'UI/UX'],
      links: [{ label: 'Repository ↗', url: '#' }],
      badge: 'Desktop Application',
    },
    {
      id: 8,
      title: 'NU MOA Bulldogs Exchange',
      description: 'Community marketplace for buying, selling, and exchanging items among students.',
      icon: bulldogsExchangeIcon,
      thumbnail: bulldogsExchangeThumb,
      tags: ['Marketplace', 'React', 'Database', 'Web App', 'UI/UX'],
      links: [{ label: 'Website ↗', url: '#' }],
      badge: 'Web Application',
    },
    {
      id: 9,
      title: 'JPCS NU MOA',
      description: 'Interactive digital platform focused on connecting users with content and services.',
      icon: jpcsIcon,
      thumbnail: jpcsThumb,
      tags: ['React', 'JavaScript', 'Web App', 'UI/UX'],
      links: [{ label: 'Website ↗', url: '#' }],
      badge: 'Web Application',
    },
    {
      id: 10,
      title: 'ExploreSphere',
      description: 'Travel discovery platform for exploring destinations and planning experiences.',
      icon: exploreSphereIcon,
      thumbnail: exploreSphereThumb,
      tags: ['Travel', 'React', 'Maps', 'Web App', 'UI/UX'],
      links: [{ label: 'Website ↗', url: '#' }],
      badge: 'Web Application',
    },
    {
      id: 11,
      title: 'MadeByFei',
      description: 'Creative brand website showcasing handmade products and creative work.',
      icon: madeByFeiIcon,
      thumbnail: madeByFeiThumb,
      tags: ['Web Design', 'UI/UX', 'Branding', 'E-commerce', 'JavaScript'],
      links: [{ label: 'Website ↗', url: '#' }],
      badge: 'Portfolio / Shop',
    },
  ];

  return (
    <section className="works-container">
      {/* Header */}
      <div className="works-header">
        <div>
          <h3 className="section-name">projects</h3>
          <code className="section-description">
            products i have designed and developed — all of my ideas coming to life
          </code>
        </div>

        {/* View Toggle Buttons */}
        <div className="view-toggle">
          <button
            className={`toggle-btn ${viewMode === 'list' ? 'active' : ''}`}
            onClick={() => setViewMode('list')}
            aria-label="List View"
          >
            <span className="icon-list-view" />
          </button>
          <button
            className={`toggle-btn ${viewMode === 'grid' ? 'active' : ''}`}
            onClick={() => setViewMode('grid')}
            aria-label="Grid View"
          >
            <span className="icon-grid-view" />
          </button>
        </div>
      </div>

      {/* Featured Projects */}
      <span className="group-label">FEATURED</span>
      <div className="projects-grid">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} viewMode={viewMode} />
        ))}
      </div>

      {/* More Projects */}
      <span className="group-label margin-top">MORE PROJECTS</span>
      <div className="projects-grid">
        {moreProjects.map((project) => (
          <ProjectCard key={project.id} project={project} viewMode={viewMode} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project, viewMode }) {
  const isGrid = viewMode === 'grid';

  return (
    <div className={`project-card ${viewMode}`}>
      {/* Header Visuals */}
      {isGrid ? (
        <>
          <div className="card-media">
            <img src={project.thumbnail} alt={project.title} className="project-thumbnail" />
          </div>
          <div className="card-body">
            <h4 className="project-title">{project.title}</h4>
            <p className="project-desc">{project.description}</p>
          </div>
        </>
      ) : (
        <div className="card-header">
          <img src={project.icon} alt={project.title} className="project-icon" />
          <div className="project-meta">
            <h4 className="project-title">{project.title}</h4>
            <p className="project-desc">{project.description}</p>
          </div>
        </div>
      )}

      {/* Tags (List Mode Only) */}
      {!isGrid && (
        <div className="tag-list">
          {project.tags.map((tag, idx) => (
            <span key={idx} className="project-tag">
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Links & Badge */}
      <div className="card-footer">
        <div className="footer-links">
          {project.links.map((link, idx) => (
            <a key={idx} href={link.url} className="project-link">
              {link.label}
            </a>
          ))}
        </div>
        <span className="project-badge">{project.badge}</span>
      </div>
    </div>
  );
}