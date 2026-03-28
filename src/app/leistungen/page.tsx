import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceGrid from "@/components/ServiceGrid";
import CTA from "@/components/CTA";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata = {
  title: "Leistungen — DomusVita Gesundheit",
  description: "Alle Pflegeleistungen von DomusVita in Berlin: Behandlungspflege, Grundpflege, Hauswirtschaft, Demenzbetreuung, 24h Rufbereitschaft und mehr.",
};

export default function LeistungenPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* Page Hero */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-navy-900 to-dv-700 text-white">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <AnimatedSection>
              <span className="inline-block text-sm font-semibold text-dv-300 tracking-wider uppercase mb-4">
                Was wir tun
              </span>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Unsere <span className="text-dv-400">Leistungen</span>
              </h1>
              <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
                Von der täglichen Grundversorgung bis zur spezialisierten Behandlungspflege —
                wir bieten ein umfassendes Angebot, das sich Ihren Bedürfnissen anpasst.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* All 8 services */}
        <ServiceGrid preview={false} />

        {/* Info strip */}
        <section className="py-16 bg-dv-50 border-y border-dv-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {[
                { title: "Kassenzulassung", description: "Alle gesetzlichen Krankenkassen und Pflegekassen anerkannt" },
                { title: "Qualifiziertes Team", description: "Examinierte Pflegefachkräfte mit kontinuierlicher Fortbildung" },
                { title: "Individuelle Planung", description: "Jeder Pflegeplan wird gemeinsam mit Ihnen und Ihren Angehörigen erstellt" },
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
