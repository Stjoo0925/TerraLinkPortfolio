'use client';

import React from 'react';
import SlideLayout from '@/components/SlideLayout';
import CoverSlide from '@/components/slides/CoverSlide';
import PainPointsSlide from '@/components/slides/PainPointsSlide';
import IntegrationSlide from '@/components/slides/IntegrationSlide';
import ProjectMgmtSlide from '@/components/slides/ProjectMgmtSlide';
import CoordinateSlide from '@/components/slides/CoordinateSlide';
import CloudStorageSlide from '@/components/slides/CloudStorageSlide';
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
      <div className="scroll-wrapper">
        {/* Slide 1: Cover */}
        <SlideLayout pageNumber={1} variant="default">
          <CoverSlide />
        </SlideLayout>

        {/* Slide 2: Pain Points / Market Needs */}
        <SlideLayout pageNumber={2} variant="gray">
          <PainPointsSlide />
        </SlideLayout>

        {/* Slide 3: Integration with TerraSurvey */}
        <SlideLayout pageNumber={3} variant="default">
          <IntegrationSlide />
        </SlideLayout>

        {/* Slide 4: Project Management */}
        <SlideLayout pageNumber={4} variant="gray">
          <ProjectMgmtSlide />
        </SlideLayout>

        {/* Slide 5: Coordinate System */}
        <SlideLayout pageNumber={5} variant="default">
          <CoordinateSlide />
        </SlideLayout>

        {/* Slide 6: Cloud Data Center + File Management (합침) */}
        <SlideLayout pageNumber={6} variant="gray">
          <CloudStorageSlide />
        </SlideLayout>

        {/* Slide 7: Web CAD */}
        <SlideLayout pageNumber={7} variant="default">
          <WebCadSlide />
        </SlideLayout>

        {/* Slide 8: Outputs (보고서+데이터 내보내기 합침) */}
        <SlideLayout pageNumber={8} variant="gray">
          <OutputsSlide />
        </SlideLayout>

        {/* Slide 9: Admin System (13.png, 14.png) */}
        <SlideLayout pageNumber={9} variant="default">
          <AdminSlide />
        </SlideLayout>

        {/* Slide 10: Expected Effects */}
        <SlideLayout pageNumber={10} variant="gray">
          <ExpectationsSlide />
        </SlideLayout>

        {/* Slide 11: Final Call */}
        <SlideLayout pageNumber={11} variant="brand">
          <FinalSlide />
        </SlideLayout>
      </div>
    </>
  );
}
