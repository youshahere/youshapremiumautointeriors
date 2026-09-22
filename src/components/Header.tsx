"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, MessageCircle, Phone, X } from "lucide-react";
import { nav, site, whatsappLink } from "@/data/site";
import { services, specialistLinks } from "@/data/services";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/Button";
import { cn, track } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropRef = useRef<HTMLDivElement>(null);

  // Close menus on navigation (adjust state while rendering, per React docs).
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
    setMenu(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menu) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menu]);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!dropRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-300",
        scrolled ? "border-copper/25 bg-ink/95 backdrop-blur-md" : "border-transparent bg-ink",
      )}
    >
      <div className="mx-auto flex h-[4.5rem] w-full max-w-[90rem] items-center justify-between gap-6 px-5 sm:px-8 lg:px-12">
        <Link href="/" aria-label={`${site.name} — home`} className="shrink-0">
          <Logo />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 xl:flex">
          {nav.main.map((item) =>
            "children" in item ? (
              <div key={item.href} ref={dropRef} className="relative">
                <button
                  type="button"
                  aria-expanded={open}
                  aria-haspopup="true"
                  onClick={() => setOpen((v) => !v)}
                  className={cn(
                    "flex items-center gap-1.5 whitespace-nowrap rounded-sm px-3 py-2 text-[0.92rem] font-medium transition-colors",
                    isActive("/services") ? "text-copper" : "text-[#e6dccb] hover:text-copper",
                  )}
                >
                  {item.label}
                  <ChevronDown className={cn("size-4 transition-transform", open && "rotate-180")} aria-hidden="true" />
                </button>
                <AnimatePresence>
                  {open && (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.18 }}
                      className="panel-stitch absolute left-1/2 top-full mt-3 w-[34rem] -translate-x-1/2 rounded-sm bg-ink-2 p-7 shadow-2xl shadow-black/50 [--stitch-color:rgb(201_162_91/0.3)]"
                    >
                      <Link
                        href="/services"
                        className="mb-4 block text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-copper hover:text-copper-light"
                      >
                        All services →
                      </Link>
                      <ul className="grid grid-cols-2 gap-x-6 gap-y-1">
                        {services.map((s) => (
                          <li key={s.slug}>
                            <Link
                              href={`/services/${s.slug}`}
                              className="flex items-center gap-3 rounded-sm px-2 py-2.5 text-[0.9rem] text-[#e6dccb] transition-colors hover:bg-ink-3 hover:text-copper-light"
                            >
                              <s.icon className="size-4 shrink-0 text-copper" aria-hidden="true" />
                              {s.navLabel}
                            </Link>
                          </li>
                        ))}
                        {specialistLinks.map((s) => (
                          <li key={s.href}>
                            <Link
                              href={s.href}
                              className="flex items-center gap-3 rounded-sm px-2 py-2.5 text-[0.9rem] text-[#e6dccb] transition-colors hover:bg-ink-3 hover:text-copper-light"
                            >
                              <s.icon className="size-4 shrink-0 text-copper" aria-hidden="true" />
                              {s.navLabel}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={cn(
                  "whitespace-nowrap rounded-sm px-3 py-2 text-[0.92rem] font-medium transition-colors",
                  isActive(item.href) ? "text-copper" : "text-[#e6dccb] hover:text-copper",
                )}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-2 xl:flex">
          <Button href={site.phoneHref} variant="outline" size="sm" event="call_click" eventLabel="header">
            <Phone className="size-4" aria-hidden="true" />
            <span className="whitespace-nowrap">{site.phone}</span>
          </Button>
          <Button href={whatsappLink("Hi Yousha, I'd like to know more about your services.")} variant="whatsapp" size="sm" event="whatsapp_click" eventLabel="header">
            <MessageCircle className="size-4" aria-hidden="true" />
            WhatsApp
          </Button>
        </div>

        <div className="flex items-center gap-2 xl:hidden">
          <a
            href={site.phoneHref}
            onClick={() => track("call_click", { label: "header-mobile" })}
            aria-label={`Call ${site.phone}`}
            className="flex size-11 items-center justify-center rounded-sm border border-copper/60 text-copper"
          >
            <Phone className="size-5" aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={() => setMenu((v) => !v)}
            aria-expanded={menu}
            aria-controls="mobile-menu"
            aria-label={menu ? "Close menu" : "Open menu"}
            className="flex size-11 items-center justify-center rounded-sm bg-copper text-ink"
          >
            {menu ? <X className="size-6" aria-hidden="true" /> : <Menu className="size-6" aria-hidden="true" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menu && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="quilt fixed inset-x-0 bottom-0 top-[4.5rem] overflow-y-auto xl:hidden"
          >
            <nav aria-label="Mobile" className="mx-auto max-w-xl px-6 py-8">
              <ul className="divide-y divide-copper/20">
                <li>
                  <Link href="/" className="block py-4 font-display text-2xl text-paper">
                    Home
                  </Link>
                </li>
                {nav.main.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn("block py-4 font-display text-2xl", isActive(item.href) ? "text-copper" : "text-paper")}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="mb-3 mt-8 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-copper">Services</p>
              <ul className="grid gap-1">
                {[...services.map((s) => ({ href: `/services/${s.slug}`, label: s.navLabel })), ...specialistLinks.map((s) => ({ href: s.href, label: s.navLabel }))].map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="block py-2 text-[#dfd3bf] hover:text-copper">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-8 grid gap-3">
                <Button href={whatsappLink("Hi Yousha, I'd like to know more about your services.")} variant="whatsapp" size="lg" event="whatsapp_click" eventLabel="mobile-menu">
                  <MessageCircle className="size-5" aria-hidden="true" />
                  WhatsApp us
                </Button>
                <Button href="/contact" variant="primary" size="lg">
                  Get a custom quote
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
