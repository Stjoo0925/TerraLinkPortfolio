import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "TerraLink - Smart Surveying Cloud",
  description: "현장 측량부터 클라우드 데이터 관리까지, TerraSurvey 2025와 함께하는 완벽한 워크플로우",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body>
        <Header />
        <main className="main-content">
          {children}
        </main>
      </body>
    </html>
  );
}
