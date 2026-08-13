'use client';

import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ThemeToggle from '@/components/layout/ThemeToggle';
import HeroSection from '@/components/pages/HomePage/HeroSection';
import CompanyIntro from '@/components/pages/HomePage/CompanyIntro';
import ServicesOverview from '@/components/pages/HomePage/ServicesOverview';
import IndustriesServed from '@/components/pages/HomePage/IndustriesServed';
import WhyChooseBLUERAY from '@/components/pages/HomePage/WhyChooseANT';
import CTASection from '@/components/pages/HomePage/CTASection';
import AboutPage from '@/components/pages/AboutPage';
import ServicePage from '@/components/pages/ServicePage';
import ContactPage from '@/components/pages/ContactPage';
import AdditionalServices from '@/components/pages/HomePage/AdditionalServices';

export default function App() {
    const [currentPage, setCurrentPage] = useState('home');
    const [theme, setTheme] = useState<'dark' | 'light'>('dark');

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'auto' });
    }, [currentPage]);

    useEffect(() => {
        setTheme(document.documentElement.dataset.theme === 'light' ? 'light' : 'dark');
    }, []);

    const toggleTheme = () => {
        const nextTheme = theme === 'dark' ? 'light' : 'dark';
        document.documentElement.dataset.theme = nextTheme;
        window.localStorage.setItem('blueray-theme', nextTheme);
        setTheme(nextTheme);
    };

    const HomePage = () => (
        <>
            <HeroSection setCurrentPage={setCurrentPage} />
            <CompanyIntro setCurrentPage={setCurrentPage} />
            <ServicesOverview setCurrentPage={setCurrentPage} />
            <IndustriesServed />
            <WhyChooseBLUERAY />
            <AdditionalServices setCurrentPage={setCurrentPage} />
            <CTASection setCurrentPage={setCurrentPage} />
        </>
    );

    const renderContent = () => {
        switch (currentPage) {
            case 'home':
                return <HomePage />;

            case 'about':
                return <AboutPage setCurrentPage={setCurrentPage} />;

            case 'ndt':
                return <ServicePage setCurrentPage={setCurrentPage} initialSection="core-ndt" />;

            case 'advanced-ndt':
                return <ServicePage setCurrentPage={setCurrentPage} initialSection="advanced-ndt" />;

            case 'welder-qual':
                return <ServicePage setCurrentPage={setCurrentPage} initialSection="welder-qual" />;

            case 'pull-out':
                return <ServicePage setCurrentPage={setCurrentPage} initialSection="pullout-testing" />;

            case 'mechanical':
            case 'qaqc':
            case 'coating':
            case 'manpower':
                return <ServicePage setCurrentPage={setCurrentPage} />;

            case 'contact':
                return <ContactPage />;

            default:
                return <HomePage />;
        }
    };

    return (
        <div className="bg-slate-950 text-slate-200 min-h-screen selection:bg-brand-500 selection:text-white font-sans overflow-x-hidden">
            <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

            <AnimatePresence mode="wait">
                <motion.div key={currentPage}>
                    {renderContent()}
                </motion.div>
            </AnimatePresence>

            <Footer setCurrentPage={setCurrentPage} />
            <ThemeToggle theme={theme} onToggle={toggleTheme} />
        </div>
    );
}
