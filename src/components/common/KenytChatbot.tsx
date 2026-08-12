"use client";

import { useEffect } from "react";

const KENYT_SCRIPT_SRC =
  "https://india.kenyt.ai/botapp/ChatbotUI/dist/js/bot-loader.js";

const KENYT_CLEANUP_SELECTORS = [
  'script[src*="bot-loader.js"]',
  'script[src*="kenyt.ai"]',
  'script[data-bot]',
  'script[id*="kenyt" i]',
  'iframe[src*="kenyt.ai"]',
  'iframe[src*="ChatbotUI"]',
  'iframe#kenytChatWindow',
  '#kenytChatBubble',
  '#kenytBubbleContainer',
  '#chatbox-container',
  '#kenytPoweredBy',
  '#kenytTextBubble',
  '#kenytWhatsappBubble',
  '#kenytFacebookBubble',
  '#kenytInstagramBubble',
  '#kenytPhoneBubble',
  '#kenytEmailBubble',
  '#messageWrapperBox',
  '#chatNowBtn',
  '#bubbleTail',
  '#krazorpay-btn',
  '#kcashfree-btn',
  '#kvgTitle',
  '[id*="kenyt" i]',
  '[class*="kenyt" i]',
  '[class*="kchannels"]',
  '[class*="kchannel"]',
  '[class*="kpopup"]',
  '[class*="kbubble"]',
  '[class*="kprimary-bg"]',
  '[class*="kprimary-border"]',
  '[class*="ksecondary-bg"]',
  '[class*="kconnectors"]',
  '[class*="kstrip"]',
  '[class*="kvg-"]',
  '[class*="chatWithUsMessage"]',
  'link[href*="kenyt.ai"]',
  'style[id*="kenyt" i]'
];

export function removeKenytChatbot() {
  if (typeof document === "undefined") return;

  KENYT_CLEANUP_SELECTORS.forEach((selector) => {
    try {
      document.querySelectorAll(selector).forEach((node) => {
        node.remove();
      });
    } catch (e) {}
  });

  if (typeof window !== "undefined") {
    const keysToRemove = Object.keys(window).filter((key) =>
      key.toLowerCase().includes("kenyt") || key.toLowerCase().includes("botapp")
    );
    keysToRemove.forEach((key) => {
      try {
        delete (window as any)[key];
      } catch (e) {}
    });

    const globalFns = [
      "closeWhatsAppWindow",
      "sendWhatsAppMessage",
      "handleWhatsAppKeyPress",
      "openEmailWindow",
      "closeEmailWindow",
      "openPhoneWindow",
      "closePhoneWindow",
      "kenyt_gtag"
    ];
    globalFns.forEach((fn) => {
      try {
        delete (window as any)[fn];
      } catch (e) {}
    });
  }
}

interface KenytChatbotProps {
  botId: string;
}

export default function KenytChatbot({ botId }: KenytChatbotProps) {
  useEffect(() => {
    // 1. Clean up any previous bot instance
    removeKenytChatbot();

    // 2. Create the script element
    const script = document.createElement("script");
    script.id = `kenyt-chatbot-${botId}`;
    script.src = KENYT_SCRIPT_SRC;
    script.defer = true;
    script.type = "text/javascript";
    script.setAttribute("data-bot", botId);

    // 3. Inject into the DOM
    document.body.appendChild(script);

    // 4. Cleanup when navigating away or unmounting
    return () => {
      removeKenytChatbot();
    };
  }, [botId]);

  return null;
}