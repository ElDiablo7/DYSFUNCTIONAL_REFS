'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CheckCircle2, AlertCircle } from 'lucide-react';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import Link from 'next/link';
import { submitEnquiry } from '@/actions/enquiries';

// Use a simplified schema for the UI implementation
const bookingSchema = z.object({
  fullName: z.string().min(2, 'Name is required'),
  organisation: z.string().min(2, 'Organisation is required'),
  email: z.string().email('Invalid email address'),
  telephone: z.string().min(10, 'Valid telephone number required'),
  eventName: z.string().min(2, 'Event name is required'),
  eventDate: z.string().min(1, 'Event date is required'),
  venue: z.string().min(2, 'Venue is required'),
  format: z.string().min(1, 'Format is required'),
  message: z.string().optional(),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

export default function BookPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
  });

  const onSubmit = async (data: BookingFormValues) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          type: 'BOOKING',
          ...data
        })
      });
      
      const result = await response.json();
      if (result.success === 'true' || result.success === true) {
        setIsSuccess(true);
      } else {
        alert('Failed to submit enquiry. Please try again.');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred while submitting. Please try again.');
    }
    setIsSubmitting(false);
  };

  if (isSuccess) {
    return (
      <div className="py-20">
        <div className="container-narrow text-center">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-green-500/10 text-green-500 mb-8">
            <CheckCircle2 className="h-12 w-12" />
          </div>
          <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold uppercase tracking-wide text-white">
            Enquiry Received
          </h1>
          <p className="mt-4 text-lg text-gray-400">
            Thank you for reaching out. We have received your booking enquiry and will be in touch shortly to discuss your requirements.
          </p>
          <div className="mt-10">
            <Link href="/" className="btn-secondary">
              Return Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20">
      <div className="container-narrow">
        <Breadcrumbs items={[{ label: 'Book Officials' }]} />
        
        <div className="mt-12 text-center md:text-left">
          <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold uppercase tracking-wide text-white sm:text-5xl">
            Book <span className="text-metallic-gold">Officials</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-400">
            Tell us about your upcoming tournament, festival or fixture. 
          </p>
        </div>

        <div className="mt-12 rounded-2xl border border-white/10 bg-navy/30 p-6 sm:p-10">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* Contact Details */}
            <div>
              <h2 className="font-[family-name:var(--font-display)] text-xl font-bold uppercase text-white mb-6 border-b border-white/10 pb-2">
                1. Your Details
              </h2>
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-300">Full Name</label>
                  <input
                    {...register('fullName')}
                    type="text"
                    className="mt-2 block w-full rounded-lg border border-white/10 bg-midnight px-4 py-2.5 text-white focus:border-pink focus:outline-none focus:ring-1 focus:ring-pink"
                  />
                  {errors.fullName && <p className="mt-1 text-sm text-red-400 flex items-center gap-1"><AlertCircle className="h-3 w-3"/>{errors.fullName.message}</p>}
                </div>
                <div>
                  <label htmlFor="organisation" className="block text-sm font-medium text-gray-300">Organisation/Club</label>
                  <input
                    {...register('organisation')}
                    type="text"
                    className="mt-2 block w-full rounded-lg border border-white/10 bg-midnight px-4 py-2.5 text-white focus:border-pink focus:outline-none focus:ring-1 focus:ring-pink"
                  />
                  {errors.organisation && <p className="mt-1 text-sm text-red-400 flex items-center gap-1"><AlertCircle className="h-3 w-3"/>{errors.organisation.message}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email Address</label>
                  <input
                    {...register('email')}
                    type="email"
                    className="mt-2 block w-full rounded-lg border border-white/10 bg-midnight px-4 py-2.5 text-white focus:border-pink focus:outline-none focus:ring-1 focus:ring-pink"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-400 flex items-center gap-1"><AlertCircle className="h-3 w-3"/>{errors.email.message}</p>}
                </div>
                <div>
                  <label htmlFor="telephone" className="block text-sm font-medium text-gray-300">Telephone</label>
                  <input
                    {...register('telephone')}
                    type="tel"
                    className="mt-2 block w-full rounded-lg border border-white/10 bg-midnight px-4 py-2.5 text-white focus:border-pink focus:outline-none focus:ring-1 focus:ring-pink"
                  />
                  {errors.telephone && <p className="mt-1 text-sm text-red-400 flex items-center gap-1"><AlertCircle className="h-3 w-3"/>{errors.telephone.message}</p>}
                </div>
              </div>
            </div>

            {/* Event Details */}
            <div>
              <h2 className="font-[family-name:var(--font-display)] text-xl font-bold uppercase text-white mb-6 border-b border-white/10 pb-2 mt-10">
                2. Event Details
              </h2>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor="eventName" className="block text-sm font-medium text-gray-300">Event Name</label>
                  <input
                    {...register('eventName')}
                    type="text"
                    className="mt-2 block w-full rounded-lg border border-white/10 bg-midnight px-4 py-2.5 text-white focus:border-pink focus:outline-none focus:ring-1 focus:ring-pink"
                  />
                  {errors.eventName && <p className="mt-1 text-sm text-red-400 flex items-center gap-1"><AlertCircle className="h-3 w-3"/>{errors.eventName.message}</p>}
                </div>
                <div>
                  <label htmlFor="eventDate" className="block text-sm font-medium text-gray-300">Date</label>
                  <input
                    {...register('eventDate')}
                    type="date"
                    className="mt-2 block w-full rounded-lg border border-white/10 bg-midnight px-4 py-2.5 text-white focus:border-pink focus:outline-none focus:ring-1 focus:ring-pink [color-scheme:dark]"
                  />
                  {errors.eventDate && <p className="mt-1 text-sm text-red-400 flex items-center gap-1"><AlertCircle className="h-3 w-3"/>{errors.eventDate.message}</p>}
                </div>
                <div>
                  <label htmlFor="format" className="block text-sm font-medium text-gray-300">Rugby Format</label>
                  <select
                    {...register('format')}
                    className="mt-2 block w-full rounded-lg border border-white/10 bg-midnight px-4 py-2.5 text-white focus:border-pink focus:outline-none focus:ring-1 focus:ring-pink"
                  >
                    <option value="">Select format...</option>
                    <option value="Sevens">Sevens</option>
                    <option value="Tens">Tens</option>
                    <option value="Fifteens">Fifteens</option>
                    <option value="Touch/Tag">Touch/Tag</option>
                    <option value="Mixed">Mixed</option>
                  </select>
                  {errors.format && <p className="mt-1 text-sm text-red-400 flex items-center gap-1"><AlertCircle className="h-3 w-3"/>{errors.format.message}</p>}
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="venue" className="block text-sm font-medium text-gray-300">Venue / Location</label>
                  <input
                    {...register('venue')}
                    type="text"
                    className="mt-2 block w-full rounded-lg border border-white/10 bg-midnight px-4 py-2.5 text-white focus:border-pink focus:outline-none focus:ring-1 focus:ring-pink"
                  />
                  {errors.venue && <p className="mt-1 text-sm text-red-400 flex items-center gap-1"><AlertCircle className="h-3 w-3"/>{errors.venue.message}</p>}
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300">Additional Details (Optional)</label>
                  <p className="mt-1 text-xs text-gray-500 mb-2">Number of pitches, approximate matches, specific requirements etc.</p>
                  <textarea
                    {...register('message')}
                    rows={4}
                    className="block w-full rounded-lg border border-white/10 bg-midnight px-4 py-2.5 text-white focus:border-pink focus:outline-none focus:ring-1 focus:ring-pink"
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`btn-primary w-full justify-center py-4 text-lg ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Sending...' : 'Submit Booking Enquiry'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
