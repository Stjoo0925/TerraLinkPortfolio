'use client';

import React from 'react';
import { TrendingUp, Shield, Users, Zap, Clock, Wallet } from 'lucide-react';

export default function ExpectationsSlide() {
    const stats = [
        {
            value: '40',
            unit: '%',
            label: '업무 생산성 향상',
            desc: '데이터 재입력 및 후처리 시간 단축',
            icon: TrendingUp,
            gradient: 'from-brand-blue to-brand-cyan'
        },
        {
            value: '0',
            unit: '%',
            label: '데이터 유실 제로',
            desc: '클라우드 자동 동기화로 이력 보존',
            icon: Shield,
            gradient: 'from-emerald-500 to-teal-400'
        },
        {
            value: '100',
            unit: '%',
            label: '협업의 투명성',
            desc: '실시간 현장 데이터 공유 및 검토',
            icon: Users,
            gradient: 'from-violet-500 to-purple-400'
        }
    ];

    const benefits = [
        { icon: Clock, title: '즉시 반영', desc: '현장 데이터가 사무실에 실시간 도착', color: 'from-brand-blue to-brand-cyan' },
        { icon: Wallet, title: '비용 절감', desc: '중복 작업 제거로 인건비 절약', color: 'from-amber-500 to-orange-500' },
        { icon: Zap, title: '빠른 의사결정', desc: '데이터 기반 신속한 판단', color: 'from-rose-500 to-pink-500' }
    ];

    return (
        <>
            {/* Header */}
            <div className="flex justify-center mb-10">
                <div className="relative p-6 px-12 rounded-3xl bg-white/50 backdrop-blur-md border border-white/40 shadow-xl text-center">
                    <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-green-500/10 text-green-600 font-bold tracking-wider text-sm mb-4">
                        <TrendingUp className="w-4 h-4" />
                        Expected Value
                    </span>
                    <h2 className="mt-4 text-4xl font-bold text-text-main">TerraLink 도입으로 얻는 가치</h2>
                    <p className="mt-4 text-lg text-text-muted max-w-2xl mx-auto">
                        업무 효율은 극대화하고 데이터 손실은 원천 차단하여<br />
                        가장 완벽한 협업 환경을 제공합니다.
                    </p>
                </div>
            </div>

            {/* Main Stats */}
            <div className="grid grid-cols-3 gap-8 mb-10">
                {stats.map((stat, idx) => {
                    const Icon = stat.icon;
                    return (
                        <div
                            key={idx}
                            className="group relative bg-white/50 backdrop-blur-md rounded-[24px] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-white/40 overflow-hidden text-center flex flex-col items-center"
                        >
                            <div className="flex items-center justify-center gap-5 mb-6">
                                {/* Icon */}
                                <div className={`w-14 h-14 rounded-2xl bg-linear-to-br ${stat.gradient} flex items-center justify-center shadow-lg shrink-0`}>
                                    <Icon className="w-7 h-7 text-white" />
                                </div>

                                {/* Value */}
                                <div className="flex items-baseline">
                                    <span className={`text-[4.5rem] font-black bg-clip-text text-transparent tracking-tighter leading-none bg-linear-to-r ${stat.gradient}`}>
                                        {stat.value}
                                    </span>
                                    <span className={`text-[2rem] font-bold bg-clip-text text-transparent bg-linear-to-r ${stat.gradient} ml-1`}>
                                        {stat.unit}
                                    </span>
                                </div>
                            </div>

                            {/* Label */}
                            <h3 className="text-xl font-bold text-text-main mb-2">{stat.label}</h3>
                            <p className="text-sm text-text-muted leading-relaxed break-keep">{stat.desc}</p>
                        </div>
                    );
                })}
            </div>

            {/* Bottom Benefits Row */}
            <div className="grid grid-cols-3 gap-8">
                {benefits.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                        <div key={idx} className="flex items-center gap-4 p-5 bg-white/50 backdrop-blur-md rounded-xl border border-white/40 shadow-sm">
                            <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${item.color} flex items-center justify-center shadow-md shrink-0`}>
                                <Icon className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <h4 className="font-bold text-text-main mb-0.5">{item.title}</h4>
                                <p className="text-sm text-text-muted">{item.desc}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}
