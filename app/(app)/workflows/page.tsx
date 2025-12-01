"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Plus, Trash2, Zap } from "lucide-react";

const triggers = [
  { value: "new_lead", label: "New Lead Created" },
  { value: "booking_created", label: "Booking Created" },
  { value: "message_received", label: "Message Received" },
  { value: "lead_stage_changed", label: "Lead Stage Changed" },
];

const actions = [
  { value: "send_whatsapp", label: "Send WhatsApp Message" },
  { value: "send_email", label: "Send Email" },
  { value: "assign_lead", label: "Assign Lead to Team Member" },
  { value: "move_lead_stage", label: "Move Lead to Stage" },
  { value: "create_task", label: "Create Task" },
];

export default function WorkflowsPage() {
  const { toast } = useToast();
  const [workflows, setWorkflows] = useState<any[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newWorkflow, setNewWorkflow] = useState({
    name: "",
    trigger: "new_lead",
    actions: [] as string[],
    enabled: true,
  });

  useEffect(() => {
    fetchWorkflows();
  }, []);

  const fetchWorkflows = async () => {
    try {
      const response = await fetch("/api/workflows");
      if (response.ok) {
        const data = await response.json();
        setWorkflows(data.data || []);
      }
    } catch (error) {
      console.error("Failed to fetch workflows:", error);
    }
  };

  const handleCreateWorkflow = async () => {
    try {
      const response = await fetch("/api/workflows", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newWorkflow),
      });

      if (!response.ok) throw new Error("Failed to create");

      toast({
        title: "Success",
        description: "Workflow created successfully",
      });

      setIsDialogOpen(false);
      setNewWorkflow({
        name: "",
        trigger: "new_lead",
        actions: [],
        enabled: true,
      });
      fetchWorkflows();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create workflow",
        variant: "destructive",
      });
    }
  };

  const handleToggleWorkflow = async (workflowId: string, enabled: boolean) => {
    try {
      const response = await fetch(`/api/workflows/${workflowId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ enabled }),
      });

      if (!response.ok) throw new Error("Failed to update");

      toast({
        title: "Success",
        description: `Workflow ${enabled ? "enabled" : "disabled"}`,
      });

      fetchWorkflows();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update workflow",
        variant: "destructive",
      });
    }
  };

  const handleDeleteWorkflow = async (workflowId: string) => {
    try {
      const response = await fetch(`/api/workflows/${workflowId}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Failed to delete");

      toast({
        title: "Success",
        description: "Workflow deleted",
      });

      fetchWorkflows();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete workflow",
        variant: "destructive",
      });
    }
  };

  const toggleAction = (action: string) => {
    setNewWorkflow((prev) => ({
      ...prev,
      actions: prev.actions.includes(action)
        ? prev.actions.filter((a) => a !== action)
        : [...prev.actions, action],
    }));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Workflows</h1>
          <p className="text-gray-600">Automate your business processes</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              <Plus className="h-4 w-4 mr-2" />
              Create Workflow
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New Workflow</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Workflow Name</Label>
                <Input
                  id="name"
                  value={newWorkflow.name}
                  onChange={(e) => setNewWorkflow({ ...newWorkflow, name: e.target.value })}
                  placeholder="e.g., Welcome new leads"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="trigger">Trigger</Label>
                <Select value={newWorkflow.trigger} onValueChange={(value) => setNewWorkflow({ ...newWorkflow, trigger: value })}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {triggers.map((trigger) => (
                      <SelectItem key={trigger.value} value={trigger.value}>
                        {trigger.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Actions</Label>
                <div className="space-y-2">
                  {actions.map((action) => (
                    <div key={action.value} className="flex items-center space-x-2">
                      <Checkbox
                        id={action.value}
                        checked={newWorkflow.actions.includes(action.value)}
                        onCheckedChange={() => toggleAction(action.value)}
                      />
                      <label htmlFor={action.value} className="text-sm font-medium">
                        {action.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <Button
                onClick={handleCreateWorkflow}
                disabled={!newWorkflow.name || newWorkflow.actions.length === 0}
                className="w-full bg-emerald-600 hover:bg-emerald-700"
              >
                Create Workflow
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {workflows.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <Zap className="h-12 w-12 text-gray-400 mb-4" />
            <p className="text-gray-600 mb-2">No workflows yet</p>
            <p className="text-sm text-gray-500">Create your first workflow to automate tasks</p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {workflows.map((workflow) => (
            <Card key={workflow.id}>
              <CardContent className="flex items-center justify-between p-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold">{workflow.name}</h3>
                    <Badge variant={workflow.enabled ? "default" : "secondary"}>
                      {workflow.enabled ? "Active" : "Inactive"}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>Trigger:</strong> {triggers.find((t) => t.value === workflow.trigger)?.label}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Actions:</strong> {workflow.actions.length} action(s)
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button
                    onClick={() => handleToggleWorkflow(workflow.id, !workflow.enabled)}
                    variant="outline"
                    size="sm"
                  >
                    {workflow.enabled ? "Disable" : "Enable"}
                  </Button>
                  <Button
                    onClick={() => handleDeleteWorkflow(workflow.id)}
                    variant="outline"
                    size="sm"
                  >
                    <Trash2 className="h-4 w-4 text-red-600" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}