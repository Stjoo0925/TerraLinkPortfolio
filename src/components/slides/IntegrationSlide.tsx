'use client';

import React from 'react';
import { Smartphone, CloudUpload, Link2, Toolbox } from 'lucide-react';

export default function IntegrationSlide() {

    return (
        <>
            <div className="relative h-[620px] overflow-hidden">
                {/* Left - Text & Cards */}
                <div className="relative z-10 flex flex-col justify-between h-full w-[40%]">
                    <div className="relative">
                        <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-100 text-brand-blue font-bold tracking-wider text-sm mb-6 shadow-[0_0_15px_rgba(255,255,255,0.15)] border border-white/20">
                            <Link2 className="w-4 h-4" />
                            PLATFORM SYNERGY
                        </span>
                        <h2 className="mt-4 text-4xl font-bold text-white leading-tight">
                            TerraSurvey 2025와
                            <br />
                            <span className="text-brand-cyan">완벽한 데이터 연동</span>
                        </h2>
                        <p className="mt-5 text-base text-white/70 leading-relaxed">
                            TerraSurvey 2025 지원 측량 장비를 통해
                            <br />
                            관측된 모든 데이터가 실시간 동기화됩니다.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4">
                        {[
                            { icon: Smartphone, title: 'Perfect Compatibility', desc: 'TerraSurvey 2025 사용자라면 즉시 연결 가능', color: 'from-brand-blue to-sky-400' },
                            { icon: CloudUpload, title: 'Real-time Sync', desc: '현장 관측과 동시에 사무실에서 데이터 확인', color: 'from-brand-cyan to-teal-400' },
                            { icon: Toolbox, title: '다양한 장비 호환', desc: 'TerraSurvey 2025 지원 측량 장비를 통해 관측된 모든 데이터가 실시간 동기화됩니다.', color: 'from-brand-orange to-orange-400' }
                        ].map((item, idx) => {
                            const Icon = item.icon;
                            return (
                                <div key={idx} className="flex items-center gap-5 p-5 bg-black/10 backdrop-blur-md rounded-2xl shadow-xl border border-white/10 mb-1">
                                    <div className={`w-12 h-12 flex items-center justify-center rounded-xl bg-linear-to-br ${item.color} shrink-0 shadow-md`}>
                                        <Icon className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white mb-1">{item.title}</h4>
                                        <p className="text-sm text-white/60">{item.desc}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Right - Image */}
                {/* Right - Image (Blurred Backdrop Style) */}
                <div className="absolute right-4 top-4 bottom-4 w-[55%] rounded-3xl overflow-hidden border border-white/10">
                    {/* 1. Blurred Background Layer */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src="/테라링크이미지자료/3.png"
                            alt="Background Blur"
                            className="w-full h-full object-cover blur-xs opacity-70"
                        />
                        <div className="absolute inset-0 bg-black/20" /> {/* Overlay for darkening */}
                    </div>

                    {/* 2. Main Image Layer */}
                    <div className="absolute inset-8 z-10 flex items-center justify-center">
                        <img
                            src="/테라링크이미지자료/3.png"
                            alt="TerraSurvey 연동 화면"
                            className="max-w-full max-h-full object-contain drop-shadow-2xl rounded-lg shadow-black/50"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}