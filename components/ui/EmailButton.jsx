"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/content/site";

const subject = encodeURIComponent("Hello from your portfolio");
const composeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${site.email}&su=${subject}`;

/**
 * mailto: silently does nothing when the visitor has no mail app set up,
 * which is most desktop browsers. So this opens Gmail's composer in a new
 * tab and also copies the address, so anyone on any client can paste it.
 */
export default function EmailButton({ children, className = "btn" }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  function onClick() {
    navigator.clipboard?.writeText(site.email).then(
      () => {
        setCopied(true);
        clearTimeout(timer.current);
        timer.current = setTimeout(() => setCopied(false), 2400);
      },
      () => {}
    );
  }

  return (
    <>
      <a
        href={composeUrl}
        target="_blank"
        rel="noreferrer"
        onClick={onClick}
        className={className}
        title={`Email ${site.email}`}
      >
        {children}
      </a>
      <span
        role="status"
        aria-live="polite"
        className={`pointer-events-none fixed bottom-5 left-1/2 z-[60] -translate-x-1/2 border-2 border-ink bg-ink px-3 py-2 font-mono text-[12px] text-paper shadow-[var(--shadow-hard-sm)] transition-[opacity,transform] duration-150 ${
          copied ? "opacity-100" : "translate-y-2 opacity-0"
        }`}
      >
        {copied ? `✓ ${site.email} copied` : ""}
      </span>
    </>
  );
}
