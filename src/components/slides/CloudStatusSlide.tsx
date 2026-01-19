'use client';

import React from 'react';

export default function CloudStatusSlide() {
    return (
        <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            {/* Header */}
            <div style={{ marginBottom: '28px' }}>
                <span className="label-tag" style={{ marginBottom: '16px', display: 'inline-block' }}>
                    실시간 현황
                </span>
                <h2 className="title-section">
                    언제 어디서나
                    <br />
                    현장 상황을 파악하세요
                </h2>
            </div>

            {/* Main Content - 2x2 Grid */}
            <div style={{
                flex: 1,
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gridTemplateRows: '1fr 1fr',
                gap: '20px'
            }}>
                {/* Card 1 - Live Status */}
                <div className="card" style={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '24px'
                }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        marginBottom: '16px'
                    }}>
                        <div style={{
                            width: '10px',
                            height: '10px',
                            borderRadius: '50%',
                            background: '#34C759',
                            boxShadow: '0 0 8px #34C759'
                        }} />
                        <span style={{
                            fontSize: '13px',
                            fontWeight: 600,
                            color: '#34C759'
                        }}>실시간</span>
                    </div>
                    <h4 style={{
                        fontSize: '17px',
                        fontWeight: 600,
                        color: 'var(--color-primary)',
                        marginBottom: '8px'
                    }}>
                        라이브 상태 모니터링
                    </h4>
                    <p style={{
                        fontSize: '13px',
                        color: 'var(--color-muted)',
                        lineHeight: 1.5,
                        flex: 1
                    }}>
                        현장 작업자의 관측 진행 상황을 실시간으로 확인합니다.
                    </p>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        marginTop: '12px'
                    }}>
                        <i className="fas fa-users" style={{ color: 'var(--color-accent)', fontSize: '14px' }}></i>
                        <span style={{ fontSize: '13px', color: 'var(--color-secondary)' }}>3명 작업 중</span>
                    </div>
                </div>

                {/* Card 2 - Map View */}
                <div style={{
                    background: '#1D1D1F',
                    borderRadius: '16px',
                    padding: '20px',
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        marginBottom: '12px'
                    }}>
                        <i className="fas fa-map-marked-alt" style={{ color: 'white', fontSize: '16px' }}></i>
                        <span style={{
                            fontSize: '14px',
                            fontWeight: 600,
                            color: 'white'
                        }}>위치 기반 뷰</span>
                    </div>
                    <div style={{
                        flex: 1,
                        borderRadius: '10px',
                        overflow: 'hidden',
                        background: '#2D2D2F'
                    }}>
                        <img
                            src="/테라링크이미지자료/현장사진등록.png"
                            alt="지도 뷰"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                opacity: 0.8
                            }}
                        />
                    </div>
                </div>

                {/* Card 3 - Notifications */}
                <div className="card" style={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '24px'
                }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        marginBottom: '16px'
                    }}>
                        <i className="fas fa-bell" style={{ color: 'var(--color-accent)', fontSize: '16px' }}></i>
                        <span style={{
                            fontSize: '14px',
                            fontWeight: 600,
                            color: 'var(--color-primary)'
                        }}>알림 시스템</span>
                    </div>
                    <div style={{ flex: 1 }}>
                        {[
                            { text: '새 측점 데이터 업로드됨', time: '방금 전' },
                            { text: '보고서 생성 완료', time: '5분 전' },
                            { text: '프로젝트 A 관측 완료', time: '12분 전' }
                        ].map((item, idx) => (
                            <div key={idx} style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                padding: '10px 0',
                                borderBottom: idx < 2 ? '1px solid rgba(0,0,0,0.04)' : 'none'
                            }}>
                                <span style={{ fontSize: '13px', color: 'var(--color-primary)' }}>{item.text}</span>
                                <span style={{ fontSize: '11px', color: 'var(--color-secondary)' }}>{item.time}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Card 4 - Stats */}
                <div style={{
                    background: 'linear-gradient(135deg, var(--color-accent) 0%, #0077ED 100%)',
                    borderRadius: '16px',
                    padding: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    textAlign: 'center'
                }}>
                    <p style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '48px',
                        fontWeight: 900,
                        color: 'white',
                        letterSpacing: '-0.03em',
                        marginBottom: '8px'
                    }}>
                        2.3<span style={{ fontSize: '24px', opacity: 0.8 }}>초</span>
                    </p>
                    <p style={{
                        fontSize: '14px',
                        color: 'rgba(255,255,255,0.9)',
                        fontWeight: 500
                    }}>
                        평균 데이터 동기화 시간
                    </p>
                    <p style={{
                        fontSize: '12px',
                        color: 'rgba(255,255,255,0.6)',
                        marginTop: '8px'
                    }}>
                        현장에서 사무실까지
                    </p>
                </div>
            </div>
        </div>
    );
}
