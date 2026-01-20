'use client';

import React from 'react';
import { PenTool, FileCode, Layers, Rocket, Monitor } from 'lucide-react';

export default function WebCadSlide() {
    const features = [
        { icon: PenTool, title: '브라우저 편집', desc: '웹에서 직접 도면 수정', color: 'from-brand-blue to-brand-cyan' },
        { icon: FileCode, title: 'DWG/DXF 호환', desc: '표준 CAD 포맷 지원', color: 'from-emerald-500 to-teal-500' },
        { icon: Layers, title: '레이어 관리', desc: '개별 레이어 제어', color: 'from-amber-500 to-orange-500' },
        { icon: Rocket, title: '무설치 엔진', desc: '즉시 실행 가능', color: 'from-violet-500 to-purple-500' }
    ];

    return (
        <>
            <div className="flex justify-between items-end mb-8">
                <div className="relative p-6 pr-12 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl">
                    <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 text-white font-bold tracking-wider text-sm mb-4 backdrop-blur-sm border border-white/20">
                        <Monitor className="w-4 h-4" />
                        WEB CAD
                    </span>
                    <h2 className="mt-4 text-4xl font-bold text-white">
                        클라우드 기반 CAD 도면 편집
                    </h2>
                    <p className="mt-4 text-base text-white/70 leading-relaxed">
                        브라우저에서 직접 측량 도면을
                        <br />
                        확인하고 편집할 수 있습니다.
                    </p>
                </div>
            </div>

            {/* Main CAD Preview - 3 Column Image Cards */}
            <div className="grid grid-cols-3 gap-5 mb-6">
                {[
                    { img: '/웹캐드/1.png', label: '측점 데이터 확인' },
                    { img: '/웹캐드/2.png', label: '면적 계산' },
                    { img: '/웹캐드/3.png', label: '지적도 설정' }
                ].map((item, idx) => (
                    <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col">
                        <div className="p-3 flex-1 flex items-center justify-center">
                            <img
                                src={item.img}
                                alt={item.label}
                                className="w-full h-auto max-h-[160px] object-contain drop-shadow-xl"
                            />
                        </div>
                        <div className="p-3 bg-white/5 border-t border-white/10">
                            <p className="text-center text-sm font-medium text-white">
                                {item.label}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Features */}
            <div className="grid grid-cols-4 gap-4">
                {features.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                        <div key={idx} className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-md rounded-2xl shadow-xl border border-white/10">
                            <div className={`w-10 h-10 flex items-center justify-center bg-linear-to-br ${item.color} rounded-xl shrink-0 shadow-md`}>
                                <Icon className="w-4 h-4 text-white" />
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-white">{item.title}</h4>
                                <p className="text-xs text-white/60">{item.desc}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}
