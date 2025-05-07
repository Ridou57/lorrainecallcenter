import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos partenaires – Lorraine Call Center",
};

export default function PartnersPage() {
  return (
    <article className="prose prose-lg mx-auto py-16 text-center">
      <h1>Nos partenaires</h1>
      <p>
        Nous collaborons avec des acteurs majeurs du secteur médical pour vous offrir
        des solutions de prise de rendez-vous et d’organisation :
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
        <img src="/images/doctolib-logo.png" alt="Doctolib" className="mx-auto" />
        <img src="/images/maiia-logo.png" alt="Maiia" className="mx-auto" />
        <img src="/images/zoycode-logo.png" alt="Zoycode" className="mx-auto" />
        <img src="/images/autre-partenaire.png" alt="Partenaire" className="mx-auto" />
      </div>
    </article>

