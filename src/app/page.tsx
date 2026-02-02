'use client';

import React from 'react';
import SlideLayout from '@/components/SlideLayout';
import CoverSlide from '@/components/slides/CoverSlide';
import PainPointsSlide from '@/components/slides/PainPointsSlide';
import IntegrationSlide from '@/components/slides/IntegrationSlide';
import ProjectMgmtSlide from '@/components/slides/ProjectMgmtSlide';
import CoordinateSlide from '@/components/slides/CoordinateSlide';
import CloudStorageSlide from '@/components/slides/CloudStorageSlide';
import DataManagementSlide from '@/components/slides/DataManagementSlide';
import WebCadSlide from '@/components/slides/WebCadSlide';
import OutputsSlide from '@/components/slides/OutputsSlide';
import AdminSlide from '@/components/slides/AdminSlide';
import ExpectationsSlide from '@/components/slides/ExpectationsSlide';
import FinalSlide from '@/components/slides/FinalSlide';
import Header from '@/components/Header';

export default function Home() {
  return (
    <>
      <Header />

      <div className="scroll-wrapper flex w-screen h-screen overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] print:!block print:!overflow-visible print:!h-auto print:!w-auto z-10 relative">
        {/* Slide 1: Cover */}
        <SlideLayout variant="brand">
          <CoverSlide />
        </SlideLayout>

        {/* Slide 2: Pain Points / Market Needs */}
        <SlideLayout pageNumber={2} variant="dark">
          <PainPointsSlide />
        </SlideLayout>

        {/* Slide 3: Integration with TerraSurvey */}
        <SlideLayout pageNumber={3} variant="dark">
          <IntegrationSlide />
        </SlideLayout>

        {/* Slide 4: Project Management */}
        <SlideLayout pageNumber={4} variant="gray">
          <ProjectMgmtSlide />
        </SlideLayout>

        {/* Slide 5: Coordinate System */}
        <SlideLayout pageNumber={5} variant="gray">
          <CoordinateSlide />
        </SlideLayout>

        {/* Slide 6: Cloud Data Center + File Management */}
        <SlideLayout pageNumber={6} variant="gray">
          <CloudStorageSlide />
        </SlideLayout>

        {/* Slide 7: Data Management (8.png, 9.png, 10.png) */}
        <SlideLayout pageNumber={7} variant="gray">
          <DataManagementSlide />
        </SlideLayout>

        {/* Slide 8: Web CAD */}
        <SlideLayout pageNumber={8} variant="brand">
          <WebCadSlide />
        </SlideLayout>

        {/* Slide 9: Outputs (보고서+데이터 내보내기 합침) */}
        <SlideLayout pageNumber={9} variant="dark">
          <OutputsSlide />
        </SlideLayout>

        {/* Slide 10: Admin System */}
        <SlideLayout pageNumber={10} variant="dark">
          <AdminSlide />
        </SlideLayout>

        {/* Slide 11: Expected Effects */}
        <SlideLayout pageNumber={11} variant="default">
          <ExpectationsSlide />
        </SlideLayout>

        {/* Slide 12: Final Call */}
        <SlideLayout pageNumber={12} variant="brand">
          <FinalSlide />
        </SlideLayout>
      </div>
    </>
  );
}
