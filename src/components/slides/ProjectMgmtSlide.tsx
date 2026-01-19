'use client';

import React from 'react';

export default function ProjectMgmtSlide() {
    const features = [
        {
            title: '현장별 아카이빙',
            desc: '진행 중인 프로젝트와 완료된 현장을 구분하여 체계적으로 보관합니다.',
            icon: 'fas fa-archive'
        },
        {
            title: '상태별 프로젝트 관리',
            desc: '프로젝트의 진행, 중지, 완료 상태를 한눈에 파악하고 효율적으로 관리합니다.',
            icon: 'fas fa-tasks'
        },
        {
            title: '좌표계 표준화',
            desc: '현장마다 다른 좌표계 설정을 전사적으로 표준화하여 오차를 방지합니다.',
            icon: 'fas fa-crosshairs'
        }
    ];

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
                <div>
                    <span className="subtitle" style={{
                        background: 'linear-gradient(135deg, rgba(0, 92, 154, 0.1) 0%, rgba(77, 168, 199, 0.1) 100%)',
                        padding: '10px 20px',
                        borderRadius: '100px'
                    }}>
                        PROJECT MANAGEMENT
                    </span>
                    <h2 style={{ marginTop: '1rem' }}>체계적인 프로젝트 관리</h2>
                </div>
                <p style={{ maxWidth: '400px', textAlign: 'right', fontSize: '1.1rem' }}>
                    현장별로 프로젝트를 구분하고 상태를 관리하여<br />
                    효율적인 작업 흐름과 가시성을 확보합니다.
                </p>
            </div>

            <div className="grid-3">
                {features.map((item, idx) => (
                    <div
                        key={idx}
                        className="card fade-up"
                        style={{
                            animationDelay: `${idx * 0.1}s`,
                            background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                            border: 'none',
                            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                            padding: '2.5rem'
                        }}
                    >
                        <div style={{
                            width: '60px',
                            height: '60px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: 'linear-gradient(135deg, #005c9a 0%, #4da8c7 100%)',
                            borderRadius: '16px',
                            marginBottom: '1.5rem',
                            boxShadow: '0 8px 20px rgba(0, 92, 154, 0.25)'
                        }}>
                            <i className={item.icon} style={{ fontSize: '1.5rem', color: 'white' }}></i>
                        </div>
                        <h3>{item.title}</h3>
                        <p style={{ fontSize: '1rem', lineHeight: 1.7 }}>{item.desc}</p>
                    </div>
                ))}
            </div>
        </>
    );
}
