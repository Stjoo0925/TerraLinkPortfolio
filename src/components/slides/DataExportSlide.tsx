'use client';

import React from 'react';
import { Table2, FileCode, FileSpreadsheet, Archive, Download } from 'lucide-react';

export default function DataExportSlide() {
    const formats = [
        { icon: Table2, title: 'CSV/TXT', desc: '좌표 데이터', color: 'from-brand-blue to-brand-cyan' },
        { icon: FileCode, title: 'DXF', desc: 'CAD 도면', color: 'from-emerald-500 to-teal-400' },
        { icon: FileSpreadsheet, title: 'Excel', desc: '스프레드시트', color: 'from-green-500 to-emerald-400' },
        { icon: Archive, title: 'ZIP', desc: '일괄 내보내기', color: 'from-amber-500 to-orange-400' }
    ];

    return (
        <div className="grid grid-cols-2 gap-16 h-full items-center relative">
            {/* Left - Content */}
            <div>
                <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-linear-to-r from-orange-500/10 to-red-500/10 text-orange-600 font-bold tracking-wider text-sm mb-4">
                    <Download className="w-4 h-4" />
                    DATA EXPORT
                </span>

                <h2 className="text-4xl font-bold text-text-main leading-tight mb-2">
                    원시 성과 데이터<br />
                    <span className="text-brand-blue">다양한 포맷으로 내보내기</span>
                </h2>

                <p className="text-lg text-text-muted mb-8 leading-relaxed">
                    CSV, TXT, DXF 등 다양한 포맷으로 데이터를 내보내<br />
                    CAD 및 오피스 소프트웨어와 원활하게 연동합니다.
                </p>

                <div className="grid grid-cols-2 gap-4">
                    {formats.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <div key={idx} className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-[0_4px_15px_rgba(0,0,0,0.06)] border border-slate-100">
                                <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${item.color} flex items-center justify-center shrink-0 shadow-md`}>
                                    <Icon className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-text-main">{item.title}</h4>
                                    <p className="text-sm text-text-muted">{item.desc}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Right - Image */}
            <div className="relative">
                {/* Background Blur Effect */}
                <div className="absolute top-[10%] right-[5%] w-[80%] h-[80%] bg-linear-to-br from-brand-blue/15 to-brand-cyan/10 rounded-3xl blur-2xl -z-10" />

                <div className="relative bg-[#1a1a2e] rounded-2xl p-3 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.35)]">
                    <img
                        src="/테라링크이미지자료/원시데이터내보내기.png"
                        alt="원시 데이터 내보내기"
                        className="w-full h-auto min-h-[360px] object-contain rounded-xl bg-[#1a1a2e]"
                    />
                </div>
            </div>
        </div>
    );
}
