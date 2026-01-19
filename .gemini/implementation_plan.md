# 🍎 TerraLink 제안서 - Apple 스타일 리디자인 계획

## 📋 프로젝트 개요

**목표:** 현재 디자인을 **애플(Apple) 수준의 프리미엄 제안서**로 완전히 재탄생

**핵심 요구사항:**
- ✅ 세로 형태 A4 (210mm × 297mm) PDF 인쇄 최적화
- ✅ 모든 콘텐츠 계승 및 재구성
- ✅ 심미안적이고 프리미엄한 디자인
- ✅ 스크롤 없는 한 페이지 = 한 슬라이드

---

## 🎨 디자인 방향성

### Apple 디자인 철학 적용
1. **미니멀리즘** - 불필요한 요소 제거, 여백의 미학
2. **대담한 타이포그래피** - SF Pro 스타일의 굵은 헤드라인
3. **세련된 색상 팔레트** - 모노크롬 + 단일 액센트 컬러
4. **정제된 그리드 시스템** - 8포인트 그리드 기반
5. **미묘한 그라데이션과 섀도우** - 깊이감 표현

### 색상 팔레트
```
Primary Black: #1D1D1F
Secondary: #86868B  
Background: #FBFBFD
White: #FFFFFF
Accent Blue: #0071E3 (Apple Blue)
Accent Gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%)
```

### 타이포그래피
```
Headline: SF Pro Display / Apple System (fallback: Inter)
Body: Pretendard (한글 최적화)
Sizes: 
  - Hero Title: 72px
  - Section Title: 36-48px
  - Subtitle: 24px
  - Body: 16-18px
  - Caption: 12-14px
```

---

## 📄 슬라이드 구조 (11페이지)

### Page 01: Cover (표지)
- 대형 타이포그래피 중심
- 미니멀한 로고 배치
- 날짜 및 발표자 정보
- 우측 하단 페이지 인디케이터

### Page 02: Market Needs (시장 니즈 / 현재 문제점)
- 좌측: 섹션 라벨 + 제목
- 우측: 문제점 3-4개 아이콘 그리드
- 클린한 화이트 배경

### Page 03: Solution Overview (솔루션 개요)
- "TerraLink" 대형 타이틀
- 핵심 가치 제안 3가지 (아이콘 + 텍스트)
- 심플한 다이어그램

### Page 04: Platform Integration (플랫폼 연동)
- 현장 → 클라우드 → 사무실 플로우
- 미니멀한 인포그래픽
- Web CAD 스크린샷 (깔끔한 프레임)

### Page 05: Key Features 1 (핵심 기능 - 프로젝트 관리)
- 2분할 레이아웃
- 좌: 스크린샷
- 우: 기능 설명 리스트

### Page 06: Key Features 2 (핵심 기능 - 클라우드 센터)
- 풀 블리드 이미지 배경 (블러 처리)
- 오버레이 텍스트

### Page 07: Key Features 3 (핵심 기능 - 모니터링)
- 카드 그리드 (2×2)
- 각 카드: 아이콘 + 제목 + 설명

### Page 08: Deliverables (성과물 도출)
- 보고서 미리보기 이미지
- 자동 생성 프로세스 다이어그램

### Page 09: Report Automation (문서 자동화)
- 보고서 템플릿 쇼케이스
- "즉시 출력" 강조

### Page 10: Expected Results (기대 효과)
- 3개 대형 숫자 (40%, 0%, 100%)
- 각각 설명 텍스트
- 그라데이션 배경 카드

### Page 11: Thank You (마무리)
- "Link the Ground." 대형 타이포
- CTA 버튼
- 연락처 정보 (미니멀)

---

## 🛠 기술적 구현 계획

### Phase 1: 디자인 시스템 재구축
1. `globals.css` 완전 재작성
   - CSS 변수 정의 (색상, 타이포그래피, 스페이싱)
   - A4 세로 레이아웃 최적화
   - 프린트 미디어 쿼리 개선
   
2. 새로운 유틸리티 클래스 생성
   - `.apple-card` - 프리미엄 카드 스타일
   - `.apple-title` - 대담한 헤드라인
   - `.apple-subtitle` - 세련된 서브텍스트
   - `.apple-grid` - 정렬된 그리드 시스템

### Phase 2: 공통 컴포넌트 재설계
1. `SlideLayout.tsx` 재설계
   - A4 세로 비율 (210mm × 297mm)
   - 페이지 여백 표준화 (20mm)
   - 페이지 번호 스타일링

2. `Header.tsx` 간소화
   - 프린트 시 숨김 처리 개선—
   - 더 세련된 네비게이션

### Phase 3: 각 슬라이드 완전 재설계
모든 13개 슬라이드 컴포넌트를 Apple 스타일로 재작성:

1. `CoverSlide.tsx` - 표지
2. `PainPointsSlide.tsx` - 문제점 → Market Needs로 리브랜딩
3. `IntegrationSlide.tsx` - 플랫폼 연동
4. `CustomFeaturesSlide.tsx` - 커스텀 기능
5. `ProjectMgmtSlide.tsx` - 프로젝트 관리
6. `CloudStorageSlide.tsx` - 클라우드 센터
7. `CloudStatusSlide.tsx` - 현황 모니터링
8. `SurveyOutcomesSlide.tsx` - 성과물 도출
9. `ReportingSlide.tsx` - 문서 자동화
10. `ExpectationsSlide.tsx` - 기대 효과
11. `FinalSlide.tsx` - 마무리

### Phase 4: PDF 출력 최적화
1. `@media print` 스타일 개선
2. 페이지 브레이크 정확한 제어
3. 색상 정확도 보장 (`print-color-adjust: exact`)

---

## ✅ 체크리스트

- [ ] 디자인 시스템 (globals.css) 재구축
- [ ] SlideLayout 컴포넌트 재설계
- [ ] Cover 슬라이드 재설계
- [ ] Market Needs 슬라이드 재설계
- [ ] Platform Integration 슬라이드 재설계
- [ ] Features 슬라이드들 재설계 (5개)
- [ ] Expected Results 슬라이드 재설계
- [ ] Final 슬라이드 재설계
- [ ] PDF 인쇄 테스트
- [ ] 최종 검토 및 미세 조정

---

## 📌 참고 사항

- 모든 이미지는 기존 `/public/테라링크이미지자료/` 폴더 활용
- 한글 본문은 Pretendard 폰트 사용
- 영문 헤드라인은 Inter (SF Pro 대체) 사용
- 반응형 불필요 (A4 고정 크기)
