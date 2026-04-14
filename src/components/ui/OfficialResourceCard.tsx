'use client';

import { motion } from 'framer-motion';
import { APPLE_EASE } from '@/lib/utils';

export interface OfficialLink {
  title: string;
  description: string;
  url_en: string;
  url_fr?: string;
}

interface OfficialResourceCardProps {
  link: OfficialLink;
  index: number;
}

export function OfficialResourceCard({
  link,
  index,
}: OfficialResourceCardProps) {
  return (
    <motion.div
      className="group relative rounded-[20px] p-6 sm:p-7 official-card overflow-hidden"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, ease: APPLE_EASE, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Glow on hover */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            'radial-gradient(ellipse at 50% 0%, rgba(191,54,54,0.1) 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />

      {/* Government badge */}
      <div className="flex items-center gap-2 mb-4 relative">
        <div className="w-8 h-8 rounded-lg bg-maple/10 dark:bg-maple-dark/15 flex items-center justify-center">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-maple dark:text-maple-dark"
            aria-hidden="true"
          >
            <path d="M2 20h20" />
            <path d="M5 20V8l7-5 7 5v12" />
            <path d="M9 20v-4h6v4" />
            <path d="M9 12h.01M15 12h.01" />
          </svg>
        </div>
        <span className="text-[10px] px-2 py-0.5 rounded-full bg-maple/10 dark:bg-maple-dark/15 text-maple dark:text-maple-dark uppercase tracking-wider font-semibold">
          IRCC officiel
        </span>
      </div>

      {/* Title */}
      <h4 className="font-display text-base sm:text-lg font-semibold mb-2 leading-snug relative group-hover:text-maple dark:group-hover:text-maple-dark transition-colors duration-300">
        {link.title}
      </h4>

      {/* Description */}
      <p className="text-sm text-[#6E6E73] dark:text-[#A1A1A6] leading-relaxed mb-5 relative">
        {link.description}
      </p>

      {/* Links */}
      <div className="flex flex-wrap gap-3 relative">
        <a
          href={link.url_en}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary-sm group/btn"
        >
          <span>Accéder au guide</span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
            aria-hidden="true"
          >
            <path d="M7 17L17 7" />
            <path d="M7 7h10v10" />
          </svg>
        </a>
        {link.url_fr && (
          <a
            href={link.url_fr}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost-sm group/btn"
          >
            <span>Version française</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
              aria-hidden="true"
            >
              <path d="M7 17L17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </a>
        )}
      </div>
    </motion.div>
  );
}

interface OfficialResourcesSectionProps {
  title?: string;
  links: OfficialLink[];
}

export default function OfficialResourcesSection({
  title = 'Ressources officielles — Gouvernement du Canada',
  links,
}: OfficialResourcesSectionProps) {
  return (
    <section className="mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: APPLE_EASE }}
        className="mb-10"
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-maple/10 dark:bg-maple-dark/15 flex items-center justify-center">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-maple dark:text-maple-dark"
              aria-hidden="true"
            >
              <path d="M2 20h20" strokeLinecap="round" />
              <path
                d="M5 20V8l7-5 7 5v12"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 20v-4h6v4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight">
            {title}
          </h3>
        </div>
        <p className="text-[#6E6E73] dark:text-[#A1A1A6] ml-[52px]">
          Liens directs vers les pages officielles d&apos;Immigration, Réfugiés
          et Citoyenneté Canada (IRCC).
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {links.map((link, i) => (
          <OfficialResourceCard key={i} link={link} index={i} />
        ))}
      </div>

      {/* Disclaimer */}
      <motion.p
        className="mt-8 text-xs text-[#86868B] dark:text-[#636366] text-center leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Ces liens redirigent vers les sites officiels d&apos;IRCC. Vérifiez
        toujours les informations les plus récentes directement sur{' '}
        <a
          href="https://www.canada.ca"
          target="_blank"
          rel="noopener noreferrer"
          className="text-maple dark:text-maple-dark hover:underline"
        >
          canada.ca
        </a>
        .
      </motion.p>
    </section>
  );
}
