'use client';

import { motion } from 'framer-motion';
import { APPLE_EASE } from '@/lib/utils';
import SectionHeader from '@/components/SectionHeader';
import type { StudentResources } from '@/lib/types';

export default function ResourcesSection({
  resources,
}: {
  resources: StudentResources;
}) {
  return (
    <section id="ressources" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeader
          title="Ressources Étudiantes"
          subtitle="Outils gratuits, certifications reconnues et dépôts GitHub incontournables."
        />

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Free Packs */}
          <motion.div
            className="rounded-[20px] p-8 glass dark:glass-dark shadow-glass"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: APPLE_EASE }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-maple/10 dark:bg-maple-dark/15 flex items-center justify-center text-maple dark:text-maple-dark">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                  <path d="m3.3 7 8.7 5 8.7-5" />
                  <path d="M12 22V12" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-semibold">
                Packs Gratuits
              </h3>
            </div>

            <div className="space-y-4">
              {resources.free_packs.map((pack, i) => (
                <motion.a
                  key={pack.id}
                  href={pack.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-5 rounded-[14px] bg-[#F5F5F7] dark:bg-[rgba(255,255,255,0.04)] border border-[#D2D2D7] dark:border-[#38383A] hover:border-maple/40 dark:hover:border-maple-dark/40 transition-all duration-300 group/card hover:shadow-card"
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    ease: APPLE_EASE,
                    delay: i * 0.08,
                  }}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-display text-base font-semibold mb-1 group-hover/card:text-maple dark:group-hover/card:text-maple-dark transition-colors">
                        {pack.name}
                      </p>
                      <p className="text-sm text-[#6E6E73] dark:text-[#A1A1A6]">
                        {pack.description}
                      </p>
                    </div>
                    <svg
                      className="w-5 h-5 mt-1 text-[#86868B] group-hover/card:text-maple dark:group-hover/card:text-maple-dark shrink-0 transition-all duration-300 group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M7 17L17 7" />
                      <path d="M7 7h10v10" />
                    </svg>
                  </div>
                  <div className="flex gap-2 mt-3">
                    {pack.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] px-2 py-0.5 rounded-full bg-[#E8E8ED] dark:bg-[#38383A] text-[#6E6E73] dark:text-[#A1A1A6] uppercase tracking-wider font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            className="rounded-[20px] p-8 glass dark:glass-dark shadow-glass"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: APPLE_EASE, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-frost/10 dark:bg-frost-dark/15 flex items-center justify-center text-frost dark:text-frost-dark">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="8" r="6" />
                  <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-semibold">
                Certifications
              </h3>
            </div>

            <div className="space-y-4">
              {resources.certifications.map((cert, i) => (
                <motion.a
                  key={cert.id}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-5 rounded-[14px] bg-[#F5F5F7] dark:bg-[rgba(255,255,255,0.04)] border border-[#D2D2D7] dark:border-[#38383A] hover:border-frost/40 dark:hover:border-frost-dark/40 transition-all duration-300 group/card hover:shadow-card"
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    ease: APPLE_EASE,
                    delay: i * 0.08,
                  }}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-display text-base font-semibold mb-1 group-hover/card:text-frost dark:group-hover/card:text-frost-dark transition-colors">
                        {cert.name}
                      </p>
                      <p className="text-xs text-[#86868B] dark:text-[#636366] mb-1">
                        {cert.provider} · {cert.level}
                      </p>
                      <p className="text-sm text-[#6E6E73] dark:text-[#A1A1A6]">
                        {cert.description}
                      </p>
                    </div>
                    <svg
                      className="w-5 h-5 mt-1 text-[#86868B] group-hover/card:text-frost dark:group-hover/card:text-frost-dark shrink-0 transition-all duration-300 group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M7 17L17 7" />
                      <path d="M7 7h10v10" />
                    </svg>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* GitHub Repos — Full width */}
          <motion.div
            className="lg:col-span-2 rounded-[20px] p-8 glass dark:glass-dark shadow-glass"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: APPLE_EASE, delay: 0.15 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#1D1D1F]/8 dark:bg-[#F5F5F7]/10 flex items-center justify-center text-[#1D1D1F] dark:text-[#F5F5F7]">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-semibold">
                Dépôts GitHub Recommandés
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              {resources.recommended_repos.map((repo, i) => (
                <motion.a
                  key={repo.id}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col justify-between p-5 rounded-[14px] bg-[#F5F5F7] dark:bg-[rgba(255,255,255,0.04)] border border-[#D2D2D7] dark:border-[#38383A] hover:border-[#1D1D1F]/30 dark:hover:border-[#F5F5F7]/20 transition-all duration-300 group/repo hover:shadow-card"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    ease: APPLE_EASE,
                    delay: i * 0.06,
                  }}
                >
                  <div>
                    <p className="font-display text-sm font-semibold mb-1 group-hover/repo:text-maple dark:group-hover/repo:text-maple-dark transition-colors">
                      {repo.name}
                    </p>
                    <p className="text-xs text-[#86868B] dark:text-[#636366] mb-2">
                      @{repo.author}
                    </p>
                    <p className="text-sm text-[#6E6E73] dark:text-[#A1A1A6] leading-snug line-clamp-3 mb-4">
                      {repo.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-[#86868B] dark:text-[#636366]">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    {repo.stars}
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
