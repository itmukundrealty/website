"use client";

import { usePathname } from "next/navigation";
import KenytChatbot from "./KenytChatbot";
import WhatsAppWidget from "./WhatsAppWidget";

export default function GlobalWidgets() {
  const pathname = usePathname();

  // Determine chatbot ID based on path
  let botId = "23710952"; // Default (home page chatbot)
  if (pathname.includes("/kedar")) {
    botId = "22056372";
  } else if (pathname.includes("/kailash")) {
    botId = "26710585";
  }

  // Show WhatsApp widget on all pages other than home page "/"
  const showWhatsApp = pathname !== "/";

  return (
    <>
      <KenytChatbot botId={botId} />
      {showWhatsApp && <WhatsAppWidget />}
    </>
  );
}
