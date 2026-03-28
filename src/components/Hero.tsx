"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown, Clock, Users, Award, Shield } from "lucide-react";

// Berlin skyline as SVG path — key visual element from brand car wrapping
function BerlinSkyline() {
  return (
    <svg
      viewBox="0 0 1440 120"
      className="w-full"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0,80 L30,80 L30,50 L50,50 L50,30 L55,30 L55,50 L70,50 L70,80
           L90,80 L90,40 L100,40 L100,20 L105,20 L105,10 L108,10 L108,20 L110,20 L110,40 L120,40 L120,80
           L140,80 L140,55 L155,55 L155,45 L160,45 L160,55 L170,55 L170,80
           L190,80 L190,60 L200,60 L200,50 L210,50 L210,60 L220,60 L220,80
           L240,80 L240,35 L248,35 L248,25 L252,25 L252,35 L260,35 L260,80
           L280,80 L280,50 L295,50 L295,80
           L320,80 L320,45 L330,45 L330,30 L335,30 L335,20 L340,20 L340,30 L345,30 L345,45 L355,45 L355,80
           L380,80 L380,55 L395,55 L395,80
           L410,80 L410,40 L420,40 L420,25 L425,25 L425,15 L430,15 L430,25 L435,25 L435,40 L445,40 L445,80
           L465,80 L465,60 L480,60 L480,80
           L500,80 L500,45 L510,45 L510,35 L520,35 L520,45 L530,45 L530,80
           L550,80 L550,55 L565,55 L565,80
           L585,80 L585,40 L595,40 L595,20 L600,20 L600,10 L603,10 L603,20 L605,20 L605,40 L615,40 L615,80
           L635,80 L635,50 L648,50 L648,80
           L665,80 L665,35 L675,35 L675,80
           L695,80 L695,50 L705,50 L705,40 L715,40 L715,50 L725,50 L725,80
           L745,80 L745,55 L758,55 L758,80
           L775,80 L775,45 L785,45 L785,35 L790,35 L790,45 L800,45 L800,80
           L820,80 L820,60 L832,60 L832,80
           L850,80 L850,40 L858,40 L858,30 L865,30 L865,10 L868,10 L868,30 L872,30 L872,40 L880,40 L880,80
           L900,80 L900,55 L912,55 L912,80
           L930,80 L930,45 L940,45 L940,80
           L960,80 L960,50 L970,50 L970,35 L978,35 L978,50 L990,50 L990,80
           L1010,80 L1010,60 L1022,60 L1022,80
           L1040,80 L1040,40 L1050,40 L1050,25 L1055,25 L1055,15 L1058,15 L1058,25 L1060,25 L1060,40 L1070,40 L1070,80
           L1090,80 L1090,55 L1102,55 L1102,80
           L1120,80 L1120,45 L1130,45 L1130,80
           L1150,80 L1150,50 L1162,50 L1162,80
           L1180,80 L1180,60 L1190,60 L1190,80
           L1210,80 L1210,35 L1220,35 L1220,20 L1225,20 L1225,35 L1235,35 L1235,80
           L1255,80 L1255,50 L1268,50 L1268,80
           L1285,80 L1285,40 L1295,40 L1295,80
           L1315,80 L1315,55 L1327,55 L1327,80
           L1345,80 L1345,45 L1355,45 L1355,30 L1360,30 L1360,45 L1370,45 L1370,80
           L1390,80 L1390,60 L1400,60 L1400,80
           L1440,80 L1440,120 L0,120 Z"
        fill="currentColor"
        opacity="0.35"
      />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background — Video mit Foto-Fallback */}
      <div className="absolute inset-0">
        <Image
          src="/images/treptow/situativ-4.jpg"
          alt="DomusVita Gesundheit — Ambulante Pflege in Berlin"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F2A45]/82 via-[#1A2E4A]/62 to-[#0F2A45]/92" />
        <div className="absolute inset-0 bg-gradient-to-t from-dv-600/20 via-transparent to-dv-400/10" />
      </div>

      {/* Animated orbs in brand colors */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
        style={{ background: "rgba(103,181,234,0.10)" }}
        animate={{ x: [0, 50, 0], y: [0, -30, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl"
        style={{ background: "rgba(38,93,144,0.12)" }}
        animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Badge: Immer für Sie da */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
        >
          <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#67B5EA" }} />
          <span className="text-sm text-white/80 font-medium">Immer für Sie da — 24/7</span>
        </motion.div>

        {/* Headline: offizieller Brand-Slogan */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] tracking-tight mb-4"
        >
          Freude am
          <br />
          <span className="gradient-text">Pflegen.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Ihr ambulanter Pflegedienst in Berlin — mit viel Herz und über 20 Jahren Erfahrung.
          Wir ermöglichen ein selbstbestimmtes Leben in den eigenen vier Wänden.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="tel:+493053005550"
            className="group relative px-8 py-4 rounded-full text-white font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-2xl"
            style={{ background: "#265D90", boxShadow: "0 20px 60px rgba(38,93,144,0.35)" }}
          >
            <span className="relative z-10">Kostenlos beraten lassen</span>
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" style={{ background: "#67B5EA" }} />
          </a>
          <a
            href="#leistungen"
            className="px-8 py-4 rounded-full glass text-white font-medium hover:bg-white/20 transition-all duration-300"
          >
            Unsere Leistungen
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          {[
            { icon: Users, value: "500+", label: "Klienten betreut", color: "#67B5EA" },
            { icon: Clock, value: "24/7", label: "Rufbereitschaft", color: "#67B5EA" },
            { icon: Award, value: "20+", label: "Jahre Erfahrung", color: "#48615C" },
            { icon: Shield, value: "100%", label: "Kassenzulassung", color: "#265D90" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + i * 0.15 }}
              className="glass rounded-2xl p-4 hover:bg-white/15 transition-all duration-300 group cursor-default"
            >
              <stat.icon className="w-5 h-5 mb-2 mx-auto group-hover:scale-110 transition-transform" style={{ color: stat.color }} />
              <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-white/60 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-6 h-6 text-white/40" />
      </motion.div>

      {/* Berlin Skyline — Brand-Markenelement (wie auf Auto-Beklebung) */}
      <div className="absolute bottom-0 left-0 right-0 z-10" style={{ color: "#265D90" }}>
        <BerlinSkyline />
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cream to-transparent z-20" />
    </section>
  );
}
