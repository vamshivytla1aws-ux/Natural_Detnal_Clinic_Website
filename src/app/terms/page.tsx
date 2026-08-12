import { Metadata } from 'next';
import { CLINIC } from '@/lib/config';

export const metadata: Metadata = {
  title: `Terms of Service | ${CLINIC.name}`,
  description: 'Terms and conditions for using Natural Dental Clinic services and website.',
};

export default function TermsPage() {
  return (
    <>
      <div className="bg-forest-600 pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="container-premium text-center">
          <h1 className="heading-display text-white mb-4">Terms of Service</h1>
          <p className="text-ivory-100 font-sans max-w-2xl mx-auto text-lg">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </p>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container-premium max-w-4xl mx-auto prose prose-lg prose-forest font-sans">
          <p>
            Welcome to {CLINIC.name}. By accessing our website or utilizing our dental services, you agree to comply with and be bound by the following terms and conditions. Please read them carefully.
          </p>

          <h2 className="heading-lg text-forest-600 mt-12 mb-6">1. Medical Disclaimer</h2>
          <p>
            The content provided on this website is for informational purposes only and is not intended as a substitute for professional medical or dental advice, diagnosis, or treatment. Always seek the advice of your dentist or other qualified healthcare provider with any questions you may have regarding a medical condition.
          </p>

          <h2 className="heading-lg text-forest-600 mt-12 mb-6">2. Appointments and Cancellations</h2>
          <ul>
            <li>We request that you arrive on time for your scheduled appointments.</li>
            <li>If you need to cancel or reschedule, please provide at least 24 hours' notice.</li>
            <li>Failure to provide sufficient notice or missing an appointment may result in a cancellation fee.</li>
          </ul>

          <h2 className="heading-lg text-forest-600 mt-12 mb-6">3. Financial Policy and Payments</h2>
          <p>
            Payment is expected at the time services are rendered unless prior arrangements have been made. We accept various forms of payment including cash, major credit cards, and certain insurance plans. 
          </p>
          <p>
            While we assist in filing insurance claims, the patient is ultimately responsible for the full payment of the account, including any portion not covered by insurance.
          </p>

          <h2 className="heading-lg text-forest-600 mt-12 mb-6">4. Treatment Outcomes</h2>
          <p>
            While we strive for the highest quality of care and utilize advanced dental techniques, medical and dental treatments are not exact sciences. We cannot guarantee specific outcomes or results. Treatment plans are based on professional judgment and the information available at the time.
          </p>

          <h2 className="heading-lg text-forest-600 mt-12 mb-6">5. Website Usage</h2>
          <p>
            You agree to use this website only for lawful purposes. You are prohibited from violating or attempting to violate the security of the website, including unauthorized access to data or servers.
          </p>

          <h2 className="heading-lg text-forest-600 mt-12 mb-6">6. Intellectual Property</h2>
          <p>
            All content on this website, including text, graphics, logos, images, and software, is the property of {CLINIC.name} or its content suppliers and is protected by intellectual property laws. Reproduction, distribution, or unauthorized use of any content is strictly prohibited.
          </p>

          <h2 className="heading-lg text-forest-600 mt-12 mb-6">7. Modifications to Terms</h2>
          <p>
            {CLINIC.name} reserves the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to the website. Your continued use of the services signifies your acceptance of the updated terms.
          </p>

          <h2 className="heading-lg text-forest-600 mt-12 mb-6">8. Contact Us</h2>
          <p>
            For questions regarding these Terms of Service, please contact us:
          </p>
          <div className="bg-ivory-100 p-6 rounded-lg not-prose">
            <p className="font-bold">{CLINIC.name}</p>
            <p>{CLINIC.address.line1}, {CLINIC.address.line3}</p>
            <p>{CLINIC.address.city}, {CLINIC.address.state} {CLINIC.address.pincode}</p>
            <p>Phone: {CLINIC.contact.phoneDisplay}</p>
            <p>Email: {CLINIC.contact.email}</p>
          </div>
        </div>
      </section>
    </>
  );
}
