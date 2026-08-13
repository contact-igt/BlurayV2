import React from 'react';
import { CheckCircle2, ShieldCheck, HeartHandshake, Scale, Award } from 'lucide-react';
import { COMPANY_CONFIG } from '@/lib/company';

const WhyChooseBLUERAY: React.FC = () => {
    const valueProps = [
        {
            title: "Quality-Focused Inspection",
            desc: "Delivering meticulous non-destructive testing to verify material and structural component integrity."
        },
        {
            title: "Skilled Technical Personnel",
            desc: "Qualified inspectors and technicians dedicated to precise field and workshop execution."
        },
        {
            title: "Responsive Project Support",
            desc: "Prompt deployment of testing teams for on-site industrial projects and workshop evaluations."
        },
        {
            title: "Commercially Practical Support",
            desc: "Cost-effective, high-value inspection services tailored to client project requirements."
        },
        {
            title: "Safety & Integrity Focus",
            desc: "Committed to protecting workforce well-being, asset safety, and the surrounding environment."
        }
    ];

    const principles = [
        { icon: Scale, label: "Ethical Business & Risk Management" },
        { icon: ShieldCheck, label: "Health, Safety & Environment" },
        { icon: Award, label: "Professional Accountability" },
        { icon: HeartHandshake, label: "Mutual Cooperation & Quality" }
    ];

    return (
        <section className="py-20 sm:py-28 bg-slate-950">
            <div className="max-w-7xl mx-auto px-5 sm:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-start">
                    <div className="lg:col-span-4 lg:sticky lg:top-28">
                        <h2 className="text-xs font-black text-brand-500 uppercase mb-4">The BLUERAY Advantage</h2>
                        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">Why Partner With BLUERAY?</h3>
                    </div>

                    <div className="lg:col-span-5 border-t border-white/10">
                        {valueProps.map((item, i) => (
                            <div key={item.title} className="group grid grid-cols-[2.5rem_1fr] gap-4 py-6 border-b border-white/10 hover:border-brand-500/50 transition-colors duration-150">
                                <span className="text-sm font-black text-brand-500">0{i + 1}</span>
                                <div>
                                    <h4 className="text-white font-bold text-lg mb-2 flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0" />
                                        {item.title}
                                    </h4>
                                    <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="lg:col-span-3 relative border-l border-white/10 pl-0 lg:pl-6 space-y-8">
                        <div>
                            <span className="text-[10px] font-black uppercase text-brand-500 block mb-2">Success Mantra</span>
                            <h4 className="text-xl font-bold text-white mb-4 uppercase">Meticulous Execution & Quality</h4>
                            <p className="text-slate-300 font-light italic text-base leading-relaxed">
                                "The importance of meticulous execution and a commitment to quality are essential for long-term project success. We emphasize both technical excellence and ethical practices to establish enduring trust and client satisfaction."
                            </p>
                        </div>

                        <div className="pt-6 border-t border-white/10">
                            <span className="text-[10px] font-black uppercase text-slate-400 block mb-4">Core Operating Principles</span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {principles.map((p, idx) => (
                                    <div key={idx} className="flex items-center gap-2.5 p-3 bg-slate-950/60 border border-white/10">
                                        <p.icon className="w-4 h-4 text-brand-500 shrink-0" />
                                        <span className="text-[11px] font-semibold text-slate-200">{p.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="pt-4 flex justify-between items-center text-[10px] font-black uppercase text-brand-500">
                            <span>{COMPANY_CONFIG.headquarters}</span>
                            <span>India Branch Presence</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseBLUERAY;
