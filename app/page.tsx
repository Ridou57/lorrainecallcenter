import Link from 'next/link';

export default function HomePage() {
  return (
    <>

      {/* Hero */}
      <section className="relative bg-primary text-white">
        <div className="container mx-auto px-6 py-24 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Votre permanence téléphonique médicale de confiance
            </h1>
            <p className="text-lg md:text-xl">
              Depuis plus de 25 ans, nous prenons soin de vos patients 24h/24 et 7j/7,
              avec professionnalisme et réactivité.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-accent text-primary font-semibold px-8 py-3 rounded shadow hover:shadow-lg transition"
            >
              Demande de devis
            </Link>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0">
            {/* Image placeholder */}
            <div className="w-full h-64 bg-gray-200 rounded-lg" />
          </div>
        </div>
      </section>

      {/* Services clés */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center space-y-12">
          <h2 className="text-3xl font-bold">Nos services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4 p-6 border rounded-lg hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold">Permanence téléphonique médicale</h3>
              <p>Des secrétaires médicales diplômées répondent à vos appels 24/7.</p>
            </div>
            <div className="space-y-4 p-6 border rounded-lg hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold">Télésecrétariat (Doctolib & Maiia)</h3>
              <p>Gestion de vos agendas Doctolib et Maiia, prise de RDV en ligne.</p>
            </div>
            <div className="space-y-4 p-6 border rounded-lg hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold">Assistance & Support</h3>
              <p>Pré-décroché, messagerie vocale, relances et suivi personnalisé.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Centres d'appels */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-6 text-center space-y-8">
          <h2 className="text-3xl font-bold">Nos centres d’appels</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Paris / Franconville</h3>
              <p>3 allée Hector Berlioz, 95130 Franconville</p>
              <p>📞 08 00 80 07 83</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Metz / Lorraine</h3>
              <p>13 rue de Champagne, 57070 Metz</p>
              <p>📞 08 00 80 05 40</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistiques */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center grid md:grid-cols-3 gap-8">
          <div>
            <p className="text-5xl font-bold text-primary">25</p>
            <p>ans d’expérience</p>
          </div>
          <div>
            <p className="text-5xl font-bold text-primary">50+</p>
            <p>secrétaires médicales</p>
          </div>
          <div>
            <p className="text-5xl font-bold text-primary">100%</p>
            <p>de satisfaction client</p>
          </div>
        </div>
      </section>

      {/* Actualités */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Actualités</h2>
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
      </section>

      {/* Call-to-Action final */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Prêt à optimiser votre permanence ?</h2>
          <Link
            href="/contact"
            className="inline-block bg-accent text-primary font-semibold px-8 py-3 rounded shadow hover:shadow-lg transition"
          >
            Contactez-nous
          </Link>
        </div>
      </section>

    </>
  );
}
