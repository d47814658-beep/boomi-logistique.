'use client';

import { motion } from 'framer-motion';
import { Package, MapPin, Calendar, CheckCircle2, Phone } from 'lucide-react';
import { MegaButton } from '@/components/ui/MegaButton';
import { useState } from 'react';

const WHATSAPP_NUMBER = '22951505942';

export default function ExpedierPage() {
  const [form, setForm] = useState({
    depart: 'Cotonou',
    arrivee: 'Parakou',
    typeColis: 'Documents (0-2kg)',
    date: '',
  });

  const fadeInUp: any = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' },
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const dateStr = form.date ? ` le ${form.date}` : '';
    const message =
      `Bonjour Boomi Logistique 👋\n\n` +
      `Je souhaite expédier un colis :\n` +
      `📦 Type : ${form.typeColis}\n` +
      `📍 Départ : ${form.depart}\n` +
      `🏁 Arrivée : ${form.arrivee}\n` +
      `📅 Dépôt prévu${dateStr}\n\n` +
      `Pouvez-vous me confirmer le tarif et la disponibilité ? Merci !`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      <section className="relative min-h-screen flex pt-32 pb-20 bg-brand-light-gray">
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-brand-light-blue rounded-full blur-[100px] mix-blend-multiply opacity-50 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-brand-orange/5 rounded-full blur-[100px] mix-blend-multiply opacity-50 pointer-events-none" />

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* LEFT TEXT PANEL */}
            <motion.div {...fadeInUp} className="lg:col-span-5 relative lg:sticky lg:top-40">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-orange/20 bg-white text-brand-orange font-bold text-sm mb-8 shadow-soft">
                Rapide. Sécurisé. Transparent.
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-brand-midnight mb-6 leading-tight">
                Expédiez en toute <br />
                <span className="text-brand-orange">simplicité.</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-md">
                Remplissez le formulaire en 2 minutes. Nous vous répondons sur WhatsApp avec la confirmation et le tarif exact.
              </p>

              <div className="space-y-6 mb-10">
                {[
                  { title: "Réponse rapide", desc: "Notre équipe vous répond sur WhatsApp en moins de 15 minutes." },
                  { title: "Tarif transparent", desc: "Prix confirmé avant tout déplacement. Zéro mauvaise surprise." },
                  { title: "Sécurité maximale", desc: "Vos colis sont suivis et assurés jusqu'à livraison." },
                ].map((feature, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <CheckCircle2 className="w-6 h-6 text-brand-emerald shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-brand-midnight">{feature.title}</h4>
                      <p className="text-gray-600 text-sm mt-1">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Direct contact fallback */}
              <a
                href={`tel:+2290151505942`}
                className="inline-flex items-center gap-3 text-gray-500 hover:text-brand-orange transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                Préférez appeler ? +229 01 51 50 59 42
              </a>
            </motion.div>

            {/* RIGHT FORM PANEL */}
            <motion.div
              {...fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-7 bg-white rounded-[2rem] shadow-soft hover:shadow-soft-hover transition-all duration-500 border border-gray-100 p-8 md:p-12"
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <h3 className="text-2xl font-heading font-bold text-brand-midnight mb-2">Détails de l'expédition</h3>
                  <p className="text-gray-500 text-sm">Complétez les informations — on s'occupe du reste sur WhatsApp.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-midnight flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-gray-400" /> Ville de départ
                    </label>
                    <select
                      name="depart"
                      value={form.depart}
                      onChange={handleChange}
                      className="w-full bg-brand-light-gray border border-gray-200 rounded-xl px-4 py-3 text-brand-midnight focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all"
                    >
                      <option>Cotonou</option>
                      <option>Parakou</option>
                      <option>Natitingou</option>
                      <option>Bohicon</option>
                      <option>Abomey-Calavi</option>
                      <option>Porto-Novo</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-midnight flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-brand-orange" /> Ville d'arrivée
                    </label>
                    <select
                      name="arrivee"
                      value={form.arrivee}
                      onChange={handleChange}
                      className="w-full bg-brand-light-gray border border-gray-200 rounded-xl px-4 py-3 text-brand-midnight focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all"
                    >
                      <option>Parakou</option>
                      <option>Natitingou</option>
                      <option>Cotonou</option>
                      <option>Bohicon</option>
                      <option>Abomey-Calavi</option>
                      <option>Porto-Novo</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-midnight flex items-center gap-2">
                      <Package className="w-4 h-4 text-gray-400" /> Type de colis
                    </label>
                    <select
                      name="typeColis"
                      value={form.typeColis}
                      onChange={handleChange}
                      className="w-full bg-brand-light-gray border border-gray-200 rounded-xl px-4 py-3 text-brand-midnight focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all"
                    >
                      <option>Documents (0-2kg)</option>
                      <option>Colis standard (2-10kg)</option>
                      <option>Carton / Bagage (10-30kg)</option>
                      <option>Matériel fragile</option>
                      <option>Alimentaire</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-midnight flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gray-400" /> Date de dépôt prévue
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                      className="w-full bg-brand-light-gray border border-gray-200 rounded-xl px-4 py-3 text-brand-midnight focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all"
                    />
                  </div>
                </div>

                {/* WhatsApp CTA */}
                <div className="pt-6 border-t border-gray-100">
                  <p className="text-xs text-gray-400 mb-4">
                    En cliquant, vous serez redirigé vers WhatsApp avec vos informations pré-remplies. Notre équipe vous répondra rapidement.
                  </p>
                  <MegaButton type="submit" variant="primary" fullWidth>
                    Envoyer ma demande sur WhatsApp
                  </MegaButton>
                </div>
              </form>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}
