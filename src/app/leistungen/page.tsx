import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceGrid from "@/components/ServiceGrid";
import CTA from "@/components/CTA";
import AnimatedSection from "@/components/AnimatedSection";
import Image from "next/image";

export const metadata = {
  title: "Leistungen — DomusVita Gesundheit",
  description: "Alle Pflegeleistungen von DomusVita in Berlin: Behandlungspflege, Grundpflege, Hauswirtschaft, Demenzbetreuung, 24h Rufbereitschaft und mehr.",
};

const highlights = [
  { title: "Regelmäßige Pflegeberatung §37 Abs. 3 SGB XI", text: "Kostenlose Pflichtberatungsbesuche für Bezieher von Pflegegeld — persönlich, telefonisch oder per Video." },
  { title: "Überleitungspflege", text: "Nahtlose Versorgung nach einem stationären Krankenhausaufenthalt — wir kümmern uns um die reibungslose Rückkehr nach Hause." },
  { title: "Grundpflege", text: "Körperpflege, Ernährungsunterstützung und Mobilisierung — würdevoll und individuell abgestimmt." },
  { title: "Verhinderungspflege", text: "Wenn Ihre pflegende Angehörige verhindert ist, springen wir zuverlässig ein. Bis zu 1.612 € pro Jahr von der Pflegekasse." },
  { title: "Pflege bei Demenz & Behinderung", text: "Einfühlsame Begleitung und strukturierte Tagesgestaltung für Menschen mit Demenz, geistiger Behinderung oder psychischer Erkrankung." },
  { title: "Haushaltshilfe als Pflegeleistung", text: "Einkaufen, Kochen, Wäsche, Reinigung — damit Sie sich in Ihrer Wohnung rundum wohlfühlen." },
];

export default function LeistungenPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">

        {/* Page Hero mit echtem Beratungsfoto */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/hero-beratung.jpg"
              alt="DomusVita Pflegeberatung"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-navy-900/80 via-navy-900/65 to-navy-900/90" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
            <AnimatedSection>
              <span className="inline-block text-sm font-semibold text-dv-300 tracking-wider uppercase mb-4">
                Was wir tun
              </span>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Unsere <span className="text-dv-400">Leistungen</span>
              </h1>
              <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
                Von der täglichen Grundversorgung bis zur spezialisierten Behandlungspflege —
                wir bieten ein umfassendes Angebot, das sich Ihren Bedürfnissen anpasst.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Alle 8 Leistungen */}
        <ServiceGrid preview={false} />

        {/* 6 Leistungspunkte aus echtem Entwurf */}
        <section className="py-24 bg-navy-900 text-white">
          <div className="max-w-7xl mx-auto px-6">
            <AnimatedSection className="text-center mb-16">
              <span className="inline-block text-sm font-semibold text-dv-300 tracking-wider uppercase mb-4">
                Im Detail
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Unsere <span className="text-dv-400">Arbeitsbereiche</span>
              </h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {highlights.map((h, i) => (
                <AnimatedSection key={h.title} delay={i * 0.08}>
                  <div className="border border-white/10 rounded-2xl p-6 hover:border-dv-400/40 hover:bg-white/5 transition-all">
                    <div className="w-8 h-8 rounded-lg bg-dv-500/20 flex items-center justify-center mb-4">
                      <span className="text-dv-400 font-bold text-sm">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <h3 className="font-semibold text-white mb-2">{h.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{h.text}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* WG Drachenwiese — Pflege in Wohngemeinschaften */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <AnimatedSection className="text-center mb-12">
              <span className="inline-block text-sm font-semibold text-dv-600 tracking-wider uppercase mb-4">
                Besonderes Angebot
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">
                Pflege in der <span className="gradient-text">Wohngemeinschaft</span>
              </h2>
              <p className="text-navy-500 max-w-2xl mx-auto leading-relaxed">
                Die Wohngemeinschaft Drachenwiese bietet pflegebedürftigen Menschen ein selbstbestimmtes
                Leben in gemeinschaftlicher Umgebung — mit professioneller Unterstützung von DomusVita.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { src: "/images/wg-drachenwiese/gebaeude.jpg", alt: "WG Drachenwiese — Gebäude", span: "lg:col-span-2" },
                { src: "/images/wg-drachenwiese/wohnzimmer.jpg", alt: "Gemeinschaftlicher Wohnbereich", span: "" },
                { src: "/images/wg-drachenwiese/esszimmer.jpg", alt: "Esszimmer der WG", span: "" },
                { src: "/images/wg-drachenwiese/zimmer.jpg", alt: "Privatzimmer", span: "" },
                { src: "/images/wg-drachenwiese/bereich.jpg", alt: "Wohnbereich", span: "" },
                { src: "/images/wg-drachenwiese/detail.jpg", alt: "Detail", span: "" },
              ].map((foto, i) => (
                <AnimatedSection
                  key={foto.src}
                  delay={i * 0.08}
                  className={`relative overflow-hidden rounded-2xl group ${foto.span}`}
                >
                  <div className="relative h-56 md:h-64">
                    <Image
                      src={foto.src}
                      alt={foto.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/20 transition-all duration-300" />
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection className="mt-10 text-center">
              <a
                href="tel:+493053005550"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-dv-600 text-white font-semibold hover:bg-dv-700 transition-all hover:scale-105"
              >
                Mehr zur WG Drachenwiese erfahren
              </a>
            </AnimatedSection>
          </div>
        </section>

        {/* Info-Strip mit echtem Team-Meeting-Foto */}
        <section className="py-0">
          <div className="relative h-64 md:h-80">
            <Image
              src="/images/team/team-tisch.jpg"
              alt="DomusVita Team"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-navy-900/60 flex items-center justify-center">
              <div className="text-center text-white px-6">
                <p className="text-2xl md:text-3xl font-bold mb-4">Ihr familiengeführter Pflegedienst in Berlin</p>
                <a
                  href="tel:+493053005550"
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-dv-400 text-white font-semibold hover:bg-dv-600 transition-all"
                >
                  (030) 53 00 555 0
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Kassenzulassung etc. */}
        <section className="py-16 bg-dv-50 border-t border-dv-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {[
                { title: "100% Kassenzulassung", description: "Alle gesetzlichen Kranken- und Pflegekassen anerkannt" },
                { title: "Examiniertes Team", description: "Pflegefachkräfte mit kontinuierlicher Fortbildung" },
                { title: "Individueller Pflegeplan", description: "Gemeinsam mit Ihnen und Ihren Angehörigen erstellt" },
              ].map((item) => (
                <AnimatedSection key={item.title}>
                  <h3 className="font-semibold text-navy-800 mb-2">{item.title}</h3>
                  <p className="text-navy-500 text-sm">{item.description}</p>
                </AnimatedSection>
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
