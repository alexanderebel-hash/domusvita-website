"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Heart, Users, Award, ArrowRight } from "lucide-react";

const timeline = [
  { year: "1991", title: "Gründung", text: "Gründung als Omnibus Pflegedienst in Berlin — der Grundstein für alles, was folgte." },
  { year: "1999", title: "SGB-V-Zulassung", text: "Zulassung als Vertragspartner der gesetzlichen Krankenversicherung. Professionelle Behandlungspflege wird möglich." },
  { year: "2010", title: "Wachstum", text: "Erweiterung des Teams und Ausbau des Leistungsangebots. Erste Partnerschaften in Berlin." },
  { year: "2017", title: "DomusVita heute", text: "Neuausrichtung unter der Leitung von Lukas Dahrendorf und Alexander Ebel. Modernes Familienunternehmen mit klarer Vision." },
  { year: "2024", title: "Zweiter Standort", text: "Eröffnung des Standorts Kreuzberg im Herzoglin Luise Haus — in Partnerschaft mit HiN Pflege GmbH." },
];

const values = [
  { icon: Heart, title: "Würde", description: "Jeder Mensch verdient würdevolle Pflege — unabhängig von Diagnose oder Pflegebedarf." },
  { icon: Users, title: "Gemeinschaft", description: "Wir sind ein Team — mit unseren Klienten, ihren Familien und unseren Mitarbeitenden." },
  { icon: Award, title: "Exzellenz", description: "Hohe Standards in Ausbildung und Dokumentation sind für uns selbstverständlich." },
  { icon: MapPin, title: "Berlin", description: "Als Berliner Familienunternehmen kennen wir die Stadt und ihre Menschen seit über 30 Jahren." },
];

const gebiete = [
  "Treptow-Köpenick", "Tempelhof-Schöneberg", "Neukölln",
  "Kreuzberg", "Mitte", "Friedrichshain", "Ganz Berlin",
];

export default function UeberUnsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">

        {/* Page Hero mit echtem Team-Foto */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/treptow/situativ-6.jpg"
              alt="DomusVita Team — Ambulante Pflege Berlin"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-navy-900/80 via-navy-900/70 to-navy-900/90" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
            <AnimatedSection>
              <span className="inline-block text-sm font-semibold text-dv-300 tracking-wider uppercase mb-4">
                Wer wir sind
              </span>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Über <span className="text-dv-400">uns</span>
              </h1>
              <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
                Seit 1991 begleiten wir Menschen in ihrem Zuhause — mit Herz, Fachkenntnis und echter Leidenschaft für die Pflege.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Geschäftsführer */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <AnimatedSection direction="left">
                <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
                  <Image
                    src="/images/treptow/portrait-2.jpg"
                    alt="Lukas Dahrendorf und Alexander Ebel — Geschäftsführer DomusVita"
                    fill
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="glass rounded-xl px-5 py-3">
                      <p className="text-white font-semibold">Lukas Dahrendorf & Alexander Ebel</p>
                      <p className="text-white/70 text-sm">Geschäftsführer DomusVita Gesundheit GmbH</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="right" delay={0.2}>
                <span className="inline-block text-sm font-semibold text-dv-600 tracking-wider uppercase mb-4">
                  Unsere Führung
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-navy-800 mb-6 leading-tight">
                  Geführt mit <span className="gradient-text">Leidenschaft</span>
                </h2>
                <p className="text-navy-500 text-lg leading-relaxed mb-4">
                  Lukas Dahrendorf und Alexander Ebel führen DomusVita mit dem Anspruch,
                  ambulante Pflege in Berlin neu zu denken — persönlicher, moderner und
                  näher am Menschen.
                </p>
                <p className="text-navy-500 leading-relaxed mb-6">
                  Als Familienunternehmen kennen wir jeden unserer Klienten beim Namen.
                  Entscheidungen werden nicht in Konzerzzentralen getroffen — sondern von
                  Menschen, denen die Pflege wirklich am Herzen liegt.
                </p>
                <a
                  href="tel:+493053005550"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-dv-600 text-white font-semibold hover:bg-dv-700 transition-all"
                >
                  Persönlich sprechen
                  <ArrowRight className="w-4 h-4" />
                </a>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Gründungsgeschichte + Timeline */}
        <section className="py-24 bg-dv-50">
          <div className="max-w-5xl mx-auto px-6">
            <AnimatedSection className="text-center mb-16">
              <span className="inline-block text-sm font-semibold text-dv-600 tracking-wider uppercase mb-4">
                Unsere Geschichte
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-6">
                Seit 1991 für <span className="gradient-text">Berlin</span>
              </h2>
              <p className="text-navy-500 text-lg max-w-2xl mx-auto leading-relaxed">
                DomusVita — <em>Domus</em> (Haus) + <em>Vita</em> (Leben). Was als kleiner
                Pflegedienst begann, ist heute ein gewachsenes Team aus leidenschaftlichen
                Fachkräften mit klarer Mission: Pflege, die zu Hause stattfindet.
              </p>
            </AnimatedSection>

            {/* Timeline */}
            <div className="relative">
              <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-dv-200" />
              <div className="flex flex-col gap-10">
                {timeline.map((item, i) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className={`relative flex items-start gap-6 md:gap-0 ${
                      i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Dot */}
                    <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-dv-500 border-4 border-white shadow -translate-x-1/2 mt-1.5 z-10" />

                    {/* Content */}
                    <div className={`ml-14 md:ml-0 md:w-5/12 ${i % 2 === 0 ? "md:pr-10 md:text-right" : "md:pl-10 md:text-left"}`}>
                      <div className="bg-white rounded-2xl p-5 border border-dv-100 shadow-sm">
                        <span className="text-dv-500 font-bold text-lg">{item.year}</span>
                        <h3 className="font-semibold text-navy-800 mt-1 mb-2">{item.title}</h3>
                        <p className="text-navy-500 text-sm leading-relaxed">{item.text}</p>
                      </div>
                    </div>
                    <div className="hidden md:block md:w-5/12" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Werte */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy-800">
                Was uns <span className="gradient-text">antreibt</span>
              </h2>
            </AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 rounded-2xl bg-dv-50 flex items-center justify-center mx-auto mb-3">
                    <v.icon className="w-6 h-6 text-dv-500" />
                  </div>
                  <h3 className="font-semibold text-navy-800 mb-1">{v.title}</h3>
                  <p className="text-xs text-navy-400 leading-relaxed">{v.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team-Foto (Meeting) */}
        <section className="py-16 bg-dv-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 rounded-3xl overflow-hidden shadow-xl">
              <div className="relative h-72 md:h-96">
                <Image
                  src="/images/treptow/situativ-4.jpg"
                  alt="DomusVita — Beratungsgespräch mit Klienten"
                  fill className="object-cover object-center"
                />
              </div>
              <div className="relative h-72 md:h-96">
                <Image
                  src="/images/treptow/situativ-1.jpg"
                  alt="DomusVita Team im Gespräch"
                  fill className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Pflegegebiete */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy-800 mb-4">
                Unsere <span className="gradient-text">Pflegegebiete</span>
              </h2>
              <p className="text-navy-500">Mit zwei Standorten sind wir in ganz Berlin für Sie da.</p>
            </AnimatedSection>
            <div className="flex flex-wrap justify-center gap-3">
              {gebiete.map((gebiet, i) => (
                <motion.div
                  key={gebiet}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-dv-200 bg-dv-50 text-navy-700 font-medium"
                >
                  <MapPin className="w-3.5 h-3.5 text-dv-500" />
                  {gebiet}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
