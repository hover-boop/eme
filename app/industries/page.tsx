import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Scissors, Heart, ShoppingBag, Hotel, GraduationCap, Building2 } from "lucide-react";

export default function IndustriesPage() {
  const industries = [
    {
      icon: Scissors,
      title: "Beauty & Wellness",
      description: "Salons, spas, and wellness centers",
      features: [
        "Automated appointment booking",
        "Service reminders and follow-ups",
        "Customer loyalty programs",
        "Product recommendations",
      ],
    },
    {
      icon: Heart,
      title: "Healthcare",
      description: "Clinics, dental practices, and medical centers",
      features: [
        "Patient appointment scheduling",
        "Medical record management",
        "Prescription reminders",
        "Telehealth integration",
      ],
    },
    {
      icon: ShoppingBag,
      title: "Retail",
      description: "Stores, boutiques, and e-commerce",
      features: [
        "Inventory management",
        "Customer inquiries automation",
        "Order tracking and updates",
        "Promotional campaigns",
      ],
    },
    {
      icon: Hotel,
      title: "Hospitality",
      description: "Hotels, restaurants, and event venues",
      features: [
        "Reservation management",
        "Guest communication",
        "Event coordination",
        "Feedback collection",
      ],
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "Schools, training centers, and tutoring services",
      features: [
        "Student enrollment automation",
        "Class scheduling",
        "Parent communication",
        "Progress tracking",
      ],
    },
    {
      icon: Building2,
      title: "Professional Services",
      description: "Consulting, legal, and financial services",
      features: [
        "Client onboarding",
        "Appointment scheduling",
        "Document generation",
        "Billing automation",
      ],
    },
  ];

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
          <div className="flex items-center gap-4">
            <Link href="/features">
              <Button variant="ghost">Features</Button>
            </Link>
            <Link href="/pricing">
              <Button variant="ghost">Pricing</Button>
            </Link>
            <Link href="/auth/login">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link href="/auth/register">
              <Button className="bg-emerald-600 hover:bg-emerald-700">Start Free Trial</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-emerald-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Built for Your Industry
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Emerald AI Suite is designed to meet the unique needs of various industries across the UAE
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                    <industry.icon className="h-6 w-6 text-emerald-600" />
                  </div>
                  <CardTitle className="text-xl">{industry.title}</CardTitle>
                  <CardDescription>{industry.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {industry.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-emerald-600 mt-1">✓</span>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 opacity-90">
            Start automating your operations today with a 14-day free trial
          </p>
          <Link href="/auth/register">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
              Get Started Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>&copy; 2024 Emerald AI Suite. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}