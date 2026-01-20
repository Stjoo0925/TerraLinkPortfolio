'use client';

import React from 'react';
import { Building2, UserPlus, Code, Settings } from 'lucide-react';

export default function AdminSlide() {
    const features = [
        { icon: UserPlus, title: '계정 생성', desc: '신규 사용자 발급', color: 'from-emerald-500 to-teal-500' },
        { icon: Building2, title: '회사 관리', desc: '조직 기본 정보 설정', color: 'from-brand-blue to-brand-cyan' },
        { icon: Code, title: '측량 코드 관리', desc: '작업 표준 코드 체계화', color: 'from-violet-500 to-purple-500' },
    ];

    return (
        <>
            <div className="flex justify-center mb-10">
                <div className="relative p-6 px-12 rounded-3xl bg-black/10 backdrop-blur-md border border-white/10 shadow-xl text-center">
                    <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-100 text-indigo-600 font-bold tracking-wider text-sm mb-6 shadow-[0_0_15px_rgba(255,255,255,0.15)] border border-white/20">
                        <Settings className="w-4 h-4" />
                        SYSTEM ADMINISTRATION
                    </span>
                    <h2 className="mt-4 text-4xl font-bold text-white">계정 및 시스템 관리</h2>
                    <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
                        사용자 계정과 권한 레벨을 정의하고 회사의 소중한 데이터를 통합 관리합니다.
                    </p>
                </div>
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-2 gap-8 mb-8">
                {/* Left - 회사 정보 관리 */}
                <div className="bg-black/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col">
                    <div className="p-4 flex-1 flex items-center justify-center bg-white/5">
                        <img
                            src="/테라링크이미지자료/13.png"
                            alt="회사 정보 관리"
                            className="w-full h-auto max-h-[250px] object-contain drop-shadow-2xl"
                        />
                    </div>
                    <div className="p-5">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-9 h-9 flex items-center justify-center bg-linear-to-br from-brand-blue to-brand-cyan rounded-xl shadow-md">
                                <Building2 className="w-4 h-4 text-white" />
                            </div>
                            <h4 className="text-base font-bold text-white">사용자 계정 통합 관리</h4>
                        </div>
                        <p className="text-sm leading-relaxed text-white/60">
                            부서별, 프로젝트별 사용자 계정 생성 및<br />
                            접근 권한(관리자/일반)을 체계적으로 제어합니다.
                        </p>
                    </div>
                </div>
                {/* Right - 계정 관리 */}
                <div className="bg-black/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col">
                    <div className="p-4 flex-1 flex items-center justify-center bg-white/5">
                        <img
                            src="/테라링크이미지자료/14.png"
                            alt="계정 관리"
                            className="w-full h-auto max-h-[250px] object-contain drop-shadow-2xl"
                        />
                    </div>
                    <div className="p-5">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-9 h-9 flex items-center justify-center bg-linear-to-br from-emerald-500 to-teal-500 rounded-xl shadow-md">
                                <UserPlus className="w-4 h-4 text-white" />
                            </div>
                            <h4 className="text-base font-bold text-white">측량 코드 관리</h4>
                        </div>
                        <p className="text-sm leading-relaxed text-white/60">
                            회사 내 표준 측량 코드(코드명, 레이어 등)를<br />
                            중앙에서 설정하여 데이터 정밀도를 유지합니다.
                        </p>
                    </div>
                </div>
            </div>

            {/* Features Grid */}
            {/* Features Grid */}
            <div className="flex justify-center gap-4 mt-8">
                {features.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                        <div key={idx} className="flex items-center gap-3 px-6 py-4 bg-black/10 backdrop-blur-md rounded-xl shadow-xl border border-white/10">
                            <div className={`w-10 h-10 rounded-xl bg-linear-to-br ${item.color} flex items-center justify-center shadow-md`}>
                                <Icon className="w-5 h-5 text-white" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-bold text-white block text-sm">{item.title}</h4>
                                <p className="text-xs text-white/60">{item.desc}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}
