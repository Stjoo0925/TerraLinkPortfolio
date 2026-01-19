'use client';

import React from 'react';

export default function ExpectationsSlide() {
    const stats = [
        {
            value: '40',
            unit: '%',
            label: '업무 생산성 향상',
            desc: '데이터 재입력 및 후처리 시간 단축',
            gradient: 'linear-gradient(135deg, #005c9a 0%, #4da8c7 100%)'
        },
        {
            value: '0',
            unit: '%',
            label: '데이터 유실 제로',
            desc: '클라우드 자동 동기화로 이력 보존',
            gradient: 'linear-gradient(135deg, #27ae60 0%, #2ecc71 100%)'
        },
        {
            value: '100',
            unit: '%',
            label: '협업의 투명성',
            desc: '실시간 현장 데이터 공유 및 검토',
            gradient: 'linear-gradient(135deg, #9b59b6 0%, #8e44ad 100%)'
        }
    ];

    return (
        <div style={{ textAlign: 'center' }}>
            <span className="subtitle" style={{
                background: 'linear-gradient(135deg, rgba(0, 92, 154, 0.1) 0%, rgba(77, 168, 199, 0.1) 100%)',
                padding: '10px 20px',
                borderRadius: '100px'
            }}>
                Expectations
            </span>
            <h2 style={{ marginTop: '1rem' }}>TerraLink 도입으로 얻는 가치</h2>

            <div className="grid-3" style={{ marginTop: '4rem' }}>
                {stats.map((stat, idx) => (
                    <div
                        key={idx}
                        className="fade-up"
                        style={{
                            animationDelay: `${idx * 0.15}s`,
                            background: 'white',
                            borderRadius: '24px',
                            padding: '3rem 2rem',
                            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)'
                        }}
                    >
                        <div style={{
                            display: 'flex',
                            alignItems: 'baseline',
                            justifyContent: 'center',
                            marginBottom: '1rem'
                        }}>
                            <span style={{
                                fontSize: '5rem',
                                fontWeight: 900,
                                background: stat.gradient,
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                letterSpacing: '-0.04em',
                                lineHeight: 1
                            }}>
                                {stat.value}
                            </span>
                            <span style={{
                                fontSize: '2rem',
                                fontWeight: 700,
                                background: stat.gradient,
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text'
                            }}>
                                {stat.unit}
                            </span>
                        </div>
                        <p style={{ marginTop: '1rem' }}>
                            <strong style={{ color: 'var(--text-main)', fontSize: '1.15rem', display: 'block', marginBottom: '0.5rem' }}>
                                {stat.label}
                            </strong>
                            <span style={{ fontSize: '0.95rem' }}>{stat.desc}</span>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
