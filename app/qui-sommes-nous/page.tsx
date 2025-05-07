import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Qui sommes-nous – Lorraine Call Center",
};

export default function AboutPage() {
  return (
    <article className="prose prose-lg mx-auto py-16">
      <h1>Qui sommes-nous</h1>

      <h2>Le mot du fondateur</h2>
      <p>Madame, Monsieur,</p>
      <p>
        Je suis le fondateur et dirigeant de Lorraine Call Center, notre entreprise est
        spécialisée dans l’accueil téléphonique médical depuis 2000.
      </p>
      <p>
        Notre ambition est de vous simplifier la vie au cabinet tout en vous libérant du
        temps. Nous sommes convaincus que notre service contribue à améliorer votre
        organisation et la qualité des soins médicaux que vous délivrez.
      </p>
      <p>
        À l’heure de l’intelligence artificielle et des agendas en ligne, je suis persuadé
        que le lien téléphonique est un élément indispensable pour pérenniser la relation
        que vous avez avec vos patients.
      </p>
      <p className="font-semibold">KOUIDRI Bakhta</p>
      <p>Fondateur de Lorraine Call Center</p>

      <h2>Notre équipe</h2>
      <p>
        Le service de permanence téléphonique Lorraine Call Center vous offre une solution
        simple, professionnelle et efficace pour la gestion de votre cabinet médical.
      </p>
      <ol className="list-decimal pl-6 space-y-2">
        <li>Vos patients appellent</li>
        <li>Réponse personnalisée selon vos consignes</li>
        <li>Respect de votre charte qualité</li>
        <li>Notification immédiate</li>
      </ol>
      <p>
        Toutes nos secrétaires médicales sont formées en continu pour garantir rigueur,
        écoute et réactivité.
      </p>

      <h2>Notre charte de qualité</h2>
      <p>
        Secrétaires dédiées à votre dossier, hébergement RGPD, confidentialité garantie.
        Accueil personnalisé : 8 h–20 h (lun–ven), 8 h–12 h (sam), 64 h/semaine.
      </p>
    </article>
