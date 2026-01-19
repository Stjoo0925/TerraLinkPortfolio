'use client';

import React from 'react';

export default function CloudStorageSlide() {
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem' }}>
                <div>
                    <span className="subtitle" style={{
                        background: 'linear-gradient(135deg, rgba(0, 92, 154, 0.1) 0%, rgba(77, 168, 199, 0.1) 100%)',
                        padding: '10px 20px',
                        borderRadius: '100px'
                    }}>
                        CLOUD STORAGE
                    </span>
                    <h2 style={{ marginTop: '1rem' }}>데이터 통합 저장 및 관리</h2>
                </div>
                <p style={{ maxWidth: '380px', textAlign: 'right', fontSize: '1rem' }}>
                    측량 성과 파일을 클라우드에 안전하게 저장하고<br />
                    팀원과 손쉽게 공유합니다.
                </p>
            </div>

            {/* Two Column Layout */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                {/* Left - Image */}
                <div style={{
                    background: '#1a1a2e',
                    borderRadius: '16px',
                    padding: '10px',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.25)'
                }}>
                    <img
                        src="/테라링크이미지자료/15.png"
                        alt="클라우드 파일 관리"
                        style={{
                            width: '100%',
                            height: '260px',
                            objectFit: 'cover',
                            borderRadius: '10px'
                        }}
                    />
                </div>

                {/* Right - Image */}
                <div style={{
                    background: '#1a1a2e',
                    borderRadius: '16px',
                    padding: '10px',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.25)'
                }}>
                    <img
                        src="/테라링크이미지자료/7.png"
                        alt="파일 관리 시스템"
                        style={{
                            width: '100%',
                            height: '260px',
                            objectFit: 'cover',
                            borderRadius: '10px'
                        }}
                    />
                </div>
            </div>

            {/* Features Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', marginTop: '2rem' }}>
                {[
                    { icon: 'fas fa-database', title: '좌표 데이터 관리', desc: '일괄 저장/관리' },
                    { icon: 'fas fa-history', title: '버전 관리', desc: '파일 이력 추적' },
                    { icon: 'fas fa-search', title: '빠른 검색', desc: '태그/날짜별' },
                    { icon: 'fas fa-share-alt', title: '손쉬운 공유', desc: '링크 생성 지원' }
                ].map((item, idx) => (
                    <div key={idx} style={{
                        background: 'white',
                        borderRadius: '14px',
                        padding: '1.25rem',
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.06)',
                        textAlign: 'center'
                    }}>
                        <div style={{
                            width: '44px',
                            height: '44px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: 'linear-gradient(135deg, #005c9a 0%, #4da8c7 100%)',
                            borderRadius: '12px',
                            margin: '0 auto 0.75rem',
                            boxShadow: '0 4px 12px rgba(0, 92, 154, 0.25)'
                        }}>
                            <i className={item.icon} style={{ fontSize: '1rem', color: 'white' }}></i>
                        </div>
                        <h4 style={{ fontSize: '0.95rem', marginBottom: '0.3rem' }}>{item.title}</h4>
                        <p style={{ fontSize: '0.8rem', marginBottom: 0 }}>{item.desc}</p>
                    </div>
                ))}
            </div>
        </>
    );
}
