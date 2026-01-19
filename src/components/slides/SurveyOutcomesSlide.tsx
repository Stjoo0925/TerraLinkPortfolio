'use client';

import React from 'react';

export default function SurveyOutcomesSlide() {
    const features = [
        {
            icon: 'fas fa-map-marked-alt',
            title: '현황 및 측설 관리',
            desc: '관측된 데이터를 기반으로 현황 성과를 즉시 확인하고 공유합니다.',
            color: '#005c9a'
        },
        {
            icon: 'fas fa-file-alt',
            title: '검측 리포트 지원',
            desc: '표준 양식에 맞춘 성과 문서화를 지원하여 보고 업무 시간을 단축합니다.',
            color: '#27ae60'
        },
        {
            icon: 'fas fa-file-export',
            title: '다양한 포맷 내보내기',
            desc: 'DXF, CSV, Excel 등 CAD 및 오피스 소프트웨어와 호환되는 포맷을 지원합니다.',
            color: '#9b59b6'
        }
    ];

    return (
        <>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <span className="subtitle" style={{
                    background: 'linear-gradient(135deg, rgba(0, 92, 154, 0.1) 0%, rgba(77, 168, 199, 0.1) 100%)',
                    padding: '10px 20px',
                    borderRadius: '100px'
                }}>
                    SURVEY OUTCOMES
                </span>
                <h2 style={{ marginTop: '1rem' }}>신속하고 정확한 성과물 도출</h2>
            </div>

            <div className="grid-3">
                {features.map((item, idx) => (
                    <div
                        key={idx}
                        className="card fade-up"
                        style={{
                            animationDelay: `${idx * 0.1}s`,
                            background: 'white',
                            border: 'none',
                            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                            padding: '2.5rem',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                    >
                        {/* Subtle corner accent */}
                        <div style={{
                            position: 'absolute',
                            top: '-20px',
                            right: '-20px',
                            width: '80px',
                            height: '80px',
                            background: `${item.color}10`,
                            borderRadius: '50%',
                            filter: 'blur(20px)'
                        }} />

                        <div style={{
                            width: '64px',
                            height: '64px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: `linear-gradient(135deg, ${item.color} 0%, ${item.color}cc 100%)`,
                            borderRadius: '18px',
                            marginBottom: '1.5rem',
                            boxShadow: `0 10px 25px ${item.color}40`,
                            position: 'relative',
                            zIndex: 1
                        }}>
                            <i className={item.icon} style={{ fontSize: '1.6rem', color: 'white' }}></i>
                        </div>
                        <h3 style={{ color: item.color, position: 'relative', zIndex: 1 }}>{item.title}</h3>
                        <p style={{ position: 'relative', zIndex: 1 }}>{item.desc}</p>
                    </div>
                ))}
            </div>
        </>
    );
}
