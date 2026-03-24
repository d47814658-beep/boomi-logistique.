import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Besoin d\'un devis ou d\'une expédition express ? Contactez Boomi Logistique. Notre support (WhatsApp et Téléphone) est ouvert 7j/7 de 8h à 18h.',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
