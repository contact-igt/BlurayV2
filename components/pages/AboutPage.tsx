import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import { COMPANY_CONFIG } from '@/lib/company';
import {
    ShieldCheck,
    Target,
    Compass,
    Scale,
    HeartHandshake,
    CheckCircle2,
    Building2,
    Globe,
    MapPin,
    ArrowRight,
    Radio,
    Gauge
} from 'lucide-react';

interface AboutPageProps {
    setCurrentPage?: (page: string) => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ setCurrentPage }) => {
    const principles = [
        {
            title: "Ethical Business",
            desc: "Conducting all testing and inspection operations with transparency, integrity, and uncompromised professional ethics."
        },
        {
            title: "Health & Safety",
            desc: "Prioritizing the health, physical well-being, and safety of our technicians and site personnel across every project environment."
        },
        {
            title: "Respect for Human Rights",
            desc: "Upholding human dignity, fair working conditions, and ethical treatment across all workforce activities."
        },
        {
            title: "Responsible Decision-Making",
            desc: "Basing inspection findings and technical reports on objective empirical evidence and rigorous testing standards."
        },
        {
            title: "Risk Management",
            desc: "Identifying potential material defects and structural risks early to safeguard critical industrial infrastructure."
        },
        {
            title: "Environmental Protection",
            desc: "Minimizing environmental impact and supporting sustainable, responsible engineering practices."
        }
    ];

    const coreValues = [
        {
            name: "Accountability",
            desc: "We accept individual and team responsibilities and consistently honor our commitments to clients and partners."
        },
        {
            name: "Cooperation",
            desc: "Good mutual cooperation across positions and project teams is the basis for a productive, quality-focused working atmosphere."
        },
        {
            name: "Life, Health & Environment",
            desc: "We continuously seek to improve our well-being, working conditions, and the surroundings in which we live and operate."
        },
        {
            name: "Professionalism",
            desc: "We strive to fulfill our responsibilities to the highest possible technical and ethical standards throughout every assignment."
        }
    ];

    return (
        <PageWrapper>
            {/* 1. HERO / PAGE INTRODUCTION */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 sm:mb-24 pt-4 sm:pt-8">
                <div className="lg:col-span-3 border-t border-brand-500 pt-3">
                    <p className="text-xs font-black text-brand-500 uppercase">Company profile</p>
                    <p className="text-sm text-slate-500 mt-2">Abu Dhabi, UAE</p>
                </div>
                <div className="lg:col-span-8">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-brand-500/30 bg-brand-600/10 text-brand-500 text-[10px] font-black uppercase mb-6">
                    <Building2 className="w-3.5 h-3.5" />
                    About BLUERAY Oil & Gas
                </div>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-8">
                    Inspection Expertise Built Around <br />
                    <span className="text-brand-500 italic">Safety, Integrity & Reliability.</span>
                </h1>
                <p className="text-slate-300 text-base sm:text-xl font-light leading-relaxed max-w-3xl">
                    <strong className="text-white font-bold">{COMPANY_CONFIG.legalName}</strong> is an Abu Dhabi-based provider of Non-Destructive Testing (NDT) and industrial inspection solutions, serving critical infrastructure and energy projects.
                </p>
                </div>
            </div>

            {/* 2. COMPANY OVERVIEW */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-20 sm:mb-28">
                <div className="space-y-6">
                    <h2 className="text-xs font-black text-brand-500 uppercase">Company Profile</h2>
                    <h3 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                        Quality-Driven Inspection & <br />Material Evaluation.
                    </h3>
                    <p className="text-slate-300 text-base font-light leading-relaxed">
                        BLUERAY Oil and Gas Field Pipeline Inspection L.L.C. delivers cost-effective NDT services across the UAE. We evaluate construction materials, structural welds, pipelines, and industrial components using established non-destructive testing techniques.
                    </p>
                    <p className="text-slate-400 text-sm font-light leading-relaxed">
                        Our certified technicians perform rigorous evaluations to verify component integrity without impairing structural utility, enhancing the safety and operational longevity of critical industrial assets.
                    </p>
                    <div className="pt-4 grid grid-cols-2 gap-4">
                        <div className="p-4 rounded-xl bg-slate-900 border border-white/5">
                            <p className="text-xs font-bold text-white uppercase tracking-wider mb-1">Abu Dhabi HQ</p>
                            <p className="text-xs text-slate-400 font-light">Mussaffah Sector 43</p>
                        </div>
                        <div className="p-4 rounded-xl bg-slate-900 border border-white/5">
                            <p className="text-xs font-bold text-white uppercase tracking-wider mb-1">India Branch</p>
                            <p className="text-xs text-slate-400 font-light">International Technical Support</p>
                        </div>
                    </div>
                </div>

                <div className="relative overflow-hidden border border-white/10 bg-slate-900/80 p-7 sm:p-9 shadow-2xl">
                    <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.16)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                    <div className="relative z-10">
                        <div className="flex items-center justify-between gap-6 border-b border-white/10 pb-7 mb-7">
                            <div>
                                <p className="text-[10px] font-black uppercase text-brand-500 mb-2">Capability Profile</p>
                                <h4 className="text-2xl sm:text-3xl font-black text-white uppercase">Non-Destructive Inspection For Critical Assets</h4>
                            </div>
                            <ShieldCheck className="w-10 h-10 text-brand-500 shrink-0" />
                        </div>

                        <div className="space-y-4">
                            {[
                                { icon: Radio, title: "NDT Methods", text: "Conventional and advanced methods for material, weld, and component evaluation." },
                                { icon: Gauge, title: "Pipeline Inspection", text: "Thickness, coating continuity, integrity, and specialist field testing support." },
                                { icon: Globe, title: "Operating Presence", text: "Abu Dhabi headquarters with confirmed India branch presence." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 border border-white/10 bg-slate-950/70 p-5">
                                    <div className="w-10 h-10 rounded-md border border-brand-500/20 bg-brand-600/10 flex items-center justify-center shrink-0">
                                        <item.icon className="w-5 h-5 text-brand-500" />
                                    </div>
                                    <div>
                                        <h5 className="text-sm font-bold text-white uppercase tracking-wider mb-1">{item.title}</h5>
                                        <p className="text-xs text-slate-400 leading-relaxed font-light">{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <figure className="relative overflow-hidden mb-20 sm:mb-28 min-h-[300px] sm:min-h-[390px] border-y border-white/10">
                <img src="/images/blueray-about-field-team.png" alt="NDT inspection team assessing a pipeline weld" className="absolute inset-0 h-full w-full object-cover object-center" />
                <div className="theme-image-overlay absolute inset-0" />
                <figcaption className="relative max-w-md px-6 sm:px-10 py-10 sm:py-14">
                    <p className="text-[10px] font-black uppercase text-brand-400 mb-3">Field practice</p>
                    <p className="text-xl sm:text-2xl font-bold leading-snug text-white">Technical judgment is supported by careful observation, disciplined method, and the people on site.</p>
                </figcaption>
            </figure>

            {/* 3. MISSION + VISION */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mb-20 sm:mb-28">
                <div className="p-7 sm:p-10 bg-slate-900 border border-white/10 relative overflow-hidden flex flex-col justify-between">
                    <div className="absolute top-0 right-0 p-8 opacity-10">
                        <Target className="w-32 h-32 text-brand-500" />
                    </div>
                    <div>
                        <div className="w-12 h-12 bg-brand-600/10 rounded-md flex items-center justify-center mb-6 border border-brand-500/20">
                            <Target className="w-6 h-6 text-brand-500" />
                        </div>
                        <span className="text-[10px] font-black uppercase text-brand-500 block mb-2">Our Purpose</span>
                        <h3 className="text-2xl font-bold text-white mb-6 uppercase">Our Mission</h3>
                        <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                            "To deliver innovative, sustainable, and high-quality engineering and inspection solutions across diverse industries. We strive to exceed client expectations through safety, efficiency, and technological excellence—empowering progress while protecting people and the planet, building lasting partnerships based on integrity, reliability, and performance."
                        </p>
                    </div>
                </div>

                <div className="p-7 sm:p-10 bg-slate-900 border border-white/10 relative overflow-hidden flex flex-col justify-between">
                    <div className="absolute top-0 right-0 p-8 opacity-10">
                        <Compass className="w-32 h-32 text-brand-500" />
                    </div>
                    <div>
                        <div className="w-12 h-12 bg-brand-600/10 rounded-md flex items-center justify-center mb-6 border border-brand-500/20">
                            <Compass className="w-6 h-6 text-brand-500" />
                        </div>
                        <span className="text-[10px] font-black uppercase text-brand-500 block mb-2">Our Aspiration</span>
                        <h3 className="text-2xl font-bold text-white mb-6 uppercase">Our Vision</h3>
                        <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                            "To be a global leader in multi-sector engineering and industrial solutions. We envision a future driven by innovation, sustainability, and digital transformation—aiming to shape smarter, safer, and more resilient industries worldwide while creating enduring value for future generations."
                        </p>
                    </div>
                </div>
            </div>

            {/* 4. OUR PRINCIPLES */}
            <div className="mb-20 sm:mb-28">
                <div className="text-center mb-16">
                    <h2 className="text-xs font-black text-brand-500 uppercase mb-3">Operating Framework</h2>
                    <h3 className="text-3xl sm:text-4xl font-bold text-white uppercase">Our Six Core Principles</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                    {principles.map((p, idx) => (
                        <div key={idx} className="p-6 bg-slate-900/60 border border-white/10 hover:border-brand-500/30 transition-colors">
                            <div className="w-10 h-10 bg-slate-950 rounded-md flex items-center justify-center mb-5 border border-white/10">
                                <CheckCircle2 className="w-5 h-5 text-brand-500" />
                            </div>
                            <h4 className="text-lg font-bold text-white mb-2">{p.title}</h4>
                            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light">{p.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* 5. OUR APPROACH STATEMENT */}
            <div className="py-12 sm:py-16 border-y border-white/10 mb-20 sm:mb-28 relative text-center max-w-5xl mx-auto">
                <span className="text-[10px] font-black uppercase text-brand-500 block mb-3">Commitment To Excellence</span>
                <h4 className="text-2xl sm:text-3xl font-bold text-white uppercase mb-4">Meticulous Execution & Quality</h4>
                <p className="text-slate-300 font-light italic text-base sm:text-lg leading-relaxed">
                    "The importance of meticulous execution and a commitment to quality are essential for long-term project success. We emphasize both technical excellence and ethical practices to establish enduring trust and client satisfaction."
                </p>
            </div>

            {/* 6. CORE VALUES */}
            <div className="mb-20 sm:mb-28">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-10 sm:mb-14">
                    <div className="lg:col-span-3"><p className="text-xs font-black text-brand-500 uppercase">Organizational Ethos</p></div>
                    <h3 className="lg:col-span-6 text-3xl sm:text-4xl font-bold text-white uppercase">Our Four Core Values</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-l border-white/10">
                    {coreValues.map((v, idx) => (
                        <div key={idx} className="p-6 sm:p-8 bg-slate-900/40 border-r border-b border-white/10 space-y-3">
                            <p className="text-sm font-black text-brand-500">0{idx + 1}</p>
                            <h4 className="text-xl font-bold text-white uppercase">{v.name}</h4>
                            <p className="text-slate-400 text-sm leading-relaxed font-light">{v.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* 7. OPERATING PRESENCE */}
            <div className="py-10 sm:py-12 border-y border-white/10 mb-20 sm:mb-28">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div>
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-500 block mb-2">Global & Regional Footprint</span>
                        <h3 className="text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight mb-4">Our Operating Presence</h3>
                        <p className="text-slate-400 text-sm font-light leading-relaxed mb-6">
                            Headquartered in Abu Dhabi, UAE, <strong className="text-white font-semibold">{COMPANY_CONFIG.brandName}</strong> manages field operations across the region, supported by our branch in India.
                        </p>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3 text-xs text-slate-300">
                                <MapPin className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                                <span><strong className="text-white">Headquarters:</strong> {COMPANY_CONFIG.uaeAddress.fullFormatted}</span>
                            </div>
                            <div className="flex items-center gap-3 text-xs text-slate-300">
                                <Globe className="w-4 h-4 text-brand-500 shrink-0" />
                                <span><strong className="text-white">Branch Presence:</strong> India</span>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 sm:p-8 bg-slate-900/50 border-l-2 border-brand-500 space-y-4">
                        <h4 className="text-sm font-bold text-white uppercase tracking-widest">Technical Desk Contact</h4>
                        <div className="space-y-2 text-xs text-slate-400 font-light">
                            <p><strong className="text-slate-200">UAE Phone:</strong> {COMPANY_CONFIG.phones.uae.display}</p>
                            <p><strong className="text-slate-200">India Phone:</strong> {COMPANY_CONFIG.phones.india.display}</p>
                            <p><strong className="text-slate-200">Email:</strong> {COMPANY_CONFIG.emails.admin}</p>
                            <p><strong className="text-slate-200">Website:</strong> {COMPANY_CONFIG.website.display}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* 7.5 OUR CAPABILITIES */}
            <div className="mb-20 sm:mb-28">
                <div className="text-center mb-12">
                    <h2 className="text-xs font-black text-brand-500 uppercase tracking-[0.4em] mb-3">Service Scope Overview</h2>
                    <h3 className="text-3xl sm:text-4xl font-bold text-white uppercase tracking-tight">Core Capability Categories</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 border-t border-l border-white/10">
                    {[
                        { title: "Conventional NDT", desc: "Visual, Penetrant, Magnetic, Ultrasonic & Eddy Current inspection.", page: "core-ndt" },
                        { title: "Advanced NDT", desc: "High-resolution PAUT & TOFD volumetric weld evaluation.", page: "advanced-ndt" },
                        { title: "Specialist Integrity", desc: "UTG, PMI-XRF, Holiday, Ferrite & Coating thickness testing.", page: "ndt" },
                        { title: "Welder Qualification", desc: "On-site qualification witnessing referenced to ASME/AWS/API.", page: "welder-qual" },
                        { title: "Tensile Pull-Out Testing", desc: "On-site load capacity verification for rebar, anchors & tiles.", page: "pull-out" }
                    ].map((cap, idx) => (
                        <div key={idx} onClick={() => setCurrentPage && setCurrentPage(cap.page)} className="p-6 bg-slate-900/50 border-r border-b border-white/10 hover:border-brand-500/40 transition-colors cursor-pointer group flex flex-col justify-between min-h-52">
                            <div>
                                <h4 className="text-sm font-bold text-white mb-2 group-hover:text-brand-500 transition-colors">{cap.title}</h4>
                                <p className="text-slate-400 text-xs font-light leading-relaxed">{cap.desc}</p>
                            </div>
                            <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-brand-500">
                                <span>Explore</span>
                                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* 8. CLOSING CTA */}
            <div className="bg-slate-900 p-9 sm:p-12 md:p-16 border border-white/10 text-center relative overflow-hidden">
                <h3 className="text-3xl sm:text-4xl font-black text-white mb-4 uppercase">
                    Need a Reliable <span className="text-brand-500 italic">Inspection Partner?</span>
                </h3>
                <p className="text-slate-300 max-w-xl mx-auto text-sm sm:text-base mb-8 font-light leading-relaxed">
                    Connect with {COMPANY_CONFIG.legalName} for expert Non-Destructive Testing and technical asset evaluation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    {setCurrentPage && (
                        <>
                            <button
                                onClick={() => setCurrentPage('contact')}
                                className="px-8 py-4 bg-brand-600 text-white rounded-xl font-black uppercase tracking-[0.2em] text-xs hover:bg-brand-700 transition-all shadow-[0_0_30px_rgba(2, 63, 174,0.4)]"
                            >
                                Request an Inspection
                            </button>
                            <button
                                onClick={() => setCurrentPage('ndt')}
                                className="px-8 py-4 border border-white/15 bg-white/5 rounded-xl font-bold uppercase text-white tracking-[0.2em] text-xs hover:bg-white/10 transition-all"
                            >
                                Explore Services
                            </button>
                        </>
                    )}
                </div>
            </div>
        </PageWrapper>
    );
};

export default AboutPage;
