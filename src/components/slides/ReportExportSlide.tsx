'use client';

import React from 'react';

export default function ReportExportSlide() {
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
                        src="/테라링크이미지자료/보고서내보내기.png"
                        alt="보고서 내보내기"
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
                    REPORT EXPORT
                </span>
                <h2 style={{ marginTop: '1rem' }}>표준 양식의<br />측량 보고서 자동 생성</h2>
                <p style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>
                    좌표계, GNSS 현황/기준점, TotalStation 현황을 포함한
                    표준 양식의 보고서를 자동으로 생성합니다.
                </p>

                <div style={{
                    background: 'white',
                    borderRadius: '16px',
                    padding: '1.5rem',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)'
                }}>
                    <h4 style={{ marginBottom: '1rem' }}>지원 포맷</h4>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        {[
                            { icon: 'fas fa-file-pdf', label: 'PDF', color: '#e74c3c' },
                            { icon: 'fas fa-file-excel', label: 'Excel', color: '#27ae60' },
                            { icon: 'fas fa-file-word', label: 'HWP/Word', color: '#3498db' }
                        ].map((item, idx) => (
                            <div key={idx} style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                padding: '0.75rem 1.25rem',
                                background: `${item.color}10`,
                                borderRadius: '10px'
                            }}>
                                <i className={item.icon} style={{ color: item.color, fontSize: '1.2rem' }}></i>
                                <span style={{ fontWeight: 600, color: 'var(--text-main)' }}>{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
