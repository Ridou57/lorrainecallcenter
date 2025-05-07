export const metadata = {
  title: 'FAQ – Lorraine Call Center',
};

export default function FAQPage() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-4">Foire aux Questions</h1>
      <div className="space-y-4">
        <details className="border p-4 rounded">
          <summary className="font-medium cursor-pointer">
            Comment souscrire à vos services ?
          </summary>
          <p className="mt-2">
            Vous pouvez nous contacter via le formulaire en bas de page ou par téléphone au 01 23 45 67 89.
          </p>
        </details>
        <details className="border p-4 rounded">
          <summary className="font-medium cursor-pointer">
            Quels sont vos tarifs ?
          </summary>
          <p className="mt-2">
            Nous proposons plusieurs forfaits adaptés à vos besoins ; consultez la page <em>Services</em> pour plus de détails.
          </p>
        </details>
        {/* Ajoute ici d’autres questions/réponses selon tes besoins */}
      </div>
    </>
  );
}
