/**
 * Comprehensive university data: tuition fees (CAD + FCFA), programs, and all official links.
 * FCFA conversion: 1 CAD ≈ 450 XAF (approximate April 2026).
 * All prices are for international students in CS/IT programs, per year.
 */

export const CAD_TO_FCFA = 450;

export interface TuitionInfo {
  program: string;
  cad_per_year: number;
  fcfa_per_year: number;
  notes?: string;
}

export interface UniLink {
  label: string;
  url: string;
  /** Category for grouping */
  category:
    | 'admission'
    | 'programme'
    | 'frais'
    | 'bourses'
    | 'international'
    | 'logement'
    | 'candidature'
    | 'coop'
    | 'autre';
}

export interface UniversityDetail {
  highlights: string[];
  programs: string[];
  researchAreas: string[];
  campusLife: string;
  tuition: TuitionInfo[];
  links: UniLink[];
}

export const UNIVERSITY_DETAILS: Record<number, UniversityDetail> = {
  // ─── 1. University of Toronto ────────────────────────────────────────
  1: {
    highlights: [
      "#1 au Canada pour l'IA et le machine learning",
      'Hôte du Vector Institute',
      'Plus de 700 programmes de recherche',
    ],
    programs: [
      'Computer Science (B.Sc.)',
      'Computer Engineering (B.A.Sc.)',
      'Data Science Specialist',
      'Artificial Intelligence Specialist',
      'Software Engineering Specialist',
    ],
    researchAreas: [
      'Deep Learning & réseaux neuronaux',
      'Robotique autonome',
      'Vision par ordinateur',
      'Traitement du langage naturel',
    ],
    campusLife:
      "Campus emblématique au cœur de Toronto. Accès direct à l'écosystème tech canadien, aux startups de MaRS et à une communauté étudiante de plus de 90 000 personnes.",
    tuition: [
      {
        program: 'Computer Science (B.Sc.)',
        cad_per_year: 58_680,
        fcfa_per_year: 58_680 * CAD_TO_FCFA,
      },
      {
        program: 'Computer Engineering (B.A.Sc.)',
        cad_per_year: 65_410,
        fcfa_per_year: 65_410 * CAD_TO_FCFA,
      },
    ],
    links: [
      {
        label: 'Département de Computer Science',
        url: 'https://web.cs.toronto.edu/',
        category: 'programme',
      },
      {
        label: 'Programme B.Sc. Computer Science',
        url: 'https://artsci.calendar.utoronto.ca/section/Computer-Science',
        category: 'programme',
      },
      {
        label: 'Admission — Futur étudiant',
        url: 'https://future.utoronto.ca/apply/',
        category: 'admission',
      },
      {
        label: 'Portail de candidature (OUAC)',
        url: 'https://www.ouac.on.ca/',
        category: 'candidature',
      },
      {
        label: 'Frais de scolarité détaillés',
        url: 'https://www.utoronto.ca/utogether/tuition',
        category: 'frais',
      },
      {
        label: 'Barème des frais par programme',
        url: 'https://studentaccount.utoronto.ca/tuition-fees/current-fall-winter-fee-refund-schedules/',
        category: 'frais',
      },
      {
        label: 'Bourses — Étudiants internationaux',
        url: 'https://future.utoronto.ca/finances/scholarships/',
        category: 'bourses',
      },
      {
        label: 'Lester B. Pearson Scholarship',
        url: 'https://future.utoronto.ca/pearson/',
        category: 'bourses',
      },
      {
        label: 'Étudiants internationaux',
        url: 'https://future.utoronto.ca/international/',
        category: 'international',
      },
      {
        label: 'Résidences & logement',
        url: 'https://studentlife.utoronto.ca/task/find-housing/',
        category: 'logement',
      },
      {
        label: 'Vector Institute (IA)',
        url: 'https://vectorinstitute.ai/',
        category: 'autre',
      },
    ],
  },

  // ─── 2. UBC ──────────────────────────────────────────────────────────
  2: {
    highlights: [
      'Top 3 mondial en sciences environnementales',
      'Partenariats avec 20+ hôpitaux',
      'Campus vue océan à Vancouver',
    ],
    programs: [
      'Computer Science (B.Sc.)',
      'Computer Engineering (B.A.Sc.)',
      'Cognitive Systems',
      'Data Science',
      'Electrical Engineering',
    ],
    researchAreas: [
      'Robotique douce',
      'Systèmes embarqués critiques',
      'Énergie propre',
      'Biotechnologie',
    ],
    campusLife:
      "Situé sur la pointe ouest de Vancouver avec vue sur l'océan et les montagnes. Un environnement d'étude incomparable avec accès à la nature et à la tech.",
    tuition: [
      {
        program: 'Computer Science (B.Sc.)',
        cad_per_year: 44_091,
        fcfa_per_year: 44_091 * CAD_TO_FCFA,
      },
      {
        program: 'Computer Engineering (B.A.Sc.)',
        cad_per_year: 54_987,
        fcfa_per_year: 54_987 * CAD_TO_FCFA,
      },
    ],
    links: [
      {
        label: 'Département Computer Science',
        url: 'https://www.cs.ubc.ca/',
        category: 'programme',
      },
      {
        label: 'Programme B.Sc. Computer Science',
        url: 'https://www.cs.ubc.ca/students/undergrad/programs',
        category: 'programme',
      },
      {
        label: 'Admission UBC',
        url: 'https://you.ubc.ca/applying-ubc/',
        category: 'admission',
      },
      {
        label: 'Portail de candidature',
        url: 'https://account.you.ubc.ca/s/login',
        category: 'candidature',
      },
      {
        label: 'Frais de scolarité',
        url: 'https://students.ubc.ca/enrolment/finances/tuition-fees',
        category: 'frais',
      },
      {
        label: 'Estimateur de coûts 1ère année',
        url: 'https://you.ubc.ca/financial-planning/cost/',
        category: 'frais',
      },
      {
        label: 'Bourses internationales',
        url: 'https://you.ubc.ca/financial-planning/scholarships-awards-international-students/',
        category: 'bourses',
      },
      {
        label: 'International Major Entrance Scholarship',
        url: 'https://you.ubc.ca/financial-planning/scholarships-awards-international-students/international-major-entrance-scholarship/',
        category: 'bourses',
      },
      {
        label: 'Étudiants internationaux',
        url: 'https://you.ubc.ca/international/',
        category: 'international',
      },
      {
        label: 'Résidences',
        url: 'https://vancouver.housing.ubc.ca/',
        category: 'logement',
      },
    ],
  },

  // ─── 3. McGill ───────────────────────────────────────────────────────
  3: {
    highlights: [
      'Université bilingue de prestige mondial',
      'Centre de machines intelligentes',
      '#1 au Québec pour la recherche',
    ],
    programs: [
      'Computer Science (B.Sc.)',
      'Software Engineering (B.Eng.)',
      'Computer Engineering (B.Eng.)',
      'Artificial Intelligence (Minor)',
      'Statistics & Computer Science',
    ],
    researchAreas: [
      'Machines intelligentes',
      'Génie aérospatial avancé',
      'Neurosciences computationnelles',
      'Matériaux avancés',
    ],
    campusLife:
      "Au cœur de Montréal, McGill offre un mélange unique de culture francophone et anglophone. Vie étudiante riche avec accès aux festivals, à la gastronomie et à l'industrie tech en plein essor.",
    tuition: [
      {
        program: 'Computer Science (B.Sc.)',
        cad_per_year: 27_100,
        fcfa_per_year: 27_100 * CAD_TO_FCFA,
        notes: 'Frais déréglementés (non-québécois/non-canadien)',
      },
      {
        program: 'Software Engineering (B.Eng.)',
        cad_per_year: 32_550,
        fcfa_per_year: 32_550 * CAD_TO_FCFA,
      },
    ],
    links: [
      {
        label: 'École de Computer Science',
        url: 'https://www.cs.mcgill.ca/',
        category: 'programme',
      },
      {
        label: 'Programme B.Sc. Computer Science',
        url: 'https://www.mcgill.ca/study/2025-2026/faculties/science/undergraduate/programs/bachelor-science-bsc-major-computer-science',
        category: 'programme',
      },
      {
        label: 'Admission 1er cycle',
        url: 'https://www.mcgill.ca/undergraduate-admissions/',
        category: 'admission',
      },
      {
        label: 'Portail de candidature',
        url: 'https://www.mcgill.ca/undergraduate-admissions/apply',
        category: 'candidature',
      },
      {
        label: 'Frais de scolarité',
        url: 'https://www.mcgill.ca/student-accounts/tuition-charges',
        category: 'frais',
      },
      {
        label: 'Calculateur de frais',
        url: 'https://www.mcgill.ca/student-accounts/tuition-charges/tuition-estimate',
        category: 'frais',
      },
      {
        label: 'Bourses & aide financière',
        url: 'https://www.mcgill.ca/studentaid/scholarships-aid',
        category: 'bourses',
      },
      {
        label: "Bourse d'entrée One Planet",
        url: 'https://www.mcgill.ca/undergraduate-admissions/finances/one-planet',
        category: 'bourses',
      },
      {
        label: 'Étudiants internationaux',
        url: 'https://www.mcgill.ca/internationalstudents/',
        category: 'international',
      },
      {
        label: 'Résidences McGill',
        url: 'https://www.mcgill.ca/housing/',
        category: 'logement',
      },
      {
        label: 'MILA — Institut IA de Montréal',
        url: 'https://mila.quebec/',
        category: 'autre',
      },
    ],
  },

  // ─── 4. Waterloo ─────────────────────────────────────────────────────
  4: {
    highlights: [
      '#1 au Canada pour le co-op',
      'Partenariats Google, Tesla, BlackBerry',
      "Taux d'emploi post-diplôme de 98%",
    ],
    programs: [
      'Computer Science (B.CS.)',
      'Software Engineering (B.SE.)',
      'Computer Engineering (B.A.Sc.)',
      'Data Science (B.CS.)',
      'Mechatronics Engineering',
    ],
    researchAreas: [
      'Intelligence artificielle appliquée',
      'Cybersécurité',
      'Quantum computing',
      'Véhicules autonomes',
    ],
    campusLife:
      'Le programme co-op de Waterloo est légendaire — alternance travail-études avec les plus grandes entreprises tech au monde. Tremplin direct vers la Silicon Valley.',
    tuition: [
      {
        program: 'Computer Science (B.CS.) — co-op',
        cad_per_year: 62_400,
        fcfa_per_year: 62_400 * CAD_TO_FCFA,
        notes: 'Inclut les frais co-op. Revenus co-op moyens : 22 000 $/terme',
      },
      {
        program: 'Software Engineering (B.SE.)',
        cad_per_year: 66_800,
        fcfa_per_year: 66_800 * CAD_TO_FCFA,
      },
    ],
    links: [
      {
        label: 'Cheriton School of Computer Science',
        url: 'https://cs.uwaterloo.ca/',
        category: 'programme',
      },
      {
        label: 'Programme Computer Science',
        url: 'https://uwaterloo.ca/future-students/programs/computer-science',
        category: 'programme',
      },
      {
        label: 'Programme Software Engineering',
        url: 'https://uwaterloo.ca/future-students/programs/software-engineering',
        category: 'programme',
      },
      {
        label: 'Admission',
        url: 'https://uwaterloo.ca/future-students/admissions',
        category: 'admission',
      },
      {
        label: "Exigences d'admission",
        url: 'https://uwaterloo.ca/future-students/admissions/admission-requirements',
        category: 'admission',
      },
      {
        label: 'Portail de candidature (OUAC)',
        url: 'https://www.ouac.on.ca/',
        category: 'candidature',
      },
      {
        label: 'Frais de scolarité 1ère année',
        url: 'https://uwaterloo.ca/future-students/financing/tuition',
        category: 'frais',
      },
      {
        label: 'Calculateur de coûts',
        url: 'https://uwaterloo.ca/future-students/financing/cost-calculator',
        category: 'frais',
      },
      {
        label: 'Bourses',
        url: 'https://uwaterloo.ca/future-students/financing/scholarships',
        category: 'bourses',
      },
      {
        label: 'Étudiants internationaux',
        url: 'https://uwaterloo.ca/future-students/international',
        category: 'international',
      },
      {
        label: 'Co-op — Alternance travail-études',
        url: 'https://uwaterloo.ca/future-students/co-op',
        category: 'coop',
      },
      {
        label: 'Résidences',
        url: 'https://uwaterloo.ca/housing/',
        category: 'logement',
      },
    ],
  },

  // ─── 5. Université de Montréal ────────────────────────────────────────
  5: {
    highlights: [
      'Siège du Mila (Yoshua Bengio)',
      "Plus grand institut d'IA au monde",
      'Excellence en recherche fondamentale',
    ],
    programs: [
      'Baccalauréat en informatique',
      'Baccalauréat en mathématiques et informatique',
      'Maîtrise en informatique (IA)',
      'Bio-informatique',
      'Certificat en cybersécurité',
    ],
    researchAreas: [
      'Apprentissage profond',
      'IA responsable',
      'Modèles génératifs',
      'Apprentissage par renforcement',
    ],
    campusLife:
      "Campus moderne dans le quartier Côte-des-Neiges de Montréal. Proximité avec le Mila et l'écosystème IA montréalais qui attire les meilleurs chercheurs du monde.",
    tuition: [
      {
        program: 'Baccalauréat en informatique',
        cad_per_year: 24_300,
        fcfa_per_year: 24_300 * CAD_TO_FCFA,
        notes:
          "Tarif international. Possibilité d'exemption partielle pour certains pays francophones.",
      },
    ],
    links: [
      {
        label: "DIRO — Département d'informatique",
        url: 'https://diro.umontreal.ca/',
        category: 'programme',
      },
      {
        label: 'Bacc. informatique — Fiche programme',
        url: 'https://admission.umontreal.ca/programmes/baccalaureat-en-informatique/',
        category: 'programme',
      },
      {
        label: 'Admission UdeM',
        url: 'https://admission.umontreal.ca/',
        category: 'admission',
      },
      {
        label: "Déposer une demande d'admission",
        url: 'https://admission.umontreal.ca/admission/deposer-une-demande-dadmission/',
        category: 'candidature',
      },
      {
        label: 'Droits de scolarité',
        url: 'https://registraire.umontreal.ca/droits-de-scolarite/',
        category: 'frais',
      },
      {
        label: "Bourses d'études",
        url: 'https://bourses.umontreal.ca/',
        category: 'bourses',
      },
      {
        label: 'Exemption de frais de scolarité (pays francophones)',
        url: 'https://registraire.umontreal.ca/droits-de-scolarite/exemptions/',
        category: 'bourses',
      },
      {
        label: 'Bureau international',
        url: 'https://international.umontreal.ca/',
        category: 'international',
      },
      {
        label: 'Résidences UdeM',
        url: 'https://residences.umontreal.ca/',
        category: 'logement',
      },
      {
        label: "Mila — Institut québécois d'IA",
        url: 'https://mila.quebec/',
        category: 'autre',
      },
    ],
  },

  // ─── 6. University of Alberta ─────────────────────────────────────────
  6: {
    highlights: [
      'Alberta Machine Intelligence Institute (Amii)',
      'Leader mondial en RL',
      'Écosystème énergie + tech',
    ],
    programs: [
      'Computing Science (B.Sc.)',
      'Computer Engineering (B.Sc. Eng.)',
      'Software Engineering Specialization',
      'Data Science',
      'Artificial Intelligence Specialization',
    ],
    researchAreas: [
      'Reinforcement learning',
      "IA pour l'énergie",
      'Robotique industrielle',
      'Data science',
    ],
    campusLife:
      "Edmonton offre un coût de vie abordable et un accès direct à l'industrie des ressources naturelles. Campus de classe mondiale avec des installations de recherche de pointe.",
    tuition: [
      {
        program: 'Computing Science (B.Sc.)',
        cad_per_year: 38_200,
        fcfa_per_year: 38_200 * CAD_TO_FCFA,
      },
      {
        program: 'Computer Engineering (B.Sc. Eng.)',
        cad_per_year: 42_700,
        fcfa_per_year: 42_700 * CAD_TO_FCFA,
      },
    ],
    links: [
      {
        label: 'Département Computing Science',
        url: 'https://www.ualberta.ca/en/computing-science/',
        category: 'programme',
      },
      {
        label: 'Programme Computing Science',
        url: 'https://www.ualberta.ca/en/computing-science/undergraduate-studies/',
        category: 'programme',
      },
      {
        label: 'Admission',
        url: 'https://www.ualberta.ca/en/admissions/',
        category: 'admission',
      },
      {
        label: 'Postuler en ligne',
        url: 'https://www.ualberta.ca/en/admissions/apply/',
        category: 'candidature',
      },
      {
        label: 'Frais de scolarité',
        url: 'https://www.ualberta.ca/en/admissions/tuition-and-scholarships/tuition-and-fees.html',
        category: 'frais',
      },
      {
        label: 'Frais internationaux détaillés',
        url: 'https://www.ualberta.ca/en/admissions/tuition-and-scholarships/international-tuition-and-fees.html',
        category: 'frais',
      },
      {
        label: "Bourses d'entrée",
        url: 'https://www.ualberta.ca/en/admissions/tuition-and-scholarships/entrance-scholarships/',
        category: 'bourses',
      },
      {
        label: 'Étudiants internationaux',
        url: 'https://www.ualberta.ca/en/admissions/international/',
        category: 'international',
      },
      {
        label: 'Résidences',
        url: 'https://www.ualberta.ca/en/residence/',
        category: 'logement',
      },
      {
        label: 'Amii — Alberta Machine Intelligence',
        url: 'https://www.amii.ca/',
        category: 'autre',
      },
    ],
  },

  // ─── 7. McMaster ──────────────────────────────────────────────────────
  7: {
    highlights: [
      'Pionnier du problem-based learning',
      'Centre de fabrication additive',
      'Innovation industrie 4.0',
    ],
    programs: [
      'Computer Science (B.A.Sc.)',
      'Software Engineering (B.Eng.)',
      'Mechatronics Engineering',
      'Computer Engineering',
      'Electrical Engineering',
    ],
    researchAreas: [
      'Fabrication additive',
      'Matériaux avancés',
      'Santé numérique',
      'Énergie nucléaire',
    ],
    campusLife:
      'À Hamilton, à 1h de Toronto. McMaster combine excellence académique et approche pratique. Communauté soudée avec un fort esprit de collaboration.',
    tuition: [
      {
        program: 'Computer Science (B.A.Sc.)',
        cad_per_year: 52_435,
        fcfa_per_year: 52_435 * CAD_TO_FCFA,
      },
      {
        program: 'Software Engineering (B.Eng.)',
        cad_per_year: 58_000,
        fcfa_per_year: 58_000 * CAD_TO_FCFA,
      },
    ],
    links: [
      {
        label: 'Faculty of Engineering',
        url: 'https://www.eng.mcmaster.ca/',
        category: 'programme',
      },
      {
        label: 'Département Computing & Software',
        url: 'https://www.eng.mcmaster.ca/cas/',
        category: 'programme',
      },
      {
        label: 'Futurs étudiants',
        url: 'https://future.mcmaster.ca/',
        category: 'admission',
      },
      {
        label: 'Comment postuler',
        url: 'https://future.mcmaster.ca/how-to-apply/',
        category: 'candidature',
      },
      {
        label: 'Portail OUAC',
        url: 'https://www.ouac.on.ca/',
        category: 'candidature',
      },
      {
        label: 'Frais de scolarité',
        url: 'https://registrar.mcmaster.ca/tuition-fees/',
        category: 'frais',
      },
      {
        label: 'Bourses & aide financière',
        url: 'https://registrar.mcmaster.ca/aid-awards/',
        category: 'bourses',
      },
      {
        label: 'Étudiants internationaux',
        url: 'https://future.mcmaster.ca/international/',
        category: 'international',
      },
      {
        label: 'Résidences',
        url: 'https://housing.mcmaster.ca/',
        category: 'logement',
      },
    ],
  },

  // ─── 8. Université d'Ottawa ───────────────────────────────────────────
  8: {
    highlights: [
      'Seule université bilingue G7',
      'Capitale fédérale = accès gouvernemental',
      'Hub cybersécurité',
    ],
    programs: [
      'Informatique (B.Sc.) — bilingue',
      'Génie informatique (B.A.Sc.)',
      'Génie logiciel (B.A.Sc.)',
      'Cybersécurité',
      'Science des données',
    ],
    researchAreas: [
      'Cybersécurité',
      'Politiques technologiques',
      'Photonique',
      'Énergie durable',
    ],
    campusLife:
      "Au cœur d'Ottawa, la capitale. Accès unique aux institutions fédérales, ambassades et organismes technologiques. Parfait pour qui veut combiner tech et politique publique.",
    tuition: [
      {
        program: 'Informatique (B.Sc.)',
        cad_per_year: 50_561,
        fcfa_per_year: 50_561 * CAD_TO_FCFA,
      },
      {
        program: 'Génie informatique (B.A.Sc.)',
        cad_per_year: 55_000,
        fcfa_per_year: 55_000 * CAD_TO_FCFA,
      },
    ],
    links: [
      {
        label: 'EECS — Génie électrique & informatique',
        url: 'https://www.uottawa.ca/faculty-engineering/school-electrical-engineering-computer-science',
        category: 'programme',
      },
      {
        label: 'Programme B.Sc. Informatique',
        url: 'https://catalogue.uottawa.ca/en/undergrad/honours-bsc-computer-science/',
        category: 'programme',
      },
      {
        label: 'Admission 1er cycle',
        url: 'https://www.uottawa.ca/undergraduate-admissions/',
        category: 'admission',
      },
      {
        label: 'Postuler',
        url: 'https://www.uottawa.ca/undergraduate-admissions/apply',
        category: 'candidature',
      },
      {
        label: 'Frais universitaires',
        url: 'https://www.uottawa.ca/university-fees/',
        category: 'frais',
      },
      {
        label: 'Bourses & aide financière',
        url: 'https://www.uottawa.ca/financial-aid-awards/',
        category: 'bourses',
      },
      {
        label: "Bourse d'admission automatique",
        url: 'https://www.uottawa.ca/financial-aid-awards/scholarships-bursaries-aid/entrance-admission-scholarships',
        category: 'bourses',
      },
      {
        label: 'Étudiants internationaux',
        url: 'https://www.uottawa.ca/international/',
        category: 'international',
      },
      {
        label: 'Résidences',
        url: 'https://www.uottawa.ca/housing/',
        category: 'logement',
      },
      {
        label: "Régime d'immersion en français",
        url: 'https://www.uottawa.ca/french-immersion/',
        category: 'autre',
      },
    ],
  },

  // ─── 9. Queen's ──────────────────────────────────────────────────────
  9: {
    highlights: [
      'Excellence en génie minier',
      'Communauté étudiante très soudée',
      'Mentorat de haut niveau',
    ],
    programs: [
      'Computing (B.Comp.)',
      'Computer Engineering (B.A.Sc.)',
      'Software Design (Specialization)',
      'Electrical & Computer Engineering',
      'Data Analytics',
    ],
    researchAreas: [
      'Ingénierie des systèmes complexes',
      'Exploitation minière durable',
      'Robotique de terrain',
      'Matériaux',
    ],
    campusLife:
      "Kingston, petite ville universitaire au bord du lac Ontario. Queen's est réputée pour son esprit communautaire exceptionnel et ses traditions étudiantes centenaires.",
    tuition: [
      {
        program: 'Computing (B.Comp.)',
        cad_per_year: 55_567,
        fcfa_per_year: 55_567 * CAD_TO_FCFA,
      },
      {
        program: 'Computer Engineering (B.A.Sc.)',
        cad_per_year: 58_300,
        fcfa_per_year: 58_300 * CAD_TO_FCFA,
      },
    ],
    links: [
      {
        label: 'School of Computing',
        url: 'https://www.cs.queensu.ca/',
        category: 'programme',
      },
      {
        label: 'Programme B.Comp.',
        url: 'https://www.cs.queensu.ca/undergraduate/programs/',
        category: 'programme',
      },
      {
        label: "Admission Queen's",
        url: 'https://www.queensu.ca/admission/',
        category: 'admission',
      },
      {
        label: 'Postuler (OUAC)',
        url: 'https://www.ouac.on.ca/',
        category: 'candidature',
      },
      {
        label: 'Frais de scolarité',
        url: 'https://www.queensu.ca/registrar/tuition-fees',
        category: 'frais',
      },
      {
        label: 'Aide financière',
        url: 'https://www.queensu.ca/registrar/financial-aid',
        category: 'bourses',
      },
      {
        label: 'Étudiants internationaux',
        url: 'https://www.queensu.ca/admission/international',
        category: 'international',
      },
      {
        label: 'Résidences',
        url: 'https://residences.queensu.ca/',
        category: 'logement',
      },
    ],
  },

  // ─── 10. University of Calgary ────────────────────────────────────────
  10: {
    highlights: [
      'Schulich School of Engineering',
      'Énergie propre + robotique terrain',
      'Investissements massifs en R&D',
    ],
    programs: [
      'Computer Science (B.Sc.)',
      'Software Engineering (B.Sc.)',
      'Electrical Engineering (B.Sc.)',
      'Data Science & Analytics',
      'Biomedical Engineering',
    ],
    researchAreas: [
      'Énergie propre',
      'Robotique de terrain',
      'Géosciences',
      'Innovation pétrolière',
    ],
    campusLife:
      "Calgary : ville dynamique au pied des Rocheuses. Coût de vie raisonnable, qualité de vie exceptionnelle et proximité avec l'industrie des ressources naturelles et de l'énergie.",
    tuition: [
      {
        program: 'Computer Science (B.Sc.)',
        cad_per_year: 33_461,
        fcfa_per_year: 33_461 * CAD_TO_FCFA,
      },
      {
        program: 'Software Engineering (B.Sc.)',
        cad_per_year: 36_200,
        fcfa_per_year: 36_200 * CAD_TO_FCFA,
      },
    ],
    links: [
      {
        label: 'Département Computer Science',
        url: 'https://science.ucalgary.ca/computer-science',
        category: 'programme',
      },
      {
        label: 'Schulich School of Engineering',
        url: 'https://schulich.ucalgary.ca/',
        category: 'programme',
      },
      {
        label: 'Explorer les programmes',
        url: 'https://www.ucalgary.ca/future-students/undergraduate/explore-programs/computer-science',
        category: 'programme',
      },
      {
        label: 'Futurs étudiants',
        url: 'https://www.ucalgary.ca/future-students/',
        category: 'admission',
      },
      {
        label: 'Postuler en ligne',
        url: 'https://www.ucalgary.ca/future-students/undergraduate/apply',
        category: 'candidature',
      },
      {
        label: 'Frais de scolarité',
        url: 'https://www.ucalgary.ca/pubs/calendar/current/p-1.html',
        category: 'frais',
      },
      {
        label: "Bourses d'entrée",
        url: 'https://www.ucalgary.ca/future-students/undergraduate/awards',
        category: 'bourses',
      },
      {
        label: 'International Students Entrance Scholarship',
        url: 'https://www.ucalgary.ca/future-students/undergraduate/awards/international',
        category: 'bourses',
      },
      {
        label: 'Étudiants internationaux',
        url: 'https://www.ucalgary.ca/future-students/international',
        category: 'international',
      },
      {
        label: 'Résidences',
        url: 'https://www.ucalgary.ca/ancillary/residence',
        category: 'logement',
      },
    ],
  },
};

