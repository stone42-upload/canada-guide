export interface Step {
  id: string;
  order: number;
  title: string;
  description: string;
  icon: string;
  cta_label: string;
}

export interface University {
  rank: number;
  name: string;
  province: string;
  score_global_pct: string;
  is_top_robotics: boolean;
  is_top_engineering: boolean;
  excellence_statement: string;
}

export interface FreePack {
  id: string;
  name: string;
  description: string;
  url: string;
  tags: string[];
}

export interface Certification {
  id: string;
  name: string;
  provider: string;
  description: string;
  url: string;
  level: string;
}

export interface Repo {
  id: string;
  name: string;
  author: string;
  description: string;
  url: string;
  stars: string;
}

export interface PythonResource {
  name: string;
  url: string;
  type: string;
}

export interface PythonModule {
  id: string;
  level: string;
  title: string;
  objective: string;
  duration_hours: number;
  topics: string[];
  resources: PythonResource[];
}

export interface StudentResources {
  free_packs: FreePack[];
  certifications: Certification[];
  recommended_repos: Repo[];
}

export interface PythonMasterclass {
  intro: string;
  modules: PythonModule[];
}

export interface SiteData {
  meta: {
    version: string;
    locale: string;
    last_updated: string;
    project: string;
  };
  immigration_steps: Step[];
  universities_ranking: University[];
  student_resources: StudentResources;
  python_masterclass: PythonMasterclass;
}
