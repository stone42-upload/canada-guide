'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { APPLE_EASE, SPRING_POP, slugify } from '@/lib/utils';
import { AnimatedScore } from '@/components/AnimatedScore';
import SectionHeader from '@/components/SectionHeader';
import type { University } from '@/lib/types';
import {
  UNIVERSITY_DETAILS,
  formatCAD,
  formatFCFA,
} from '@/lib/university-details';

export default function UniversitiesSection({
  universities,
}: {
  universities: University[];
}) {
  return (
    <section
      id="universites"
      className="scroll-mt-20 py-24 bg-[#F5F5F7] dark:bg-[#1C1C1E]"
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeader
          title="Classement Universités"
          subtitle="Les dix meilleures institutions canadiennes en technologie, intelligence artificielle et robotique."
        />

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {universities.map((uni, i) => {
            const scoreParsed = parseInt(uni.score_global_pct, 10);
            const slug = slugify(uni.name);
            return (
              <motion.div
                key={uni.rank}
                initial={{ opacity: 0, y: 32, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{
                  duration: 0.7,
                  ease: APPLE_EASE,
                  delay: i * 0.06,
                }}
              >
                <Link
                  href={`/universites/${slug}`}
                  className="group relative overflow-hidden rounded-[20px] p-8 bg-white dark:bg-[rgba(28,28,30,0.72)] border border-[#D2D2D7] dark:border-[rgba(255,255,255,0.08)] shadow-card dark:shadow-card-dark hover-lift dark:backdrop-blur-[24px] dark:backdrop-saturate-[1.8] block h-full"
                >
                  {/* Glow overlay */}
                  <div
                    className="pointer-events-none absolute inset-0 rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background:
                        'radial-gradient(ellipse at 30% 0%, rgba(191,54,54,0.08) 0%, transparent 60%)',
                    }}
                    aria-hidden="true"
                  />

                  {/* Rank + Province */}
                  <div className="flex items-center justify-between mb-5 relative">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-maple text-white text-sm font-semibold shadow-badge dark:bg-maple-dark">
                      {String(uni.rank).padStart(2, '0')}
                    </div>
                    <span className="px-3.5 py-1.5 rounded-full bg-maple/10 dark:bg-maple-dark/15 text-maple dark:text-maple-dark text-xs font-medium uppercase tracking-[0.06em]">
                      {uni.province}
                    </span>
                  </div>

                  {/* Score counter */}
                  <div className="mb-2 relative">
                    <AnimatedScore
                      target={scoreParsed}
                      delay={i * 0.06 + 0.3}
                    />
                  </div>

                  {/* Divider */}
                  <div
                    className="h-px bg-[#D2D2D7] dark:bg-[#38383A] my-5"
                    aria-hidden="true"
                  />

                  {/* Name */}
                  <h3 className="font-display text-xl font-semibold mb-3 relative leading-snug">
                    {uni.name}
                  </h3>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 mb-4 relative">
                    {uni.is_top_robotics && (
                      <motion.span
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-maple/10 dark:bg-maple-dark/15 text-maple dark:text-maple-dark text-xs font-medium uppercase tracking-[0.06em]"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.4,
                          ease: SPRING_POP,
                          delay: i * 0.06 + 0.8,
                        }}
                      >
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
                          <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1.27A7 7 0 0 1 14 22h-4a7 7 0 0 1-6.73-3H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73A2 2 0 0 1 12 2z" />
                        </svg>
                        Robotique
                      </motion.span>
                    )}
                    {uni.is_top_engineering && (
                      <motion.span
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-frost/10 dark:bg-frost-dark/15 text-frost dark:text-frost-dark text-xs font-medium uppercase tracking-[0.06em]"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.4,
                          ease: SPRING_POP,
                          delay: i * 0.06 + 0.9,
                        }}
                      >
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
                          <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
                        </svg>
                        Ingénierie
                      </motion.span>
                    )}
                  </div>

                  {/* Excellence statement */}
                  <p className="text-sm text-[#6E6E73] dark:text-[#A1A1A6] leading-relaxed line-clamp-3 relative mb-4">
                    {uni.excellence_statement}
                  </p>

                  {/* Tuition preview */}
                  {UNIVERSITY_DETAILS[uni.rank]?.tuition?.[0] && (
                    <div className="mb-4 p-3 rounded-[12px] bg-[#F5F5F7] dark:bg-[#2C2C2E] border border-[#E8E8ED] dark:border-[#3A3A3C] relative">
                      <p className="text-[10px] uppercase tracking-wider text-[#86868B] dark:text-[#636366] font-semibold mb-1">
                        Frais CS / an (international)
                      </p>
                      <div className="flex items-baseline gap-2">
                        <span className="font-display text-base font-bold text-maple dark:text-maple-dark">
                          {formatCAD(
                            UNIVERSITY_DETAILS[uni.rank].tuition[0].cad_per_year
                          )}
                        </span>
                        <span className="text-xs text-[#86868B] dark:text-[#636366]">
                          ≈{' '}
                          {formatFCFA(
                            UNIVERSITY_DETAILS[uni.rank].tuition[0]
                              .fcfa_per_year
                          )}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* CTA */}
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-maple dark:text-maple-dark group-hover:gap-2.5 transition-all duration-300">
                    Découvrir le profil complet
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
