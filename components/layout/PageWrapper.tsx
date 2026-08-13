'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface PageWrapperProps {
    children: React.ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.28, ease: "easeOut" }}
        className="min-h-screen pt-28 sm:pt-32 pb-20 sm:pb-24 px-5 sm:px-6 max-w-7xl mx-auto"
    >
        {children}
    </motion.div>
);

export default PageWrapper;
