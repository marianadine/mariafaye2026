import { useState } from 'react';
import solarSphereIcon from '../imgs/icons/solarspherelogo.png';
import byahekoIcon from '../imgs/icons/byahekologo.png';

import solarSphereThumb from '../imgs/thumbnail/SOLARSPHERE.png';
import byahekoThumb from '../imgs/thumbnail/BYAHEKO.png';
import maisonThumb from '../imgs/thumbnail/MAISON SUCRE.png';
import madeByFeiThumb from '../imgs/thumbnail/MADEBYFEI.png';

import '../styles/commonstyles.css';
import '../styles/home.css';
import '../styles/card.css';
import '../styles/works.css';

export default function Works() {
  const [viewMode, setViewMode] = useState('grid');

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
      title: 'Maison Sugar',
      description: 'e-commerce pastry platform with intuitive ordering and smooth UI',
      icon: solarSphereIcon,
      thumbnail: maisonThumb,
      tags: ['UI/UX', 'Frontend Development'],
      links: [
        { label: 'Website ↗', url: '#' },
        { label: 'Mobile Application ↗', url: '#' },
      ],
      badge: 'Capstone Project',
    },
    {
      id: 4,
      title: 'Made By Fei',
      description: 'portfolio website designed to showcase digital creative works',
      icon: solarSphereIcon,
      thumbnail: madeByFeiThumb,
      tags: ['UI/UX', 'Full Stack Development'],
      links: [
        { label: 'Website ↗', url: '#' },
        { label: 'Mobile Application ↗', url: '#' },
      ],
      badge: 'Capstone Project',
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