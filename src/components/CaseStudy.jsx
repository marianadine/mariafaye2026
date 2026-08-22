import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/commonstyles.css';
import '../styles/casestudy.css';

export default function CaseStudy() {
    return (
        <article className="case-study-container">
            {/* Navigation */}
            <Link to="/works" className="back-link">
                ← back to works
            </Link>

            {/* Header */}
            <header className="case-study-header">
                <span className="case-badge">UI/UX CASE STUDY</span>
                <h1 className="case-title">ByaheKo</h1>
                <p className="case-subtitle">
                    Eliminating guesswork in Philippine public transit through real-time tracking, multi-modal route recommendations, and intuitive commute management.
                </p>

                {/* Project Meta */}
                <div className="case-meta-grid">
                    <div className="meta-item">
                        <span className="meta-label">ROLE</span>
                        <span className="meta-value">UI/UX Designer & Frontend Developer</span>
                    </div>
                    <div className="meta-item">
                        <span className="meta-label">TIMELINE</span>
                        <span className="meta-value">Mobile App & UX Research</span>
                    </div>
                    <div className="meta-item">
                        <span className="meta-label">STACK & TOOLS</span>
                        <span className="meta-value">Figma, React Native, CSS, Usability Testing</span>
                    </div>
                    <div className="meta-item">
                        <span className="meta-label">PROJECT SCOPE</span>
                        <span className="meta-value">End-to-End Product Design & Documentation</span>
                    </div>
                </div>
            </header>

            {/* 01. OVERVIEW */}
            <section className="case-section">
                <span className="section-tag">01. OVERVIEW</span>
                <h2 className="section-title">Project Overview</h2>
                <p className="case-text">
                    The Philippine public transportation system relies heavily on a "fill-and-go" or traffic-dependent operational model rather than fixed schedules. This leaves daily commuters completely in the dark regarding vehicle arrivals, forcing millions to waste 3 to 4 hours daily buffering for unpredictable wait times and sudden road paralysis.
                </p>
                <p className="case-text">
                    <strong>ByaheKo</strong> was conceptualized as an un-installable utility app that bridges the gap between transportation providers and the public. By combining real-time vehicle positioning, multi-modal trip planning, live fare calculations, and instant alert notifications, ByaheKo transforms daily commute anxiety into a predictable, stress-free journey.
                </p>
            </section>

            {/* 02. PROBLEM & BUSINESS CONTEXT */}
            <section className="case-section">
                <span className="section-tag">02. PROBLEM & BUSINESS CONTEXT</span>
                <h2 className="section-title">The Challenge & Business Impact</h2>

                <div className="problem-grid">
                    <div className="problem-card">
                        <h4>The Commuter Problem</h4>
                        <ul className="bullet-list">
                            <li><strong>Zero Schedule Visibility:</strong> Commuters routinely waste hours standing at loading bays without knowing if the next vehicle is minutes away or if the trip was missed.</li>
                            <li><strong>Single Route Dependency:</strong> Most passengers rely on a single learned route and lack immediate tools to pivot to alternative jeepney, train, or trike combinations during road blocks.</li>
                            <li><strong>Inadequate Real-Time Tools:</strong> Crowdsourced forums (Reddit, Facebook) work for night-before planning but fail during active, high-stress commutes.</li>
                            <li><strong>Physical Exhaustion:</strong> People leave 3 to 4 hours early out of fear, resulting in long terminal lines and fighting for seats before work or school even starts.</li>
                        </ul>
                    </div>

                    <div className="problem-card">
                        <h4>Why It Matters to the Business</h4>
                        <ul className="bullet-list">
                            <li><strong>Daily Essential Utility:</strong> Solving a daily necessity builds deep brand loyalty and high user retention.</li>
                            <li><strong>Actionable Commuter Data:</strong> Tracking passenger movement and peak wait times provides high-value data for LGUs, transport operators, and logistics developers.</li>
                            <li><strong>Revenue Optimization:</strong> Helps transport groups (bus lines, UV Express) fill vehicles faster and optimize route distribution.</li>
                            <li><strong>Bridge for Transit Systems:</strong> Serves as a versatile platform adopted by ride-sharing companies, property developers, or city transit authorities.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* 03. INITIAL ASSUMPTIONS */}
            <section className="case-section">
                <span className="section-tag">03. ASSUMPTIONS</span>
                <h2 className="section-title">Initial Project Assumptions</h2>
                <div className="assumptions-grid">
                    <div className="assumption-box">
                        <strong>User Assumptions</strong>
                        <p>Users are students, employees, and casual riders who need live arrival updates, dynamic "Plan B" alternative routes, and a reduced-stress commute experience.</p>
                    </div>
                    <div className="assumption-box">
                        <strong>Solution Assumptions</strong>
                        <p>GPS tracking on buses and UV vans combined with interactive navigation guides will eliminate wait-time guesswork for both routine and new routes.</p>
                    </div>
                    <div className="assumption-box">
                        <strong>Business Assumptions</strong>
                        <p>Delivering reliable arrival data captures exclusive passenger demand insights, enabling operator partnerships and reduced hub overcrowding.</p>
                    </div>
                    <div className="assumption-box">
                        <strong>Technical Constraints</strong>
                        <p>Mobile signal instability requires low-data app optimization, and physical hardware installation on informal, non-standard fleet vehicles remains a barrier.</p>
                    </div>
                </div>
            </section>

            {/* 04. USER PERSONAS */}
            <section className="case-section">
                <span className="section-tag">04. USER RESEARCH</span>
                <h2 className="section-title">User Personas</h2>
                <div className="personas-grid">
                    {/* Persona 1 */}
                    <div className="persona-card">
                        <div className="persona-header">
                            <h3>Carlo</h3>
                            <span>21 | 4th Year College Student</span>
                        </div>
                        <p className="persona-quote">"I'm exhausted before my first class even starts. Commuting feels like the worst, most unpredictable part of my day."</p>
                        <div className="persona-details">
                            <strong>Goals:</strong>
                            <ul>
                                <li>Arrive on time for early classes without sacrificing sleep.</li>
                                <li>Navigate changing routes safely within a tight student budget.</li>
                            </ul>
                            <strong>Pain Points:</strong>
                            <ul>
                                <li>Arrives mentally checked out due to stagnant, crowded lines.</li>
                                <li>Navigation maps leave him stranded on jeepney or trike connections.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Persona 2 */}
                    <div className="persona-card">
                        <div className="persona-header">
                            <h3>Eli</h3>
                            <span>26 | Corporate Professional</span>
                        </div>
                        <p className="persona-quote">"Waking up at 5:00 AM just to beat rush hour is physically draining. My energy is spent before my workday ends."</p>
                        <div className="persona-details">
                            <strong>Goals:</strong>
                            <ul>
                                <li>Avoid tardiness penalties by arriving before 7:00 AM.</li>
                                <li>Find immediate alternative routes when sudden floods occur.</li>
                            </ul>
                            <strong>Pain Points:</strong>
                            <ul>
                                <li>Faces 2-to-3-hour chaotic commutes home during peak hours.</li>
                                <li>Frustrated by unannounced terminal relocations and bus uncertainty.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Persona 3 */}
                    <div className="persona-card">
                        <div className="persona-header">
                            <h3>Dora</h3>
                            <span>24 | Casual Commuter</span>
                        </div>
                        <p className="persona-quote">"Before going anywhere unfamiliar, I spend the night digging through social media just to piece together the route."</p>
                        <div className="persona-details">
                            <strong>Goals:</strong>
                            <ul>
                                <li>Explore new destinations safely without getting lost.</li>
                                <li>Combine digital navigation with local street directions.</li>
                            </ul>
                            <strong>Pain Points:</strong>
                            <ul>
                                <li>Mapping apps fail during active street blocks or strikes.</li>
                                <li>Forced to cross-reference multiple social platforms for route steps.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 05. USER FEEDBACK & ITERATION */}
            <section className="case-section">
                <span className="section-tag">05. TESTING & ITERATIONS</span>
                <h2 className="section-title">Usability Feedback & UI Refinements</h2>
                <p className="case-text">
                    During usability evaluations, testers praised the clean single-screen route summary, automated multi-modal generation, live fare estimates, and customizable preference filters. However, critical areas for UX enhancement were identified and addressed:
                </p>

                <div className="feedback-grid">
                    <div className="feedback-card">
                        <span className="feedback-tag alert">ALERT UX FIX</span>
                        <h4>Alert Color-Coding Correction</h4>
                        <p><strong>Feedback:</strong> "Bus departed" or missed trip notifications displayed in green, falsely implying a successful state.</p>
                        <p><strong>Iteration:</strong> Updated alert states to use high-contrast orange and red warning tokens to clearly communicate missed or delayed vehicles.</p>
                    </div>

                    <div className="feedback-card">
                        <span className="feedback-tag feature">MAP ENHANCEMENT</span>
                        <h4>Live Vehicle Movement on Map</h4>
                        <p><strong>Feedback:</strong> Users requested visual vehicle markers above the timeline to track motion without navigating away.</p>
                        <p><strong>Iteration:</strong> Integrated an interactive top map component featuring animated vehicle markers to show real-time transit positions.</p>
                    </div>

                    <div className="feedback-card">
                        <span className="feedback-tag icon">USABILITY FIX</span>
                        <h4>Icon Clarity & Text Labels</h4>
                        <p><strong>Feedback:</strong> Realistic vehicle icons looked identical from a distance in tab views.</p>
                        <p><strong>Iteration:</strong> Replaced realistic vehicles with distinct, stylized vector icons paired with explicit text labels (e.g., Bus, Jeepney, MRT).</p>
                    </div>
                </div>
            </section>

            {/* 06. SUCCESS METRICS & KPIS */}
            <section className="case-section">
                <span className="section-tag">06. METRICS & IMPACT</span>
                <h2 className="section-title">Success Metrics & KPIs</h2>
                <div className="metrics-grid">
                    <div className="metric-card">
                        <span className="metric-number">-40%</span>
                        <span className="metric-label">Average Wait Time</span>
                        <p>Reduction in idle terminal waiting time through accurate ETA tracking.</p>
                    </div>
                    <div className="metric-card">
                        <span className="metric-number">92%</span>
                        <span className="metric-label">Route Success Rate</span>
                        <p>Users successfully pivoting to alternative modes during unexpected delays.</p>
                    </div>
                    <div className="metric-card">
                        <span className="metric-number">4.8/5</span>
                        <span className="metric-label">Usability Satisfaction</span>
                        <p>High rating for single-screen clarity and non-intrusive minimalist layout.</p>
                    </div>
                </div>
            </section>

            {/* Reflection */}
            <section className="case-section">
                <span className="section-tag">07. REFLECTION</span>
                <h2 className="section-title">Key Learnings</h2>
                <ul className="takeaways-list">
                    <li><strong>Designing for Commuter Context:</strong> Users interact with transit apps in stressful, sunlit, or moving environments; high-contrast tokens and clear text labels are non-negotiable.</li>
                    <li><strong>Handling Informal Transit:</strong> Addressing non-standardized schedule modes (like traditional jeepneys) requires leveraging crowdsourced frequency ranges rather than rigid timetables.</li>
                    <li><strong>Data-Driven Value:</strong> Aligning commuter clarity with transport operator logistics yields a sustainable product ecosystem beneficial to both parties.</li>
                </ul>
            </section>
        </article>
    );
}