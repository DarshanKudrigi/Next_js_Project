'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { type FormEvent, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { KeyRound, Mail } from 'lucide-react';
import AnimatedButton from '@/components/ui/AnimatedButton';
import InputField from '@/components/ui/InputField';

type LoginErrors = {
  email?: string;
  password?: string;
};

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: 'easeOut',
      staggerChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<LoginErrors>({});
  const [submitState, setSubmitState] = useState<'idle' | 'loading' | 'success'>('idle');
  const [shakeCount, setShakeCount] = useState(0);

  const isDisabled = useMemo(() => submitState !== 'idle', [submitState]);

  const validate = () => {
    const nextErrors: LoginErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) {
      nextErrors.email = 'Please enter your email.';
    } else if (!emailRegex.test(email)) {
      nextErrors.email = 'Enter a valid email format.';
    }

    if (!password.trim()) {
      nextErrors.password = 'Password is required.';
    }

    return nextErrors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isDisabled) {
      return;
    }

    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setShakeCount((current) => current + 1);
      return;
    }

    setSubmitState('loading');

    setTimeout(() => {
      setSubmitState('success');
      setTimeout(() => {
        router.push('/');
      }, 600);
    }, 2000);
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-[#fff1f2] via-[#ffe4e6] to-[#ede9fe] px-4 py-10 sm:px-6">
      <div className="pointer-events-none absolute left-[-10%] top-[-20%] h-64 w-64 rounded-full bg-[#fda4af]/40 blur-3xl" />
      <div className="pointer-events-none absolute right-[-8%] top-[22%] h-72 w-72 rounded-full bg-[#c4b5fd]/45 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-18%] left-[30%] h-72 w-72 rounded-full bg-[#fecdd3]/40 blur-3xl" />

      <motion.section
        key={shakeCount}
        initial={{ x: 0 }}
        animate={
          shakeCount > 0
            ? {
                x: [0, -12, 12, -8, 8, -4, 4, 0],
                transition: { duration: 0.42 },
              }
            : { x: 0 }
        }
        className="relative z-10 w-full max-w-md rounded-[28px] border border-white/30 bg-white/40 p-6 shadow-[0_24px_65px_rgba(139,92,246,0.18)] backdrop-blur-xl sm:p-8"
      >
        <motion.div variants={containerVariants} initial="hidden" animate="show" className="space-y-5">
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1.5 text-sm font-medium text-[#4b5563]">
            <span className="inline-block h-2 w-2 rounded-full bg-[#fb7185]" />
            MeadowPay
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-2">
            <h1 className="font-['Plus_Jakarta_Sans',sans-serif] text-3xl font-semibold tracking-tight text-[#1f2937]">
              Welcome Back
            </h1>
            <p className="text-sm text-[#6b7280]">Sign in to continue your personalized finance experience.</p>
          </motion.div>

          <motion.form variants={itemVariants} onSubmit={handleSubmit} noValidate className="space-y-4">
            <InputField
              id="email"
              type="email"
              label="Email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
                if (errors.email) {
                  setErrors((current) => ({ ...current, email: undefined }));
                }
              }}
              error={errors.email}
              icon={<Mail className="h-4 w-4" />}
              autoComplete="email"
              disabled={isDisabled}
            />

            <InputField
              id="password"
              type="password"
              label="Password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
                if (errors.password) {
                  setErrors((current) => ({ ...current, password: undefined }));
                }
              }}
              error={errors.password}
              icon={<KeyRound className="h-4 w-4" />}
              autoComplete="current-password"
              disabled={isDisabled}
            />

            <div className="flex justify-end">
              <Link href="#" className="text-sm font-medium text-[#7c3aed] transition hover:text-[#6d28d9]">
                Forgot Password?
              </Link>
            </div>

            <AnimatedButton label="Sign In" status={submitState} className="mt-1" />
          </motion.form>

          <motion.div variants={itemVariants} className="text-center text-sm text-[#6b7280]">
            Don't have an account?{' '}
            <Link href="/register" className="font-semibold text-[#f43f5e] transition hover:text-[#e11d48]">
              Create one →
            </Link>
          </motion.div>

          <AnimatePresence>
            {submitState === 'success' ? (
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                className="text-center text-sm font-medium text-[#2f855a]"
              >
                Signed in successfully. Redirecting...
              </motion.p>
            ) : null}
          </AnimatePresence>
        </motion.div>
      </motion.section>
    </main>
  );
}
