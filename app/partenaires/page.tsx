export const metadata = {
  title: 'Nos partenaires – Lorraine Call Center',
};

export default function PartnersPage() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-4">Nos partenaires</h1>
      <p className="mb-6">
        Nous collaborons avec des acteurs majeurs du secteur médical pour vous
        offrir des solutions de prise de rendez-vous et d’organisation :
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
        {/* Remplace ces images dans public/images si besoin */}
        <img src="/images/doctolib-logo.png" alt="Doctolib" className="mx-auto" />
        <img src="/images/maiia-logo.png" alt="Maiia" className="mx-auto" />
        <img src="/images/zoycode-logo.png" alt="Zoycode" className="mx-auto" />
        <img src="/images/autre-partenaire.png" alt="Partenaire" className="mx-auto" />
      </div>
    </>
  );
}
