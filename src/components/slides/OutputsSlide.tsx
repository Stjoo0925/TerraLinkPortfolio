'use client';

import React from 'react';
import { FileSpreadsheet, FileText, Table2, Archive, Download } from 'lucide-react';

export default function OutputsSlide() {
    const formats = [
        { icon: FileSpreadsheet, label: 'Excel', desc: '스프레드시트', color: 'from-emerald-500 to-green-400' },
        { icon: Table2, label: 'CSV', desc: '범용 데이터', color: 'from-violet-500 to-purple-400' },
        { icon: FileText, label: 'TXT', desc: '텍스트 형식', color: 'from-slate-500 to-gray-400' },
        { icon: Archive, label: 'ZIP', desc: '일괄 압축', color: 'from-amber-500 to-orange-400' }
    ];

    return (
        <>
            <div className="flex justify-center mb-10">
                <div className="relative p-6 px-12 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl text-center">
                    <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 text-white font-bold tracking-wider text-sm mb-4 backdrop-blur-sm border border-white/20">
                        <Download className="w-4 h-4" />
                        SURVEY EXPORT
                    </span>
                    <h2 className="mt-4 text-4xl font-bold text-white">다양한 형식의 성과물 도출</h2>
                    <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
                        측량 데이터를 원하는 포맷으로 변환하여 다양한 시스템과 연동할 수 있습니다
                    </p>
                </div>
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-2 gap-8 mb-8">
                {/* Left - Report Export */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col">
                    <div className="p-4 flex-1 flex items-center justify-center">
                        <img
                            src="/테라링크이미지자료/11.png"
                            alt="보고서 내보내기"
                            className="w-full h-auto max-h-[200px] object-contain drop-shadow-2xl"
                        />
                    </div>
                    <div className="p-4 bg-white/5 border-t border-white/10 flex items-center justify-center gap-2">
                        <FileText className="w-4 h-4 text-brand-cyan" />
                        <p className="text-white font-medium text-sm">측량 보고서 내보내기</p>
                    </div>
                </div>
                {/* Right - Data Export */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col">
                    <div className="p-4 flex-1 flex items-center justify-center">
                        <img
                            src="/테라링크이미지자료/12.png"
                            alt="원시 데이터 내보내기"
                            className="w-full h-auto max-h-[200px] object-contain drop-shadow-2xl"
                        />
                    </div>
                    <div className="p-4 bg-white/5 border-t border-white/10 flex items-center justify-center gap-2">
                        <Table2 className="w-4 h-4 text-brand-cyan" />
                        <p className="text-white font-medium text-sm">원시 성과 데이터 내보내기</p>
                    </div>
                </div>
            </div>

            {/* Format Support */}
            <div className="flex justify-center gap-4">
                {formats.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                        <div key={idx} className="flex items-center gap-3 px-6 py-4 bg-white/10 backdrop-blur-md rounded-xl shadow-xl border border-white/10">
                            <div className={`w-10 h-10 rounded-xl bg-linear-to-br ${item.color} flex items-center justify-center shadow-md`}>
                                <Icon className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <span className="font-bold text-white block">{item.label}</span>
                                <span className="text-xs text-white/60">{item.desc}</span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}
