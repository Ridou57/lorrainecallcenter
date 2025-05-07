import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact – Lorraine Call Center",
};

export default function ContactPage() {
  return (
    <article className="prose prose-lg mx-auto py-16">
      <h1>Contactez-nous</h1>

      <p>
        Une question, une demande de devis ou besoin d’informations complémentaires ? Remplissez
        le formulaire ci-dessous, nous vous répondrons dans les meilleurs délais.
      </p>

      <form
        action="https://formspree.io/f/TON_FORM_ID"
        method="POST"
        className="space-y-6"
      >
        <div>
          <label>Nom et prénom</label>
          <input name="name" type="text" required className="w-full border p-2 rounded" />
        </div>
        <div>
          <label>Email</label>
          <input name="email" type="email" required className="w-full border p-2 rounded" />
        </div>
        <div>
          <label>Téléphone</label>
          <input name="phone" type="tel" className="w-full border p-2 rounded" />
        </div>
        <div>
          <label>Message</label>
          <textarea name="message" rows={4} required className="w-full border p-2 rounded" />
        </div>
        <button type="submit" className="bg-primary text-white px-6 py-3 rounded">
          Envoyer
        </button>
      </form>

      <div>
        <h2>Nos coordonnées</h2>
        <p>
          <strong>Paris & Île-de-France :</strong><br />
          3 allée Hector Berlioz, 95130 Franconville<br />
          📞 03 87 00 33 50
        </p>
        <p>
          <strong>Province :</strong><br />
          15 Rue du Parc, 57600 Forbach<br />
          📞 03 87 00 33 50
        </p>
      </div>
    </article>
