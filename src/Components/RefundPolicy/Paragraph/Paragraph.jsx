export default function Paragraph() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">

        {/* General Policy */}
        <section>
          <h2 className="text-3xl font-bold mb-2">General Policy</h2>
          <hr className="border-t-2 border-red-500 mb-4" />
          <p>
            All purchases made on Beezinfo are final. We maintain a strict no-refund policy 
            under all circumstances once payment is processed.
          </p>
        </section>

        {/* Service Conditions */}
        <section>
          <h2 className="text-3xl font-bold mb-2">Service Conditions</h2>
          <hr className="border-t-2 border-red-500 mb-4" />
          <ul className="list-disc list-inside space-y-1">
            <li>Access to services (e.g., dashboard, features) is granted immediately after payment.</li>
            <li>No cancellations or refunds will be issued once the service is activated.</li>
            <li>Refunds are not applicable to web design, digital marketing, SEO, or any other listed services.</li>
          </ul>
        </section>

        {/* Exceptions - Duplicate Payments */}
        <section>
          <h2 className="text-3xl font-bold mb-2">Exceptions – Duplicate Payments</h2>
          <hr className="border-t-2 border-red-500 mb-4" />
          <p>Refunds may be considered only in case of verified duplicate transactions.</p>
          <p>
            Please email <span className="font-bold">contact@beezinfo.com</span> with:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Subject: <span className="italic">"Duplicate Payment Refund Request – [Order ID]"</span>
            </li>
            <li>Attach both transaction receipts</li>
          </ul>
          <p>
            Verification and refund will be credited to source account within 15 working days.
          </p>
        </section>

        {/* Jurisdiction */}
        <section>
          <h2 className="text-3xl font-bold mb-2">Jurisdiction</h2>
          <hr className="border-t-2 border-red-500 mb-4" />
          <ul className="list-disc list-inside space-y-1">
            <li>All policies are governed by the laws of Odisha, India.</li>
            <li>Disputes must be raised within 24 hours of payment.</li>
            <li>All decisions regarding refunds are subject to Beezinfo’s management approval.</li>
          </ul>
        </section>

      </div>
    </div>
  );
}
