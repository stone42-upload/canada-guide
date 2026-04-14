'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import { APPLE_EASE } from '@/lib/utils';
import type { PythonModule } from '@/lib/types';

const LEVEL_STYLES: Record<string, string> = {
  Débutant:
    'bg-success/10 text-success dark:bg-success-dark/15 dark:text-success-dark',
  Intermédiaire:
    'bg-warning/10 text-warning dark:bg-warning-dark/15 dark:text-warning-dark',
  Avancé: 'bg-maple/10 text-maple dark:bg-maple-dark/15 dark:text-maple-dark',
};

const LEVEL_DESCRIPTIONS: Record<
  string,
  {
    heroText: string;
    whyLearn: string;
    projectIdeas: string[];
  }
> = {
  Débutant: {
    heroText:
      'Maîtrisez les fondations de Python — le langage le plus demandé en 2026. De la syntaxe de base à la programmation orientée objet, construisez des bases solides pour votre carrière tech.',
    whyLearn:
      "Python est le langage #1 pour l'IA, la data science, l'automatisation et le web. Sa syntaxe simple et sa communauté massive en font le meilleur choix pour débuter en programmation. Les salaires moyens pour un développeur Python au Canada dépassent 85 000 $ CAD.",
    projectIdeas: [
      'Calculatrice de score CRS (immigration)',
      'Gestionnaire de tâches en ligne de commande',
      'Analyseur de fichiers CSV avec statistiques',
      'Jeu de devinettes avec système de score',
      'Convertisseur de devises avec API',
    ],
  },
  Intermédiaire: {
    heroText:
      'Plongez dans la data science avec Python. Apprenez à analyser, visualiser et modéliser des données réelles avec les outils que les entreprises utilisent au quotidien.',
    whyLearn:
      "La data science est l'un des domaines les plus recherchés et les mieux payés au Canada. Avec pandas, scikit-learn et matplotlib, vous pourrez transformer des données brutes en insights actionnables. Les data scientists canadiens gagnent en moyenne 95 000-130 000 $ CAD.",
    projectIdeas: [
      "Analyse exploratoire d'un dataset Kaggle",
      'Dashboard de visualisation avec Streamlit',
      'Modèle de prédiction de prix immobilier',
      'Analyse de sentiments sur les avis Google',
      "Clustering de profils d'immigration",
    ],
  },
  Avancé: {
    heroText:
      "Automatisez tout. Du web scraping à l'orchestration de workflows, maîtrisez les techniques qui font de vous un développeur 10x plus productif.",
    whyLearn:
      "L'automatisation est un superpouvoir. Les entreprises canadiennes investissent massivement dans l'automatisation des processus. Que ce soit pour le scraping de données, l'intégration d'APIs ou la création d'outils CLI, ces compétences sont extrêmement valorisées.",
    projectIdeas: [
      'Bot de veille immigration (scrape IRCC)',
      'Pipeline de données automatisé avec Airflow',
      'CLI de gestion de projets avec Typer',
      "Automatisation d'envoi d'emails personnalisés",
      "Scraper de bourses d'études canadiennes",
    ],
  },
};

interface PythonPageClientProps {
  mod: PythonModule;
  prevMod: PythonModule | null;
  nextMod: PythonModule | null;
  idToSlug: Record<string, string>;
}

