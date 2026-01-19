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

        {/* Slide 6: Cloud Data Center + File Management */}
        <SlideLayout pageNumber={6} variant="gray">
          <CloudStorageSlide />
        </SlideLayout>

        {/* Slide 7: Data Management (8.png, 9.png, 10.png) */}
        <SlideLayout pageNumber={7} variant="default">
          <DataManagementSlide />
        </SlideLayout>

        {/* Slide 8: Web CAD */}
        <SlideLayout pageNumber={8} variant="gray">
          <WebCadSlide />
        </SlideLayout>

        {/* Slide 9: Outputs (보고서+데이터 내보내기 합침) */}
        <SlideLayout pageNumber={9} variant="default">
          <OutputsSlide />
        </SlideLayout>

        {/* Slide 10: Admin System */}
        <SlideLayout pageNumber={10} variant="gray">
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
