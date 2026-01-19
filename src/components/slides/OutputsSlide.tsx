'use client';

import React from 'react';

export default function OutputsSlide() {
    return (
        <>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                <span className="subtitle" style={{
                    background: 'linear-gradient(135deg, rgba(0, 92, 154, 0.1) 0%, rgba(77, 168, 199, 0.1) 100%)',
                    padding: '10px 20px',
                    borderRadius: '100px'
                }}>
                    SURVEY EXPORT
                </span>
                <h2 style={{ marginTop: '1rem' }}>다양한 형식의 성과물 도출</h2>
            </div>

            {/* Two Column Layout */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
                {/* Left - Report Export */}
                <div style={{
                    background: '#1a1a2e',
                    borderRadius: '16px',
                    padding: '12px',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.25)'
                }}>
                    <img
                        src="/테라링크이미지자료/11.png"
                        alt="보고서 내보내기"
                        style={{
                            width: '100%',
                            height: '220px',
                            objectFit: 'cover',
                            borderRadius: '10px'
                        }}
                    />
                    <p style={{
                        textAlign: 'center',
                        marginTop: '10px',
                        marginBottom: '4px',
                        color: 'rgba(255,255,255,0.8)',
                        fontSize: '0.9rem',
                        fontWeight: 500
                    }}>
                        측량 보고서 내보내기
                    </p>
                </div>

                {/* Right - Data Export */}
                <div style={{
                    background: '#1a1a2e',
                    borderRadius: '16px',
                    padding: '12px',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.25)'
                }}>
                    <img
                        src="/테라링크이미지자료/12.png"
                        alt="원시 데이터 내보내기"
                        style={{
                            width: '100%',
                            height: '220px',
                            objectFit: 'cover',
                            borderRadius: '10px'
                        }}
                    />
                    <p style={{
                        textAlign: 'center',
                        marginTop: '10px',
                        marginBottom: '4px',
                        color: 'rgba(255,255,255,0.8)',
                        fontSize: '0.9rem',
                        fontWeight: 500
                    }}>
                        원시 성과 데이터 내보내기
                    </p>
                </div>
            </div>

            {/* Format Support */}
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '1.5rem',
                flexWrap: 'wrap'
            }}>
                {[
                    { icon: 'fas fa-file-excel', label: 'Excel', color: '#27ae60' },
                    { icon: 'fas fa-table', label: 'CSV', color: '#9b59b6' },
                    { icon: 'fas fa-file-alt', label: 'TXT', color: '#7f8c8d' }
                ].map((item, idx) => (
                    <div key={idx} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        padding: '0.75rem 1.5rem',
                        background: 'white',
                        borderRadius: '12px',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.06)'
                    }}>
                        <i className={item.icon} style={{ color: item.color, fontSize: '1.3rem' }}></i>
                        <span style={{ fontWeight: 600, color: 'var(--text-main)' }}>{item.label}</span>
                    </div>
                ))}
            </div>
        </>
    );
}
