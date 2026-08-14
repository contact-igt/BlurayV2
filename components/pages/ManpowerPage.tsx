'use client';

import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import { motion } from 'framer-motion';
import { Users, Briefcase } from 'lucide-react';

const ManpowerPage: React.FC = () => {
    const roles = [
        "Mechanical Job Performer (JP)",
        "Mechanical Foreman",
        "Piping & Pipeline Welders",
        "NDT Technicians",
        "Welding Inspectors",
        "QA/QC Inspectors"
    ];

    return (
        <PageWrapper>
            <div className="text-center mb-24 pt-4 sm:pt-8">
                <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 uppercase tracking-tighter leading-none">CERTIFIED <span className="text-brand-500">MANPOWER.</span></h2>
                <p className="text-slate-600 max-w-2xl mx-auto text-lg font-light leading-relaxed">
                    We provide qualified inspection and mechanical manpower to support EPC, shutdown, and maintenance projects across the Middle East.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
                {roles.map((role, i) => (
                    <motion.div key={i} whileHover={{ y: -6 }} className="bg-white p-8 sm:p-10 rounded-2xl border border-brand-500/15 shadow-sm hover:shadow-md hover:border-brand-500/35 transition-all relative overflow-hidden group">
                        <Users className="w-10 h-10 text-brand-500 mb-6 group-hover:scale-110 transition-transform" />
                        <h4 className="text-2xl font-black text-slate-900 leading-tight">{role}</h4>
                        <p className="text-brand-500 text-xs font-bold uppercase tracking-widest mt-4">Verified Professional</p>
                    </motion.div>
                ))}
            </div>

            <div className="p-10 sm:p-14 bg-gradient-to-br from-brand-600 via-brand-700 to-brand-900 rounded-3xl text-white flex flex-col lg:flex-row items-center justify-between gap-12 border border-brand-500/20 shadow-xl">
                <div className="max-w-xl">
                    <h3 className="text-3xl sm:text-4xl font-black mb-4 uppercase tracking-tight">Deployment Flexibility</h3>
                    <p className="text-brand-100 text-base sm:text-lg leading-relaxed">Daily Basis | Short-Term | Long-Term | Shutdown | Project-Based Engagement Matrix</p>
                </div>
                <button className="bg-white text-brand-900 px-10 py-5 rounded-xl font-black uppercase text-xs tracking-wider shadow-lg hover:bg-slate-100 transition-all flex items-center gap-3">
                    Request Matrix <Briefcase className="w-4 h-4" />
                </button>
            </div>
        </PageWrapper>
    );
};

export default ManpowerPage;
