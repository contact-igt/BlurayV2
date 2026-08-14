import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ShieldCheck,
    Radio,
    Award,
    Anchor,
    Menu,
    X,
    ChevronDown
} from 'lucide-react';

import { COMPANY_CONFIG } from '@/lib/company';

interface NavbarProps {
    currentPage: string;
    setCurrentPage: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const serviceLinks = [
        { id: 'ndt', label: 'NDT & Inspection', icon: ShieldCheck },
        { id: 'advanced-ndt', label: 'Advanced NDT (PAUT/TOFD)', icon: Radio },
        { id: 'welder-qual', label: 'Welder Qualification', icon: Award },
        { id: 'pull-out', label: 'Tensile Pull-Out Testing', icon: Anchor },
    ];

    const mainLinks = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About Us' },
        { id: 'contact', label: 'Contact' }
    ];

    return (
        <nav className={`site-navbar fixed w-full z-[100] transition-all duration-300 ${isScrolled
            ? 'py-2 bg-white/95 border-b border-brand-500/15 shadow-md backdrop-blur-md'
            : 'py-2.5 sm:py-3 bg-white/90 border-b border-brand-500/10 backdrop-blur-sm'
            }`}>
            <div className="max-w-7xl mx-auto px-5 sm:px-6 flex justify-between items-center">
                <button aria-label="BLUERAY home" className="flex items-center cursor-pointer group" onClick={() => setCurrentPage('home')}>
                    <img src="/images/blueray-logo-final-approved-display.png" alt={COMPANY_CONFIG.legalName} className="brand-logo h-14 sm:h-16 lg:h-[4.5rem] w-auto object-contain transition-transform duration-150 group-hover:scale-[1.02]" />
                </button>

                {/* Desktop Links */}
                <div className="hidden lg:flex items-center space-x-7">
                    {mainLinks.slice(0, 2).map((link) => (
                        <button
                            key={link.id}
                            onClick={() => setCurrentPage(link.id)}
                            className={`site-nav-link text-xs lg:text-[13px] font-bold uppercase transition-colors ${currentPage === link.id ? 'site-nav-link-active' : ''}`}
                        >
                            {link.label}
                        </button>
                    ))}

                    {/* Services Dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => setServicesOpen((open) => !open)}
                            className={`site-nav-link flex items-center gap-1 text-xs lg:text-[13px] font-bold uppercase transition-colors ${['ndt', 'advanced-ndt', 'welder-qual', 'pull-out', 'mechanical', 'qaqc', 'coating', 'manpower'].includes(currentPage) ? 'site-nav-link-active' : ''}`}
                        >
                            Services <ChevronDown className={`w-3.5 h-3.5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                        </button>

                        <AnimatePresence>
                            {servicesOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    className="site-services-dropdown absolute top-full right-0 mt-4 w-72 bg-slate-900/95 border border-white/10 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-3xl"
                                >
                                    <div className="p-3 grid gap-1">
                                        {serviceLinks.map((item) => (
                                            <button
                                                key={item.id}
                                                onClick={() => { setCurrentPage(item.id); setServicesOpen(false); }}
                                                className="site-dropdown-item w-full flex items-center gap-3 p-3.5 text-left transition-colors"
                                            >
                                                <item.icon className="w-5 h-5 text-brand-500" />
                                                <span className="text-xs sm:text-sm font-bold uppercase">{item.label}</span>
                                            </button>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {mainLinks.slice(2).map((link) => (
                        <button
                            key={link.id}
                            onClick={() => setCurrentPage(link.id)}
                            className={`site-nav-link text-xs lg:text-[13px] font-bold uppercase transition-colors ${currentPage === link.id ? 'site-nav-link-active' : ''}`}
                        >
                            {link.label}
                        </button>
                    ))}

                    <button
                        onClick={() => setCurrentPage('contact')}
                        className="bg-brand-600 text-white px-5 py-2.5 rounded-md text-xs font-black uppercase hover:bg-brand-700 transition-colors shadow-xl"
                    >
                        Request Quote
                    </button>
                </div>

                <button aria-label={mobileMenuOpen ? 'Close navigation' : 'Open navigation'} className="site-menu-toggle lg:hidden p-2 -mr-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 50 }}
                        className="site-mobile-menu absolute top-full left-0 right-0 h-[calc(100vh-4.75rem)] sm:h-[calc(100vh-5.5rem)] bg-slate-950 z-[200] p-6 flex flex-col space-y-4 lg:hidden border-t border-brand-500/30 shadow-2xl overflow-y-auto"
                    >
                        {mainLinks.slice(0, 2).map((item) => (
                            <button key={item.id} onClick={() => { setCurrentPage(item.id); setMobileMenuOpen(false); }} className={`site-nav-link text-lg font-bold text-left py-2 ${currentPage === item.id ? 'site-nav-link-active' : ''}`}>
                                {item.label}
                            </button>
                        ))}
                        <div className="pt-4 border-t border-white/10 space-y-2">
                            <p className="text-xs font-black uppercase text-brand-500 tracking-wider">Services</p>
                            {serviceLinks.map((item) => (
                                <button key={item.id} onClick={() => { setCurrentPage(item.id); setMobileMenuOpen(false); }} className="site-dropdown-item text-base font-medium text-left flex items-center gap-3 py-2 pl-2">
                                    <item.icon className="w-5 h-5 text-brand-500" /> {item.label}
                                </button>
                            ))}
                        </div>
                        <button onClick={() => { setCurrentPage('contact'); setMobileMenuOpen(false); }} className={`site-nav-link text-lg font-bold text-left py-2 ${currentPage === 'contact' ? 'site-nav-link-active' : ''}`}>Contact</button>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