/** Labels for link categories (for display) */
export const LINK_CATEGORY_LABELS: Record<UniLink['category'], string> = {
  admission: 'Admission',
  programme: 'Programme',
  frais: 'Frais de scolarité',
  bourses: 'Bourses & aide',
  international: 'International',
  logement: 'Logement',
  candidature: 'Candidature',
  coop: 'Co-op',
  autre: 'Autre',
};

/** Color styles for link categories */
export const LINK_CATEGORY_STYLES: Record<UniLink['category'], string> = {
  admission:
    'bg-frost/10 text-frost dark:bg-frost-dark/15 dark:text-frost-dark',
  programme:
    'bg-maple/10 text-maple dark:bg-maple-dark/15 dark:text-maple-dark',
  frais:
    'bg-warning/10 text-warning dark:bg-warning-dark/15 dark:text-warning-dark',
  bourses:
    'bg-success/10 text-success dark:bg-success-dark/15 dark:text-success-dark',
  international:
    'bg-purple-500/10 text-purple-600 dark:bg-purple-400/15 dark:text-purple-400',
  logement:
    'bg-cyan-500/10 text-cyan-600 dark:bg-cyan-400/15 dark:text-cyan-400',
  candidature:
    'bg-frost/10 text-frost dark:bg-frost-dark/15 dark:text-frost-dark',
  coop: 'bg-orange-500/10 text-orange-600 dark:bg-orange-400/15 dark:text-orange-400',
  autre:
    'bg-[#86868B]/10 text-[#86868B] dark:bg-[#636366]/15 dark:text-[#636366]',
};

/** Format price with spaces as thousand separator */
export function formatCAD(amount: number): string {
  return amount.toLocaleString('fr-CA', {
    style: 'currency',
    currency: 'CAD',
    maximumFractionDigits: 0,
  });
}

export function formatFCFA(amount: number): string {
  return amount.toLocaleString('fr-FR', { maximumFractionDigits: 0 }) + ' FCFA';
}
