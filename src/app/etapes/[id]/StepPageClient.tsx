'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import OfficialResourcesSection from '@/components/ui/OfficialResourceCard';
import { APPLE_EASE } from '@/lib/utils';
import { STEP_ICONS } from '@/lib/icons';
import { IRCC_LINKS } from '@/lib/ircc-links';
import type { Step } from '@/lib/types';

/* ── Detailed content per step ── */
const STEP_DETAILS: Record<
  number,
  {
    heroSubtitle: string;
    sections: { title: string; content: string }[];
    tips: string[];
    faq: { q: string; a: string }[];
  }
> = {
  1: {
    heroSubtitle:
      'La première étape vers votre nouvelle vie au Canada commence par comprendre quel programme correspond à votre profil unique.',
    sections: [
      {
        title: "Pourquoi l'évaluation est cruciale",
        content:
          "Le Canada offre plus de 100 programmes d'immigration différents. Choisir le mauvais peut vous coûter des mois, voire des années. Une évaluation rigoureuse de votre profil — compétences, expérience, langue, éducation — vous oriente vers le chemin le plus rapide et le plus sûr.",
      },
      {
        title: 'Les programmes principaux',
        content:
          "Entrée express (FSW, CEC, FST), Programme des nominés provinciaux (PNP), Atlantic Immigration Program, et les voies d'immigration pour étudiants internationaux. Chaque programme a ses propres critères et délais de traitement.",
      },
      {
        title: 'Le système de points CRS',
        content:
          "Le Comprehensive Ranking System (CRS) est le cœur d'Entrée express. Vos points sont calculés selon l'âge, l'éducation, l'expérience de travail, les compétences linguistiques et les facteurs supplémentaires comme une offre d'emploi ou une nomination provinciale.",
      },
    ],
    tips: [
      'Passez les tests IELTS ou TEF le plus tôt possible — les résultats prennent 2-3 semaines',
      'Faites évaluer vos diplômes par WES ou un organisme désigné avant de créer votre profil',
      "Utilisez l'outil CRS officiel pour estimer votre score avant de soumettre",
      'Considérez une nomination provinciale (PNP) — elle ajoute 600 points CRS',
    ],
    faq: [
      {
        q: "Combien de temps prend l'évaluation initiale ?",
        a: "L'auto-évaluation prend environ 30 minutes. L'évaluation des diplômes (ECA) prend 4-8 semaines selon l'organisme.",
      },
      {
        q: 'Puis-je postuler à plusieurs programmes simultanément ?',
        a: 'Oui, vous pouvez avoir un profil Entrée express actif tout en postulant à un PNP ou un programme pilote.',
      },
      {
        q: 'Quel score CRS minimum faut-il ?',
        a: "Il n'y a pas de minimum fixe. Les tirages récents varient entre 430 et 520 points. Plus votre score est élevé, plus vite vous recevrez une invitation.",
      },
    ],
  },
  2: {
    heroSubtitle:
      "Un dossier complet et bien organisé est la clé d'une demande approuvée du premier coup. Pas de documents manquants, pas de retards.",
    sections: [
      {
        title: 'Documents essentiels',
        content:
          "Passeport valide (6+ mois), résultats de tests linguistiques (IELTS/TEF), évaluation des diplômes (ECA), lettres de référence d'employeurs, preuves de fonds suffisants, photos conformes aux spécifications IRCC, et certificats de police.",
      },
      {
        title: 'Preuves de fonds',
        content:
          "Vous devez démontrer que vous disposez de fonds suffisants pour subvenir à vos besoins au Canada. Pour une personne seule, le montant minimum est d'environ 14 690 $ CAD (2026). Des relevés bancaires des 6 derniers mois sont requis.",
      },
      {
        title: 'Évaluation des diplômes (ECA)',
        content:
          "WES (World Education Services) est l'organisme le plus populaire. Envoyez vos relevés de notes et diplômes directement depuis votre institution. Le processus prend généralement 4-8 semaines.",
      },
    ],
    tips: [
      'Numérisez tous vos documents en haute résolution (300 DPI minimum)',
      'Gardez des copies certifiées de chaque document',
      "Commencez l'évaluation WES 2-3 mois avant de soumettre votre profil",
      'Vérifiez que votre passeport est valide pour au moins 18 mois',
    ],
    faq: [
      {
        q: 'Quels tests linguistiques sont acceptés ?',
        a: "Pour l'anglais : IELTS General Training ou CELPIP. Pour le français : TEF Canada ou TCF Canada.",
      },
      {
        q: "Combien coûte l'évaluation WES ?",
        a: "Environ 220 $ CAD plus les frais d'envoi des documents depuis votre institution.",
      },
      {
        q: 'Les documents doivent-ils être traduits ?',
        a: "Oui, tout document dans une langue autre que l'anglais ou le français doit être traduit par un traducteur certifié.",
      },
    ],
  },
  3: {
    heroSubtitle:
      'Votre dossier est prêt. Il est temps de créer votre compte IRCC et de soumettre officiellement votre candidature.',
    sections: [
      {
        title: 'Créer votre compte IRCC',
        content:
          "Rendez-vous sur le portail officiel d'IRCC pour créer votre compte. Vous aurez besoin d'une adresse email valide et de créer un identifiant sécurisé. Ce compte sera votre tableau de bord pour toute la durée du processus.",
      },
      {
        title: 'Soumettre votre profil Entrée express',
        content:
          'Remplissez le formulaire en ligne avec précision. Chaque information doit correspondre exactement à vos documents. Une fois soumis, votre profil reste actif pendant 12 mois dans le bassin de candidats.',
      },
      {
        title: 'Après la soumission',
        content:
          'Si vous recevez une Invitation à Présenter une Demande (IPD), vous avez 60 jours pour soumettre votre demande complète de résidence permanente avec tous les documents requis. Ne manquez pas ce délai.',
      },
    ],
    tips: [
      'Vérifiez chaque champ trois fois avant de soumettre — les erreurs peuvent entraîner un refus',
      'Conservez une copie de tout ce que vous soumettez',
      'Activez les notifications email sur votre compte IRCC',
      'Préparez tous vos documents avant de commencer la soumission en ligne',
    ],
    faq: [
      {
        q: 'Combien coûte la soumission ?',
        a: 'Les frais de traitement pour la résidence permanente sont de 1 365 $ CAD par adulte (frais de demande + droit de RP).',
      },
      {
        q: 'Puis-je modifier mon profil après soumission ?',
        a: "Oui, vous pouvez mettre à jour votre profil Entrée express à tout moment tant que vous n'avez pas reçu d'IPD.",
      },
      {
        q: 'Combien de temps avant de recevoir une IPD ?',
        a: 'Cela dépend de votre score CRS. Les tirages ont lieu environ toutes les deux semaines.',
      },
    ],
  },
  4: {
    heroSubtitle:
      "Votre demande est en cours de traitement. Voici comment suivre l'avancement et préparer les dernières étapes avant l'approbation.",
    sections: [
      {
        title: 'Suivi de votre demande',
        content:
          "Connectez-vous régulièrement à votre compte IRCC pour vérifier l'état de votre demande. Le délai de traitement moyen est de 6 mois pour Entrée express, mais peut varier selon le volume de demandes.",
      },
      {
        title: 'Données biométriques',
        content:
          'Vous devrez fournir vos empreintes digitales et une photo dans un centre de collecte biométrique désigné. Vous avez 30 jours après la demande pour compléter cette étape. Les frais sont de 85 $ CAD.',
      },
      {
        title: 'Examen médical',
        content:
          'Un examen médical par un médecin désigné par IRCC est requis. Prenez rendez-vous dès que possible car les délais peuvent être longs. Le médecin enverra les résultats directement à IRCC.',
      },
    ],
    tips: [
      'Prenez rendez-vous pour la biométrie dès réception de la demande',
      "L'examen médical est valide 12 mois — planifiez en conséquence",
      'Maintenez votre passeport valide pendant tout le processus',
      "Ne voyagez pas sans avoir vérifié l'impact sur votre demande",
    ],
    faq: [
      {
        q: 'Que faire si IRCC demande des documents supplémentaires ?',
        a: 'Répondez dans les délais indiqués (généralement 30 jours). Soumettez exactement ce qui est demandé via votre compte en ligne.',
      },
      {
        q: 'Puis-je travailler pendant le traitement ?',
        a: "Si vous êtes déjà au Canada avec un permis de travail valide, oui. Sinon, vous devez attendre l'approbation.",
      },
      {
        q: 'Que se passe-t-il si ma demande est refusée ?',
        a: 'Vous recevrez une lettre expliquant les raisons. Vous pouvez soumettre une nouvelle demande en corrigeant les points faibles.',
      },
    ],
  },
  5: {
    heroSubtitle:
      'Félicitations ! Votre visa est approuvé. Préparez votre atterrissage au Canada et les premières démarches pour commencer votre nouvelle vie.',
    sections: [
      {
        title: 'Préparer votre arrivée',
        content:
          "Réservez votre vol, organisez un logement temporaire (Airbnb, auberge ou chez un contact). Apportez tous vos documents originaux : Confirmation de Résidence Permanente (COPR), passeport, preuve de fonds, et offre d'emploi si applicable.",
      },
      {
        title: 'À la douane canadienne',
        content:
          "À votre arrivée, présentez votre COPR et votre passeport à l'agent des services frontaliers. Il activera officiellement votre statut de résident permanent. Vous recevrez votre carte RP par courrier dans les semaines suivantes.",
      },
      {
        title: 'Premières démarches',
        content:
          "Obtenez votre numéro d'assurance sociale (NAS) au centre Service Canada le plus proche. Ouvrez un compte bancaire canadien. Inscrivez-vous à l'assurance maladie provinciale. Explorez les services d'établissement gratuits offerts aux nouveaux arrivants.",
      },
    ],
    tips: [
      "Arrivez avant la date d'expiration de votre COPR",
      'Apportez des fonds en dollars canadiens pour les premières semaines',
      "Inscrivez-vous aux services d'établissement dès votre arrivée",
      "Obtenez votre NAS dans la première semaine — c'est essentiel pour travailler",
    ],
    faq: [
      {
        q: "Combien d'argent apporter pour les premières semaines ?",
        a: 'Prévoyez au minimum 2 000-3 000 $ CAD en plus de votre loyer pour les premières semaines (transport, nourriture, dépôts).',
      },
      {
        q: 'Quand vais-je recevoir ma carte RP ?',
        a: 'La carte de résident permanent est généralement envoyée par courrier dans les 4-8 semaines suivant votre atterrissage.',
      },
      {
        q: 'Puis-je travailler immédiatement ?',
        a: 'Oui, dès que vous avez votre NAS. Votre statut de résident permanent vous donne un accès complet au marché du travail canadien.',
      },
    ],
  },
};

