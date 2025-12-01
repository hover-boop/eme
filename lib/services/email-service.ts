/**
 * Email Service - Stub for SendGrid/Resend Integration
 * 
 * TODO: Integrate with SendGrid or Resend
 * 
 * Required environment variables:
 * - SENDGRID_API_KEY or RESEND_API_KEY
 * - FROM_EMAIL
 * 
 * Example SendGrid implementation:
 * ```typescript
 * import sgMail from '@sendgrid/mail';
 * sgMail.setApiKey(process.env.SENDGRID_API_KEY);
 * 
 * await sgMail.send({
 *   to: recipient,
 *   from: process.env.FROM_EMAIL,
 *   subject: subject,
 *   html: htmlContent,
 * });
 * ```
 * 
 * Example Resend implementation:
 * ```typescript
 * import { Resend } from 'resend';
 * const resend = new Resend(process.env.RESEND_API_KEY);
 * 
 * await resend.emails.send({
 *   from: process.env.FROM_EMAIL,
 *   to: recipient,
 *   subject: subject,
 *   html: htmlContent,
 * });
 * ```
 */

export interface EmailParams {
  to: string | string[];
  subject: string;
  html: string;
  text?: string;
  from?: string;
}

export interface EmailResult {
  messageId: string;
  success: boolean;
}

export class EmailService {
  /**
   * Send a transactional email
   * 
   * @param params - Email parameters
   * @returns Email result
   */
  async sendTransactionalEmail(params: EmailParams): Promise<EmailResult> {
    // TODO: Replace with real SendGrid/Resend API call
    console.log("[Email Service] Sending transactional email:", {
      to: params.to,
      subject: params.subject,
    });

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 600));

    // Return mock result
    const messageId = `msg_${Date.now()}_${Math.random().toString(36).substring(7)}`;
    
    console.log("[Email Service] Email sent successfully:", messageId);
    return {
      messageId,
      success: true,
    };
  }

  /**
   * Send a notification email
   * 
   * @param to - Recipient email
   * @param subject - Email subject
   * @param message - Plain text message
   * @returns Email result
   */
  async sendNotificationEmail(
    to: string,
    subject: string,
    message: string
  ): Promise<EmailResult> {
    // TODO: Use a pre-designed email template
    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #059669; color: white; padding: 20px; text-align: center; }
            .content { padding: 20px; background: #f9f9f9; }
            .footer { text-align: center; padding: 20px; font-size: 12px; color: #666; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Emerald AI Suite</h1>
            </div>
            <div class="content">
              <p>${message.replace(/\n/g, '<br>')}</p>
            </div>
            <div class="footer">
              <p>© ${new Date().getFullYear()} Emerald AI Suite. All rights reserved.</p>
            </div>
          </div>
        </body>
      </html>
    `;

    return this.sendTransactionalEmail({
      to,
      subject,
      html,
      text: message,
    });
  }

  /**
   * Send a welcome email to new users
   * 
   * @param to - Recipient email
   * @param name - User name
   * @returns Email result
   */
  async sendWelcomeEmail(to: string, name: string): Promise<EmailResult> {
    const subject = "Welcome to Emerald AI Suite!";
    const message = `Hi ${name},\n\nWelcome to Emerald AI Suite! We're excited to have you on board.\n\nGet started by setting up your AI receptionist and exploring our automation features.\n\nIf you have any questions, feel free to reach out to our support team.\n\nBest regards,\nThe Emerald AI Team`;

    return this.sendNotificationEmail(to, subject, message);
  }

  /**
   * Send a password reset email
   * 
   * @param to - Recipient email
   * @param resetToken - Password reset token
   * @returns Email result
   */
  async sendPasswordResetEmail(to: string, resetToken: string): Promise<EmailResult> {
    const resetUrl = `${process.env.NEXT_PUBLIC_APP_URL}/auth/reset-password/${resetToken}`;
    const subject = "Reset Your Password";
    const message = `You requested a password reset.\n\nClick the link below to reset your password:\n\n${resetUrl}\n\nThis link will expire in 1 hour.\n\nIf you didn't request this, please ignore this email.`;

    return this.sendNotificationEmail(to, subject, message);
  }

  /**
   * Send a team invitation email
   * 
   * @param to - Recipient email
   * @param inviterName - Name of person sending invitation
   * @param organizationName - Name of organization
   * @returns Email result
   */
  async sendTeamInvitation(
    to: string,
    inviterName: string,
    organizationName: string
  ): Promise<EmailResult> {
    const subject = `You've been invited to join ${organizationName}`;
    const message = `${inviterName} has invited you to join ${organizationName} on Emerald AI Suite.\n\nClick the link below to accept the invitation and create your account:\n\n${process.env.NEXT_PUBLIC_APP_URL}/auth/register\n\nIf you already have an account, simply log in to access the organization.\n\nBest regards,\nThe Emerald AI Team`;

    return this.sendNotificationEmail(to, subject, message);
  }
}

export const emailService = new EmailService();