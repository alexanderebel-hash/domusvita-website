import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const navLinks = [
  { label: "Leistungen", href: "/leistungen" },
  { label: "Kosten", href: "/kosten" },
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Pflegeberatung", href: "https://beratung.domusvita.de" },
];

const legalLinks = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white/80">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/logo-domusvita.png"
                alt="DomusVita Gesundheit"
                width={160}
                height={52}
                className="brightness-0 invert object-contain"
              />
            </Link>
            <p className="text-dv-400 italic text-sm font-medium mb-3">Freude am Pflegen.</p>
            <p className="text-white/60 leading-relaxed mb-6 max-w-xs">
              Ihr ambulanter Pflegedienst in Berlin — mit viel Herz und über 20 Jahren Erfahrung.
              Domus (Haus) + Vita (Leben) = Pflege zu Hause.
            </p>
            <div className="flex flex-col gap-3 text-sm">
              <a href="tel:+493053005550" className="flex items-center gap-2 hover:text-dv-400 transition-colors">
                <Phone className="w-4 h-4 text-dv-400 shrink-0" />
                (030) 53 00 555 0
              </a>
              <a href="mailto:info@domusvita.de" className="flex items-center gap-2 hover:text-dv-400 transition-colors">
                <Mail className="w-4 h-4 text-dv-400 shrink-0" />
                info@domusvita.de
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-dv-400 shrink-0 mt-0.5" />
                <span>Baumschulenstr. 24<br />12437 Berlin</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-dv-400 shrink-0" />
                24/7 Rufbereitschaft
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Navigation</h3>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-dv-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Pflegegebiete */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Pflegegebiete</h3>
            <ul className="flex flex-col gap-3 text-sm">
              {["Treptow-Köpenick", "Tempelhof-Schöneberg", "Neukölln", "Ganz Berlin"].map((area) => (
                <li key={area} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-dv-400 shrink-0" />
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
          <span>© {new Date().getFullYear()} DomusVita Gesundheit GmbH. Alle Rechte vorbehalten.</span>
          <div className="flex gap-6">
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-white transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
