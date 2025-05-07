// app/services/page.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos services – Lorraine Call Center",
};

export default function ServicesPage() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Nos services</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-2">Permanence téléphonique médicale</h2>
        <p className="mb-4">
          Notre quotidien est la gestion des plannings et la relation avec les patients. 
          Nous assurons une gestion complète de vos appels, du lundi au vendredi de 8h à 20h 
          et le samedi de 8h à 12h.
        </p>

        <h2 className="text-2xl font-semibold mb-2">Agenda médical en ligne</h2>
        <p className="mb-4">
          Grâce à nos partenaires Doctolib et Maiia, votre agenda est accessible partout et tout 
          le temps, via n’importe quel appareil, 24h/24 et 7j/7.
        </p>

        <h2 className="text-2xl font-semibold mb-2">Un service 100% personnalisé</h2>
        <p className="mb-4">
          Pré-décroché, accueil et boîte vocale personnalisés selon votre charte et vos besoins.
        </p>

        <h2 className="text-2xl font-semibold mb-2">Une équipe experte, rapide et à l’écoute</h2>
        <p className="mb-4">
          Nos secrétaires médicales diplômées mettent leur expertise à votre service, pour rassurer 
          et satisfaire vos patients en toutes circonstances.
        </p>

        <h2 className="text-2xl font-semibold mb-2">Connexion sécurisée via internet</h2>
        <p>
          Vos données sont hébergées sur des serveurs agréés, conformes RGPD, garantissant la confidentialité 
          de vos informations médicales.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-2">Tarification transparente</h2>
        <p className="mb-4">
          Une tarification claire et adaptée au volume d’appels et aux spécificités de votre cabinet.
        </p>

        <h2 className="text-2xl font-semibold mb-2">Domaines de spécialités</h2>
        <p className="mb-2 font-medium">Généralistes et Spécialistes :</p>
        <p className="mb-4">
          Médecin généraliste, cardiologue, dermatologue, gastro-entérologue, ORL, pneumologue, 
          gynécologue, pédiatre, psychiatre, radiologue, chirurgien… toutes spécialités.
        </p>
        <p className="mb-2 font-medium">Paramédical :</p>
        <p className="mb-4">
          Infirmier·ère, kinésithérapeute, orthophoniste, orthoptiste, psychomotricien·ne, 
          diététicien·ne, podologue…
        </p>
        <p className="mb-2 font-medium">Cliniques et Maisons de santé :</p>
        <p>
          Consultations médicales, imagerie, laboratoire d’analyses, urgences, CPTS…
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Nos forfaits</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-1">Forfait Fidélité</h3>
            <p>
              Pour les cabinets sans secrétaire ou souhaitant renforcer leur permanence téléphonique.  
              Disponibilité jusqu’à 64 h par semaine.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-1">Forfait Liberté</h3>
            <p>
              Solution flexible pour couvrir les absences de votre secrétaire, 
              avec une disponibilité modulable selon vos besoins.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-1">QR code & page personnalisée</h3>
            <p>
              Création de QR code redirigeant vos patients vers une page dédiée 
              à votre cabinet, pour faciliter la prise de rendez-vous.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
