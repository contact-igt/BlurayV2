import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { COMPANY_CONFIG } from '@/lib/company';
import { PipelineInspectionGraphic } from '@/components/graphics/TechnicalIllustrations';

interface HeroSectionProps {
    setCurrentPage: (page: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ setCurrentPage }) => (
    <section className="relative overflow-hidden bg-slate-950 pt-28 sm:pt-32 lg:pt-36">
        <div className="theme-hero-backdrop absolute inset-0" />
        <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:72px_72px]" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 pb-16 sm:pb-20 lg:pb-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">
                <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, ease: 'easeOut' }} className="lg:col-span-7 relative z-10">
                    <div className="flex items-center gap-3 mb-8"><span className="w-8 h-px bg-brand-500" /><p className="text-xs font-black text-brand-500 uppercase">BLUERAY / Abu Dhabi, UAE</p></div>
                    <h1 className="max-w-4xl text-[2.6rem] sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[0.96] text-white">
                        Inspection confidence
                        <span className="block text-brand-500 italic mt-2">for critical assets.</span>
                    </h1>
                    <p className="mt-7 max-w-2xl text-base sm:text-lg text-slate-300 leading-relaxed"><strong className="text-white">{COMPANY_CONFIG.legalName}</strong> delivers precision Non-Destructive Testing (NDT) and pipeline inspection solutions from Abu Dhabi for materials, welds, and industrial infrastructure.</p>
                    <div className="mt-8 flex flex-col sm:flex-row gap-3">
                        <button onClick={() => setCurrentPage('contact')} className="inline-flex items-center justify-center gap-2 min-h-12 px-6 bg-brand-600 text-white text-sm font-black uppercase hover:bg-brand-700 transition-colors duration-150">Request an Inspection <ArrowUpRight className="w-4 h-4" /></button>
                        <button onClick={() => setCurrentPage('ndt')} className="inline-flex items-center justify-center min-h-12 px-6 border border-white/15 text-white text-sm font-bold uppercase hover:border-brand-500 hover:bg-white/5 transition-colors duration-150">Explore Services</button>
                    </div>
                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 border-y border-white/10 divide-y sm:divide-y-0 sm:divide-x divide-white/10 max-w-3xl">
                        {['Abu Dhabi HQ · India Branch', 'NDT & Industrial Inspection', 'Conventional & Advanced NDT'].map((item) => <div key={item} className="flex items-center gap-2 py-3 sm:px-4 first:sm:pl-0"><CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0" /><span className="text-[11px] font-bold text-slate-300 leading-snug">{item}</span></div>)}
                    </div>
                </motion.div>
                <motion.figure initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.55, delay: 0.1, ease: 'easeOut' }} className="lg:col-span-5 lg:-mr-10 xl:-mr-20 relative min-h-[310px] sm:min-h-[390px] lg:min-h-[500px] overflow-hidden border-y lg:border-y-0 lg:border-l border-white/10">
                    <img src="/images/blueray-hero-pipeline-inspection.png" alt="Technicians performing ultrasonic pipeline weld inspection" className="absolute inset-0 h-full w-full object-cover object-center" />
                    <div className="theme-image-overlay absolute inset-0" />
                    <PipelineInspectionGraphic className="absolute -right-12 -bottom-24 h-[62%] w-[62%] text-white opacity-20" />
                    <figcaption className="absolute left-5 sm:left-20 lg:left-5 bottom-5 border-l-2 border-brand-400 pl-3"><p className="text-[10px] font-black text-brand-400 uppercase">Pipeline weld inspection</p><p className="text-[11px] text-slate-300 mt-1">Field-ready technical evaluation</p></figcaption>
                </motion.figure>
            </div>
        </div>
    </section>
);

export default HeroSection;
