// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lorraine Call Center",
  description: "Accueil, services et FAQ de Lorraine Call Center",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        {/* Header */}
        <header className="bg-blue-700 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">
              Lorraine Call Center
            </Link>
            <nav className="space-x-4">
              <Link href="/" className="hover:underline">
                Accueil
              </Link>
              <Link href="/services" className="hover:underline">
                Services
              </Link>
              <Link href="/faq" className="hover:underline">
                FAQ
              </Link>
            </nav>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-grow container mx-auto p-4">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-200 text-center p-4">
          © {new Date().getFullYear()} Lorraine Call Center — Tous droits réservés
        </footer>
      </body>
    </html>
  );
}
