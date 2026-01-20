'use client';

import React from 'react';
import { Building2, UserPlus, Code, Settings } from 'lucide-react';

export default function AdminSlide() {
    const features = [
        { icon: Building2, title: '회사 관리', desc: '조직 기본 정보 설정', color: 'from-brand-blue to-brand-cyan' },
        { icon: UserPlus, title: '계정 생성', desc: '신규 사용자 발급', color: 'from-emerald-500 to-teal-500' },
        { icon: Code, title: '측량 코드 관리', desc: '작업 표준 코드 체계화', color: 'from-violet-500 to-purple-500' },
    ];

    return (
        <>
            <div className="flex justify-between items-end mb-10">
                <div className="relative p-6 pr-12 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl">
                    <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 text-white font-bold tracking-wider text-sm mb-4 backdrop-blur-sm border border-white/20">
                        <Settings className="w-4 h-4" />
                        SYSTEM ADMINISTRATION
                    </span>
                    <h2 className="mt-4 text-4xl font-bold text-white">계정 및 시스템 관리</h2>
                    <p className="mt-4 text-base text-white/70 leading-relaxed">
                        사용자 계정과 권한 레벨을 정의하고<br />
                        회사의 소중한 데이터를 통합 관리합니다.
                    </p>
                </div>
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-2 gap-8">
                {/* Left - 회사 정보 관리 */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col">
                    <div className="p-4 flex-1 flex items-center justify-center">
                        <img
                            src="/테라링크이미지자료/13.png"
                            alt="회사 정보 관리"
                            className="w-full h-auto max-h-[240px] object-contain drop-shadow-2xl"
                        />
                    </div>
                    <div className="p-4 bg-white/5 border-t border-white/10 flex items-center justify-center gap-2">
                        <Building2 className="w-4 h-4 text-brand-cyan" />
                        <p className="text-white font-medium text-sm">사용자 계정 통합 관리</p>
                    </div>
                </div>
                {/* Right - 계정 관리 */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col">
                    <div className="p-4 flex-1 flex items-center justify-center">
                        <img
                            src="/테라링크이미지자료/14.png"
                            alt="계정 관리"
                            className="w-full h-auto max-h-[240px] object-contain drop-shadow-2xl"
                        />
                    </div>
                    <div className="p-4 bg-white/5 border-t border-white/10 flex items-center justify-center gap-2">
                        <UserPlus className="w-4 h-4 text-brand-cyan" />
                        <p className="text-white font-medium text-sm">측량 코드 관리</p>
                    </div>
                </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-3 gap-4 mt-8">
                {features.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                        <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-5 shadow-xl text-center border border-white/10">
                            <div className={`w-11 h-11 flex items-center justify-center bg-linear-to-br ${item.color} rounded-xl mx-auto mb-3 shadow-md`}>
                                <Icon className="w-5 h-5 text-white" />
                            </div>
                            <h4 className="text-sm font-bold mb-1 text-white">{item.title}</h4>
                            <p className="text-xs text-white/60">{item.desc}</p>
                        </div>
                    );
                })}
            </div>
        </>
    );
}
