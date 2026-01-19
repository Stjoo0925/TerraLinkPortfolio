'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { downloadPDF, downloadPPT } from '@/lib/download';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isDownloading, setIsDownloading] = useState<string | null>(null);
    const [currentSlide, setCurrentSlide] = useState(1);
    const menuRef = useRef<HTMLDivElement>(null);

    const totalSlides = 11;

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Track scroll position to update current slide
    useEffect(() => {
        const wrapper = document.querySelector('.scroll-wrapper');
        if (!wrapper) return;

        const handleScroll = () => {
            const scrollLeft = wrapper.scrollLeft;
            const slideWidth = window.innerWidth;
            const newSlide = Math.round(scrollLeft / slideWidth) + 1;
            setCurrentSlide(Math.min(Math.max(newSlide, 1), totalSlides));
        };

        wrapper.addEventListener('scroll', handleScroll);
        return () => wrapper.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSlide = (slideNum: number) => {
        const wrapper = document.querySelector('.scroll-wrapper');
        if (wrapper) {
            wrapper.scrollTo({
                left: (slideNum - 1) * window.innerWidth,
                behavior: 'smooth'
            });
        }
        setIsOpen(false);
    };

    const handleDownloadPDF = async () => {
        setIsDownloading('pdf');
        try {
            await downloadPDF();
        } finally {
            setIsDownloading(null);
            setIsOpen(false);
        }
    };

    const handleDownloadPPT = async () => {
        setIsDownloading('ppt');
        try {
            await downloadPPT();
        } finally {
            setIsDownloading(null);
            setIsOpen(false);
        }
    };

    return (
        <header className="header no-print">
            <button
                onClick={() => scrollToSlide(1)}
                className="header-logo"
                style={{ background: 'none', border: 'none', cursor: 'pointer' }}
            >
                TerraLink
            </button>

            <div className="header-actions">
                {/* Navigation */}
                <div className="header-nav-compact">
                    <button
                        className={`nav-arrow ${currentSlide === 1 ? 'disabled' : ''}`}
                        onClick={() => scrollToSlide(currentSlide - 1)}
                        disabled={currentSlide === 1}
                    >
                        <i className="fas fa-chevron-left"></i>
                    </button>
                    <span className="nav-counter">
                        <span className="nav-current">{String(currentSlide).padStart(2, '0')}</span>
                        <span style={{ margin: '0 4px', opacity: 0.4 }}>/</span>
                        <span>{String(totalSlides).padStart(2, '0')}</span>
                    </span>
                    <button
                        className={`nav-arrow ${currentSlide === totalSlides ? 'disabled' : ''}`}
                        onClick={() => scrollToSlide(currentSlide + 1)}
                        disabled={currentSlide === totalSlides}
                    >
                        <i className="fas fa-chevron-right"></i>
                    </button>
                </div>

                {/* Menu */}
                <div className="header-menu" ref={menuRef}>
                    <button
                        className="hamburger-btn"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="메뉴 열기"
                    >
                        <span className={`hamburger-icon ${isOpen ? 'open' : ''}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </button>

                    {isOpen && (
                        <div className="dropdown-menu">
                            <button
                                onClick={handleDownloadPDF}
                                className="dropdown-item"
                                disabled={isDownloading !== null}
                            >
                                <i className="fas fa-file-pdf"></i>
                                {isDownloading === 'pdf' ? 'PDF 생성 중...' : 'PDF 다운로드'}
                            </button>
                            <button
                                onClick={handleDownloadPPT}
                                className="dropdown-item"
                                disabled={isDownloading !== null}
                            >
                                <i className="fas fa-file-powerpoint"></i>
                                {isDownloading === 'ppt' ? 'PPT 생성 중...' : 'PPT 다운로드'}
                            </button>
                            <div className="dropdown-divider"></div>
                            <div className="dropdown-label">슬라이드 이동</div>
                            {[
                                { id: 1, title: '표지' },
                                { id: 2, title: '시장 니즈' },
                                { id: 3, title: '플랫폼 연동' },
                                { id: 4, title: '프로젝트 관리' },
                                { id: 5, title: '좌표계 설정' },
                                { id: 6, title: '클라우드 센터' },
                                { id: 7, title: '웹 CAD' },
                                { id: 8, title: '성과물 관리' },
                                { id: 9, title: '시스템 관리' },
                                { id: 10, title: '기대 효과' },
                                { id: 11, title: '마무리' },
                            ].map((slide) => (
                                <button
                                    key={slide.id}
                                    onClick={() => scrollToSlide(slide.id)}
                                    className="dropdown-item"
                                >
                                    <span className="slide-num">{String(slide.id).padStart(2, '0')}</span>
                                    {slide.title}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}
