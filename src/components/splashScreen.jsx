import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/splashScreen.css';

export default function SplashScreen({ onComplete }) {
  // Stage 1: 'star' -> Stage 2: 'zoom' -> Stage 3: 'text'
  const [stage, setStage] = useState('star');

  useEffect(() => {
    // Stage 1: Show pink star initially
    const zoomTimer = setTimeout(() => {
      setStage('zoom');
    }, 600);

    // Stage 2: Reveal "☆ maria nadine" over expanded pink background
    const textTimer = setTimeout(() => {
      setStage('text');
    }, 1200);

    // Stage 3: Exit splash screen
    const exitTimer = setTimeout(() => {
      onComplete();
    }, 2800);

    return () => {
      clearTimeout(zoomTimer);
      clearTimeout(textTimer);
      clearTimeout(exitTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="splash-container"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      <motion.div
        className="splash-star-bg"
        initial={{ scale: 0.4, opacity: 0 }}
        animate={{
          scale: stage === 'star' ? 1 : 100,
          opacity: 1,
        }}
        transition={{
          duration: stage === 'star' ? 0.5 : 0.8,
          ease: [0.65, 0, 0.35, 1],
        }}
      >
        ★
      </motion.div>

      <AnimatePresence>
        {stage === 'text' && (
          <motion.div
            key="full-brand"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="splash-brand-text"
          >
            ☆ maria nadine
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}