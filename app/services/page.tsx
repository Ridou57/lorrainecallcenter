import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos services – Lorraine Call Center",
};

export default function ServicesPage() {
  return (
    <article className="prose prose-lg mx-auto py-16">
      <h1>Nos services</h1>

      <h2>Permanence téléphonique médicale</h2>
      <p>
        Notre quotidien est la gestion des plannings et la relation avec les patients.
        Nous assurons une gestion complète de vos appels, du lundi au vendredi de 8 h à 20 h
        et le samedi de 8 h à 12 h.
      </p>

      <h2>Agenda médical en ligne</h2>
      <p>
        Grâce à nos partenaires Doctolib et Maiia, votre agenda est accessible partout et
        tout le temps, via n’importe quel appareil, 24 h/24 et 7 j/7.
      </p>

      <h2>Un service 100% personnalisé</h2>
      <p>
        Pré-décroché, accueil et boîte vocale personnalisés selon votre charte et vos besoins.
      </p>

      <h2>Équipe experte, rapide et à l’écoute</h2>
      <p>
        Nos secrétaires médicales diplômées mettent leur expertise à votre service, pour
        rassurer et satisfaire vos patients en toutes circonstances.
      </p>

      <h2>Connexion sécurisée via internet</h2>
      <p>
        Vos données sont hébergées sur des serveurs agréés, conformes RGPD, garantissant la
        confidentialité de vos informations médicales.
      </p>

      <h2>Tarification transparente</h2>
      <p>
        Une tarification claire et adaptée au volume d’appels et aux spécificités de votre cabinet.
      </p>

      <h2>Domaines de spécialités</h2>
      <ul>
        <li>Médecin généraliste, cardiologue, dermatologue, gastro-entérologue, ORL, pneumologue, gynécologue, pédiatre, psychiatre, radiologue, chirurgien…</li>
        <li>Infirmier·ère, kinésithérapeute, orthophoniste, orthoptiste, psychomotricien·ne, diététicien·ne, podologue…</li>
        <li>Clinique, laboratoire, urgences, CPTS…</li>
      </ul>

      <h2>Nos forfaits</h2>
      <dl>
        <dt>Forfait Fidélité</dt>
        <dd>Disponibilité jusqu’à 64 h par semaine, 6 jours/7.</dd>
        <dt>Forfait Liberté</dt> 
        <dd>Solution flexible pour couvrir les absences de votre secrétaire.</dd>
        <dt>QR code & page personnalisée</dt>
        <dd>Création d’un QR code et d’une page dédiée à votre cabinet.</dd>
      </dl>
    </article>
