"use client";

import { usePathname } from "next/navigation";
import KenytChatbot from "./KenytChatbot";
import { useEffect, useRef } from "react";
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

  const initialBotId = useRef(botId);

  useEffect(() => {
    // Kenyt's script does not support dynamically swapping Bot IDs in a single-page app.
    // If the required Bot ID for the new route is different from what we loaded initially,
    // we must force a hard reload to ensure the new script initializes cleanly.
    // if (initialBotId.current !== botId) {
    //   window.location.reload();
    // }
  }, [botId]);

  // If a reload is pending, don't attempt to render the new bot to avoid UI corruption
  // if (initialBotId.current !== botId) {
  //   return null;
  // }

  // Show WhatsApp widget on all pages other than home page "/"
  const showWhatsApp = pathname !== "/";

  return (
    <>
      <KenytChatbot botId={botId} />
      {showWhatsApp && <WhatsAppWidget />}
    </>
  );
}
