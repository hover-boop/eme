"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus, Trash2 } from "lucide-react";

export default function WhatsAppPage() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [config, setConfig] = useState<any>(null);
  const [rules, setRules] = useState<any[]>([]);
  const [isRuleDialogOpen, setIsRuleDialogOpen] = useState(false);
  const [newRule, setNewRule] = useState({
    name: "",
    trigger: "new_message",
    condition: "",
    action: "send_text",
    actionData: "",
  });

  useEffect(() => {
    fetchConfig();
    fetchRules();
  }, []);

  const fetchConfig = async () => {
    try {
      const response = await fetch("/api/whatsapp/config");
      if (response.ok) {
        const data = await response.json();
        setConfig(data.data || {
          phoneNumber: "",
          apiToken: "",
          enabled: false,
          autoReplyEnabled: true,
          workingHoursStart: "09:00",
          workingHoursEnd: "18:00",
          welcomeMessageEn: "Hello! How can we help you today?",
          welcomeMessageAr: "مرحباً! كيف يمكننا مساعدتك اليوم؟",
          outsideHoursMessageEn: "Thank you for your message. We'll respond during business hours (9 AM - 6 PM).",
          outsideHoursMessageAr: "شكراً لرسالتك. سنرد عليك خلال ساعات العمل (9 صباحاً - 6 مساءً).",
        });
      }
    } catch (error) {
      console.error("Failed to fetch config:", error);
    }
  };

  const fetchRules = async () => {
    try {
      const response = await fetch("/api/whatsapp/rules");
      if (response.ok) {
        const data = await response.json();
        setRules(data.data || []);
      }
    } catch (error) {
      console.error("Failed to fetch rules:", error);
    }
  };

  const handleSaveConfig = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/whatsapp/config", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(config),
      });

      if (!response.ok) throw new Error("Failed to save");

      toast({
        title: "Success",
        description: "WhatsApp configuration saved",
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

  const handleCreateRule = async () => {
    try {
      const response = await fetch("/api/whatsapp/rules", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newRule),
      });

      if (!response.ok) throw new Error("Failed to create rule");

      toast({
        title: "Success",
        description: "Automation rule created",
      });

      setIsRuleDialogOpen(false);
      setNewRule({
        name: "",
        trigger: "new_message",
        condition: "",
        action: "send_text",
        actionData: "",
      });
      fetchRules();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create rule",
        variant: "destructive",
      });
    }
  };

  const handleDeleteRule = async (ruleId: string) => {
    try {
      const response = await fetch(`/api/whatsapp/rules?id=${ruleId}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Failed to delete");

      toast({
        title: "Success",
        description: "Rule deleted",
      });

      fetchRules();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete rule",
        variant: "destructive",
      });
    }
  };

  if (!config) return <div>Loading...</div>;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">WhatsApp Autopilot</h1>
        <p className="text-gray-600">Configure WhatsApp automation and auto-replies</p>
      </div>

      <Tabs defaultValue="connection">
        <TabsList>
          <TabsTrigger value="connection">Connection</TabsTrigger>
          <TabsTrigger value="templates">Auto-Reply Templates</TabsTrigger>
          <TabsTrigger value="rules">Automation Rules</TabsTrigger>
        </TabsList>

        <TabsContent value="connection" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Connection Settings</CardTitle>
                  <CardDescription>Connect your WhatsApp Business account</CardDescription>
                </div>
                <Badge variant={config.enabled ? "default" : "secondary"}>
                  {config.enabled ? "Connected" : "Disconnected"}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="phoneNumber">Phone Number</Label>
                <Input
                  id="phoneNumber"
                  value={config.phoneNumber}
                  onChange={(e) => setConfig({ ...config, phoneNumber: e.target.value })}
                  placeholder="+971501234567"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="apiToken">API Token</Label>
                <Input
                  id="apiToken"
                  type="password"
                  value={config.apiToken}
                  onChange={(e) => setConfig({ ...config, apiToken: e.target.value })}
                  placeholder="Your WhatsApp Cloud API token"
                />
              </div>

              <div className="space-y-2">
                <Label>Webhook URL</Label>
                <Input
                  value={`${process.env.NEXT_PUBLIC_APP_URL}/api/webhooks/whatsapp`}
                  readOnly
                  className="bg-gray-50"
                />
                <p className="text-sm text-gray-500">Configure this URL in your WhatsApp Cloud API dashboard</p>
              </div>

              <div className="space-y-2">
                <Label>Working Hours</Label>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="workingHoursStart" className="text-sm">Start</Label>
                    <Input
                      id="workingHoursStart"
                      type="time"
                      value={config.workingHoursStart}
                      onChange={(e) => setConfig({ ...config, workingHoursStart: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="workingHoursEnd" className="text-sm">End</Label>
                    <Input
                      id="workingHoursEnd"
                      type="time"
                      value={config.workingHoursEnd}
                      onChange={(e) => setConfig({ ...config, workingHoursEnd: e.target.value })}
                    />
                  </div>
                </div>
              </div>

              <Button onClick={handleSaveConfig} disabled={isLoading} className="bg-emerald-600 hover:bg-emerald-700">
                {isLoading ? "Saving..." : "Save Configuration"}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="templates" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Auto-Reply Templates</CardTitle>
              <CardDescription>Configure automatic responses in English and Arabic</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label className="text-base font-semibold">Welcome Message</Label>
                  <p className="text-sm text-gray-500 mb-2">Sent when a new conversation starts</p>
                  <div className="space-y-2">
                    <Label htmlFor="welcomeEn" className="text-sm">English</Label>
                    <Textarea
                      id="welcomeEn"
                      value={config.welcomeMessageEn}
                      onChange={(e) => setConfig({ ...config, welcomeMessageEn: e.target.value })}
                      rows={2}
                    />
                  </div>
                  <div className="space-y-2 mt-2">
                    <Label htmlFor="welcomeAr" className="text-sm">Arabic</Label>
                    <Textarea
                      id="welcomeAr"
                      value={config.welcomeMessageAr}
                      onChange={(e) => setConfig({ ...config, welcomeMessageAr: e.target.value })}
                      rows={2}
                      dir="rtl"
                    />
                  </div>
                </div>

                <div>
                  <Label className="text-base font-semibold">Outside Business Hours</Label>
                  <p className="text-sm text-gray-500 mb-2">Sent when messages arrive outside working hours</p>
                  <div className="space-y-2">
                    <Label htmlFor="outsideEn" className="text-sm">English</Label>
                    <Textarea
                      id="outsideEn"
                      value={config.outsideHoursMessageEn}
                      onChange={(e) => setConfig({ ...config, outsideHoursMessageEn: e.target.value })}
                      rows={2}
                    />
                  </div>
                  <div className="space-y-2 mt-2">
                    <Label htmlFor="outsideAr" className="text-sm">Arabic</Label>
                    <Textarea
                      id="outsideAr"
                      value={config.outsideHoursMessageAr}
                      onChange={(e) => setConfig({ ...config, outsideHoursMessageAr: e.target.value })}
                      rows={2}
                      dir="rtl"
                    />
                  </div>
                </div>
              </div>

              <Button onClick={handleSaveConfig} disabled={isLoading} className="bg-emerald-600 hover:bg-emerald-700">
                Save Templates
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="rules" className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">Automation Rules</h3>
              <p className="text-sm text-gray-600">Create rules to automate responses and actions</p>
            </div>
            <Dialog open={isRuleDialogOpen} onOpenChange={setIsRuleDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-emerald-600 hover:bg-emerald-700">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Rule
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Create Automation Rule</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="ruleName">Rule Name</Label>
                    <Input
                      id="ruleName"
                      value={newRule.name}
                      onChange={(e) => setNewRule({ ...newRule, name: e.target.value })}
                      placeholder="e.g., Auto-respond to pricing questions"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="trigger">Trigger</Label>
                    <Select value={newRule.trigger} onValueChange={(value) => setNewRule({ ...newRule, trigger: value })}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="new_message">New Message</SelectItem>
                        <SelectItem value="contains_keywords">Contains Keywords</SelectItem>
                        <SelectItem value="outside_business_hours">Outside Business Hours</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  {newRule.trigger === "contains_keywords" && (
                    <div className="space-y-2">
                      <Label htmlFor="condition">Keywords (comma-separated)</Label>
                      <Input
                        id="condition"
                        value={newRule.condition}
                        onChange={(e) => setNewRule({ ...newRule, condition: e.target.value })}
                        placeholder="price, cost, booking"
                      />
                    </div>
                  )}
                  <div className="space-y-2">
                    <Label htmlFor="action">Action</Label>
                    <Select value={newRule.action} onValueChange={(value) => setNewRule({ ...newRule, action: value })}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="send_text">Send Text Message</SelectItem>
                        <SelectItem value="send_template">Send Template</SelectItem>
                        <SelectItem value="create_lead">Create Lead</SelectItem>
                        <SelectItem value="assign_lead">Assign to Team Member</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  {(newRule.action === "send_text" || newRule.action === "send_template") && (
                    <div className="space-y-2">
                      <Label htmlFor="actionData">Message</Label>
                      <Textarea
                        id="actionData"
                        value={newRule.actionData}
                        onChange={(e) => setNewRule({ ...newRule, actionData: e.target.value })}
                        placeholder="Enter the message to send"
                        rows={3}
                      />
                    </div>
                  )}
                  <Button onClick={handleCreateRule} className="w-full bg-emerald-600 hover:bg-emerald-700">
                    Create Rule
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <div className="space-y-2">
            {rules.length === 0 ? (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-12">
                  <p className="text-gray-600 mb-2">No automation rules yet</p>
                  <p className="text-sm text-gray-500">Create rules to automate your WhatsApp responses</p>
                </CardContent>
              </Card>
            ) : (
              rules.map((rule) => (
                <Card key={rule.id}>
                  <CardContent className="flex items-center justify-between p-4">
                    <div>
                      <p className="font-medium">{rule.name}</p>
                      <p className="text-sm text-gray-600">
                        Trigger: {rule.trigger} → Action: {rule.action}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDeleteRule(rule.id)}
                    >
                      <Trash2 className="h-4 w-4 text-red-600" />
                    </Button>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}