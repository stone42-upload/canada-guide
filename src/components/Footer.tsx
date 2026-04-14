'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { APPLE_EASE } from '@/lib/utils';

const FOOTER_LINKS = [
  { href: '/#etapes', label: 'Immigration' },
  { href: '/#universites', label: 'Universités' },
  { href: '/#ressources', label: 'Ressources' },
  { href: '/#python', label: 'Python' },
];

export default function Footer() {
  return (
    <footer className="py-16 border-t border-[#D2D2D7] dark:border-[#38383A]">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="font-display text-lg font-bold tracking-tight inline-block mb-3"
            >
              <span className="text-maple dark:text-maple-dark">🍁</span>{' '}
              CanadaGuide
            </Link>
            <p className="text-sm text-[#6E6E73] dark:text-[#A1A1A6] leading-relaxed max-w-[280px]">
              Votre parcours d&apos;immigration au Canada, simplifié. Guide
              complet, ressources premium, objectif atteint.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs text-[#86868B] dark:text-[#636366] uppercase tracking-wider font-medium mb-4">
              Navigation
            </p>
            <ul className="space-y-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#6E6E73] dark:text-[#A1A1A6] hover:text-maple dark:hover:text-maple-dark transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <p className="text-xs text-[#86868B] dark:text-[#636366] uppercase tracking-wider font-medium mb-4">
              Ressources
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.canada.ca/fr/immigration-refugies-citoyennete.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#6E6E73] dark:text-[#A1A1A6] hover:text-maple dark:hover:text-maple-dark transition-colors duration-300"
                >
                  IRCC officiel
                </a>
              </li>
              <li>
                <a
                  href="https://www.canada.ca/fr/immigration-refugies-citoyennete/services/entree-express.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#6E6E73] dark:text-[#A1A1A6] hover:text-maple dark:hover:text-maple-dark transition-colors duration-300"
                >
                  Entrée Express
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="text-xs text-[#86868B] dark:text-[#636366] uppercase tracking-wider font-medium mb-4">
              Informations
            </p>
            <p className="text-sm text-[#6E6E73] dark:text-[#A1A1A6] leading-relaxed">
              Ce site est un guide informatif indépendant. Il ne constitue pas
              un avis juridique en matière d&apos;immigration.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#D2D2D7] dark:border-[#38383A] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#86868B] dark:text-[#636366]">
            © 2026 Guide Immigration Canada. Tous droits réservés.
          </p>
          <p className="text-xs text-[#86868B] dark:text-[#636366]">
            Fait avec passion au Canada 🇨🇦
          </p>
        </div>
      </div>
    </footer>
  );
}
