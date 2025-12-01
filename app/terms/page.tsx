import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">E</span>
            </div>
            <span className="font-bold text-xl">Emerald AI</span>
          </Link>
          <Link href="/">
            <Button variant="ghost">Back to Home</Button>
          </Link>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <p className="text-gray-600 mb-8">Last updated: November 30, 2024</p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700">
              By accessing and using Emerald AI Suite, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these terms, please do not use our service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Description of Service</h2>
            <p className="text-gray-700">
              Emerald AI Suite provides AI-powered business automation tools including customer conversation management, booking systems, CRM, document generation, and workflow automation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. User Accounts</h2>
            <p className="text-gray-700 mb-4">To use our service, you must:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Provide accurate and complete registration information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Be at least 18 years old or have parental consent</li>
              <li>Notify us immediately of any unauthorized access</li>
              <li>Be responsible for all activities under your account</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Subscription and Payment</h2>
            <p className="text-gray-700 mb-4">Our service operates on a subscription basis:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Subscriptions are billed monthly or annually</li>
              <li>Payment is due at the start of each billing period</li>
              <li>We accept major credit cards via Stripe</li>
              <li>Prices are subject to change with 30 days notice</li>
              <li>Refunds are provided according to our refund policy</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Acceptable Use</h2>
            <p className="text-gray-700 mb-4">You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Violate any laws or regulations</li>
              <li>Infringe on intellectual property rights</li>
              <li>Transmit malicious code or viruses</li>
              <li>Attempt to gain unauthorized access</li>
              <li>Use the service for spam or harassment</li>
              <li>Resell or redistribute the service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Intellectual Property</h2>
            <p className="text-gray-700">
              All content, features, and functionality of Emerald AI Suite are owned by us and are protected by international copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Data and Privacy</h2>
            <p className="text-gray-700">
              Your use of the service is also governed by our Privacy Policy. You retain ownership of your data, and we will not access or use it except as necessary to provide the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">8. Service Availability</h2>
            <p className="text-gray-700">
              We strive to provide 99.9% uptime but do not guarantee uninterrupted access. We may perform maintenance, updates, or modifications that temporarily affect service availability.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">9. Limitation of Liability</h2>
            <p className="text-gray-700">
              To the maximum extent permitted by law, Emerald AI Suite shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">10. Termination</h2>
            <p className="text-gray-700">
              We may terminate or suspend your account immediately, without prior notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">11. Changes to Terms</h2>
            <p className="text-gray-700">
              We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">12. Governing Law</h2>
            <p className="text-gray-700">
              These Terms shall be governed by and construed in accordance with the laws of the United Arab Emirates, without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">13. Contact Information</h2>
            <p className="text-gray-700">
              For questions about these Terms, please contact us at:
              <br />
              Email: legal@emeraldai.app
              <br />
              Address: Dubai, United Arab Emirates
            </p>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t py-12 mt-12">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>&copy; 2024 Emerald AI Suite. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}