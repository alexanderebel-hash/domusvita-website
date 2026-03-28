"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

export default function UeberUnsPreview() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <AnimatedSection direction="left">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
                <Image
                  src="/images/dv-style-master.jpeg"
                  alt="DomusVita Team — Ambulante Pflege in Berlin"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 to-transparent" />
              </div>
              {/* Floating stat card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-5 shadow-xl border border-dv-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-dv-50 flex items-center justify-center">
                    <Heart className="w-5 h-5 text-dv-500" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-navy-800">20+</div>
                    <div className="text-xs text-navy-400">Jahre Erfahrung</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Text side */}
          <AnimatedSection direction="right" delay={0.2}>
            <span className="inline-block text-sm font-semibold text-dv-600 tracking-wider uppercase mb-4">
              Über uns
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-navy-800 mb-6 leading-tight">
              Ein Familienunternehmen mit{" "}
              <span className="gradient-text">Herz</span>
            </h2>
            <p className="text-navy-500 text-lg leading-relaxed mb-6">
              DomusVita — aus dem Lateinischen: Domus (Haus) und Vita (Leben). Seit über
              20 Jahren begleiten wir Menschen in ihrem Zuhause und ermöglichen ein
              selbstbestimmtes Leben in vertrauter Umgebung.
            </p>
            <p className="text-navy-500 leading-relaxed mb-8">
              Als Familienunternehmen in Berlin stehen wir für persönliche Nähe, Verlässlichkeit
              und eine Pflege, die den ganzen Menschen sieht — nicht nur die Diagnose.
              Unter der Leitung von Lukas Dahrendorf und Alexander Ebel wächst unser Team
              täglich mit dem Anspruch, die beste ambulante Pflege in Berlin zu bieten.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/ueber-uns"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-dv-600 text-white font-semibold hover:bg-dv-700 transition-all duration-300 hover:scale-105"
              >
                Unser Team kennenlernen
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+493053005550"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-dv-200 text-dv-700 font-semibold hover:bg-dv-50 transition-all duration-300"
              >
                Jetzt anrufen
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
