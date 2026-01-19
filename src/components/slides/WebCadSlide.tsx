'use client';

import React from 'react';

export default function WebCadSlide() {
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem' }}>
                <div>
                    <span className="subtitle" style={{
                        background: 'linear-gradient(135deg, rgba(0, 92, 154, 0.1) 0%, rgba(77, 168, 199, 0.1) 100%)',
                        padding: '10px 20px',
                        borderRadius: '100px'
                    }}>
                        WEB CAD
                    </span>
                    <h2 style={{ marginTop: '1rem' }}>클라우드 기반 CAD 도면 편집</h2>
                </div>
                <p style={{ maxWidth: '400px', textAlign: 'right', fontSize: '1.05rem' }}>
                    브라우저에서 직접 측량 도면을<br />
                    확인하고 편집할 수 있습니다.
                </p>
            </div>

            {/* Main CAD Preview */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gap: '1.25rem',
                marginBottom: '1.5rem'
            }}>
                {[
                    { img: '/웹캐드/1.png', label: '측점 데이터 확인' },
                    { img: '/웹캐드/2.png', label: '면적 계산' },
                    { img: '/웹캐드/3.png', label: '지적도 설정' }
                ].map((item, idx) => (
                    <div key={idx} style={{
                        background: '#1a1a2e',
                        borderRadius: '16px',
                        padding: '10px',
                        boxShadow: '0 15px 40px rgba(0, 0, 0, 0.2)'
                    }}>
                        <img
                            src={item.img}
                            alt={item.label}
                            style={{
                                width: '100%',
                                height: '200px',
                                objectFit: 'cover',
                                borderRadius: '10px'
                            }}
                        />
                        <p style={{
                            textAlign: 'center',
                            marginTop: '12px',
                            marginBottom: '4px',
                            fontSize: '0.9rem',
                            color: 'rgba(255,255,255,0.8)',
                            fontWeight: 500
                        }}>
                            {item.label}
                        </p>
                    </div>
                ))}
            </div>

            {/* Features */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '1rem'
            }}>
                {[
                    { icon: 'fas fa-draw-polygon', title: '브라우저 편집', desc: '웹에서 직접 도면 정밀 수정' },
                    { icon: 'fas fa-file-code', title: 'DWG/DXF 호환', desc: '표준 CAD 포맷 완벽 판독' },
                    { icon: 'fas fa-layer-group', title: '레이어 관리', desc: '개별 레이어 제어 및 분석' },
                    { icon: 'fas fa-rocket', title: '무설치 엔진', desc: '설치 없이 브라우저 즉시 실행' }
                ].map((item, idx) => (
                    <div key={idx} style={{
                        background: 'white',
                        borderRadius: '14px',
                        padding: '1.25rem',
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.06)',
                        textAlign: 'center'
                    }}>
                        <div style={{
                            width: '48px',
                            height: '48px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: 'linear-gradient(135deg, #005c9a 0%, #4da8c7 100%)',
                            borderRadius: '12px',
                            margin: '0 auto 1rem',
                            boxShadow: '0 6px 15px rgba(0, 92, 154, 0.25)'
                        }}>
                            <i className={item.icon} style={{ fontSize: '1.2rem', color: 'white' }}></i>
                        </div>
                        <h4 style={{ fontSize: '1rem', marginBottom: '0.35rem' }}>{item.title}</h4>
                        <p style={{ fontSize: '0.85rem', marginBottom: 0 }}>{item.desc}</p>
                    </div>
                ))}
            </div>
        </>
    );
}
