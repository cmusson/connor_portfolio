"use client";
import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { DownloadLink } from "../Links";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const PdfViewer = () => {
  const fileName = "ConnorMusson_CVResume";
  const fileUrl = "/cv_resume/Connor-Musson-CV-Resume.pdf";

  return (
    <div className="flex flex-col items-center justify-end min-h-[560px]">
      <Document
        className="text-neutral-100"
        file={"/cv_resume/Connor-Musson-CV-Resume.pdf"}
        onLoadSuccess={() => {}}
      >
        <Page
          className="border"
          pageNumber={1}
          renderTextLayer={false}
          renderAnnotationLayer={false}
          scale={0.6}
        />
      </Document>

      <DownloadLink fileName={fileName} fileUrl={fileUrl}>
        Download CV/Resume
      </DownloadLink>
    </div>
  );
};

export default PdfViewer;
