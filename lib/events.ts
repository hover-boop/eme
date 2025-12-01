/**
 * Event System for Workflow Automation
 * 
 * This module handles event firing and workflow trigger evaluation.
 * When an event occurs (e.g., NEW_LEAD, NEW_BOOKING), it checks for
 * matching workflows and executes their actions.
 */

import { prisma } from "./db";
import { whatsappService } from "./services/whatsapp-service";
import { emailService } from "./services/email-service";
import { voiceService } from "./services/voice-service";

export type EventType =
  | "NEW_LEAD"
  | "NEW_BOOKING"
  | "NEW_MESSAGE"
  | "LEAD_STAGE_CHANGED"
  | "BOOKING_CONFIRMED"
  | "BOOKING_CANCELLED";

export interface EventPayload {
  organizationId: string;
  eventType: EventType;
  data: any;
}

/**
 * Fire an event and trigger matching workflows
 * 
 * @param payload - Event payload
 */
export async function fireEvent(payload: EventPayload): Promise<void> {
  console.log("[Events] Firing event:", payload.eventType);

  try {
    // Find matching workflows
    const workflows = await prisma.workflow.findMany({
      where: {
        organizationId: payload.organizationId,
        trigger: payload.eventType,
        isActive: true,
      },
    });

    console.log(`[Events] Found ${workflows.length} matching workflows`);

    // Execute each workflow
    for (const workflow of workflows) {
      await executeWorkflow(workflow, payload);
    }
  } catch (error) {
    console.error("[Events] Error firing event:", error);
  }
}

/**
 * Execute a workflow's actions
 * 
 * @param workflow - Workflow to execute
 * @param payload - Event payload
 */
async function executeWorkflow(workflow: any, payload: EventPayload): Promise<void> {
  console.log(`[Events] Executing workflow: ${workflow.name}`);

  const actions = Array.isArray(workflow.actions) ? workflow.actions : [];

  for (const action of actions) {
    try {
      await executeAction(action, payload, workflow);
    } catch (error) {
      console.error(`[Events] Error executing action ${action}:`, error);
    }
  }
}

/**
 * Execute a single workflow action
 * 
 * @param action - Action to execute
 * @param payload - Event payload
 * @param workflow - Parent workflow
 */
async function executeAction(
  action: string,
  payload: EventPayload,
  workflow: any
): Promise<void> {
  console.log(`[Events] Executing action: ${action}`);

  switch (action) {
    case "SEND_EMAIL":
      // TODO: Get email template and recipient from workflow config
      await emailService.sendNotificationEmail(
        "customer@example.com",
        "Notification from Emerald AI",
        `Event: ${payload.eventType}\n\nWorkflow: ${workflow.name}`
      );
      break;

    case "SEND_WHATSAPP":
      // TODO: Get WhatsApp message template from workflow config
      await whatsappService.sendMessage({
        to: "+971501234567",
        message: `Automated message from workflow: ${workflow.name}`,
      });
      break;

    case "CREATE_TASK":
      // TODO: Create task in task management system
      console.log("[Events] Creating task (stub)");
      break;

    case "NOTIFY_TEAM":
      // TODO: Send notification to team members
      console.log("[Events] Notifying team (stub)");
      break;

    default:
      console.warn(`[Events] Unknown action: ${action}`);
  }
}

/**
 * Helper function to fire NEW_LEAD event
 * 
 * @param organizationId - Organization ID
 * @param leadData - Lead data
 */
export async function fireNewLeadEvent(
  organizationId: string,
  leadData: any
): Promise<void> {
  await fireEvent({
    organizationId,
    eventType: "NEW_LEAD",
    data: leadData,
  });
}

/**
 * Helper function to fire NEW_BOOKING event
 * 
 * @param organizationId - Organization ID
 * @param bookingData - Booking data
 */
export async function fireNewBookingEvent(
  organizationId: string,
  bookingData: any
): Promise<void> {
  await fireEvent({
    organizationId,
    eventType: "NEW_BOOKING",
    data: bookingData,
  });
}

/**
 * Helper function to fire LEAD_STAGE_CHANGED event
 * 
 * @param organizationId - Organization ID
 * @param leadData - Lead data with old and new stage
 */
export async function fireLeadStageChangedEvent(
  organizationId: string,
  leadData: any
): Promise<void> {
  await fireEvent({
    organizationId,
    eventType: "LEAD_STAGE_CHANGED",
    data: leadData,
  });
}