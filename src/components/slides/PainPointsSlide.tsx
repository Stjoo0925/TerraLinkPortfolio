'use client';

import React from 'react';

export default function PainPointsSlide() {
    const painPoints = [
        {
            icon: 'fas fa-file-invoice',
            title: '중복 업무 발생',
            desc: '현장 야장 작성 후 사무실에서 다시 PC에 입력하는 번거로움',
            color: '#005c9a'
        },
        {
            icon: 'fas fa-history',
            title: '데이터 분실 위험',
            desc: '개인 기기에 저장된 데이터의 누락 및 이력 관리의 부재',
            color: '#e74c3c'
        },
        {
            icon: 'fas fa-sync-alt',
            title: '지연되는 협업',
            desc: '현장 데이터가 사무실로 전달될 때까지 발생하는 의사결정 지연',
            color: '#f39c12'
        },
        {
            icon: 'fas fa-exclamation-circle',
            title: '입력 오류',
            desc: '수기 데이터를 옮기는 과정에서 발생하는 휴먼 에러',
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
                    MARKET NEEDS
                </span>
                <h2 style={{ marginTop: '1rem' }}>기존 측량 업무의 비효율성</h2>
            </div>

            <div className="grid-4">
                {painPoints.map((item, idx) => (
                    <div
                        key={idx}
                        className="card fade-up"
                        style={{
                            animationDelay: `${idx * 0.1}s`,
                            background: 'white',
                            border: 'none',
                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                    >
                        {/* Top accent line */}
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            height: '4px',
                            background: `linear-gradient(90deg, ${item.color}, ${item.color}80)`
                        }} />

                        <div className="icon-box" style={{
                            background: `${item.color}15`,
                            marginTop: '0.5rem'
                        }}>
                            <i className={item.icon} style={{ color: item.color }}></i>
                        </div>
                        <h3 style={{ color: item.color }}>{item.title}</h3>
                        <p>{item.desc}</p>
                    </div>
                ))}
            </div>
        </>
    );
}
