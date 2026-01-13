"use client";

import Script from "next/script";
import { useRef, useCallback } from "react";

const WIDGET_ID = "zf-widget-root-id-z57cj85c8";
const DIGEST =
  "2-84674525a29557314c979c12b9b9c83e9c02a7500dd23fe6e6165d74d24d28284d5840640206b062b737c2b253195bdfda2df0734fa8e4e5f801aeef713e21fa";
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
