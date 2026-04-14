'use client';

import { motion } from 'framer-motion';
import { APPLE_EASE } from '@/lib/utils';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  badge?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  badge,
}: SectionHeaderProps) {
  return (
    <motion.div
      className="text-center max-w-[680px] mx-auto mb-16"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: APPLE_EASE }}
    >
      {badge && (
        <p className="inline-block mb-5 px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-[0.08em] bg-maple/10 text-maple dark:bg-maple-dark/15 dark:text-maple-dark">
          {badge}
        </p>
      )}
      <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-4">
        {title}
      </h2>
      <p className="text-lg text-[#6E6E73] dark:text-[#A1A1A6] leading-relaxed">
        {subtitle}
      </p>
    </motion.div>
  );
}
