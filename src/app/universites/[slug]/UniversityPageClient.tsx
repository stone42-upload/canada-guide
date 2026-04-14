'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import { AnimatedScore } from '@/components/AnimatedScore';
import { APPLE_EASE, slugify } from '@/lib/utils';
import type { University } from '@/lib/types';
import {
  UNIVERSITY_DETAILS,
  LINK_CATEGORY_LABELS,
  LINK_CATEGORY_STYLES,
  formatCAD,
  formatFCFA,
  type UniLink,
} from '@/lib/university-details';

/* ─── Legacy alias ──────────────────────────────────────────────────── */
const UNI_EXTRAS = UNIVERSITY_DETAILS;

/* eslint-disable -- keeping old shape for backwards compat */
const _LEGACY: Record<
  number,
  {
    highlights: string[];
    programs: string[];
    researchAreas: string[];
    campusLife: string;
  }
> = {
  1: {
    highlights: [
      "#1 au Canada pour l'IA et le machine learning",
      'Hôte du Vector Institute',
      'Plus de 700 programmes de recherche',
    ],
    programs: [
      'Génie informatique',
      'Intelligence artificielle',
      'Science des données',
      'Génie mécanique',
      'Génie biomédical',
    ],
    researchAreas: [
      'Deep Learning & réseaux neuronaux',
      'Robotique autonome',
      'Vision par ordinateur',
      'Traitement du langage naturel',
    ],
    campusLife:
      "Campus emblématique au cœur de Toronto. Accès direct à l'écosystème tech canadien, aux startups de MaRS et à une communauté étudiante de plus de 90 000 personnes.",
  },
  2: {
    highlights: [
      'Top 3 mondial en sciences environnementales',
      'Partenariats avec 20+ hôpitaux',
      'Campus vue océan à Vancouver',
    ],
    programs: [
      'Génie électrique',
      'Génie biomédical',
      'Sciences informatiques',
      'Génie civil',
      'Physique appliquée',
    ],
    researchAreas: [
      'Robotique douce',
      'Systèmes embarqués critiques',
      'Énergie propre',
      'Biotechnologie',
    ],
    campusLife:
      "Situé sur la pointe ouest de Vancouver avec vue sur l'océan et les montagnes. Un environnement d'étude incomparable avec accès à la nature et à la tech.",
  },
  3: {
    highlights: [
      'Université bilingue de prestige mondial',
      'Centre de machines intelligentes',
      '#1 au Québec pour la recherche',
    ],
    programs: [
      'Génie aérospatial',
      'Génie des mines',
      'Informatique',
      'Génie électrique',
      'Génie chimique',
    ],
    researchAreas: [
      'Machines intelligentes',
      'Génie aérospatial avancé',
      'Neurosciences computationnelles',
      'Matériaux avancés',
    ],
    campusLife:
      "Au cœur de Montréal, McGill offre un mélange unique de culture francophone et anglophone. Vie étudiante riche avec accès aux festivals, à la gastronomie et à l'industrie tech en plein essor.",
  },
  4: {
    highlights: [
      '#1 au Canada pour le co-op',
      'Partenariats Google, Tesla, BlackBerry',
      "Taux d'emploi post-diplôme de 98%",
    ],
    programs: [
      'Génie logiciel',
      'Génie mécatronique',
      'Génie informatique',
      'Génie des systèmes',
      'Nano-ingénierie',
    ],
    researchAreas: [
      'Intelligence artificielle appliquée',
      'Cybersécurité',
      'Quantum computing',
      'Véhicules autonomes',
    ],
    campusLife:
      'Le programme co-op de Waterloo est légendaire — alternance travail-études avec les plus grandes entreprises tech au monde. Tremplin direct vers la Silicon Valley.',
  },
  5: {
    highlights: [
      'Siège du Mila (Yoshua Bengio)',
      "Plus grand institut d'IA au monde",
      'Excellence en recherche fondamentale',
    ],
    programs: [
      'Informatique',
      'Mathématiques appliquées',
      'Sciences cognitives',
      'Bio-informatique',
      'Physique',
    ],
    researchAreas: [
      'Apprentissage profond',
      'IA responsable',
      'Modèles génératifs',
      'Apprentissage par renforcement',
    ],
    campusLife:
      "Campus moderne dans le quartier Mile-End de Montréal. Proximité avec le Mila et l'écosystème IA montréalais qui attire les meilleurs chercheurs du monde.",
  },
  6: {
    highlights: [
      'Alberta Machine Intelligence Institute (Amii)',
      'Leader mondial en RL',
      'Écosystème énergie + tech',
    ],
    programs: [
      'Génie pétrolier',
      'Génie informatique',
      'Génie électrique',
      'Génie civil',
      'Génie minier',
    ],
    researchAreas: [
      'Reinforcement learning',
      "IA pour l'énergie",
      'Robotique industrielle',
      'Data science',
    ],
    campusLife:
      "Edmonton offre un coût de vie abordable et un accès direct à l'industrie des ressources naturelles. Campus de classe mondiale avec des installations de recherche de pointe.",
  },
  7: {
    highlights: [
      'Pionnier du problem-based learning',
      'Centre de fabrication additive',
      'Innovation industrie 4.0',
    ],
    programs: [
      'Génie des matériaux',
      'Génie chimique',
      'Génie logiciel',
      'Génie biomédical',
      'Génie manufacturier',
    ],
    researchAreas: [
      'Fabrication additive',
      'Matériaux avancés',
      'Santé numérique',
      'Énergie nucléaire',
    ],
    campusLife:
      'À Hamilton, à 1h de Toronto. McMaster combine excellence académique et approche pratique. Communauté soudée avec un fort esprit de collaboration.',
  },
  8: {
    highlights: [
      'Seule université bilingue G7',
      'Capitale fédérale = accès gouvernemental',
      'Hub cybersécurité',
    ],
    programs: [
      'Génie informatique bilingue',
      'Cybersécurité',
      'Génie électrique',
      'Génie logiciel',
      'Génie civil',
    ],
    researchAreas: [
      'Cybersécurité',
      'Politiques technologiques',
      'Photonique',
      'Énergie durable',
    ],
    campusLife:
      "Au cœur d'Ottawa, la capitale. Accès unique aux institutions fédérales, ambassades et organismes technologiques. Parfait pour qui veut combiner tech et politique publique.",
  },
  9: {
    highlights: [
      'Excellence en génie minier',
      'Communauté étudiante très soudée',
      'Mentorat de haut niveau',
    ],
    programs: [
      'Génie minier',
      'Génie géologique',
      'Génie mécanique',
      'Génie électrique',
      'Génie chimique',
    ],
    researchAreas: [
      'Ingénierie des systèmes complexes',
      'Exploitation minière durable',
      'Robotique de terrain',
      'Matériaux',
    ],
    campusLife:
      "Kingston, petite ville universitaire au bord du lac Ontario. Queen's est réputée pour son esprit communautaire exceptionnel et ses traditions étudiantes centenaires.",
  },
  10: {
    highlights: [
      'Schulich School of Engineering',
      'Énergie propre + robotique terrain',
      'Investissements massifs en R&D',
    ],
    programs: [
      'Génie pétrolier',
      'Génie mécanique',
      'Génie électrique',
      'Génie logiciel',
      'Génie biomédical',
    ],
    researchAreas: [
      'Énergie propre',
      'Robotique de terrain',
      'Géosciences',
      'Innovation pétrolière',
    ],
    campusLife:
      "Calgary : ville dynamique au pied des Rocheuses. Coût de vie raisonnable, qualité de vie exceptionnelle et proximité avec l'industrie des ressources naturelles et de l'énergie.",
  },
};

