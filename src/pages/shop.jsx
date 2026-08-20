import React, { useState } from 'react';
import '../styles/commonstyles.css';

export default function Shop() {
  const [email, setEmail] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEmail('');
  };

  return (
    <div className="shop-container">
      <div className="shop-content">
        <span className="shop-badge">coming soon</span>
        <h3 className="section-name shop-title">something exciting is on the way</h3>
        <code className="shop-subtitle">
          we’re working hard to bring you our new shop experience — stay tuned for curated items and releases
        </code>

        <form className="shop-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="enter your email"
            className="shop-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="shop-button">
            Notify Me
          </button>
        </form>
      </div>

      {/* Email Sent Modal Overlay */}
      {isModalOpen && (
        <div className="flipbook-overlay" onClick={closeModal}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>
              ✕
            </button>
            <span className="shop-badge">subscribed</span>
            <h3 className="section-name" style={{ marginTop: '12px' }}>
              you're on the list!
            </h3>
            <code className="shop-subtitle" style={{ marginBottom: '24px' }}>
              keep an eye on your inbox.
            </code>
            <button className="shop-button" onClick={closeModal} style={{ width: '100%' }}>
              Got it
            </button>
          </div>
        </div>
      )}
    </div>
  );
}