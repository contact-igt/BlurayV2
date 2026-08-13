import React from 'react';

interface IllustrationProps {
    className?: string;
}

export const PipelineInspectionGraphic: React.FC<IllustrationProps> = ({ className = '' }) => {
    return (
        <svg aria-hidden="true" viewBox="0 0 520 460" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <pattern id="technical-grid" width="32" height="32" patternUnits="userSpaceOnUse">
                    <path d="M32 0H0V32" stroke="currentColor" strokeOpacity="0.12" />
                </pattern>
            </defs>
            <rect width="520" height="460" fill="url(#technical-grid)" className="text-slate-200" />
            <path d="M42 332H478M70 130V362M450 130V362" stroke="currentColor" strokeOpacity="0.2" className="text-slate-300" strokeDasharray="5 8" />
            <circle cx="260" cy="246" r="126" stroke="currentColor" strokeOpacity="0.3" className="text-slate-300" strokeWidth="2" />
            <circle cx="260" cy="246" r="70" stroke="var(--brand-blue)" strokeOpacity="0.8" strokeWidth="3" />
            <path d="M134 246H386M260 120V372" stroke="var(--brand-blue)" strokeOpacity="0.55" strokeWidth="2" />
            <path
                d="M97 246C136 184 174 308 214 246C254 184 292 308 332 246C372 184 410 308 449 246"
                stroke="var(--brand-blue-light)"
                strokeWidth="3"
                strokeLinecap="round"
                opacity="0.9"
            />
            <path d="M260 92V112M260 380V400M106 246H86M434 246H414" stroke="var(--brand-blue-light)" strokeWidth="3" />
        </svg>
    );
};

type MethodDiagramVariant = 'ultrasonic' | 'paut' | 'tofd' | 'utg' | 'tensile' | 'layers';

interface MethodDiagramProps extends IllustrationProps {
    variant: MethodDiagramVariant;
}

const Frame = () => (
    <>
        <path d="M24 196H336" stroke="currentColor" strokeOpacity="0.22" className="text-slate-300" />
        <path d="M24 24V196M336 24V196" stroke="currentColor" strokeOpacity="0.12" className="text-slate-300" strokeDasharray="4 8" />
    </>
);

export const MethodDiagram: React.FC<MethodDiagramProps> = ({ variant, className = '' }) => {
    return (
        <svg aria-hidden="true" viewBox="0 0 360 220" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
            <Frame />
            {variant === 'paut' && <>
                <path d="M64 164H296" stroke="currentColor" strokeOpacity="0.26" strokeWidth="18" className="text-slate-300" />
                <rect x="150" y="45" width="60" height="18" rx="2" fill="var(--brand-blue)" />
                <path d="M158 67L112 156M170 67L136 156M182 67L160 156M194 67L224 156M206 67L248 156" stroke="var(--brand-blue-light)" strokeWidth="2" strokeOpacity="0.82" />
                <path d="M108 156C142 126 180 118 252 156" stroke="var(--brand-blue-light)" strokeWidth="3" strokeLinecap="round" />
                <path d="M115 164H245" stroke="var(--brand-blue-light)" strokeWidth="2" strokeDasharray="5 5" />
            </>}
            {variant === 'tofd' && <>
                <path d="M58 164H302" stroke="currentColor" strokeOpacity="0.26" strokeWidth="18" className="text-slate-300" />
                <rect x="74" y="56" width="38" height="22" rx="2" fill="var(--brand-blue)" />
                <rect x="248" y="56" width="38" height="22" rx="2" fill="var(--brand-blue)" />
                <path d="M93 78L169 158M267 78L191 158" stroke="var(--brand-blue-light)" strokeWidth="3" />
                <path d="M180 127V161" stroke="var(--brand-blue-light)" strokeWidth="3" strokeDasharray="4 4" />
                <circle cx="180" cy="127" r="5" fill="var(--brand-blue-light)" />
            </>}
            {variant === 'utg' && <>
                <path d="M58 164H302" stroke="currentColor" strokeOpacity="0.26" strokeWidth="22" className="text-slate-300" />
                <rect x="155" y="44" width="50" height="24" rx="2" fill="var(--brand-blue)" />
                <path d="M180 68V153" stroke="var(--brand-blue-light)" strokeWidth="3" />
                <path d="M150 153H210" stroke="var(--brand-blue-light)" strokeWidth="3" />
                <path d="M180 76V145" stroke="var(--brand-blue-light)" strokeWidth="2" strokeDasharray="5 6" />
            </>}
            {variant === 'tensile' && <>
                <path d="M96 150H264" stroke="currentColor" strokeWidth="16" strokeOpacity="0.18" className="text-slate-300" />
                <path d="M180 150V60" stroke="var(--brand-blue)" strokeWidth="8" />
                <path d="M158 62L180 34L202 62M142 150H218" stroke="var(--brand-blue-light)" strokeWidth="4" />
            </>}
            {variant === 'layers' && <>
                <rect x="72" y="62" width="216" height="22" fill="var(--brand-blue)" fillOpacity="0.78" />
                <rect x="72" y="86" width="216" height="32" fill="currentColor" fillOpacity="0.2" className="text-slate-300" />
                <rect x="72" y="120" width="216" height="44" fill="currentColor" fillOpacity="0.1" className="text-slate-100" />
                <path d="M48 73H66M48 102H66M48 143H66" stroke="var(--brand-blue-light)" strokeWidth="2" />
            </>}
            {variant === 'ultrasonic' && <>
                <path d="M68 154H292" stroke="currentColor" strokeOpacity="0.25" strokeWidth="14" className="text-slate-300" />
                <path d="M104 104L132 130M256 104L228 130" stroke="var(--brand-blue-light)" strokeWidth="5" />
                <path d="M112 120C138 78 164 162 190 120C216 78 242 162 268 120" stroke="var(--brand-blue-light)" strokeWidth="3" strokeLinecap="round" />
                <circle cx="104" cy="104" r="7" fill="var(--brand-blue)" /><circle cx="256" cy="104" r="7" fill="var(--brand-blue)" />
            </>}
        </svg>
    );
};
