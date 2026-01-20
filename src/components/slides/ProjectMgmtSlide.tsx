'use client';

import React from 'react';
import { Archive, ListTodo, Crosshair, FolderKanban } from 'lucide-react';

export default function ProjectMgmtSlide() {

    return (
        <>
            <div className="relative h-[620px] overflow-hidden">
                {/* Left - Image */}
                <div
                    className="absolute left-0 top-0 bottom-0 w-[55%]"
                    style={{ clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0 100%)' }}
                >
                    <img
                        src="/테라링크이미지자료/4.png"
                        alt="프로젝트 관리 화면"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-l from-[#f1f5f9]/20 to-transparent pointer-events-none" />
                </div>

                {/* Right - Text & Cards */}
                <div className="relative z-10 flex flex-col justify-between h-full w-[40%] ml-auto">
                    <div className="relative">
                        <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-100 text-teal-600 font-bold tracking-wider text-sm mb-6 shadow-[5px_5px_10px_#cbd5e1,-5px_-5px_10px_#ffffff]">
                            <FolderKanban className="w-4 h-4" />
                            PROJECT MANAGEMENT
                        </span>
                        <h2 className="mt-4 text-4xl font-bold text-text-main leading-tight">
                            체계적인
                            <br />
                            <span className="text-brand-blue">프로젝트 관리</span>
                        </h2>
                        <p className="mt-5 text-base text-text-muted leading-relaxed">
                            현장별로 프로젝트를 구분하고 상태를 관리하여
                            <br />
                            효율적인 작업 흐름과 가시성을 확보합니다.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4">
                        {[
                            { title: '현장별 프로젝트 관리', desc: '진행 중인 프로젝트와 완료된 현장을 체계적으로 보관', icon: Archive, color: 'from-brand-blue to-brand-cyan' },
                            { title: '상태별 관리', desc: '프로젝트 진행, 중지, 완료 상태를 한눈에 파악', icon: ListTodo, color: 'from-emerald-500 to-teal-400' },
                            { title: '좌표계 표준화', desc: '현장마다 다른 좌표계 설정을 전사적으로 표준화', icon: Crosshair, color: 'from-violet-500 to-purple-400' }
                        ].map((item, idx) => {
                            const Icon = item.icon;
                            return (
                                <div key={idx} className="flex items-center gap-4 p-5 bg-white/50 backdrop-blur-md rounded-2xl shadow-md border border-white/40 mb-1">
                                    <div className={`w-12 h-12 flex items-center justify-center bg-linear-to-br ${item.color} rounded-xl shrink-0 shadow-md`}>
                                        <Icon className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-text-main mb-1">{item.title}</h4>
                                        <p className="text-sm text-text-muted">{item.desc}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}