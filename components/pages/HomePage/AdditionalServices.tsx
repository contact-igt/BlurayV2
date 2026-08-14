import React from 'react';
import { Award, Anchor, ArrowRight } from 'lucide-react';
import { MethodDiagram } from '@/components/graphics/TechnicalIllustrations';

interface AdditionalServicesProps {
    setCurrentPage: (page: string) => void;
}

const AdditionalServices: React.FC<AdditionalServicesProps> = ({ setCurrentPage }) => {
    return (
        <section className="py-20 sm:py-24 bg-slate-50/60 border-t border-brand-500/10">
            <div className="max-w-7xl mx-auto px-5 sm:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-12">
                    <div className="lg:col-span-5">
                        <h2 className="text-xs font-black text-brand-500 uppercase mb-3 tracking-wider">Additional Services</h2>
                        <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 uppercase leading-tight">Qualification & field testing</h3>
                    </div>
                    <p className="lg:col-span-4 text-base sm:text-lg text-slate-600 leading-relaxed font-light">Two focused service groups for witnessed welding qualification and on-site tensile pull-out evaluation.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative overflow-hidden bg-white p-7 sm:p-9 border border-brand-500/15 rounded-2xl shadow-sm hover:shadow-md hover:border-brand-500/35 transition-all flex flex-col justify-between group min-h-[360px]">
                        <MethodDiagram variant="layers" className="absolute right-0 bottom-0 w-3/5 text-brand-500 opacity-10" />
                        <div>
                            <div className="w-14 h-14 bg-brand-500/10 rounded-xl flex items-center justify-center mb-6 border border-brand-500/20 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                                <Award className="w-7 h-7 text-brand-500 group-hover:text-white transition-colors" />
                            </div>
                            <span className="text-xs font-black uppercase text-brand-500 bg-brand-500/10 px-3 py-1 border border-brand-500/20 inline-block mb-3 tracking-wider rounded-md">
                                Industry Code Alignment
                            </span>
                            <h4 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">Welder Qualification & Witnessing</h4>
                            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-light">
                                Welder qualification testing witnessed by Certified Welding Inspectors (CSWIP / AWS-CWI) for on-site and workshop evaluations, referencing ASME, AWS, BS EN ISO, and API codes.
                            </p>
                        </div>
                        <button
                            onClick={() => setCurrentPage('welder-qual')}
                            className="inline-flex items-center gap-2 text-xs font-black uppercase text-brand-500 group-hover:text-brand-700 group-hover:translate-x-1 transition-all pt-4 border-t border-brand-500/10 w-full text-left"
                        >
                            Explore Qualification Witnessing <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>

                    <div className="relative overflow-hidden bg-white p-7 sm:p-9 border border-brand-500/15 rounded-2xl shadow-sm hover:shadow-md hover:border-brand-500/35 transition-all flex flex-col justify-between group min-h-[360px]">
                        <MethodDiagram variant="tensile" className="absolute right-0 bottom-0 w-3/5 text-brand-500 opacity-10" />
                        <div>
                            <div className="w-14 h-14 bg-brand-500/10 rounded-xl flex items-center justify-center mb-6 border border-brand-500/20 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                                <Anchor className="w-7 h-7 text-brand-500 group-hover:text-white transition-colors" />
                            </div>
                            <span className="text-xs font-black uppercase text-brand-500 bg-brand-500/10 px-3 py-1 border border-brand-500/20 inline-block mb-3 tracking-wider rounded-md">
                                Physical Load Verification
                            </span>
                            <h4 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">Tensile Pull-Out Testing</h4>
                            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-light">
                                On-site tensile pull-out evaluation verifying adhesion and load capacity for reinforcement bars (rebar), anchor bolts & hooks, structural fasteners, and architectural tiles.
                            </p>
                        </div>
                        <button
                            onClick={() => setCurrentPage('pull-out')}
                            className="inline-flex items-center gap-2 text-xs font-black uppercase text-brand-500 group-hover:text-brand-700 group-hover:translate-x-1 transition-all pt-4 border-t border-brand-500/10 w-full text-left"
                        >
                            Explore Pull-out Testing <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdditionalServices;
