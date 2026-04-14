import type { OfficialLink } from '@/components/ui/OfficialResourceCard';

/**
 * Official IRCC links organized by immigration step.
 * Each step ID maps to its relevant government resources.
 */
export const IRCC_LINKS: Record<string, OfficialLink[]> = {
  // Step 1 — Évaluer votre profil
  '1': [
    {
      title: "Outil d'exploration des programmes",
      description:
        "Découvrez quel programme d'immigration correspond le mieux à votre profil et vos objectifs.",
      url_en: 'https://ircc.canada.ca/explore-programs/index.asp',
    },
    {
      title: "Entrée express — Vue d'ensemble",
      description:
        'Le système principal pour gérer les demandes de résidence permanente des travailleurs qualifiés.',
      url_en:
        'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry.html',
    },
    {
      title: "Vérifier si vous avez besoin d'un permis d'études",
      description:
        "Outil interactif pour savoir si un permis d'études est nécessaire pour votre situation.",
      url_en:
        'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/study-permit-tool.html',
    },
  ],

  // Step 2 — Préparer vos documents
  '2': [
    {
      title: "Permis d'études — Page principale",
      description:
        "Tout ce que vous devez savoir sur les permis d'études canadiens : conditions, durée et renouvellement.",
      url_en:
        'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit.html',
    },
    {
      title: "Comment présenter une demande de permis d'études",
      description:
        "Guide étape par étape pour soumettre votre demande de permis d'études en ligne.",
      url_en:
        'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/apply.html',
    },
    {
      title: 'Documents nécessaires pour le PGWP',
      description:
        'Liste complète des documents requis pour demander un permis de travail post-diplôme.',
      url_en:
        'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/after-graduation/get-documents.html',
    },
  ],

  // Step 3 — Soumettre votre demande
  '3': [
    {
      title: "Comment présenter une demande de permis d'études",
      description:
        'Créez votre compte IRCC et soumettez votre candidature avec tous les documents requis.',
      url_en:
        'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/apply.html',
    },
    {
      title: 'Demande de résidence permanente via Entrée express',
      description:
        'Guide complet pour soumettre votre demande de RP une fois invité via le système Entrée express.',
      url_en:
        'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/apply-permanent-residence.html',
    },
    {
      title: "Outil d'exploration des programmes",
      description:
        "Explorez tous les programmes d'immigration disponibles et trouvez celui qui vous correspond.",
      url_en: 'https://ircc.canada.ca/explore-programs/index.asp',
    },
  ],

  // Step 4 — Obtenir votre visa
  '4': [
    {
      title: 'Travailler après les études (PGWP)',
      description:
        "Informez-vous sur le Permis de travail post-diplôme et les conditions d'admissibilité.",
      url_en:
        'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/after-graduation.html',
    },
    {
      title: 'Demande de PGWP',
      description:
        'Comment et quand présenter votre demande de permis de travail post-diplôme après la remise de votre diplôme.',
      url_en:
        'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/after-graduation/apply.html',
    },
    {
      title: 'Catégorie Expérience Canadienne (CEC)',
      description:
        'Programme de résidence permanente pour ceux qui ont acquis une expérience de travail qualifiée au Canada.',
      url_en:
        'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/who-can-apply/canadian-experience-class.html',
    },
  ],

  // Step 5 — Atterrir au Canada
  '5': [
    {
      title: 'Entrée express — Résidence permanente',
      description:
        'Le programme principal pour obtenir la résidence permanente en tant que travailleur qualifié.',
      url_en:
        'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry.html',
    },
    {
      title: 'Catégorie Expérience Canadienne (CEC)',
      description:
        'Idéal si vous avez déjà travaillé au Canada — la voie la plus rapide vers la RP.',
      url_en:
        'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/who-can-apply/canadian-experience-class.html',
    },
    {
      title: 'Demande de résidence permanente',
      description:
        'Guide pas-à-pas pour compléter votre demande de résidence permanente via Entrée express.',
      url_en:
        'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/apply-permanent-residence.html',
    },
  ],
};
