'use client';

import React from 'react';
import { MapPin } from 'lucide-react';

export default function CoordinateSlide() {
    const coordinateSystems = [
        { code: 'UTM-K', name: 'Korea 2000 / Unified CS', desc: '대한민국 통합 좌표계', color: 'from-brand-blue to-brand-cyan' },
        { code: 'EPSG:5186', name: 'Korea 2000 / Central Belt', desc: '중부원점 좌표계', color: 'from-emerald-500 to-teal-500' },
        { code: 'EPSG:5187', name: 'Korea 2000 / East Belt', desc: '동부원점 좌표계', color: 'from-violet-500 to-purple-500' }
    ];

    return (
        <>
            <div className="relative h-full overflow-hidden">
                {/* Left - Text & Cards */}
                <div className="relative z-10 flex flex-col justify-center h-full w-[38%]">
                    <div className="relative mb-8">
                        <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cyan-500/10 text-cyan-600 font-bold tracking-wider text-sm mb-4">
                            <MapPin className="w-4 h-4" />
                            COORDINATE SYSTEM
                        </span>
                        <h2 className="mt-4 text-4xl font-bold text-text-main leading-tight">
                            다양한 좌표계를
                            <br />
                            <span className="text-brand-blue">자유롭게 설정</span>
                        </h2>
                        <p className="mt-5 text-base text-text-muted leading-relaxed">
                            프로젝트별로 좌표계를 설정하여
                            <br />
                            팀 전체가 동일한 기준으로 작업합니다.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4">
                        {coordinateSystems.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-slate-100">
                                <div className={`px-3 py-2 bg-linear-to-br ${item.color} rounded-xl text-white font-bold text-sm shrink-0 shadow-md`}>
                                    {item.code}
                                </div>
                                <div>
                                    <h4 className="font-bold text-text-main mb-0.5">{item.name}</h4>
                                    <p className="text-sm text-text-muted">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right - Image */}
                <div
                    className="absolute right-0 top-0 bottom-0 w-[55%]"
                    style={{ clipPath: 'polygon(12% 0, 100% 0, 100% 100%, 0 100%)' }}
                >
                    <img
                        src="/테라링크이미지자료/6.png"
                        alt="좌표계 설정 화면"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-r from-[#f1f5f9]/20 to-transparent pointer-events-none" />
                </div>
            </div>
        </>
    );
}