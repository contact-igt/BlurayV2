import React from 'react';
import { Droplet } from '@/components/icons/CustomIcons';
import {
    Building,
    Factory,
    Boxes,
    HeartPulse,
    Anchor,
    Plane
} from 'lucide-react';

const IndustriesServed: React.FC = () => {
    const industries = [
        { icon: Building, label: "Construction" },
        { icon: Droplet, label: "Oil & Gas" },
        { icon: Factory, label: "Petrochemicals" },
        { icon: Boxes, label: "Industrial & Manufacturing" },
        { icon: HeartPulse, label: "Healthcare & Pharma" },
        { icon: Anchor, label: "Marine & Offshore" },
        { icon: Plane, label: "Aerospace" }
    ];

    return (
        <section className="py-20 sm:py-24 bg-white border-y border-brand-500/10 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-5 sm:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-end mb-12 sm:mb-16">
                    <div className="lg:col-span-6">
                        <div className="flex items-center gap-3 mb-3">
                            <span className="w-8 h-px bg-brand-500" />
                            <h2 className="text-xs sm:text-sm font-black text-brand-500 uppercase tracking-wider">Sectors We Serve</h2>
                        </div>
                        <h3 className="text-3xl sm:text-5xl font-black text-slate-900 uppercase leading-tight">Multi-Sector Industrial Support</h3>
                    </div>
                    <p className="lg:col-span-6 text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
                        BLUERAY provides certified Non-Destructive Testing and quality inspection support for critical assets, materials, and infrastructure across confirmed industrial sectors in Abu Dhabi and internationally.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 border-t border-l border-brand-500/15 rounded-3xl overflow-hidden shadow-sm">
                    {industries.map((ind, i) => (
                        <div key={i} className="group min-h-[190px] flex flex-col justify-between p-6 border-r border-b border-brand-500/15 bg-white hover:bg-slate-50/90 transition-all duration-200 cursor-default relative overflow-hidden">
                            <div className="absolute top-0 left-0 right-0 h-1 bg-brand-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="flex items-center justify-between mb-6">
                                <span className="text-2xl sm:text-3xl font-black text-brand-500 group-hover:scale-110 transition-transform duration-200 tracking-tight">
                                    0{i + 1}
                                </span>
                                <div className="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-500 group-hover:bg-brand-600 group-hover:text-white transition-all shadow-sm">
                                    <ind.icon className="w-5 h-5" />
                                </div>
                            </div>
                            <div>
                                <p className="text-sm sm:text-base font-bold text-slate-900 uppercase leading-snug group-hover:text-brand-600 transition-colors">
                                    {ind.label}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IndustriesServed;
