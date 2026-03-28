import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Datenschutz — DomusVita Gesundheit",
  description: "Datenschutzerklärung der DomusVita Gesundheit GmbH gemäß DSGVO.",
};

export default function DatenschutzPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-navy-800 mb-10 mt-8">Datenschutzerklärung</h1>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-navy-800 mb-3">1. Datenschutz auf einen Blick</h2>
            <h3 className="text-base font-semibold text-navy-700 mb-2">Allgemeine Hinweise</h3>
            <p className="text-navy-600 leading-relaxed mb-4">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
              personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten
              sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche
              Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten
              Datenschutzerklärung.
            </p>
            <h3 className="text-base font-semibold text-navy-700 mb-2">Datenerfassung auf dieser Website</h3>
            <p className="text-navy-600 leading-relaxed">
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber.
              Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur verantwortlichen Stelle"
              in dieser Datenschutzerklärung entnehmen.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-navy-800 mb-3">2. Verantwortliche Stelle</h2>
            <p className="text-navy-600 leading-relaxed">
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br /><br />
              DomusVita Gesundheit GmbH<br />
              Baumschulenstr. 24<br />
              12437 Berlin<br /><br />
              Telefon: (030) 53 00 555 0<br />
              E-Mail: <a href="mailto:info@domusvita.de" className="text-dv-600 hover:text-dv-700 underline">info@domusvita.de</a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-navy-800 mb-3">3. Datenerfassung auf dieser Website</h2>
            <h3 className="text-base font-semibold text-navy-700 mb-2">Cookies</h3>
            <p className="text-navy-600 leading-relaxed mb-4">
              Unsere Internetseiten verwenden keine Cookies.
            </p>
            <h3 className="text-base font-semibold text-navy-700 mb-2">Server-Log-Dateien</h3>
            <p className="text-navy-600 leading-relaxed mb-4">
              Der Provider der Seiten erhebt und speichert automatisch Informationen in sogenannten
              Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
            </p>
            <ul className="list-disc list-inside text-navy-600 leading-relaxed mb-4 space-y-1">
              <li>Browsertyp und Browserversion</li>
              <li>verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p className="text-navy-600 leading-relaxed">
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
              Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
              Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien
              Darstellung und der Optimierung seiner Website — hierzu müssen die Server-Log-Files
              erfasst werden.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-navy-800 mb-3">4. Kontaktformular und Kontaktaufnahme</h2>
            <p className="text-navy-600 leading-relaxed">
              Wenn Sie uns per Telefon oder E-Mail kontaktieren, wird Ihre Anfrage inklusive aller
              daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung
              Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne
              Ihre Einwilligung weiter. Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6
              Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt
              oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen
              beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung
              der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-navy-800 mb-3">5. Ihre Rechte</h2>
            <p className="text-navy-600 leading-relaxed mb-4">
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und
              Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein
              Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine
              Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit
              für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen
              die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des
              Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
            </p>
            <p className="text-navy-600 leading-relaxed">
              Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden:<br /><br />
              <a href="mailto:info@domusvita.de" className="text-dv-600 hover:text-dv-700 underline">info@domusvita.de</a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-navy-800 mb-3">6. Hosting</h2>
            <p className="text-navy-600 leading-relaxed">
              Diese Website wird bei Microsoft Azure Static Web Apps (Microsoft Corporation, One Microsoft Way,
              Redmond, WA 98052-6399, USA) gehostet. Bei der Nutzung der Website werden automatisch
              technische Zugriffsdaten durch den Hosting-Anbieter erfasst. Details entnehmen Sie der
              Datenschutzerklärung von Microsoft:{" "}
              <a
                href="https://privacy.microsoft.com/de-de/privacystatement"
                className="text-dv-600 hover:text-dv-700 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                privacy.microsoft.com
              </a>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