interface StepPageClientProps {
  step: Step;
  totalSteps: number;
  prevStep: Step | null;
  nextStep: Step | null;
}

export default function StepPageClient({
  step,
  totalSteps,
  prevStep,
  nextStep,
}: StepPageClientProps) {
  const details = STEP_DETAILS[step.order];
  const irccLinks = IRCC_LINKS[String(step.order)] ?? [];

  return (
    <div className="pt-28 pb-20">
      <div className="mx-auto max-w-[900px] px-6">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: 'Accueil', href: '/' },
            { label: 'Étapes', href: '/#etapes' },
            { label: `Étape ${step.order} — ${step.title}` },
          ]}
        />

        {/* Hero */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: APPLE_EASE }}
        >
          {/* Step badge + icon */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-maple text-white text-xl font-bold shadow-badge dark:bg-maple-dark">
              {String(step.order).padStart(2, '0')}
            </div>
            <div className="text-maple dark:text-maple-dark scale-125 origin-left">
              {STEP_ICONS[step.icon] ?? null}
            </div>
          </div>

          {/* Progress bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-[#86868B] dark:text-[#636366] font-medium">
                Étape {step.order} sur {totalSteps}
              </span>
              <span className="text-xs text-maple dark:text-maple-dark font-semibold">
                {Math.round((step.order / totalSteps) * 100)}%
              </span>
            </div>
            <div className="h-1.5 rounded-full bg-[#E8E8ED] dark:bg-[#38383A] overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-maple dark:bg-maple-dark"
                initial={{ width: 0 }}
                animate={{ width: `${(step.order / totalSteps) * 100}%` }}
                transition={{ duration: 1, ease: APPLE_EASE, delay: 0.3 }}
              />
            </div>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 leading-[1.05]">
            {step.title}
          </h1>
          <p className="text-lg sm:text-xl text-[#6E6E73] dark:text-[#A1A1A6] leading-relaxed max-w-[700px]">
            {details?.heroSubtitle ?? step.description}
          </p>
        </motion.div>

        {/* Detailed sections */}
        {details?.sections.map((section, i) => (
          <motion.div
            key={i}
            className="mb-12"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: APPLE_EASE, delay: i * 0.1 }}
          >
            <h2 className="font-display text-2xl font-bold mb-4 tracking-tight">
              {section.title}
            </h2>
            <p className="text-[#6E6E73] dark:text-[#A1A1A6] leading-relaxed text-base">
              {section.content}
            </p>
          </motion.div>
        ))}

        {/* Tips */}
        {details?.tips && (
          <motion.div
            className="mb-16 rounded-[20px] p-8 bg-maple/5 dark:bg-maple-dark/10 border border-maple/10 dark:border-maple-dark/20"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: APPLE_EASE }}
          >
            <h3 className="font-display text-xl font-bold mb-5 flex items-center gap-2">
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
              Conseils pratiques
            </h3>
            <ul className="space-y-3">
              {details.tips.map((tip, i) => (
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
                  <span className="text-[#1D1D1F] dark:text-[#F5F5F7]">
                    {tip}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* FAQ */}
        {details?.faq && (
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: APPLE_EASE }}
          >
            <h3 className="font-display text-2xl font-bold mb-8 tracking-tight">
              Questions fréquentes
            </h3>
            <div className="space-y-5">
              {details.faq.map((item, i) => (
                <motion.div
                  key={i}
                  className="rounded-[16px] p-6 bg-[#F5F5F7] dark:bg-[#1C1C1E] border border-[#D2D2D7] dark:border-[#38383A]"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    ease: APPLE_EASE,
                    delay: i * 0.08,
                  }}
                >
                  <p className="font-display font-semibold mb-2 text-base">
                    {item.q}
                  </p>
                  <p className="text-sm text-[#6E6E73] dark:text-[#A1A1A6] leading-relaxed">
                    {item.a}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Official IRCC Resources */}
        {irccLinks.length > 0 && <OfficialResourcesSection links={irccLinks} />}

        {/* Navigation prev/next */}
        <motion.div
          className="mt-20 pt-10 border-t border-[#D2D2D7] dark:border-[#38383A] flex flex-col sm:flex-row items-stretch gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: APPLE_EASE }}
        >
          {prevStep ? (
            <Link
              href={`/etapes/${prevStep.order}`}
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
                  Étape précédente
                </p>
                <p className="font-display font-semibold text-sm group-hover:text-maple dark:group-hover:text-maple-dark transition-colors">
                  {prevStep.title}
                </p>
              </div>
            </Link>
          ) : (
            <div className="flex-1" />
          )}
          {nextStep ? (
            <Link
              href={`/etapes/${nextStep.order}`}
              className="flex-1 group flex items-center justify-end gap-4 p-5 rounded-[16px] bg-[#F5F5F7] dark:bg-[#1C1C1E] border border-[#D2D2D7] dark:border-[#38383A] hover:border-maple/30 dark:hover:border-maple-dark/30 transition-all duration-300 hover-lift text-right"
            >
              <div>
                <p className="text-xs text-[#86868B] dark:text-[#636366] mb-1">
                  Étape suivante
                </p>
                <p className="font-display font-semibold text-sm group-hover:text-maple dark:group-hover:text-maple-dark transition-colors">
                  {nextStep.title}
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
              href="/"
              className="flex-1 group flex items-center justify-end gap-4 p-5 rounded-[16px] bg-maple/5 dark:bg-maple-dark/10 border border-maple/20 dark:border-maple-dark/20 hover:border-maple/40 dark:hover:border-maple-dark/40 transition-all duration-300 hover-lift text-right"
            >
              <div>
                <p className="text-xs text-maple/70 dark:text-maple-dark/70 mb-1">
                  Parcours terminé
                </p>
                <p className="font-display font-semibold text-sm text-maple dark:text-maple-dark">
                  Retour à l&apos;accueil
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
                className="text-maple dark:text-maple-dark shrink-0"
                aria-hidden="true"
              >
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </Link>
          )}
        </motion.div>
      </div>
    </div>
  );
}
