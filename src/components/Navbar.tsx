"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./Button";

const nav = [
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/tryouts", label: "Tryouts" },
  { href: "/coaches", label: "Coaches" },
  { href: "/media", label: "Media" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className={`sticky top-0 z-50 border-b border-[#2A2A2A] ${
    open
      ? "bg-[#0B0B0B]"
      : "bg-[#0B0B0B]/80 backdrop-blur"
      }`}>
      <div className="container-page flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.jpg"
            alt="Brotherhood Elite"
            width={40}
            height={40}
            priority
          />
          <div className="leading-tight">
            <div className="font-extrabold tracking-wide">BROTHERHOOD ELITE</div>
            <div className="text-xs text-[#BDBDBD]">GTA • Ottawa</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-sm text-[#BDBDBD] hover:text-white transition"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        {/* Desktop buttons */}
        <div className="hidden sm:flex items-center gap-2">
          <Button href="/tryouts">Register</Button>
          <Button href="/contact" variant="secondary">
            Contact
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="sm:hidden inline-flex items-center justify-center rounded-xl border border-[#2A2A2A] bg-[#121212] p-2 text-white hover:border-white/40 transition"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={20} />
        </button>
      </div>

      {/* Mobile full-screen menu with slide-in animation */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[999]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/55"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              aria-hidden
            />

            {/* Panel */}
            <motion.div
              className="absolute inset-0 bg-[#0B0B0B]"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation menu"
            >
              {/* Top bar */}
              <div className="container-page flex items-center justify-between py-4">
                <div className="flex items-center gap-3">
                  <Image
                    src="/logo.jpg"
                    alt="Brotherhood Elite"
                    width={34}
                    height={34}
                    priority
                  />
                  <div className="font-extrabold tracking-wide">MENU</div>
                </div>

                <button
                  className="inline-flex items-center justify-center rounded-xl border border-[#2A2A2A] bg-[#121212] p-2 text-white hover:border-white/40 transition"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Content */}
              <div className="container-page flex h-[calc(100vh-72px)] flex-col justify-between pb-8">
                {/* Links */}
                <nav className="grid gap-3 pt-2">
                  {nav.map((n, i) => (
                    <motion.div
                      key={n.href}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.06 * i, duration: 0.25 }}
                    >
                      <Link
                        href={n.href}
                        onClick={() => setOpen(false)}
                        className="block rounded-2xl border border-[#2A2A2A] bg-[#121212] px-5 py-4 text-lg font-semibold text-white hover:border-white/40 transition"
                      >
                        {n.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* CTAs */}
                <div className="grid gap-3">
                  <Link
                    href="/tryouts"
                    onClick={() => setOpen(false)}
                    className="rounded-2xl border border-[#47A614] bg-[#47A614] px-5 py-4 text-center text-base font-extrabold text-black hover:bg-[#63C51F] hover:border-[#63C51F] transition"
                  >
                    Register
                  </Link>

                  <Link
                    href="/contact"
                    onClick={() => setOpen(false)}
                    className="rounded-2xl border border-[#2A2A2A] bg-transparent px-5 py-4 text-center text-base font-extrabold text-white hover:border-white/50 transition"
                  >
                    Contact
                  </Link>

                  <div className="pt-2 text-center text-xs text-[#BDBDBD]">
                    GTA • Ottawa • Competitive Basketball
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
