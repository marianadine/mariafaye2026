import React, { useState, forwardRef } from 'react';
import HTMLFlipBook from 'react-pageflip';

import stripImage from '../imgs/homepageimg.png';
import kmc from '../imgs/book-kmc.png';
import sm from '../imgs/book-sm.png';
import jpcs from '../imgs/book-jpcs.png';
import umak from '../imgs/book-umak.png';

import TechStack from '../components/techStack';
import { projects, hobbiesList, bookPagesMap } from '../data/homeData';

import '../styles/commonstyles.css';
import '../styles/home.css';
import '../styles/card.css';

const Page = forwardRef((props, ref) => {
    const isEven = props.number % 2 === 0;
    return (
        <div className={`page ${isEven ? 'page-even' : 'page-odd'}`} ref={ref}>
            <img src={props.src} alt="Page content" className="page-image" />
        </div>
    );
});

Page.displayName = 'Page';

export default function Home() {
    const [activeBookPages, setActiveBookPages] = useState(null);

    const openFlipbook = (bookKey) => {
        const pages = bookPagesMap[bookKey] ? [...bookPagesMap[bookKey]] : [];
        if (pages.length % 2 !== 0) {
            pages.push(pages[pages.length - 1]);
        }
        setActiveBookPages(pages);
    };

    const closeFlipbook = () => {
        setActiveBookPages(null);
    };

    return (
        <div>
            {/* FIRST SECTION */}
            <section className="first-section">
                <h3 className="introText">hey, it’s nadz ☆</h3>

                <div className="image-wrapper">
                    <img src={stripImage} alt="Film strip photos of Nadz" className="film-strip" />
                </div>

                <div className="two-column">
                    <p>maria nadine faye rufo</p>
                    <code>
                        an aspiring UI/UX Designer and QA Engineer with a passion for clean design and smooth user experiences.
                    </code>
                </div>
            </section>

            {/* SECOND SECTION */}
            <section className="second-section">
                <h3 className="section-name">brain dump</h3>
                <code className="section-description">
                    products i have designed and developed — all of my ideas coming to life
                </code>

                <div className="projects-grid">
                    {projects.map((project) => (
                        <div key={project.id} className="project-card">
                            <div className="card-header">
                                <img src={project.icon} alt={project.title} className="project-icon" />
                                <div className="project-meta">
                                    <h4 className="project-title">{project.title}</h4>
                                    <p className="project-desc">{project.description}</p>
                                </div>
                            </div>

                            <div className="tag-list">
                                {project.tags.map((tag, idx) => (
                                    <span key={idx} className="project-tag">
                                        {tag}
                                    </span>
                                ))}
                            </div>

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
                    ))}
                </div>

                <button className="see-more-btn">See More</button>
            </section>

            {/* THIRD SECTION */}
            <section className="third-section">
                <h3 className="section-name">side quests</h3>
                <code className="section-description">
                    not just work, but wins — the timeline of companies i have worked with, organizations, and competitions
                </code>

                <div className="image-wrapper">
                    <img src={sm} alt="SM Experience" className="book-card" onClick={() => openFlipbook('sm')} />
                    <img src={kmc} alt="KMC Experience" className="book-card" onClick={() => openFlipbook('kmc')} />
                    <img src={jpcs} alt="JPCS Experience" className="book-card" onClick={() => openFlipbook('jpcs')} />
                    <img src={umak} alt="UMAK Experience" className="book-card" onClick={() => openFlipbook('umak')} />
                </div>

                {/* Flipbook Modal Overlay */}
                {activeBookPages && (
                    <div className="flipbook-overlay" onClick={closeFlipbook}>
                        <div className="flipbook-modal" onClick={(e) => e.stopPropagation()}>
                            <button className="close-btn" onClick={closeFlipbook}>
                                ✕
                            </button>
                            <HTMLFlipBook
                                width={550}
                                height={750}
                                size="fixed"
                                minWidth={300}
                                maxWidth={500}
                                minHeight={400}
                                maxHeight={700}
                                flippingTime={800}
                                showCover={true}
                                usePortrait={false}
                                startPage={0}
                                drawShadow={true}
                                maxShadowOpacity={0.8}
                                showPageCorners={true}
                                mobileScrollSupport={true}
                                className="flipbook-instance"
                            >
                                {activeBookPages.map((pageSrc, index) => (
                                    <Page key={index} number={index + 1} src={pageSrc} />
                                ))}
                            </HTMLFlipBook>
                        </div>
                    </div>
                )}
            </section>

            {/* FOURTH SECTION */}
            <TechStack />

            {/* FIFTH SECTION */}
            <section className="hobbies-section">
                <h3 className="section-name">you can catch me doing:</h3>

                <div className="hobbies-grid">
                    {hobbiesList.map((item) => (
                        <div key={item.id} className="hobby-card">
                            <div className="hobby-image-wrapper">
                                <img src={item.image} alt={item.alt} className="hobby-image" />
                            </div>
                            <code className="hobby-label">{item.label}</code>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}