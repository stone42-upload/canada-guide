import data from '@/data.json';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import StepPageClient from './StepPageClient';

interface Props {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return data.immigration_steps.map((step) => ({
    id: String(step.order),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const step = data.immigration_steps.find((s) => String(s.order) === id);
  if (!step) return {};

  return {
    title: `${step.title} — Étape ${step.order}`,
    description: step.description,
    openGraph: {
      title: `${step.title} — Étape ${step.order} | CanadaGuide`,
      description: step.description,
      locale: 'fr_CA',
      type: 'article',
    },
  };
}

export default async function StepPage({ params }: Props) {
  const { id } = await params;
  const step = data.immigration_steps.find((s) => String(s.order) === id);
  if (!step) notFound();

  const totalSteps = data.immigration_steps.length;
  const prevStep =
    data.immigration_steps.find((s) => s.order === step.order - 1) ?? null;
  const nextStep =
    data.immigration_steps.find((s) => s.order === step.order + 1) ?? null;

  return (
    <StepPageClient
      step={step}
      totalSteps={totalSteps}
      prevStep={prevStep}
      nextStep={nextStep}
    />
  );
}
