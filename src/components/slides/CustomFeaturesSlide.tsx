'use client';

import React from 'react';
import { Crosshair, Calculator, FileOutput, Settings, Info } from 'lucide-react';

export default function CustomFeaturesSlide() {
    const features = [
        {
            icon: Crosshair,
            title: '맞춤형 좌표계 설정',
            desc: 'UTM-K, EPSG 등 다양한 좌표계를 프로젝트별로 자유롭게 설정하여 데이터 통일성을 보장합니다.',
            color: 'from-brand-blue to-brand-cyan'
        },
        {
            icon: Calculator,
            title: '자동 면적/체적 계산',
            desc: '관측 데이터를 기반으로 면적 및 체적을 자동으로 계산하여 수작업 오류를 방지합니다.',
            color: 'from-emerald-500 to-teal-400'
        },
        {
            icon: FileOutput,
            title: '다양한 포맷 내보내기',
            desc: 'DXF, CSV, PDF 등 필요한 형식으로 데이터를 손쉽게 내보내고 공유할 수 있습니다.',
            color: 'from-violet-500 to-purple-400'
        }
    ];

    return (
        <div className="h-full flex flex-col relative">
            {/* Header */}
            <div className="mb-10">
                <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-linear-to-r from-fuchsia-500/10 to-pink-500/10 text-fuchsia-600 font-bold tracking-wider text-sm mb-4">
                    <Settings className="w-4 h-4" />
                    Customization
                </span>
                <h2 className="text-4xl font-bold text-text-main leading-tight">
                    현장에 맞는<br />
                    <span className="text-brand-blue">최적의 설정</span>을 지원합니다
                </h2>
            </div>

            {/* Feature List */}
            <div className="flex-1 flex flex-col gap-5">
                {features.map((feature, idx) => {
                    const Icon = feature.icon;
                    return (
                        <div
                            key={idx}
                            className="group flex-1 flex items-center gap-6 p-6 bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-slate-100"
                        >
                            {/* Icon */}
                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shrink-0 shadow-lg`}>
                                <Icon className="w-8 h-8 text-white" />
                            </div>

                            {/* Content */}
                            <div className="flex-1">
                                <h3 className="text-lg font-bold text-text-main mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-base text-text-muted leading-relaxed">
                                    {feature.desc}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
