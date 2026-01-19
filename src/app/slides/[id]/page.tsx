'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { use } from 'react';

interface PageProps {
    params: Promise<{ id: string }>;
}

export default function SlidePage({ params }: PageProps) {
    const router = useRouter();
    const resolvedParams = use(params);
    const slideId = parseInt(resolvedParams.id, 10);

    useEffect(() => {
        // Redirect to main page and scroll to the slide
        router.replace('/');

        // After redirect, scroll to the slide
        setTimeout(() => {
            const wrapper = document.querySelector('.scroll-wrapper');
            if (wrapper && !isNaN(slideId)) {
                wrapper.scrollTo({
                    left: (slideId - 1) * window.innerWidth,
                    behavior: 'smooth'
                });
            }
        }, 100);
    }, [router, slideId]);

    return null;
}
