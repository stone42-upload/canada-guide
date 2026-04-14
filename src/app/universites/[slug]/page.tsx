import data from '@/data.json';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { slugify } from '@/lib/utils';
import UniversityPageClient from './UniversityPageClient';

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return data.universities_ranking.map((uni) => ({
    slug: slugify(uni.name),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const uni = data.universities_ranking.find((u) => slugify(u.name) === slug);
  if (!uni) return {};

  return {
    title: `${uni.name} — #${uni.rank} au Canada`,
    description: uni.excellence_statement,
    openGraph: {
      title: `${uni.name} — Classement #${uni.rank} | CanadaGuide`,
      description: uni.excellence_statement,
      locale: 'fr_CA',
      type: 'article',
    },
  };
}

export default async function UniversityPage({ params }: Props) {
  const { slug } = await params;
  const uni = data.universities_ranking.find((u) => slugify(u.name) === slug);
  if (!uni) notFound();

  const idx = data.universities_ranking.findIndex((u) => u.rank === uni.rank);
  const prevUni = idx > 0 ? data.universities_ranking[idx - 1] : null;
  const nextUni =
    idx < data.universities_ranking.length - 1
      ? data.universities_ranking[idx + 1]
      : null;

  return <UniversityPageClient uni={uni} prevUni={prevUni} nextUni={nextUni} />;
}
