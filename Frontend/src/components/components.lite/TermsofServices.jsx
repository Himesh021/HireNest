import React from "react";

const TermsofServices = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-8">Terms of Service</h1>
      <p className="text-gray-600 mb-6">
        Last updated: {new Date().toLocaleDateString()}
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
        <p className="text-gray-700 leading-relaxed">
          By accessing and using our Job Portal, you accept and agree to be
          bound by the terms and provision of this agreement. If you do not
          agree to abide by the above, please do not use this service.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          2. Description of Service
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Our Job Portal provides a platform connecting job seekers with
          employers. We offer job listings, application management, profile
          creation, and related services to facilitate employment opportunities.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. User Accounts</h2>
        <h3 className="text-xl font-medium mb-2">Registration</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          To use certain features of our service, you must register for an
          account. You agree to provide accurate, current, and complete
          information during the registration process.
        </p>
        <h3 className="text-xl font-medium mb-2">Account Security</h3>
        <p className="text-gray-700 leading-relaxed">
          You are responsible for safeguarding your account credentials and for
          all activities that occur under your account. You must immediately
          notify us of any unauthorized use of your account.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. User Obligations</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>
            Provide accurate and truthful information in your profile and
            applications
          </li>
          <li>
            Use the platform only for lawful purposes related to job searching
            or recruitment
          </li>
          <li>Not engage in fraudulent, abusive, or harmful behavior</li>
          <li>Respect the intellectual property rights of others</li>
          <li>
            Not attempt to circumvent our security measures or access restricted
            areas
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Content and Conduct</h2>
        <h3 className="text-xl font-medium mb-2">User-Generated Content</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          You retain ownership of content you submit to our platform. By
          submitting content, you grant us a non-exclusive, royalty-free license
          to use, display, and distribute your content in connection with our
          services.
        </p>
        <h3 className="text-xl font-medium mb-2">Prohibited Conduct</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>Posting false or misleading information</li>
          <li>Harassing or discriminating against other users</li>
          <li>Sharing confidential information without authorization</li>
          <li>Using automated tools to access our platform</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          6. Intellectual Property
        </h2>
        <p className="text-gray-700 leading-relaxed">
          The Job Portal and its original content, features, and functionality
          are owned by us and are protected by copyright, trademark, and other
          intellectual property laws. You may not reproduce, distribute, or
          create derivative works without our express written consent.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">7. Privacy</h2>
        <p className="text-gray-700 leading-relaxed">
          Your privacy is important to us. Please review our Privacy Policy,
          which also governs your use of the Job Portal, to understand our
          practices.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">8. Termination</h2>
        <p className="text-gray-700 leading-relaxed">
          We may terminate or suspend your account and access to our services
          immediately, without prior notice or liability, for any reason,
          including breach of these Terms of Service.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">9. Disclaimers</h2>
        <p className="text-gray-700 leading-relaxed">
          Our services are provided on an "as is" and "as available" basis. We
          make no representations or warranties of any kind, express or implied,
          as to the operation of our services or the information, content, or
          materials included therein.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          10. Limitation of Liability
        </h2>
        <p className="text-gray-700 leading-relaxed">
          In no event shall we be liable for any indirect, incidental, special,
          consequential, or punitive damages, including without limitation, loss
          of profits, data, use, goodwill, or other intangible losses, resulting
          from your use of our services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">11. Indemnification</h2>
        <p className="text-gray-700 leading-relaxed">
          You agree to defend, indemnify, and hold us harmless from and against
          any claims, damages, costs, and expenses arising out of or related to
          your use of our services or violation of these Terms.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">12. Governing Law</h2>
        <p className="text-gray-700 leading-relaxed">
          These Terms shall be interpreted and governed by the laws of the
          jurisdiction in which our company is incorporated, without regard to
          conflict of law provisions.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">13. Changes to Terms</h2>
        <p className="text-gray-700 leading-relaxed">
          We reserve the right to modify or replace these Terms at any time. If
          a revision is material, we will provide at least 30 days' notice prior
          to any new terms taking effect.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">14. Contact Information</h2>
        <p className="text-gray-700 leading-relaxed">
          If you have any questions about these Terms of Service, please contact
          us at:
        </p>
        <div className="text-gray-700">
          <p>Email: legal@jobportal.com</p>
          <p>Phone: (123) 456-7890</p>
          <p>Address: 123 Job Street, Career City, ST 12345</p>
        </div>
      </section>
    </div>
  );
};

export default TermsofServices;
