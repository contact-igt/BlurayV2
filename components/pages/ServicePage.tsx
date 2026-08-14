import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import { COMPANY_CONFIG } from '@/lib/company';
import {
    ShieldCheck,
    Eye,
    Radio,
    Zap,
    Droplets,
    Activity,
    Gauge,
    Layers,
    Award,
    Anchor,
    CheckCircle2,
    Sliders,
    Search,
    ShieldAlert,
    FileCheck
} from 'lucide-react';
import { MethodDiagram } from '@/components/graphics/TechnicalIllustrations';

interface ServicePageProps {
    setCurrentPage?: (page: string) => void;
    initialSection?: string;
    // Accept legacy props gracefully if passed from app/page.tsx
    title?: string;
    intro?: string;
    items?: any;
    highlights?: any;
    icon?: any;
    isDetailed?: boolean;
}

const ServicePage: React.FC<ServicePageProps> = ({ setCurrentPage, initialSection }) => {
    React.useEffect(() => {
        if (initialSection) {
            const el = document.getElementById(initialSection);
            if (el) {
                setTimeout(() => {
                    el.scrollIntoView({ behavior: 'auto', block: 'start' });
                }, 150);
            }
        }
    }, [initialSection]);

    const coreMethods = [
        {
            abbrev: "VT",
            title: "Visual Testing",
            icon: Eye,
            desc: "Direct visual examination of components and structural welds to detect surface discontinuities, alignment errors, and visible defect indicators."
        },
        {
            abbrev: "PT",
            title: "Liquid Dye Penetrant Testing",
            icon: Droplets,
            desc: "High-sensitivity capillary action testing to reveal surface-breaking flaws, cracks, and porosity in non-porous metals, castings, forgings, and welds."
        },
        {
            abbrev: "MT",
            title: "Magnetic Particle Testing",
            icon: Zap,
            desc: "Surface and near-surface discontinuity detection in ferromagnetic materials utilizing magnetic field flux leakage."
        },
        {
            abbrev: "UT",
            title: "Ultrasonic Testing",
            icon: Radio,
            desc: "Volumetric flaw detection, lamination checking, and internal defect sizing using high-frequency sound wave reflections."
        },
        {
            abbrev: "ET",
            title: "Eddy Current Testing",
            icon: Activity,
            desc: "Electromagnetic induction testing for surface/near-surface flaw detection and tubing inspection in conductive materials."
        }
    ];

    const specialistMethods = [
        {
            abbrev: "UTG",
            title: "Ultrasonic Thickness Gauging",
            icon: Gauge,
            desc: "Accurate single-side wall thickness measurement for monitoring corrosion and erosion in pipelines, storage tanks, structural steel, castings, and pressure equipment.",
            apps: ["Pipeline & Tank Corrosion", "Remaining Wall Thickness Assessment", "Structural Steel & Welds", "Manufacturing Quality Control"]
        },
        {
            abbrev: "PMI-XRF",
            title: "Positive Material Identification",
            icon: Search,
            desc: "Rapid, non-destructive X-ray Fluorescence (XRF) elemental analysis verifying alloy grade composition and material compliance prior to fabrication.",
            apps: ["Alloy Verification", "Material Sorting", "Pre-Welding Inspection"]
        },
        {
            abbrev: "Holiday",
            title: "Holiday Testing",
            icon: ShieldAlert,
            desc: "High and low voltage pinhole detection identifying voids, holidays, and discontinuities in protective pipeline and tank coating systems.",
            apps: ["Pipeline Protective Coatings", "Tank Internal Linings", "Pinhole Detection"]
        },
        {
            abbrev: "Coating",
            title: "Paint & Coating Thickness",
            icon: Sliders,
            desc: "Non-destructive Dry Film Thickness (DFT) measurement verifying protective coating system application against specified thickness requirements.",
            apps: ["DFT Measurement", "Surface Protection Audit", "Substrate Inspection"]
        },
        {
            abbrev: "Ferrite",
            title: "Ferrite Inspection",
            icon: Layers,
            desc: "Measurement of ferrite content in austenitic and duplex stainless steel welds and claddings to prevent hot cracking or embrittlement.",
            apps: ["Duplex Stainless Steel", "Austenitic Weld Metal", "Cladding Evaluation"]
        },
        {
            abbrev: "Hardness",
            title: "Hardness Testing",
            icon: ShieldCheck,
            desc: "Portable hardness measurement evaluating heat-affected zones (HAZ), parent metals, and post-weld heat treatment (PWHT) compliance.",
            apps: ["HAZ Hardness Assessment", "PWHT Verification", "Material Sorting"]
        },
        {
            abbrev: "LT",
            title: "Leak Testing",
            icon: Droplets,
            desc: "Non-destructive evaluation identifying leaks, unintended fluid flow, or pressure loss in sealed vessels, valves, and piping components.",
            apps: ["Sealed Pressure Assets", "Piping Joints", "Valve Integrity"]
        }
    ];

    return (
        <PageWrapper>
            {/* 1. SERVICES HERO */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14 sm:mb-16 pt-4 sm:pt-8">
                <div className="lg:col-span-3 border-t-2 border-brand-500 pt-3">
                    <p className="text-xs sm:text-sm font-black text-brand-500 uppercase tracking-wider">Service dossier</p>
                    <p className="text-sm sm:text-base text-slate-600 mt-2 font-semibold">NDT & Industrial Inspection</p>
                </div>
                <div className="lg:col-span-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 border border-brand-500/30 bg-brand-500/10 text-brand-500 text-xs sm:text-sm font-black uppercase mb-6 tracking-wider rounded-md">
                    <ShieldCheck className="w-4 h-4" />
                    NDT & Industrial Inspection
                </div>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-8">
                    Inspection Methods For Critical <br />
                    <span className="text-brand-500 italic">Materials, Welds and Assets.</span>
                </h1>
                <p className="text-slate-700 text-lg sm:text-2xl font-normal leading-relaxed max-w-3xl">
                    <strong className="text-slate-900 font-bold">{COMPANY_CONFIG.legalName}</strong> provides 16 Non-Destructive Testing (NDT), qualification, and specialist testing service areas from Abu Dhabi, supporting industrial infrastructure evaluation without impairing asset utility.
                </p>
                </div>
            </div>

            <figure className="relative mb-20 sm:mb-28 min-h-[260px] sm:min-h-[330px] overflow-hidden rounded-3xl border border-brand-500/15 shadow-xl">
                <img src="/images/blueray-services-weld-inspection.png" alt="Ultrasonic probe inspecting a pipeline weld" className="absolute inset-0 h-full w-full object-cover object-center" />
                <div className="theme-image-overlay absolute inset-0" />
                <figcaption className="relative max-w-md px-6 sm:px-10 py-10 sm:py-14 bg-white/90 backdrop-blur-md m-6 rounded-2xl border border-brand-500/15 shadow-md">
                    <p className="text-xs sm:text-sm font-black uppercase text-brand-500 mb-3 tracking-wider">Method focus / 01</p>
                    <p className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">Field inspection is grounded in the condition of the material, the weld, and the work environment.</p>
                </figcaption>
            </figure>

            {/* 2. CORE NDT METHODS */}
            <div id="core-ndt" className="mb-20 sm:mb-28 pt-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-10 sm:mb-14">
                    <div className="lg:col-span-3"><p className="text-4xl font-black text-brand-500">01</p></div>
                    <div className="lg:col-span-7">
                    <h2 className="text-xs sm:text-sm font-black text-brand-500 uppercase mb-3 tracking-wider">Foundation Methods</h2>
                    <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 uppercase">Core NDT Methods</h3>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-brand-500/15 rounded-3xl overflow-hidden shadow-sm">
                    {coreMethods.map((m, idx) => (
                        <div key={idx} className="p-7 sm:p-8 bg-white border-r border-b border-brand-500/15 hover:bg-slate-50/80 transition-all group flex flex-col justify-between min-h-[270px]">
                            <div>
                                <div className="flex items-center justify-between mb-6">
                                    <div className="w-12 h-12 bg-brand-500/10 rounded-xl flex items-center justify-center border border-brand-500/20 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                                        <m.icon className="w-6 h-6 text-brand-500 group-hover:text-white transition-colors" />
                                    </div>
                                    <span className="text-xs font-black uppercase text-brand-500 bg-brand-500/10 px-3 py-1 border border-brand-500/20 rounded-md">
                                        {m.abbrev}
                                    </span>
                                </div>
                                <h4 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 group-hover:text-brand-500 transition-colors">{m.title}</h4>
                                <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal">{m.desc}</p>
                            </div>
                        </div>
                    ))}
                    <div className="p-7 sm:p-8 bg-slate-50/60 border-r border-b border-dashed border-brand-500/20 flex flex-col items-center justify-center text-center">
                        <ShieldCheck className="w-12 h-12 text-brand-500 mb-4" />
                        <span className="text-sm font-bold uppercase text-slate-900">Qualified Inspection Personnel</span>
                        <p className="text-xs sm:text-sm text-slate-600 mt-2 font-normal">Equipped for both on-site field testing & workshop assignments</p>
                    </div>
                </div>
            </div>

            {/* 3. ADVANCED NDT FEATURE SECTION (PAUT + TOFD) */}
            <div id="advanced-ndt" className="mb-20 sm:mb-28 p-8 sm:p-12 lg:p-14 bg-slate-50/70 border border-brand-500/20 rounded-3xl relative overflow-hidden shadow-sm">
                <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(90deg,rgba(2,63,174,0.18)_1px,transparent_1px),linear-gradient(180deg,rgba(2,63,174,0.12)_1px,transparent_1px)] bg-[size:48px_48px]"></div>
                <div className="relative max-w-3xl mb-10 sm:mb-14">
                    <span className="text-xs sm:text-sm font-black uppercase text-brand-500 block mb-2 tracking-wider">02 / High-Resolution Volumetric Inspection</span>
                    <h3 className="text-3xl sm:text-5xl font-bold text-slate-900 uppercase mb-4">Advanced Ultrasonic Testing (PAUT & TOFD)</h3>
                    <p className="text-slate-700 text-base sm:text-lg font-normal leading-relaxed">
                        BLUERAY provides advanced ultrasonic methods for complex weld evaluation, precise defect sizing, and volumetric inspection.
                    </p>
                </div>

                <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                    <div className="p-7 sm:p-9 bg-white border border-brand-500/15 rounded-3xl shadow-sm space-y-6 flex flex-col justify-between relative overflow-hidden">
                        <div className="absolute inset-x-0 top-0 h-1.5 bg-brand-600"></div>
                        <div>
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-sm font-black uppercase text-brand-500 tracking-wider">PAUT</span>
                                <span className="text-xs font-bold uppercase text-slate-500">Volumetric Evaluation</span>
                            </div>
                            <h4 className="text-2xl font-bold text-slate-900 uppercase mb-3">Phased Array Ultrasonic Testing</h4>
                            <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal mb-6">
                                Utilizes multi-element transducer probes with electronic beam steering and focusing to sweep across component angles, producing detailed cross-sectional imaging for critical weld evaluation.
                            </p>
                        </div>
                        <MethodDiagram variant="paut" className="w-full h-40 text-brand-500 opacity-20" />
                    </div>

                    <div className="p-7 sm:p-9 bg-white border border-brand-500/15 rounded-3xl shadow-sm space-y-6 flex flex-col justify-between relative overflow-hidden">
                        <div className="absolute inset-x-0 top-0 h-1.5 bg-brand-600"></div>
                        <div>
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-sm font-black uppercase text-brand-500 tracking-wider">TOFD</span>
                                <span className="text-xs font-bold uppercase text-slate-500">Flaw Sizing Technique</span>
                            </div>
                            <h4 className="text-2xl font-bold text-slate-900 uppercase mb-3">Time of Flight Diffraction</h4>
                            <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal mb-6">
                                Advanced ultrasonic technique analyzing diffracted sound waves from flaw tips to achieve highly accurate crack height measurement and precise defect sizing in structural welds.
                            </p>
                        </div>
                        <MethodDiagram variant="tofd" className="w-full h-40 text-brand-500 opacity-20" />
                    </div>
                </div>
            </div>

            {/* 4. SPECIALIST & SUPPORTING METHODS (UTG, PMI, HOLIDAY, ETC.) */}
            <div className="mb-20 sm:mb-28">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-10 sm:mb-14">
                    <div className="lg:col-span-3"><p className="text-4xl font-black text-brand-500">03</p></div>
                    <div className="lg:col-span-7">
                    <h2 className="text-xs sm:text-sm font-black text-brand-500 uppercase mb-3 tracking-wider">Specialist Inspection</h2>
                    <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 uppercase">Specialist & Integrity Testing</h3>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {specialistMethods.map((sm, idx) => (
                        <div key={idx} className={`p-7 sm:p-8 bg-white border border-brand-500/15 rounded-3xl shadow-sm hover:shadow-md hover:border-brand-500/35 transition-all flex flex-col justify-between ${idx === 0 ? 'lg:col-span-2' : ''}`}>
                            <div>
                                <div className="flex items-center justify-between mb-6">
                                    <div className="w-12 h-12 bg-brand-500/10 rounded-xl flex items-center justify-center border border-brand-500/20">
                                        <sm.icon className="w-6 h-6 text-brand-500" />
                                    </div>
                                    <span className="text-xs font-black uppercase text-brand-500 bg-brand-500/10 px-3 py-1 border border-brand-500/20 rounded-md">
                                        {sm.abbrev}
                                    </span>
                                </div>
                                <h4 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">{sm.title}</h4>
                                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6 font-normal">{sm.desc}</p>
                                {sm.abbrev === 'UTG' && <MethodDiagram variant="utg" className="h-24 w-full text-brand-500 opacity-20" />}
                            </div>

                            <div className="pt-4 border-t border-brand-500/10 mt-4">
                                <span className="text-xs font-bold uppercase text-slate-500 block mb-2 tracking-wider">Key Applications</span>
                                <div className="flex flex-wrap gap-2">
                                    {sm.apps.map((app, i) => (
                                        <span key={i} className="text-xs font-semibold text-slate-800 bg-slate-50 px-3 py-1.5 rounded-lg border border-brand-500/15">
                                            {app}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* 5. WELDER QUALIFICATION / CERTIFICATION SERVICES */}
            <div id="welder-qual" className="mb-20 sm:mb-28 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center p-8 sm:p-12 lg:p-14 bg-slate-50/70 border border-brand-500/20 rounded-3xl shadow-sm">
                <div className="space-y-6">
                    <span className="text-xs sm:text-sm font-black uppercase text-brand-500 block tracking-wider">04 / Weld Testing & Witnessing</span>
                    <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 uppercase">Welder Qualification & Witnessing</h3>
                    <p className="text-slate-700 text-base sm:text-lg font-normal leading-relaxed">
                        BLUERAY offers Welder Qualification & Certification Services for on-site and workshop evaluations, witnessed by Certified Welding Inspectors (CSWIP / AWS-CWI).
                    </p>
                    <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
                        Testing is performed in accordance with applicable international reference standards and client specifications:
                    </p>
                    <div className="grid grid-cols-2 gap-4 pt-2">
                        {['ASME Codes', 'AWS Standards', 'BS EN ISO Standards', 'API Codes'].map((code, i) => (
                            <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-brand-500/15 shadow-sm">
                                <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0" />
                                <span className="text-xs sm:text-sm font-bold text-slate-900">{code}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="border border-brand-500/15 bg-white p-7 sm:p-9 rounded-3xl shadow-sm">
                    <div className="flex items-center gap-4 border-b border-brand-500/15 pb-6 mb-6">
                        <div className="w-14 h-14 rounded-2xl border border-brand-500/20 bg-brand-500/10 flex items-center justify-center shrink-0">
                            <Award className="w-7 h-7 text-brand-500" />
                        </div>
                        <div>
                            <p className="text-xs font-black uppercase text-brand-500 tracking-wider">Witnessed Evaluation</p>
                            <h4 className="text-lg sm:text-xl font-bold text-slate-900 uppercase">Qualified Welding Inspection Support</h4>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        {['CSWIP', 'AWS-CWI', 'ASME', 'API'].map((item) => (
                            <div key={item} className="border border-brand-500/15 bg-slate-50/70 p-5 rounded-2xl text-center">
                                <p className="text-base font-black text-slate-900 uppercase">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 6. PULL-OUT TESTING */}
            <div id="pullout-testing" className="mb-20 sm:mb-28 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center p-8 sm:p-12 lg:p-14 bg-slate-50/70 border border-brand-500/20 rounded-3xl shadow-sm">
                <div className="border border-brand-500/15 bg-white p-7 sm:p-9 rounded-3xl shadow-sm order-2 lg:order-1">
                    <div className="flex items-center gap-4 border-b border-brand-500/15 pb-6 mb-6">
                        <div className="w-14 h-14 rounded-2xl border border-brand-500/20 bg-brand-500/10 flex items-center justify-center shrink-0">
                            <Anchor className="w-7 h-7 text-brand-500" />
                        </div>
                        <div>
                            <p className="text-xs font-black uppercase text-brand-500 tracking-wider">Load Capacity Check</p>
                            <h4 className="text-lg sm:text-xl font-bold text-slate-900 uppercase">Anchor, Rebar & Fixing Verification</h4>
                        </div>
                    </div>
                    <div className="space-y-3">
                        {['Controlled tensile load', 'Holding strength verification', 'Field-ready reporting'].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 rounded-2xl border border-brand-500/15 bg-slate-50/60 p-4">
                                <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0" />
                                <p className="text-xs sm:text-sm font-bold text-slate-900 uppercase">{item}</p>
                            </div>
                        ))}
                    </div>
                    <MethodDiagram variant="tensile" className="w-full h-40 mt-6 text-brand-500 opacity-20" />
                </div>

                <div className="space-y-6 order-1 lg:order-2">
                    <span className="text-xs sm:text-sm font-black uppercase text-brand-500 block tracking-wider">05 / On-Site Load Verification</span>
                    <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 uppercase">Tensile Pull-Out Testing</h3>
                    <p className="text-slate-700 text-base sm:text-lg font-normal leading-relaxed">
                        On-site tensile pull-out evaluation verifying structural load capacity, bonding integrity, and anchor holding strength across diverse material substrates.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                        {[
                            "Rebar / Reinforcement Bars",
                            "Anchor Bolts & Structural Hooks",
                            "Structural Fasteners & Fixings",
                            "Architectural Tiles & Cladding"
                        ].map((item, i) => (
                            <div key={i} className="p-4 bg-white rounded-2xl border border-brand-500/15 shadow-sm flex items-center gap-3">
                                <Anchor className="w-4 h-4 text-brand-500 shrink-0" />
                                <span className="text-xs sm:text-sm font-bold text-slate-900">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 6.5 STANDARDS & PERSONNEL QUALIFICATIONS */}
            <div className="mb-20 sm:mb-28 p-8 sm:p-12 bg-slate-50/60 border border-brand-500/15 rounded-3xl shadow-sm">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <span className="text-xs sm:text-sm font-black uppercase text-brand-500 block mb-2 tracking-wider">06 / Technical Compliance & Rigor</span>
                    <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 uppercase mb-4">Applicable Standards & Personnel Qualification References</h3>
                    <p className="text-slate-700 text-base font-normal leading-relaxed">
                        Testing execution and welder evaluation references are aligned with recognized codes and personnel qualification schemes. These references are not presented as corporate accreditations.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-7 sm:p-9 bg-white rounded-3xl border border-brand-500/15 shadow-sm space-y-4">
                        <div className="flex items-center gap-3 text-brand-500 mb-2">
                            <FileCheck className="w-6 h-6" />
                            <h4 className="text-base font-bold text-slate-900 uppercase tracking-wider">Project / Test Standard References</h4>
                        </div>
                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal mb-4">
                            Inspection methods and welder qualification procedures are referenced to established industry standards:
                        </p>
                        <div className="flex flex-wrap gap-2.5">
                            {['ASME Codes', 'AWS Standards', 'BS EN ISO Standards', 'API Codes', 'ISO/IEC 17025 Reference', 'SAC Singlas Reference'].map((std, i) => (
                                <span key={i} className="text-xs font-bold text-slate-800 bg-slate-50 px-3.5 py-2 rounded-xl border border-brand-500/15">
                                    {std}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="p-7 sm:p-9 bg-white rounded-3xl border border-brand-500/15 shadow-sm space-y-4">
                        <div className="flex items-center gap-3 text-brand-500 mb-2">
                            <Award className="w-6 h-6" />
                            <h4 className="text-base font-bold text-slate-900 uppercase tracking-wider">Personnel Qualification References</h4>
                        </div>
                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal mb-4">
                            Field testing and welding inspection witnessing are conducted by qualified technical personnel:
                        </p>
                        <div className="flex flex-wrap gap-2.5">
                            {['PCN Certified', 'ISO 9712 Qualified', 'ASNT Level 2 / 3', 'CSWIP Inspector Witness', 'AWS-CWI Inspector Witness'].map((qual, i) => (
                                <span key={i} className="text-xs font-bold text-slate-800 bg-slate-50 px-3.5 py-2 rounded-xl border border-brand-500/15">
                                    {qual}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* 7. CLOSING CTA */}
            <div className="bg-gradient-to-br from-brand-600 via-brand-700 to-brand-900 p-9 sm:p-12 md:p-16 rounded-3xl text-center relative overflow-hidden shadow-2xl border border-brand-500/20">
                <h3 className="text-3xl sm:text-4xl font-black text-white mb-4 uppercase">
                    Need Inspection Support <span className="text-brand-300 italic">For Your Next Project?</span>
                </h3>
                <p className="text-slate-100 max-w-xl mx-auto text-base sm:text-lg mb-8 font-normal leading-relaxed">
                    Partner with {COMPANY_CONFIG.legalName} for reliable NDT solutions and technical asset verification in Abu Dhabi and across the region.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    {setCurrentPage && (
                        <>
                            <button
                                onClick={() => setCurrentPage('contact')}
                                className="px-10 py-4 bg-white text-brand-900 rounded-xl font-black uppercase text-xs sm:text-sm hover:bg-slate-100 transition-all shadow-lg"
                            >
                                Request a Quote
                            </button>
                            <button
                                onClick={() => setCurrentPage('contact')}
                                className="px-10 py-4 border-2 border-white text-white bg-brand-900/30 rounded-xl font-black uppercase text-xs sm:text-sm hover:bg-white hover:text-brand-900 transition-all shadow-md"
                            >
                                Contact Technical Desk
                            </button>
                        </>
                    )}
                </div>
            </div>
        </PageWrapper>
    );
};

export default ServicePage;
