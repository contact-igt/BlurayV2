import { COMPANY_CONFIG } from '@/lib/company';

interface CTASectionProps {
    setCurrentPage: (page: string) => void;
}

const CTASection: React.FC<CTASectionProps> = ({ setCurrentPage }) => {
    return (
        <section className="py-20 sm:py-28 bg-slate-950">
            <div className="max-w-7xl mx-auto px-5 sm:px-6">
                <div className="bg-slate-900 p-9 sm:p-12 md:p-16 border border-white/10 text-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.16)_1px,transparent_1px)] bg-[size:42px_42px] pointer-events-none"></div>
                    <span className="relative text-[10px] font-black text-brand-500 uppercase mb-4 block">Abu Dhabi • UAE Operations</span>
                    <h3 className="relative text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 uppercase">
                        Need Inspection Support <br />
                        <span className="text-brand-500 italic">For Your Next Project?</span>
                    </h3>
                    <p className="relative text-slate-300 max-w-2xl mx-auto text-base sm:text-lg mb-10 font-light leading-relaxed">
                        Partner with <strong className="text-white font-semibold">{COMPANY_CONFIG.legalName}</strong> for reliable NDT solutions and technical asset verification in Abu Dhabi and across the region.
                    </p>
                    <div className="relative flex flex-col sm:flex-row gap-3 justify-center">
                        <button
                            onClick={() => setCurrentPage('contact')}
                            className="px-10 py-4 bg-brand-600 text-white rounded-md font-black uppercase text-xs hover:bg-brand-700 transition-colors shadow-lg shadow-brand-950/40"
                        >
                            Request a Quote
                        </button>
                        <button
                            onClick={() => setCurrentPage('contact')}
                            className="px-10 py-4 border border-white/15 bg-white/5 rounded-md font-bold uppercase text-white text-xs hover:bg-white/10 transition-colors"
                        >
                            Contact Technical Team
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
