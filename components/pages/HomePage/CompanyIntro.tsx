import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Gauge, Radio, ShieldCheck } from 'lucide-react';
import { COMPANY_CONFIG } from '@/lib/company';

interface CompanyIntroProps {
    setCurrentPage?: (page: string) => void;
}

const CompanyIntro: React.FC<CompanyIntroProps> = ({ setCurrentPage }) => {
    return (
        <section className="py-20 sm:py-28 bg-slate-50/60 border-t border-brand-500/10">
            <div className="max-w-7xl mx-auto px-5 sm:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-start">
                    <div className="lg:col-span-2 border-t-2 border-brand-500 pt-3">
                        <p className="text-xs sm:text-sm font-black text-brand-500 uppercase tracking-wider">BLUERAY</p>
                        <p className="text-sm text-slate-500 mt-2 font-medium">Abu Dhabi, UAE</p>
                    </div>
                    <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease: 'easeOut' }} viewport={{ once: true }} className="lg:col-span-6">
                        <h2 className="text-xs sm:text-sm font-black text-brand-500 uppercase tracking-wider mb-4">Company introduction</h2>
                        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6 max-w-2xl">
                            High-Quality & Cost-Effective <br />Inspection Solutions.
                        </h3>
                        <p className="text-slate-600 text-base sm:text-lg mb-5 leading-relaxed font-light">
                            <strong className="text-slate-900 font-semibold">{COMPANY_CONFIG.legalName}</strong> is a dedicated provider of Non-Destructive Testing (NDT) and pipeline inspection services based in Abu Dhabi, UAE.
                        </p>
                        <p className="text-slate-600 text-base sm:text-lg mb-8 leading-relaxed font-light">
                            Using established non-destructive testing techniques, we evaluate construction materials, welds, and structural components across critical infrastructure projects—supporting longevity and structural safety without damaging host assets.
                        </p>
                        <div className="flex flex-wrap gap-6 items-center pt-2">
                            <div className="border-l-4 border-brand-500 pl-4">
                                <p className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-widest">Abu Dhabi HQ</p>
                                <p className="text-xs sm:text-sm text-slate-500 font-medium">Mussaffah Sector 43</p>
                            </div>
                            <div className="border-l-4 border-brand-500 pl-4">
                                <p className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-widest">Multi-Sector</p>
                                <p className="text-xs sm:text-sm text-slate-500 font-medium">UAE & Regional Projects</p>
                            </div>
                            {setCurrentPage && (
                                <button
                                    onClick={() => setCurrentPage('about')}
                                    className="px-6 py-3.5 bg-brand-600 text-white rounded-lg text-xs sm:text-sm font-black uppercase tracking-wider hover:bg-brand-700 transition-all duration-150 shadow-md shadow-brand-600/25"
                                >
                                    About BLUERAY →
                                </button>
                            )}
                        </div>
                    </motion.div>
                    <div className="lg:col-span-4 border-l border-brand-500/15 pl-0 lg:pl-6">
                        <div className="space-y-6 bg-white p-6 sm:p-7 rounded-xl border border-brand-500/15 shadow-sm">
                            <div className="flex items-start justify-between gap-6 border-b border-brand-500/15 pb-6">
                                <div>
                                    <p className="text-xs font-black uppercase text-brand-500 mb-2 tracking-wider">Operational Scope</p>
                                    <h4 className="text-2xl sm:text-3xl font-black text-slate-900 uppercase">NDT Field Inspection</h4>
                                </div>
                                <div className="w-14 h-14 rounded-xl border border-brand-500/20 bg-brand-500/10 flex items-center justify-center shrink-0">
                                    <ShieldCheck className="w-7 h-7 text-brand-500" />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-0 border-t border-brand-500/15">
                                {[
                                    { icon: Radio, label: "Conventional & Advanced NDT" },
                                    { icon: Gauge, label: "Pipeline & Wall Thickness Checks" },
                                    { icon: Building2, label: "Construction Materials & Welds" },
                                    { icon: ShieldCheck, label: "Integrity-Focused Reporting" }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 border-b border-brand-500/10 py-4">
                                        <item.icon className="w-5 h-5 text-brand-500 shrink-0" />
                                        <p className="text-xs sm:text-sm font-bold uppercase text-slate-800 leading-relaxed">{item.label}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="flex items-center justify-between pt-2 text-xs font-bold uppercase text-slate-500">
                                <span>Abu Dhabi</span>
                                <span className="text-brand-500 font-black">BLUERAY</span>
                                <span>India</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CompanyIntro;
