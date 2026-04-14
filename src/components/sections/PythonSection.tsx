'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { APPLE_EASE } from '@/lib/utils';
import SectionHeader from '@/components/SectionHeader';
import type { PythonMasterclass } from '@/lib/types';

const LEVEL_STYLES: Record<string, string> = {
  Débutant:
    'bg-success/10 text-success dark:bg-success-dark/15 dark:text-success-dark',
  Intermédiaire:
    'bg-warning/10 text-warning dark:bg-warning-dark/15 dark:text-warning-dark',
  Avancé: 'bg-maple/10 text-maple dark:bg-maple-dark/15 dark:text-maple-dark',
};

const LEVEL_SLUGS: Record<string, string> = {
  Débutant: 'beginner',
  Intermédiaire: 'data_science',
  Avancé: 'automation',
};

export default function PythonSection({
  masterclass,
}: {
  masterclass: PythonMasterclass;
}) {
  return (
    <section
      id="python"
      className="scroll-mt-20 py-24 bg-[#F5F5F7] dark:bg-[#1C1C1E]"
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeader
          title="Python Masterclass"
          subtitle={masterclass.intro}
        />

        {/* Bento: first module spans 2 cols */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {masterclass.modules.map((mod, i) => {
            const isWide = i === 0;
            return (
              <motion.div
                key={mod.id}
                className={isWide ? 'lg:col-span-2' : ''}
                initial={{ opacity: 0, y: 28, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.7,
                  ease: APPLE_EASE,
                  delay: i * 0.12,
                }}
              >
                <Link
                  href={`/python/${LEVEL_SLUGS[mod.level] || mod.id.replace('py_', '')}`}
                  className="group block h-full rounded-[20px] p-8 glass dark:glass-dark shadow-glass hover-lift"
                >
                  {/* Level + Duration */}
                  <div className="flex items-center justify-between mb-5">
                    <span
                      className={`inline-flex px-3 py-1 rounded-full text-xs font-medium uppercase tracking-[0.06em] ${LEVEL_STYLES[mod.level] ?? ''}`}
                    >
                      {mod.level}
                    </span>
                    <span className="text-xs text-[#86868B] dark:text-[#636366] font-medium">
                      {mod.duration_hours}h
                    </span>
                  </div>

                  {/* Title + Objective */}
                  <h3 className="font-display text-xl font-semibold mb-2 leading-snug">
                    {mod.title}
                  </h3>
                  <p className="text-sm text-[#6E6E73] dark:text-[#A1A1A6] mb-5">
                    {mod.objective}
                  </p>

                  {/* Topics */}
                  <div className="mb-6">
                    <p className="text-xs text-[#86868B] dark:text-[#636366] uppercase tracking-wider font-medium mb-3">
                      Programme
                    </p>
                    <ul className="space-y-2">
                      {mod.topics.map((topic, ti) => (
                        <motion.li
                          key={ti}
                          className="flex items-start gap-2.5 text-sm"
                          initial={{ opacity: 0, x: -12 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.4,
                            ease: APPLE_EASE,
                            delay: i * 0.12 + ti * 0.05 + 0.3,
                          }}
                        >
                          <span
                            className="mt-1.5 w-1.5 h-1.5 rounded-full bg-maple dark:bg-maple-dark shrink-0"
                            aria-hidden="true"
                          />
                          {topic}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-maple dark:text-maple-dark group-hover:gap-2.5 transition-all duration-300">
                    Explorer le parcours complet
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
