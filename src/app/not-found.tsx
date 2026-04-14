'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { APPLE_EASE, SPRING_POP } from '@/lib/utils';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 pt-28 pb-20 text-center">
      {/* Animated 404 */}
      <motion.div
        className="relative mb-8"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: SPRING_POP }}
      >
        <span className="font-display text-[120px] sm:text-[180px] font-extrabold leading-none tracking-tighter bg-gradient-to-b from-maple to-maple/40 dark:from-maple-dark dark:to-maple-dark/40 bg-clip-text text-transparent select-none">
          404
        </span>
        {/* Glow */}
        <div
          className="absolute inset-0 blur-[80px] bg-maple/20 dark:bg-maple-dark/20 rounded-full -z-10"
          aria-hidden="true"
        />
      </motion.div>

      <motion.h1
        className="font-display text-2xl sm:text-3xl font-bold tracking-tight mb-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: APPLE_EASE, delay: 0.1 }}
      >
        Page introuvable
      </motion.h1>

      <motion.p
        className="text-[#6E6E73] dark:text-[#A1A1A6] max-w-md mb-10 leading-relaxed"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: APPLE_EASE, delay: 0.2 }}
      >
        La page que vous cherchez n&apos;existe pas ou a été déplacée. Revenez à
        l&apos;accueil pour continuer votre parcours.
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row gap-4"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: APPLE_EASE, delay: 0.3 }}
      >
        <Link href="/" className="btn-primary">
          Retour à l&apos;accueil
        </Link>
        <Link href="/#etapes" className="btn-ghost">
          Voir les étapes
        </Link>
      </motion.div>
    </div>
  );
}
