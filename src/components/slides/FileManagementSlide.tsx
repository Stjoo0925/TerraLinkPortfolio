'use client';

import React from 'react';

export default function FileManagementSlide() {
    return (
        <div className="grid-2" style={{ gap: '4rem' }}>
            {/* Left - Image */}
            <div style={{ position: 'relative' }}>
                <div style={{
                    position: 'absolute',
                    top: '10%',
                    left: '5%',
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
                        src="/테라링크이미지자료/파일관리시스템.png"
                        alt="파일 관리 시스템"
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
                    FILE MANAGEMENT
                </span>
                <h2 style={{ marginTop: '1rem' }}>체계적인<br />파일 관리 시스템</h2>
                <p style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>
                    측량 성과 파일을 클라우드에 안전하게 저장하고
                    팀원과 손쉽게 공유합니다.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {[
                        { icon: 'fas fa-filter', title: '확장자별 필터링', desc: '.dwg, .dxf 등 주요 파일 형식 분류' },
                        { icon: 'fas fa-database', title: '하이브리드 저장소', desc: 'DB 기록과 물리 파일의 연동 관리' },
                        { icon: 'fas fa-sync', title: '파일 서버 동기화', desc: '실시간 데이터 Sync 및 안전한 보관' }
                    ].map((item, idx) => (
                        <div key={idx} style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                            padding: '1.25rem',
                            background: 'white',
                            borderRadius: '14px',
                            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.06)'
                        }}>
                            <div style={{
                                width: '48px',
                                height: '48px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                background: 'linear-gradient(135deg, #005c9a 0%, #4da8c7 100%)',
                                borderRadius: '12px',
                                flexShrink: 0
                            }}>
                                <i className={item.icon} style={{ fontSize: '1.1rem', color: 'white' }}></i>
                            </div>
                            <div>
                                <h4 style={{ fontSize: '1rem', marginBottom: '0.2rem' }}>{item.title}</h4>
                                <p style={{ fontSize: '0.9rem', marginBottom: 0 }}>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
