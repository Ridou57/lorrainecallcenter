import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lorraine Call Center",
  description: "Centre d'Appels & Centre d'affaires – Permanence téléphonique médicale",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>
        {/* Header */}
        <header className="bg-primary text-white p-4">
          <div className="container flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col items-center md:items-start">
              <Link href="/" className="text-2xl font-bold">Lorraine Call Center</Link>
              <span className="text-sm italic mt-1">Centre d'Appels & Centre d'affaires</span>
            </div>
            <nav className="mt-4 md:mt-0 space-x-4 text-lg">
              <Link href="/">Accueil</Link>
              <Link href="/qui-sommes-nous">Qui sommes-nous</Link>
              <Link href="/services">Services</Link>
              <Link href="/partenaires">Nos partenaires</Link>
              <Link href="/actualites">Actualités</Link>
              <Link href="/faq">FAQ</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </div>
        </header>

        {/* Main */}
        <main className="flex-grow">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-100 text-gray-700 p-6">
          <div className="container flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm mb-4 md:mb-0">© {new Date().getFullYear()} Lorraine Call Center</div>
            <div className="space-x-6 text-sm">
              <a href="tel:03-87-00-33-50">📞 03 87 00 33 50</a>
              <a href="mailto:Infos@lorrainecallcenter.com">✉️ Infos@lorrainecallcenter.com</a>
              <a href="https://linkedin.com/in/LorraineCallCenter" target="_blank" rel="noopener noreferrer">
                🔗 LinkedIn
              </a>
            </div>
            <div className="mt-4 md:mt-0 text-sm">15 Rue du Parc, 57600 Forbach</div>
          </div>
        </footer>
      </body>
    </html>
  );
}
