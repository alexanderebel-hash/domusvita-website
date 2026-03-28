"use client";

import { motion } from "framer-motion";
import { Heart, User, Home, Brain, Phone, Pill, Clock, MessageCircle } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import Link from "next/link";

// Nur offizielle Brand-Farben: Dunkelblau #265D90, Lichtblau #67B5EA, Teal #48615C, Grau #A4A4A4
const services = [
  {
    icon: Heart,
    title: "Behandlungspflege",
    description: "Wundversorgung, Injektionen und Medikamentengabe durch examinierte Pflegefachkräfte.",
    color: "from-dv-400 to-dv-600",
    iconColor: "text-dv-600",
    bg: "bg-dv-50",
  },
  {
    icon: User,
    title: "Grundpflege",
    description: "Körperpflege, Ernährungsunterstützung und Mobilitätshilfe — würdevoll und behutsam.",
    color: "from-dv-600 to-dv-800",
    iconColor: "text-dv-400",
    bg: "bg-dv-100",
  },
  {
    icon: Home,
    title: "Hauswirtschaft",
    description: "Einkaufen, Kochen, Wäschepflege und Reinigung — damit Sie sich zu Hause wohlfühlen.",
    color: "from-teal-500 to-dv-700",
    iconColor: "text-teal-500",
    bg: "bg-dv-50",
  },
  {
    icon: Brain,
    title: "Demenzbetreuung",
    description: "Einfühlsame Begleitung und strukturierte Tagesgestaltung für Menschen mit Demenz.",
    color: "from-dv-400 to-teal-500",
    iconColor: "text-dv-600",
    bg: "bg-dv-100",
  },
  {
    icon: Phone,
    title: "24h Rufbereitschaft",
    description: "Rund um die Uhr erreichbar — für alle Fälle, die nicht warten können.",
    color: "from-dv-600 to-dv-900",
    iconColor: "text-dv-400",
    bg: "bg-dv-50",
  },
  {
    icon: Pill,
    title: "Medikamenten\u00ADmanagement",
    description: "Zuverlässige Vorbereitung und Kontrolle Ihrer Medikamente nach ärztlicher Verordnung.",
    color: "from-dv-400 to-dv-600",
    iconColor: "text-teal-500",
    bg: "bg-dv-100",
  },
  {
    icon: Clock,
    title: "Verhinderungs\u00ADpflege",
    description: "Wenn Ihre Pflegeperson verhindert ist, übernehmen wir nahtlos und verlässlich.",
    color: "from-teal-500 to-dv-600",
    iconColor: "text-dv-600",
    bg: "bg-dv-50",
  },
  {
    icon: MessageCircle,
    title: "Pflegeberatung §37.3",
    description: "Kostenlose Pflegeberatungsbesuche — persönlich, telefonisch oder per Video.",
    color: "from-dv-300 to-dv-600",
    iconColor: "text-dv-400",
    bg: "bg-dv-100",
  },
];

export default function ServiceGrid({ preview = false }: { preview?: boolean }) {
  const displayServices = preview ? services.slice(0, 3) : services;

  return (
    <section id="leistungen" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-dv-600 tracking-wider uppercase mb-4">
            Unsere Leistungen
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-800 mb-6">
            Pflege, die <span className="gradient-text">trägt</span>
          </h2>
          <p className="text-navy-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Von der Grundpflege bis zur spezialisierten Behandlungspflege — wir sind mit
            ganzer Hingabe für Sie da.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayServices.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative bg-white rounded-2xl p-6 border border-navy-100 hover:border-dv-200 hover:shadow-xl hover:shadow-dv-400/10 transition-all duration-300 cursor-default"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${service.bg} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className={`w-6 h-6 ${service.iconColor}`} />
              </div>
              <h3
                className="text-lg font-semibold text-navy-800 mb-2"
                dangerouslySetInnerHTML={{ __html: service.title }}
              />
              <p className="text-navy-500 text-sm leading-relaxed">{service.description}</p>
              <div className={`absolute inset-x-0 bottom-0 h-0.5 rounded-b-2xl bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            </motion.div>
          ))}
        </div>

        {preview && (
          <AnimatedSection className="text-center mt-12">
            <Link
              href="/leistungen"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-dv-600 text-white font-semibold hover:bg-dv-700 transition-all duration-300 hover:scale-105 shadow-lg shadow-dv-600/20"
            >
              Alle 8 Leistungen ansehen
            </Link>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
}
