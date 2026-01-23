import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-8">Privacy Policy</h1>
      <p className="text-gray-600 mb-6">
        Last updated: {new Date().toLocaleDateString()}
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
        <p className="text-gray-700 leading-relaxed">
          Welcome to our Job Portal. We are committed to protecting your privacy
          and ensuring the security of your personal information. This Privacy
          Policy explains how we collect, use, disclose, and safeguard your
          information when you use our platform.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          2. Information We Collect
        </h2>
        <h3 className="text-xl font-medium mb-2">Personal Information</h3>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Name, email address, phone number</li>
          <li>Resume and work experience details</li>
          <li>Educational background</li>
          <li>Profile pictures and other uploaded documents</li>
        </ul>
        <h3 className="text-xl font-medium mb-2">Usage Information</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>IP address, browser type, and device information</li>
          <li>Pages visited and time spent on our platform</li>
          <li>Job search queries and application history</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          3. How We Use Your Information
        </h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>To provide and maintain our job portal services</li>
          <li>To match job seekers with relevant employment opportunities</li>
          <li>To communicate with you about your account and applications</li>
          <li>To improve our platform and develop new features</li>
          <li>To comply with legal obligations</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          4. Information Sharing and Disclosure
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          We do not sell, trade, or otherwise transfer your personal information
          to third parties without your consent, except as described in this
          policy:
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li>With employers when you apply for jobs through our platform</li>
          <li>
            With service providers who assist us in operating our platform
          </li>
          <li>When required by law or to protect our rights</li>
          <li>In connection with a business transfer or merger</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
        <p className="text-gray-700 leading-relaxed">
          We implement appropriate technical and organizational measures to
          protect your personal information against unauthorized access,
          alteration, disclosure, or destruction. However, no method of
          transmission over the internet is 100% secure.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Depending on your location, you may have the following rights
          regarding your personal information:
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li>Access and update your personal information</li>
          <li>Request deletion of your data</li>
          <li>Opt-out of certain data processing activities</li>
          <li>Data portability</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">7. Cookies</h2>
        <p className="text-gray-700 leading-relaxed">
          We use cookies and similar technologies to enhance your experience on
          our platform. You can control cookie settings through your browser
          preferences.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          8. Changes to This Policy
        </h2>
        <p className="text-gray-700 leading-relaxed">
          We may update this Privacy Policy from time to time. We will notify
          you of any changes by posting the new policy on this page and updating
          the "Last updated" date.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
        <p className="text-gray-700 leading-relaxed">
          If you have any questions about this Privacy Policy, please contact us
          at:
        </p>
        <div className="text-gray-700">
          <p>Email: privacy@jobportal.com</p>
          <p>Phone: (123) 456-7890</p>
          <p>Address: 123 Job Street, Career City, ST 12345</p>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
