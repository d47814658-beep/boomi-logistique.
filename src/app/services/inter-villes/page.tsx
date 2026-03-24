'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Search, ShieldCheck, Clock, CheckCircle } from 'lucide-react';
import { MegaButton } from '@/components/ui/MegaButton';
import { BentoCard } from '@/components/ui/BentoCard';
import Link from 'next/link';

export default function ServiceInterVilles() {
  const fadeInUp: any = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const stagger: any = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, margin: "-100px" },
    transition: { staggerChildren: 0.15 }
  };

  const itemFadeIn: any = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-[70vh] flex items-center pt-32 pb-20 overflow-hidden bg-brand-light-gray">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-brand-light-blue rounded-full blur-[100px] opacity-40 mix-blend-multiply" />
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-orange/20 bg-white text-brand-orange font-bold text-sm mb-8 shadow-soft"
            >
              Cotonou ↔ Parakou ↔ Natitingou
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-7xl font-heading font-extrabold text-brand-midnight leading-tight tracking-tight mb-8"
            >
              Le pont logistique le plus sûr <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-amber-500">
                entre le Sud et le Nord.
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-600 max-w-2xl mb-12 leading-relaxed"
            >
              Cotonou ou Natitingou : Peu importe où vous êtes, vos échanges commerciaux et personnels ne s'arrêtent jamais. Récupération à domicile, transport sécurisé, livraison rapide.
            </motion.p>
          </div>
        </div>
      </section>

      {/* PROCESSUS SECTION */}
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-midnight mb-6">Le Standard Boomi</h2>
            <p className="text-lg text-gray-600">Un protocole en 3 étapes garanti sans faille.</p>
          </motion.div>

          <motion.div 
            variants={stagger}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { icon: ShieldCheck, title: "1. La Récupération", desc: "Ne vous déplacez plus. Nous venons chercher le colis directement à votre porte (maison ou bureau)." },
              { icon: Clock, title: "2. Le Transport", desc: "Un acheminement hautement sécurisé, suivi, et pensé pour protéger vos biens les plus précieux." },
              { icon: Search, title: "3. La Livraison", desc: "Une remise en mains propres rapide à la destination finale, sans tracas pour le destinataire." }
            ].map((step, i) => (
              <motion.div variants={itemFadeIn} key={i}>
                <BentoCard className="h-full">
                  <div className="w-16 h-16 rounded-full bg-brand-light-gray flex items-center justify-center mb-8 border border-gray-100">
                    <step.icon className="w-8 h-8 text-brand-orange" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-brand-midnight mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                </BentoCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* TARIFS SECTION */}
      <section className="py-32 bg-brand-midnight text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-brand-orange/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Tarification Claire.</h2>
              <p className="text-xl text-gray-300 font-light mb-8 max-w-md">
                Pas de frais cachés. Payez pour le poids et l'espace que vous utilisez rééllement.
              </p>
              <ul className="space-y-4 mb-10">
                {['Assurance de base incluse', 'Suivi SMS', 'Service Client VIP'].map((item, i) => (
                  <li key={i} className="flex gap-3 text-gray-300">
                    <CheckCircle className="w-6 h-6 text-brand-emerald shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/expedier">
                <MegaButton>Programmer un envoi Inter-villes</MegaButton>
              </Link>
            </motion.div>

            <motion.div {...fadeInUp} className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[2rem] p-8 md:p-12">
              <h3 className="text-2xl font-heading font-bold mb-8">Grille Tarifaire Indicative</h3>
              <div className="space-y-6">
                {[
                  { range: "Documents & Petits Colis (0-2kg)", price: "1.500 FCFA" },
                  { range: "Colis Moyen (2-10kg)", price: "2.500 FCFA" },
                  { range: "Bagages Extra (10-30kg)", price: "4.000 FCFA" },
                  { range: "Matériel Volumineux", price: "Sur Devis" }
                ].map((tarif, i) => (
                  <div key={i} className="flex justify-between items-center pb-6 border-b border-white/10 last:border-0 last:pb-0">
                    <span className="text-gray-300 font-medium">{tarif.range}</span>
                    <span className="text-xl font-heading font-bold text-brand-orange">{tarif.price}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
