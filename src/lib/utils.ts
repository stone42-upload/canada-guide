export const APPLE_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];
export const SPRING_POP: [number, number, number, number] = [
  0.34, 1.56, 0.64, 1,
];

export const fadeInUp = {
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: APPLE_EASE },
};

export const fadeInUpView = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: APPLE_EASE },
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export const staggerItem = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: APPLE_EASE },
};

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export function getUniversitySlug(name: string): string {
  return slugify(name);
}

export function getStepSlug(id: string): string {
  return id.replace('step_', '');
}

export function getPythonSlug(id: string): string {
  return id.replace('py_', '');
}
