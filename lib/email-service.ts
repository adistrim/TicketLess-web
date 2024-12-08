import nodemailer from 'nodemailer';
import { z } from 'zod';

export const BetaRequestSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    eventName: z.string().min(2, "Event name is required"),
    expectedPeople: z.string().refine(val => !isNaN(Number(val)) && Number(val) > 0, "Number of people must be positive"),
    eventDate: z.string().refine(val => !isNaN(Date.parse(val)), "Invalid date"),
    expectedTicketPrice: z.string().refine(val => !isNaN(Number(val)) && Number(val) >= 0, "Price must be non-negative"),
    hasSponsor: z.boolean(),
    sponsorDetails: z.string().optional(),
    needPromoCode: z.boolean().optional(),
    subEvents: z.string().optional(),
    additionalInfo: z.string().optional()
});

export type BetaRequestData = z.infer<typeof BetaRequestSchema>;

export default async function sendBetaRequestEmail(data: BetaRequestData) {

    const validationResult = BetaRequestSchema.safeParse(data);
    if (!validationResult.success) {
        throw new Error('Invalid form data');
    }

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.EMAIL_PORT || '465'),
        secure: process.env.EMAIL_SECURE === 'true',
        auth: {
            user: process.env.EMAIL_FROM,
            pass: process.env.EMAIL_PASS
        }
    });

    const mailOptions = {
        from: process.env.EMAIL_FROM,
        to: [process.env.ADMIN_EMAIL, data.email],
        subject: 'Ticketless Beta Request Received',
        html: `
            <html>
            <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto;">
                <div style="background-color: #f4f4f4; padding: 20px; text-align: center;">
                    <h1 style="color: #2c3e50;">Ticketless Beta Request</h1>
                </div>
                <div style="padding: 20px;">
                    <h2>Submission Details</h2>
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Name:</strong></td>
                            <td style="padding: 10px; border-bottom: 1px solid #ddd;">${data.name}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Email:</strong></td>
                            <td style="padding: 10px; border-bottom: 1px solid #ddd;">${data.email}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Event Name:</strong></td>
                            <td style="padding: 10px; border-bottom: 1px solid #ddd;">${data.eventName}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Expected People:</strong></td>
                            <td style="padding: 10px; border-bottom: 1px solid #ddd;">${data.expectedPeople}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Event Date:</strong></td>
                            <td style="padding: 10px; border-bottom: 1px solid #ddd;">${data.eventDate}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Expected Ticket Price (INR):</strong></td>
                            <td style="padding: 10px; border-bottom: 1px solid #ddd;">${data.expectedTicketPrice}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Has Sponsors:</strong></td>
                            <td style="padding: 10px; border-bottom: 1px solid #ddd;">${data.hasSponsor ? 'Yes' : 'No'}</td>
                        </tr>
                        ${data.hasSponsor && data.sponsorDetails ? `
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Sponsor Details:</strong></td>
                            <td style="padding: 10px; border-bottom: 1px solid #ddd;">${data.sponsorDetails}</td>
                        </tr>` : ''}
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Needs Promo Code Support:</strong></td>
                            <td style="padding: 10px; border-bottom: 1px solid #ddd;">${data.needPromoCode ? 'Yes' : 'No'}</td>
                        </tr>
                        ${data.subEvents ? `
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Sub Events:</strong></td>
                            <td style="padding: 10px; border-bottom: 1px solid #ddd;">${data.subEvents}</td>
                        </tr>` : ''}
                        ${data.additionalInfo ? `
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Additional Information:</strong></td>
                            <td style="padding: 10px; border-bottom: 1px solid #ddd;">${data.additionalInfo}</td>
                        </tr>` : ''}
                    </table>
                </div>
                <div style="background-color: #f4f4f4; padding: 20px; text-align: center;">
                    <p style="margin: 0; color: #777;">© ${new Date().getFullYear()} Ticketless. All rights reserved.</p>
                </div>
            </body>
            </html>
        `,
        text: `Ticketless Beta Request

Name: ${data.name}
Email: ${data.email}
Event Name: ${data.eventName}
Expected People: ${data.expectedPeople}
Event Date: ${data.eventDate}
Expected Ticket Price: $${data.expectedTicketPrice}
Has Sponsors: ${data.hasSponsor ? 'Yes' : 'No'}
${data.hasSponsor && data.sponsorDetails ? `Sponsor Details: ${data.sponsorDetails}\n` : ''}
Needs Promo Code Support: ${data.needPromoCode ? 'Yes' : 'No'}
${data.subEvents ? `Sub Events: ${data.subEvents}\n` : ''}
${data.additionalInfo ? `Additional Information: ${data.additionalInfo}` : ''}
        `
    };

    await transporter.sendMail({
        ...mailOptions,
        to: mailOptions.to.filter(Boolean) as string[]
    });
}
