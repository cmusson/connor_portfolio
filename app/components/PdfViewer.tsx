"use client";
import Link from "next/link";
import React from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const PdfViewer = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Document
        className="text-neutral-100"
        file={"/cv_resume/Connor_Musson_CV_Resume.pdf"}
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

      <Link
        href="/cv_resume/Connor_Musson_CV_Resume.pdf"
        download
        className="whitespace-nowrap mt-1 text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
      >
        <button>Download cv/resume</button>
      </Link>
    </div>
  );
};

export default PdfViewer;
