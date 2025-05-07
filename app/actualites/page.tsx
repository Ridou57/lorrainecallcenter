import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Actualités – Lorraine Call Center",
};

export default function NewsPage() {
  return (
    <article className="prose prose-lg mx-auto py-16">
      <h1>Actualités</h1>
      <ul className="space-y-4">
        <li>
          <Link href="/actualites/2025-05-01-nouveaux-horaires" className="text-primary hover:underline">
            📢 Nouveaux horaires d’ouverture – 1er mai 2025
          </Link>
        </li>
        <li>
          <Link href="/actualites/2025-04-10-lancement-service" className="text-primary hover:underline">
            🚀 Lancement de notre service en ligne – 10 avril 2025
          </Link>
        </li>
        <li>
          <Link href="/actualites/2025-03-15-participation-salon" className="text-primary hover:underline">
            📅 Salon Santé Expo – 15 mars 2025
          </Link>
        </li>
      </ul>
    </article>
