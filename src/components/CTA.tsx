"use client";

import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

export default function CTA() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background: exakte Brand-Farbe Dunkelblau #265D90 → Navy */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #265D90 0%, #1A2E4A 60%, #0F1E33 100%)" }} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-dv-400/20 via-transparent to-transparent" />

      {/* Animated orbs */}
      <motion.div
        className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full bg-dv-400/15 blur-3xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-dv-300/10 blur-2xl"
        animate={{ scale: [1.2, 1, 1.2] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <AnimatedSection>
          <span className="inline-block text-sm font-semibold text-dv-300 tracking-wider uppercase mb-6">
            Kostenlose Beratung
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Wir sind für Sie da —
            <br />
            <span className="text-dv-300">jetzt anrufen.</span>
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Sprechen Sie mit unserem Team. Wir beraten Sie kostenlos und unverbindlich —
            persönlich, telefonisch oder per Video.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+493053005550"
              className="group flex items-center gap-3 px-8 py-4 rounded-full bg-white text-dv-700 font-bold text-lg hover:bg-dv-50 transition-all duration-300 hover:scale-105 shadow-2xl"
            >
              <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              (030) 53 00 555 0
            </a>
            <a
              href="https://beratung.domusvita.de"
              className="group flex items-center gap-2 px-8 py-4 rounded-full border border-white/30 text-white font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Online buchen
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <p className="text-white/40 text-sm mt-8">
            Baumschulenstr. 24, 12437 Berlin · Montag–Freitag 08:00–18:00 Uhr · 24/7 Rufbereitschaft
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
