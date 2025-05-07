export const metadata = {
  title: 'Nos Services – Lorraine Call Center',
};
export default function ServicesPage() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-4">Nos Services</h1>
      <p className="mb-6">
        Lorraine Call Center propose :
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Permanence téléphonique médicale 24/7</li>
        <li>Prise de rendez-vous en ligne</li>
        <li>Gestion des appels entrants et sortants</li>
        <li>Relance patients et encaissements</li>
        {/* Ajoute ici tes services supplémentaires */}
      </ul>
    </>
  );
}
