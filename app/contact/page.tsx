export const metadata = {
  title: 'Contact – Lorraine Call Center',
};

export default function ContactPage() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-4">Contactez-nous</h1>
      <form
        action="https://formspree.io/f/TON_FORM_ID"
        method="POST"
        className="max-w-lg mx-auto space-y-4"
      >
        <div><label className="block mb-1">Nom et prénom</label>
        <input name="name" type="text" required className="w-full border p-2 rounded" /></div>
        <div><label className="block mb-1">Email</label>
        <input name="email" type="email" required className="w-full border p-2 rounded" /></div>
        <div><label className="block mb-1">Téléphone</label>
        <input name="phone" type="tel" className="w-full border p-2 rounded" /></div>
        <div><label className="block mb-1">Message</label>
        <textarea name="message" rows={5} required className="w-full border p-2 rounded" /></div>
        <button type="submit" className="bg-blue-700 text-white px-6 py-3 rounded">
          Envoyer
        </button>
      </form>
    </>
  );
}
