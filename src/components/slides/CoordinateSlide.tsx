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
            <div className="relative h-[620px] overflow-hidden">
                {/* Left - Text & Cards */}
                <div className="relative z-10 flex flex-col justify-between h-full w-[40%]">
                    <div className="relative">
                        <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-100 text-cyan-600 font-bold tracking-wider text-sm mb-6 shadow-[5px_5px_10px_#cbd5e1,-5px_-5px_10px_#ffffff]">
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
                            <div key={idx} className="flex items-center gap-4 p-5 bg-white/50 backdrop-blur-md rounded-2xl shadow-md border border-white/40 mb-1">
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
                {/* Right - Image (Blurred Backdrop Style) */}
                <div className="absolute right-4 top-4 bottom-4 w-[55%] rounded-3xl overflow-hidden border border-white/40">
                    {/* 1. Blurred Background Layer */}
                    <div className="absolute inset-0 z-0 bg-slate-100">
                        <img
                            src="/테라링크이미지자료/6.png"
                            alt="Background Blur"
                            className="w-full h-full object-cover blur-xs opacity-70"
                        />
                    </div>

                    {/* 2. Main Image Layer */}
                    <div className="absolute inset-8 z-10 flex items-center justify-center">
                        <img
                            src="/테라링크이미지자료/6.png"
                            alt="좌표계 설정 화면"
                            className="max-w-full max-h-full object-contain drop-shadow-xl rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}