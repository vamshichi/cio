"use client";

import { useEffect } from "react";

export default function AgendaPage() {
  useEffect(() => {
    window.location.href = "/pdf/agenda.pdf";
  }, []);

  return (
    <div className="flex h-screen items-center justify-center">
      <p className="text-lg">Opening agenda...</p>
    </div>
  );
}