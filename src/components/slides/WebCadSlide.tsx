'use client';

import React from 'react';
import { PenTool, FileCode, Layers, Rocket, Monitor, MousePointer2, Calculator, Map } from 'lucide-react';

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
                <div className="">
                    <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-100 text-brand-blue font-bold tracking-wider text-sm mb-6 shadow-[0_0_15px_rgba(255,255,255,0.15)] border border-white/20">
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
            <div className="grid grid-cols-3 gap-8 mb-8">
                {[
                    { img: '/웹캐드/1.png', label: '측량 계산', desc: '도면내 다양한 성과의 측량 계산 지원', icon: MousePointer2, color: 'from-brand-blue to-brand-cyan' },
                    { img: '/웹캐드/2.png', label: '물량 계산', desc: '선택 영역의 TIN 기반 자동 물량 산출 및 리스트업', icon: Calculator, color: 'from-emerald-500 to-teal-500' },
                    { img: '/웹캐드/3.png', label: '지적도 설정', desc: 'V-World 기반의 지적도 삽입', icon: Map, color: 'from-violet-500 to-purple-500' }
                ].map((item, idx) => (
                    <div key={idx} className="bg-black/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col">
                        <div className="p-4 flex-1 flex items-center justify-center bg-white/5">
                            <img
                                src={item.img}
                                alt={item.label}
                                className="w-full h-auto max-h-[200px] object-contain drop-shadow-xl"
                            />
                        </div>
                        <div className="p-5">
                            <div className="flex items-center gap-3 mb-3">
                                <div className={`w-9 h-9 flex items-center justify-center bg-linear-to-br ${item.color} rounded-xl shadow-md`}>
                                    <item.icon className="w-4 h-4 text-white" />
                                </div>
                                <h4 className="text-base font-bold text-white">{item.label}</h4>
                            </div>
                            <p className="text-sm leading-relaxed text-white/60">
                                {item.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Features */}
            <div className="grid grid-cols-4 gap-6">
                {features.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                        <div key={idx} className="flex items-center gap-4 p-4 bg-black/10 backdrop-blur-md rounded-2xl shadow-xl border border-white/10">
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
