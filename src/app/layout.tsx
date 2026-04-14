import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Immigrer au Canada — Guide Complet & Universités Tech 2026',
    template: '%s | CanadaGuide',
  },
  description:
    "Votre parcours d'immigration au Canada simplifié. Classement des meilleures universités en robotique, ressources gratuites et masterclass Python.",
  metadataBase: new URL('https://canadaguide.ca'),
  openGraph: {
    title: 'Immigrer au Canada — Guide Complet 2026',
    description:
      '5 étapes clés, Top 10 universités tech, ressources gratuites pour étudiants.',
    locale: 'fr_CA',
    type: 'website',
    siteName: 'CanadaGuide',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Immigrer au Canada — Guide Complet 2026',
    description:
      '5 étapes clés, Top 10 universités tech, ressources gratuites pour étudiants.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr-CA"
      className={`scroll-smooth ${inter.variable} ${outfit.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Prevent theme flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"||(!t&&matchMedia("(prefers-color-scheme:dark)").matches)){document.documentElement.classList.add("dark")}}catch(e){}})()`,
          }}
        />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'WebSite',
                  name: 'CanadaGuide',
                  url: 'https://canadaguide.ca',
                  description:
                    'Guide complet pour immigrer au Canada en 2026 — étapes, universités, ressources et masterclass Python.',
                  inLanguage: 'fr-CA',
                  potentialAction: {
                    '@type': 'SearchAction',
                    target: 'https://canadaguide.ca/?q={search_term_string}',
                    'query-input': 'required name=search_term_string',
                  },
                },
                {
                  '@type': 'EducationalOrganization',
                  name: 'CanadaGuide',
                  url: 'https://canadaguide.ca',
                  description:
                    'Plateforme éducative pour les étudiants internationaux souhaitant immigrer au Canada.',
                  areaServed: 'CA',
                },
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-[#FAFAFA] dark:bg-black text-[#1D1D1F] dark:text-[#F5F5F7] font-body antialiased transition-colors duration-300">
        <ThemeProvider>
          <a href="#main-content" className="skip-to-content">
            Aller au contenu principal
          </a>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
