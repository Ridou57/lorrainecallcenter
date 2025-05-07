import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ – Lorraine Call Center",
};

export default function FAQPage() {
  return (
    <article className="prose prose-lg mx-auto py-16">
      <h1>Foire aux Questions</h1>

      <details className="border p-4 rounded mb-4">
        <summary className="font-medium cursor-pointer">Comment fonctionne votre plateforme ?</summary>
        <p className="mt-2">
          Notre équipe de secrétaires prend en charge vos appels selon vos consignes,
          24/7, pour un accueil professionnel et personnalisé.
        </p>
      </details>
      <details className="border p-4 rounded mb-4">
        <summary className="font-medium cursor-pointer">Quels sont les avantages ?</summary>
        <p className="mt-2">
          Réduction de la charge administrative, disponibilité accrue, image pro,
          organisation optimisée des rendez-vous.
        </p>
      </details>
      <details className="border p-4 rounded mb-4">
        <summary className="font-medium cursor-pointer">Le service est-il personnalisable ?</summary>
        <p className="mt-2">
          Oui, scripts et protocoles sont adaptés à votre charte qualité pour un service sur-mesure.
        </p>
      </details>
      <details className="border p-4 rounded">
        <summary className="font-medium cursor-pointer">Quelles spécialités couvrez-vous ?</summary>
        <p className="mt-2">
          Généralistes, spécialistes (cardiologie, dermatologie…), paramédical (kiné, infirmier…),
          cliniques, laboratoires, urgences.
        </p>
      </details>
    </article>
