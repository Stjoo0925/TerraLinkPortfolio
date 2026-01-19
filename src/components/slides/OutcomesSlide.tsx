'use client';

import React from 'react';

export default function OutcomesSlide() {
    return (
        <>
            <div style={{ marginBottom: '2rem' }}>
                <span className="subtitle">성과물 내보내기</span>
                <h2>신속하고 정확한 성과물 도출</h2>
            </div>

            <div className="grid-2" style={{ gap: '2rem', marginBottom: '2rem' }}>
                <div>
                    <div className="img-box" style={{ marginBottom: '1rem' }}>
                        <img
                            src="/테라링크이미지자료/11.png"
                            alt="측량 보고서 내보내기"
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </div>
                    <div className="biz-card" style={{ padding: '1.25rem' }}>
                        <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>측량 보고서 내보내기</h3>
                        <p style={{ fontSize: '0.9rem' }}>
                            좌표계, GNSS 현황/기준점, TotalStation 현황을 포함한 표준 양식의 보고서를 자동 생성합니다.
                        </p>
                    </div>
                </div>

                <div>
                    <div className="img-box" style={{ marginBottom: '1rem' }}>
                        <img
                            src="/테라링크이미지자료/12.png"
                            alt="성과 데이터 내보내기"
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </div>
                    <div className="biz-card" style={{ padding: '1.25rem' }}>
                        <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>원시 성과 데이터 내보내기</h3>
                        <p style={{ fontSize: '0.9rem' }}>
                            CSV, TXT, DXF 등 다양한 포맷으로 데이터를 내보내 CAD 및 오피스 소프트웨어와 연동합니다.
                        </p>
                    </div>
                </div>
            </div>

            <div className="feature-grid-3" style={{ marginTop: '1rem' }}>
                <div className="feature-card">
                    <div className="feature-icon"><i className="fas fa-map-marked-alt"></i></div>
                    <h4>현황 및 측설 관리</h4>
                    <p>관측 데이터 기반 현황 성과 즉시 확인</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon"><i className="fas fa-file-alt"></i></div>
                    <h4>검측 리포트 지원</h4>
                    <p>표준 양식 성과 문서화로 보고 시간 단축</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon"><i className="fas fa-file-export"></i></div>
                    <h4>다양한 포맷 지원</h4>
                    <p>DXF, CSV, Excel 등 호환 포맷 지원</p>
                </div>
            </div>
        </>
    );
}
