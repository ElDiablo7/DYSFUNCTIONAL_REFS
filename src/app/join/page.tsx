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
const joinSchema = z.object({
  fullName: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  telephone: z.string().min(10, 'Valid telephone number required'),
  location: z.string().min(2, 'Location is required'),
  experience: z.string().min(10, 'Please tell us about your experience'),
});

type JoinFormValues = z.infer<typeof joinSchema>;

export default function JoinPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<JoinFormValues>({
    resolver: zodResolver(joinSchema),
  });

  const onSubmit = async (data: JoinFormValues) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'c8ff8750-040e-4257-803a-63a32315281a',
          subject: `New Application to Join from ${data.fullName}`,
          from_name: 'Dysfunctional Referees Website',
          replyto: data.email,
          ...data
        })
      });
      
      const result = await response.json();
      if (result.success === 'true' || result.success === true) {
        setIsSuccess(true);
      } else {
        alert('Failed to submit application. Please try again.');
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
            Application Received
          </h1>
          <p className="mt-4 text-lg text-gray-400">
            Thank you for applying to join The Dysfunctional Referees. We will review your application and get in touch soon.
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
        <Breadcrumbs items={[{ label: 'Join the Team' }]} />
        
        <div className="mt-12 text-center md:text-left">
          <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold uppercase tracking-wide text-white sm:text-5xl">
            Join the <span className="text-metallic-gold">Team</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-400">
            We are looking for reliable, capable match officials to join our network. 
          </p>
        </div>

        <div className="mt-12 rounded-2xl border border-white/10 bg-navy/30 p-6 sm:p-10">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-300">Full Name</label>
                <input
                  {...register('fullName')}
                  type="text"
                  className="mt-2 block w-full rounded-lg border border-white/10 bg-midnight px-4 py-2.5 text-white focus:border-pink focus:outline-none focus:ring-1 focus:ring-pink"
                />
                {errors.fullName && <p className="mt-1 text-sm text-red-400 flex items-center gap-1"><AlertCircle className="h-3 w-3"/>{errors.fullName.message}</p>}
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

              <div className="sm:col-span-2">
                <label htmlFor="location" className="block text-sm font-medium text-gray-300">Based Location (Town/City)</label>
                <input
                  {...register('location')}
                  type="text"
                  className="mt-2 block w-full rounded-lg border border-white/10 bg-midnight px-4 py-2.5 text-white focus:border-pink focus:outline-none focus:ring-1 focus:ring-pink"
                />
                {errors.location && <p className="mt-1 text-sm text-red-400 flex items-center gap-1"><AlertCircle className="h-3 w-3"/>{errors.location.message}</p>}
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="experience" className="block text-sm font-medium text-gray-300">Officiating Experience</label>
                <p className="mt-1 text-xs text-gray-500 mb-2">Current level, formats (sevens/fifteens), years of experience, governing body etc.</p>
                <textarea
                  {...register('experience')}
                  rows={5}
                  className="block w-full rounded-lg border border-white/10 bg-midnight px-4 py-2.5 text-white focus:border-pink focus:outline-none focus:ring-1 focus:ring-pink"
                ></textarea>
                {errors.experience && <p className="mt-1 text-sm text-red-400 flex items-center gap-1"><AlertCircle className="h-3 w-3"/>{errors.experience.message}</p>}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`btn-secondary w-full justify-center py-4 text-lg ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Submitting...' : 'Apply to Join'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
