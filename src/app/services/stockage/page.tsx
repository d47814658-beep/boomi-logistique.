'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Lock, Key, Camera, CheckCircle } from 'lucide-react';
import { MegaButton } from '@/components/ui/MegaButton';
import { BentoCard } from '@/components/ui/BentoCard';
import Link from 'next/link';

export default function ServiceStockage() {
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
      {/* HERO SECTION - DARK MODE */}
      <section className="relative min-h-[70vh] flex items-center pt-32 pb-20 bg-brand-midnight text-white overflow-hidden">
        <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-[40vw] h-[40vw] bg-brand-orange/20 rounded-full blur-[120px] mix-blend-screen" />
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white font-bold text-sm mb-8 backdrop-blur-md"
            >
              Cotonou, Bénin
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-7xl font-heading font-extrabold leading-tight tracking-tight mb-8"
            >
              Ne laissez plus le manque d'espace <br/>
              <span className="text-brand-orange">freiner votre croissance.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-300 max-w-2xl mb-12 leading-relaxed"
            >
              Stockage sécurisé, gestion d'inventaire et expédition à la demande. Le partenaire logistique idéal pour les e-commerçants et les entreprises au Bénin.
            </motion.p>
          </div>
        </div>
      </section>

      {/* CARACTÉRISTIQUES BENTO */}
      <section className="py-32 bg-brand-light-gray relative">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-midnight mb-6">Sécurité de Niveau Bancaire</h2>
            <p className="text-lg text-gray-600">Vos biens sont gardés comme s'ils étaient les nôtres.</p>
          </motion.div>

          <motion.div 
            variants={stagger}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <motion.div variants={itemFadeIn}>
              <BentoCard className="h-full">
                <div className="w-14 h-14 rounded-2xl bg-brand-midnight flex items-center justify-center mb-8">
                  <Camera className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-brand-midnight mb-4">Sécurité Absolue</h3>
                <p className="text-gray-600">Vos marchandises sont entreposées dans un environnement hautement surveillé, accessible à Cotonou et Natitingou.</p>
              </BentoCard>
            </motion.div>

            <motion.div variants={itemFadeIn}>
              <BentoCard className="h-full">
                <div className="w-14 h-14 rounded-2xl bg-brand-orange/10 flex items-center justify-center mb-8">
                  <Lock className="w-7 h-7 text-brand-orange" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-brand-midnight mb-4">Flexibilité Totale</h3>
                <p className="text-gray-600">Que vous ayez besoin de stocker un seul carton ou l'inventaire complet de votre boutique en ligne, nos tarifs s'adaptent rigoureusement à vos volumes.</p>
              </BentoCard>
            </motion.div>

            <motion.div variants={itemFadeIn} className="md:col-span-2 lg:col-span-1">
              <BentoCard className="h-full bg-brand-midnight text-white group-hover:bg-brand-midnight">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-8">
                  <Key className="w-7 h-7 text-brand-emerald" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4">Réactivité (Fulfillment)</h3>
                <p className="text-gray-400">Une commande vient de tomber sur votre site Web ? Déclenchez la livraison depuis votre stock chez Boomi, nous expédions instantanément.</p>
              </BentoCard>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* POUR QUI / TARIFS CTA */}
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-midnight mb-6">Idéal pour qui ?</h2>
              <ul className="space-y-6 mb-10">
                {[
                  "Revendeurs E-commerce sans local physique",
                  "Entreprises B2B ayant des excédents de stock",
                  "Particuliers en transition de logement ou voyage"
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 text-gray-600 text-lg items-center">
                    <span className="w-3 h-3 rounded-full bg-brand-orange shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div {...fadeInUp} className="bg-brand-light-gray rounded-[2rem] p-10 md:p-12 border border-gray-100 shadow-soft text-center">
              <h3 className="text-2xl font-heading font-bold text-brand-midnight mb-4">Besoin d'un espace ?</h3>
              <p className="text-gray-600 mb-8 max-w-sm mx-auto">
                Nos tarifs s'adaptent au m³ et à la durée de stockage. Obtenez une offre sur-mesure pour votre projet.
              </p>
              <Link href="/contact">
                <MegaButton fullWidth>Louer un espace de stockage</MegaButton>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
