"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { MessageCircle, X } from "lucide-react";
import styles from "@/components/floating-whatsapp.module.css";

const whatsappNumber = "420733796959";
const whatsappBase = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=`;

export function FloatingWhatsApp() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    let timeoutId: number | undefined;

    const scheduleMount = () => {
      timeoutId = window.setTimeout(() => {
        setMounted(true);
      }, 1200);
    };

    if ("requestIdleCallback" in window) {
      (window as Window & { requestIdleCallback: (callback: () => void) => number }).requestIdleCallback(
        scheduleMount
      );
    } else {
      scheduleMount();
    }

    return () => {
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, []);

  if (!mounted) {
    return null;
  }

  return createPortal(
    <div
      className={styles.whatsappWidget}
      data-open={open ? "true" : "false"}
      style={{
        position: "fixed",
        right: "24px",
        bottom: "24px",
        zIndex: 100000,
        transform: "none",
      }}
    >
      <div className={styles.whatsappPanel} aria-live="polite">
        <button
          className={styles.whatsappClose}
          type="button"
          aria-label="Cerrar chat"
          onClick={() => setOpen(false)}
        >
          <X size={14} />
        </button>
        <div className={styles.whatsappHeader}>
          <p className={styles.whatsappTitle}>
            Hola, soy Felipe 👋
            <br />
            Conversemos sobre tu idea o proyecto.
          </p>
          <p className={styles.whatsappStatus}>Asistente · Ahora</p>
        </div>
        <div className={styles.whatsappBubbles}>
          <a
            className={styles.whatsappBubble}
            href={`${whatsappBase}Tengo%20una%20pregunta%20sobre%20los%20servicios`}
            target="_blank"
            rel="noreferrer"
          >
            Tengo una pregunta sobre los servicios
          </a>
          <a
            className={styles.whatsappBubble}
            href={`${whatsappBase}Soy%20cliente%20y%20necesito%20ayuda`}
            target="_blank"
            rel="noreferrer"
          >
            Soy cliente y necesito ayuda
          </a>
        </div>
      </div>
      <button
        className={styles.whatsappTrigger}
        type="button"
        aria-label="Abrir chat de WhatsApp"
        aria-expanded={open ? "true" : "false"}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className={styles.whatsappBadge}>1</span>
        <MessageCircle className={styles.whatsappIcon} size={18} />
        <span className={styles.label}>WhatsApp</span>
      </button>
    </div>,
    document.body
  );
}
