'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { type FormEvent, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Globe, KeyRound, Mail, MapPin, User } from 'lucide-react';
import AnimatedButton from '@/components/ui/AnimatedButton';
import InputField from '@/components/ui/InputField';
import PasswordStrength from '@/components/ui/PasswordStrength';
import Stepper from '@/components/ui/Stepper';

type FormValues = {
  fullName: string;
  email: string;
  city: string;
  country: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const steps = ['Personal Info', 'Address', 'Security'];

const stepVariants = {
  enter: (direction: 1 | -1) => ({
    opacity: 0,
    x: direction > 0 ? 42 : -42,
  }),
  center: { opacity: 1, x: 0 },
  exit: (direction: 1 | -1) => ({
    opacity: 0,
    x: direction > 0 ? -42 : 42,
  }),
};

export default function RegisterPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [values, setValues] = useState<FormValues>({
    fullName: '',
    email: '',
    city: '',
    country: '',
    password: '',
    confirmPassword: '',
    terms: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitState, setSubmitState] = useState<'idle' | 'loading' | 'success'>('idle');
  const [shakeCount, setShakeCount] = useState(0);

  const setFieldValue = <K extends keyof FormValues>(field: K, value: FormValues[K]) => {
    setValues((current) => ({ ...current, [field]: value }));
    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: undefined }));
    }
  };

  const validateCurrentStep = () => {
    const stepErrors: FormErrors = {};

    if (currentStep === 0) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!values.fullName.trim()) stepErrors.fullName = 'Full name is required.';
      if (!values.email.trim()) stepErrors.email = 'Email is required.';
      else if (!emailRegex.test(values.email)) stepErrors.email = 'Use a valid email address.';
    }

    if (currentStep === 1) {
      if (!values.city.trim()) stepErrors.city = 'City is required.';
      if (!values.country.trim()) stepErrors.country = 'Country is required.';
    }

    if (currentStep === 2) {
      if (!values.password.trim()) stepErrors.password = 'Password is required.';
      if (!values.confirmPassword.trim()) stepErrors.confirmPassword = 'Please confirm your password.';
      if (values.password && values.confirmPassword && values.password !== values.confirmPassword) {
        stepErrors.confirmPassword = 'Passwords do not match.';
      }
      if (!values.terms) stepErrors.terms = 'You must accept the terms.';
    }

    return stepErrors;
  };

  const goToNext = () => {
    const stepErrors = validateCurrentStep();
    setErrors(stepErrors);

    if (Object.keys(stepErrors).length > 0) {
      setShakeCount((current) => current + 1);
      return;
    }

    if (currentStep < steps.length - 1) {
      setDirection(1);
      setCurrentStep((current) => current + 1);
    }
  };

  const goToPrevious = () => {
    if (currentStep > 0) {
      setDirection(-1);
      setCurrentStep((current) => current - 1);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submitState !== 'idle') {
      return;
    }

    const stepErrors = validateCurrentStep();
    setErrors(stepErrors);

    if (Object.keys(stepErrors).length > 0) {
      setShakeCount((current) => current + 1);
      return;
    }

    setSubmitState('loading');

    setTimeout(() => {
      setSubmitState('success');
      setTimeout(() => {
        router.push('/');
      }, 650);
    }, 2000);
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-[#fff1f2] via-[#ffe4e6] to-[#ede9fe] px-4 py-10 sm:px-6">
      <div className="pointer-events-none absolute left-[10%] top-[-15%] h-64 w-64 rounded-full bg-[#fda4af]/40 blur-3xl" />
      <div className="pointer-events-none absolute right-[-10%] top-[30%] h-80 w-80 rounded-full bg-[#c4b5fd]/45 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-20%] left-[38%] h-80 w-80 rounded-full bg-[#fecdd3]/40 blur-3xl" />

      <motion.section
        key={shakeCount}
        initial={{ x: 0 }}
        animate={
          shakeCount > 0
            ? {
                x: [0, -11, 11, -8, 8, -4, 4, 0],
                transition: { duration: 0.4 },
              }
            : { x: 0 }
        }
        className="relative z-10 w-full max-w-xl rounded-[28px] border border-white/30 bg-white/40 p-6 shadow-[0_24px_65px_rgba(139,92,246,0.18)] backdrop-blur-xl sm:p-8"
      >
        <div className="mb-5">
          <h1 className="font-['Plus_Jakarta_Sans',sans-serif] text-3xl font-semibold tracking-tight text-[#1f2937]">
            Create Your Account
          </h1>
          <p className="mt-2 text-sm text-[#6b7280]">A calm onboarding flow designed to get you started in under a minute.</p>
        </div>

        <Stepper steps={steps} currentStep={currentStep} />

        <form onSubmit={handleSubmit} noValidate>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentStep}
              custom={direction}
              variants={stepVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="space-y-4"
            >
              {currentStep === 0 ? (
                <>
                  <InputField
                    id="fullName"
                    label="Full Name"
                    value={values.fullName}
                    onChange={(event) => setFieldValue('fullName', event.target.value)}
                    error={errors.fullName}
                    icon={<User className="h-4 w-4" />}
                    autoComplete="name"
                  />
                  <InputField
                    id="email"
                    type="email"
                    label="Email"
                    value={values.email}
                    onChange={(event) => setFieldValue('email', event.target.value)}
                    error={errors.email}
                    icon={<Mail className="h-4 w-4" />}
                    autoComplete="email"
                  />
                </>
              ) : null}

              {currentStep === 1 ? (
                <>
                  <InputField
                    id="city"
                    label="City"
                    value={values.city}
                    onChange={(event) => setFieldValue('city', event.target.value)}
                    error={errors.city}
                    icon={<MapPin className="h-4 w-4" />}
                    autoComplete="address-level2"
                  />
                  <InputField
                    id="country"
                    label="Country"
                    value={values.country}
                    onChange={(event) => setFieldValue('country', event.target.value)}
                    error={errors.country}
                    icon={<Globe className="h-4 w-4" />}
                    autoComplete="country-name"
                  />
                </>
              ) : null}

              {currentStep === 2 ? (
                <>
                  <InputField
                    id="password"
                    type="password"
                    label="Password"
                    value={values.password}
                    onChange={(event) => setFieldValue('password', event.target.value)}
                    error={errors.password}
                    icon={<KeyRound className="h-4 w-4" />}
                    autoComplete="new-password"
                  />
                  <PasswordStrength password={values.password} />
                  <InputField
                    id="confirmPassword"
                    type="password"
                    label="Confirm Password"
                    value={values.confirmPassword}
                    onChange={(event) => setFieldValue('confirmPassword', event.target.value)}
                    error={errors.confirmPassword}
                    icon={<KeyRound className="h-4 w-4" />}
                    autoComplete="new-password"
                  />
                  <div>
                    <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/50 bg-white/45 p-3 text-sm text-[#4b5563]">
                      <input
                        type="checkbox"
                        checked={values.terms}
                        onChange={(event) => setFieldValue('terms', event.target.checked)}
                        className="mt-0.5 h-4 w-4 rounded border-[#d1d5db] text-[#f43f5e] focus:ring-[#f43f5e]/25"
                      />
                      I agree to the Terms and Privacy Policy.
                    </label>
                    {errors.terms ? (
                      <motion.p
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-2 text-xs font-medium text-[#be4d67]"
                      >
                        {errors.terms}
                      </motion.p>
                    ) : null}
                  </div>
                </>
              ) : null}
            </motion.div>
          </AnimatePresence>

          <div className="mt-7 flex items-center justify-between gap-3">
            <motion.button
              type="button"
              onClick={goToPrevious}
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.99 }}
              disabled={currentStep === 0 || submitState !== 'idle'}
              className="h-12 rounded-xl border border-white/60 bg-white/60 px-5 text-sm font-semibold text-[#4b5563] disabled:cursor-not-allowed disabled:opacity-45"
            >
              Back
            </motion.button>

            {currentStep < steps.length - 1 ? (
              <motion.button
                type="button"
                onClick={goToNext}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.99 }}
                className="h-12 rounded-xl bg-gradient-to-r from-[#fb7185] via-[#f43f5e] to-[#8b5cf6] px-6 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(139,92,246,0.25)]"
              >
                Continue
              </motion.button>
            ) : (
              <div className="w-[150px]">
                <AnimatedButton label="Create Account" status={submitState} />
              </div>
            )}
          </div>
        </form>

        <div className="mt-6 text-center text-sm text-[#6b7280]">
          Already have an account?{' '}
          <Link href="/login" className="font-semibold text-[#f43f5e] transition hover:text-[#e11d48]">
            Sign in
          </Link>
        </div>
      </motion.section>
    </main>
  );
}
