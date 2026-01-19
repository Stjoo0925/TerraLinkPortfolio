'use client';

import React from 'react';

export default function IntegrationSlide() {
    return (
        <div className="grid-2" style={{ gap: '4rem' }}>
            {/* Left - Larger Image */}
            <div style={{
                position: 'relative'
            }}>
                {/* Background glow */}
                <div style={{
                    position: 'absolute',
                    top: '5%',
                    left: '5%',
                    width: '90%',
                    height: '90%',
                    background: 'linear-gradient(135deg, rgba(0, 92, 154, 0.2) 0%, rgba(77, 168, 199, 0.1) 100%)',
                    borderRadius: '24px',
                    filter: 'blur(30px)',
                    zIndex: 0
                }} />
                <div style={{
                    position: 'relative',
                    zIndex: 1,
                    background: '#1a1a2e',
                    borderRadius: '20px',
                    padding: '12px',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4)'
                }}>
                    <img
                        src="/테라링크이미지자료/3.png"
                        alt="TerraSurvey 연동 화면"
                        style={{
                            width: '100%',
                            height: 'auto',
                            minHeight: '360px',
                            objectFit: 'cover',
                            borderRadius: '12px'
                        }}
                    />
                </div>
            </div>

            {/* Right - Content */}
            <div>
                <span className="subtitle" style={{
                    background: 'linear-gradient(135deg, rgba(0, 92, 154, 0.1) 0%, rgba(77, 168, 199, 0.1) 100%)',
                    padding: '10px 20px',
                    borderRadius: '100px'
                }}>
                    Platform Synergy
                </span>
                <h2 style={{ marginTop: '1rem' }}>TerraSurvey 2025와<br />완벽한 데이터 연동</h2>
                <p style={{ marginBottom: '2rem', fontSize: '1.15rem' }}>
                    <strong style={{ color: 'var(--brand-blue)' }}>TerraSurvey2025 지원 측량 장비</strong>를 통해 관측된 모든 데이터는
                    클린한 상태로 TerraLink 클라우드에 실시간 동기화됩니다.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {[
                        { icon: 'fas fa-mobile-alt', title: 'Perfect Compatibility', desc: 'TerraSurvey 2025 사용자라면 즉시 연결', color: '#005c9a' },
                        { icon: 'fas fa-cloud-upload-alt', title: 'Real-time Sync', desc: '현장 관측과 동시에 사무실에서 데이터 확인', color: '#4da8c7' }
                    ].map((item, idx) => (
                        <div key={idx} style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1.5rem',
                            padding: '1.5rem',
                            background: 'white',
                            borderRadius: '16px',
                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
                            border: '1px solid rgba(0, 0, 0, 0.04)'
                        }}>
                            <div style={{
                                width: '56px',
                                height: '56px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                background: `linear-gradient(135deg, ${item.color}20, ${item.color}10)`,
                                borderRadius: '14px',
                                flexShrink: 0
                            }}>
                                <i className={item.icon} style={{ fontSize: '1.4rem', color: item.color }}></i>
                            </div>
                            <div>
                                <h4 style={{ marginBottom: '0.25rem', fontSize: '1.1rem' }}>{item.title}</h4>
                                <p style={{ fontSize: '0.95rem', marginBottom: 0 }}>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
