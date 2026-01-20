'use client';

import React from 'react';
import { Phone, Mail, Globe } from 'lucide-react';

export default function FinalSlide() {
    return (
        <div className="h-full w-full relative flex flex-col items-center justify-center overflow-hidden">
            {/* Main Content */}
            <div className="relative z-10 text-center max-w-5xl px-12 py-16 rounded-[3rem] bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl">

                {/* Main Title */}
                <h1 className="text-[5rem] lg:text-[7rem] font-black leading-[0.85] tracking-tight mb-10">
                    <span className="text-white">Link the</span>
                    <br />
                    <span className="bg-linear-to-r from-cyan-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                        Ground.
                    </span>
                </h1>

                {/* Divider */}
                <div className="flex items-center justify-center gap-3 mb-8">
                    <div className="w-12 h-px bg-linear-to-r from-transparent to-cyan-500/40" />
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                    <div className="w-12 h-px bg-linear-to-l from-transparent to-cyan-500/40" />
                </div>

                {/* Subtitle */}
                <p className="text-lg lg:text-xl text-slate-300 font-light mb-20">
                    대한민국 측량 협업의 <span className="text-white font-medium">새로운 표준</span>
                </p>

                {/* Contact Info */}
                <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10 text-white text-sm">
                    <span className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        <span>yuscon@yuscon.co.kr</span>
                    </span>
                    <span className="hidden sm:block w-px h-4 bg-slate-700" />
                    <span className="flex items-center gap-2">
                        <Globe className="w-4 h-4" />
                        <span>terra-link.co.kr</span>
                    </span>
                    <span className="hidden sm:block w-px h-4 bg-slate-700" />
                    <span className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        <span>02-420-8806</span>
                    </span>
                </div>
            </div>



            {/* Corner Frames */}
            <div className="absolute top-6 left-6 w-12 h-12 border-l border-t border-cyan-500/20 rounded-tl" />
            <div className="absolute bottom-6 right-6 w-12 h-12 border-r border-b border-cyan-500/20 rounded-br" />
        </div>
    );
}