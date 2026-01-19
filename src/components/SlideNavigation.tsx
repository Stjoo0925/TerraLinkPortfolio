'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SlideNavigationProps {
    currentSlide: number;
    totalSlides?: number;
}

export default function SlideNavigation({ currentSlide, totalSlides = 9 }: SlideNavigationProps) {
    const pathname = usePathname();

    const prevSlide = currentSlide > 1 ? (currentSlide === 2 ? '/' : `/slides/${currentSlide - 1}`) : null;
    const nextSlide = currentSlide < totalSlides ? `/slides/${currentSlide + 1}` : null;

    return (
        <div className="slide-navigation">
            {prevSlide ? (
                <Link href={prevSlide} className="nav-btn nav-prev">
                    <i className="fas fa-chevron-left"></i>
                    <span>이전</span>
                </Link>
            ) : (
                <div className="nav-btn nav-disabled">
                    <i className="fas fa-chevron-left"></i>
                    <span>이전</span>
                </div>
            )}



            {nextSlide ? (
                <Link href={nextSlide} className="nav-btn nav-next">
                    <span>다음</span>
                    <i className="fas fa-chevron-right"></i>
                </Link>
            ) : (
                <div className="nav-btn nav-disabled">
                    <span>다음</span>
                    <i className="fas fa-chevron-right"></i>
                </div>
            )}
        </div>
    );
}
