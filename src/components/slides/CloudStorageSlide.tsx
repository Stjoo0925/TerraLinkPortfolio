'use client';

import React from 'react';
import { Database, History, Search, Share2, Cloud } from 'lucide-react';

export default function CloudStorageSlide() {
    const features = [
        { icon: Database, title: '도면 파일 관리', desc: '일괄 저장/관리', color: 'from-brand-blue to-brand-cyan' },
        { icon: History, title: '프로젝트 전체공유', desc: '간단한 사용성', color: 'from-emerald-500 to-teal-500' },
        { icon: Search, title: '빠른 검색', desc: '태그/날짜별', color: 'from-amber-500 to-orange-500' },
        { icon: Share2, title: '손쉬운 공유', desc: 'TerraSurvey2025와 공유', color: 'from-violet-500 to-purple-500' }
    ];

    return (
        <div className="relative h-full overflow-hidden">
            {/* Left - Image */}
            <div
                className="absolute left-0 top-0 bottom-0 w-[55%] bg-[#0f172a]"
                style={{ clipPath: 'polygon(0 0, 100% 0, 92% 100%, 0 100%)' }}
            >
                <img
                    src="/테라링크이미지자료/7.png"
                    alt="파일 관리 시스템"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Right - Text & Cards */}
            <div className="relative z-10 flex flex-col justify-center h-full w-[42%] ml-auto">
                <div className="mb-10">
                    <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-br from-sky-500/10 to-brand-cyan/10 text-sky-600 font-bold tracking-wider text-sm mb-4">
                        <Cloud className="w-4 h-4" />
                        CLOUD STORAGE
                    </span>
                    <h2 className="mt-4 text-4xl font-bold text-text-main leading-tight">
                        데이터 통합
                        <br />
                        <span className="text-brand-blue">저장 및 관리</span>
                    </h2>
                    <p className="mt-5 text-base text-text-muted leading-relaxed">
                        측량 성과 파일을 클라우드에 안전하게 저장하고
                        <br />
                        팀원과 손쉽게 공유합니다.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    {features.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <div key={idx} className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-slate-100 hover:-translate-y-0.5 hover:shadow-lg hover:border-brand-blue/20 transition-all">
                                <div className={`w-10 h-10 flex items-center justify-center bg-gradient-to-br ${item.color} rounded-xl shrink-0 shadow-md`}>
                                    <Icon className="w-4 h-4 text-white" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-text-main">{item.title}</h4>
                                    <p className="text-xs text-text-muted">{item.desc}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}