"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const KENYT_SCRIPT_SRC =
  "https://india.kenyt.ai/botapp/ChatbotUI/dist/js/bot-loader.js";

const KENYT_CLEANUP_SELECTORS = [
  `script[src^="${KENYT_SCRIPT_SRC}"]`,
  'script[src*="kenyt.ai/botapp/ChatbotUI"]',
  'iframe[src*="kenyt.ai"]',
  'iframe[src*="ChatbotUI"]',
  '[id*="kenyt" i]',
  '[class*="kenyt" i]',
];

function removeKenytChatbot() {
  document
    .querySelectorAll(KENYT_CLEANUP_SELECTORS.join(","))
    .forEach((node) => node.remove());
}

interface KenytChatbotProps {
  botId: string;
}

export default function KenytChatbot({ botId }: KenytChatbotProps) {
  const pathname = usePathname();

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
  }, [botId, pathname]);

  return null;
}