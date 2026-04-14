'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { APPLE_EASE } from '@/lib/utils';
import { STEP_ICONS } from '@/lib/icons';
import type { Step } from '@/lib/types';

export default function HeroSection({ steps }: { steps: Step[] }) {
  return (
    <section id="hero" className="relative overflow-hidden pt-32 pb-8">
      {/* Animated mesh gradient background */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="absolute top-[-30%] left-[-10%] w-[70vw] h-[70vw] max-w-[900px] max-h-[900px] rounded-full opacity-25 dark:opacity-15 blur-[120px] animate-mesh-1"
          style={{
            background:
              'radial-gradient(circle, rgba(191,54,54,0.5) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute top-[-10%] right-[-15%] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] rounded-full opacity-20 dark:opacity-10 blur-[100px] animate-mesh-2"
          style={{
            background:
              'radial-gradient(circle, rgba(0,113,227,0.4) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute bottom-[-20%] left-[30%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] rounded-full opacity-20 dark:opacity-10 blur-[100px] animate-mesh-3"
          style={{
            background:
              'radial-gradient(circle, rgba(191,54,54,0.3) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1200px] px-6">
        {/* Headline */}
        <motion.div
          className="text-center max-w-[780px] mx-auto mb-24"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: APPLE_EASE }}
        >
          <motion.p
            className="inline-block mb-6 px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-[0.08em] bg-maple/10 text-maple dark:bg-maple-dark/15 dark:text-maple-dark"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: APPLE_EASE, delay: 0.2 }}
          >
            Guide 2026
          </motion.p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-[5.5rem] font-extrabold tracking-tight mb-6 leading-[1.02]">
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: APPLE_EASE, delay: 0.3 }}
            >
              Votre avenir
            </motion.span>
            <motion.span
              className="block text-gradient-maple"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: APPLE_EASE, delay: 0.5 }}
            >
              commence ici.
            </motion.span>
          </h1>
          <motion.p
            className="text-lg sm:text-xl text-[#6E6E73] dark:text-[#A1A1A6] max-w-[560px] mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: APPLE_EASE, delay: 0.7 }}
          >
            Cinq étapes. Un seul objectif. Immigrer au Canada avec clarté, sans
            stress et avec les meilleures ressources.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: APPLE_EASE, delay: 0.9 }}
          >
            <a href="#etapes" className="btn-primary">
              Commencer le parcours
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </a>
            <a href="#universites" className="btn-ghost">
              Explorer les universités
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="flex justify-center mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <motion.div
            className="w-6 h-10 rounded-full border-2 border-[#D2D2D7] dark:border-[#48484A] flex justify-center pt-2"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <motion.div className="w-1 h-2 rounded-full bg-maple dark:bg-maple-dark" />
          </motion.div>
        </motion.div>

        {/* Steps */}
        <div
          id="etapes"
          className="scroll-mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 pb-12"
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 28, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, ease: APPLE_EASE, delay: i * 0.1 }}
            >
              <Link
                href={`/etapes/${step.order}`}
                className="group relative flex flex-col items-center text-center p-7 rounded-[20px] bg-white dark:bg-[rgba(28,28,30,0.72)] border border-[#D2D2D7] dark:border-[rgba(255,255,255,0.08)] shadow-card dark:shadow-card-dark hover-lift dark:backdrop-blur-[24px] dark:backdrop-saturate-[1.8] h-full block"
              >
                {/* Glow on hover */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      'radial-gradient(ellipse at 50% 0%, rgba(191,54,54,0.08) 0%, transparent 60%)',
                  }}
                  aria-hidden="true"
                />

                {/* Step number badge */}
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-maple text-white text-sm font-semibold shadow-badge mb-4 dark:bg-maple-dark">
                  {String(step.order).padStart(2, '0')}
                </div>

                {/* Icon */}
                <div className="text-maple dark:text-maple-dark mb-3">
                  {STEP_ICONS[step.icon] ?? null}
                </div>

                {/* Text */}
                <h3 className="font-display text-base font-semibold mb-2 leading-snug">
                  {step.title}
                </h3>
                <p className="text-sm text-[#6E6E73] dark:text-[#A1A1A6] leading-relaxed mb-4">
                  {step.description}
                </p>

                {/* CTA */}
                <span className="mt-auto inline-flex items-center gap-1.5 text-xs font-medium text-maple dark:text-maple-dark group-hover:gap-2.5 transition-all duration-300">
                  Voir en détail
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
          ))}
        </div>
      </div>
    </section>
  );
}