export default function PythonPageClient({
  mod,
  prevMod,
  nextMod,
  idToSlug,
}: PythonPageClientProps) {
  const details = LEVEL_DESCRIPTIONS[mod.level];

  return (
    <div className="pt-28 pb-20">
      <div className="mx-auto max-w-[900px] px-6">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: 'Accueil', href: '/' },
            { label: 'Python', href: '/#python' },
            { label: mod.title },
          ]}
        />

        {/* Hero */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: APPLE_EASE }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span
              className={`px-4 py-1.5 rounded-full text-sm font-medium uppercase tracking-wide ${LEVEL_STYLES[mod.level] ?? ''}`}
            >
              {mod.level}
            </span>
            <span className="text-sm text-[#86868B] dark:text-[#636366] font-medium">
              {mod.duration_hours} heures
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 leading-[1.05]">
            {mod.title}
          </h1>
          <p className="text-lg text-[#6E6E73] dark:text-[#A1A1A6] leading-relaxed max-w-[700px]">
            {details?.heroText ?? mod.objective}
          </p>
        </motion.div>

        {/* Objective */}
        <motion.div
          className="mb-12 rounded-[20px] p-8 glass dark:glass-dark shadow-glass"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: APPLE_EASE }}
        >
          <h2 className="font-display text-xl font-bold mb-3">
            Objectif du parcours
          </h2>
          <p className="text-[#6E6E73] dark:text-[#A1A1A6] leading-relaxed">
            {mod.objective}
          </p>
        </motion.div>

        {/* Why Learn */}
        {details?.whyLearn && (
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: APPLE_EASE }}
          >
            <h2 className="font-display text-2xl font-bold mb-4 tracking-tight">
              Pourquoi ce parcours ?
            </h2>
            <p className="text-[#6E6E73] dark:text-[#A1A1A6] leading-relaxed">
              {details.whyLearn}
            </p>
          </motion.div>
        )}

        {/* Topics — Full program */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: APPLE_EASE }}
        >
          <h2 className="font-display text-2xl font-bold mb-6 tracking-tight">
            Programme complet
          </h2>
          <div className="space-y-3">
            {mod.topics.map((topic, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-4 p-4 rounded-[14px] bg-[#F5F5F7] dark:bg-[#1C1C1E] border border-[#D2D2D7] dark:border-[#38383A]"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  ease: APPLE_EASE,
                  delay: i * 0.06,
                }}
              >
                <div className="w-8 h-8 rounded-lg bg-maple/10 dark:bg-maple-dark/15 flex items-center justify-center text-maple dark:text-maple-dark text-xs font-bold shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <p className="text-sm font-medium">{topic}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Project Ideas */}
        {details?.projectIdeas && (
          <motion.div
            className="mb-12 rounded-[20px] p-8 bg-maple/5 dark:bg-maple-dark/10 border border-maple/10 dark:border-maple-dark/20"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: APPLE_EASE }}
          >
            <h2 className="font-display text-xl font-bold mb-5 flex items-center gap-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-maple dark:text-maple-dark"
                aria-hidden="true"
              >
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
              </svg>
              Idées de projets
            </h2>
            <ul className="space-y-3">
              {details.projectIdeas.map((idea, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-3 text-sm sm:text-base"
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    ease: APPLE_EASE,
                    delay: i * 0.08,
                  }}
                >
                  <span
                    className="mt-2 w-1.5 h-1.5 rounded-full bg-maple dark:bg-maple-dark shrink-0"
                    aria-hidden="true"
                  />
                  <span>{idea}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* Resources */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: APPLE_EASE }}
        >
          <h2 className="font-display text-2xl font-bold mb-6 tracking-tight">
            Ressources recommandées
          </h2>
          <div className="space-y-3">
            {mod.resources.map((res, i) => (
              <motion.a
                key={i}
                href={res.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-3 p-5 rounded-[16px] bg-[#F5F5F7] dark:bg-[#1C1C1E] border border-[#D2D2D7] dark:border-[#38383A] hover:border-maple/30 dark:hover:border-maple-dark/30 transition-all duration-300 group hover-lift"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  ease: APPLE_EASE,
                  delay: i * 0.08,
                }}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span className="text-[11px] px-2.5 py-1 rounded-lg bg-[#E8E8ED] dark:bg-[#38383A] text-[#6E6E73] dark:text-[#A1A1A6] uppercase tracking-wider font-semibold shrink-0">
                    {res.type}
                  </span>
                  <span className="text-sm font-medium truncate group-hover:text-maple dark:group-hover:text-maple-dark transition-colors">
                    {res.name}
                  </span>
                </div>
                <svg
                  className="w-5 h-5 text-[#86868B] group-hover:text-maple dark:group-hover:text-maple-dark shrink-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
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
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Navigation prev/next */}
        <motion.div
          className="mt-20 pt-10 border-t border-[#D2D2D7] dark:border-[#38383A] flex flex-col sm:flex-row items-stretch gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: APPLE_EASE }}
        >
          {prevMod ? (
            <Link
              href={`/python/${idToSlug[prevMod.id]}`}
              className="flex-1 group flex items-center gap-4 p-5 rounded-[16px] bg-[#F5F5F7] dark:bg-[#1C1C1E] border border-[#D2D2D7] dark:border-[#38383A] hover:border-maple/30 dark:hover:border-maple-dark/30 transition-all duration-300 hover-lift"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#86868B] group-hover:text-maple dark:group-hover:text-maple-dark transition-colors shrink-0"
                aria-hidden="true"
              >
                <path d="M19 12H5" />
                <path d="m12 19-7-7 7-7" />
              </svg>
              <div>
                <p className="text-xs text-[#86868B] dark:text-[#636366] mb-1">
                  Parcours précédent
                </p>
                <p className="font-display font-semibold text-sm group-hover:text-maple dark:group-hover:text-maple-dark transition-colors">
                  {prevMod.title}
                </p>
              </div>
            </Link>
          ) : (
            <div className="flex-1" />
          )}
          {nextMod ? (
            <Link
              href={`/python/${idToSlug[nextMod.id]}`}
              className="flex-1 group flex items-center justify-end gap-4 p-5 rounded-[16px] bg-[#F5F5F7] dark:bg-[#1C1C1E] border border-[#D2D2D7] dark:border-[#38383A] hover:border-maple/30 dark:hover:border-maple-dark/30 transition-all duration-300 hover-lift text-right"
            >
              <div>
                <p className="text-xs text-[#86868B] dark:text-[#636366] mb-1">
                  Parcours suivant
                </p>
                <p className="font-display font-semibold text-sm group-hover:text-maple dark:group-hover:text-maple-dark transition-colors">
                  {nextMod.title}
                </p>
              </div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#86868B] group-hover:text-maple dark:group-hover:text-maple-dark transition-colors shrink-0"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          ) : (
            <Link
              href="/#python"
              className="flex-1 group flex items-center justify-end gap-4 p-5 rounded-[16px] bg-maple/5 dark:bg-maple-dark/10 border border-maple/20 dark:border-maple-dark/20 hover:border-maple/40 dark:hover:border-maple-dark/40 transition-all duration-300 hover-lift text-right"
            >
              <div>
                <p className="text-xs text-maple/70 dark:text-maple-dark/70 mb-1">
                  Terminé
                </p>
                <p className="font-display font-semibold text-sm text-maple dark:text-maple-dark">
                  Retour aux masterclass
                </p>
              </div>
            </Link>
          )}
        </motion.div>
      </div>
    </div>
  );
}
