'use client';

import React from 'react';
import { Smartphone, CloudUpload, Link2 } from 'lucide-react';

export default function IntegrationSlide() {

    return (
        <>
            <div className="relative h-full overflow-hidden">
                {/* Left - Text & Cards */}
                <div className="relative z-10 flex flex-col justify-center h-full w-[38%]">
                    <div className="relative mb-8">
                        <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 text-white font-bold tracking-wider text-sm mb-4 backdrop-blur-sm border border-white/20">
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
                            { icon: CloudUpload, title: 'Real-time Sync', desc: '현장 관측과 동시에 사무실에서 데이터 확인', color: 'from-brand-cyan to-teal-400' }
                        ].map((item, idx) => {
                            const Icon = item.icon;
                            return (
                                <div key={idx} className="flex items-center gap-5 p-5 bg-white/10 backdrop-blur-md rounded-2xl shadow-xl border border-white/10">
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
                <div
                    className="absolute right-0 top-0 bottom-0 w-[55%]"
                    style={{ clipPath: 'polygon(12% 0, 100% 0, 100% 100%, 0 100%)' }}
                >
                    <img
                        src="/테라링크이미지자료/3.png"
                        alt="TerraSurvey 연동 화면"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-r from-[#0f172a]/40 to-transparent pointer-events-none" />
                </div>
            </div>
        </>
    );
}