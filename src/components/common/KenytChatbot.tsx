"use client";

import { useEffect } from "react";

const KENYT_SCRIPT_SRC =
  "https://india.kenyt.ai/botapp/ChatbotUI/dist/js/bot-loader.js";

const KENYT_CLEANUP_SELECTORS = [
  `script[src^="${KENYT_SCRIPT_SRC}"]`,
  'script[src*="kenyt.ai/botapp/ChatbotUI"]',
  'iframe[src*="kenyt.ai"]',
  'iframe[src*="ChatbotUI"]',
  '[id*="kenyt" i]',
  '[class*="kenyt" i]',
  '#messageWrapperBox',
  '#chatNowBtn',
  '#bubbleTail',
  '#krazorpay-btn',
  '#kcashfree-btn',
  '#kvgTitle',
  '[class*="kchannel"]',
  '[class*="kpopup"]',
  '[class*="kbubble"]',
  '[class*="kprimary"]',
  '[class*="ksecondary"]',
  '[class*="kconnectors"]',
  '[class*="kstrip"]',
  '[class*="kvg-"]',
  '[class*="chatWithUsMessage"]'
];

function removeKenytChatbot() {
  document
    .querySelectorAll(KENYT_CLEANUP_SELECTORS.join(","))
    .forEach((node) => node.remove());

  if (typeof window !== "undefined") {
    const keysToRemove = Object.keys(window).filter((key) =>
      key.toLowerCase().includes("kenyt") || key.toLowerCase().includes("botapp")
    );
    keysToRemove.forEach((key) => {
      try {
        delete (window as any)[key];
      } catch (e) {}
    });
  }
}

interface KenytChatbotProps {
  botId: string;
}

export default function KenytChatbot({ botId }: KenytChatbotProps) {
  useEffect(() => {
    removeKenytChatbot();

    const script = document.createElement("script");
    script.id = `kenyt-chatbot-${botId}`;
    script.src = KENYT_SCRIPT_SRC;
    script.defer = true;
    script.dataset.bot = botId;
    script.dataset.kenytManaged = "true";

    document.head.appendChild(script);

    return () => {
      removeKenytChatbot();
    };
  }, [botId]);

  return null;
}