import React from 'react';

export default function ScreenDemoCard({ screen, index, isPlaying, onVideoClick, videoRef, videoSrc }) {
    const isEven = index % 2 === 0;

    return (
        <div className={`alternating-row ${isEven ? 'row-video-left' : 'row-video-right'}`}>
            <div
                className={`screen-video-wrapper ${isPlaying ? 'is-playing' : ''}`}
                onClick={() => onVideoClick(index)}
            >
                <video
                    ref={videoRef}
                    src={videoSrc}
                    className="screen-video"
                    loop
                    muted
                    playsInline
                />
                {!isPlaying && (
                    <div className="video-play-overlay">
                        <div className="play-button-icon">▶</div>
                        <span>Play Demo</span>
                    </div>
                )}
            </div>

            <div className="screen-info">
                <span className="screen-step">{screen.step}</span>
                <h4>{screen.title}</h4>
                <p>{screen.desc}</p>
            </div>
        </div>
    );
}