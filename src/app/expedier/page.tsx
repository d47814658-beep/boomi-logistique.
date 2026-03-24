'use client';

import { motion } from 'framer-motion';
import { Package, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { MegaButton } from '@/components/ui/MegaButton';
import { useState } from 'react';

export default function ExpedierPage() {
  const [step, setStep] = useState(1);

  const fadeInUp: any = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
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
                Expédiez en toute <br/>
                <span className="text-brand-orange">simplicité.</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-md">
                Générez votre bon d'expédition en 2 minutes. Présentez-vous à notre agence, déposez votre colis, et suivez-le jusqu'à sa destination.
              </p>

              <div className="space-y-6">
                {[
                  { title: "Pas de files d'attente", desc: "Remplissez les infos en ligne et passez en priorité à l'agence." },
                  { title: "Estimation immédiate", desc: "Obtenez un prix transparent avant même de vous déplacer." },
                  { title: "Sécurité maximale", desc: "Votre formulaire génère un QR code unique et sécurisé." }
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
            </motion.div>

            {/* RIGHT FORM PANEL */}
            <motion.div 
              {...fadeInUp} 
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-7 bg-white rounded-[2rem] shadow-soft hover:shadow-soft-hover transition-all duration-500 border border-gray-100 p-8 md:p-12"
            >
              {step === 1 ? (
                <form onSubmit={(e) => { e.preventDefault(); setStep(2); }} className="space-y-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-brand-orange text-white flex items-center justify-center font-bold">1</div>
                    <div className="h-1 flex-1 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-brand-orange w-1/2" />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-brand-light-gray text-gray-400 flex items-center justify-center font-bold border border-gray-100">2</div>
                  </div>

                  <h3 className="text-2xl font-heading font-bold text-brand-midnight">Détails de l'expédition</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-brand-midnight flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-gray-400" /> Ville de départ
                      </label>
                      <select className="w-full bg-brand-light-gray border border-gray-200 rounded-xl px-4 py-3 text-brand-midnight focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all">
                        <option>Cotonou</option>
                        <option>Parakou</option>
                        <option>Natitingou</option>
                        <option>Bohicon</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-brand-midnight flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-brand-orange" /> Ville d'arrivée
                      </label>
                      <select className="w-full bg-brand-light-gray border border-gray-200 rounded-xl px-4 py-3 text-brand-midnight focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all">
                        <option>Parakou</option>
                        <option>Natitingou</option>
                        <option>Cotonou</option>
                        <option>Bohicon</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-brand-midnight flex items-center gap-2">
                        <Package className="w-4 h-4 text-gray-400" /> Type de colis
                      </label>
                      <select className="w-full bg-brand-light-gray border border-gray-200 rounded-xl px-4 py-3 text-brand-midnight focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all">
                        <option>Documents (0-2kg)</option>
                        <option>Colis standard (2-10kg)</option>
                        <option>Carton / Bagage (10-30kg)</option>
                        <option>Matériel fragile</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-brand-midnight flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-gray-400" /> Date de dépôt prévue
                      </label>
                      <input type="date" className="w-full bg-brand-light-gray border border-gray-200 rounded-xl px-4 py-3 text-brand-midnight focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all" />
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-500 font-medium pb-1">Estimation provisoire</div>
                      <div className="text-2xl font-heading font-extrabold text-brand-midnight">À partir de 1.500F</div>
                    </div>
                    <MegaButton type="submit" variant="primary" className="py-3 px-6">
                      Continuer
                    </MegaButton>
                  </div>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-8 text-center py-10"
                >
                  <div className="w-20 h-20 rounded-full bg-brand-emerald/10 border-4 border-brand-emerald/20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-brand-emerald" />
                  </div>
                  <h3 className="text-3xl font-heading font-bold text-brand-midnight mb-2">Simulateur réussi !</h3>
                  <p className="text-gray-600 max-w-sm mx-auto mb-8">
                    Dans l'application finale, cette étape collecterait vos informations personnelles et générerait le QR Code d'expédition.
                  </p>
                  <button 
                    onClick={() => setStep(1)} 
                    className="text-brand-orange font-bold hover:underline"
                  >
                    Retour à la simulation
                  </button>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
