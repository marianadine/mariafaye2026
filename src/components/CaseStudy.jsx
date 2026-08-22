import React, { useState, useRef } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';

import ScreenDemoCard from './ScreenDemoCard';
import { caseStudies } from '../data/caseStudyData';

import '../styles/commonstyles.css';
import '../styles/casestudy.css';

export default function CaseStudy() {
    const { projectId } = useParams();
    const [playingIndex, setPlayingIndex] = useState(null);
    const videoRefs = useRef([]);

    const projectKey = projectId?.toLowerCase();
    const project = caseStudies[projectKey];

    if (!project) {
        return <Navigate to="/works" replace />;
    }

    const {
        banner,
        demoVideo,
        meta,
        overviewText,
        problemData,
        assumptionsData,
        personasData,
        screensData,
        feedbackData,
        takeawaysData,
    } = project;

    const handleVideoClick = (index) => {
        const currentVideo = videoRefs.current[index];
        if (!currentVideo) return;

        if (playingIndex === index) {
            currentVideo.pause();
            setPlayingIndex(null);
        } else {
            videoRefs.current.forEach((video, idx) => {
                if (video && idx !== index) {
                    video.pause();
                }
            });
            currentVideo.play();
            setPlayingIndex(index);
        }
    };

    return (
        <article className="case-study-container">
            {/* Back Link */}
            <Link to="/works" className="back-link">
                ← back to works
            </Link>

            {/* Banner Image */}
            <div className="case-banner-wrapper">
                <img
                    src={banner}
                    alt={`${meta.title} Showcase Banner`}
                    className="case-banner-img"
                />
            </div>

            {/* Header */}
            <header className="case-study-header">
                <span className="case-badge">{meta.badge}</span>
                <h1 className="case-title">{meta.title}</h1>
                <p className="case-subtitle">{meta.subtitle}</p>

                {/* Project Meta */}
                <div className="case-meta-grid">
                    {meta.metaItems.map((item, idx) => (
                        <div className="meta-item" key={idx}>
                            <span className="meta-label">{item.label}</span>
                            <span className="meta-value">{item.value}</span>
                        </div>
                    ))}
                </div>
            </header>

            {/* 01. OVERVIEW */}
            <section className="case-section">
                <span className="section-tag">01. OVERVIEW</span>
                <h2 className="section-title">Project Overview</h2>
                {overviewText.map((paragraph, idx) => (
                    <p className="case-text" key={idx}>
                        {paragraph}
                    </p>
                ))}
            </section>

            {/* 02. PROBLEM & BUSINESS CONTEXT */}
            <section className="case-section">
                <span className="section-tag">02. PROBLEM & BUSINESS CONTEXT</span>
                <h2 className="section-title">The Challenge & Business Impact</h2>

                <div className="problem-grid">
                    {problemData.map((col, idx) => (
                        <div className="problem-card" key={idx}>
                            <h4>{col.title}</h4>
                            <ul className="bullet-list">
                                {col.bullets.map((b, bIdx) => (
                                    <li key={bIdx}>
                                        <strong>{b.highlight}</strong>
                                        {b.text}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* 03. INITIAL ASSUMPTIONS */}
            <section className="case-section">
                <span className="section-tag">03. ASSUMPTIONS</span>
                <h2 className="section-title">Initial Project Assumptions</h2>
                <div className="assumptions-grid">
                    {assumptionsData.map((item, idx) => (
                        <div className="assumption-box" key={idx}>
                            <strong>{item.title}</strong>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 04. USER PERSONAS */}
            <section className="case-section">
                <span className="section-tag">04. USER RESEARCH</span>
                <h2 className="section-title">User Personas</h2>
                <div className="personas-grid">
                    {personasData.map((persona, idx) => (
                        <div className="persona-card" key={idx}>
                            <div className="persona-header">
                                <h3>{persona.name}</h3>
                                <span>{persona.role}</span>
                            </div>
                            <p className="persona-quote">{persona.quote}</p>
                            <div className="persona-details">
                                <strong>Goals:</strong>
                                <ul>
                                    {persona.goals.map((g, gIdx) => (
                                        <li key={gIdx}>{g}</li>
                                    ))}
                                </ul>
                                <strong>Pain Points:</strong>
                                <ul>
                                    {persona.painPoints.map((p, pIdx) => (
                                        <li key={pIdx}>{p}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 05. KEY UI SCREENS & INTERFACE DESIGN */}
            <section className="case-section">
                <span className="section-tag">05. UI & INTERFACE DESIGN</span>
                <h2 className="section-title">Key Screens & Core Functionalities</h2>

                <div className="ui-screens-alternating">
                    {screensData.map((screen, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <div
                                key={screen.step || index}
                                className={`alternating-row ${isEven ? 'row-video-left' : 'row-video-right'}`}
                            >
                                <div className="screen-video-wrapper">
                                    <video
                                        ref={(el) => (videoRefs.current[index] = el)}
                                        className="screen-video"
                                        src={screen.video || demoVideo}
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        controlsList="nodownload"
                                        onClick={() => handleVideoClick(index)}
                                    />
                                </div>
                                <div className="screen-info">
                                    <span className="screen-step">STEP {screen.step}</span>
                                    <h4>{screen.title}</h4>
                                    <p>{screen.desc}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* 06. USER FEEDBACK & ITERATION */}
            <section className="case-section">
                <span className="section-tag">06. TESTING & ITERATIONS</span>
                <h2 className="section-title">Usability Feedback & UI Refinements</h2>

                <div className="feedback-grid">
                    {feedbackData.map((item, idx) => (
                        <div className="feedback-card" key={idx}>
                            <span className={`feedback-tag ${item.tagClass}`}>{item.tagText}</span>
                            <h4>{item.title}</h4>
                            <p>
                                <strong>Feedback:</strong> {item.feedback}
                            </p>
                            <p>
                                <strong>Iteration:</strong> {item.iteration}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 07. REFLECTION */}
            <section className="case-section">
                <span className="section-tag">07. REFLECTION</span>
                <h2 className="section-title">Key Learnings</h2>
                <ul className="takeaways-list">
                    {takeawaysData.map((item, idx) => (
                        <li key={idx}>
                            <strong>{item.highlight}</strong>
                            {item.text}
                        </li>
                    ))}
                </ul>
            </section>
        </article>
    );
}