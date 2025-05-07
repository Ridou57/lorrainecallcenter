// app/contact/page.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact – Lorraine Call Center",
};

export default function ContactPage() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Contactez-nous</h1>

      <p className="mb-6">
        Une question, une demande de devis ou besoin d’informations complémentaires ?  
        Remplissez le formulaire ci-dessous, nous vous répondrons dans les meilleurs délais.
      </p>

      <form
        action="https://formspree.io/f/TON_FORM_ID"
        method="POST"
        className="max-w-lg mx-auto space-y-4 mb-8"
      >
        <div>
          <label className="block mb-1">Nom et prénom</label>
          <input
            name="name"
            type="text"
            required
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block mb-1">Email</label>
          <input
            name="email"
            type="email"
            required
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block mb-1">Téléphone</label>
          <input
            name="phone"
            type="tel"
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block mb-1">Message</label>
          <textarea
            name="message"
            rows={4}
            required
            className="w-full border p-2 rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-primary text-white px-6 py-3 rounded"
        >
          Envoyer
        </button>
      </form>

      <div className="max-w-lg mx-auto space-y-4">
        <p>
          <strong>Paris & Île-de-France :</strong> 3 allée Hector Berlioz, 95130 Franconville<br />
          <strong>📞 03 87 00 33 50</strong>
        </p>
        <p>
          <strong>Province :</strong> 15 Rue du Parc, 57600 Forbach<br />
          <strong>📞 03 87 00 33 50</strong>
        </p>
      </div>
    </>
  );
}
