'use client';

import React from 'react';

interface SlideLayoutProps {
    children: React.ReactNode;
    pageNumber?: number;
    variant?: 'default' | 'gray' | 'dark' | 'brand';
    className?: string;
}

export default function SlideLayout({
    children,
    pageNumber,
    variant = 'default',
    className = ''
}: SlideLayoutProps) {
    const variantClass = {
        default: '',
        gray: '',
        dark: 'dark',
        brand: 'brand'
    }[variant];

    const bgStyle: React.CSSProperties = {
        default: { backgroundColor: '#ffffff' },
        gray: { backgroundColor: '#f8f9fa' },
        dark: { backgroundColor: '#0f172a', color: '#ffffff' },
        brand: { backgroundColor: '#005c9a', color: '#ffffff' }
    }[variant];

    return (
        <div className={`slide ${variantClass} ${className}`} style={bgStyle}>
            <div className="container">
                {children}
            </div>

            {pageNumber && (
                <div className="page-footer">
                    <span>© 2026 YUSCON</span>
                    <span className="page-num">{String(pageNumber).padStart(2, '0')}</span>
                </div>
            )}
        </div>
    );
}
