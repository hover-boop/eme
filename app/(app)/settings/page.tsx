"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus, Trash2, Copy, Eye, EyeOff } from "lucide-react";

export default function SettingsPage() {
  const { toast } = useToast();
  const [organization, setOrganization] = useState<any>(null);
  const [members, setMembers] = useState<any[]>([]);
  const [apiKeys, setApiKeys] = useState<any[]>([]);
  const [isInviteDialogOpen, setIsInviteDialogOpen] = useState(false);
  const [isKeyDialogOpen, setIsKeyDialogOpen] = useState(false);
  const [newInvite, setNewInvite] = useState({ email: "", role: "STAFF" });
  const [newKeyName, setNewKeyName] = useState("");
  const [newlyCreatedKey, setNewlyCreatedKey] = useState("");
  const [showKey, setShowKey] = useState(false);

  useEffect(() => {
    fetchOrganization();
    fetchMembers();
    fetchApiKeys();
  }, []);

  const fetchOrganization = async () => {
    try {
      const response = await fetch("/api/organizations/settings");
      if (response.ok) {
        const data = await response.json();
        setOrganization(data.data);
      }
    } catch (error) {
      console.error("Failed to fetch organization:", error);
    }
  };

  const fetchMembers = async () => {
    try {
      const response = await fetch("/api/organizations/members");
      if (response.ok) {
        const data = await response.json();
        setMembers(data.data || []);
      }
    } catch (error) {
      console.error("Failed to fetch members:", error);
    }
  };

  const fetchApiKeys = async () => {
    try {
      const response = await fetch("/api/api-keys");
      if (response.ok) {
        const data = await response.json();
        setApiKeys(data.data || []);
      }
    } catch (error) {
      console.error("Failed to fetch API keys:", error);
    }
  };

  const handleSaveOrganization = async () => {
    try {
      const response = await fetch("/api/organizations/settings", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(organization),
      });

      if (!response.ok) throw new Error("Failed to save");

      toast({
        title: "Success",
        description: "Organization settings saved",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save settings",
        variant: "destructive",
      });
    }
  };

  const handleInviteMember = async () => {
    try {
      const response = await fetch("/api/organizations/invite", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newInvite),
      });

      if (!response.ok) throw new Error("Failed to invite");

      toast({
        title: "Success",
        description: "Invitation sent",
      });

      setIsInviteDialogOpen(false);
      setNewInvite({ email: "", role: "STAFF" });
      fetchMembers();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send invitation",
        variant: "destructive",
      });
    }
  };

  const handleRemoveMember = async (userId: string) => {
    try {
      const response = await fetch(`/api/organizations/members?userId=${userId}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Failed to remove");

      toast({
        title: "Success",
        description: "Member removed",
      });

      fetchMembers();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to remove member",
        variant: "destructive",
      });
    }
  };

  const handleCreateApiKey = async () => {
    try {
      const response = await fetch("/api/api-keys", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: newKeyName }),
      });

      if (!response.ok) throw new Error("Failed to create");

      const data = await response.json();
      setNewlyCreatedKey(data.data.key);
      setNewKeyName("");
      
      toast({
        title: "Success",
        description: "API key created",
      });

      fetchApiKeys();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create API key",
        variant: "destructive",
      });
    }
  };

  const handleRevokeApiKey = async (keyId: string) => {
    try {
      const response = await fetch(`/api/api-keys/${keyId}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Failed to revoke");

      toast({
        title: "Success",
        description: "API key revoked",
      });

      fetchApiKeys();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to revoke API key",
        variant: "destructive",
      });
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: "Copied to clipboard",
    });
  };

  if (!organization) return <div>Loading...</div>;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-gray-600">Manage your organization settings</p>
      </div>

      <Tabs defaultValue="business">
        <TabsList>
          <TabsTrigger value="business">Business Profile</TabsTrigger>
          <TabsTrigger value="team">Team</TabsTrigger>
          <TabsTrigger value="api">API Keys</TabsTrigger>
        </TabsList>

        <TabsContent value="business" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Business Information</CardTitle>
              <CardDescription>Update your business details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Business Name</Label>
                <Input
                  id="name"
                  value={organization.name}
                  onChange={(e) => setOrganization({ ...organization, name: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="industry">Industry</Label>
                <Select
                  value={organization.industry}
                  onValueChange={(value) => setOrganization({ ...organization, industry: value })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="SALON">Salon & Spa</SelectItem>
                    <SelectItem value="CLINIC">Clinic & Healthcare</SelectItem>
                    <SelectItem value="REAL_ESTATE">Real Estate</SelectItem>
                    <SelectItem value="RESTAURANT">Restaurant & F&B</SelectItem>
                    <SelectItem value="CAR_RENTAL">Car Rental</SelectItem>
                    <SelectItem value="ECOMMERCE">E-commerce</SelectItem>
                    <SelectItem value="OTHER">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="country">Country</Label>
                  <Input
                    id="country"
                    value={organization.country}
                    onChange={(e) => setOrganization({ ...organization, country: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="timezone">Timezone</Label>
                  <Select
                    value={organization.timezone}
                    onValueChange={(value) => setOrganization({ ...organization, timezone: value })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Asia/Dubai">Asia/Dubai (UAE)</SelectItem>
                      <SelectItem value="Asia/Riyadh">Asia/Riyadh (KSA)</SelectItem>
                      <SelectItem value="Asia/Kuwait">Asia/Kuwait</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="primaryLanguage">Primary Language</Label>
                <Select
                  value={organization.primaryLanguage}
                  onValueChange={(value) => setOrganization({ ...organization, primaryLanguage: value })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="ar">Arabic</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button onClick={handleSaveOrganization} className="bg-emerald-600 hover:bg-emerald-700">
                Save Changes
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="team" className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">Team Members</h3>
              <p className="text-sm text-gray-600">Manage your team access</p>
            </div>
            <Dialog open={isInviteDialogOpen} onOpenChange={setIsInviteDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-emerald-600 hover:bg-emerald-700">
                  <Plus className="h-4 w-4 mr-2" />
                  Invite Member
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Invite Team Member</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={newInvite.email}
                      onChange={(e) => setNewInvite({ ...newInvite, email: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="role">Role</Label>
                    <Select value={newInvite.role} onValueChange={(value) => setNewInvite({ ...newInvite, role: value })}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ADMIN">Admin</SelectItem>
                        <SelectItem value="STAFF">Staff</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button onClick={handleInviteMember} className="w-full bg-emerald-600 hover:bg-emerald-700">
                    Send Invitation
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <div className="space-y-2">
            {members.map((member) => (
              <Card key={member.id}>
                <CardContent className="flex items-center justify-between p-4">
                  <div>
                    <p className="font-medium">{member.user.name}</p>
                    <p className="text-sm text-gray-600">{member.user.email}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge>{member.role}</Badge>
                    {member.role !== "OWNER" && (
                      <Button
                        onClick={() => handleRemoveMember(member.userId)}
                        variant="outline"
                        size="sm"
                      >
                        <Trash2 className="h-4 w-4 text-red-600" />
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="api" className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">API Keys</h3>
              <p className="text-sm text-gray-600">Manage API access keys</p>
            </div>
            <Dialog open={isKeyDialogOpen} onOpenChange={setIsKeyDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-emerald-600 hover:bg-emerald-700">
                  <Plus className="h-4 w-4 mr-2" />
                  Generate Key
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Generate API Key</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  {newlyCreatedKey ? (
                    <div className="space-y-2">
                      <Label>Your API Key</Label>
                      <div className="flex gap-2">
                        <Input
                          value={newlyCreatedKey}
                          readOnly
                          type={showKey ? "text" : "password"}
                          className="font-mono text-sm"
                        />
                        <Button
                          onClick={() => setShowKey(!showKey)}
                          variant="outline"
                          size="icon"
                        >
                          {showKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                        <Button
                          onClick={() => copyToClipboard(newlyCreatedKey)}
                          variant="outline"
                          size="icon"
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                      <p className="text-sm text-red-600">
                        Save this key now. You won't be able to see it again!
                      </p>
                      <Button
                        onClick={() => {
                          setNewlyCreatedKey("");
                          setIsKeyDialogOpen(false);
                        }}
                        className="w-full"
                      >
                        Done
                      </Button>
                    </div>
                  ) : (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="keyName">Key Name</Label>
                        <Input
                          id="keyName"
                          value={newKeyName}
                          onChange={(e) => setNewKeyName(e.target.value)}
                          placeholder="e.g., Production API"
                        />
                      </div>
                      <Button
                        onClick={handleCreateApiKey}
                        disabled={!newKeyName}
                        className="w-full bg-emerald-600 hover:bg-emerald-700"
                      >
                        Generate Key
                      </Button>
                    </>
                  )}
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <div className="space-y-2">
            {apiKeys.length === 0 ? (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-12">
                  <p className="text-gray-600">No API keys yet</p>
                </CardContent>
              </Card>
            ) : (
              apiKeys.map((key) => (
                <Card key={key.id}>
                  <CardContent className="flex items-center justify-between p-4">
                    <div>
                      <p className="font-medium">{key.name}</p>
                      <p className="text-sm text-gray-600 font-mono">{key.keyPrefix}...</p>
                      <p className="text-xs text-gray-400 mt-1">
                        Created: {new Date(key.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                    <Button
                      onClick={() => handleRevokeApiKey(key.id)}
                      variant="outline"
                      size="sm"
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