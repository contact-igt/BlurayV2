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
            <div className="text-center mb-24">
                <h2 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter leading-none">CERTIFIED <span className="text-brand-500">MANPOWER.</span></h2>
                <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
                    We provide qualified inspection and mechanical manpower to support EPC, shutdown, and maintenance projects across the Middle East.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                {roles.map((role, i) => (
                    <motion.div key={i} whileHover={{ y: -10 }} className="bg-slate-900 p-12 rounded-[3rem] border border-white/5 relative overflow-hidden group">
                        <Users className="w-12 h-12 text-brand-500 mb-6 group-hover:scale-110 transition-transform" />
                        <h4 className="text-2xl font-black text-white leading-tight">{role}</h4>
                        <p className="text-slate-600 text-[10px] font-bold uppercase tracking-widest mt-4">Verified Professional</p>
                    </motion.div>
                ))}
            </div>

            <div className="p-16 bg-gradient-to-br from-slate-900 via-slate-900 to-brand-900/40 rounded-[4rem] text-white flex flex-col lg:flex-row items-center justify-between gap-12 border border-white/5">
                <div className="max-w-xl">
                    <h3 className="text-4xl font-black mb-4 uppercase tracking-tight">Deployment Flexibility</h3>
                    <p className="text-slate-400 text-lg leading-relaxed">Daily Basis | Short-Term | Long-Term | Shutdown | Project-Based Engagement Matrix</p>
                </div>
                <button className="bg-brand-600 text-white px-12 py-6 rounded-2xl font-black uppercase text-xs tracking-[0.2em] shadow-2xl hover:bg-brand-700 transition-all flex items-center gap-3">
                    Request Matrix <Briefcase className="w-4 h-4" />
                </button>
            </div>
        </PageWrapper>
    );
};

export default ManpowerPage;
