"use client";

import { motion } from 'framer-motion';
import { Target, TrendingUp, Users } from 'lucide-react';

export default function AboutPage() {
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
      {/* HERO A PROPOS */}
      <section className="relative min-h-[60vh] flex items-center pt-32 pb-20 overflow-hidden bg-brand-light-gray">
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-orange/20 bg-white text-brand-orange font-bold text-sm mb-8 shadow-soft"
          >
            Qui Sommes-Nous ?
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-heading font-extrabold text-brand-midnight leading-tight tracking-tight max-w-4xl mx-auto mb-8"
          >
            Plus qu'une logistique. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-amber-500">
              Une promesse de fiabilité.
            </span>
          </motion.h1>
        </div>
      </section>

      {/* HISTOIRE & VISION */}
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-midnight mb-6">Notre Histoire</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Boomi Logistique est née d'un constat simple : il est trop difficile d'expédier un colis au Bénin en toute confiance. Les pertes, les retards, et le manque de transparence freinent l'économie locale.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Nous avons décidé de changer la donne. En associant une technologie de suivi en temps réel à une rigueur opérationnelle inflexible, nous garantissons l'intégrité de vos biens, de Cotonou à Natitingou.
              </p>
            </motion.div>

            <motion.div {...fadeInUp} className="bg-brand-midnight text-white p-12 rounded-[2.5rem] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/20 blur-[80px] rounded-full" />
              <div className="relative z-10">
                <h3 className="text-2xl font-heading font-bold mb-8">Notre Vision</h3>
                <blockquote className="text-2xl font-light italic leading-snug mb-8">
                  "Devenir le pont logistique le plus sûr et le plus rapide de l'Afrique de l'Ouest, en commençant par le Bénin."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div>
                    <div className="font-bold">L'Équipe Boomi</div>
                    <div className="text-gray-400 text-sm">Fondateurs</div>
                   </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VALEURS CLÉS */}
      <section className="py-32 bg-brand-light-gray relative">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-midnight mb-6">Nos Engagements</h2>
          </motion.div>

          <motion.div 
            variants={stagger}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { icon: Target, title: "Fiabilité Absolue", desc: "Zéro colis perdu. C'est notre métrique principale et notre engagement quotidien envers vous." },
              { icon: TrendingUp, title: "Vitesse Optimisée", desc: "Des trajets directs et un chargement optimisé pour des délais de livraison toujours plus courts." },
              { icon: Users, title: "Service B2B & B2C", desc: "Chaque client, particulier ou multinationale, mérite le même niveau d'excellence." }
            ].map((valeur, i) => (
              <motion.div variants={itemFadeIn} key={i}>
                <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 h-full hover:shadow-soft transition-all">
                  <valeur.icon className="w-10 h-10 text-brand-orange mb-6" />
                  <h3 className="text-2xl font-heading font-bold text-brand-midnight mb-4">{valeur.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{valeur.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
