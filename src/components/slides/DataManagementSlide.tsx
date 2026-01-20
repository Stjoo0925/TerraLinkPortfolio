'use client';

import React from 'react';
import { BarChart3, List, Crosshair, LayoutList, Filter, FileOutput, RefreshCw, Database } from 'lucide-react';

export default function DataManagementSlide() {
    const bottomFeatures = [
        { icon: LayoutList, title: '통합 현황판', desc: '장비별 데이터 집계', color: 'from-brand-blue to-brand-cyan' },
        { icon: Filter, title: '다양한 필터', desc: '날짜/타입/상태별', color: 'from-emerald-500 to-teal-500' },
        { icon: FileOutput, title: '내보내기', desc: 'Excel/CSV 지원', color: 'from-amber-500 to-orange-500' },
        { icon: RefreshCw, title: '실시간 동기화', desc: '현장 데이터 연동', color: 'from-violet-500 to-purple-500' }
    ];

    return (
        <>

            <div className="flex justify-between items-end mb-8">
                <div className="relative p-6 rounded-3xl bg-white/40 backdrop-blur-md border border-white/40 shadow-sm">
                    <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-violet-500/10 text-violet-600 font-bold tracking-wider text-sm mb-4">
                        <Database className="w-4 h-4" />
                        DATA MANAGEMENT
                    </span>
                    <h2 className="mt-4 text-4xl font-bold text-text-main">측량 데이터 통합 관리</h2>
                    <p className="mt-4 text-base text-text-muted leading-relaxed">
                        GNSS 및 T/S(토탈스테이션) 등<br />
                        모든 측량 데이터를 한눈에 관리합니다.
                    </p>
                </div>
            </div>

            {/* Three Column Layout with Images */}
            <div className="grid grid-cols-3 gap-6">
                {/* Column 1 - 현황/속성 */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-slate-100 flex flex-col">
                    <div className="p-4 flex-1 flex items-center justify-center bg-slate-50/50">
                        <img
                            src="/테라링크이미지자료/8.png"
                            alt="현황/속성 관리"
                            className="w-full h-auto max-h-[200px] object-contain drop-shadow-md"
                        />
                    </div>
                    <div className="p-5">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-9 h-9 flex items-center justify-center bg-linear-to-br from-brand-blue to-brand-cyan rounded-xl shadow-md">
                                <BarChart3 className="w-4 h-4 text-white" />
                            </div>
                            <h4 className="text-base font-bold text-text-main">현황/속성</h4>
                        </div>
                        <p className="text-sm leading-relaxed text-text-muted">
                            GNSS 및 T/S(토탈스테이션) 데이터<br />
                            통합 수량 현황 및 속성 관리
                        </p>
                    </div>
                </div>

                {/* Column 2 - 성과 개요 */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-slate-100 flex flex-col">
                    <div className="p-4 flex-1 flex items-center justify-center bg-slate-50/50">
                        <img
                            src="/테라링크이미지자료/9.png"
                            alt="성과 개요"
                            className="w-full h-auto max-h-[200px] object-contain drop-shadow-md"
                        />
                    </div>
                    <div className="p-5">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-9 h-9 flex items-center justify-center bg-linear-to-br from-emerald-500 to-teal-500 rounded-xl shadow-md">
                                <List className="w-4 h-4 text-white" />
                            </div>
                            <h4 className="text-base font-bold text-text-main">성과 개요</h4>
                        </div>
                        <p className="text-sm leading-relaxed text-text-muted">
                            측량 성과 목록을 테이블 형태로<br />
                            상세 정보와 함께 관리
                        </p>
                    </div>
                </div>

                {/* Column 3 - 기준점 */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-slate-100 flex flex-col">
                    <div className="p-4 flex-1 flex items-center justify-center bg-slate-50/50">
                        <img
                            src="/테라링크이미지자료/10.png"
                            alt="기준점 관리"
                            className="w-full h-auto max-h-[200px] object-contain drop-shadow-md"
                        />
                    </div>
                    <div className="p-5">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-9 h-9 flex items-center justify-center bg-linear-to-br from-violet-500 to-purple-500 rounded-xl shadow-md">
                                <Crosshair className="w-4 h-4 text-white" />
                            </div>
                            <h4 className="text-base font-bold text-text-main">기준점</h4>
                        </div>
                        <p className="text-sm leading-relaxed text-text-muted">
                            삼각점/수준점 등 기준점 좌표<br />
                            데이터 등록 및 조회
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom Features */}
            <div className="grid grid-cols-4 gap-4 mt-6">
                {bottomFeatures.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                        <div key={idx} className="bg-white rounded-xl p-4 shadow-[0_4px_15px_rgba(0,0,0,0.06)] text-center border border-slate-100">
                            <div className={`w-10 h-10 flex items-center justify-center bg-linear-to-br ${item.color} rounded-xl mx-auto mb-2.5 shadow-md`}>
                                <Icon className="w-4 h-4 text-white" />
                            </div>
                            <h4 className="text-sm font-bold mb-1 text-text-main">{item.title}</h4>
                            <p className="text-xs text-text-muted">{item.desc}</p>
                        </div>
                    );
                })}
            </div>
        </>
    );
}
