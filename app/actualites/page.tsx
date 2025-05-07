import Link from 'next/link';

export const metadata = {
  title: 'Actualités – Lorraine Call Center',
};

export default function NewsPage() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-4">Actualités</h1>
      <ul className="space-y-4">
        <li>
          <Link href="/actualites/2025-05-01-nouveaux-horaires" className="text-blue-700 hover:underline">
            📢 Nouveaux horaires d’ouverture – 1er mai 2025
          </Link>
        </li>
        <li>
          <Link href="/actualites/2025-04-10-lancement-service" className="text-blue-700 hover:underline">
            🚀 Lancement de notre service de prise de rendez-vous en ligne – 10 avril 2025
          </Link>
        </li>
        <li>
          <Link href="/actualites/2025-03-15-participation-salon" className="text-blue-700 hover:underline">
            📅 Nous serons au Salon Santé Expo – 15 mars 2025
          </Link>
        </li>
      </ul>
    </>
  );
}