interface UniversityPageClientProps {
  uni: University;
  prevUni: University | null;
  nextUni: University | null;
}

export default function UniversityPageClient({
  uni,
  prevUni,
  nextUni,
}: UniversityPageClientProps) {
  const extras = UNI_EXTRAS[uni.rank];
  const scoreParsed = parseInt(uni.score_global_pct, 10);

  return (
    <div className="pt-28 pb-20">
      <div className="mx-auto max-w-[900px] px-6">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: 'Accueil', href: '/' },
            { label: 'Universités', href: '/#universites' },
            { label: uni.name },
          ]}
        />

        {/* Hero */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: APPLE_EASE }}
        >
          <div className="flex items-center gap-4 mb-6 flex-wrap">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-maple text-white text-xl font-bold shadow-badge dark:bg-maple-dark">
              #{uni.rank}
            </div>
            <span className="px-4 py-1.5 rounded-full bg-maple/10 dark:bg-maple-dark/15 text-maple dark:text-maple-dark text-sm font-medium">
              {uni.province}
            </span>
            {uni.is_top_robotics && (
              <span className="px-3 py-1 rounded-full bg-maple/10 dark:bg-maple-dark/15 text-maple dark:text-maple-dark text-xs font-medium uppercase tracking-wider">
                Robotique
              </span>
            )}
            {uni.is_top_engineering && (
              <span className="px-3 py-1 rounded-full bg-frost/10 dark:bg-frost-dark/15 text-frost dark:text-frost-dark text-xs font-medium uppercase tracking-wider">
                Ingénierie
              </span>
            )}
          </div>

          <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 leading-[1.05]">
            {uni.name}
          </h1>

          {/* Score */}
          <div className="flex items-end gap-3 mb-6">
            <AnimatedScore target={scoreParsed} delay={0.3} />
            <span className="text-sm text-[#86868B] dark:text-[#636366] mb-2">
              score global
            </span>
          </div>

          <p className="text-lg text-[#6E6E73] dark:text-[#A1A1A6] leading-relaxed max-w-[700px]">
            {uni.excellence_statement}
          </p>
        </motion.div>

        {/* Highlights */}
        {extras?.highlights && (
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
                className="text-maple dark:text-maple-dark"
                aria-hidden="true"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              Points forts
            </h2>
            <ul className="space-y-3">
              {extras.highlights.map((h, i) => (
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
                  <span>{h}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* Programs Grid */}
        {extras?.programs && (
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: APPLE_EASE }}
          >
            <h2 className="font-display text-2xl font-bold mb-6 tracking-tight">
              Programmes phares
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {extras.programs.map((prog, i) => (
                <motion.div
                  key={i}
                  className="p-4 rounded-[14px] bg-[#F5F5F7] dark:bg-[#1C1C1E] border border-[#D2D2D7] dark:border-[#38383A]"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    ease: APPLE_EASE,
                    delay: i * 0.06,
                  }}
                >
                  <p className="text-sm font-medium">{prog}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Research Areas */}
        {extras?.researchAreas && (
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: APPLE_EASE }}
          >
            <h2 className="font-display text-2xl font-bold mb-6 tracking-tight">
              Domaines de recherche
            </h2>
            <div className="flex flex-wrap gap-3">
              {extras.researchAreas.map((area, i) => (
                <motion.span
                  key={i}
                  className="px-4 py-2 rounded-full bg-frost/8 dark:bg-frost-dark/10 text-frost dark:text-frost-dark text-sm font-medium border border-frost/15 dark:border-frost-dark/20"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    ease: APPLE_EASE,
                    delay: i * 0.08,
                  }}
                >
                  {area}
                </motion.span>
              ))}
            </div>
          </motion.div>
        )}

        {/* Campus Life */}
        {extras?.campusLife && (
          <motion.div
            className="mb-16 rounded-[20px] p-8 glass dark:glass-dark shadow-glass"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: APPLE_EASE }}
          >
            <h2 className="font-display text-xl font-bold mb-4 flex items-center gap-2">
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
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              Vie sur le campus
            </h2>
            <p className="text-[#6E6E73] dark:text-[#A1A1A6] leading-relaxed">
              {extras.campusLife}
            </p>
          </motion.div>
        )}

        {/* Navigation prev/next */}
        <motion.div
          className="mt-20 pt-10 border-t border-[#D2D2D7] dark:border-[#38383A] flex flex-col sm:flex-row items-stretch gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: APPLE_EASE }}
        >
          {prevUni ? (
            <Link
              href={`/universites/${slugify(prevUni.name)}`}
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
                  #{prevUni.rank}
                </p>
                <p className="font-display font-semibold text-sm group-hover:text-maple dark:group-hover:text-maple-dark transition-colors">
                  {prevUni.name}
                </p>
              </div>
            </Link>
          ) : (
            <div className="flex-1" />
          )}
          {nextUni ? (
            <Link
              href={`/universites/${slugify(nextUni.name)}`}
              className="flex-1 group flex items-center justify-end gap-4 p-5 rounded-[16px] bg-[#F5F5F7] dark:bg-[#1C1C1E] border border-[#D2D2D7] dark:border-[#38383A] hover:border-maple/30 dark:hover:border-maple-dark/30 transition-all duration-300 hover-lift text-right"
            >
              <div>
                <p className="text-xs text-[#86868B] dark:text-[#636366] mb-1">
                  #{nextUni.rank}
                </p>
                <p className="font-display font-semibold text-sm group-hover:text-maple dark:group-hover:text-maple-dark transition-colors">
                  {nextUni.name}
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
              href="/#universites"
              className="flex-1 group flex items-center justify-end gap-4 p-5 rounded-[16px] bg-maple/5 dark:bg-maple-dark/10 border border-maple/20 dark:border-maple-dark/20 hover:border-maple/40 dark:hover:border-maple-dark/40 transition-all duration-300 hover-lift text-right"
            >
              <div>
                <p className="text-xs text-maple/70 dark:text-maple-dark/70 mb-1">
                  Voir tout
                </p>
                <p className="font-display font-semibold text-sm text-maple dark:text-maple-dark">
                  Retour au classement
                </p>
              </div>
            </Link>
          )}
        </motion.div>
      </div>
    </div>
  );
}
