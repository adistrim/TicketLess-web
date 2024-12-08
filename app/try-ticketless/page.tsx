"use client";

import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight } from 'lucide-react';

export default function TryTicketless() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        eventName: '',
        expectedPeople: '',
        eventDate: '',
        expectedTicketPrice: '',
        hasSponsor: false,
        needPromoCode: false,
        sponsorDetails: '',
        subEvents: '',
        additionalInfo: ''
    });

    const [emailError, setEmailError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        
        if (name === 'email') {
            setEmailError('');
        }

        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setEmailError('Please enter a valid email address');
            return;
        }

        setIsSubmitting(true);
        fetch('/api/submit-form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(async response => {
                if (!response.ok) {
                    const error = await response.json();
                    throw new Error(error.message || 'Failed to submit form');
                }
                setShowSuccess(true);
                setFormData({
                    name: '',
                    email: '',
                    eventName: '',
                    expectedPeople: '',
                    eventDate: '',
                    expectedTicketPrice: '',
                    hasSponsor: false,
                    needPromoCode: false,
                    sponsorDetails: '',
                    subEvents: '',
                    additionalInfo: ''
                });
            })
            .catch(error => {
                console.error('Error submitting form:', error);
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    const [showSuccess, setShowSuccess] = useState(false);

    useEffect(() => {
        if (showSuccess) {
            const timer = setTimeout(() => {
                setShowSuccess(false);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [showSuccess]);

    return (
        <section className="py-12 md:py-24 px-4 bg-muted/50">
            {showSuccess && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <Card className="w-[90%] max-w-md animate-in fade-in zoom-in duration-300">
                        <CardHeader>
                            <CardTitle className="text-xl text-center">Thank You!</CardTitle>
                            <CardDescription className="text-center">
                                Your beta request has been submitted successfully. We&apos;ll get back to you soon.
                            </CardDescription>
                        </CardHeader>
                    </Card>
                </div>
            )}
            
            <div className="max-w-4xl mx-auto">
                <Card className="group hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                        <CardTitle className="text-2xl md:text-4xl font-bold text-center">
                            Try Ticketless Beta
                        </CardTitle>
                        <p className="text-sm text-muted-foreground text-center mt-2">
                            Fields marked with * are required
                        </p>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Name *</Label>
                                    <Input 
                                        type="text" 
                                        id="name"
                                        name="name"
                                        placeholder="Your full name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required 
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email *</Label>
                                    <Input 
                                        type="email" 
                                        id="email"
                                        name="email"
                                        placeholder="your@email.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required 
                                        className={emailError ? 'border-red-500' : ''}
                                    />
                                    {emailError && (
                                        <p className="text-sm text-red-500">{emailError}</p>
                                    )}
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="eventName">Event Name *</Label>
                                    <Input 
                                        type="text" 
                                        id="eventName"
                                        name="eventName"
                                        placeholder="Music Festival 2024"
                                        value={formData.eventName}
                                        onChange={handleChange}
                                        required 
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="expectedPeople">Expected Number of People *</Label>
                                    <Input 
                                        type="number" 
                                        id="expectedPeople"
                                        name="expectedPeople"
                                        placeholder="500"
                                        value={formData.expectedPeople}
                                        onChange={handleChange}
                                        required 
                                        min="1"
                                    />
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="eventDate">Event Date *</Label>
                                    <Input 
                                        type="date" 
                                        id="eventDate"
                                        name="eventDate"
                                        value={formData.eventDate}
                                        onChange={handleChange}
                                        required 
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="expectedTicketPrice">Expected Ticket Price (INR) *</Label>
                                    <Input 
                                        type="number" 
                                        id="expectedTicketPrice"
                                        name="expectedTicketPrice"
                                        placeholder="200"
                                        step="0.01"
                                        value={formData.expectedTicketPrice}
                                        onChange={handleChange}
                                        required 
                                        min="0"
                                    />
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="flex items-center space-x-2">
                                    <Checkbox 
                                        id="hasSponsor"
                                        name="hasSponsor"
                                        checked={formData.hasSponsor as boolean}
                                        onCheckedChange={(checked: boolean) => setFormData(prev => ({
                                            ...prev,
                                            hasSponsor: checked
                                        }))}
                                    />
                                    <Label htmlFor="hasSponsor">Do you have sponsors?</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Checkbox 
                                        id="needPromoCode"
                                        name="needPromoCode"
                                        checked={formData.needPromoCode as boolean}
                                        onCheckedChange={(checked: boolean) => setFormData(prev => ({
                                            ...prev,
                                            needPromoCode: checked
                                        }))}
                                    />
                                    <Label htmlFor="needPromoCode">Need support for promo codes?</Label>
                                </div>
                            </div>
                            {formData.hasSponsor && (
                                <div className="space-y-2">
                                    <Label htmlFor="sponsorDetails">Sponsor Details</Label>
                                    <Textarea 
                                        id="sponsorDetails"
                                        name="sponsorDetails"
                                        placeholder="Please provide details about your sponsors"
                                        value={formData.sponsorDetails}
                                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                                            setFormData(prev => ({
                                                ...prev,
                                                sponsorDetails: e.target.value
                                            }));
                                        }}
                                        className="min-h-[100px]"
                                    />
                                </div>
                            )}
                            <div className="space-y-2">
                                <Label htmlFor="subEvents">Sub Events</Label>
                                <Input 
                                    type="text" 
                                    id="subEvents"
                                    name="subEvents"
                                    placeholder="VIP Sessions, After Parties"
                                    value={formData.subEvents}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="additionalInfo">Additional Information</Label>
                                <Textarea 
                                    id="additionalInfo"
                                    name="additionalInfo"
                                    placeholder="Any special requirements or additional context about your event"
                                    value={formData.additionalInfo}
                                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                                        setFormData(prev => ({
                                            ...prev,
                                            additionalInfo: e.target.value
                                        }));
                                    }}
                                    className="min-h-[120px]"
                                />
                            </div>
                            <div className="flex justify-center">
                                <Button 
                                    type="submit" 
                                    size="lg" 
                                    className="group w-full sm:w-auto"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Submitting...' : 'Submit Beta Request'}
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
