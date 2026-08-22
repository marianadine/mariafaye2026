import React, { useState } from 'react';
import { featuredProjects, moreProjects } from '../data/workData';

import '../styles/commonstyles.css';
import '../styles/home.css';
import '../styles/card.css';
import '../styles/works.css';

export default function Works() {
  const [viewMode, setViewMode] = useState('list');

  return (
    <section className="works-container">
      <div className="works-header">
        <div>
          <h3 className="section-name">projects</h3>
          <code className="section-description">
            products i have designed and developed — all of my ideas coming to life
          </code>
        </div>

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

      <div className="collab-banner">
        <div className="collab-top-row">
          <div className="collab-content">
            <span className="collab-badge">✩ OPEN FOR COLLABS</span>
            <h2 className="collab-title">wanna collaborate?</h2>
            <p className="collab-desc">
              have a project in mind, an idea to bring to life, or just want to chat about ui/ux and development? let’s create something amazing together.
            </p>
          </div>

          <a href="mailto:your.email@example.com" className="collab-btn">
            get in touch
          </a>
        </div>

        <div className="collab-contacts">
          <a href="mailto:your.email@example.com" className="collab-contact-item">
            <span className="contact-label">EMAIL</span>
            <span className="contact-value">nadinerufo7@gmail.com</span>
          </a>

          <div className="collab-socials">
            <a
              href="https://www.facebook.com/mariaafeii"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              Facebook ↗
            </a>
            <a
              href="https://www.linkedin.com/in/marianadine0912/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              LinkedIn ↗
            </a>
          </div>
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

      {!isGrid && (
        <div className="tag-list">
          {project.tags.map((tag, idx) => (
            <span key={idx} className="project-tag">
              {tag}
            </span>
          ))}
        </div>
      )}

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