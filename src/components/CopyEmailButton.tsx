"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

const EMAIL = "oluwatomijohnson2004@gmail.com";

export default function CopyEmailButton() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button
      onClick={copy}
      className="inline-flex w-full items-center justify-center gap-2.5 rounded-lg bg-blue px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue/30 transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-light hover:shadow-blue-light/30"
    >
      {copied ? (
        <>
          <Check className="h-4 w-4" />
          Copied to clipboard!
        </>
      ) : (
        <>
          <Copy className="h-4 w-4" />
          Copy Email
        </>
      )}
    </button>
  );
}