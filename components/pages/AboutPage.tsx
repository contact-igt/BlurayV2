import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import { COMPANY_CONFIG } from '@/lib/company';
import {
    ShieldCheck,
    Target,
    Compass,
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
                <div className="lg:col-span-3 border-t-2 border-brand-500 pt-3">
                    <p className="text-xs sm:text-sm font-black text-brand-500 uppercase tracking-wider">Company profile</p>
                    <p className="text-sm sm:text-base text-slate-600 mt-2 font-semibold">Abu Dhabi, UAE</p>
                </div>
                <div className="lg:col-span-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 border border-brand-500/30 bg-brand-500/10 text-brand-500 text-xs sm:text-sm font-black uppercase mb-6 tracking-wider rounded-md">
                    <Building2 className="w-4 h-4" />
                    About BLUERAY Oil & Gas
                </div>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-8">
                    Inspection Expertise Built Around <br />
                    <span className="text-brand-500 italic">Safety, Integrity & Reliability.</span>
                </h1>
                <p className="text-slate-700 text-lg sm:text-2xl font-normal leading-relaxed max-w-3xl">
                    <strong className="text-slate-900 font-bold">{COMPANY_CONFIG.legalName}</strong> is an Abu Dhabi-based provider of Non-Destructive Testing (NDT) and industrial inspection solutions, serving critical infrastructure and energy projects.
                </p>
                </div>
            </div>

            {/* 2. COMPANY OVERVIEW */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-20 sm:mb-28">
                <div className="space-y-6">
                    <h2 className="text-xs sm:text-sm font-black text-brand-500 uppercase tracking-wider">Company Profile</h2>
                    <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
                        Quality-Driven Inspection & <br />Material Evaluation.
                    </h3>
                    <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
                        BLUERAY Oil and Gas Field Pipeline Inspection L.L.C. delivers cost-effective NDT services across the UAE. We evaluate construction materials, structural welds, pipelines, and industrial components using established non-destructive testing techniques.
                    </p>
                    <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
                        Our certified technicians perform rigorous evaluations to verify component integrity without impairing structural utility, enhancing the safety and operational longevity of critical industrial assets.
                    </p>
                    <div className="pt-4 grid grid-cols-2 gap-4">
                        <div className="p-5 rounded-2xl bg-white border border-brand-500/15 shadow-sm">
                            <p className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-1">Abu Dhabi HQ</p>
                            <p className="text-xs sm:text-sm text-slate-600 font-medium">Mussaffah Sector 43</p>
                        </div>
                        <div className="p-5 rounded-2xl bg-white border border-brand-500/15 shadow-sm">
                            <p className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-1">India Branch</p>
                            <p className="text-xs sm:text-sm text-slate-600 font-medium">International Support</p>
                        </div>
                    </div>
                </div>

                <div className="relative overflow-hidden border border-brand-500/15 bg-white p-7 sm:p-9 rounded-3xl shadow-sm">
                    <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(90deg,rgba(2,63,174,0.18)_1px,transparent_1px),linear-gradient(180deg,rgba(2,63,174,0.12)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                    <div className="relative z-10">
                        <div className="flex items-center justify-between gap-6 border-b border-brand-500/15 pb-7 mb-7">
                            <div>
                                <p className="text-xs sm:text-sm font-black uppercase text-brand-500 mb-2 tracking-wider">Capability Profile</p>
                                <h4 className="text-2xl sm:text-3xl font-black text-slate-900 uppercase">Non-Destructive Inspection For Critical Assets</h4>
                            </div>
                            <div className="w-14 h-14 rounded-2xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center shrink-0">
                                <ShieldCheck className="w-7 h-7 text-brand-500" />
                            </div>
                        </div>

                        <div className="space-y-4">
                            {[
                                { icon: Radio, title: "NDT Methods", text: "Conventional and advanced methods for material, weld, and component evaluation." },
                                { icon: Gauge, title: "Pipeline Inspection", text: "Thickness, coating continuity, integrity, and specialist field testing support." },
                                { icon: Globe, title: "Operating Presence", text: "Abu Dhabi headquarters with confirmed India branch presence." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 border border-brand-500/10 bg-slate-50/60 p-5 rounded-2xl">
                                    <div className="w-10 h-10 rounded-xl border border-brand-500/20 bg-brand-500/10 flex items-center justify-center shrink-0">
                                        <item.icon className="w-5 h-5 text-brand-500" />
                                    </div>
                                    <div>
                                        <h5 className="text-base font-bold text-slate-900 uppercase tracking-wider mb-1">{item.title}</h5>
                                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <figure className="relative overflow-hidden mb-20 sm:mb-28 min-h-[300px] sm:min-h-[390px] rounded-3xl border border-brand-500/15 shadow-xl">
                <img src="/images/blueray-about-field-team.png" alt="NDT inspection team assessing a pipeline weld" className="absolute inset-0 h-full w-full object-cover object-center" />
                <div className="theme-image-overlay absolute inset-0" />
                <figcaption className="relative max-w-md px-6 sm:px-10 py-10 sm:py-14 bg-white/90 backdrop-blur-md m-6 rounded-2xl border border-brand-500/15 shadow-md">
                    <p className="text-xs sm:text-sm font-black uppercase text-brand-500 mb-3 tracking-wider">Field practice</p>
                    <p className="text-xl sm:text-2xl font-bold leading-snug text-slate-900">Technical judgment is supported by careful observation, disciplined method, and the people on site.</p>
                </figcaption>
            </figure>

            {/* 3. MISSION + VISION */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20 sm:mb-28">
                <div className="p-8 sm:p-10 bg-white border border-brand-500/15 rounded-3xl relative overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md transition-all">
                    <div className="absolute top-0 right-0 p-8 opacity-5">
                        <Target className="w-32 h-32 text-brand-500" />
                    </div>
                    <div>
                        <div className="w-12 h-12 bg-brand-500/10 rounded-xl flex items-center justify-center mb-6 border border-brand-500/20">
                            <Target className="w-6 h-6 text-brand-500" />
                        </div>
                        <span className="text-xs sm:text-sm font-black uppercase text-brand-500 block mb-2 tracking-wider">Our Purpose</span>
                        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 uppercase">Our Mission</h3>
                        <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
                            "To deliver innovative, sustainable, and high-quality engineering and inspection solutions across diverse industries. We strive to exceed client expectations through safety, efficiency, and technological excellence—empowering progress while protecting people and the planet, building lasting partnerships based on integrity, reliability, and performance."
                        </p>
                    </div>
                </div>

                <div className="p-8 sm:p-10 bg-white border border-brand-500/15 rounded-3xl relative overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md transition-all">
                    <div className="absolute top-0 right-0 p-8 opacity-5">
                        <Compass className="w-32 h-32 text-brand-500" />
                    </div>
                    <div>
                        <div className="w-12 h-12 bg-brand-500/10 rounded-xl flex items-center justify-center mb-6 border border-brand-500/20">
                            <Compass className="w-6 h-6 text-brand-500" />
                        </div>
                        <span className="text-xs sm:text-sm font-black uppercase text-brand-500 block mb-2 tracking-wider">Our Aspiration</span>
                        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 uppercase">Our Vision</h3>
                        <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
                            "To be a global leader in multi-sector engineering and industrial solutions. We envision a future driven by innovation, sustainability, and digital transformation—aiming to shape smarter, safer, and more resilient industries worldwide while creating enduring value for future generations."
                        </p>
                    </div>
                </div>
            </div>

            {/* 4. OUR PRINCIPLES */}
            <div className="mb-20 sm:mb-28">
                <div className="text-center mb-16">
                    <h2 className="text-xs sm:text-sm font-black text-brand-500 uppercase tracking-wider mb-3">Operating Framework</h2>
                    <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 uppercase">Our Six Core Principles</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {principles.map((p, idx) => (
                        <div key={idx} className="p-7 bg-white border border-brand-500/15 rounded-2xl shadow-sm hover:shadow-md hover:border-brand-500/35 transition-all">
                            <div className="w-10 h-10 bg-brand-500/10 rounded-xl flex items-center justify-center mb-5 border border-brand-500/20">
                                <CheckCircle2 className="w-5 h-5 text-brand-500" />
                            </div>
                            <h4 className="text-xl font-bold text-slate-900 mb-3">{p.title}</h4>
                            <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal">{p.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* 5. OUR APPROACH STATEMENT */}
            <div className="py-12 sm:py-16 border-y border-brand-500/15 mb-20 sm:mb-28 relative text-center max-w-5xl mx-auto bg-slate-50/50 rounded-3xl p-8 sm:p-12 shadow-sm">
                <span className="text-xs sm:text-sm font-black uppercase text-brand-500 block mb-3 tracking-wider">Commitment To Excellence</span>
                <h4 className="text-2xl sm:text-4xl font-bold text-slate-900 uppercase mb-4">Meticulous Execution & Quality</h4>
                <p className="text-slate-700 font-normal italic text-lg sm:text-xl leading-relaxed">
                    "The importance of meticulous execution and a commitment to quality are essential for long-term project success. We emphasize both technical excellence and ethical practices to establish enduring trust and client satisfaction."
                </p>
            </div>

            {/* 6. CORE VALUES */}
            <div className="mb-20 sm:mb-28">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-10 sm:mb-14">
                    <div className="lg:col-span-3"><p className="text-xs sm:text-sm font-black text-brand-500 uppercase tracking-wider">Organizational Ethos</p></div>
                    <h3 className="lg:col-span-6 text-3xl sm:text-4xl font-bold text-slate-900 uppercase">Our Four Core Values</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-l border-brand-500/15 rounded-2xl overflow-hidden shadow-sm">
                    {coreValues.map((v, idx) => (
                        <div key={idx} className="p-7 sm:p-9 bg-white border-r border-b border-brand-500/15 space-y-3 hover:bg-slate-50/80 transition-all">
                            <p className="text-base font-black text-brand-500">0{idx + 1}</p>
                            <h4 className="text-xl sm:text-2xl font-bold text-slate-900 uppercase">{v.name}</h4>
                            <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal">{v.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* 7. OPERATING PRESENCE */}
            <div className="py-10 sm:py-14 border-y border-brand-500/15 mb-20 sm:mb-28">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div>
                        <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-brand-500 block mb-2">Global & Regional Footprint</span>
                        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 uppercase tracking-tight mb-4">Our Operating Presence</h3>
                        <p className="text-slate-700 text-base sm:text-lg font-normal leading-relaxed mb-6">
                            Headquartered in Abu Dhabi, UAE, <strong className="text-slate-900 font-semibold">{COMPANY_CONFIG.brandName}</strong> manages field operations across the region, supported by our branch in India.
                        </p>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3 text-sm sm:text-base text-slate-800">
                                <MapPin className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                                <span><strong className="text-slate-900 font-semibold">Headquarters:</strong> {COMPANY_CONFIG.uaeAddress.fullFormatted}</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm sm:text-base text-slate-800">
                                <Globe className="w-5 h-5 text-brand-500 shrink-0" />
                                <span><strong className="text-slate-900 font-semibold">Branch Presence:</strong> India</span>
                            </div>
                        </div>
                    </div>

                    <div className="p-7 sm:p-9 bg-white border-l-4 border-brand-500 rounded-2xl border-y border-r border-brand-500/15 shadow-sm space-y-4">
                        <h4 className="text-base font-bold text-slate-900 uppercase tracking-widest">Technical Desk Contact</h4>
                        <div className="space-y-2 text-sm sm:text-base text-slate-700 font-normal">
                            <p><strong className="text-slate-900 font-semibold">UAE Mobile:</strong> {COMPANY_CONFIG.phones.uae.display}</p>
                            <p><strong className="text-slate-900 font-semibold">UAE Landline:</strong> {COMPANY_CONFIG.phones.landline.display}</p>
                            <p><strong className="text-slate-900 font-semibold">India Phone:</strong> {COMPANY_CONFIG.phones.india.display}</p>
                            <p><strong className="text-slate-900 font-semibold">Email:</strong> {COMPANY_CONFIG.emails.admin}</p>
                            <p><strong className="text-slate-900 font-semibold">Website:</strong> {COMPANY_CONFIG.website.display}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* 7.5 OUR CAPABILITIES */}
            <div className="mb-20 sm:mb-28">
                <div className="text-center mb-12">
                    <h2 className="text-xs sm:text-sm font-black text-brand-500 uppercase tracking-wider mb-3">Service Scope Overview</h2>
                    <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 uppercase tracking-tight">Core Capability Categories</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 border-t border-l border-brand-500/15 rounded-2xl overflow-hidden shadow-sm">
                    {[
                        { title: "Conventional NDT", desc: "Visual, Penetrant, Magnetic, Ultrasonic & Eddy Current inspection.", page: "core-ndt" },
                        { title: "Advanced NDT", desc: "High-resolution PAUT & TOFD volumetric weld evaluation.", page: "advanced-ndt" },
                        { title: "Specialist Integrity", desc: "UTG, PMI-XRF, Holiday, Ferrite & Coating thickness testing.", page: "ndt" },
                        { title: "Welder Qualification", desc: "On-site qualification witnessing referenced to ASME/AWS/API.", page: "welder-qual" },
                        { title: "Tensile Pull-Out Testing", desc: "On-site load capacity verification for rebar, anchors & tiles.", page: "pull-out" }
                    ].map((cap, idx) => (
                        <div key={idx} onClick={() => setCurrentPage && setCurrentPage(cap.page)} className="p-6 sm:p-7 bg-white border-r border-b border-brand-500/15 hover:bg-slate-50/80 transition-all cursor-pointer group flex flex-col justify-between min-h-56">
                            <div>
                                <h4 className="text-base font-bold text-slate-900 mb-2 group-hover:text-brand-500 transition-colors">{cap.title}</h4>
                                <p className="text-slate-700 text-xs sm:text-sm font-normal leading-relaxed">{cap.desc}</p>
                            </div>
                            <div className="pt-4 mt-4 border-t border-brand-500/10 flex items-center justify-between text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-500">
                                <span>Explore</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* 8. CLOSING CTA */}
            <div className="bg-gradient-to-br from-brand-600 via-brand-700 to-brand-900 p-9 sm:p-12 md:p-16 rounded-3xl text-center relative overflow-hidden shadow-2xl border border-brand-500/20">
                <h3 className="text-3xl sm:text-4xl font-black text-white mb-4 uppercase">
                    Need a Reliable <span className="text-brand-300 italic">Inspection Partner?</span>
                </h3>
                <p className="text-slate-100 max-w-xl mx-auto text-base sm:text-lg mb-8 font-normal leading-relaxed">
                    Connect with {COMPANY_CONFIG.legalName} for expert Non-Destructive Testing and technical asset evaluation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    {setCurrentPage && (
                        <>
                            <button
                                onClick={() => setCurrentPage('contact')}
                                className="px-8 py-4 bg-white text-brand-900 rounded-xl font-black uppercase text-xs sm:text-sm hover:bg-slate-100 transition-all shadow-lg"
                            >
                                Request an Inspection
                            </button>
                            <button
                                onClick={() => setCurrentPage('ndt')}
                                className="px-8 py-4 border-2 border-white text-white bg-brand-900/30 rounded-xl font-black uppercase text-xs sm:text-sm hover:bg-white hover:text-brand-900 transition-all shadow-md"
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
