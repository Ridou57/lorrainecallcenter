// app/page.tsx
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Accueil – Lorraine Call Center',
  description: 'Votre permanence téléphonique médicale de confiance',
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl font-bold mb-4">
              Votre permanence téléphonique médicale de confiance
            </h1>
            <p className="mb-6">
              Depuis plus de 25 ans, notre permanence téléphonique médicale met son
              expertise au service de l’accueil téléphonique et de la gestion des
              patients, alliant bien-être et efficience pour votre cabinet.
            </p>
            <Link
              href="/contact"
              className="bg-blue-700 text-white px-6 py-3 rounded"
            >
              Demander un devis
            </Link>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/images/hero-secretaire.jpg"
              alt="Secrétaire médicale"
              width={600}
              height={400}
              className="rounded"
            />
          </div>
        </div>
      </section>

      {/* Core Services Preview */}
      <section className="py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Découvrez nos services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border p-6 rounded">
              <h3 className="text-xl font-semibold mb-2">
                Permanence téléphonique médicale
              </h3>
              <p>
                Gestion complète de vos appels du lundi au vendredi de 8h à 20h et
                le samedi de 8h à 12h. Disponibilité, professionnalisme et écoute.
              </p>
            </div>
            <div className="border p-6 rounded">
              <h3 className="text-xl font-semibold mb-2">
                Télésecrétariat médical
              </h3>
              <p>
                Prise de rendez-vous en ligne et gestion d’agendas via Doctolib et
                Maiia, accessible 24h/24 et 7j/7 depuis tous vos appareils.
              </p>
            </div>
            <div className="border p-6 rounded">
              <h3 className="text-xl font-semibold mb-2">Assistance & Support</h3>
              <p>
                Service 100% personnalisé : pré-décroché, boîtes vocales et accueil
                adaptés à votre charte qualité.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call Centers Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-2">
              Paris et région parisienne
            </h2>
            <p>3 allée Hector Berlioz, 95130 Franconville</p>
            <p>Tél. : 0800 80 07 83</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">
              Metz, région Lorraine
            </h2>
            <p>13 rue de Champagne, 57070 Metz</p>
            <p>Tél. : 0800 80 05 40</p>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <h3 className="text-4xl font-bold">25</h3>
            <p>ans d&apos;expérience</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">50+</h3>
            <p>agents dédiés</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">100%</h3>
            <p>satisfaction client</p>
          </div>
        </div>
      </section>

      {/* News Preview */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Suivez nos actualités</h2>
          <ul className="space-y-4">
            <li>
              <Link href="/actualites" className="text-blue-700 hover:underline">
                Voir toutes les actualités
              </Link>
            </li>
          </ul>
        </div>
      </section>

      {/* Contact Call-to-Action */}
      <section className="py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Une question ? Une demande de devis ?
          </h2>
          <p className="mb-6">
            Contactez-nous via notre page dédiée ou appelez-nous selon votre région.
          </p>
          <Link
            href="/contact"
            className="bg-blue-700 text-white px-6 py-3 rounded"
          >
            Nous contacter
          </Link>
        </div>
      </section>
    </>
  );
}
