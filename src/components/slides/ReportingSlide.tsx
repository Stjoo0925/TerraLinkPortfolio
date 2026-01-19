'use client';

import React from 'react';

export default function ReportingSlide() {
    return (
        <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            {/* Header */}
            <div style={{ marginBottom: '28px' }}>
                <span className="label-tag" style={{ marginBottom: '16px', display: 'inline-block' }}>
                    문서 자동화
                </span>
                <h2 className="title-section">
                    보고서 작성,
                    <br />
                    이제 1분이면 충분합니다
                </h2>
            </div>

            {/* Main Content */}
            <div style={{
                flex: 1,
                display: 'grid',
                gridTemplateColumns: '1fr 1.2fr',
                gap: '24px'
            }}>
                {/* Left - Description */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                }}>
                    {/* Top - Process Steps */}
                    <div style={{
                        background: 'var(--color-surface)',
                        borderRadius: '16px',
                        padding: '24px',
                        marginBottom: '16px'
                    }}>
                        <h4 style={{
                            fontSize: '15px',
                            fontWeight: 600,
                            color: 'var(--color-primary)',
                            marginBottom: '20px'
                        }}>
                            자동화 프로세스
                        </h4>
                        {[
                            { step: '01', text: '프로젝트 선택' },
                            { step: '02', text: '보고서 템플릿 지정' },
                            { step: '03', text: 'PDF 다운로드' }
                        ].map((item, idx) => (
                            <div key={idx} style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '14px',
                                padding: '12px 0',
                                borderBottom: idx < 2 ? '1px solid rgba(0,0,0,0.04)' : 'none'
                            }}>
                                <span style={{
                                    fontFamily: 'var(--font-display)',
                                    fontSize: '12px',
                                    fontWeight: 700,
                                    color: 'var(--color-accent)',
                                    width: '24px'
                                }}>
                                    {item.step}
                                </span>
                                <span style={{
                                    fontSize: '14px',
                                    fontWeight: 500,
                                    color: 'var(--color-primary)'
                                }}>
                                    {item.text}
                                </span>
                                {idx < 2 && (
                                    <i className="fas fa-chevron-down" style={{
                                        marginLeft: 'auto',
                                        fontSize: '10px',
                                        color: 'var(--color-secondary)'
                                    }}></i>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Bottom - Benefit Cards */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '12px',
                        flex: 1
                    }}>
                        {[
                            { icon: 'fas fa-clock', value: '90%', label: '시간 절약' },
                            { icon: 'fas fa-check-circle', value: '100%', label: '양식 준수' }
                        ].map((stat, idx) => (
                            <div key={idx} className="card" style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign: 'center',
                                padding: '20px'
                            }}>
                                <i className={stat.icon} style={{
                                    fontSize: '20px',
                                    color: 'var(--color-accent)',
                                    marginBottom: '12px'
                                }}></i>
                                <p style={{
                                    fontFamily: 'var(--font-display)',
                                    fontSize: '28px',
                                    fontWeight: 900,
                                    color: 'var(--color-primary)',
                                    letterSpacing: '-0.02em'
                                }}>
                                    {stat.value}
                                </p>
                                <p style={{
                                    fontSize: '12px',
                                    color: 'var(--color-muted)',
                                    marginTop: '4px'
                                }}>
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right - Report Preview */}
                <div style={{
                    background: '#1D1D1F',
                    borderRadius: '20px',
                    padding: '20px',
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    {/* Header Bar */}
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        marginBottom: '16px',
                        paddingLeft: '4px'
                    }}>
                        <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#FF5F56' }} />
                        <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#FFBD2E' }} />
                        <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27CA40' }} />
                        <span style={{
                            marginLeft: 'auto',
                            fontSize: '12px',
                            color: 'rgba(255,255,255,0.5)'
                        }}>
                            측량_보고서_v2.pdf
                        </span>
                    </div>

                    {/* Preview Image */}
                    <div style={{
                        flex: 1,
                        borderRadius: '10px',
                        overflow: 'hidden',
                        background: '#2D2D2F'
                    }}>
                        <img
                            src="/테라링크이미지자료/보고서내보내기.png"
                            alt="보고서 미리보기"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover'
                            }}
                        />
                    </div>

                    {/* Footer */}
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginTop: '16px',
                        paddingTop: '12px',
                        borderTop: '1px solid rgba(255,255,255,0.1)'
                    }}>
                        <span style={{
                            fontSize: '12px',
                            color: 'rgba(255,255,255,0.6)'
                        }}>
                            국토교통부 공인 양식
                        </span>
                        <button style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '8px 16px',
                            background: 'var(--color-accent)',
                            border: 'none',
                            borderRadius: '8px',
                            color: 'white',
                            fontSize: '12px',
                            fontWeight: 600,
                            cursor: 'pointer'
                        }}>
                            <i className="fas fa-download"></i>
                            다운로드
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
