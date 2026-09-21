"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import { site, whatsappLink } from "@/data/site";
import { track } from "@/lib/utils";

export function WhatsAppFloatButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 240);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-5 right-5 z-40 flex flex-col gap-3"
        >
          <a
            href={site.phoneHref}
            onClick={() => track("call_click", { label: "float" })}
            aria-label={`Call ${site.phone}`}
            className="flex size-14 items-center justify-center rounded-full bg-thread text-hide shadow-lg shadow-black/30 transition-transform hover:scale-105 xl:hidden"
          >
            <Phone className="size-6" aria-hidden="true" />
          </a>
          <a
            href={whatsappLink("Hi Yousha, I'd like to know more about your services.")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("whatsapp_click", { label: "float" })}
            aria-label="Chat with us on WhatsApp"
            className="flex size-14 items-center justify-center rounded-full bg-[#1f7a4d] text-white shadow-lg shadow-black/30 transition-transform hover:scale-105"
          >
            <MessageCircle className="size-7" aria-hidden="true" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
