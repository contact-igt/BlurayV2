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
                <div className="lg:col-span-3 border-t-2 border-brand-500 pt-3">
                    <p className="text-xs sm:text-sm font-black text-brand-500 uppercase tracking-wider">Contact desk</p>
                    <p className="text-sm text-slate-500 mt-2 font-medium">Abu Dhabi, UAE</p>
                </div>
                <div className="lg:col-span-8">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-brand-500/30 bg-brand-500/10 text-brand-500 text-xs font-black uppercase mb-6 tracking-wider rounded-md">
                    <ShieldCheck className="w-4 h-4" />
                    Contact BLUERAY Desk
                </div>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-6">
                    Discuss Your <span className="text-brand-500 italic">Inspection Requirement.</span>
                </h1>
                <p className="text-slate-600 text-base sm:text-lg font-light leading-relaxed max-w-2xl">
                    Submit your scope or reach out directly to <strong className="text-slate-900 font-semibold">{COMPANY_CONFIG.legalName}</strong> for technical evaluations, project quotes, and field testing inquiries.
                </p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
                {/* Direct Contact Information Cards */}
                <div className="lg:col-span-5 space-y-5">
                    <div className="p-7 sm:p-8 bg-white border border-brand-500/15 rounded-3xl shadow-sm space-y-6">
                        <h2 className="text-sm sm:text-base font-black text-brand-500 uppercase tracking-wider">Headquarters & Operating Office</h2>
                        
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-brand-500/10 rounded-2xl border border-brand-500/20 flex items-center justify-center shrink-0 mt-1">
                                    <MapPin className="text-brand-500 w-6 h-6" />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-sm font-bold uppercase text-slate-700 tracking-wider">Headquarters Address (UAE)</p>
                                    <p className="text-sm sm:text-base text-slate-900 font-medium leading-relaxed">
                                        {COMPANY_CONFIG.uaeAddress.fullFormatted}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 pt-5 border-t border-brand-500/10">
                                <div className="w-12 h-12 bg-brand-500/10 rounded-2xl border border-brand-500/20 flex items-center justify-center shrink-0">
                                    <Globe className="text-brand-500 w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold uppercase text-slate-700 tracking-wider">International Presence</p>
                                    <p className="text-sm sm:text-base font-bold text-slate-900">Abu Dhabi Headquarters • India Branch</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-7 sm:p-8 bg-white border border-brand-500/15 rounded-3xl shadow-sm space-y-6">
                        <h2 className="text-sm sm:text-base font-black text-brand-500 uppercase tracking-wider">Direct Communication Lines</h2>
                        
                        <div className="space-y-5 text-sm sm:text-base">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-brand-500/10 rounded-2xl border border-brand-500/20 flex items-center justify-center shrink-0">
                                    <Phone className="text-brand-500 w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold uppercase text-slate-700 tracking-wider">UAE Direct Phone</p>
                                    <a href={COMPANY_CONFIG.phones.uae.href} className="text-base sm:text-lg font-bold text-slate-900 hover:text-brand-500 transition-colors">
                                        {COMPANY_CONFIG.phones.uae.display}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 pt-4 border-t border-brand-500/10">
                                <div className="w-12 h-12 bg-brand-500/10 rounded-2xl border border-brand-500/20 flex items-center justify-center shrink-0">
                                    <Phone className="text-brand-500 w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold uppercase text-slate-700 tracking-wider">India Branch Phone</p>
                                    <a href={COMPANY_CONFIG.phones.india.href} className="text-base sm:text-lg font-bold text-slate-900 hover:text-brand-500 transition-colors">
                                        {COMPANY_CONFIG.phones.india.display}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 pt-4 border-t border-brand-500/10">
                                <div className="w-12 h-12 bg-brand-500/10 rounded-2xl border border-brand-500/20 flex items-center justify-center shrink-0">
                                    <Mail className="text-brand-500 w-6 h-6" />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-sm font-bold uppercase text-slate-700 tracking-wider">Official Emails</p>
                                    <a href={`mailto:${COMPANY_CONFIG.emails.admin}`} className="text-sm sm:text-base font-semibold text-slate-900 block hover:text-brand-500 transition-colors break-all">
                                        {COMPANY_CONFIG.emails.admin}
                                    </a>
                                    <a href={`mailto:${COMPANY_CONFIG.emails.international}`} className="text-sm sm:text-base font-medium text-slate-600 block hover:text-brand-500 transition-colors break-all">
                                        {COMPANY_CONFIG.emails.international}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 pt-4 border-t border-brand-500/10">
                                <div className="w-12 h-12 bg-brand-500/10 rounded-2xl border border-brand-500/20 flex items-center justify-center shrink-0">
                                    <Globe className="text-brand-500 w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold uppercase text-slate-700 tracking-wider">Official Web Domain</p>
                                    <a href={COMPANY_CONFIG.website.href} target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base font-bold text-slate-900 hover:text-brand-500 transition-colors">
                                        {COMPANY_CONFIG.website.display}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Inspection Enquiry Form */}
                <div className="contact-enquiry-panel lg:col-span-7 bg-white p-7 sm:p-10 border border-brand-500/15 rounded-3xl shadow-sm">
                    <div className="mb-8">
                        <h2 className="text-slate-900 text-2xl sm:text-3xl font-bold uppercase mb-2">Inspection Enquiry Form</h2>
                        <p className="text-slate-700 text-sm sm:text-base font-normal">Fill out your project details below to launch a direct email enquiry to our technical team.</p>
                    </div>

                    <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="fullName" className="text-sm font-bold uppercase text-slate-800 tracking-wider">Full Name *</label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    className={`w-full bg-slate-50 border ${errors.fullName ? 'border-red-500' : 'border-brand-500/20'} rounded-xl px-4 py-3.5 text-slate-900 text-sm sm:text-base focus:border-brand-500 focus:bg-white focus:outline-none transition-all placeholder:text-slate-500 font-medium`}
                                />
                                {errors.fullName && <p className="text-xs text-red-500 font-medium">{errors.fullName}</p>}
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="companyName" className="text-sm font-bold uppercase text-slate-800 tracking-wider">Company Name</label>
                                <input
                                    type="text"
                                    id="companyName"
                                    name="companyName"
                                    value={formData.companyName}
                                    onChange={handleChange}
                                    placeholder="Company / Organization"
                                    className="w-full bg-slate-50 border border-brand-500/20 rounded-xl px-4 py-3.5 text-slate-900 text-sm sm:text-base focus:border-brand-500 focus:bg-white focus:outline-none transition-all placeholder:text-slate-500 font-medium"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-bold uppercase text-slate-800 tracking-wider">Corporate Email *</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="email@company.com"
                                    className={`w-full bg-slate-50 border ${errors.email ? 'border-red-500' : 'border-brand-500/20'} rounded-xl px-4 py-3.5 text-slate-900 text-sm sm:text-base focus:border-brand-500 focus:bg-white focus:outline-none transition-all placeholder:text-slate-500 font-medium`}
                                />
                                {errors.email && <p className="text-xs text-red-500 font-medium">{errors.email}</p>}
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="phone" className="text-sm font-bold uppercase text-slate-800 tracking-wider">Phone Number *</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="+971 -- --- ----"
                                    className={`w-full bg-slate-50 border ${errors.phone ? 'border-red-500' : 'border-brand-500/20'} rounded-xl px-4 py-3.5 text-slate-900 text-sm sm:text-base focus:border-brand-500 focus:bg-white focus:outline-none transition-all placeholder:text-slate-500 font-medium`}
                                />
                                {errors.phone && <p className="text-xs text-red-500 font-medium">{errors.phone}</p>}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="service" className="text-sm font-bold uppercase text-slate-800 tracking-wider">Service Required *</label>
                            <select
                                name="service"
                                id="service"
                                value={formData.service}
                                onChange={handleChange}
                                className={`w-full bg-slate-50 border ${errors.service ? 'border-red-500' : 'border-brand-500/20'} rounded-xl px-4 py-3.5 text-slate-900 text-sm sm:text-base focus:border-brand-500 focus:bg-white focus:outline-none transition-all font-medium`}
                            >
                                <option value="NDT & Inspection Services">NDT & Inspection Services (VT, PT, MT, UT, ET)</option>
                                <option value="Advanced NDT — PAUT / TOFD">Advanced NDT — PAUT / TOFD</option>
                                <option value="Welder Qualification">Welder Qualification & Certification Services</option>
                                <option value="Pull-Out Testing">Tensile Pull-Out Testing (Rebar, Anchors, Tiles)</option>
                                <option value="Other Inspection Requirement">Other Inspection Requirement</option>
                            </select>
                            {errors.service && <p className="text-xs text-red-500 font-medium">{errors.service}</p>}
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-bold uppercase text-slate-800 tracking-wider">Project / Scope Details *</label>
                            <textarea
                                rows={4}
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Describe asset type, inspection method, site location, or project timeline..."
                                className={`w-full bg-slate-50 border ${errors.message ? 'border-red-500' : 'border-brand-500/20'} rounded-xl px-4 py-3.5 text-slate-900 text-sm sm:text-base focus:border-brand-500 focus:bg-white focus:outline-none transition-all resize-none placeholder:text-slate-500 font-medium`}
                            ></textarea>
                            {errors.message && <p className="text-xs text-red-500 font-medium">{errors.message}</p>}
                        </div>

                        <div className="pt-2">
                            <button
                                type="submit"
                                className="w-full py-4 bg-brand-600 text-white font-black uppercase text-sm sm:text-base rounded-xl shadow-lg shadow-brand-600/20 hover:bg-brand-700 transition-all flex items-center justify-center gap-2"
                            >
                                <Send className="w-5 h-5" />
                                Prepare Email Enquiry
                            </button>
                            <p className="text-xs sm:text-sm text-slate-600 text-center mt-3 font-normal">
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
