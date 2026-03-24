import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Expédier un Colis',
  description: 'Simulez et réservez votre expédition Cotonou-Parakou ou vers tout le Bénin. Obtenez une estimation de coût et planifiez votre livraison en 2 minutes.',
};

export default function ExpedierLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
