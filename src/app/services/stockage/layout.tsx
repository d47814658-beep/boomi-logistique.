import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Stockage & Entreposage',
  description: 'Entreposage sécurisé et gestion de stock flexible à Cotonou. Louez un espace adapté à vos besoins B2B avec Boomi Logistique.',
};

export default function StockageLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
