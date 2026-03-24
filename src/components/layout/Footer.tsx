import Link from 'next/link';
import { ArrowRight, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { MegaButton } from '@/components/ui/MegaButton';
import Image from 'next/image';

export default function Footer() {
  return (
    <>
      {/* Pre-footer / Mega-Footer CTA */}
      <section className="bg-brand-midnight text-white py-24 border-b border-white/10">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-heading font-extrabold mb-8 leading-tight">
            Un colis à expédier ?<br />
            Parlons-en maintenant.
          </h2>
          <a href="https://wa.me/22951505942" target="_blank" rel="noopener noreferrer" className="inline-block">
            <MegaButton className="text-xl px-8 py-4 flex items-center gap-3">
              Discuter sur WhatsApp (+229 51 50 59 42)
            </MegaButton>
          </a>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="bg-brand-midnight text-white pt-16 pb-10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            {/* Brand Info */}
            <div>
              <Link href="/" className="inline-block mb-6 group relative w-[100px] h-10 md:w-[140px] md:h-14 overflow-hidden mix-blend-screen opacity-95">
                <Image 
                  src="/logo.png" 
                  alt="Boomi Logistique Logo" 
                  fill 
                  className="object-contain object-center scale-[2.5] origin-center brightness-0 invert"
                />
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                La logistique sans stress au Bénin. Que ce soit pour un repas, des courses ou l'expédition de vos marchandises, nous gérons chaque détail de A à Z.
              </p>
              <div className="flex flex-col gap-2 text-sm text-gray-400">
                <p><strong>Légal :</strong> Entreprise immatriculée</p>
                <p>RCCM RB/COT/20A61423</p>
                <p>IFU 0202011729313</p>
              </div>
            </div>

            {/* Nos Services */}
            <div>
              <h4 className="text-lg font-heading font-bold mb-6">Nos Services</h4>
              <ul className="flex flex-col gap-4">
                <li>
                  <Link href="/services/inter-villes" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 group">
                    <ArrowRight className="w-4 h-4 text-brand-orange opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    Expédition Inter-Villes
                  </Link>
                </li>
                <li>
                  <Link href="/services/stockage" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 group">
                    <ArrowRight className="w-4 h-4 text-brand-orange opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    Stockage Boomi Logistics
                  </Link>
                </li>
                <li>
                  <Link href="/services/location-stands" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 group">
                    <ArrowRight className="w-4 h-4 text-brand-orange opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    Événementiel & Stands
                  </Link>
                </li>
              </ul>
            </div>

            {/* Entreprise */}
            <div>
              <h4 className="text-lg font-heading font-bold mb-6">L'Entreprise</h4>
              <ul className="flex flex-col gap-4">
                <li>
                  <Link href="/a-propos" className="text-gray-400 hover:text-white transition-colors text-sm">À Propos</Link>
                </li>
                <li>
                  <Link href="/contact#contact" className="text-gray-400 hover:text-white transition-colors text-sm">Nous Contacter</Link>
                </li>
                <li>
                  <Link href="/contact#faq" className="text-gray-400 hover:text-white transition-colors text-sm">FAQ</Link>
                </li>
                <li>
                  <Link href="/#tarifs" className="text-gray-400 hover:text-white transition-colors text-sm">Nos Tarifs</Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-heading font-bold mb-6">Contact</h4>
              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-400">
                    Agla, Vons de la Pharmacie Luli Luli,<br />Cotonou
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-brand-orange shrink-0" />
                  <span className="text-sm text-gray-400">08h00 - 18h00 du lundi au dimanche</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-brand-orange shrink-0" />
                  <a href="tel:+2290151505942" className="text-sm text-gray-400 hover:text-white transition-colors">+229 01 51 50 59 42</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-brand-orange shrink-0" />
                  <a href="mailto:boomi.africa@gmail.com" className="text-sm text-gray-400 hover:text-white transition-colors">boomi.africa@gmail.com</a>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Boomi Logistique. Tous droits réservés.
            </p>
            <div className="flex items-center gap-6">
              <a href="https://www.facebook.com/boomi.africa" target="_blank" rel="noreferrer" className="text-sm text-gray-500 hover:text-brand-orange transition-colors">Facebook</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
