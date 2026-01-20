'use client';

import React, { useEffect, useState } from 'react';

// --- Pattern 1: Dots (for default/white background) ---
const PatternDots = ({ id }: { id: string }) => (
    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <pattern id={id} x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
                <circle cx="16" cy="16" r="1.5" fill="#005c9a" fillOpacity="0.25" />
            </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
);

// --- Pattern 2: Grid Lines (for gray background) ---
const PatternGrid = ({ id }: { id: string }) => (
    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <pattern id={id} x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#64748b" strokeWidth="0.8" strokeOpacity="0.35" />
            </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
);

// --- Pattern 3: Concentric Circles (for dark background) ---
const PatternCircles = ({ id }: { id: string }) => (
    <svg className="w-full h-full" viewBox="0 0 1440 900" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
        <circle cx="0" cy="900" r="400" stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.15" fill="none" />
        <circle cx="0" cy="900" r="600" stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.1" fill="none" />
        <circle cx="0" cy="900" r="800" stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.08" fill="none" />
        <circle cx="1440" cy="0" r="500" stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.12" fill="none" />
        <circle cx="1440" cy="0" r="700" stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.08" fill="none" />
    </svg>
);

// --- Pattern 4: Topo Lines (for brand background) - fetch + inline render ---
const PatternTopo = () => {
    const [svgContent, setSvgContent] = useState<string>('');

    useEffect(() => {
        fetch('/topo.svg')
            .then(res => res.text())
            .then(text => setSvgContent(text));
    }, []);

    return (
        <div
            className="w-full h-full opacity-20"
            style={{ filter: 'brightness(0) invert(1)' }}
            dangerouslySetInnerHTML={{ __html: svgContent }}
        />
    );
};

// --- Main Layout Component ---

interface SlideLayoutProps {
    children: React.ReactNode;
    pageNumber?: number;
    variant?: 'default' | 'gray' | 'dark' | 'brand';
    className?: string;
    backgroundEffect?: React.ReactNode;
}

export default function SlideLayout({
    children,
    pageNumber = 0,
    variant = 'default',
    className = '',
    backgroundEffect
}: SlideLayoutProps) {
    const baseClasses = "flex-none w-screen h-screen flex items-center justify-center relative px-20 py-16 overflow-hidden snap-start print:w-full print:h-screen print:break-after-page print:p-10 print:overflow-visible";

    const variantClasses = {
        default: "bg-white text-text-main [background-image:radial-gradient(circle_at_10%_10%,#f8fafc_0%,#ffffff_80%)]",
        gray: "bg-bg-gray text-text-main [background-image:linear-gradient(135deg,#f1f5f9_0%,#e2e8f0_100%)]",
        dark: "bg-bg-dark text-white [background-image:linear-gradient(135deg,#0f172a_0%,#1e293b_100%)]",
        brand: "bg-brand-blue text-white [background-image:linear-gradient(135deg,#005c9a_0%,#004a7c_100%)]"
    }[variant];

    // Render different pattern based on variant
    const renderPattern = () => {
        const patternId = `pattern-${variant}-${pageNumber}`;
        switch (variant) {
            case 'gray':
                return <PatternGrid id={patternId} />;
            case 'dark':
                return <PatternCircles id={patternId} />;
            case 'brand':
                return <PatternTopo />;
            default:
                return <PatternDots id={patternId} />;
        }
    };

    return (
        <div className={`${baseClasses} ${variantClasses} ${className} pdf-target`}>
            {/* Background Pattern - Unique per variant */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                {renderPattern()}
            </div>

            {/* Custom Background Effect (Optional Overlay) */}
            {backgroundEffect && (
                <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                    {backgroundEffect}
                </div>
            )}

            <div className="container mx-auto relative z-10 w-full max-w-[1400px]">
                {children}
            </div>

            {pageNumber > 0 && (
                <div className={`absolute bottom-8 left-0 w-full px-20 flex justify-between items-center text-sm ${variant === 'dark' || variant === 'brand' ? 'text-white/60' : 'text-text-muted'}`}>
                    <span>© 2026 YUSCON</span>
                    <span className="font-bold text-base">{String(pageNumber).padStart(2, '0')}</span>
                </div>
            )}
        </div>
    );
}

