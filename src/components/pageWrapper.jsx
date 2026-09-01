import { useEffect } from 'react';
import { motion } from 'framer-motion';

const glassVariants = {
    initial: {
        opacity: 0,
        y: 20,
        filter: 'blur(6px)',
    },
    animate: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: {
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
        },
    },
    exit: {
        opacity: 0,
        y: -12,
        filter: 'blur(4px)',
        transition: {
            duration: 0.25,
            ease: [0.4, 0, 1, 1],
        },
    },
};

export default function PageWrapper({ children, className = '' }) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <motion.div
            variants={glassVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className={`page-wrapper ${className}`.trim()}
        >
            {children}
        </motion.div>
    );
}