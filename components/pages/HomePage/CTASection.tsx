import { COMPANY_CONFIG } from '@/lib/company';

interface CTASectionProps {
    setCurrentPage: (page: string) => void;
}

const CTASection: React.FC<CTASectionProps> = ({ setCurrentPage }) => {
    return (
        <section className="py-20 sm:py-28 bg-white border-t border-brand-500/10">
            <div className="max-w-7xl mx-auto px-5 sm:px-6">
                <div className="bg-gradient-to-br from-brand-600 via-brand-700 to-brand-900 p-9 sm:p-14 md:p-16 rounded-3xl text-center relative overflow-hidden shadow-2xl border border-brand-500/20">
                    <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.16)_1px,transparent_1px)] bg-[size:42px_42px] pointer-events-none"></div>
                    <span className="relative text-xs font-black text-brand-200 uppercase tracking-wider mb-4 block">Abu Dhabi • UAE Operations</span>
                    <h3 className="relative text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 uppercase">
                        Need Inspection Support <br />
                        <span className="text-brand-300 italic">For Your Next Project?</span>
                    </h3>
                    <p className="relative text-slate-100 max-w-2xl mx-auto text-base sm:text-lg mb-10 font-light leading-relaxed">
                        Partner with <strong className="text-white font-semibold">{COMPANY_CONFIG.legalName}</strong> for reliable NDT solutions and technical asset verification in Abu Dhabi and across the region.
                    </p>
                    <div className="relative flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => setCurrentPage('contact')}
                            className="px-10 py-4 bg-white text-brand-900 rounded-xl font-black uppercase text-xs hover:bg-slate-100 transition-all shadow-xl shadow-brand-950/30"
                        >
                            Request a Quote
                        </button>
                        <button
                            onClick={() => setCurrentPage('contact')}
                            className="px-10 py-4 border-2 border-white text-white bg-brand-900/30 rounded-xl font-black uppercase text-xs hover:bg-white hover:text-brand-900 transition-all shadow-md"
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
