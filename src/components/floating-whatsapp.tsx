"use client";

import { MessageCircle } from "lucide-react";

const whatsappLink = "https://wa.me/420733796959";

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noreferrer"
      aria-label="Abrir WhatsApp"
      className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-4 py-2 md:px-5 md:py-3 text-sm md:text-base font-semibold text-white shadow-lg shadow-primary/30 backdrop-blur transition hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/40"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
