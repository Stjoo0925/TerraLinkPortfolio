'use client';

import React from 'react';

export default function CoverSlide() {

    return (
        <div className="h-full w-full relative flex items-center pl-10 lg:pl-[120px] pr-12 overflow-hidden">
            {/* Background Image Section - Skewed & Sharper Blend */}
            <div className="absolute right-0 top-0 w-[55%] h-full -skew-x-12 origin-bottom translate-x-20 -z-10 overflow-hidden group border-l border-white/5">
                {/* Counter Skew Container */}
                <div className="absolute inset-0 skew-x-12 scale-125 origin-bottom">
                    <div className="relative w-full h-full">
                        {/* Image - Sharper, Less Blur */}
                        <img
                            src="/테라링크이미지자료/terralink_cover_bg.png"
                            alt="TerraLink Platform"
                            className="w-full h-full object-cover object-left opacity-90 mix-blend-normal grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
                        />
                        {/* Blue Tint Overlay (Instead of blur/mix-blend-overlay which might look blurry) */}
                        <div className="absolute inset-0 bg-brand-blue/10 mix-blend-multiply" />

                        {/* Gradient Mask for Smooth Transition */}
                        <div className="absolute inset-0 bg-linear-to-r from-brand-blue via-brand-blue/50 to-transparent" />
                    </div>
                </div>
            </div>

            {/* Reduced Blur Decorative Element */}
            <div className="absolute right-[5%] bottom-[5%] w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(255,255,255,0.05)_0%,transparent_70%)] blur-2xl -z-10" />

            <div className="max-w-5xl z-10 fade-up">
                <div className="relative p-10 lg:p-14 rounded-[3rem] bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl">
                    {/* Tagline - White style */}
                    <div className="flex items-center gap-3 mb-10">
                        <span className="px-3.5 py-1.5 bg-white/10 text-white text-[0.8rem] font-bold tracking-[0.2em] uppercase rounded-sm border border-white/20">
                            Survey Cloud Platform
                        </span>
                    </div>

                    {/* Main Title - Massive & Clean - Cyan Accents */}
                    <h1 className="text-[6.5rem] lg:text-[9.5rem] font-black leading-[0.85] tracking-tighter text-white mb-12 -ml-1 select-none">
                        Terra<span className="text-brand-cyan">Link</span>
                        <span className="text-brand-cyan leading-none">.</span>
                    </h1>

                    {/* Description - Modern Typography */}
                    <p className="text-2xl lg:text-[2.2rem] text-white/90 font-light leading-snug max-w-3xl tracking-tight">
                        현장과 사무실을 잇는<br />
                        <span className="text-white font-bold">가장 완벽한 디지털 워크플로우</span>
                    </p>
                </div>

                {/* Bottom Info / Signature */}
                <div className="mt-32 flex items-center gap-4 text-xs lg:text-sm text-white/40 font-mono tracking-[0.15em]">
                    <div className="w-12 h-px bg-white/30" />
                    <span>PUBLISHED BY YUSCON</span>
                </div>
            </div>
        </div>
    );
}
