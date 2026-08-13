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
        <section className="py-20 sm:py-24 bg-slate-950 border-y border-white/5">
            <div className="max-w-7xl mx-auto px-5 sm:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-end mb-10">
                    <div className="lg:col-span-4">
                        <h2 className="text-xs font-black text-brand-500 uppercase mb-4">Sectors We Serve</h2>
                        <h3 className="text-3xl sm:text-4xl font-bold text-white uppercase leading-tight">Multi-sector industrial support</h3>
                    </div>
                    <p className="lg:col-span-4 text-sm text-slate-400 leading-relaxed">Inspection support for critical assets, materials, and infrastructure across confirmed industrial sectors.</p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 border-t border-l border-white/10">
                    {industries.map((ind, i) => (
                        <div key={i} className="group min-h-36 flex flex-col justify-between p-5 border-r border-b border-white/10 hover:bg-slate-900/60 transition-colors">
                            <div className="flex items-center justify-between">
                                <span className="text-xs text-slate-600">0{i + 1}</span>
                                <ind.icon className="w-5 h-5 text-slate-500 group-hover:text-brand-500 transition-colors" />
                            </div>
                            <p className="text-sm font-bold text-slate-300 uppercase leading-tight group-hover:text-white transition-colors">{ind.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IndustriesServed;
