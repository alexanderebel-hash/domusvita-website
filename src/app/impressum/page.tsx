import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Impressum — DomusVita Gesundheit",
  description: "Impressum der DomusVita Gesundheit GmbH, ambulanter Pflegedienst in Berlin.",
};

export default function ImpressumPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-navy-800 mb-10 mt-8">Impressum</h1>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-navy-800 mb-3">Angaben gemäß § 5 TMG</h2>
            <p className="text-navy-600 leading-relaxed">
              DomusVita Gesundheit GmbH<br />
              Baumschulenstr. 24<br />
              12437 Berlin
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-navy-800 mb-3">Geschäftsführung</h2>
            <p className="text-navy-600 leading-relaxed">
              Lukas Dahrendorf<br />
              Alexander Ebel
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-navy-800 mb-3">Kontakt</h2>
            <p className="text-navy-600 leading-relaxed">
              Telefon: (030) 53 00 555 0<br />
              E-Mail: <a href="mailto:info@domusvita.de" className="text-dv-600 hover:text-dv-700 underline">info@domusvita.de</a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-navy-800 mb-3">Registereintrag</h2>
            <p className="text-navy-600 leading-relaxed">
              Eingetragen im Handelsregister.<br />
              Registergericht: Amtsgericht Charlottenburg<br />
              Registernummer: HRB 127949 B
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-navy-800 mb-3">Umsatzsteuer-Identifikationsnummer</h2>
            <p className="text-navy-600 leading-relaxed">
              USt-IdNr. gemäß § 27a Umsatzsteuergesetz: DE272486522
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-navy-800 mb-3">Institutionskennzeichen (IK)</h2>
            <p className="text-navy-600 leading-relaxed">
              IK: 461109934
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-navy-800 mb-3">Aufsichtsbehörde</h2>
            <p className="text-navy-600 leading-relaxed">
              Senatsverwaltung für Wissenschaft, Gesundheit, Pflege und Gleichstellung<br />
              Oranienstraße 106<br />
              10969 Berlin
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-navy-800 mb-3">Haftung für Inhalte</h2>
            <p className="text-navy-600 leading-relaxed">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach
              den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter
              jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen
              oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-navy-800 mb-3">Haftung für Links</h2>
            <p className="text-navy-600 leading-relaxed">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
              Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
              Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
              Seiten verantwortlich.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-navy-800 mb-3">Urheberrecht</h2>
            <p className="text-navy-600 leading-relaxed">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
              dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
              der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
              Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
