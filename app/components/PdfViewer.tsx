"use client";
import React from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const PdfViewer = () => {
  return (
    <div className="flex flex-col items-center ">
      <Document
        file={"/cv_resume/Connor_Musson_CV_Resume.pdf"}
        onLoadSuccess={() => {}}
      >
        <Page
          className="border"
          pageNumber={1}
          renderTextLayer={false}
          renderAnnotationLayer={false}
        />
      </Document>
    </div>
  );
};

export default PdfViewer;
