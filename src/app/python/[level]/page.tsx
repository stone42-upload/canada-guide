import data from '@/data.json';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import PythonPageClient from './PythonPageClient';

const SLUG_MAP: Record<string, string> = {
  beginner: 'py_beginner',
  data_science: 'py_data_science',
  automation: 'py_automation',
};

interface Props {
  params: Promise<{ level: string }>;
}

export function generateStaticParams() {
  return Object.keys(SLUG_MAP).map((level) => ({ level }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { level } = await params;
  const modId = SLUG_MAP[level];
  const mod = data.python_masterclass.modules.find((m) => m.id === modId);
  if (!mod) return {};

  return {
    title: `${mod.title} — Python Masterclass`,
    description: mod.objective,
    openGraph: {
      title: `${mod.title} | CanadaGuide Python Masterclass`,
      description: mod.objective,
      locale: 'fr_CA',
      type: 'article',
    },
  };
}

export default async function PythonLevelPage({ params }: Props) {
  const { level } = await params;
  const modId = SLUG_MAP[level];
  if (!modId) notFound();

  const mod = data.python_masterclass.modules.find((m) => m.id === modId);
  if (!mod) notFound();

  const idx = data.python_masterclass.modules.findIndex((m) => m.id === modId);
  const prevMod = idx > 0 ? data.python_masterclass.modules[idx - 1] : null;
  const nextMod =
    idx < data.python_masterclass.modules.length - 1
      ? data.python_masterclass.modules[idx + 1]
      : null;

  // Resolve slug for prev/next
  const ID_TO_SLUG: Record<string, string> = {
    py_beginner: 'beginner',
    py_data_science: 'data_science',
    py_automation: 'automation',
  };

  return (
    <PythonPageClient
      mod={mod}
      prevMod={prevMod}
      nextMod={nextMod}
      idToSlug={ID_TO_SLUG}
    />
  );
}
