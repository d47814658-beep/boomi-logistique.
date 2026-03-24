'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, LayoutPanelTop, Zap, Hammer } from 'lucide-react';
import { MegaButton } from '@/components/ui/MegaButton';
import { BentoCard } from '@/components/ui/BentoCard';
import Link from 'next/link';

export default function ServiceLocationStands() {
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
      <section className="relative min-h-[70vh] flex items-center pt-32 pb-20 overflow-hidden bg-brand-midnight text-white">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-brand-orange/20 rounded-full blur-[100px] opacity-60 mix-blend-screen" />
        
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-brand-orange font-bold text-sm mb-8 shadow-soft backdrop-blur-md"
          >
            Foires • Salons • Événements d'Entreprise
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold leading-tight tracking-tight max-w-5xl mx-auto mb-8"
          >
            L'espace premium pour exposer <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-yellow-400">
              avec impact.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Optez pour la qualité supérieure. Nos stands dépliables allient robustesse, esthétique et facilité de transport pour faire briller vos produits lors de vos événements.
          </motion.p>
        </div>
      </section>

      {/* PROCESSUS ET AVANTAGES */}
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-midnight mb-6">Zéro Stress, 100% Impact</h2>
            <p className="text-lg text-gray-600">Le matériel logistique est la dernière chose dont vous devriez vous soucier lors d'un événement.</p>
          </motion.div>

          <motion.div 
            variants={stagger}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { icon: LayoutPanelTop, title: "Installation Éclair", desc: "Dépliage facile sans outils complexes. Soyez prêt à vendre avant tout le monde." },
              { icon: Zap, title: "Résistance Tout-Terrain", desc: "Conçus pour affronter la météo béninoise (soleil ardent, pluie), nos stands restent stables et élégants sur tous les terrains." },
              { icon: Hammer, title: "Personnalisation (Image de Marque)", desc: "Adaptables selon l'identité de votre entreprise." }
            ].map((step, i) => (
              <motion.div variants={itemFadeIn} key={i}>
                <BentoCard className="h-full bg-brand-light-gray border border-gray-100">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-8 shadow-sm">
                    <step.icon className="w-8 h-8 text-brand-midnight" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-brand-midnight mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                </BentoCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CATALOGUE (Aperçu) CTA */}
      <section className="py-32 bg-brand-light-gray relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-white rounded-full blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-4xl mx-auto bg-white rounded-[3rem] p-10 md:p-16 shadow-soft border border-gray-50 text-center">
            <Sparkles className="w-12 h-12 text-brand-orange mx-auto mb-6" />
            <h2 className="text-4xl font-heading font-bold text-brand-midnight mb-6">Réservez pour votre prochain événement</h2>
            <p className="text-lg text-gray-600 mb-10 max-w-xl mx-auto">
              Chaque espace est unique, c'est pourquoi nous proposons différentes tailles de stands. Parlez-nous de votre projet pour un devis instantané.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="w-full sm:w-auto">
                <MegaButton fullWidth>
                  Réserver un stand pour mon événement
                  <ArrowRight className="w-5 h-5 ml-2" />
                </MegaButton>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
