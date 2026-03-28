"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import AnimatedSection from "@/components/AnimatedSection";
import FAQ from "@/components/FAQ";
import { motion } from "framer-motion";
import { Info, CheckCircle } from "lucide-react";

const pflegegrade = [
  { grad: 1, geld: null, sachleistung: null, note: "Eingeschränkte Alltagskompetenz" },
  { grad: 2, geld: 316, sachleistung: 724, note: "Erhebliche Beeinträchtigungen" },
  { grad: 3, geld: 545, sachleistung: 1363, note: "Schwere Beeinträchtigungen" },
  { grad: 4, geld: 728, sachleistung: 1693, note: "Schwerste Beeinträchtigungen" },
  { grad: 5, geld: 901, sachleistung: 2095, note: "Schwerste Beeinträchtigungen mit besonderen Anforderungen" },
];

const leistungsarten = [
  { label: "Pflegegeld", description: "Wird direkt an die pflegebedürftige Person ausgezahlt. Für selbst organisierte Pflege durch Angehörige." },
  { label: "Pflegesachleistung", description: "Gilt für professionelle ambulante Pflegedienste wie DomusVita. Wird direkt mit der Pflegekasse abgerechnet." },
  { label: "Entlastungsleistung", description: "Bis zu €125 pro Monat für niedrigschwellige Betreuung und Alltagsunterstützung — ab Pflegegrad 1." },
  { label: "Verhinderungspflege", description: "Bis zu €1.612 pro Jahr, wenn die Pflegeperson verhindert ist (Urlaub, Krankheit)." },
];

export default function KostenPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* Page Hero */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-navy-900 to-dv-700 text-white">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <AnimatedSection>
              <span className="inline-block text-sm font-semibold text-dv-300 tracking-wider uppercase mb-4">
                Finanzierung
              </span>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Kosten &amp; <span className="text-dv-400">Leistungen</span>
              </h1>
              <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
                Pflege ist ein Recht — und die Pflegeversicherung hilft dabei. Wir erklären,
                was Ihnen zusteht und wie wir abrechnen.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Pflegegrad-Tabelle */}
        <section className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">
                Pflegegrad-Leistungen <span className="gradient-text">2024</span>
              </h2>
              <p className="text-navy-500 max-w-xl mx-auto">
                Die Pflegekasse übernimmt je nach Pflegegrad folgende monatliche Leistungen:
              </p>
            </AnimatedSection>

            <div className="overflow-x-auto rounded-2xl border border-navy-100 shadow-lg">
              <table className="w-full">
                <thead>
                  <tr className="bg-navy-800 text-white">
                    <th className="px-6 py-4 text-left font-semibold">Pflegegrad</th>
                    <th className="px-6 py-4 text-right font-semibold">Pflegegeld</th>
                    <th className="px-6 py-4 text-right font-semibold">Sachleistung</th>
                    <th className="px-6 py-4 text-left font-semibold hidden md:table-cell">Kennzeichen</th>
                  </tr>
                </thead>
                <tbody>
                  {pflegegrade.map((row, i) => (
                    <motion.tr
                      key={row.grad}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className={`border-t border-navy-100 ${i % 2 === 0 ? "bg-white" : "bg-dv-50/50"} hover:bg-dv-50 transition-colors`}
                    >
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-dv-600 text-white font-bold text-sm">
                          {row.grad}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right font-semibold text-navy-800">
                        {row.geld ? `€ ${row.geld}` : "—"}
                      </td>
                      <td className="px-6 py-4 text-right">
                        {row.sachleistung ? (
                          <span className="font-bold text-dv-600">€ {row.sachleistung.toLocaleString("de-DE")}</span>
                        ) : (
                          <span className="text-navy-400">—</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-sm text-navy-500 hidden md:table-cell">{row.note}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 flex items-start gap-2 text-sm text-navy-400">
              <Info className="w-4 h-4 shrink-0 mt-0.5 text-dv-400" />
              <span>Alle Beträge in Euro pro Monat. Stand 2024. Änderungen durch Pflegeversicherungsgesetz vorbehalten.</span>
            </div>
          </div>
        </section>

        {/* Leistungsarten */}
        <section className="py-20 bg-dv-50">
          <div className="max-w-5xl mx-auto px-6">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">
                Weitere Leistungen
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {leistungsarten.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-6 border border-dv-100 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-dv-500 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-navy-800 mb-2">{item.label}</h3>
                      <p className="text-navy-500 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <FAQ />

        <CTA />
      </main>
      <Footer />
    </>
  );
}
