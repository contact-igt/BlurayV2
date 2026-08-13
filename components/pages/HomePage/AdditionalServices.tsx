import React from 'react';
import { Award, Anchor, ArrowRight } from 'lucide-react';
import { MethodDiagram } from '@/components/graphics/TechnicalIllustrations';

interface AdditionalServicesProps {
    setCurrentPage: (page: string) => void;
}

const AdditionalServices: React.FC<AdditionalServicesProps> = ({ setCurrentPage }) => {
    return (
        <section className="py-20 sm:py-24 bg-slate-900 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-5 sm:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-12">
                    <div className="lg:col-span-5">
                        <h2 className="text-xs font-black text-brand-500 uppercase mb-3">Additional Services</h2>
                        <h3 className="text-3xl sm:text-4xl font-bold text-white uppercase leading-tight">Qualification & field testing</h3>
                    </div>
                    <p className="lg:col-span-4 text-sm text-slate-400 leading-relaxed">Two focused service groups for witnessed welding qualification and on-site tensile pull-out evaluation.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-y border-white/10">
                    <div className="relative overflow-hidden bg-slate-950 p-7 sm:p-9 border-b md:border-b-0 md:border-r border-white/10 hover:border-brand-500/40 transition-colors flex flex-col justify-between group min-h-[360px]">
                        <MethodDiagram variant="layers" className="absolute right-0 bottom-0 w-3/5 text-slate-300 opacity-25" />
                        <div>
                            <div className="w-14 h-14 bg-slate-900 rounded-md flex items-center justify-center mb-6 border border-white/10 group-hover:border-brand-500/50 group-hover:bg-brand-600/10 transition-colors">
                                <Award className="w-7 h-7 text-brand-500" />
                            </div>
                            <span className="text-[10px] font-black uppercase text-brand-500 bg-brand-500/10 px-3 py-1 border border-brand-500/20 inline-block mb-3">
                                Industry Code Alignment
                            </span>
                            <h4 className="text-xl font-bold text-white mb-3">Welder Qualification & Witnessing</h4>
                            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 font-light">
                                Welder qualification testing witnessed by Certified Welding Inspectors (CSWIP / AWS-CWI) for on-site and workshop evaluations, referencing ASME, AWS, BS EN ISO, and API codes.
                            </p>
                        </div>
                        <button
                            onClick={() => setCurrentPage('welder-qual')}
                            className="inline-flex items-center gap-2 text-xs font-black uppercase text-brand-500 group-hover:translate-x-1 transition-transform pt-4 border-t border-white/10 w-full text-left"
                        >
                            Explore Qualification Witnessing <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>

                    <div className="relative overflow-hidden bg-slate-950 p-7 sm:p-9 hover:border-brand-500/40 transition-colors flex flex-col justify-between group min-h-[360px]">
                        <MethodDiagram variant="tensile" className="absolute right-0 bottom-0 w-3/5 text-slate-300 opacity-30" />
                        <div>
                            <div className="w-14 h-14 bg-slate-900 rounded-md flex items-center justify-center mb-6 border border-white/10 group-hover:border-brand-500/50 group-hover:bg-brand-600/10 transition-colors">
                                <Anchor className="w-7 h-7 text-brand-500" />
                            </div>
                            <span className="text-[10px] font-black uppercase text-brand-500 bg-brand-500/10 px-3 py-1 border border-brand-500/20 inline-block mb-3">
                                Physical Load Verification
                            </span>
                            <h4 className="text-xl font-bold text-white mb-3">Tensile Pull-Out Testing</h4>
                            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 font-light">
                                On-site tensile pull-out evaluation verifying adhesion and load capacity for reinforcement bars (rebar), anchor bolts & hooks, structural fasteners, and architectural tiles.
                            </p>
                        </div>
                        <button
                            onClick={() => setCurrentPage('pull-out')}
                            className="inline-flex items-center gap-2 text-xs font-black uppercase text-brand-500 group-hover:translate-x-1 transition-transform pt-4 border-t border-white/10 w-full text-left"
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
