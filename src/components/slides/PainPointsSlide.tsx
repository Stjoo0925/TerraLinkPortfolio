'use client';

import React from 'react';
import { FileText, History, RefreshCw, AlertCircle, AlertTriangle } from 'lucide-react';

export default function PainPointsSlide() {
    const painPoints = [
        {
            icon: FileText,
            title: '중복 업무 발생',
            desc: '현장 야장 작성 후 사무실에서 다시 PC에 입력',
            stat: '30% 시간낭비',
            color: 'from-brand-blue to-sky-400'
        },
        {
            icon: History,
            title: '데이터 분실 위험',
            desc: '개인 기기 저장 데이터 누락 및 이력 관리 부재',
            stat: '연간 5건+',
            color: 'from-rose-500 to-red-400'
        },
        {
            icon: RefreshCw,
            title: '지연되는 협업',
            desc: '현장 데이터 전달까지 발생하는 의사결정 지연',
            stat: '2~3일 소요',
            color: 'from-amber-500 to-orange-400'
        },
        {
            icon: AlertCircle,
            title: '입력 오류',
            desc: '수기 데이터 이전 과정에서 발생하는 휴먼 에러',
            stat: '15% 오류율',
            color: 'from-violet-500 to-purple-400'
        }
    ];

    return (
        <>
            <div className="flex justify-center mb-10">
                <div className="relative p-6 px-12 rounded-3xl bg-black/10 backdrop-blur-md border border-white/10 shadow-xl text-center">
                    <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 text-white font-bold tracking-wider text-sm mb-4 backdrop-blur-sm border border-white/20">
                        <AlertTriangle className="w-4 h-4" />
                        MARKET NEEDS
                    </span>
                    <h2 className="mt-4 text-4xl font-bold text-white">
                        기존 측량 업무의 비효율성
                    </h2>
                    <p className="mt-4 text-base text-white/80 max-w-xl mx-auto">
                        현장과 사무실 간 데이터 흐름의 단절이
                        <br />
                        생산성 저하의 주요 원인입니다
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-4 gap-5 mb-8">
                {painPoints.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                        <div
                            key={idx}
                            className="group relative bg-black/10 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/10 overflow-hidden"
                        >
                            {/* Top accent line */}
                            <div className={`absolute top-0 left-0 right-0 h-1 bg-linear-to-r ${item.color}`} />

                            {/* Icon */}
                            <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${item.color} flex items-center justify-center mb-4 shadow-md`}>
                                <Icon className="w-5 h-5 text-white" />
                            </div>

                            {/* Stat Badge */}
                            <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold bg-linear-to-r ${item.color} text-white mb-3`}>
                                {item.stat}
                            </div>

                            {/* Content */}
                            <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                            <p className="text-sm text-white/60 leading-relaxed">{item.desc}</p>
                        </div>
                    );
                })}
            </div>

            {/* Conclusion Banner */}
            <div className="p-5 bg-black/10 backdrop-blur-sm rounded-2xl border-l-4 border-rose-500">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-linear-to-br from-rose-500 to-orange-500 flex items-center justify-center shrink-0 shadow-md">
                        <AlertTriangle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                        <h4 className="font-bold text-white mb-1">
                            결론: 디지털 전환이 필요합니다
                        </h4>
                        <p className="text-sm text-white/60">
                            현장-사무실 간 실시간 데이터 연동이 해답입니다.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
