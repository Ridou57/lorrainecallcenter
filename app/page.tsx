import Link from 'next/link';
import { Button } from '../components/Button';

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary text-white">
        <div className="container flex flex-col md:flex-row items-center py-24">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-5xl font-bold leading-tight">
              Votre permanence téléphonique médicale de confiance
            </h1>
            <p className="text-xl">
              Depuis plus de 25 ans, nous prenons soin de vos patients 24h/24 et 7j/7, avec professionnalisme et réactivité.
            </p>
            <Link href="/contact" passHref>
              <Button variant="primary">Demande de devis</Button>
            </Link>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0">
            <div className="w-full h-64 bg-gray-200 rounded-lg" />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-transparent pointer-events-none" />
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="container text-center space-y-12">
          <h2 className="text-3xl">Nos services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white border rounded-lg hover:shadow-lg transition prose">
              <h3>Permanence téléphonique médicale</h3>
              <p>Des secrétaires médicales diplômées répondent à vos appels 24/7.</p>
            </div>
            <div className="p-6 bg-white border rounded-lg hover:shadow-lg transition prose">
              <h3>Télésecrétariat (Doctolib & Maiia)</h3>
              <p>Gestion de vos agendas Doctolib et Maiia, prise de RDV en ligne.</p>
            </div>
            <div className="p-6 bg-white border rounded-lg hover:shadow-lg transition prose">
              <h3>Assistance & Support</h3>
              <p>Pré-décroché, messagerie vocale, relances et suivi personnalisé.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Centres */}
      <section className="bg-secondary py-16">
        <div className="container text-center space-y-8">
          <h2 className="text-3xl">Nos centres d’appels</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="prose">
              <h3>Paris / Franconville</h3>
              <p>3 allée Hector Berlioz, 95130 Franconville</p>
              <p>📞 08 00 80 07 83</p>
            </div>
            <div className="prose">
              <h3>Metz / Lorraine</h3>
              <p>13 rue de Champagne, 57070 Metz</p>
              <p>📞 08 00 80 05 40</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="container text-center grid md:grid-cols-3 gap-8">
          <div className="prose">
            <p className="text-6xl text-primary font-bold">25</p>
            <p>ans d’expérience</p>
          </div>
          <div className="prose">
            <p className="text-6xl text-primary font-bold">50+</p>
            <p>secrétaires médicales</p>
          </div>
          <div className="prose">
            <p className="text-6xl text-primary font-bold">100%</p>
            <p>de satisfaction client</p>
          </div>
        </div>
      </section>

      {/* Actualités */}
      <section className="bg-secondary py-16">
        <div className="container prose-lg">
          <h2 className="text-3xl text-center mb-8">Actualités</h2>
          <ul className="space-y-4 max-w-xl mx-auto">
            <li>
              <Link href="/actualites/2025-05-01-nouveaux-horaires" className="text-primary hover:underline">
                📢 Nouveaux horaires d’ouverture – 1er mai 2025
              </Link>
            </li>
            <li>
              <Link href="/actualites/2025-04-10-lancement-service" className="text-primary hover:underline">
                🚀 Lancement de notre service de prise de rendez-vous en ligne – 10 avril 2025
              </Link>
            </li>
            <li>
              <Link href="/actualites/2025-03-15-participation-salon" className="text-primary hover:underline">
                📅 Participation au Salon Santé Expo – 15 mars 2025
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-center mt-8">
          <Link href="/actualites" passHref>
            <Button variant="secondary">Voir toutes les actualités</Button>
          </Link>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-16">
        <div className="container text-center">
          <h2 className="text-3xl mb-4">Prêt à optimiser votre permanence ?</h2>
          <Link href="/contact" passHref>
            <Button variant="primary">Contactez-nous</Button>
          </Link>
        </div>
      </section>
    </>
  );
}
