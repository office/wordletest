import Link from 'next/link';

import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { Icons } from '@/components/icons';
import { UserAuthForm } from '@/components/user-auth-form';

export const metadata = {
  title: 'Create an account',
  description: 'Create an account to get started.',
};

export default function RegisterPage() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: 'ghost' }),
          'absolute left-4 top-4 md:left-8 md:top-8'
        )}
      >
        <>
          <Icons.chevronLeft className="mr-2 h-4 w-4" />
          Back
        </>
      </Link>
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <Icons.swords className="mx-auto h-6 w-6" />
          <h1 className="text-2xl font-semibold tracking-tight">
            Log in to WordDuel
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter your email to log in to your account
          </p>
        </div>
        <UserAuthForm />
      </div>
    </div>
  );
}