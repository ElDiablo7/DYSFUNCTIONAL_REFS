'use server';

import { signIn } from '@/auth';
import { AuthError } from 'next-auth';

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    // NextAuth handles the redirect to default page if successful
    // Or we can specify redirectTo
    await signIn('credentials', {
      ...Object.fromEntries(formData),
      redirectTo: '/profile', // We'll redirect everyone to /profile, and /profile can check if admin and redirect to /admin
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid username or password.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}
