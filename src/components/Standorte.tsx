"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Phone, Clock } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const standorte = [
  {
    name: "DomusVita Treptow",
    subtitle: "Hauptstandort",
    adresse: "Baumschulenstr. 24",
    ort: "12437 Berlin-Treptow",
    telefon: "(030) 53 00 555 0",
    zeiten: "Mo–Fr 08:00–18:00 Uhr · 24/7 Rufbereitschaft",
    bild: "/images/treptow/situativ-6.jpg",
    gebiet: "Treptow-Köpenick · Neukölln · ganz Berlin",
    tag: "Seit 1991",
    primary: true,
  },
  {
    name: "DomusVita Kreuzberg",
    subtitle: "Herzoglin Luise Haus",
    adresse: "Kreuzberg",
    ort: "Berlin-Kreuzberg",
    telefon: "(030) 53 00 555 0",
    zeiten: "Mo–Fr 08:00–18:00 Uhr · 24/7 Rufbereitschaft",
    bild: "/images/kreuzberg/hin-12.jpg",
    gebiet: "Kreuzberg · Tempelhof-Schöneberg · Mitte",
    tag: "Partner HiN",
    primary: false,
  },
];

export default function Standorte() {
  return (
    <section id="standorte" className="py-24 md:py-32 bg-dv-50">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-dv-600 tracking-wider uppercase mb-4">
            Unsere Standorte
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-800 mb-6">
            Nah bei <span className="gradient-text">Ihnen</span>
          </h2>
          <p className="text-navy-500 max-w-2xl mx-auto text-lg">
            Mit zwei Standorten in Berlin und einem starken Netzwerk sind wir für Sie
            in fast ganz Berlin erreichbar.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {standorte.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`bg-white rounded-3xl overflow-hidden shadow-lg border transition-shadow hover:shadow-xl ${
                s.primary ? "border-dv-200 ring-1 ring-dv-100" : "border-navy-100"
              }`}
            >
              {/* Foto */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={s.bild}
                  alt={s.name}
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    s.primary ? "bg-dv-500 text-white" : "bg-white/90 text-navy-700"
                  }`}>
                    {s.tag}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-bold text-xl">{s.name}</h3>
                  <p className="text-white/80 text-sm">{s.subtitle}</p>
                </div>
              </div>

              {/* Infos */}
              <div className="p-6 flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-dv-500 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-navy-800">{s.adresse}</div>
                    <div className="text-navy-500 text-sm">{s.ort}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-dv-500 shrink-0" />
                  <a href="tel:+493053005550" className="text-navy-700 hover:text-dv-600 transition-colors font-medium">
                    {s.telefon}
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-dv-500 shrink-0 mt-0.5" />
                  <div className="text-navy-500 text-sm">{s.zeiten}</div>
                </div>
                <div className="pt-2 border-t border-navy-100">
                  <p className="text-xs text-navy-400 font-medium uppercase tracking-wider mb-1">Einzugsgebiet</p>
                  <p className="text-sm text-navy-600">{s.gebiet}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
