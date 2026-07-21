"use client";

import { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function PdfViewer() {
  const [numPages, setNumPages] = useState(0);
  const [width, setWidth] = useState(800);

  useEffect(() => {
    const resize = () => {
      setWidth(Math.min(window.innerWidth - 24, 900));
    };

    resize();
    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <Document
      file="/pdf/agenda.pdf"
      onLoadSuccess={({ numPages }) => setNumPages(numPages)}
      loading={<p className="text-center p-10">Loading PDF...</p>}
    >
      {Array.from({ length: numPages }, (_, i) => (
        <div key={i} className="flex justify-center mb-6">
          <Page pageNumber={i + 1} width={width} />
        </div>
      ))}
    </Document>
  );
}