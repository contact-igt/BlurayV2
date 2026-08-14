import React from 'react';
import { motion } from 'framer-motion';
import { Activity, ArrowRight, Droplets, Eye, Radio, ShieldAlert, Zap } from 'lucide-react';
import { MethodDiagram } from '@/components/graphics/TechnicalIllustrations';

interface ServicesOverviewProps {
    setCurrentPage: (page: string) => void;
}

const ServicesOverview: React.FC<ServicesOverviewProps> = ({ setCurrentPage }) => {
    const coreMethods = [
        { abbrev: 'VT', title: 'Visual Testing', icon: Eye, desc: 'Surface discontinuities and assembly defects.' },
        { abbrev: 'PT', title: 'Liquid Dye Penetrant', icon: Droplets, desc: 'Surface-breaking flaw detection in non-porous materials.' },
        { abbrev: 'MT', title: 'Magnetic Particle', icon: Zap, desc: 'Surface and near-surface testing in ferromagnetic materials.' },
        { abbrev: 'UT', title: 'Ultrasonic Testing', icon: Radio, desc: 'Internal flaw detection and material evaluation.' },
    ];

    return (
        <section className="py-20 sm:py-28 bg-white relative border-y border-brand-500/10">
            <div className="max-w-7xl mx-auto px-5 sm:px-6">
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 sm:mb-14">
                    <div className="max-w-2xl">
                        <p className="text-xs sm:text-sm font-black text-brand-500 uppercase tracking-wider mb-3">Inspection Capabilities</p>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight">NDT methods organised around the work.</h2>
                    </div>
                    <button onClick={() => setCurrentPage('ndt')} className="inline-flex items-center gap-2 text-sm font-bold text-brand-500 hover:text-brand-700 transition-colors">
                        View all 16 service areas <ArrowRight className="w-4 h-4" />
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
                    <div className="lg:col-span-7 border border-brand-500/15 bg-white p-6 sm:p-8 rounded-2xl shadow-sm">
                        <div className="flex items-center justify-between gap-4 border-b border-brand-500/15 pb-4 mb-5">
                            <div>
                                <p className="text-xs font-black text-brand-500 uppercase mb-1 tracking-wider">Core NDT</p>
                                <h3 className="text-xl font-bold text-slate-900">Foundation inspection methods</h3>
                            </div>
                            <span className="text-xs sm:text-sm text-slate-500 font-semibold">VT · PT · MT · UT · ET</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1">
                            {coreMethods.map((method) => (
                                <button key={method.abbrev} onClick={() => setCurrentPage('ndt')} className="group flex gap-4 py-4 text-left border-b border-brand-500/10 last:sm:border-b-0 hover:bg-slate-50/80 rounded-lg p-2 transition-all">
                                    <div className="w-10 h-10 rounded-lg border border-brand-500/20 bg-brand-500/10 flex items-center justify-center shrink-0 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                                        <method.icon className="w-5 h-5 text-brand-500 group-hover:text-white transition-colors" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-black text-brand-500 uppercase mb-1 tracking-wider">{method.abbrev}</p>
                                        <h4 className="text-sm sm:text-base font-bold text-slate-900 mb-1 group-hover:text-brand-500 transition-colors">{method.title}</h4>
                                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">{method.desc}</p>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    <motion.button whileHover={{ y: -2 }} onClick={() => setCurrentPage('advanced-ndt')} className="lg:col-span-5 group text-left border border-brand-500/25 bg-slate-50/70 p-6 sm:p-8 rounded-2xl relative overflow-hidden shadow-sm hover:shadow-md transition-all">
                        <MethodDiagram variant="ultrasonic" className="absolute right-0 bottom-0 h-3/4 w-4/5 text-brand-500 opacity-10" />
                        <div className="relative h-full flex flex-col justify-between min-h-64">
                            <div>
                                <div className="flex items-center justify-between gap-4 mb-8">
                                    <span className="text-xs font-black text-brand-500 uppercase tracking-wider">Advanced NDT</span>
                                    <ShieldAlert className="w-6 h-6 text-brand-500" />
                                </div>
                                <p className="text-3xl sm:text-4xl font-black text-slate-900 leading-none mb-4">PAUT<br />+ TOFD</p>
                                <p className="max-w-sm text-sm text-slate-600 leading-relaxed font-light">Advanced ultrasonic volumetric inspection for complex weld geometries, defect sizing, and critical asset evaluation.</p>
                            </div>
                            <span className="inline-flex items-center gap-2 text-sm font-bold text-brand-500 group-hover:text-brand-700 transition-colors">Explore advanced methods <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
                        </div>
                    </motion.button>

                    <button onClick={() => setCurrentPage('ndt')} className="lg:col-span-6 flex items-start gap-4 border border-brand-500/15 bg-white p-6 sm:p-7 rounded-2xl text-left hover:border-brand-500/40 hover:shadow-sm transition-all">
                        <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center shrink-0">
                            <Activity className="w-6 h-6 text-brand-500" />
                        </div>
                        <div>
                            <p className="text-xs font-black text-brand-500 uppercase mb-1 tracking-wider">Specialist methods</p>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">PMI-XRF · UTG · Hardness · Ferrite · Leak Testing</h3>
                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">Focused methods for materials verification, wall-thickness checks, and integrity support.</p>
                        </div>
                    </button>
                    <button onClick={() => setCurrentPage('ndt')} className="lg:col-span-6 flex items-start gap-4 border border-brand-500/15 bg-white p-6 sm:p-7 rounded-2xl text-left hover:border-brand-500/40 hover:shadow-sm transition-all">
                        <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center shrink-0">
                            <ShieldAlert className="w-6 h-6 text-brand-500" />
                        </div>
                        <div>
                            <p className="text-xs font-black text-brand-500 uppercase mb-1 tracking-wider">Coating integrity</p>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Holiday Testing · Paint / Coating Thickness</h3>
                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">Protective coating continuity and dry film thickness measurement for industrial assets.</p>
                        </div>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ServicesOverview;
