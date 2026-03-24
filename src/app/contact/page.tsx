'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ChevronDown, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { MegaButton } from '@/components/ui/MegaButton';

const faqs = [
  {
    q: "Combien de temps prend une expédition Cotonou - Parakou ?",
    a: "En moyenne, notre service express garantit une livraison en moins de 24h ouvrées pour les trajets majeurs comme Cotonou - Parakou, sous réserve des conditions routières."
  },
  {
    q: "Quelles sont les dimensions maximales pour un colis ?",
    a: "Nous acceptons les colis standards jusqu'à 30kg. Pour l'envoi de matériel très volumineux (meubles, machines), veuillez nous contacter pour un devis sur-mesure."
  },
  {
    q: "Mon colis est-il assuré ?",
    a: "Oui, tous les envois opérés par Boomi Logistique bénéficient d'une assurance standard couvrant la déclaré valeur en cas de force majeure ou d'accident."
  },
  {
    q: "Comment fonctionne la location de stand événementiel ?",
    a: "Vous choisissez la taille du stand, nous nous chargeons de la livraison sur le lieu de l'événement, du montage avant l'ouverture, et du démontage à la fin. Un service 100% clé en main."
  }
];

export default function ContactPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const fadeInUp: any = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <>
      <section className="relative min-h-[50vh] flex items-center pt-32 pb-20 overflow-hidden bg-brand-light-gray text-center">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-heading font-extrabold text-brand-midnight leading-tight tracking-tight mb-6"
          >
            Toujours prêts à <span className="text-brand-orange">vous répondre.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Besoin d'un devis ou d'une question sur un trajet Cotonou-Natitingou ? Notre équipe est là.
          </motion.p>
        </div>
      </section>

      {/* CONTACT & FAQ */}
      <section id="contact" className="py-20 bg-white relative">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Formulaire & Info */}
            <motion.div {...fadeInUp} className="lg:col-span-5 space-y-12">
              <div>
                <h2 className="text-3xl font-heading font-bold text-brand-midnight mb-8">Informations de Contact</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-6 bg-brand-light-gray rounded-3xl">
                    <MapPin className="w-6 h-6 text-brand-orange mt-1" />
                    <div>
                      <h4 className="font-bold text-brand-midnight mb-1">Siège Principal</h4>
                      <p className="text-gray-600">Agla, Vons de la Pharmacie Luli Luli,<br />Cotonou</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-6 bg-brand-light-gray rounded-3xl">
                    <Phone className="w-6 h-6 text-brand-orange shrink-0" />
                    <div>
                      <h4 className="font-bold text-brand-midnight mb-1">Téléphone & WhatsApp</h4>
                      <div className="flex flex-col">
                        <a href="tel:+2290151505942" className="text-brand-orange hover:underline font-medium">Tél: +229 01 51 50 59 42</a>
                        <a href="https://wa.me/22951505942" target="_blank" rel="noopener noreferrer" className="text-brand-orange hover:underline font-medium">WhatsApp: +229 51 50 59 42</a>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-6 bg-brand-light-gray rounded-3xl">
                    <Mail className="w-6 h-6 text-brand-orange" />
                    <div>
                      <h4 className="font-bold text-brand-midnight mb-1">Email</h4>
                      <a href="mailto:boomi.africa@gmail.com" className="text-brand-orange hover:underline font-medium">boomi.africa@gmail.com</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-brand-midnight text-white rounded-[2rem] shadow-soft">
                <h3 className="text-2xl font-heading font-bold mb-6">Envoyez-nous un message</h3>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Nom complet</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-orange transition-colors" placeholder="Jean Dupont" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email ou Téléphone</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-orange transition-colors" placeholder="+229 00000000" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                    <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-orange transition-colors" placeholder="Comment pouvons-nous aider ?"></textarea>
                  </div>
                  <MegaButton variant="primary" fullWidth className="mt-4">
                    Envoyer le message
                  </MegaButton>
                </form>
              </div>
            </motion.div>

            {/* FAQ Accordion */}
            <motion.div {...fadeInUp} id="faq" className="lg:col-span-7 lg:pl-10 lg:border-l border-gray-100">
              <h2 className="text-4xl font-heading font-bold text-brand-midnight mb-10">Questions Fréquentes</h2>
              
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div 
                    key={index} 
                    className={cn(
                      "border border-gray-100 rounded-[1.5rem] overflow-hidden transition-all duration-300",
                      openFaqIndex === index ? "bg-white shadow-soft border-brand-orange/20" : "bg-brand-light-gray"
                    )}
                  >
                    <button
                      onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                      className="w-full text-left px-8 py-6 flex items-center justify-between focus:outline-none"
                    >
                      <span className="text-lg font-bold text-brand-midnight pr-8">{faq.q}</span>
                      <ChevronDown 
                        className={cn(
                          "w-6 h-6 text-brand-orange transition-transform duration-300 shrink-0",
                          openFaqIndex === index ? "rotate-180" : "rotate-0"
                        )} 
                      />
                    </button>
                    {openFaqIndex === index && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="px-8 pb-6 text-gray-600 leading-relaxed"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-12 p-8 bg-brand-light-blue rounded-[2rem] text-center border border-blue-50">
                <h4 className="text-xl font-heading font-bold text-brand-midnight mb-2">Vous ne trouvez pas la réponse ?</h4>
                <p className="text-gray-600 mb-6">Contactez notre support client sur WhatsApp.</p>
                <a href="https://wa.me/22951505942" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-bold text-brand-orange hover:gap-3 transition-all">
                  Ouvrir WhatsApp <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}
