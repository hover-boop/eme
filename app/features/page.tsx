import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { 
  MessageSquare, 
  Zap, 
  MessageCircle, 
  Calendar, 
  Users, 
  Inbox, 
  FileText, 
  Sparkles, 
  Workflow,
  BarChart3,
  Globe,
  Shield
} from "lucide-react";

export default function FeaturesPage() {
  const features = [
    {
      icon: MessageSquare,
      title: "AI Receptionist",
      description: "24/7 intelligent virtual receptionist that handles customer inquiries, schedules appointments, and provides instant responses in multiple languages.",
    },
    {
      icon: Zap,
      title: "WhatsApp Automation",
      description: "Automate WhatsApp conversations with smart templates, auto-replies, and broadcast messages to engage customers at scale.",
    },
    {
      icon: MessageCircle,
      title: "Website Chat Widget",
      description: "Embed an AI-powered chat widget on your website to capture leads and provide instant customer support.",
    },
    {
      icon: Calendar,
      title: "Smart Booking System",
      description: "Automated appointment scheduling with calendar integration, reminders, and no-show prevention.",
    },
    {
      icon: Users,
      title: "CRM & Lead Management",
      description: "Visual pipeline to track leads from first contact to conversion with automated follow-ups and scoring.",
    },
    {
      icon: Inbox,
      title: "Unified Inbox",
      description: "Manage all customer conversations from WhatsApp, chat, and email in one centralized inbox.",
    },
    {
      icon: FileText,
      title: "Document Generation",
      description: "Automatically generate invoices, proposals, contracts, and reports with customizable templates.",
    },
    {
      icon: Sparkles,
      title: "AI Content Creator",
      description: "Generate marketing content, social media posts, product descriptions, and blog outlines with AI.",
    },
    {
      icon: Workflow,
      title: "Workflow Automation",
      description: "Create custom workflows to automate repetitive tasks and trigger actions based on customer behavior.",
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description: "Track performance metrics, customer engagement, and conversion rates with detailed analytics.",
    },
    {
      icon: Globe,
      title: "Multi-Language Support",
      description: "Serve customers in English and Arabic with full RTL support and localized content.",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with data encryption, role-based access control, and compliance certifications.",
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
            Powerful Features for Modern Businesses
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Everything you need to automate customer interactions, manage leads, and grow your business with AI-powered tools.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-emerald-600" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of businesses automating their operations with Emerald AI Suite
          </p>
          <Link href="/auth/register">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
              Start Your Free Trial
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