import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { projects as defaultProjects } from '../data/homeData';
import '../styles/projectCarousel.css';

export default function ProjectsSection({ projects = defaultProjects }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const navigate = useNavigate();

    const totalProjects = projects.length;

    const handleNext = useCallback(() => {
        if (totalProjects === 0) return;
        setActiveIndex((prev) => (prev + 1) % totalProjects);
    }, [totalProjects]);

    const handlePrev = useCallback(() => {
        if (totalProjects === 0) return;
        setActiveIndex((prev) => (prev - 1 + totalProjects) % totalProjects);
    }, [totalProjects]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowLeft') {
                handlePrev();
            } else if (e.key === 'ArrowRight') {
                handleNext();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handlePrev, handleNext]);

    if (totalProjects === 0) {
        return (
            <div className="projects-carousel-wrapper empty-state">
                <p>No projects available to display.</p>
            </div>
        );
    }

    return (
        <section
            className="projects-carousel-wrapper"
            aria-label="Featured Projects Carousel"
            role="region"
        >
            {/* Stage Container */}
            <div className="carousel-stage">
                {projects.map((carouselproject, index) => {
                    let rawOffset = index - activeIndex;

                    if (rawOffset > totalProjects / 2) {
                        rawOffset -= totalProjects;
                    } else if (rawOffset < -totalProjects / 2) {
                        rawOffset += totalProjects;
                    }

                    const offset = rawOffset;
                    const isActive = offset === 0;
                    const isVisible = Math.abs(offset) <= 1;

                    const angleStep = 24;
                    const angle = offset * angleStep;
                    
                    const scale = Math.max(0, 1 - Math.abs(offset) * 0.15);
                    const opacity = isVisible ? 1 - Math.abs(offset) * 0.35 : 0;
                    const zIndex = totalProjects - Math.round(Math.abs(offset));
                    const yOffset = Math.abs(offset) * 25;

                    return (
                        <motion.div
                            key={carouselproject.id || index}
                            className={`carouselproject-carouselcard ${isActive ? 'active' : 'inactive'}`}
                            onClick={() => setActiveIndex(index)}
                            initial={false}
                            animate={{
                                rotate: angle,
                                scale: scale,
                                opacity: opacity,
                                y: yOffset,
                            }}
                            transition={{
                                type: 'spring',
                                stiffness: 170,
                                damping: 26,
                                mass: 0.8,
                            }}
                            style={{
                                zIndex: zIndex,
                                transformOrigin: '50% 1100px',
                                pointerEvents: isVisible ? 'auto' : 'none',
                            }}
                            tabIndex={isActive ? 0 : -1}
                            role="group"
                            aria-roledescription="slide"
                            aria-label={`${index + 1} of ${totalProjects}: ${carouselproject.title}`}
                        >
                            <div className="carouselcard-header">
                                {carouselproject.icon && (
                                    <img
                                        src={carouselproject.icon}
                                        alt=""
                                        className="carouselproject-icon"
                                        loading="lazy"
                                    />
                                )}
                                <div className="carouselproject-meta">
                                    <h3 className="carouselproject-title">{carouselproject.title}</h3>
                                    <p className="carouselproject-desc">{carouselproject.description}</p>
                                </div>
                            </div>

                            {carouselproject.tags && carouselproject.tags.length > 0 && (
                                <div className="carouseltag-list">
                                    {carouselproject.tags.map((tag, idx) => (
                                        <span key={idx} className="carouselproject-tag">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            )}

                            <div className="carouselcard-carouselfooter">
                                <div className="carouselfooter-links">
                                    {carouselproject.links?.map((link, idx) => (
                                        <a
                                            key={idx}
                                            href={link.url}
                                            className="carouselproject-link"
                                            target={link.url?.startsWith('http') ? '_blank' : '_self'}
                                            rel="noopener noreferrer"
                                            tabIndex={isActive ? 0 : -1}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                            }}
                                        >
                                            {link.label}
                                        </a>
                                    ))}
                                </div>
                                {carouselproject.badge && (
                                    <span className="carouselproject-badge">{carouselproject.badge}</span>
                                )}
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {totalProjects > 1 && (
                <div className="carousel-controls">
                    <button
                        onClick={handlePrev}
                        className="carousel-btn"
                        aria-label="Previous Project"
                    >
                        ‹
                    </button>
                    <button
                        onClick={handleNext}
                        className="carousel-btn"
                        aria-label="Next Project"
                    >
                        ›
                    </button>
                </div>
            )}
        </section>
    );
}