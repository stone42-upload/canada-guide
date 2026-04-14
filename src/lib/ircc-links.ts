import type { OfficialLink } from '@/components/ui/OfficialResourceCard';

/**
 * Official IRCC links organized by immigration step.
 * Each step ID maps to its relevant government resources.
 * All URLs verified against canada.ca — April 2026.
 */
export const IRCC_LINKS: Record<string, OfficialLink[]> = {
  // ── Step 1 — Évaluer votre profil ──────────────────────────────────
  '1': [
    {
      title: 'Voulez-vous venir au Canada ?',
      description:
        "Outil officiel d'éligibilité IRCC : répondez à des questions sur votre nationalité, âge, langue, études et expérience pour découvrir vos options.",
      url_en:
        'https://www.canada.ca/en/immigration-refugees-citizenship/services/come-canada-tool.html',
      url_fr:
        'https://www.canada.ca/fr/immigration-refugies-citoyennete/services/outil-venir-canada.html',
    },
    {
      title: "Outil d'exploration des programmes",
      description:
        "Quiz rapide (~1 min) pour identifier les programmes d'immigration qui correspondent à votre profil.",
      url_en: 'https://ircc.canada.ca/explore-programs/index.asp',
    },
    {
      title: "Entrée express — Vue d'ensemble",
      description:
        'Le système principal de gestion des demandes de résidence permanente pour travailleurs qualifiés.',
      url_en:
        'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry.html',
      url_fr:
        'https://www.canada.ca/fr/immigration-refugies-citoyennete/services/immigrer-canada/entree-express.html',
    },
    {
      title: 'Qui peut présenter une demande — Entrée express',
      description:
        "Vérifiez si vous êtes admissible à l'un des 3 programmes gérés par Entrée express (FSWP, CEC, FSTP).",
      url_en:
        'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/who-can-apply.html',
      url_fr:
        'https://www.canada.ca/fr/immigration-refugies-citoyennete/services/immigrer-canada/entree-express/admissibilite.html',
    },
    {
      title: 'Calculer votre score CRS',
      description:
        "Estimez votre pointage au Système de classement global (CRS) pour savoir où vous vous situez dans le bassin d'Entrée express.",
      url_en:
        'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/check-score.html',
      url_fr:
        'https://www.canada.ca/fr/immigration-refugies-citoyennete/services/immigrer-canada/entree-express/verifier-pointage.html',
    },
    {
      title: "Vérifier si vous avez besoin d'un permis d'études",
      description:
        "Outil interactif pour savoir si un permis d'études est nécessaire pour votre situation.",
      url_en:
        'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/study-permit-tool.html',
      url_fr:
        'https://www.canada.ca/fr/immigration-refugies-citoyennete/services/etudier-canada/permis-etudes/outil-permis-etudes.html',
    },
    {
      title: 'Étudier au Canada — Page principale',
      description:
        "Portail officiel pour les étudiants internationaux : avant de postuler, choisir une école, bourses et vie étudiante.",
      url_en:
        'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada.html',
      url_fr:
        'https://www.canada.ca/fr/immigration-refugies-citoyennete/services/etudier-canada.html',
    },
    {
      title: 'EduCanada — Bourses et vie étudiante',
      description:
        "Site officiel du gouvernement pour les bourses d'études, conseils de vie étudiante et informations sur les programmes canadiens.",
      url_en: 'https://www.educanada.ca/index.aspx?lang=eng',
      url_fr: 'https://www.educanada.ca/index.aspx?lang=fra',
    },
  ],

  // ── Step 2 — Préparer vos documents ────────────────────────────────
  '2': [
    {
      title: "Permis d'études — Guide complet",
      description:
        "Tout sur le permis d'études : qui peut postuler, frais (150 $ CAD), délais de traitement et conditions.",
      url_en:
        'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit.html',
      url_fr:
        'https://www.canada.ca/fr/immigration-refugies-citoyennete/services/etudier-canada/permis-etudes.html',
    },
    {
      title: "Qui peut demander un permis d'études",
      description:
        "Conditions d'admissibilité : lettre d'acceptation, preuve financière, casier judiciaire vierge, examen médical.",
      url_en:
        'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/eligibility.html',
      url_fr:
        'https://www.canada.ca/fr/immigration-refugies-citoyennete/services/etudier-canada/permis-etudes/admissibilite.html',
    },
    {
      title: 'Obtenir les bons documents',
      description:
        "Liste officielle des documents requis : passeport, photos, lettre d'acceptation, preuve de fonds, certificat de police.",
      url_en:
        'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/get-documents.html',
      url_fr:
        'https://www.canada.ca/fr/immigration-refugies-citoyennete/services/etudier-canada/permis-etudes/obtenir-documents.html',
    },
    {
      title: 'Trouver un établissement désigné (DLI)',
      description:
        "Liste officielle des établissements d'enseignement désignés autorisés à accueillir des étudiants internationaux.",
      url_en:
        'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/prepare/designated-learning-institutions-list.html',
      url_fr:
        'https://www.canada.ca/fr/immigration-refugies-citoyennete/services/etudier-canada/permis-etudes/preparer/liste-etablissements-enseignement-designes.html',
    },
    {
      title: 'Examens médicaux',
      description:
        "Informations sur l'examen médical d'immigration : quand il est requis, comment trouver un médecin désigné.",
      url_en:
        'https://www.canada.ca/en/immigration-refugees-citizenship/services/application/medical-police/medical-exams.html',
      url_fr:
        'https://www.canada.ca/fr/immigration-refugies-citoyennete/services/demande/medical-police/examens-medicaux.html',
    },
    {
      title: 'Certificats de police',
      description:
        'Comment obtenir un certificat de police (casier judiciaire) de votre pays pour votre demande.',
      url_en:
        'https://www.canada.ca/en/immigration-refugees-citizenship/services/application/medical-police/police-certificates/about.html',
      url_fr:
        'https://www.canada.ca/fr/immigration-refugies-citoyennete/services/demande/medical-police/certificats-police/a-propos.html',
    },
    {
      title: 'Données biométriques',
      description:
        "Vérifiez si vous devez fournir vos empreintes digitales et photo. Requis pour la plupart des demandeurs.",
      url_en: 'https://ircc.canada.ca/english/visit/biometrics.asp',
    },
    {
      title: 'Vérifier les délais de traitement',
      description:
        'Consultez les délais estimés de traitement selon votre pays et le type de demande.',
      url_en:
        'https://www.canada.ca/en/immigration-refugees-citizenship/services/application/check-processing-times.html',
      url_fr:
        'https://www.canada.ca/fr/immigration-refugies-citoyennete/services/demande/verifier-delais-traitement.html',
    },
  ],

  // ── Step 3 — Soumettre votre demande ───────────────────────────────
  '3': [
    {
      title: "Comment demander un permis d'études",
      description:
        "Guide officiel étape par étape pour soumettre votre demande de permis d'études en ligne.",
      url_en:
        'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/apply.html',
      url_fr:
        'https://www.canada.ca/fr/immigration-refugies-citoyennete/services/etudier-canada/permis-etudes/presenter-demande.html',
    },
    {
      title: 'Créer un compte IRCC / Se connecter',
      description:
        'Portail officiel pour créer votre compte en ligne, soumettre votre demande, payer les frais et suivre son état.',
      url_en:
        'https://www.canada.ca/en/immigration-refugees-citizenship/services/application/account.html',
      url_fr:
        'https://www.canada.ca/fr/immigration-refugies-citoyennete/services/demande/compte.html',
    },
    {
      title: "Après avoir soumis votre demande d'études",
      description:
        "Ce qui se passe après la soumission : délais, demandes supplémentaires, décision et prochaines étapes.",
      url_en:
        'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/after-apply-next-steps.html',
      url_fr:
        'https://www.canada.ca/fr/immigration-refugies-citoyennete/services/etudier-canada/permis-etudes/apres-demande-prochaines-etapes.html',
    },
    {
      title: 'Créer votre profil Entrée express',
      description:
        "Pour ceux qui visent la RP : créez votre profil dans le bassin d'Entrée express et attendez une invitation.",
      url_en:
        'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/create-profile.html',
      url_fr:
        'https://www.canada.ca/fr/immigration-refugies-citoyennete/services/immigrer-canada/entree-express/creer-profil.html',
    },
    {
      title: 'Demande de résidence permanente — Entrée express',
      description:
        'Guide complet pour soumettre votre demande de RP une fois invité via le système Entrée express.',
      url_en:
        'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/apply-permanent-residence.html',
      url_fr:
        'https://www.canada.ca/fr/immigration-refugies-citoyennete/services/immigrer-canada/entree-express/demande-residence-permanente.html',
    },
    {
      title: "Vérifier l'état de votre demande",
      description:
        "Suivez l'avancement de votre demande en ligne : permis d'études, RP, permis de travail, etc.",
      url_en:
        'https://www.canada.ca/en/immigration-refugees-citizenship/services/application/check-status.html',
      url_fr:
        'https://www.canada.ca/fr/immigration-refugies-citoyennete/services/demande/verifier-etat.html',
    },
    {
      title: "Préparer les documents pour l'Entrée express",
      description:
        "Rassemblez les documents nécessaires avant de soumettre votre profil d'Entrée express.",
      url_en:
        'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/documents.html',
      url_fr:
        'https://www.canada.ca/fr/immigration-refugies-citoyennete/services/immigrer-canada/entree-express/documents.html',
    },
  ],

  // ── Step 4 — Obtenir votre visa / permis ───────────────────────────
  '4': [
    {
      title: "Préparer votre arrivée au Canada",
      description:
        "Ce qu'il faut faire avant et à votre arrivée : documents à apporter, douane, premiers pas.",
      url_en:
        'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/prepare-arrival.html',
      url_fr:
        'https://www.canada.ca/fr/immigration-refugies-citoyennete/services/etudier-canada/permis-etudes/preparer-arrivee.html',
    },
    {
      title: "Pendant vos études — Conditions du permis",
      description:
        "Comprenez les conditions de votre permis d'études : études à temps plein, travail autorisé, changements.",
      url_en:
        'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/while-you-study/study-permit-conditions.html',
      url_fr:
        'https://www.canada.ca/fr/immigration-refugies-citoyennete/services/etudier-canada/permis-etudes/pendant-etudes/conditions-permis-etudes.html',
    },
    {
      title: 'Travailler pendant vos études',
      description:
        'Découvrez si vous pouvez travailler, combien d\'heures et où (sur le campus, hors campus, stage).',
      url_en:
        'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work.html',
      url_fr:
        'https://www.canada.ca/fr/immigration-refugies-citoyennete/services/etudier-canada/travail.html',
    },
    {
      title: "Renouveler ou prolonger votre permis d'études",
      description:
        "Comment prolonger votre permis d'études ou rétablir votre statut si votre permis est expiré.",
      url_en:
        'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/extend-study-permit.html',
      url_fr:
        'https://www.canada.ca/fr/immigration-refugies-citoyennete/services/etudier-canada/prolonger-permis-etudes.html',
    },
    {
      title: 'Rondes d\'invitations Entrée express',
      description:
        "Consultez les résultats des rondes d'invitations récentes : scores minimaux CRS et nombre d'invitations.",
      url_en:
        'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/rounds-invitations.html',
      url_fr:
        'https://www.canada.ca/fr/immigration-refugies-citoyennete/services/immigrer-canada/entree-express/rondes-invitations.html',
    },
    {
      title: 'Après avoir soumis votre demande — Entrée express',
      description:
        "Suivi après la soumission de votre demande de RP : examens médicaux, données biométriques, confirmation.",
      url_en:
        'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/after-apply.html',
      url_fr:
        'https://www.canada.ca/fr/immigration-refugies-citoyennete/services/immigrer-canada/entree-express/apres-demande.html',
    },
    {
      title: 'Demande approuvée — Entrée express',
      description:
        "Votre demande est approuvée ! Prochaines étapes : COPR, visa de RP et préparation à l'atterrissage.",
      url_en:
        'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/application-approved.html',
      url_fr:
        'https://www.canada.ca/fr/immigration-refugies-citoyennete/services/immigrer-canada/entree-express/demande-approuvee.html',
    },
  ],

  // ── Step 5 — Atterrir & s'installer au Canada ─────────────────────
  '5': [
    {
      title: 'Permis de travail post-diplôme (PGWP)',
      description:
        "Restez et travaillez au Canada après l'obtention de votre diplôme. Guide complet sur le PGWP.",
      url_en:
        'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/after-graduation/about.html',
      url_fr:
        'https://www.canada.ca/fr/immigration-refugies-citoyennete/services/etudier-canada/travail/apres-obtention-diplome/au-sujet.html',
    },
    {
      title: 'Admissibilité au PGWP',
      description:
        "Vérifiez si vous êtes admissible au permis de travail post-diplôme selon votre programme et votre école.",
      url_en:
        'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/after-graduation/eligibility.html',
      url_fr:
        'https://www.canada.ca/fr/immigration-refugies-citoyennete/services/etudier-canada/travail/apres-obtention-diplome/admissibilite.html',
    },
    {
      title: 'Comment demander le PGWP',
      description:
        'Étapes pour soumettre votre demande de PGWP : vous avez 180 jours après la remise de votre diplôme.',
      url_en:
        'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/after-graduation/apply.html',
      url_fr:
        'https://www.canada.ca/fr/immigration-refugies-citoyennete/services/etudier-canada/travail/apres-obtention-diplome/presenter-demande.html',
    },
    {
      title: 'Documents requis pour le PGWP',
      description:
        'Liste officielle des documents à préparer pour votre demande de permis de travail post-diplôme.',
      url_en:
        'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/after-graduation/get-documents.html',
      url_fr:
        'https://www.canada.ca/fr/immigration-refugies-citoyennete/services/etudier-canada/travail/apres-obtention-diplome/obtenir-documents.html',
    },
    {
      title: 'Catégorie Expérience Canadienne (CEC)',
      description:
        "Programme de RP pour ceux ayant acquis de l'expérience de travail qualifiée au Canada — la voie la plus rapide.",
      url_en:
        'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/who-can-apply/canadian-experience-class.html',
      url_fr:
        'https://www.canada.ca/fr/immigration-refugies-citoyennete/services/immigrer-canada/entree-express/admissibilite/categorie-experience-canadienne.html',
    },
    {
      title: 'Sessions virtuelles — Voies vers la RP',
      description:
        "Inscrivez-vous à des sessions en ligne gratuites d'IRCC sur les chemins vers la résidence permanente après les études.",
      url_en:
        'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/virtual-sessions.html',
      url_fr:
        'https://www.canada.ca/fr/immigration-refugies-citoyennete/services/etudier-canada/sessions-virtuelles.html',
    },
    {
      title: 'Contacter IRCC',
      description:
        "Numéros de téléphone, formulaire web et bureaux d'IRCC pour toute question sur votre dossier.",
      url_en:
        'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/contact-ircc.html',
      url_fr:
        'https://www.canada.ca/fr/immigration-refugies-citoyennete/organisation/contactez-ircc.html',
    },
    {
      title: "Centre d'aide IRCC",
      description:
        "FAQ officielle et réponses détaillées à toutes les questions sur l'immigration, les études et le travail au Canada.",
      url_en:
        'https://ircc.canada.ca/english/helpcentre/results-by-topic.asp?top=15',
    },
  ],
};
