import { Metadata } from 'next';
import { CLINIC } from '@/lib/config';

export const metadata: Metadata = {
  title: `Privacy Policy | ${CLINIC.name}`,
  description: 'Privacy Policy and data protection terms for Natural Dental Clinic.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <div className="bg-forest-600 pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="container-premium text-center">
          <h1 className="heading-display text-white mb-4">Privacy Policy</h1>
          <p className="text-ivory-100 font-sans max-w-2xl mx-auto text-lg">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </p>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container-premium max-w-4xl mx-auto prose prose-lg prose-forest font-sans">
          <p>
            At {CLINIC.name}, we are committed to protecting your privacy and ensuring the security of your personal and medical information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you visit our website or use our services.
          </p>

          <h2 className="heading-lg text-forest-600 mt-12 mb-6">1. Information We Collect</h2>
          <p>We may collect personal information that you voluntarily provide to us, including but not limited to:</p>
          <ul>
            <li>Name, email address, phone number, and physical address.</li>
            <li>Medical history, dental records, and health information necessary for treatment.</li>
            <li>Insurance details and billing information.</li>
            <li>Information provided through contact forms or appointment requests.</li>
          </ul>

          <h2 className="heading-lg text-forest-600 mt-12 mb-6">2. How We Use Your Information</h2>
          <p>The information we collect is used strictly for the following purposes:</p>
          <ul>
            <li>To provide and manage your dental care and treatment.</li>
            <li>To schedule and confirm appointments.</li>
            <li>To process payments and coordinate with insurance providers.</li>
            <li>To communicate with you regarding your care, follow-ups, or clinic updates.</li>
            <li>To improve our clinic services and website functionality.</li>
          </ul>

          <h2 className="heading-lg text-forest-600 mt-12 mb-6">3. Data Security and Confidentiality</h2>
          <p>
            We implement strict security measures to protect your personal and medical information from unauthorized access, alteration, disclosure, or destruction. All patient records are handled in compliance with applicable healthcare privacy laws and regulations.
          </p>

          <h2 className="heading-lg text-forest-600 mt-12 mb-6">4. Sharing Your Information</h2>
          <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only when necessary for:</p>
          <ul>
            <li>Referrals to specialists or other healthcare providers (with your consent).</li>
            <li>Processing claims with your dental insurance company.</li>
            <li>Compliance with legal obligations or court orders.</li>
          </ul>

          <h2 className="heading-lg text-forest-600 mt-12 mb-6">5. Cookies and Website Tracking</h2>
          <p>
            Our website may use cookies and similar tracking technologies to enhance user experience and analyze website traffic. You can adjust your browser settings to refuse cookies, though this may affect some website functionality.
          </p>

          <h2 className="heading-lg text-forest-600 mt-12 mb-6">6. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access and review your personal and medical records.</li>
            <li>Request corrections to any inaccurate information.</li>
            <li>Request a copy of your records (processing fees may apply).</li>
            <li>Opt-out of non-essential communications.</li>
          </ul>

          <h2 className="heading-lg text-forest-600 mt-12 mb-6">7. Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy or how we handle your data, please contact us at:
          </p>
          <div className="bg-ivory-100 p-6 rounded-lg not-prose">
            <p className="font-bold">{CLINIC.name}</p>
            <p>{CLINIC.address.line1}, {CLINIC.address.landmark}, {CLINIC.address.locality}</p>
            <p>{CLINIC.address.cityArea}, {CLINIC.address.city}, {CLINIC.address.state} {CLINIC.address.postalCode}</p>
            <p>Phone: {CLINIC.contact.phoneDisplay}</p>
            <p>Email: {CLINIC.contact.email}</p>
          </div>
        </div>
      </section>
    </>
  );
}
