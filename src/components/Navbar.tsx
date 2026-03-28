"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Leistungen", href: "/leistungen" },
  { label: "Kosten", href: "/kosten" },
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Pflegeberatung", href: "https://beratung.domusvita.de" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled ? "glass-warm shadow-lg shadow-dv-400/10 py-2" : "bg-transparent py-4"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo-domusvita.png"
              alt="DomusVita Gesundheit"
              width={scrolled ? 140 : 160}
              height={scrolled ? 45 : 50}
              className={cn("transition-all duration-300 object-contain", !scrolled && "brightness-0 invert")}
              priority
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-all duration-300 relative group",
                  scrolled ? "text-navy-600 hover:text-dv-600" : "text-white/90 hover:text-white"
                )}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-dv-400 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+493053005550"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-dv-400 text-white hover:bg-dv-600 hover:scale-105 shadow-lg shadow-dv-400/25 transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              (030) 53 00 555 0
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={cn("md:hidden p-2 rounded-lg transition-colors", scrolled ? "text-navy-800" : "text-white")}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-cream pt-24 px-6"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.div key={link.href} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-2xl font-semibold text-navy-800 hover:text-dv-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <a
                href="tel:+493053005550"
                className="mt-4 flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-dv-400 text-white font-semibold text-lg"
              >
                <Phone className="w-5 h-5" />
                (030) 53 00 555 0
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
