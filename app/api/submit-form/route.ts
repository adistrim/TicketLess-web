import { NextRequest, NextResponse } from 'next/server';
import sendBetaRequestEmail, { BetaRequestSchema } from '@/lib/email-service';

export async function POST(request: NextRequest) {
    try {
        const rawBody = await request.text();

        let data;
        try {
            data = JSON.parse(rawBody);
        } catch {
            return NextResponse.json(
                { error: 'Invalid JSON input' },
                { status: 400 }
            );
        }

        const validationResult = BetaRequestSchema.safeParse(data);
        if (!validationResult.success) {
            return NextResponse.json(
                { error: 'Invalid form data', details: validationResult.error.errors },
                { status: 400 }
            );
        }

        await sendBetaRequestEmail(validationResult.data);

        return NextResponse.json(
            { message: 'Form submitted successfully' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Form submission error:', error);
        return NextResponse.json(
            { error: 'Failed to process form submission' },
            { status: 500 }
        );
    }
}
