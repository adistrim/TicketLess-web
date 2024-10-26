import React from 'react';
import { Feature } from '@/types/features';
import {
    Calendar,
    CreditCard,
    Globe,
    Code
} from 'lucide-react';

export const features: Feature[] = [
    {
        icon: React.createElement(Globe, { className: "h-6 w-6" }),
        title: "Custom Subdomains",
        description: "Get your own branded event portal with custom subdomains for a professional touch.",
        highlight: "New"
    },
    {
        icon: React.createElement(CreditCard, { className: "h-6 w-6" }),
        title: "Flexible Payments",
        description: "Choose your preferred payment gateway or use our integrated Razorpay solution.",
        highlight: "Popular"
    },
    {
        icon: React.createElement(Calendar, { className: "h-6 w-6" }),
        title: "Sub-event Management",
        description: "Seamlessly manage multiple sub-events under your main event.",
        highlight: ""
    },
    {
        icon: React.createElement(Code, { className: "h-6 w-6" }),
        title: "Modern Tech Stack",
        description: "Built with Rust, Next.js, and PostgreSQL for ultimate performance.",
        highlight: "Enterprise"
    }
];
