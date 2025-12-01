"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Copy } from "lucide-react";

export default function ChatWidgetPage() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [config, setConfig] = useState<any>(null);

  useEffect(() => {
    fetchConfig();
  }, []);

  const fetchConfig = async () => {
    try {
      const response = await fetch("/api/chat-widget/config");
      if (response.ok) {
        const data = await response.json();
        setConfig(data.data || {
          position: "bottom_right",
          primaryColor: "#059669",
          welcomeMessage: "Hi! How can we help you today?",
          showPreChatForm: true,
          collectName: true,
          collectEmail: true,
          collectPhone: false,
        });
      }
    } catch (error) {
      console.error("Failed to fetch config:", error);
    }
  };

  const handleSaveConfig = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/chat-widget/config", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(config),
      });

      if (!response.ok) throw new Error("Failed to save");

      toast({
        title: "Success",
        description: "Chat widget configuration saved",
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

  const copyInstallCode = () => {
    const code = `<!-- Emerald AI Chat Widget -->
<script>
  (function() {
    var script = document.createElement('script');
    script.src = '${process.env.NEXT_PUBLIC_APP_URL}/widget.js';
    script.async = true;
    script.dataset.widgetId = 'YOUR_WIDGET_ID';
    document.head.appendChild(script);
  })();
</script>`;

    navigator.clipboard.writeText(code);
    toast({
      title: "Copied!",
      description: "Installation code copied to clipboard",
    });
  };

  if (!config) return <div>Loading...</div>;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Chat Widget</h1>
        <p className="text-gray-600">Configure your website chat widget</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Installation</CardTitle>
          <CardDescription>Add this code to your website before the closing &lt;/body&gt; tag</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <pre className="bg-gray-50 p-4 rounded-lg overflow-x-auto text-sm">
{`<!-- Emerald AI Chat Widget -->
<script>
  (function() {
    var script = document.createElement('script');
    script.src = '${process.env.NEXT_PUBLIC_APP_URL}/widget.js';
    script.async = true;
    script.dataset.widgetId = 'YOUR_WIDGET_ID';
    document.head.appendChild(script);
  })();
</script>`}
            </pre>
            <Button
              onClick={copyInstallCode}
              variant="outline"
              size="sm"
              className="absolute top-2 right-2"
            >
              <Copy className="h-4 w-4 mr-2" />
              Copy
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Widget Settings</CardTitle>
          <CardDescription>Customize the appearance and behavior</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="position">Position</Label>
            <Select value={config.position} onValueChange={(value) => setConfig({ ...config, position: value })}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="bottom_right">Bottom Right</SelectItem>
                <SelectItem value="bottom_left">Bottom Left</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="primaryColor">Primary Color</Label>
            <div className="flex gap-2">
              <Input
                id="primaryColor"
                type="color"
                value={config.primaryColor}
                onChange={(e) => setConfig({ ...config, primaryColor: e.target.value })}
                className="w-20 h-10"
              />
              <Input
                value={config.primaryColor}
                onChange={(e) => setConfig({ ...config, primaryColor: e.target.value })}
                placeholder="#059669"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="welcomeMessage">Welcome Message</Label>
            <Textarea
              id="welcomeMessage"
              value={config.welcomeMessage}
              onChange={(e) => setConfig({ ...config, welcomeMessage: e.target.value })}
              rows={2}
            />
          </div>

          <div className="space-y-4 pt-4 border-t">
            <div className="flex items-center justify-between">
              <div>
                <Label>Show Pre-Chat Form</Label>
                <p className="text-sm text-gray-500">Collect visitor information before chat</p>
              </div>
              <Checkbox
                checked={config.showPreChatForm}
                onCheckedChange={(checked) => setConfig({ ...config, showPreChatForm: checked })}
              />
            </div>

            {config.showPreChatForm && (
              <div className="space-y-3 pl-6">
                <div className="flex items-center justify-between">
                  <Label>Collect Name</Label>
                  <Checkbox
                    checked={config.collectName}
                    onCheckedChange={(checked) => setConfig({ ...config, collectName: checked })}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label>Collect Email</Label>
                  <Checkbox
                    checked={config.collectEmail}
                    onCheckedChange={(checked) => setConfig({ ...config, collectEmail: checked })}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label>Collect Phone</Label>
                  <Checkbox
                    checked={config.collectPhone}
                    onCheckedChange={(checked) => setConfig({ ...config, collectPhone: checked })}
                  />
                </div>
              </div>
            )}
          </div>

          <Button onClick={handleSaveConfig} disabled={isLoading} className="bg-emerald-600 hover:bg-emerald-700">
            {isLoading ? "Saving..." : "Save Configuration"}
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Preview</CardTitle>
          <CardDescription>See how your widget will look</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-gray-100 rounded-lg p-8 min-h-[300px] relative">
            <div
              className={`absolute ${config.position === "bottom_right" ? "bottom-4 right-4" : "bottom-4 left-4"}`}
            >
              <div
                className="w-16 h-16 rounded-full shadow-lg flex items-center justify-center text-white cursor-pointer"
                style={{ backgroundColor: config.primaryColor }}
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}