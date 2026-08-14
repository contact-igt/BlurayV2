import React from 'react';
import {
    Target,
    UserCheck,
    Clock,
    BarChart3,
    ShieldCheck,
    Scale,
    HeartHandshake,
    Award,
    MapPin
} from 'lucide-react';
import { COMPANY_CONFIG } from '@/lib/company';

const WhyChooseBLUERAY: React.FC = () => {
    const valueProps = [
        {
            number: "01",
            icon: Target,
            title: "QUALITY-FOCUSED INSPECTION",
            desc: "Delivering meticulous non-destructive testing to verify material and structural component integrity."
        },
        {
            number: "02",
            icon: UserCheck,
            title: "SKILLED TECHNICAL PERSONNEL",
            desc: "Qualified inspectors and technicians dedicated to precise field and workshop execution."
        },
        {
            number: "03",
            icon: Clock,
            title: "RESPONSIVE PROJECT SUPPORT",
            desc: "Prompt deployment of testing teams for on-site industrial projects and workshop evaluations."
        },
        {
            number: "04",
            icon: BarChart3,
            title: "COMMERCIALLY PRACTICAL SOLUTIONS",
            desc: "Cost-effective, high-value inspection services tailored to client project requirements."
        },
        {
            number: "05",
            icon: ShieldCheck,
            title: "SAFETY & INTEGRITY FOCUS",
            desc: "Committed to protecting workforce well-being, asset safety, and the surrounding environment."
        }
    ];

    const principles = [
        { num: "01", icon: Scale, label: "ETHICAL BUSINESS & RISK MANAGEMENT" },
        { num: "02", icon: ShieldCheck, label: "HEALTH, SAFETY & ENVIRONMENT" },
        { num: "03", icon: Award, label: "PROFESSIONAL ACCOUNTABILITY" },
        { num: "04", icon: HeartHandshake, label: "MUTUAL COOPERATION & QUALITY" }
    ];

    return (
        <section className="py-20 sm:py-28 bg-white border-t border-brand-500/10 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-5 sm:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
                    
                    {/* LEFT COLUMN: HERO HEADLINE & EDITORIAL FIELD PHOTO */}
                    <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
                        <div>
                            <span className="text-xs sm:text-sm font-black text-brand-500 uppercase tracking-widest block mb-2">
                                THE BLUERAY ADVANTAGE
                            </span>
                            <h3 className="text-3xl sm:text-5xl font-black text-slate-900 leading-[1.04] uppercase mb-4">
                                WHY PARTNER <br />WITH BLUERAY?
                            </h3>
                            <div className="w-12 h-1 bg-brand-500 mb-4 rounded-full" />
                            <p className="text-base sm:text-lg font-bold text-slate-900 tracking-wide uppercase">
                                <span className="text-brand-500 font-black">PRECISION</span> BUILT INTO EVERY INSPECTION.
                            </p>
                        </div>

                        {/* FIELD INSPECTION PHOTOGRAPHY WITH HUD OVERLAY */}
                        <div className="relative rounded-3xl overflow-hidden border border-brand-500/15 shadow-xl min-h-[380px] sm:min-h-[440px] group flex-1">
                            <img
                                src="/images/blu.png"
                                alt="BLUERAY technician carrying out ultrasonic pipeline weld testing"
                                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                            
                            {/* HUD OVERLAY BADGE */}
                            <div className="absolute bottom-5 left-5 right-5 p-4 bg-slate-900/90 backdrop-blur-md rounded-2xl border border-white/10 text-white shadow-xl space-y-1">
                                <div className="flex items-center justify-between">
                                    <span className="text-xs font-black text-brand-400 uppercase tracking-widest">NDT / 01</span>
                                    <span className="text-[10px] text-brand-400 font-mono">+ +</span>
                                </div>
                                <p className="text-sm font-bold text-white uppercase tracking-wider">FIELD INSPECTION</p>
                                <p className="text-xs text-slate-300 font-medium">ABU DHABI, UAE</p>
                            </div>
                        </div>
                    </div>

                    {/* MIDDLE COLUMN: 5 NUMBERED ADVANTAGES (01 TO 05) */}
                    <div className="lg:col-span-5 flex flex-col justify-between border-y border-brand-500/15 divide-y divide-brand-500/15 py-2">
                        {valueProps.map((item) => (
                            <div key={item.number} className="group py-5 sm:py-6 flex items-start gap-4 hover:bg-slate-50/80 px-3 sm:px-4 rounded-2xl transition-all">
                                <span className="text-2xl sm:text-3xl font-black text-brand-500 shrink-0 w-10 pt-1 tracking-tight">
                                    {item.number}
                                </span>
                                <div className="w-11 h-11 rounded-full bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-500 shrink-0 group-hover:bg-brand-600 group-hover:text-white transition-all shadow-sm mt-0.5">
                                    <item.icon className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-base sm:text-lg font-bold text-slate-900 uppercase group-hover:text-brand-600 transition-colors mb-1.5 leading-snug">
                                        {item.title}
                                    </h4>
                                    <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* RIGHT COLUMN: OUR STANDARD & CORE OPERATING PRINCIPLES */}
                    <div className="lg:col-span-3 flex flex-col justify-between space-y-8 border-l border-brand-500/15 pl-0 lg:pl-8 pt-2">
                        
                        {/* OUR STANDARD BLOCK */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-2">
                                <span className="text-xs sm:text-sm font-black text-brand-500 uppercase tracking-widest">
                                    OUR STANDARD
                                </span>
                                <span className="w-8 h-px bg-brand-500" />
                            </div>
                            <h4 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
                                Meticulous execution creates long-term trust.
                            </h4>
                            <div className="w-10 h-1 bg-brand-500 rounded-full" />
                            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                                Every inspection is carried out with technical discipline, safety awareness and a commitment to reliable results.
                            </p>
                        </div>

                        {/* CORE OPERATING PRINCIPLES */}
                        <div className="pt-6 border-t border-brand-500/15 space-y-4">
                            <span className="text-xs font-black uppercase text-brand-500 tracking-wider block mb-3">
                                CORE OPERATING PRINCIPLES
                            </span>
                            <div className="space-y-3.5">
                                {principles.map((p) => (
                                    <div key={p.num} className="flex items-center gap-3 p-3 bg-slate-50/70 border border-brand-500/15 rounded-xl hover:bg-white hover:shadow-sm transition-all">
                                        <div className="w-8 h-8 rounded-lg bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-500 shrink-0">
                                            <p.icon className="w-4 h-4" />
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-xs font-black text-brand-500">{p.num}</span>
                                            <span className="text-xs font-bold text-slate-900 uppercase leading-snug">{p.label}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* BOTTOM FOOTER LOCATION BAR */}
                        <div className="pt-6 border-t border-brand-500/15 flex items-center gap-2 text-xs font-black text-brand-600 uppercase tracking-wider">
                            <MapPin className="w-4 h-4 text-brand-500 shrink-0" />
                            <span>{COMPANY_CONFIG.headquarters}</span>
                            <span className="text-slate-300">|</span>
                            <span>INDIA BRANCH PRESENCE</span>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyChooseBLUERAY;
