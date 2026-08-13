import React, { useState } from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import { COMPANY_CONFIG } from '@/lib/company';
import { Mail, Phone, MapPin, Globe, Send, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface FormState {
    fullName: string;
    companyName: string;
    email: string;
    phone: string;
    service: string;
    message: string;
}

interface FormErrors {
    fullName?: string;
    email?: string;
    phone?: string;
    service?: string;
    message?: string;
}

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState<FormState>({
        fullName: '',
        companyName: '',
        email: '',
        phone: '',
        service: 'NDT & Inspection Services',
        message: ''
    });

    const [errors, setErrors] = useState<FormErrors>({});

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};
        if (!formData.fullName.trim()) {
            newErrors.fullName = 'Please enter your full name.';
        }
        if (!formData.email.trim()) {
            newErrors.email = 'Please enter your email address.';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
            newErrors.email = 'Please enter a valid email address.';
        }
        if (!formData.phone.trim()) {
            newErrors.phone = 'Please enter your phone number.';
        }
        if (!formData.service.trim()) {
            newErrors.service = 'Please select a service requirement.';
        }
        if (!formData.message.trim()) {
            newErrors.message = 'Please enter your inspection scope or requirement details.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm()) return;

        const subject = encodeURIComponent(`BLUERAY Website Enquiry — ${formData.service}`);
        const bodyLines = [
            `BLUERAY Website Inspection Enquiry`,
            `----------------------------------`,
            `Full Name: ${formData.fullName}`,
            `Company: ${formData.companyName || 'N/A'}`,
            `Email: ${formData.email}`,
            `Phone: ${formData.phone}`,
            `Selected Service: ${formData.service}`,
            ``,
            `Requirement Details:`,
            `${formData.message}`
        ];
        const body = encodeURIComponent(bodyLines.join('\n'));
        const mailtoUrl = `mailto:${COMPANY_CONFIG.emails.admin}?subject=${subject}&body=${body}`;

        window.location.href = mailtoUrl;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
    };

    return (
        <PageWrapper>
            {/* Contact Hero */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 sm:mb-20 pt-4 sm:pt-6">
                <div className="lg:col-span-3 border-t border-brand-500 pt-3">
                    <p className="text-xs font-black text-brand-500 uppercase">Contact desk</p>
                    <p className="text-sm text-slate-500 mt-2">Abu Dhabi, UAE</p>
                </div>
                <div className="lg:col-span-8">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-brand-500/30 bg-brand-600/10 text-brand-500 text-[10px] font-black uppercase mb-6">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Contact BLUERAY Desk
                </div>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
                    Discuss Your <span className="text-brand-500 italic">Inspection Requirement.</span>
                </h1>
                <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed max-w-2xl">
                    Submit your scope or reach out directly to <strong className="text-white font-bold">{COMPANY_CONFIG.legalName}</strong> for technical evaluations, project quotes, and field testing inquiries.
                </p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
                {/* Direct Contact Information Cards */}
                <div className="lg:col-span-5 space-y-4">
                    <div className="p-6 sm:p-7 bg-slate-900/80 border border-white/10 space-y-6">
                        <h2 className="text-xs font-black text-brand-500 uppercase">Headquarters & Operating Office</h2>
                        
                        <div className="space-y-5">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-slate-950 rounded-xl border border-white/10 flex items-center justify-center shrink-0 mt-1">
                                    <MapPin className="text-brand-500 w-5 h-5" />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[10px] font-black uppercase text-slate-400">Headquarters Address (UAE)</p>
                                    <p className="text-xs text-slate-200 font-medium leading-relaxed">
                                        {COMPANY_CONFIG.uaeAddress.fullFormatted}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                                <div className="w-10 h-10 bg-slate-950 rounded-xl border border-white/10 flex items-center justify-center shrink-0">
                                    <Globe className="text-brand-500 w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black uppercase text-slate-400">International Presence</p>
                                    <p className="text-xs font-bold text-white">Abu Dhabi Headquarters • India Branch</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 sm:p-7 bg-slate-900/80 border border-white/10 space-y-5">
                        <h2 className="text-xs font-black text-brand-500 uppercase">Direct Communication Lines</h2>
                        
                        <div className="space-y-4 text-xs">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-slate-950 rounded-xl border border-white/10 flex items-center justify-center shrink-0">
                                    <Phone className="text-brand-500 w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black uppercase text-slate-400">UAE Direct Phone</p>
                                    <a href={COMPANY_CONFIG.phones.uae.href} className="text-sm font-bold text-white hover:text-brand-500 transition-colors">
                                        {COMPANY_CONFIG.phones.uae.display}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 pt-3 border-t border-white/5">
                                <div className="w-10 h-10 bg-slate-950 rounded-xl border border-white/10 flex items-center justify-center shrink-0">
                                    <Phone className="text-brand-500 w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black uppercase text-slate-400">India Branch Phone</p>
                                    <a href={COMPANY_CONFIG.phones.india.href} className="text-sm font-bold text-white hover:text-brand-500 transition-colors">
                                        {COMPANY_CONFIG.phones.india.display}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 pt-3 border-t border-white/5">
                                <div className="w-10 h-10 bg-slate-950 rounded-xl border border-white/10 flex items-center justify-center shrink-0">
                                    <Mail className="text-brand-500 w-5 h-5" />
                                </div>
                                <div className="space-y-0.5">
                                    <p className="text-[10px] font-black uppercase text-slate-400">Official Emails</p>
                                    <a href={`mailto:${COMPANY_CONFIG.emails.admin}`} className="text-xs font-medium text-slate-200 block hover:text-brand-500 transition-colors break-all">
                                        {COMPANY_CONFIG.emails.admin}
                                    </a>
                                    <a href={`mailto:${COMPANY_CONFIG.emails.international}`} className="text-xs font-medium text-slate-400 block hover:text-brand-500 transition-colors break-all">
                                        {COMPANY_CONFIG.emails.international}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 pt-3 border-t border-white/5">
                                <div className="w-10 h-10 bg-slate-950 rounded-xl border border-white/10 flex items-center justify-center shrink-0">
                                    <Globe className="text-brand-500 w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black uppercase text-slate-400">Official Web Domain</p>
                                    <a href={COMPANY_CONFIG.website.href} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-white hover:text-brand-500 transition-colors">
                                        {COMPANY_CONFIG.website.display}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Inspection Enquiry Form */}
                <div className="contact-enquiry-panel lg:col-span-7 bg-slate-900/90 p-6 sm:p-9 border border-white/10 shadow-2xl">
                    <div className="mb-8">
                        <h2 className="on-dark-heading text-xl sm:text-2xl font-bold uppercase mb-2">Inspection Enquiry Form</h2>
                        <p className="on-dark-body text-xs font-light">Fill out your project details below to launch a direct email enquiry to our technical team.</p>
                    </div>

                    <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="fullName" className="on-dark-label text-[10px] font-black uppercase">Full Name *</label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    className={`w-full bg-slate-950 border ${errors.fullName ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-white text-xs focus:border-brand-500 focus:outline-none transition-all placeholder:text-slate-600 font-medium`}
                                />
                                {errors.fullName && <p className="text-[10px] text-red-400 font-medium">{errors.fullName}</p>}
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="companyName" className="on-dark-label text-[10px] font-black uppercase">Company Name</label>
                                <input
                                    type="text"
                                    id="companyName"
                                    name="companyName"
                                    value={formData.companyName}
                                    onChange={handleChange}
                                    placeholder="Company / Organization"
                                    className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white text-xs focus:border-brand-500 focus:outline-none transition-all placeholder:text-slate-600 font-medium"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="email" className="on-dark-label text-[10px] font-black uppercase">Corporate Email *</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="email@company.com"
                                    className={`w-full bg-slate-950 border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-white text-xs focus:border-brand-500 focus:outline-none transition-all placeholder:text-slate-600 font-medium`}
                                />
                                {errors.email && <p className="text-[10px] text-red-400 font-medium">{errors.email}</p>}
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="phone" className="on-dark-label text-[10px] font-black uppercase">Phone Number *</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="+971 -- --- ----"
                                    className={`w-full bg-slate-950 border ${errors.phone ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-white text-xs focus:border-brand-500 focus:outline-none transition-all placeholder:text-slate-600 font-medium`}
                                />
                                {errors.phone && <p className="text-[10px] text-red-400 font-medium">{errors.phone}</p>}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="service" className="on-dark-label text-[10px] font-black uppercase">Service Required *</label>
                            <select
                                name="service"
                                id="service"
                                value={formData.service}
                                onChange={handleChange}
                                className={`w-full bg-slate-950 border ${errors.service ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-white text-xs focus:border-brand-500 focus:outline-none transition-all font-medium`}
                            >
                                <option value="NDT & Inspection Services">NDT & Inspection Services (VT, PT, MT, UT, ET)</option>
                                <option value="Advanced NDT — PAUT / TOFD">Advanced NDT — PAUT / TOFD</option>
                                <option value="Welder Qualification">Welder Qualification & Certification Services</option>
                                <option value="Pull-Out Testing">Tensile Pull-Out Testing (Rebar, Anchors, Tiles)</option>
                                <option value="Other Inspection Requirement">Other Inspection Requirement</option>
                            </select>
                            {errors.service && <p className="text-[10px] text-red-400 font-medium">{errors.service}</p>}
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="on-dark-label text-[10px] font-black uppercase">Project / Scope Details *</label>
                            <textarea
                                rows={4}
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Describe asset type, inspection method, site location, or project timeline..."
                                className={`w-full bg-slate-950 border ${errors.message ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-white text-xs focus:border-brand-500 focus:outline-none transition-all resize-none placeholder:text-slate-600 font-medium`}
                            ></textarea>
                            {errors.message && <p className="text-[10px] text-red-400 font-medium">{errors.message}</p>}
                        </div>

                        <div className="pt-2">
                            <button
                                type="submit"
                                className="w-full py-4 bg-brand-600 text-white font-black uppercase text-xs rounded-md shadow-lg shadow-brand-950/40 hover:bg-brand-700 transition-colors flex items-center justify-center gap-2"
                            >
                                <Send className="w-4 h-4" />
                                Prepare Email Enquiry
                            </button>
                            <p className="on-dark-muted text-[10px] text-center mt-3 font-light">
                                Opens your default email application with pre-populated enquiry details addressed to {COMPANY_CONFIG.emails.admin}
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </PageWrapper>
    );
};

export default ContactPage;
