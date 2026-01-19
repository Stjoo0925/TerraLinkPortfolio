import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import PptxGenJS from 'pptxgenjs';

// 슬라이드 정보
const slideData = [
  { id: 1, title: '표지', path: '/' },
  { id: 2, title: '시장 니즈', path: '/slides/2' },
  { id: 3, title: '플랫폼 연동', path: '/slides/3' },
  { id: 4, title: '커스텀 기능', path: '/slides/4' },
  { id: 5, title: '프로젝트 관리', path: '/slides/5' },
  { id: 6, title: '클라우드 센터', path: '/slides/6' },
  { id: 7, title: '현황 모니터링', path: '/slides/7' },
  { id: 8, title: '성과물 도출', path: '/slides/8' },
  { id: 9, title: '문서 자동화', path: '/slides/9' },
  { id: 10, title: '기대 효과', path: '/slides/10' },
  { id: 11, title: '마무리', path: '/slides/11' },
];

export async function downloadPDF() {
  const pdf = new jsPDF('l', 'mm', 'a4');
  const pdfWidth = 297; // A4 가로
  const pdfHeight = 210; // A4 세로

  // 현재 페이지의 슬라이드 요소 캡처
  const slideElement = document.querySelector('.slide') as HTMLElement;
  
  if (!slideElement) {
    console.error('슬라이드 요소를 찾을 수 없습니다.');
    return;
  }

  // 임시 컨테이너 생성 (모든 슬라이드를 순차적으로 렌더링)
  const tempContainer = document.createElement('div');
  tempContainer.style.position = 'fixed';
  tempContainer.style.left = '-9999px';
  tempContainer.style.top = '0';
  tempContainer.style.width = '1600px';
  tempContainer.style.height = '900px';
  document.body.appendChild(tempContainer);

  try {
    // 각 슬라이드를 fetch하고 캡처
    for (let i = 0; i < slideData.length; i++) {
      const slide = slideData[i];
      
      // 현재 페이지가 해당 슬라이드라면 직접 캡처
      if (window.location.pathname === slide.path || 
          (window.location.pathname === '/' && slide.id === 1)) {
        const canvas = await html2canvas(slideElement, {
          scale: 2,
          useCORS: true,
          logging: false,
          width: 1600,
          height: 900,
          windowWidth: 1600,
          windowHeight: 900,
        });
        
        const imgData = canvas.toDataURL('image/jpeg', 0.95);
        
        if (i > 0) pdf.addPage();
        pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
      } else {
        // 다른 슬라이드는 iframe으로 로드해서 캡처
        // 단순화를 위해 PPT처럼 코드로 생성
        if (i > 0) pdf.addPage();
        
        // 슬라이드 배경
        pdf.setFillColor(i % 2 === 0 ? 255 : 248, i % 2 === 0 ? 255 : 249, i % 2 === 0 ? 255 : 250);
        pdf.rect(0, 0, pdfWidth, pdfHeight, 'F');
        
        // 제목
        pdf.setFont('helvetica', 'bold');
        pdf.setFontSize(14);
        pdf.setTextColor(77, 168, 199);
        pdf.text(`Slide ${slide.id}`, 20, 30);
        
        pdf.setFontSize(28);
        pdf.setTextColor(15, 23, 42);
        pdf.text(slide.title, 20, 50);
      }
    }
    
    // 파일 확장자 명시적 지정
    const pdfBlob = pdf.output('blob');
    const pdfUrl = URL.createObjectURL(pdfBlob);
    const pdfLink = document.createElement('a');
    pdfLink.href = pdfUrl;
    pdfLink.download = 'TerraLink_Product_Introduction.pdf';
    document.body.appendChild(pdfLink);
    pdfLink.click();
    document.body.removeChild(pdfLink);
    URL.revokeObjectURL(pdfUrl);
  } finally {
    document.body.removeChild(tempContainer);
  }
}

