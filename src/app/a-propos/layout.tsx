import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'À Propos',
  description: 'Découvrez l\'histoire de Boomi Logistique, nos valeurs et notre vision pour simplifier la logistique B2B et B2C au Bénin.',
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
