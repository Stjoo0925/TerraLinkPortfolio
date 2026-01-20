'use client';

import React from 'react';
import { Filter, Database, RefreshCw, FolderOpen } from 'lucide-react';

export default function FileManagementSlide() {
    const features = [
        { icon: Filter, title: '확장자별 필터링', desc: '.dwg, .dxf 등 주요 파일 형식 분류' },
        { icon: Database, title: '하이브리드 저장소', desc: 'DB 기록과 물리 파일의 연동 관리' },
        { icon: RefreshCw, title: '파일 서버 동기화', desc: '실시간 데이터 Sync 및 안전한 보관' }
    ];

    return (
        <div className="grid grid-cols-2 gap-16 h-full items-center relative">
            {/* Left - Image */}
            <div className="relative">
                {/* Background Blur Effect */}
                <div className="absolute top-[10%] left-[5%] w-[80%] h-[80%] bg-linear-to-br from-brand-blue/15 to-brand-cyan/10 rounded-3xl blur-2xl -z-10" />

                <div className="relative bg-[#1a1a2e] rounded-2xl p-3 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.35)]">
                    <img
                        src="/테라링크이미지자료/파일관리시스템.png"
                        alt="파일 관리 시스템"
                        className="w-full h-auto min-h-[360px] object-contain rounded-xl bg-[#1a1a2e]"
                    />
                </div>
            </div>

            {/* Right - Content */}
            <div>
                <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-linear-to-r from-blue-500/10 to-cyan-500/10 text-blue-600 font-bold tracking-wider text-sm mb-4">
                    <FolderOpen className="w-4 h-4" />
                    FILE MANAGEMENT
                </span>

                <h2 className="text-4xl font-bold text-text-main leading-tight mb-2">
                    체계적인<br />
                    <span className="text-brand-blue">파일 관리 시스템</span>
                </h2>

                <p className="text-lg text-text-muted mb-8 leading-relaxed">
                    측량 성과 파일을 클라우드에 안전하게 저장하고
                    팀원과 손쉽게 공유합니다.
                </p>

                <div className="flex flex-col gap-4">
                    {features.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <div key={idx} className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-[0_4px_15px_rgba(0,0,0,0.06)] border border-slate-100">
                                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-brand-blue to-brand-cyan flex items-center justify-center shrink-0 shadow-md">
                                    <Icon className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-text-main mb-0.5">{item.title}</h4>
                                    <p className="text-sm text-text-muted">{item.desc}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
