import { COMPANY_CONFIG } from '@/lib/company';

interface FooterProps {
    setCurrentPage: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
    return (
        <footer className="site-footer pt-16 sm:pt-20 pb-8 border-t border-brand-500/15 bg-slate-50 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(90deg,rgba(2,63,174,0.18)_1px,transparent_1px),linear-gradient(180deg,rgba(2,63,174,0.12)_1px,transparent_1px)] bg-[size:48px_48px]"></div>
            <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10 text-center md:text-left">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
                    <div className="footer-brand-area col-span-1 md:col-span-1 self-start space-y-5 p-5 sm:p-6 text-left rounded-xl border border-brand-500/15 shadow-sm">
                        <button aria-label="BLUERAY home" onClick={() => setCurrentPage('home')} className="inline-flex justify-center md:justify-start">
                            <img src="/images/blueray-logo-final-approved-display.png" alt={COMPANY_CONFIG.legalName} className="brand-logo w-48 sm:w-56 h-auto object-contain" />
                        </button>
                        <p className="footer-brand-copy text-xs leading-relaxed uppercase font-bold text-slate-600">
                            {COMPANY_CONFIG.descriptor}<br />
                            Technical integrity & precision pipeline inspection.
                        </p>
                    </div>
                    <div>
                        <h5 className="footer-heading text-brand-600 font-black text-xs sm:text-sm uppercase mb-5 tracking-wider">Service Scope</h5>
                        <ul className="space-y-3 text-xs sm:text-[13px] text-slate-600 font-bold uppercase">
                            <li onClick={() => setCurrentPage('ndt')} className="hover:text-brand-600 cursor-pointer transition-colors">Core NDT Methods</li>
                            <li onClick={() => setCurrentPage('advanced-ndt')} className="hover:text-brand-600 cursor-pointer transition-colors">Advanced NDT</li>
                            <li onClick={() => setCurrentPage('welder-qual')} className="hover:text-brand-600 cursor-pointer transition-colors">Welder Qualification</li>
                            <li onClick={() => setCurrentPage('pull-out')} className="hover:text-brand-600 cursor-pointer transition-colors">Tensile Pull-Out Testing</li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="footer-heading text-brand-600 font-black text-xs sm:text-sm uppercase mb-5 tracking-wider">Contact & Support</h5>
                        <div className="space-y-3 text-xs sm:text-[13px] text-slate-600 font-medium">
                            <p><span className="text-slate-500 font-bold uppercase block text-xs tracking-wider">UAE Phone:</span>
                                <a href={COMPANY_CONFIG.phones.uae.href} className="hover:text-brand-600 transition-colors font-semibold text-slate-800">{COMPANY_CONFIG.phones.uae.display}</a>
                            </p>
                            <p><span className="text-slate-500 font-bold uppercase block text-xs tracking-wider">India Phone:</span>
                                <a href={COMPANY_CONFIG.phones.india.href} className="hover:text-brand-600 transition-colors font-semibold text-slate-800">{COMPANY_CONFIG.phones.india.display}</a>
                            </p>
                            <p><span className="text-slate-500 font-bold uppercase block text-xs tracking-wider">Official Email:</span>
                                <a href={`mailto:${COMPANY_CONFIG.emails.admin}`} className="hover:text-brand-600 transition-colors block break-all font-semibold text-slate-800">{COMPANY_CONFIG.emails.admin}</a>
                                <a href={`mailto:${COMPANY_CONFIG.emails.international}`} className="hover:text-brand-600 transition-colors block break-all text-xs text-slate-500 mt-0.5">{COMPANY_CONFIG.emails.international}</a>
                            </p>
                        </div>
                    </div>
                    <div>
                        <h5 className="footer-heading text-brand-600 font-black text-xs sm:text-sm uppercase mb-5 tracking-wider">Headquarters</h5>
                        <p className="text-xs sm:text-[13px] text-slate-600 font-medium leading-relaxed">
                            <strong className="text-slate-900 font-bold block mb-1">{COMPANY_CONFIG.headquarters}</strong>
                            Mussaffah - Sector 43, Plot 117 - Bldg A<br />
                            Ash Shallal 8th Street, Mussaffah - 42<br />
                            Abu Dhabi, UAE
                        </p>
                        <p className="footer-website-link mt-3 text-xs sm:text-[13px] font-bold">
                            <a href={COMPANY_CONFIG.website.href} target="_blank" rel="noopener noreferrer" className="hover:underline text-brand-600">{COMPANY_CONFIG.website.display}</a>
                        </p>
                    </div>
                </div>
                <div className="pt-7 border-t border-brand-500/15 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 uppercase gap-4 font-bold">
                    <p>© 2026 {COMPANY_CONFIG.legalName}. All Rights Reserved.</p>
                    <div className="flex gap-6">
                        <span className="hover:text-brand-600 cursor-pointer transition-colors">Privacy Policy</span>
                        <span className="hover:text-brand-600 cursor-pointer transition-colors">Technical Desk</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
