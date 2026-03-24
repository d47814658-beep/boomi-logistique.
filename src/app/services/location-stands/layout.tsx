import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Location de Stands',
  description: 'Louez des stands premium pour vos foires et expositions au Bénin. Notre service clé en main gère la logistique, le montage et le démontage de vos chapiteaux.',
};

export default function LocationStandsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
