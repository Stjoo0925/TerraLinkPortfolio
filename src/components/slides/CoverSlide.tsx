'use client';

import React from 'react';

export default function CoverSlide() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            height: '100%',
            position: 'relative',
            width: '100%',
            zIndex: 10
        }}>
            {/* Dynamic Background Elements */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '60vw',
                height: '60vw',
                background: 'radial-gradient(circle, rgba(0, 92, 154, 0.08) 0%, rgba(255, 255, 255, 0) 70%)',
                zIndex: -1,
                pointerEvents: 'none'
            }} />

            <div className="fade-up">
                <span className="subtitle" style={{
                    background: 'rgba(255, 255, 255, 0.9)',
                    color: 'var(--brand-blue)',
                    padding: '12px 28px',
                    borderRadius: '100px',
                    backdropFilter: 'blur(20px)',
                    boxShadow: '0 4px 25px rgba(0, 92, 154, 0.15)',
                    border: '1px solid rgba(0, 92, 154, 0.1)',
                    marginBottom: '2.5rem',
                    fontSize: '1rem'
                }}>
                    스마트 측량 클라우드
                </span>
                <h1 style={{
                    fontSize: 'clamp(4rem, 8vw, 7.5rem)',
                    background: 'linear-gradient(135deg, #005c9a 0%, #4da8c7 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    marginTop: '0',
                    marginBottom: '2rem',
                    letterSpacing: '-0.04em',
                    lineHeight: 1.1,
                    filter: 'drop-shadow(0 4px 10px rgba(0, 92, 154, 0.2))'
                }}>TerraLink</h1>
                <p className="lead" style={{
                    marginBottom: '3.5rem',
                    maxWidth: '680px',
                    fontSize: '1.5rem',
                    color: '#475569',
                    lineHeight: 1.6
                }}>
                    현장 측량부터 클라우드 데이터 관리까지<br />
                    <span style={{
                        color: 'var(--brand-blue)',
                        fontWeight: 700,
                        background: 'linear-gradient(120deg, rgba(0,92,154,0.1) 0%, rgba(0,92,154,0.1) 100%)',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '100% 40%',
                        backgroundPosition: '0 90%'
                    }}>TerraSurvey 2025</span>와 함께하는 완벽한 워크플로우
                </p>
                <a
                    href="https://terra-link.co.kr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{
                        background: 'linear-gradient(135deg, #005c9a 0%, #004a7c 100%)',
                        boxShadow: '0 20px 40px rgba(0, 92, 154, 0.3)',
                        padding: '20px 56px',
                        fontSize: '1.25rem',
                        borderRadius: '16px',
                        border: '1px solid rgba(255,255,255,0.1)'
                    }}
                >
                    자세히 보기 <i className="fas fa-arrow-right" style={{ marginLeft: '12px' }}></i>
                </a>
            </div>
        </div>
    );
}
