import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Livraison Inter-Villes',
  description: 'Transport express sécurisé et fiable au Bénin (Cotonou, Parakou, Natitingou). Confiez vos colis (documents, marchandises) à Boomi.',
};

export default function InterVillesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
