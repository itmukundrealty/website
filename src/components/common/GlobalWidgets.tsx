"use client";

import { usePathname } from "next/navigation";
import KenytChatbot from "./KenytChatbot";
import WhatsappChatWidget from "./WhatsappChatWidget";

export default function GlobalWidgets() {
  const pathname = usePathname();

  // Determine chatbot ID based on current page
  let botId = "23710952"; // Default for all pages
  if (pathname.includes("/kailash")) {
    botId = "26710585";
  } else if (pathname.includes("/kedar")) {
    botId = "22056372";
  }

  return (
    <>
      <KenytChatbot botId={botId} />
      <WhatsappChatWidget />
    </>
  );
}
