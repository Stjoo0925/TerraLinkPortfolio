'use client';

import React from 'react';

export default function AdminSlide() {
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem' }}>
                <div>
                    <span className="subtitle" style={{
                        background: 'linear-gradient(135deg, rgba(0, 92, 154, 0.1) 0%, rgba(77, 168, 199, 0.1) 100%)',
                        padding: '10px 20px',
                        borderRadius: '100px'
                    }}>
                        SYSTEM ADMINISTRATION
                    </span>
                    <h2 style={{ marginTop: '1rem' }}>계정 및 시스템 관리</h2>
                </div>
                <p style={{ maxWidth: '380px', textAlign: 'right', fontSize: '1rem' }}>
                    사용자 계정과 권한 레벨을 정의하고<br />
                    회사의 소중한 데이터를 통합 관리합니다.
                </p>
            </div>

            {/* Two Column Layout */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                {/* Left - 회사 정보 관리 (13.png) */}
                <div style={{
                    background: '#1a1a2e',
                    borderRadius: '16px',
                    padding: '10px',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.25)'
                }}>
                    <img
                        src="/테라링크이미지자료/13.png"
                        alt="회사 정보 관리"
                        style={{
                            width: '100%',
                            height: '260px',
                            objectFit: 'cover',
                            borderRadius: '10px'
                        }}
                    />
                    <p style={{ textAlign: 'center', marginTop: '10px', color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem' }}>회사 기초 정보 정의</p>
                </div>

                {/* Right - 계정 관리 (14.png) */}
                <div style={{
                    background: '#1a1a2e',
                    borderRadius: '16px',
                    padding: '10px',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.25)'
                }}>
                    <img
                        src="/테라링크이미지자료/14.png"
                        alt="계정 관리"
                        style={{
                            width: '100%',
                            height: '260px',
                            objectFit: 'cover',
                            borderRadius: '10px'
                        }}
                    />
                    <p style={{ textAlign: 'center', marginTop: '10px', color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem' }}>사용자 계정 통합 관리</p>
                </div>
            </div>

            {/* Features Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginTop: '2rem' }}>
                {[
                    { icon: 'fas fa-building', title: '회사 관리', desc: '조직 기본 정보 설정' },
                    { icon: 'fas fa-user-plus', title: '계정 생성', desc: '신규 사용자 발급' },
                    { icon: 'fas fa-code', title: '측량 코드 관리', desc: '작업 표준 코드 체계화' },
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
