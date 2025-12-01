"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2, CreditCard, Calendar } from "lucide-react";
import { PLAN_NAMES, PLAN_PRICES, PLAN_FEATURES } from "@/lib/constants";

export default function BillingPage() {
  const { data: session } = useSession();
  const { toast } = useToast();
  const [subscription, setSubscription] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isUpgrading, setIsUpgrading] = useState(false);

  useEffect(() => {
    fetchSubscription();
  }, []);

  const fetchSubscription = async () => {
    try {
      const response = await fetch("/api/billing/subscription");
      if (response.ok) {
        const data = await response.json();
        setSubscription(data.data);
      }
    } catch (error) {
      console.error("Failed to fetch subscription:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpgrade = async (plan: string) => {
    setIsUpgrading(true);
    try {
      const response = await fetch("/api/billing/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan }),
      });

      if (!response.ok) {
        throw new Error("Failed to create checkout session");
      }

      const data = await response.json();
      window.location.href = data.url;
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to start checkout process",
        variant: "destructive",
      });
      setIsUpgrading(false);
    }
  };

  const handleManageSubscription = async () => {
    try {
      const response = await fetch("/api/billing/create-portal-session", {
        method: "POST",
      });

      if (!response.ok) {
        throw new Error("Failed to create portal session");
      }

      const data = await response.json();
      window.location.href = data.url;
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to open billing portal",
        variant: "destructive",
      });
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const currentPlan = subscription?.plan || "STARTER";
  const planFeatures = PLAN_FEATURES[currentPlan as keyof typeof PLAN_FEATURES];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Billing & Subscription</h1>
        <p className="text-gray-600">Manage your subscription and billing</p>
      </div>

      {/* Current Plan */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Current Plan</CardTitle>
              <CardDescription>You are currently on the {PLAN_NAMES[currentPlan as keyof typeof PLAN_NAMES]} plan</CardDescription>
            </div>
            <Badge className="bg-emerald-600">
              {subscription?.status === "ACTIVE" ? "Active" : subscription?.status}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CreditCard className="h-5 w-5 text-gray-500" />
              <span className="font-medium">
                ${PLAN_PRICES[currentPlan as keyof typeof PLAN_PRICES]}/month
              </span>
            </div>
            {subscription?.currentPeriodEnd && (
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Calendar className="h-4 w-4" />
                Renews on {new Date(subscription.currentPeriodEnd).toLocaleDateString()}
              </div>
            )}
          </div>

          <div className="pt-4 border-t">
            <h4 className="font-medium mb-3">Plan Features</h4>
            <div className="grid md:grid-cols-2 gap-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                <span className="text-sm">
                  {planFeatures.maxLeads === -1 ? "Unlimited" : planFeatures.maxLeads} leads/month
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                <span className="text-sm">
                  {planFeatures.maxBookings === -1 ? "Unlimited" : planFeatures.maxBookings} bookings/month
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                <span className="text-sm">WhatsApp Autopilot</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                <span className="text-sm">Chat Widget</span>
              </div>
              {planFeatures.voiceReceptionist && (
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  <span className="text-sm">Voice Receptionist</span>
                </div>
              )}
              {planFeatures.workflows && (
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  <span className="text-sm">Workflows & Automation</span>
                </div>
              )}
              {planFeatures.apiAccess && (
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  <span className="text-sm">API Access</span>
                </div>
              )}
            </div>
          </div>

          <div className="pt-4 border-t">
            <Button onClick={handleManageSubscription} variant="outline" className="w-full">
              Manage Subscription
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Upgrade Options */}
      {currentPlan !== "AGENCY" && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Upgrade Your Plan</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {["GROWTH", "PREMIUM", "AGENCY"].map((plan) => {
              if (plan === currentPlan) return null;
              const features = PLAN_FEATURES[plan as keyof typeof PLAN_FEATURES];
              return (
                <Card key={plan}>
                  <CardHeader>
                    <CardTitle>{PLAN_NAMES[plan as keyof typeof PLAN_NAMES]}</CardTitle>
                    <div className="text-3xl font-bold">
                      ${PLAN_PRICES[plan as keyof typeof PLAN_PRICES]}
                      <span className="text-sm font-normal text-gray-600">/month</span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5" />
                        <span className="text-sm">
                          {features.maxLeads === -1 ? "Unlimited" : features.maxLeads} leads
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5" />
                        <span className="text-sm">
                          {features.maxBookings === -1 ? "Unlimited" : features.maxBookings} bookings
                        </span>
                      </li>
                      {features.voiceReceptionist && (
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5" />
                          <span className="text-sm">Voice Receptionist</span>
                        </li>
                      )}
                      {features.workflows && (
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5" />
                          <span className="text-sm">Workflows</span>
                        </li>
                      )}
                      {features.apiAccess && (
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5" />
                          <span className="text-sm">API Access</span>
                        </li>
                      )}
                      {features.whiteLabel && (
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5" />
                          <span className="text-sm">White-label</span>
                        </li>
                      )}
                    </ul>
                    <Button
                      onClick={() => handleUpgrade(plan)}
                      disabled={isUpgrading}
                      className="w-full bg-emerald-600 hover:bg-emerald-700"
                    >
                      Upgrade to {PLAN_NAMES[plan as keyof typeof PLAN_NAMES]}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}