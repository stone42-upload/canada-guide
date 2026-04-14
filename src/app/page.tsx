import data from '@/data.json';
import ClientPage from './ClientPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Immigrer au Canada — Guide Complet & Universités Tech 2026',
  description:
    "Votre parcours d'immigration au Canada simplifié. 5 étapes clés, Top 10 universités tech, ressources gratuites et masterclass Python.",
};

export default function HomePage() {
  return <ClientPage data={data} />;
}
