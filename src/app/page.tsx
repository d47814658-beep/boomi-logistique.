'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Package, Archive, LayoutGrid, CheckCircle } from 'lucide-react';
import { MegaButton } from '@/components/ui/MegaButton';
import { BentoCard } from '@/components/ui/BentoCard';
import Link from 'next/link';

export default function Home() {
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
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-brand-light-blue rounded-full blur-[100px] opacity-60 mix-blend-multiply" />
        <div className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] bg-brand-orange/5 rounded-full blur-[100px] opacity-60 mix-blend-multiply" />
        
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-orange/20 bg-brand-orange/5 text-brand-orange font-medium text-sm mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
            La logistique sans stress au Bénin.
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold text-brand-midnight leading-tight tracking-tight max-w-5xl mx-auto mb-8"
          >
            Restez chez vous. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-amber-500">
              Boomi livre.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Gagnez du temps. Que ce soit pour un repas, des courses administratives ou l'expédition de vos marchandises, nous gérons chaque détail de A à Z. C'est rapide, sécurisé, et pensé pour vous.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/expedier" className="w-full sm:w-auto">
              <MegaButton fullWidth>
                Démarrer une course
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </MegaButton>
            </Link>
            <Link href="/#services" className="w-full sm:w-auto pt-4 sm:pt-0 sm:ml-4">
              <span className="font-medium text-brand-midnight underline underline-offset-4 decoration-2 decoration-brand-orange/50 hover:decoration-brand-orange transition-colors">
                Découvrir nos services
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. LA MISSION (Editorial layout) */}
      <section className="bg-brand-midnight text-white py-32 relative overflow-hidden">
        <div className="absolute -left-20 -top-20 w-96 h-96 bg-brand-orange/20 blur-[120px] rounded-full" />
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            <motion.div {...fadeInUp} className="lg:col-span-4">
              <h2 className="text-brand-orange font-bold text-lg mb-4 tracking-wider uppercase">Notre Mission</h2>
              <h3 className="text-4xl md:text-5xl font-heading font-bold leading-tight">Votre partenaire de confiance, à chaque étape.</h3>
            </motion.div>
            <motion.div {...fadeInUp} className="lg:col-span-8 lg:pl-16">
              <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed mb-8">
                Boomi Logistique est bien plus qu'un simple service de livraison. Nous sommes le prolongement de votre entreprise et le facilitateur de votre quotidien. Commerçants, particuliers ou organisateurs d'événements : confiez-nous la logistique, concentrez-vous sur l'essentiel.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
                <div>
                  <div className="text-4xl font-heading font-bold text-white mb-2">100%</div>
                  <div className="text-gray-400 text-sm">Garantie sur la sécurité de vos biens.</div>
                </div>
                <div>
                  <div className="text-4xl font-heading font-bold text-white mb-2">24h</div>
                  <div className="text-gray-400 text-sm">Temps d'expédition moyen entre villes.</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. BENTO GRID SERVICES */}
      <section id="services" className="py-32 bg-brand-light-gray relative">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-midnight mb-6">L'Écosystème Boomi</h2>
            <p className="text-lg text-gray-600">Tout ce dont vous avez besoin pour faire bouger votre business.</p>
          </motion.div>

          <motion.div 
            variants={stagger}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {/* Service 1: Expédition Inter-Villes (Span 2 cols on Desktop) */}
            <motion.div variants={itemFadeIn}>
              <BentoCard gradient className="h-full flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-brand-orange/10 flex items-center justify-center mb-8">
                    <Package className="w-7 h-7 text-brand-orange" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-brand-midnight mb-4">Courses & Conciergerie</h3>
                  <p className="text-gray-600 mb-4 max-w-sm">Repas, courriers, factures ou courses au supermarché. Vous demandez, nous exécutons en un clin d'œil. Ne perdez plus une minute dans les bouchons.</p>
                  <div className="text-brand-orange font-semibold text-sm mb-6 bg-brand-orange/10 px-3 py-1 rounded-full inline-block">À partir de 500 FCFA (Cotonou Centre)</div>
                </div>
                <Link href="/#tarifs" className="inline-flex items-center text-brand-orange font-bold hover:gap-2 transition-all">
                  Découvrir le service <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </BentoCard>
            </motion.div>

            {/* Service 2: Inter-Villes */}
            <motion.div variants={itemFadeIn}>
              <BentoCard className="h-full flex flex-col justify-between bg-brand-midnight text-white group-hover:bg-brand-midnight">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-8">
                    <Archive className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-4">Le lien direct Nord-Sud.</h3>
                  <p className="text-gray-400 mb-8 max-w-sm">Plus de tracas pour vos envois nationaux (Cotonou &lt;-&gt; Natitingou). Nous récupérons votre colis à domicile avec un transport hautement sécurisé jusqu'à sa destination finale.</p>
                </div>
                <Link href="/services/inter-villes" className="inline-flex items-center text-white font-bold hover:gap-2 transition-all">
                  Réserver un envoi <ArrowRight className="w-5 h-5 ml-2 text-brand-orange" />
                </Link>
              </BentoCard>
            </motion.div>

            {/* Service 3: Stockage Boomi */}
            <motion.div variants={itemFadeIn}>
              <BentoCard className="h-full flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-brand-light-blue flex items-center justify-center mb-8">
                    <LayoutGrid className="w-7 h-7 text-brand-midnight" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-4 text-brand-midnight">Stockage Boomi Logistics</h3>
                  <p className="text-gray-600 mb-8 max-w-sm">Un espace sur-mesure. E-commerçants ou boutiques virtuelles, manquez-vous d'espace ? De 1 carton à un stock entier, nous stockons, gérons vos inventaires et déclenchons les livraisons à votre signal.</p>
                </div>
                <Link href="/services/stockage" className="inline-flex items-center text-brand-orange font-bold hover:gap-2 transition-all">
                  Voir nos solutions <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </BentoCard>
            </motion.div>

            {/* Service 4: Événementiel */}
            <motion.div variants={itemFadeIn} className="lg:col-span-3">
              <BentoCard className="h-full flex flex-col justify-between bg-brand-orange/5 border border-brand-orange/10">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                  <div className="w-16 h-16 rounded-2xl bg-brand-orange/10 flex items-center justify-center shrink-0">
                    <LayoutGrid className="w-8 h-8 text-brand-orange" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-brand-midnight mb-2">Exposez avec impact.</h3>
                    <p className="text-gray-600 max-w-2xl">Foires, marchés ou lancements de produits. Louez nos stands dépliables premium : ultra-résistants, personnalisables et installés pour vous en un temps record.</p>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-auto">
                    <Link href="/services/location-stands">
                      <MegaButton variant="outline">Louer un stand</MegaButton>
                    </Link>
                  </div>
                </div>
              </BentoCard>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 4. A QUI S'ADRESSE BOOMI */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div {...fadeInUp} className="text-center mb-20">
            <h2 className="text-4xl font-heading font-bold text-brand-midnight mb-6">À qui s'adresse Boomi ?</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div {...fadeInUp} className="p-10 rounded-[2rem] bg-brand-light-gray border border-gray-100">
              <h3 className="text-2xl font-heading font-bold text-brand-midnight mb-6 flex items-center gap-3">
                <span className="w-8 h-1 bg-brand-orange rounded-full" /> Pour les Particuliers
              </h3>
              <ul className="space-y-4">
                {['Envoyez des colis à vos proches', 'Suivi de commande simplifié', 'Paiement à la livraison possible'].map((item, i) => (
                  <li key={i} className="flex gap-3 text-gray-600">
                    <CheckCircle className="w-6 h-6 text-brand-emerald shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div {...fadeInUp} className="p-10 rounded-[2rem] bg-brand-midnight text-white shadow-soft">
              <h3 className="text-2xl font-heading font-bold mb-6 flex items-center gap-3">
                <span className="w-8 h-1 bg-brand-orange rounded-full" /> Pour les Entreprises (B2B)
              </h3>
              <ul className="space-y-4">
                {['Gestion de stock e-commerce', 'Location de stands VIP', 'Tarifs dégressifs pour les professionnels'].map((item, i) => (
                  <li key={i} className="flex gap-3 text-gray-300">
                    <CheckCircle className="w-6 h-6 text-brand-orange shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. TARIFS (Aperçu) */}
      <section id="tarifs" className="py-32 bg-brand-light-gray relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-midnight mb-6">Une tarification claire,<br/>zéro surprise.</h2>
              <p className="text-lg text-gray-600 mb-8 max-w-md">
                Nos tarifs de livraison express sont transparents et s'adaptent à votre localisation.
              </p>
              <Link href="/expedier">
                <MegaButton>Obtenir un devis exact</MegaButton>
              </Link>
            </motion.div>

            <motion.div {...fadeInUp} className="flex flex-col gap-4">
              {[
                { label: 'Cotonou Centre-Ville', price: '500 FCFA' },
                { label: 'Akpakpa, Godomey, Calavi (proche)', price: '1 000 FCFA' },
                { label: 'Périphérie élargie (Ouédo, Togba, Zoca)', price: '1 500 FCFA' },
                { label: 'PK10, Djeffa, Ekpé, Pahou', price: '1 700 FCFA' },
                { label: 'Porto-Novo, Sèmè-Podji', price: '3 500 FCFA' },
              ].map((tarif, i) => (
                <div key={i} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-50 flex items-center justify-between">
                  <div className="text-sm font-medium text-gray-600 mb-1 max-w-[200px] sm:max-w-none">{tarif.label}</div>
                  <div className="text-xl font-heading font-extrabold text-brand-midnight">{tarif.price}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. CTA FINAL */}
      <section className="py-32 bg-brand-orange relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <motion.div {...fadeInUp} className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-heading font-extrabold text-white mb-8">
              Prêt à faire avancer vos projets ?
            </h2>
            <Link href="/expedier">
              <MegaButton variant="secondary" className="text-xl px-10 py-5">
                Expédier mon premier colis
              </MegaButton>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
