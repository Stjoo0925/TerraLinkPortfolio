'use client';

import React from 'react';

export default function DataExportSlide() {
    return (
        <div className="grid-2" style={{ gap: '4rem' }}>
            {/* Left - Content */}
            <div>
                <span className="subtitle" style={{
                    background: 'linear-gradient(135deg, rgba(0, 92, 154, 0.1) 0%, rgba(77, 168, 199, 0.1) 100%)',
                    padding: '10px 20px',
                    borderRadius: '100px'
                }}>
                    DATA EXPORT
                </span>
                <h2 style={{ marginTop: '1rem' }}>원시 성과 데이터<br />다양한 포맷으로 내보내기</h2>
                <p style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>
                    CSV, TXT, DXF 등 다양한 포맷으로 데이터를 내보내
                    CAD 및 오피스 소프트웨어와 원활하게 연동합니다.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    {[
                        { icon: 'fas fa-table', title: 'CSV/TXT', desc: '좌표 데이터' },
                        { icon: 'fas fa-drafting-compass', title: 'DXF', desc: 'CAD 도면' },
                        { icon: 'fas fa-file-excel', title: 'Excel', desc: '스프레드시트' },
                        { icon: 'fas fa-file-archive', title: 'ZIP', desc: '일괄 내보내기' }
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
                                background: 'linear-gradient(135deg, #005c9a15, #4da8c715)',
                                borderRadius: '12px'
                            }}>
                                <i className={item.icon} style={{ fontSize: '1.2rem', color: 'var(--brand-blue)' }}></i>
                            </div>
                            <div>
                                <h4 style={{ fontSize: '1rem', marginBottom: '0.2rem' }}>{item.title}</h4>
                                <p style={{ fontSize: '0.85rem', marginBottom: 0 }}>{item.desc}</p>
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
                        src="/테라링크이미지자료/원시데이터내보내기.png"
                        alt="원시 데이터 내보내기"
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
