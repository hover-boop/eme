"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

export default function ReceptionistPage() {
  const { data: session } = useSession();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [config, setConfig] = useState({
    displayName: "Emerald Assistant",
    tone: "friendly",
    primaryLanguages: ["en"],
    businessInfo: "",
    enableVoice: false,
    enableChat: true,
    twilioPhoneNumber: "",
  });

  useEffect(() => {
    fetchConfig();
  }, []);

  const fetchConfig = async () => {
    try {
      const response = await fetch("/api/receptionist");
      if (response.ok) {
        const data = await response.json();
        if (data.data) {
          setConfig(data.data);
        }
      }
    } catch (error) {
      console.error("Failed to fetch config:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/receptionist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(config),
      });

      if (!response.ok) {
        throw new Error("Failed to save configuration");
      }

      toast({
        title: "Success",
        description: "AI Receptionist configuration saved successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save configuration",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">AI Receptionist</h1>
        <p className="text-gray-600">Configure your AI-powered receptionist</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Basic Settings</CardTitle>
            <CardDescription>Configure how your AI receptionist appears and behaves</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="displayName">Display Name</Label>
              <Input
                id="displayName"
                value={config.displayName}
                onChange={(e) => setConfig({ ...config, displayName: e.target.value })}
                placeholder="e.g., Sarah Assistant"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="tone">Conversation Tone</Label>
              <Select value={config.tone} onValueChange={(value) => setConfig({ ...config, tone: value })}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="friendly">Friendly</SelectItem>
                  <SelectItem value="professional">Professional</SelectItem>
                  <SelectItem value="casual">Casual</SelectItem>
                  <SelectItem value="formal">Formal</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Primary Languages</Label>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="lang-en"
                    checked={config.primaryLanguages.includes("en")}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setConfig({ ...config, primaryLanguages: [...config.primaryLanguages, "en"] });
                      } else {
                        setConfig({ ...config, primaryLanguages: config.primaryLanguages.filter(l => l !== "en") });
                      }
                    }}
                  />
                  <label htmlFor="lang-en" className="text-sm font-medium">English</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="lang-ar"
                    checked={config.primaryLanguages.includes("ar")}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setConfig({ ...config, primaryLanguages: [...config.primaryLanguages, "ar"] });
                      } else {
                        setConfig({ ...config, primaryLanguages: config.primaryLanguages.filter(l => l !== "ar") });
                      }
                    }}
                  />
                  <label htmlFor="lang-ar" className="text-sm font-medium">Arabic</label>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="businessInfo">Business Information</Label>
              <Textarea
                id="businessInfo"
                value={config.businessInfo}
                onChange={(e) => setConfig({ ...config, businessInfo: e.target.value })}
                placeholder="Tell the AI about your business, services, hours, location, etc."
                rows={5}
              />
              <p className="text-sm text-gray-500">This information helps the AI answer customer questions accurately</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Channels</CardTitle>
            <CardDescription>Enable AI receptionist on different channels</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Chat Widget</Label>
                <p className="text-sm text-gray-500">Enable AI responses on your website chat</p>
              </div>
              <Checkbox
                checked={config.enableChat}
                onCheckedChange={(checked) => setConfig({ ...config, enableChat: checked as boolean })}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Voice Calls</Label>
                <p className="text-sm text-gray-500">Enable AI voice receptionist for phone calls</p>
              </div>
              <Checkbox
                checked={config.enableVoice}
                onCheckedChange={(checked) => setConfig({ ...config, enableVoice: checked as boolean })}
              />
            </div>

            {config.enableVoice && (
              <div className="space-y-2 pl-6">
                <Label htmlFor="twilioPhoneNumber">Phone Number</Label>
                <Input
                  id="twilioPhoneNumber"
                  value={config.twilioPhoneNumber}
                  onChange={(e) => setConfig({ ...config, twilioPhoneNumber: e.target.value })}
                  placeholder="+971501234567"
                />
                <p className="text-sm text-gray-500">Your Twilio phone number for voice calls</p>
              </div>
            )}
          </CardContent>
        </Card>

        <Button type="submit" disabled={isLoading} className="bg-emerald-600 hover:bg-emerald-700">
          {isLoading ? "Saving..." : "Save Configuration"}
        </Button>
      </form>
    </div>
  );
}