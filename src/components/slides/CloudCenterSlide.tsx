'use client';

import React from 'react';

export default function CloudCenterSlide() {
    return (
        <>
            <div style={{ marginBottom: '2rem' }}>
                <span className="subtitle">클라우드 관리</span>
                <h2>데이터의 중심, 클라우드 관리 센터</h2>
            </div>

            <div className="grid-2" style={{ gap: '2rem', alignItems: 'start' }}>
                <div>
                    <div className="img-box" style={{ marginBottom: '1.5rem' }}>
                        <img
                            src="/테라링크이미지자료/7.png"
                            alt="클라우드 파일 관리"
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </div>
                    <div className="biz-card" style={{ padding: '1.5rem' }}>
                        <h3 style={{ fontSize: '1.1rem' }}>파일 관리</h3>
                        <p style={{ fontSize: '0.95rem' }}>
                            측량 성과 파일을 클라우드에 안전하게 저장하고 팀원과 공유합니다.
                        </p>
                    </div>
                </div>

                <div>
                    <div className="img-box" style={{ marginBottom: '1.5rem' }}>
                        <img
                            src="/테라링크이미지자료/8.png"
                            alt="데이터 현황"
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </div>
                    <div className="biz-card" style={{ padding: '1.5rem' }}>
                        <h3 style={{ fontSize: '1.1rem' }}>데이터 현황</h3>
                        <p style={{ fontSize: '0.95rem' }}>
                            GNSS, TotalStation, 측량/측설 현황 및 기준점 데이터를 한눈에 파악합니다.
                        </p>
                    </div>
                </div>
            </div>

            <div className="grid-2" style={{ gap: '2rem', marginTop: '1.5rem', alignItems: 'start' }}>
                <div className="img-box">
                    <img
                        src="/테라링크이미지자료/9.png"
                        alt="측정 데이터 목록"
                        style={{ width: '100%', height: 'auto' }}
                    />
                </div>
                <div className="img-box">
                    <img
                        src="/테라링크이미지자료/10.png"
                        alt="기준점 관리"
                        style={{ width: '100%', height: 'auto' }}
                    />
                </div>
            </div>
        </>
    );
}
