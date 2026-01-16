"use client";

import Script from "next/script";
import { useRef, useCallback } from "react";

const WIDGET_ID = "zf-widget-root-id-hmlvbse15";
const DIGEST =
  "2-84674525a2955731bf5a5c1bfd4bc5496fc19cf4054534554f0d219e5dc84c8f79f28adb6ad4a6a6b737c2b253195bdfda2df0734fa8e4e5f801aeef713e21fa";
const PRODUCT_URL = "https://billing.zoho.in";

const ZOHO_SCRIPT_URL =
  "https://js.zohostatic.com/books/zfwidgets/assets/js/zf-widget.js";

export default function PricingWidget() {
  const isInitialized = useRef(false);

  const handleScriptReady = useCallback(() => {
    if (isInitialized.current) return;

    const zf = window.ZFWidget;
    const root = document.getElementById(WIDGET_ID);

    if (zf && root) {
      if (root.querySelector("iframe")) {
        isInitialized.current = true;
        return;
      }

      if (typeof zf.reload === "function") {
        zf.reload();
      } else if (typeof zf.init === "function") {
        zf.init();
      }

      isInitialized.current = true;
    }
  }, []);

  return (
    <div className="w-full min-h-[400px] relative">
      <div
        id={WIDGET_ID}
        data-pricing-table="true"
        data-digest={DIGEST}
        data-product_url={PRODUCT_URL}
        style={{ minHeight: "400px", width: "100%" }}
      />

      <Script
        id="zoho-pricing-widget"
        src={ZOHO_SCRIPT_URL}
        strategy="lazyOnload"
        onReady={handleScriptReady}
      />
    </div>
  );
}
