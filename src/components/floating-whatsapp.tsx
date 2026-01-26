"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

const whatsappNumber = "420733796959";
const whatsappBase = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=`;

export function FloatingWhatsApp() {
  const [open, setOpen] = useState(true);

  return (
    <div className="whatsapp-widget" data-open={open ? "true" : "false"}>
      <div className="whatsapp-panel" aria-live="polite">
        <button
          className="whatsapp-close"
          type="button"
          aria-label="Cerrar chat"
          onClick={() => setOpen(false)}
        >
          <X size={14} />
        </button>
        <div className="whatsapp-header">
          <p className="whatsapp-title">
            Hola, soy Felipe 👋
            <br />
            Conversemos sobre tu idea o proyecto.
          </p>
          <p className="whatsapp-status">Asistente · Ahora</p>
        </div>
        <div className="whatsapp-bubbles">
          <a
            className="whatsapp-bubble"
            href={`${whatsappBase}Tengo%20una%20pregunta%20sobre%20los%20servicios`}
            target="_blank"
            rel="noreferrer"
          >
            Tengo una pregunta sobre los servicios
          </a>
          <a
            className="whatsapp-bubble"
            href={`${whatsappBase}Soy%20cliente%20y%20necesito%20ayuda`}
            target="_blank"
            rel="noreferrer"
          >
            Soy cliente y necesito ayuda
          </a>
        </div>
      </div>
      <button
        className="whatsapp-trigger"
        type="button"
        aria-label="Abrir chat de WhatsApp"
        aria-expanded={open ? "true" : "false"}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="whatsapp-badge">1</span>
        <MessageCircle className="whatsapp-icon" size={18} />
        <span className="label">WhatsApp</span>
      </button>
    </div>
  );
}
