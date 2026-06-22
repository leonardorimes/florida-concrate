"use client";

import { useEffect, useRef } from "react";

export default function QuoteForm() {
  const containerRef = useRef(null);
  const iframeRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {};
  }, []);

  useEffect(() => {
    if (!iframeRef.current || !containerRef.current) return;
    
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const height = entry.contentRect.height;
        if (height > 0) {
          // O formulário é escalado para 80%, então a altura do container deve ser 80% da altura do iframe
          containerRef.current.style.height = `${height * 0.8}px`;
        }
      }
    });

    observer.observe(iframeRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      className="quote-card" 
      id="quote" 
      ref={containerRef}
      style={{ padding: 0, overflow: "hidden", display: "block" }}
    >
      <iframe
        ref={iframeRef}
        src="https://api.leadconnectorhq.com/widget/form/GyeMDbEFUVXObVeuHNyp"
        style={{ 
          width: "125%", 
          minHeight: "400px", 
          border: "none", 
          borderRadius: "10px",
          transform: "scale(0.8)",
          transformOrigin: "top left"
        }}
        id="inline-GyeMDbEFUVXObVeuHNyp" 
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Website Form"
        data-height="999"
        data-layout-iframe-id="inline-GyeMDbEFUVXObVeuHNyp"
        data-form-id="GyeMDbEFUVXObVeuHNyp"
        title="Website Form"
      />
    </div>
  );
}
