'use client';

import React from 'react';

export default function CustomFeaturesSlide() {
    const features = [
        {
            icon: 'fas fa-vector-square',
            title: '맞춤형 좌표계 설정',
            desc: 'UTM-K, EPSG 등 다양한 좌표계를 프로젝트별로 자유롭게 설정하여 데이터 통일성을 보장합니다.'
        },
        {
            icon: 'fas fa-calculator',
            title: '자동 면적/체적 계산',
            desc: '관측 데이터를 기반으로 면적 및 체적을 자동으로 계산하여 수작업 오류를 방지합니다.'
        },
        {
            icon: 'fas fa-file-export',
            title: '다양한 포맷 내보내기',
            desc: 'DXF, CSV, PDF 등 필요한 형식으로 데이터를 손쉽게 내보내고 공유할 수 있습니다.'
        }
    ];

    return (
        <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            {/* Header */}
            <div style={{ marginBottom: '32px' }}>
                <span className="label-tag" style={{ marginBottom: '16px', display: 'inline-block' }}>
                    커스터마이징
                </span>
                <h2 className="title-section">
                    현장에 맞는
                    <br />
                    최적의 설정을 지원합니다
                </h2>
            </div>

            {/* Feature List */}
            <div style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                gap: '20px'
            }}>
                {features.map((feature, idx) => (
                    <div
                        key={idx}
                        className="card"
                        style={{
                            flex: 1,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '24px',
                            padding: '24px 28px'
                        }}
                    >
                        {/* Icon */}
                        <div style={{
                            width: '64px',
                            height: '64px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: 'var(--color-accent-soft)',
                            borderRadius: '16px',
                            flexShrink: 0
                        }}>
                            <i
                                className={feature.icon}
                                style={{
                                    fontSize: '26px',
                                    color: 'var(--color-accent)'
                                }}
                            ></i>
                        </div>

                        {/* Content */}
                        <div style={{ flex: 1 }}>
                            <h3 style={{
                                fontSize: '18px',
                                fontWeight: 600,
                                color: 'var(--color-primary)',
                                marginBottom: '8px',
                                letterSpacing: '-0.01em'
                            }}>
                                {feature.title}
                            </h3>
                            <p style={{
                                fontSize: '14px',
                                color: 'var(--color-muted)',
                                lineHeight: 1.6
                            }}>
                                {feature.desc}
                            </p>
                        </div>

                        {/* Arrow */}
                        <div style={{
                            width: '36px',
                            height: '36px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: 'var(--color-surface)',
                            borderRadius: '50%',
                            flexShrink: 0
                        }}>
                            <i
                                className="fas fa-chevron-right"
                                style={{
                                    fontSize: '12px',
                                    color: 'var(--color-secondary)'
                                }}
                            ></i>
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom Note */}
            <div style={{
                marginTop: '24px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '16px 20px',
                background: 'var(--color-surface)',
                borderRadius: '12px'
            }}>
                <i className="fas fa-info-circle" style={{ color: 'var(--color-accent)', fontSize: '16px' }}></i>
                <p style={{ fontSize: '13px', color: 'var(--color-muted)' }}>
                    모든 설정은 프로젝트별로 저장되어 팀원들과 자동으로 동기화됩니다.
                </p>
            </div>
        </div>
    );
}
