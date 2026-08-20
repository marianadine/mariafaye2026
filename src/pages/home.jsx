import React, { useState, forwardRef } from 'react';
import stripImage from '../imgs/homepageimg.png';

import solarSphereIcon from '../imgs/icons/solarspherelogo.png';
import byahekoIcon from '../imgs/icons/byahekologo.png';

import kmc from '../imgs/book-kmc.png';
import sm from '../imgs/book-sm.png';
import jpcs from '../imgs/book-jpcs.png';
import umak from '../imgs/book-umak.png';

import greysImg from '../imgs/cristina.png';
import catsImg from '../imgs/cats.png';
import booksImg from '../imgs/books.png';
import musicImg from '../imgs/cds.png';

import '../styles/commonstyles.css';
import '../styles/home.css';
import '../styles/card.css';

import TechStack from '../components/techStack';

import HTMLFlipBook from 'react-pageflip';

import page1 from '../imgs/pages/page1.png';
import page2 from '../imgs/pages/page2.png';
import page3 from '../imgs/pages/page3.png';
import page4 from '../imgs/pages/page4.png';

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

    const projects = [
        {
            id: 1,
            title: 'SolarSphere',
            description: 'smart solar planning platform with solar visualization and personalized recommendations',
            icon: solarSphereIcon,
            tags: ['Solar Planning', 'Energy Saver', 'Cost Estimation'],
            links: [
                { label: 'Website ↗', url: '#' },
                { label: 'Mobile Application ↗', url: '#' },
                { label: 'Capstone ↗', url: '#' },
            ],
            badge: 'Capstone Project',
        },
        {
            id: 2,
            title: 'ByaheKo',
            description: 'mobile app for discovering routes and making local commuting more convenient',
            icon: byahekoIcon,
            tags: ['Transportation', 'Route Discovery', 'Local Commuting'],
            links: [
                { label: 'Case Study ↗', url: '#' },
            ],
            badge: 'End to End Project',
        },
    ];

    const hobbiesList = [
        {
            id: 1,
            image: greysImg,
            alt: 'Grey\'s Anatomy',
            label: 'rewatching greys anatomy',
        },
        {
            id: 2,
            image: catsImg,
            alt: 'Playing with cats',
            label: 'playing with cats',
        },
        {
            id: 3,
            image: booksImg,
            alt: 'Reading books',
            label: 'reading books',
        },
        {
            id: 4,
            image: musicImg,
            alt: 'Listening to Abel and Olivia',
            label: 'listening to abel and olivia',
        },
    ];


    const [activeBookPages, setActiveBookPages] = useState(null);

    // Map each card to its corresponding array of page images
    const bookPagesMap = {
        sm: [page1, page2, page3, page4, page2, page3, page4],
        kmc: [page3, page4],
        jpcs: [page1, page2],
        umak: [page3, page4],
    };

    const openFlipbook = (bookKey) => {
        const pages = bookPagesMap[bookKey] || [];
        // Ensure even number of pages for flipbook rendering
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
            <section className='first-section'>
                <h3 className='introText'>hey, it’s nadz ☆</h3>

                <div className="image-wrapper">
                    <img src={stripImage} alt="Film strip photos of Nadz" className="film-strip" />
                </div>

                <div className='two-column'>
                    <p>maria nadine faye rufo</p>
                    <code>an aspiring UI/UX Designer and QA Engineer with a passion for clean design and smooth user experiences.</code>
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
                    <img
                        src={sm}
                        alt="SM Experience"
                        className="book-card"
                        onClick={() => openFlipbook('sm')}
                    />
                    <img
                        src={kmc}
                        alt="KMC Experience"
                        className="book-card"
                        onClick={() => openFlipbook('kmc')}
                    />
                    <img
                        src={jpcs}
                        alt="JPCS Experience"
                        className="book-card"
                        onClick={() => openFlipbook('jpcs')}
                    />
                    <img
                        src={umak}
                        alt="UMAK Experience"
                        className="book-card"
                        onClick={() => openFlipbook('umak')}
                    />
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

                                /* Page Spread Configuration */
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
    )
}