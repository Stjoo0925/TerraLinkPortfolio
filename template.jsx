import React, { useState } from 'react';

const slides = [
  { id: 1, title: '표지', type: 'cover' },
  { id: 2, title: '목차', type: 'toc' },
  { id: 3, title: '소개', type: 'intro' },
  { id: 4, title: '문제점', type: 'problem' },
  { id: 5, title: '솔루션', type: 'solution' },
  { id: 6, title: '주요기능', type: 'features' },
  { id: 7, title: '플랫폼', type: 'platform' },
  { id: 8, title: '도입효과', type: 'benefits' },
  { id: 9, title: '가격정책', type: 'pricing' },
  { id: 10, title: '문의', type: 'contact' },
];

// Cover Slide
const CoverSlide = () => (
  <div className="relative w-full h-full bg-gradient-to-br from-sky-950 via-slate-900 to-slate-950 overflow-hidden">
    {/* Topographic pattern */}
    <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 800 600">
      <defs>
        <pattern id="topo" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-cyan-400"/>
          <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-cyan-400"/>
          <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-cyan-400"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#topo)"/>
    </svg>
    
    {/* Grid overlay */}
    <div className="absolute inset-0 opacity-20"
      style={{
        backgroundImage: 'linear-gradient(rgba(34,211,238,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.3) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}
    />
    
    {/* Glow effect */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[100px]" />
    
    {/* Content */}
    <div className="relative z-10 flex flex-col justify-center h-full px-16">
      {/* Logo area */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-sky-500 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/30">
            <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5z"/>
              <path d="M2 17l10 5 10-5"/>
              <path d="M2 12l10 5 10-5"/>
            </svg>
          </div>
          <span className="text-white text-2xl font-bold tracking-tight">TERRA LINK</span>
        </div>
      </div>
      
      <div className="space-y-4">
        <p className="text-cyan-400 tracking-[0.3em] uppercase text-sm font-medium">Cloud Surveying Platform</p>
        <h1 className="text-6xl font-bold text-white leading-tight tracking-tight">
          측량의 미래를<br/>
          <span className="bg-gradient-to-r from-cyan-400 to-sky-400 bg-clip-text text-transparent">클라우드</span>로 연결하다
        </h1>
      </div>
      
      <p className="mt-8 text-slate-400 text-lg max-w-xl leading-relaxed">
        CAD, 좌표계 관리, 측량 계산을 하나의 플랫폼에서.<br/>
        언제 어디서나 접근 가능한 측량 솔루션.
      </p>
      
      <div className="mt-12 flex items-center gap-6">
        <div className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-sky-500 rounded-lg text-white font-semibold shadow-lg shadow-cyan-500/30 cursor-pointer hover:shadow-cyan-500/50 transition-shadow">
          무료 체험 시작하기
        </div>
        <div className="px-6 py-3 border border-slate-600 rounded-lg text-slate-300 hover:border-cyan-500 hover:text-cyan-400 transition-colors cursor-pointer">
          자세히 알아보기 →
        </div>
      </div>
    </div>
    
    {/* Right side graphic */}
    <div className="absolute right-0 top-0 bottom-0 w-1/3 flex items-center justify-center">
      <div className="relative w-64 h-64">
        <div className="absolute inset-0 border-2 border-cyan-500/30 rounded-full animate-pulse" />
        <div className="absolute inset-4 border border-cyan-500/20 rounded-full" />
        <div className="absolute inset-8 border border-dashed border-cyan-500/30 rounded-full" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-5xl font-bold text-cyan-400">GIS</div>
            <div className="text-slate-500 text-sm mt-2">+ CAD + Cloud</div>
          </div>
        </div>
        {/* Orbital dots */}
        {[0, 60, 120, 180, 240, 300].map((deg, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"
            style={{
              top: `${50 + 45 * Math.sin((deg * Math.PI) / 180)}%`,
              left: `${50 + 45 * Math.cos((deg * Math.PI) / 180)}%`,
              transform: 'translate(-50%, -50%)'
            }}
          />
        ))}
      </div>
    </div>
  </div>
);

// TOC Slide
const TOCSlide = () => (
  <div className="relative w-full h-full bg-white overflow-hidden">
    {/* Side accent */}
    <div className="absolute left-0 top-0 w-2 h-full bg-gradient-to-b from-cyan-500 to-sky-600" />
    
    <div className="h-full p-16 pl-20">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-sky-500 rounded flex items-center justify-center">
          <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2L2 7l10 5 10-5-10-5z"/>
          </svg>
        </div>
        <span className="text-slate-900 font-bold">TERRA LINK</span>
      </div>
      
      <h2 className="text-4xl font-bold text-slate-900 mb-2 mt-8">목차</h2>
      <p className="text-slate-500 mb-10">Contents</p>
      
      <div className="grid grid-cols-2 gap-x-16 gap-y-6">
        {[
          { num: '01', title: '테라링크 소개', desc: '클라우드 측량 플랫폼의 비전' },
          { num: '02', title: '현재의 문제점', desc: '기존 측량 소프트웨어의 한계' },
          { num: '03', title: '솔루션 제안', desc: '테라링크가 제시하는 해결책' },
          { num: '04', title: '주요 기능', desc: 'CAD, 좌표계, 측량 계산' },
          { num: '05', title: '플랫폼 구성', desc: '웹, 모바일, API 연동' },
          { num: '06', title: '도입 효과', desc: '생산성 향상 및 비용 절감' },
          { num: '07', title: '가격 정책', desc: '합리적인 구독 플랜' },
          { num: '08', title: '문의 및 도입', desc: '무료 체험 및 상담 안내' },
        ].map((item) => (
          <div key={item.num} className="flex gap-4 group cursor-pointer">
            <span className="text-cyan-500 font-mono text-lg font-bold">{item.num}</span>
            <div className="flex-1 border-b border-slate-200 pb-4 group-hover:border-cyan-500 transition-colors">
              <h3 className="text-slate-900 font-semibold mb-1">{item.title}</h3>
              <p className="text-slate-500 text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    
    {/* Page number */}
    <div className="absolute bottom-8 right-8 text-slate-300 text-sm">02 / 10</div>
  </div>
);

// Intro Slide
const IntroSlide = () => (
  <div className="relative w-full h-full bg-gradient-to-br from-slate-50 to-sky-50 overflow-hidden">
    {/* Decorative circles */}
    <div className="absolute -top-20 -right-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
    <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-sky-500/10 rounded-full blur-3xl" />
    
    <div className="relative z-10 h-full p-16 flex">
      {/* Left content */}
      <div className="w-1/2 pr-12 flex flex-col justify-center">
        <p className="text-cyan-600 tracking-wider uppercase text-sm font-semibold mb-4">About Terra Link</p>
        <h2 className="text-4xl font-bold text-slate-900 leading-tight mb-6">
          측량 전문가를 위한<br/>
          <span className="text-cyan-600">올인원 클라우드 플랫폼</span>
        </h2>
        
        <p className="text-slate-600 leading-relaxed mb-8">
          테라링크는 측량 업무에 필요한 모든 기능을 클라우드 기반으로 제공하는 
          통합 솔루션입니다. CAD 도면 작업부터 좌표계 변환, 토공량 계산까지 
          하나의 플랫폼에서 처리할 수 있습니다.
        </p>
        
        <div className="grid grid-cols-3 gap-4">
          {[
            { value: '500+', label: '활성 사용자' },
            { value: '99.9%', label: '서비스 안정성' },
            { value: '24/7', label: '기술 지원' },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-4 bg-white rounded-xl shadow-sm">
              <div className="text-2xl font-bold text-cyan-600">{stat.value}</div>
              <div className="text-slate-500 text-xs mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Right visual */}
      <div className="w-1/2 flex items-center justify-center">
        <div className="relative bg-white rounded-2xl shadow-2xl shadow-slate-200/50 p-6 w-full max-w-sm">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 bg-red-400 rounded-full" />
            <div className="w-3 h-3 bg-yellow-400 rounded-full" />
            <div className="w-3 h-3 bg-green-400 rounded-full" />
          </div>
          
          {/* Mock interface */}
          <div className="space-y-3">
            <div className="h-32 bg-gradient-to-br from-slate-100 to-slate-50 rounded-lg flex items-center justify-center">
              <svg className="w-16 h-16 text-cyan-500/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
                <path d="M3 9h18"/>
                <path d="M9 21V9"/>
              </svg>
            </div>
            <div className="flex gap-2">
              <div className="flex-1 h-8 bg-cyan-500 rounded text-white text-xs flex items-center justify-center font-medium">CAD 뷰어</div>
              <div className="flex-1 h-8 bg-slate-100 rounded text-slate-600 text-xs flex items-center justify-center">좌표계</div>
              <div className="flex-1 h-8 bg-slate-100 rounded text-slate-600 text-xs flex items-center justify-center">계산</div>
            </div>
            <div className="space-y-2">
              <div className="h-3 bg-slate-100 rounded-full w-full" />
              <div className="h-3 bg-slate-100 rounded-full w-4/5" />
              <div className="h-3 bg-slate-100 rounded-full w-3/5" />
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div className="absolute bottom-8 right-8 text-slate-400 text-sm">03 / 10</div>
  </div>
);

// Problem Slide
const ProblemSlide = () => (
  <div className="relative w-full h-full bg-slate-900 overflow-hidden">
    {/* Warning pattern */}
    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500" />
    
    <div className="h-full p-16">
      <p className="text-orange-400 tracking-wider uppercase text-sm font-semibold mb-4">Pain Points</p>
      <h2 className="text-4xl font-bold text-white mb-12">
        기존 측량 소프트웨어의 <span className="text-orange-400">한계</span>
      </h2>
      
      <div className="grid grid-cols-2 gap-6">
        {[
          {
            icon: '💾',
            title: '로컬 설치의 제약',
            desc: '고가의 라이선스 비용, 특정 PC에서만 사용 가능, 버전 관리의 어려움',
            stat: '연간 300만원+'
          },
          {
            icon: '🔄',
            title: '데이터 공유의 어려움',
            desc: '파일 기반 작업으로 실시간 협업 불가, 버전 충돌 및 데이터 손실 위험',
            stat: '30% 시간 낭비'
          },
          {
            icon: '📱',
            title: '현장 연동 불가',
            desc: '사무실과 현장 간 데이터 동기화가 어렵고 수기 입력으로 인한 오류 발생',
            stat: '15% 오류율'
          },
          {
            icon: '🔧',
            title: '복잡한 유지보수',
            desc: '업데이트마다 재설치 필요, IT 인력 부족한 중소기업에 큰 부담',
            stat: '월 20시간'
          }
        ].map((item, i) => (
          <div key={i} className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative p-6 border border-slate-700 rounded-xl hover:border-orange-500/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="text-3xl">{item.icon}</div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                    <span className="text-orange-400 text-sm font-mono">{item.stat}</span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 p-4 bg-orange-500/10 border-l-4 border-orange-500 rounded-r-lg">
        <p className="text-slate-300">
          <span className="text-orange-400 font-semibold">결론:</span> 
          {" "}기존 방식으로는 급변하는 측량 산업의 요구를 충족할 수 없습니다.
        </p>
      </div>
    </div>
    
    <div className="absolute bottom-8 right-8 text-slate-600 text-sm">04 / 10</div>
  </div>
);

// Solution Slide
const SolutionSlide = () => (
  <div className="relative w-full h-full bg-white overflow-hidden">
    {/* Background gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-white to-sky-50" />
    
    <div className="relative z-10 h-full p-16">
      <div className="flex items-start justify-between mb-10">
        <div>
          <p className="text-cyan-600 tracking-wider uppercase text-sm font-semibold mb-4">Our Solution</p>
          <h2 className="text-4xl font-bold text-slate-900">
            테라링크가 제시하는 <span className="text-cyan-600">해답</span>
          </h2>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-green-700 text-sm font-medium">클라우드 기반</span>
        </div>
      </div>
      
      <div className="flex gap-8 h-[calc(100%-140px)]">
        {/* Left - Before/After */}
        <div className="w-1/3 space-y-4">
          <div className="p-5 bg-slate-100 rounded-xl border-2 border-dashed border-slate-300">
            <div className="text-slate-500 text-xs font-semibold mb-3">BEFORE</div>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-center gap-2"><span className="text-red-500">✕</span> 로컬 설치 필수</li>
              <li className="flex items-center gap-2"><span className="text-red-500">✕</span> 고가의 라이선스</li>
              <li className="flex items-center gap-2"><span className="text-red-500">✕</span> 협업 불가</li>
              <li className="flex items-center gap-2"><span className="text-red-500">✕</span> 현장 연동 제한</li>
            </ul>
          </div>
          
          <div className="flex justify-center">
            <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white">↓</div>
          </div>
          
          <div className="p-5 bg-gradient-to-br from-cyan-500 to-sky-500 rounded-xl text-white">
            <div className="text-cyan-100 text-xs font-semibold mb-3">AFTER</div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2"><span>✓</span> 웹 브라우저만 있으면 OK</li>
              <li className="flex items-center gap-2"><span>✓</span> 합리적인 구독 요금</li>
              <li className="flex items-center gap-2"><span>✓</span> 실시간 협업</li>
              <li className="flex items-center gap-2"><span>✓</span> 모바일 현장 연동</li>
            </ul>
          </div>
        </div>
        
        {/* Right - Features */}
        <div className="flex-1 grid grid-cols-2 gap-4">
          {[
            { icon: '☁️', title: '클라우드 네이티브', desc: '설치 없이 웹에서 바로 사용\n자동 업데이트 및 백업' },
            { icon: '🗺️', title: '통합 CAD 환경', desc: 'MxDraw 기반 전문 CAD\nDWG/DXF 완벽 호환' },
            { icon: '📐', title: '측량 계산 엔진', desc: '트래버스, TIN, 토공량\n한국 측량 기준 적용' },
            { icon: '🌐', title: '좌표계 관리', desc: 'EPSG 코드 지원\n자동 좌표 변환' },
          ].map((item, i) => (
            <div key={i} className="p-5 bg-white rounded-xl border border-slate-200 hover:border-cyan-300 hover:shadow-lg hover:shadow-cyan-100 transition-all group">
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="text-slate-900 font-semibold mb-2">{item.title}</h3>
              <p className="text-slate-500 text-sm whitespace-pre-line leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    
    <div className="absolute bottom-8 right-8 text-slate-400 text-sm">05 / 10</div>
  </div>
);

// Features Slide
const FeaturesSlide = () => (
  <div className="relative w-full h-full bg-slate-950 overflow-hidden">
    {/* Grid background */}
    <div className="absolute inset-0 opacity-30"
      style={{
        backgroundImage: 'linear-gradient(rgba(34,211,238,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.1) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}
    />
    
    <div className="relative z-10 h-full p-16">
      <p className="text-cyan-400 tracking-wider uppercase text-sm font-semibold mb-4">Core Features</p>
      <h2 className="text-4xl font-bold text-white mb-10">주요 기능</h2>
      
      <div className="grid grid-cols-3 gap-6">
        {[
          {
            category: 'CAD 기능',
            color: 'cyan',
            features: ['DWG/DXF 뷰어 및 편집', '레이어 관리', '도면 출력 및 내보내기', '측정 도구']
          },
          {
            category: '측량 계산',
            color: 'sky',
            features: ['트래버스 계산', 'TIN 생성 및 분석', '토공량(절토/성토) 계산', '횡단면 분석']
          },
          {
            category: '데이터 관리',
            color: 'blue',
            features: ['좌표계 변환', '프로젝트 관리', '버전 히스토리', '팀 협업 및 공유']
          }
        ].map((group, i) => (
          <div key={i} className="relative">
            <div className={`absolute top-0 left-0 w-1 h-full rounded-full bg-gradient-to-b from-${group.color}-400 to-${group.color}-600`} />
            <div className="pl-6">
              <h3 className={`text-${group.color}-400 font-semibold text-lg mb-4`}>{group.category}</h3>
              <ul className="space-y-3">
                {group.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-slate-300">
                    <div className={`w-1.5 h-1.5 bg-${group.color}-400 rounded-full`} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      
      {/* Feature highlight */}
      <div className="mt-10 p-6 bg-gradient-to-r from-cyan-500/10 to-sky-500/10 rounded-xl border border-cyan-500/30">
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-sky-500 rounded-xl flex items-center justify-center text-3xl shadow-lg shadow-cyan-500/30">
            🎯
          </div>
          <div>
            <h4 className="text-white font-semibold text-lg">한국 측량 기준 완벽 지원</h4>
            <p className="text-slate-400 mt-1">국토지리정보원 기준에 맞는 좌표계 및 계산 방식을 적용하여 공공측량에 바로 활용 가능</p>
          </div>
        </div>
      </div>
    </div>
    
    <div className="absolute bottom-8 right-8 text-slate-600 text-sm">06 / 10</div>
  </div>
);

// Platform Slide
const PlatformSlide = () => (
  <div className="relative w-full h-full bg-white overflow-hidden">
    <div className="h-full p-16">
      <p className="text-cyan-600 tracking-wider uppercase text-sm font-semibold mb-4">Platform Architecture</p>
      <h2 className="text-4xl font-bold text-slate-900 mb-10">멀티 플랫폼 지원</h2>
      
      <div className="flex gap-8 items-center justify-center h-[calc(100%-160px)]">
        {/* Platform cards */}
        <div className="flex gap-6">
          {[
            {
              icon: '🖥️',
              title: '웹 애플리케이션',
              desc: '크롬, 엣지 등\n모든 브라우저 지원',
              tag: 'Primary'
            },
            {
              icon: '📱',
              title: '모바일 앱',
              desc: 'iOS & Android\n현장 측량 지원',
              tag: 'Field'
            },
            {
              icon: '🔌',
              title: 'API 연동',
              desc: 'RESTful API\n외부 시스템 연계',
              tag: 'Developer'
            }
          ].map((platform, i) => (
            <div key={i} className="w-56 p-6 bg-gradient-to-b from-slate-50 to-white rounded-2xl border border-slate-200 hover:border-cyan-300 hover:shadow-xl transition-all group">
              <div className="text-4xl mb-4">{platform.icon}</div>
              <span className="px-2 py-1 bg-cyan-100 text-cyan-700 rounded text-xs font-medium">{platform.tag}</span>
              <h3 className="text-slate-900 font-semibold text-lg mt-3 mb-2">{platform.title}</h3>
              <p className="text-slate-500 text-sm whitespace-pre-line">{platform.desc}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Connection diagram */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex items-center gap-4 text-slate-400 text-sm">
        <span>웹</span>
        <div className="w-16 h-px bg-slate-300" />
        <div className="w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center">
          <span className="text-white text-lg">☁️</span>
        </div>
        <div className="w-16 h-px bg-slate-300" />
        <span>모바일</span>
        <div className="w-16 h-px bg-slate-300" />
        <span>API</span>
      </div>
    </div>
    
    <div className="absolute bottom-8 right-8 text-slate-400 text-sm">07 / 10</div>
  </div>
);

// Benefits Slide
const BenefitsSlide = () => (
  <div className="relative w-full h-full bg-gradient-to-br from-emerald-950 via-slate-900 to-slate-950 overflow-hidden">
    {/* Glow */}
    <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-[100px]" />
    
    <div className="relative z-10 h-full p-16">
      <p className="text-emerald-400 tracking-wider uppercase text-sm font-semibold mb-4">Benefits</p>
      <h2 className="text-4xl font-bold text-white mb-10">테라링크 도입 효과</h2>
      
      <div className="grid grid-cols-4 gap-6 mb-10">
        {[
          { value: '70%', label: '업무 시간 단축', icon: '⏱️' },
          { value: '50%', label: '비용 절감', icon: '💰' },
          { value: '0건', label: '데이터 손실', icon: '🛡️' },
          { value: '∞', label: '동시 접속', icon: '👥' },
        ].map((stat, i) => (
          <div key={i} className="text-center p-6 bg-white/5 rounded-xl border border-white/10 hover:border-emerald-500/50 transition-colors">
            <div className="text-3xl mb-2">{stat.icon}</div>
            <div className="text-4xl font-bold text-emerald-400">{stat.value}</div>
            <div className="text-slate-400 text-sm mt-2">{stat.label}</div>
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-2 gap-6">
        <div className="p-6 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-xl border border-emerald-500/30">
          <h3 className="text-emerald-400 font-semibold mb-4 flex items-center gap-2">
            <span>📈</span> 생산성 향상
          </h3>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li>• 클라우드 기반 실시간 협업으로 커뮤니케이션 비용 감소</li>
            <li>• 자동화된 계산 기능으로 수작업 오류 제거</li>
            <li>• 언제 어디서나 접근 가능하여 업무 연속성 보장</li>
          </ul>
        </div>
        
        <div className="p-6 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-xl border border-cyan-500/30">
          <h3 className="text-cyan-400 font-semibold mb-4 flex items-center gap-2">
            <span>💎</span> 비용 효율
          </h3>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li>• 초기 설치 비용 없이 구독료만으로 시작</li>
            <li>• 서버 및 유지보수 비용 절감</li>
            <li>• 필요한 만큼만 사용하는 유연한 과금</li>
          </ul>
        </div>
      </div>
    </div>
    
    <div className="absolute bottom-8 right-8 text-slate-600 text-sm">08 / 10</div>
  </div>
);

// Slide renderer
const SlideContent = ({ type }) => {
  const components = {
    cover: CoverSlide,
    toc: TOCSlide,
    intro: IntroSlide,
    problem: ProblemSlide,
    solution: SolutionSlide,
    features: FeaturesSlide,
    platform: PlatformSlide,
    benefits: BenefitsSlide,
  };
  const Component = components[type];
  return Component ? <Component /> : null;
};

// Main App
export default function TerraLinkCatalog() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col">
      {/* Main slide area */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div 
          className="w-full max-w-5xl aspect-video bg-white shadow-2xl shadow-black/50 overflow-hidden rounded-lg"
          style={{ fontFamily: 'Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif' }}
        >
          <SlideContent type={slides[currentSlide].type} />
        </div>
      </div>
      
      {/* Navigation */}
      <div className="bg-slate-950 border-t border-slate-800 p-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          {/* Slide counter */}
          <div className="text-slate-400">
            <span className="text-cyan-400 font-semibold">{String(currentSlide + 1).padStart(2, '0')}</span>
            <span className="mx-2">/</span>
            <span>{String(slides.length).padStart(2, '0')}</span>
          </div>
          
          {/* Thumbnail navigation */}
          <div className="flex gap-2">
            {slides.map((slide, i) => (
              <button
                key={slide.id}
                onClick={() => setCurrentSlide(i)}
                className={`px-3 py-1 text-xs rounded transition-all ${
                  i === currentSlide 
                    ? 'bg-cyan-500 text-slate-950' 
                    : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                }`}
              >
                {slide.title}
              </button>
            ))}
          </div>
          
          {/* Arrow navigation */}
          <div className="flex gap-2">
            <button
              onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
              disabled={currentSlide === 0}
              className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:border-cyan-500 hover:text-cyan-400 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              ←
            </button>
            <button
              onClick={() => setCurrentSlide(Math.min(slides.length - 1, currentSlide + 1))}
              disabled={currentSlide === slides.length - 1}
              className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:border-cyan-500 hover:text-cyan-400 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}