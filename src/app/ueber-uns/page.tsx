"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { MapPin, Heart, Users, Award } from "lucide-react";

const team = [
  {
    name: "Lukas Dahrendorf",
    role: "Geschäftsführer",
    quote: "Pflege ist mehr als ein Beruf — es ist eine Berufung. Wir geben alles, damit unsere Klienten in Würde und Selbstständigkeit zu Hause leben können.",
    gradient: "from-dv-400 to-dv-600",
    initials: "LD",
    founder: true,
  },
  {
    name: "Alexander Ebel",
    role: "Geschäftsführer",
    quote: "Innovationen in der Pflege ermöglichen uns, effizienter für unsere Klienten da zu sein. Technologie im Dienst des Menschen — das ist unser Ansatz.",
    gradient: "from-navy-600 to-navy-800",
    initials: "AE",
    founder: true,
  },
  {
    name: "Miriam",
    role: "Pflegedienstleitung",
    quote: "Jeder Mensch hat seine eigene Geschichte. Ich sorge dafür, dass unser Team diese Geschichten kennt und respektiert.",
    gradient: "from-teal-400 to-teal-600",
    initials: "M",
    founder: false,
  },
  {
    name: "Linda",
    role: "Qualitätsmanagement",
    quote: "Qualität bedeutet für mich: Keine Kompromisse, wenn es um das Wohlergehen unserer Klienten geht.",
    gradient: "from-dv-300 to-dv-500",
    initials: "L",
    founder: false,
  },
];

const gebiete = [
  "Treptow-Köpenick",
  "Tempelhof-Schöneberg",
  "Neukölln",
  "Mitte",
  "Friedrichshain-Kreuzberg",
  "Ganz Berlin",
];

const values = [
  { icon: Heart, title: "Würde", description: "Jeder Mensch verdient würdevolle Pflege — unabhängig von Diagnose oder Pflegebedarf." },
  { icon: Users, title: "Gemeinschaft", description: "Wir sind ein Team — mit unseren Klienten, ihren Familien und unseren Mitarbeitenden." },
  { icon: Award, title: "Exzellenz", description: "Hohe Standards in Ausbildung und Dokumentation sind für uns selbstverständlich." },
  { icon: MapPin, title: "Berlin", description: "Als Berliner Familienunternehmen kennen wir die Stadt und ihre Menschen." },
];

export default function UeberUnsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* Page Hero */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-navy-900 to-dv-700 text-white">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <AnimatedSection>
              <span className="inline-block text-sm font-semibold text-dv-300 tracking-wider uppercase mb-4">
                Wer wir sind
              </span>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Über <span className="text-dv-400">uns</span>
              </h1>
              <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
                Ein Berliner Familienunternehmen mit über 20 Jahren Erfahrung in der ambulanten Pflege.
                Domus (Haus) + Vita (Leben) = Pflege zu Hause.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Geschichte */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-6">
                Unsere <span className="gradient-text">Geschichte</span>
              </h2>
              <div className="prose prose-lg text-navy-500 mx-auto">
                <p className="leading-relaxed mb-4">
                  Seit über 20 Jahren begleiten wir Menschen in ihrem Zuhause. Was als kleines
                  Familienunternehmen in Berlin begann, ist heute ein wachsendes Team aus
                  leidenschaftlichen Pflegefachkräften — vereint durch eine gemeinsame Mission:
                  ambulante Pflege, die den ganzen Menschen sieht.
                </p>
                <p className="leading-relaxed mb-4">
                  Der Name DomusVita ist Programm: <em>Domus</em> — das Haus, der sichere Ort,
                  das Zuhause. <em>Vita</em> — das Leben, die Energie, die Lebensfreude.
                  Beides zusammen steht für unsere Überzeugung, dass Pflege dort am besten gelingt,
                  wo man sich zu Hause fühlt.
                </p>
                <p className="leading-relaxed">
                  Mit voller Kassenzulassung und einem engagierten Team aus examinierten
                  Pflegefachkräften betreuen wir Klientinnen und Klienten in ganz Berlin —
                  rund um die Uhr, sieben Tage die Woche.
                </p>
              </div>
            </AnimatedSection>

            {/* Values */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
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

        {/* Team */}
        <section className="py-24 bg-dv-50">
          <div className="max-w-7xl mx-auto px-6">
            <AnimatedSection className="text-center mb-16">
              <span className="inline-block text-sm font-semibold text-dv-600 tracking-wider uppercase mb-4">
                Das Team
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-800">
                Menschen, die <span className="gradient-text">bewegen</span>
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {team.map((member, i) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`bg-white rounded-2xl p-6 border shadow-sm hover:shadow-lg transition-shadow ${member.founder ? "border-dv-200 ring-1 ring-dv-100" : "border-navy-100"}`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white font-bold text-lg shrink-0`}>
                      {member.initials}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-0.5">
                        <h3 className="font-semibold text-navy-800">{member.name}</h3>
                        {member.founder && (
                          <span className="text-xs bg-dv-100 text-dv-700 px-2 py-0.5 rounded-full font-medium">Gründer</span>
                        )}
                      </div>
                      <div className="text-sm text-dv-500 font-medium mb-3">{member.role}</div>
                      <p className="text-sm text-navy-500 leading-relaxed italic">&ldquo;{member.quote}&rdquo;</p>
                    </div>
                  </div>
                </motion.div>
              ))}
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
              <p className="text-navy-500">Wir sind in ganz Berlin für Sie da.</p>
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
