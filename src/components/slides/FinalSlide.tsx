'use client';

import React from 'react';

export default function FinalSlide() {
    return (
        <div style={{ textAlign: 'center', position: 'relative' }}>
            {/* Decorative glow */}
            <div style={{
                position: 'absolute',
                top: '-150px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '800px',
                height: '800px',
                background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)',
                pointerEvents: 'none'
            }} />

            <h1 style={{
                fontSize: '5.5rem',
                marginBottom: '1.5rem',
                textShadow: '0 4px 30px rgba(0, 0, 0, 0.3)',
                letterSpacing: '-0.03em'
            }}>
                Link the Ground.
            </h1>
            <p style={{
                fontSize: '1.6rem',
                opacity: 0.9,
                marginBottom: '3rem',
                fontWeight: 400
            }}>
                TerraLink가 대한민국 측량 협업의 새로운 표준을 만듭니다.
            </p>

            <a
                href="https://terra-link.co.kr"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '12px',
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    borderRadius: '14px',
                    textDecoration: 'none',
                    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)',
                    transition: 'all 0.3s ease'
                }}
            >
            </a>

            <div style={{
                marginTop: '4rem',
                borderTop: '1px solid rgba(255,255,255,0.2)',
                paddingTop: '2rem',
                fontSize: '1rem',
                opacity: 0.7
            }}>
                문의: yuscon@yuscon.co.kr | 홈페이지: terra-link.co.kr
            </div>
        </div>
    );
}
