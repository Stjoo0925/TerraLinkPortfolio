'use client';

import React from 'react';

export default function DataManagementSlide() {
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem' }}>
                <div>
                    <span className="subtitle" style={{
                        background: 'linear-gradient(135deg, rgba(0, 92, 154, 0.1) 0%, rgba(77, 168, 199, 0.1) 100%)',
                        padding: '10px 20px',
                        borderRadius: '100px'
                    }}>
                        DATA MANAGEMENT
                    </span>
                    <h2 style={{ marginTop: '1rem' }}>측량 데이터 통합 관리</h2>
                </div>
                <p style={{ maxWidth: '420px', textAlign: 'right', fontSize: '1rem' }}>
                    GNSS 및 T/S(토탈스테이션) 등<br />
                    모든 측량 데이터를 한눈에 관리합니다.
                </p>
            </div>

            {/* Three Column Layout with Images */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
                {/* Column 1 - 현황/속성 */}
                <div style={{
                    background: 'white',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
                }}>
                    <div style={{
                        background: '#1a1a2e',
                        padding: '8px'
                    }}>
                        <img
                            src="/테라링크이미지자료/8.png"
                            alt="현황/속성 관리"
                            style={{
                                width: '100%',
                                height: '160px',
                                objectFit: 'cover',
                                borderRadius: '8px'
                            }}
                        />
                    </div>
                    <div style={{ padding: '1.25rem' }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            marginBottom: '0.75rem'
                        }}>
                            <div style={{
                                width: '36px',
                                height: '36px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                background: 'linear-gradient(135deg, #005c9a 0%, #4da8c7 100%)',
                                borderRadius: '10px',
                                boxShadow: '0 4px 12px rgba(0, 92, 154, 0.25)'
                            }}>
                                <i className="fas fa-chart-bar" style={{ fontSize: '0.9rem', color: 'white' }}></i>
                            </div>
                            <h4 style={{ fontSize: '1rem', margin: 0 }}>현황/속성</h4>
                        </div>
                        <p style={{ fontSize: '0.85rem', margin: 0, lineHeight: '1.5' }}>
                            GNSS 및 T/S(토탈스테이션) 데이터<br />
                            통합 수량 현황 및 속성 관리
                        </p>
                    </div>
                </div>

                {/* Column 2 - 성과 개요 */}
                <div style={{
                    background: 'white',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
                }}>
                    <div style={{
                        background: '#1a1a2e',
                        padding: '8px'
                    }}>
                        <img
                            src="/테라링크이미지자료/9.png"
                            alt="성과 개요"
                            style={{
                                width: '100%',
                                height: '160px',
                                objectFit: 'cover',
                                borderRadius: '8px'
                            }}
                        />
                    </div>
                    <div style={{ padding: '1.25rem' }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            marginBottom: '0.75rem'
                        }}>
                            <div style={{
                                width: '36px',
                                height: '36px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                background: 'linear-gradient(135deg, #005c9a 0%, #4da8c7 100%)',
                                borderRadius: '10px',
                                boxShadow: '0 4px 12px rgba(0, 92, 154, 0.25)'
                            }}>
                                <i className="fas fa-list-alt" style={{ fontSize: '0.9rem', color: 'white' }}></i>
                            </div>
                            <h4 style={{ fontSize: '1rem', margin: 0 }}>성과 개요</h4>
                        </div>
                        <p style={{ fontSize: '0.85rem', margin: 0, lineHeight: '1.5' }}>
                            측량 성과 목록을 테이블 형태로<br />
                            상세 정보와 함께 관리
                        </p>
                    </div>
                </div>

                {/* Column 3 - 기준점 */}
                <div style={{
                    background: 'white',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
                }}>
                    <div style={{
                        background: '#1a1a2e',
                        padding: '8px'
                    }}>
                        <img
                            src="/테라링크이미지자료/10.png"
                            alt="기준점 관리"
                            style={{
                                width: '100%',
                                height: '160px',
                                objectFit: 'cover',
                                borderRadius: '8px'
                            }}
                        />
                    </div>
                    <div style={{ padding: '1.25rem' }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            marginBottom: '0.75rem'
                        }}>
                            <div style={{
                                width: '36px',
                                height: '36px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                background: 'linear-gradient(135deg, #005c9a 0%, #4da8c7 100%)',
                                borderRadius: '10px',
                                boxShadow: '0 4px 12px rgba(0, 92, 154, 0.25)'
                            }}>
                                <i className="fas fa-crosshairs" style={{ fontSize: '0.9rem', color: 'white' }}></i>
                            </div>
                            <h4 style={{ fontSize: '1rem', margin: 0 }}>기준점</h4>
                        </div>
                        <p style={{ fontSize: '0.85rem', margin: 0, lineHeight: '1.5' }}>
                            삼각점/수준점 등 기준점 좌표<br />
                            데이터 등록 및 조회
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom Features */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', marginTop: '1.5rem' }}>
                {[
                    { icon: 'fas fa-th-list', title: '통합 현황판', desc: '장비별 데이터 집계' },
                    { icon: 'fas fa-filter', title: '다양한 필터', desc: '날짜/타입/상태별' },
                    { icon: 'fas fa-file-export', title: '내보내기', desc: 'Excel/CSV 지원' },
                    { icon: 'fas fa-sync-alt', title: '실시간 동기화', desc: '현장 데이터 연동' }
                ].map((item, idx) => (
                    <div key={idx} style={{
                        background: 'white',
                        borderRadius: '14px',
                        padding: '1rem',
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.06)',
                        textAlign: 'center'
                    }}>
                        <div style={{
                            width: '40px',
                            height: '40px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: 'linear-gradient(135deg, #005c9a 0%, #4da8c7 100%)',
                            borderRadius: '10px',
                            margin: '0 auto 0.6rem',
                            boxShadow: '0 4px 12px rgba(0, 92, 154, 0.25)'
                        }}>
                            <i className={item.icon} style={{ fontSize: '0.9rem', color: 'white' }}></i>
                        </div>
                        <h4 style={{ fontSize: '0.9rem', marginBottom: '0.25rem' }}>{item.title}</h4>
                        <p style={{ fontSize: '0.75rem', marginBottom: 0 }}>{item.desc}</p>
                    </div>
                ))}
            </div>
        </>
    );
}
