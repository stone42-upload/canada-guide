'use client';

import HeroSection from '@/components/sections/HeroSection';
import UniversitiesSection from '@/components/sections/UniversitiesSection';
import ResourcesSection from '@/components/sections/ResourcesSection';
import PythonSection from '@/components/sections/PythonSection';
import type { SiteData } from '@/lib/types';

export default function ClientPage({ data }: { data: SiteData }) {
  const {
    immigration_steps,
    universities_ranking,
    student_resources,
    python_masterclass,
  } = data;

  return (
    <>
      <HeroSection steps={immigration_steps} />
      <UniversitiesSection universities={universities_ranking} />
      <ResourcesSection resources={student_resources} />
      <PythonSection masterclass={python_masterclass} />
    </>
  );
}
