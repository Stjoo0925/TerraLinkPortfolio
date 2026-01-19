'use client';

import React from 'react';

export default function CoordinateSlide() {
    return (
        <div className="grid-2" style={{ gap: '4rem' }}>
            {/* Left - Content */}
            <div>
                <span className="subtitle" style={{
                    background: 'linear-gradient(135deg, rgba(0, 92, 154, 0.1) 0%, rgba(77, 168, 199, 0.1) 100%)',
                    padding: '10px 20px',
                    borderRadius: '100px'
                }}>
                    COORDINATE SYSTEM
                </span>
                <h2 style={{ marginTop: '1rem' }}>다양한 좌표계를<br />자유롭게 설정</h2>
                <p style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>
                    프로젝트별로 좌표계를 설정하여 데이터의 일관성을 유지하고,
                    팀 전체가 동일한 기준으로 작업할 수 있습니다.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {[
                        { code: 'UTM-K', name: 'Korea 2000 / Unified CS', desc: '대한민국 통합 좌표계' },
                        { code: 'EPSG:5186', name: 'Korea 2000 / Central Belt', desc: '중부원점 좌표계' },
                        { code: 'EPSG:5187', name: 'Korea 2000 / East Belt', desc: '동부원점 좌표계' }
                    ].map((item, idx) => (
                        <div key={idx} style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                            padding: '1.25rem',
                            background: 'white',
                            borderRadius: '14px',
                            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.06)',
                            border: '1px solid rgba(0, 0, 0, 0.04)'
                        }}>
                            <div style={{
                                padding: '8px 14px',
                                background: 'linear-gradient(135deg, #005c9a 0%, #4da8c7 100%)',
                                borderRadius: '8px',
                                color: 'white',
                                fontWeight: 700,
                                fontSize: '0.85rem',
                                flexShrink: 0
                            }}>
                                {item.code}
                            </div>
                            <div>
                                <h4 style={{ fontSize: '1rem', marginBottom: '0.2rem' }}>{item.name}</h4>
                                <p style={{ fontSize: '0.9rem', marginBottom: 0 }}>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right - Image */}
            <div style={{ position: 'relative' }}>
                <div style={{
                    position: 'absolute',
                    top: '10%',
                    right: '5%',
                    width: '80%',
                    height: '80%',
                    background: 'linear-gradient(135deg, rgba(0, 92, 154, 0.15) 0%, rgba(77, 168, 199, 0.1) 100%)',
                    borderRadius: '24px',
                    filter: 'blur(40px)',
                    zIndex: 0
                }} />
                <div style={{
                    position: 'relative',
                    zIndex: 1,
                    background: '#1a1a2e',
                    borderRadius: '20px',
                    padding: '12px',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.35)'
                }}>
                    <img
                        src="/테라링크이미지자료/6.png"
                        alt="좌표계 설정 화면"
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
        </div>
    );
}
