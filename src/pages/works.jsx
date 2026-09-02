import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { featuredProjects, moreProjects } from '../data/workData';
import { ChevronUp, ChevronLeft, ChevronRight } from 'lucide-react';
import '../styles/commonstyles.css';
import '../styles/home.css';
import '../styles/works.css';

import PageWrapper from '../components/pageWrapper';

const imageModules = import.meta.glob('../imgs/designs/**/*.{png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default',
});

const designItems = Object.entries(imageModules).map(([path, imageSrc]) => {
  const parts = path.split('/');
  const category = parts[parts.length - 2].toLowerCase();
  const fileName = parts[parts.length - 1];

  const title = fileName
    .replace(/\.(png|jpg|jpeg|webp)$/i, '')
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());

  return {
    id: path,
    category,
    src: imageSrc,
    title,
  };
});

const groupedDesignCategories = designItems.reduce((acc, item) => {
  const cat = item.category;
  if (!acc[cat]) {
    acc[cat] = [];
  }
  acc[cat].push(item);
  return acc;
}, {});

export default function Works() {
  const [viewMode, setViewMode] = useState('grid');
  const [filter, setFilter] = useState('dev');
  const [isCollabExpanded, setIsCollabExpanded] = useState(false);

  const devProjects = [...featuredProjects, ...moreProjects];

  const filteredDevProjects = devProjects.filter((p) => {
    if (filter === 'dev') return p.category ? p.category === 'dev' : true;
    return false;
  });

  const showDesignSection = filter === 'design';

  return (
    <PageWrapper>
      <section className="works-container">
        <div className="works-header">
          <div>
            <h3 className="section-name">projects</h3>
            <code className="section-description">
              products i have designed and developed — all of my ideas coming to life
            </code>
          </div>

          {!showDesignSection && (
            <div className="view-toggle">
              <button
                className={`toggle-btn ${viewMode === 'grid' ? 'active' : ''}`}
                onClick={() => setViewMode('grid')}
                aria-label="Grid View"
              >
                <span className="icon-grid-view" />
              </button>
              <button
                className={`toggle-btn ${viewMode === 'list' ? 'active' : ''}`}
                onClick={() => setViewMode('list')}
                aria-label="List View"
              >
                <span className="icon-list-view" />
              </button>
            </div>
          )}
        </div>

        <div className={`collab-banner ${!isCollabExpanded ? 'collapsed' : ''}`}>
          <div className={`collab-header ${!isCollabExpanded ? 'is-collapsed' : ''}`}>
            <span className="collab-badge">✩ OPEN FOR COLLABS</span>
            <button
              className="collab-btn"
              onClick={() => setIsCollabExpanded(!isCollabExpanded)}
              aria-label={isCollabExpanded ? 'Minimize banner' : 'Expand banner'}
            >
              {isCollabExpanded ? (
                <ChevronUp size={18} />
              ) : (
                <>Wanna collaborate?</>
              )}
            </button>
          </div>

          {isCollabExpanded && (
            <div className="collab-body">
              <div className="collab-top-row">
                <div className="collab-content">
                  <h2 className="collab-title">wanna collaborate?</h2>
                  <p className="collab-desc">
                    have a project in mind, an idea to bring to life, or just want to chat about ui/ux and development? let’s create something amazing together.
                  </p>
                </div>
              </div>

              <div className="collab-contacts">
                <a href="mailto:nadinerufo7@gmail.com" className="collab-contact-item">
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
          )}
        </div>

        <div className="category-filter">
          <button
            className={`filter-btn ${filter === 'dev' ? 'active' : ''}`}
            onClick={() => setFilter('dev')}
          >
            UI/UX & Development
          </button>
          <button
            className={`filter-btn ${filter === 'design' ? 'active' : ''}`}
            onClick={() => setFilter('design')}
          >
            Designs
          </button>
        </div>

        {filteredDevProjects.length > 0 && (
          <>
            <span className="group-label">UI/UX & DEVELOPMENT</span>
            <div className={`projects-grid ${viewMode}`}>
              {filteredDevProjects.map((project) => (
                <ProjectCard key={project.id} project={project} viewMode={viewMode} />
              ))}
            </div>
          </>
        )}

        {showDesignSection && (
          <div className="design-section">
            <span className="group-label margin-top">GRAPHIC DESIGN</span>
            <CanvaDesignShowcase />
          </div>
        )}
      </section>
    </PageWrapper>
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
          {project.links.map((link, idx) =>
            link.url.startsWith('/') ? (
              <Link key={idx} to={link.url} className="project-link">
                {link.label}
              </Link>
            ) : (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                {link.label}
              </a>
            )
          )}
        </div>
        <span className="project-badge">{project.badge}</span>
      </div>
    </div>
  );
}

function CanvaDesignShowcase() {
  const categories = Object.keys(groupedDesignCategories);

  return (
    <div className="designs-showcase-container">
      {categories.length > 0 ? (
        <div className="designs-masonry-grid">
          {categories.map((catName) => (
            <GroupedDesignCard
              key={catName}
              categoryName={catName}
              items={groupedDesignCategories[catName]}
            />
          ))}
        </div>
      ) : (
        <div className="designs-card coming-soon-card">
          <div className="designs-card-body">
            <span className="coming-soon-badge">IN PROGRESS</span>
            <h4>Designs Coming Soon</h4>
          </div>
        </div>
      )}
    </div>
  );
}

function GroupedDesignCard({ categoryName, items }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  if (!items || items.length === 0) return null;

  const changeSlide = (newIndex) => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsFading(false);
    }, 150);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    const newIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
    changeSlide(newIndex);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    const newIndex = currentIndex === items.length - 1 ? 0 : currentIndex + 1;
    changeSlide(newIndex);
  };

  const currentItem = items[currentIndex];

  return (
    <div className="designs-card grouped-card">
      <div className="designs-card-media">
        <img
          src={currentItem.src}
          alt={currentItem.title}
          loading="lazy"
          className={`designs-img ${isFading ? 'fade-out' : 'fade-in'}`}
        />

        {items.length > 1 && (
          <div className="designs-nav-overlay">
            <button
              className="designs-arrow-btn prev"
              onClick={handlePrev}
              aria-label="Previous slide"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              className="designs-arrow-btn next"
              onClick={handleNext}
              aria-label="Next slide"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        )}
      </div>

      <div className="designs-card-body">
        <span className="designs-category-badge">{categoryName}</span>
      </div>
    </div>
  );
}