export function downloadPPT() {
  const pptx = new PptxGenJS();
  pptx.layout = 'LAYOUT_WIDE';

  // Slide 1: Cover
  const slide1 = pptx.addSlide();
  slide1.background = { color: 'FFFFFF' };
  slide1.addText('Smart Surveying Cloud', { x: 0.5, y: 1.0, fontSize: 18, color: '4da8c7', bold: true });
  slide1.addText('TerraLink', { x: 0.5, y: 1.5, fontSize: 60, color: '005c9a', bold: true });
  slide1.addText('현장 측량부터 클라우드 데이터 관리까지', { x: 0.5, y: 3.0, fontSize: 24, color: '0f172a' });
  slide1.addText('TerraSurvey 2025와 함께하는 완벽한 워크플로우', { x: 0.5, y: 3.5, fontSize: 24, color: '0f172a', bold: true });

  // Slide 2: Pain Points
  const slide2 = pptx.addSlide();
  slide2.background = { color: 'F8F9FA' };
  slide2.addText('Market Needs', { x: 0.5, y: 0.5, fontSize: 14, color: '4da8c7', bold: true });
  slide2.addText('기존 측량 업무의 비효율성', { x: 0.5, y: 1.0, fontSize: 32, bold: true, color: '0f172a' });
  const painPoints = [
    { title: '중복 업무 발생', desc: '현장 야장 작성 후 사무실에서 다시 PC에 입력하는 번거로움' },
    { title: '데이터 분실 위험', desc: '개인 기기에 저장된 데이터의 누락 및 이력 관리의 부재' },
    { title: '지연되는 협업', desc: '현장 데이터가 사무실로 전달될 때까지 발생하는 의사결정 지연' },
    { title: '입력 오류', desc: '수기 데이터를 옮기는 과정에서 발생하는 휴먼 에러' }
  ];
  painPoints.forEach((p, idx) => {
    slide2.addShape(pptx.ShapeType.rect, { x: 0.5 + (idx * 3.1), y: 2.2, w: 2.9, h: 2.5, fill: { color: 'FFFFFF' }, line: { color: 'E2E8F0', width: 1 } });
    slide2.addText(p.title, { x: 0.6 + (idx * 3.1), y: 2.5, w: 2.7, fontSize: 16, color: '005c9a', bold: true });
    slide2.addText(p.desc, { x: 0.6 + (idx * 3.1), y: 3.2, w: 2.7, fontSize: 12, color: '64748b' });
  });

  // Slide 3: Integration
  const slide3 = pptx.addSlide();
  slide3.background = { color: 'FFFFFF' };
  slide3.addText('Platform Synergy', { x: 0.5, y: 0.5, fontSize: 14, color: '4da8c7', bold: true });
  slide3.addText('TerraSurvey 2025와 완벽한 데이터 연동', { x: 0.5, y: 1.0, fontSize: 32, bold: true, color: '0f172a' });
  slide3.addText('TerraSurvey2025 지원 측량 장비를 통해 관측된 모든 데이터는 클린한 상태로 TerraLink 클라우드에 실시간 동기화됩니다.', { x: 0.5, y: 2.0, w: 8, fontSize: 16, color: '64748b' });
  
  // Feature boxes
  slide3.addShape(pptx.ShapeType.rect, { x: 0.5, y: 3.0, w: 5.5, h: 1.2, fill: { color: 'F8F9FA' }, line: { color: 'E2E8F0', width: 1 } });
  slide3.addText('Perfect Compatibility', { x: 0.8, y: 3.2, fontSize: 16, color: '005c9a', bold: true });
  slide3.addText('TerraSurvey 2025 사용자라면 즉시 연결', { x: 0.8, y: 3.7, fontSize: 12, color: '64748b' });
  
  slide3.addShape(pptx.ShapeType.rect, { x: 0.5, y: 4.4, w: 5.5, h: 1.2, fill: { color: 'F8F9FA' }, line: { color: 'E2E8F0', width: 1 } });
  slide3.addText('Real-time Sync', { x: 0.8, y: 4.6, fontSize: 16, color: '005c9a', bold: true });
  slide3.addText('현장 관측과 동시에 사무실에서 데이터 확인', { x: 0.8, y: 5.1, fontSize: 12, color: '64748b' });

  slide3.addText('현장 관측과 동시에 사무실에서 데이터 확인', { x: 0.8, y: 5.1, fontSize: 12, color: '64748b' });

  // Slide 4: Custom Features
  const slide4 = pptx.addSlide();
  slide4.background = { color: 'FFFFFF' };
  slide4.addText('Advanced Tools', { x: 0.5, y: 0.5, fontSize: 14, color: '4da8c7', bold: true });
  slide4.addText('기본 기능을 넘어선 커스텀 측량 도구', { x: 0.5, y: 1.0, fontSize: 32, bold: true, color: '0f172a' });

  const customFeatures = [
    { title: '점 선택 및 편집', desc: '측량 점을 선택하고 좌표 정보를 실시간으로 편집하여 오차 없는 데이터를 확보할 수 있습니다.' },
    { title: '면적 자동 계산', desc: '복잡한 지형에서도 다각형 영역을 선택하기만 하면 면적과 둘레를 즉시 산출합니다.' },
    { title: '좌표계 설정', desc: '프로젝트별 맞춤 좌표계를 설정하고, 다양한 형식으로 도면 파일을 내보낼 수 있습니다.' }
  ];

  customFeatures.forEach((f, idx) => {
      slide4.addShape(pptx.ShapeType.rect, { x: 0.5 + (idx * 4.2), y: 2.2, w: 3.9, h: 2.5, fill: { color: 'F8F9FA' }, line: { color: 'E2E8F0', width: 1 } });
      slide4.addText(f.title, { x: 0.7 + (idx * 4.2), y: 2.5, w: 3.5, fontSize: 16, color: '005c9a', bold: true });
      slide4.addText(f.desc, { x: 0.7 + (idx * 4.2), y: 3.0, w: 3.5, fontSize: 12, color: '64748b' });
  });

  // Slide 5: Project Management
  const slide5 = pptx.addSlide();
  slide5.background = { color: 'F8F9FA' };
  slide5.addText('Module 01', { x: 0.5, y: 0.5, fontSize: 14, color: '4da8c7', bold: true });
  slide5.addText('체계적인 프로젝트 관리', { x: 0.5, y: 1.0, fontSize: 32, bold: true, color: '0f172a' });
  const modules = [
    { title: '현장별 아카이빙', desc: '진행 중인 프로젝트와 완료된 현장을 구분하여 체계적으로 보관합니다.' },
    { title: '멤버 및 권한 설정', desc: '프로젝트별로 팀원을 초대하고, 읽기/쓰기 권한을 세밀하게 제어합니다.' },
    { title: '좌표계 표준화', desc: '현장마다 다른 좌표계 설정을 전사적으로 표준화하여 오차를 방지합니다.' }
  ];
  modules.forEach((m, idx) => {
    slide5.addShape(pptx.ShapeType.rect, { x: 0.5 + (idx * 4.2), y: 2.2, w: 3.9, h: 2.5, fill: { color: 'FFFFFF' }, line: { color: 'E2E8F0', width: 1 } });
    slide5.addText(m.title, { x: 0.7 + (idx * 4.2), y: 2.5, w: 3.5, fontSize: 18, color: '005c9a', bold: true });
    slide5.addText(m.desc, { x: 0.7 + (idx * 4.2), y: 3.2, w: 3.5, fontSize: 14, color: '64748b' });
  });

  // Slide 6: Cloud Data Center (Storage)
  const slide6 = pptx.addSlide();
  slide6.background = { color: 'FFFFFF' };
  slide6.addText('Module 02', { x: 0.5, y: 0.5, fontSize: 14, color: '4da8c7', bold: true });
  slide6.addText('데이터의 중심, 클라우드 관리 센터', { x: 0.5, y: 1.0, fontSize: 32, bold: true, color: '0f172a' });
  slide6.addShape(pptx.ShapeType.rect, { x: 0.5, y: 2.0, w: 6, h: 3, fill: { color: 'F8F9FA' }, line: { color: 'E2E8F0', width: 1 } });
  slide6.addText('파일 관리 시스템', { x: 0.8, y: 2.3, fontSize: 18, color: '005c9a', bold: true });
  slide6.addText('측량 성과 파일을 클라우드에 안전하게 저장하고 팀원과 즉시 공유합니다.', { x: 0.8, y: 2.9, w: 5.5, fontSize: 14, color: '64748b' });
  slide6.addText('• 실시간 자동 동기화\n• 랜섬웨어 방지 보안 백업\n• 무제한 이력 관리', { x: 0.8, y: 3.6, w: 5.5, fontSize: 12, color: '64748b' });

  // Slide 7: Cloud Data Center (Status)
  const slide7 = pptx.addSlide();
  slide7.background = { color: 'F8F9FA' };
  slide7.addText('Module 02', { x: 0.5, y: 0.5, fontSize: 14, color: '4da8c7', bold: true });
  slide7.addText('한눈에 파악하는 데이터 현황', { x: 0.5, y: 1.0, fontSize: 32, bold: true, color: '0f172a' });
  
  slide7.addShape(pptx.ShapeType.rect, { x: 0.5, y: 2.0, w: 5.5, h: 3.5, fill: { color: 'FFFFFF' }, line: { color: 'E2E8F0', width: 1 } });
  slide7.addText('데이터 대시보드', { x: 0.8, y: 2.3, fontSize: 18, color: '005c9a', bold: true });
  slide7.addText('GNSS, TotalStation, 측량/측설 현황을 직관적인 그래프로 확인합니다.', { x: 0.8, y: 2.8, w: 4.8, fontSize: 12, color: '64748b' });

  slide7.addShape(pptx.ShapeType.rect, { x: 6.5, y: 2.0, w: 5.5, h: 3.5, fill: { color: 'FFFFFF' }, line: { color: 'E2E8F0', width: 1 } });
  slide7.addText('기준점 및 관측 데이터', { x: 6.8, y: 2.3, fontSize: 18, color: '005c9a', bold: true });
  slide7.addText('기준점 데이터와 관측 점/라인 데이터를 리스트 형태로 관리합니다.', { x: 6.8, y: 2.8, w: 4.8, fontSize: 12, color: '64748b' });


  // Slide 8: Survey Outcomes
  const slide8 = pptx.addSlide();
  slide8.background = { color: 'FFFFFF' };
  slide8.addText('Module 03', { x: 0.5, y: 0.5, fontSize: 14, color: '4da8c7', bold: true });
  slide8.addText('원시 데이터 활용 및 포맷 호환', { x: 0.5, y: 1.0, fontSize: 32, bold: true, color: '0f172a' });
  
  slide8.addShape(pptx.ShapeType.rect, { x: 0.5, y: 2.0, w: 5.5, h: 3.5, fill: { color: 'F8F9FA' }, line: { color: 'E2E8F0', width: 1 } });
  slide8.addText('원시 데이터 내보내기', { x: 0.8, y: 2.3, fontSize: 18, color: '005c9a', bold: true });
  slide8.addText('CSV, TXT, Excel 등 다양한 포맷으로 원시 데이터를 내보냅니다.', { x: 0.8, y: 2.8, w: 4.8, fontSize: 12, color: '64748b' });

  slide8.addShape(pptx.ShapeType.rect, { x: 6.5, y: 2.0, w: 5.5, h: 3.5, fill: { color: 'F8F9FA' }, line: { color: 'E2E8F0', width: 1 } });
  slide8.addText('Universal Compatibility', { x: 6.8, y: 2.3, fontSize: 18, color: '005c9a', bold: true });
  slide8.addText('DXF 내보내기를 완벽하게 지원하여 CAD 호환성을 극대화합니다.', { x: 6.8, y: 2.8, w: 4.8, fontSize: 12, color: '64748b' });

  // Slide 9: Reporting
  const slide9 = pptx.addSlide();
  slide9.background = { color: 'F8F9FA' };
  slide9.addText('Module 03', { x: 0.5, y: 0.5, fontSize: 14, color: '4da8c7', bold: true });
  slide9.addText('문서 자동화', { x: 0.5, y: 1.0, fontSize: 32, bold: true, color: '0f172a' });

  slide9.addShape(pptx.ShapeType.rect, { x: 0.5, y: 2.0, w: 12, h: 2, fill: { color: 'FFFFFF' }, line: { color: 'E2E8F0', width: 1 } });
  slide9.addText('Smart Reporting', { x: 0.8, y: 2.5, fontSize: 18, color: '005c9a', bold: true });
  slide9.addText('복잡한 수기 작성 없이 표준 양식의 측량 보고서를 자동으로 생성합니다. (현황 보고서, 성과표, 사진대지 등)', { x: 0.8, y: 3.0, w: 11, fontSize: 12, color: '64748b' });

  slide9.addShape(pptx.ShapeType.rect, { x: 0.5, y: 4.5, w: 12, h: 1.5, fill: { color: 'FFFFFF' }, line: { color: 'E2E8F0', width: 1 } });
  slide9.addText('검측 리포트 지원', { x: 0.8, y: 5.0, fontSize: 18, color: '005c9a', bold: true });
  slide9.addText('감리 제출용 검측 리포트를 신속하게 작성합니다.', { x: 0.8, y: 5.5, w: 11, fontSize: 12, color: '64748b' });


  // Slide 10: Expected Effects
  const slide10 = pptx.addSlide();
  slide10.background = { color: 'FFFFFF' };
  slide10.addText('Expectations', { x: 0.5, y: 0.5, fontSize: 14, color: '4da8c7', bold: true });
  slide10.addText('TerraLink 도입으로 얻는 가치', { x: 0.5, y: 1.0, fontSize: 32, bold: true, color: '0f172a' });
  const effects = [
    { num: '40%', title: '업무 생산성 향상', desc: '데이터 재입력 및 후처리 시간 단축' },
    { num: '0%', title: '데이터 유실 제로', desc: '클라우드 자동 동기화로 이력 보존' },
    { num: '100%', title: '협업의 투명성', desc: '실시간 현장 데이터 공유 및 검토' }
  ];
  effects.forEach((e, idx) => {
    slide10.addText(e.num, { x: 0.5 + (idx * 4.2), y: 2.5, w: 3.9, fontSize: 48, bold: true, align: 'center', color: '005c9a' });
    slide10.addText(e.title, { x: 0.5 + (idx * 4.2), y: 3.5, w: 3.9, fontSize: 18, bold: true, align: 'center', color: '0f172a' });
    slide10.addText(e.desc, { x: 0.5 + (idx * 4.2), y: 4.0, w: 3.9, fontSize: 12, align: 'center', color: '64748b' });
  });

  // Slide 11: Final Call
  const slide11 = pptx.addSlide();
  slide11.background = { color: '005c9a' };
  slide11.addText('Link the Ground.', { x: 0.5, y: 2.0, w: 12.33, fontSize: 60, color: 'FFFFFF', bold: true, align: 'center' });
  slide11.addText('TerraLink가 대한민국 측량 협업의 새로운 표준을 만듭니다.', { x: 0.5, y: 3.5, w: 12.33, fontSize: 20, color: 'FFFFFF', align: 'center' });
  slide11.addText('대표번호: 1234-5678 | 이메일: support@terralink.com | 홈페이지: www.terralink.com', { x: 0.5, y: 5.5, w: 12.33, fontSize: 12, color: 'FFFFFF', align: 'center' });

  // 파일 확장자 명시적 지정
  pptx.writeFile({ fileName: 'TerraLink_Product_Introduction' })
    .then((fileName) => {
      console.log(`PPT 다운로드 완료: ${fileName}`);
    })
    .catch((err) => {
      console.error('PPT 다운로드 오류:', err);
      // fallback: blob으로 직접 다운로드
      pptx.write({ outputType: 'blob' }).then((data) => {
        const blob = data as Blob;
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'TerraLink_Product_Introduction.pptx';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      });
    });
}
