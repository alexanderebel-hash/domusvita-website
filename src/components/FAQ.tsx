"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { cn } from "@/lib/utils";

const faqs = [
  {
    frage: "Kommt meine Pflegeversicherung für die Pflege auf?",
    antwort:
      "Ja — als zugelassener Pflegedienst rechnen wir direkt mit Ihrer Pflegekasse ab. Ab Pflegegrad 2 haben Sie Anspruch auf Pflegesachleistungen, die wir vollständig in Anspruch nehmen. Sie zahlen in der Regel keinen Eigenanteil für unsere Pflegeleistungen. Wir helfen Ihnen gerne dabei, Ihren Pflegegrad zu beantragen oder zu erhöhen.",
  },
  {
    frage: "Welche Leistungen kann ich in Anspruch nehmen?",
    antwort:
      "Je nach Pflegegrad stehen Ihnen verschiedene Leistungen zu: Pflegegeld (Grad 2–5), Pflegesachleistungen für professionelle Pflege (ab Grad 2), der monatliche Entlastungsbetrag von 125 € (ab Grad 1), Kurzzeitpflege bis zu 1.774 € pro Jahr sowie Verhinderungspflege bis zu 1.612 € pro Jahr. Wir beraten Sie kostenlos zu allem, was Ihnen zusteht.",
  },
  {
    frage: "Was muss ich über die Pflegegrade wissen?",
    antwort:
      "Seit 2017 gibt es 5 Pflegegrade statt der alten Pflegestufen. Der Pflegegrad wird vom Medizinischen Dienst (MD) begutachtet und richtet sich nach Ihrer Selbstständigkeit in 6 Bereichen. Pflegegrad 1 ist für geringe Beeinträchtigungen, Pflegegrad 5 für schwerste Beeinträchtigungen mit besonderen Anforderungen. Wir begleiten Sie durch den gesamten Begutachtungsprozess.",
  },
  {
    frage: "Unterstützen Sie mich auch bei der Pflege zu Hause?",
    antwort:
      "Ja, das ist unser Kerngeschäft. Wir kommen direkt zu Ihnen nach Hause — für Grundpflege, Behandlungspflege, Medikamentengabe, Haushaltshilfe und vieles mehr. Unser Ziel ist es, dass Sie so lange wie möglich selbstbestimmt in Ihrer vertrauten Umgebung leben können. Rufen Sie uns an — wir erstellen gemeinsam Ihren individuellen Pflegeplan.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <AnimatedSection className="text-center mb-12">
          <span className="inline-block text-sm font-semibold text-dv-600 tracking-wider uppercase mb-4">
            Häufige Fragen
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-navy-800 mb-4">
            Fragen & <span className="gradient-text">Antworten</span>
          </h2>
          <p className="text-navy-500">
            Haben Sie weitere Fragen? Rufen Sie uns einfach an — wir beraten Sie kostenlos.
          </p>
        </AnimatedSection>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-white border border-navy-100 rounded-2xl overflow-hidden hover:border-dv-200 transition-colors"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left gap-4 cursor-pointer"
              >
                <span className={cn(
                  "font-semibold text-base transition-colors",
                  open === i ? "text-dv-600" : "text-navy-800"
                )}>
                  {faq.frage}
                </span>
                <ChevronDown
                  className={cn(
                    "w-5 h-5 shrink-0 text-dv-400 transition-transform duration-300",
                    open === i && "rotate-180"
                  )}
                />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-5 text-navy-500 leading-relaxed border-t border-dv-50 pt-4">
                      {faq.antwort}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <AnimatedSection className="mt-10 text-center">
          <a
            href="tel:+493053005550"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-dv-600 text-white font-semibold hover:bg-dv-700 transition-all hover:scale-105"
          >
            Weitere Fragen? Jetzt anrufen
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
