'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { downloadPDF } from '@/lib/download';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isDownloading, setIsDownloading] = useState<string | null>(null);
    const [currentSlide, setCurrentSlide] = useState(1);
    const menuRef = useRef<HTMLDivElement>(null);

    const totalSlides = 12;

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
            const slideWidth = wrapper.clientWidth;
            wrapper.scrollTo({
                left: (slideNum - 1) * slideWidth,
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
        alert('추후 제공 예정입니다.');
        setIsOpen(false);
    };

    return (
        <header className="fixed top-0 left-0 right-0 h-16 bg-white/90 backdrop-blur-[20px] border-b border-black/5 flex items-center justify-between px-10 z-1000 print:hidden">
            <button
                onClick={() => scrollToSlide(1)}
                className="text-xl font-black text-brand-blue tracking-tighter cursor-pointer"
            >
                TerraLink
            </button>

            <div className="flex items-center gap-4">
                {/* Navigation */}
                <div className="flex items-center gap-2 bg-bg-gray px-4 py-2 rounded-full">
                    <button
                        className={`w-8 h-8 flex items-center justify-center text-text-main rounded-full transition-all text-sm hover:bg-black/5 ${currentSlide === 1 ? 'opacity-30 pointer-events-none' : ''}`}
                        onClick={() => scrollToSlide(currentSlide - 1)}
                        disabled={currentSlide === 1}
                    >
                        <i className="fas fa-chevron-left"></i>
                    </button>
                    <span className="text-sm font-semibold text-text-muted min-w-[50px] text-center">
                        <span className="text-text-main font-bold">{String(currentSlide).padStart(2, '0')}</span>
                        <span className="mx-1 opacity-40">/</span>
                        <span>{String(totalSlides).padStart(2, '0')}</span>
                    </span>
                    <button
                        className={`w-8 h-8 flex items-center justify-center text-text-main rounded-full transition-all text-sm hover:bg-black/5 ${currentSlide === totalSlides ? 'opacity-30 pointer-events-none' : ''}`}
                        onClick={() => scrollToSlide(currentSlide + 1)}
                        disabled={currentSlide === totalSlides}
                    >
                        <i className="fas fa-chevron-right"></i>
                    </button>
                </div>

                {/* Menu */}
                <div className="relative" ref={menuRef}>
                    <button
                        className="w-11 h-11 flex items-center justify-center bg-transparent border-none cursor-pointer rounded-xl transition-all hover:bg-bg-gray"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="메뉴 열기"
                    >
                        <span className="w-5 h-[14px] flex flex-col justify-between">
                            <span className={`block w-full h-0.5 bg-text-main rounded-[1px] transition-all duration-250 ${isOpen ? 'rotate-45 translate-x-1 translate-y-1' : ''}`}></span>
                            <span className={`block w-full h-0.5 bg-text-main rounded-[1px] transition-all duration-250 ${isOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`block w-full h-0.5 bg-text-main rounded-[1px] transition-all duration-250 ${isOpen ? '-rotate-45 translate-x-1 -translate-y-1' : ''}`}></span>
                        </span>
                    </button>

                    {isOpen && (
                        <div className="absolute top-[calc(100%+8px)] right-0 w-[240px] bg-white rounded-2xl shadow-xl border border-border-light p-2 z-1001">
                            <button
                                onClick={handleDownloadPDF}
                                className="flex items-center gap-3 w-full p-3 bg-transparent border-none text-sm font-medium text-text-main rounded-xl cursor-pointer transition-all hover:bg-bg-gray disabled:opacity-50"
                                disabled={isDownloading !== null}
                            >
                                <i className="fas fa-file-pdf w-5 text-text-muted"></i>
                                {isDownloading === 'pdf' ? 'PDF 생성 중...' : 'PDF 다운로드'}
                            </button>
                            <button
                                onClick={handleDownloadPPT}
                                className="flex items-center gap-3 w-full p-3 bg-transparent border-none text-sm font-medium text-text-main rounded-xl cursor-pointer transition-all hover:bg-bg-gray disabled:opacity-50"
                                disabled={isDownloading !== null}
                            >
                                <i className="fas fa-file-powerpoint w-5 text-text-muted"></i>
                                {isDownloading === 'ppt' ? 'PPT 생성 중...' : 'PPT 다운로드'}
                            </button>
                            <div className="h-px bg-border-light my-2"></div>
                            <div className="px-3.5 pt-2.5 pb-1.5 text-[11px] font-bold text-text-muted uppercase tracking-wider">슬라이드 이동</div>
                            {[
                                { id: 1, title: '표지' },
                                { id: 2, title: '시장 니즈' },
                                { id: 3, title: '플랫폼 연동' },
                                { id: 4, title: '프로젝트 관리' },
                                { id: 5, title: '좌표계 설정' },
                                { id: 6, title: '클라우드 센터' },
                                { id: 7, title: '데이터 관리' },
                                { id: 8, title: '웹 CAD' },
                                { id: 9, title: '성과물 관리' },
                                { id: 10, title: '시스템 관리' },
                                { id: 11, title: '기대 효과' },
                                { id: 12, title: '마무리' },
                            ].map((slide) => (
                                <button
                                    key={slide.id}
                                    onClick={() => scrollToSlide(slide.id)}
                                    className="flex items-center gap-3 w-full p-3 bg-transparent border-none text-sm font-medium text-text-main rounded-xl cursor-pointer transition-all hover:bg-bg-gray"
                                >
                                    <span className="font-bold text-text-muted min-w-[24px]">{String(slide.id).padStart(2, '0')}</span>
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
