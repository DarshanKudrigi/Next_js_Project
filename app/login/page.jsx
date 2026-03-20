'use client';

import { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, ArrowRight, ShoppingBag, Zap, Shield } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ email: '', password: '' });

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (errors.email) {
      setErrors((prev) => ({ ...prev, email: '' }));
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (errors.password) {
      setErrors((prev) => ({ ...prev, password: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = { email: '', password: '' };
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) {
      nextErrors.email = 'Email address is required.';
    } else if (!emailRegex.test(email)) {
      nextErrors.email = 'Please enter a valid email address.';
    }

    if (!password.trim()) {
      nextErrors.password = 'Password is required.';
    } else if (password.length < 6) {
      nextErrors.password = 'Password must be at least 6 characters.';
    }

    setErrors(nextErrors);
    if (!nextErrors.email && !nextErrors.password) {
      // Placeholder for real login integration.
      console.log('Login payload:', { email, password });
    }
  };

  return (
    <main className="min-h-screen w-full lg:grid lg:grid-cols-2">
      <section className="relative hidden overflow-hidden bg-linear-to-br from-[#1A1A1A] to-[#2D1A0E] lg:flex lg:min-h-screen lg:flex-col lg:justify-center lg:p-10 xl:p-14">
        <div className="relative z-10 mx-auto flex w-full max-w-140 flex-col justify-center">
          <h1 className="max-w-115 text-[72px] font-light leading-[0.96] tracking-[-0.03em] text-[#F8F5F1] xl:text-[90px]">
            Move fast.
            <br />
            Buy smart.
          </h1>

          <div className="mt-10 space-y-5">
            <div className="flex items-center gap-3 text-[#D1D5DB]">
              <ShoppingBag className="h-5 w-5" />
              <p className="text-[20px] font-medium">2M+ Shoppers</p>
            </div>

            <div className="flex items-center gap-3 text-[#D1D5DB]">
              <Zap className="h-5 w-5" />
              <p className="text-[20px] font-medium">Fast Delivery</p>
            </div>

            <div className="flex items-center gap-3 text-[#D1D5DB]">
              <Shield className="h-5 w-5" />
              <p className="text-[20px] font-medium">Secure Payments</p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-10 z-10 flex items-center gap-4 xl:left-14">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/10 text-xl font-semibold text-gray-300">
            N
          </div>
          <p className="text-base text-gray-400">QuickSale © 2025</p>
        </div>
      </section>

      <section className="flex min-h-screen items-center justify-center bg-[#FEFCFA] px-6 py-10 sm:px-8 lg:px-12">
        <div className="w-full max-w-105">
          <header className="mb-8">
            <p className="text-[34px] font-semibold leading-none tracking-[-0.02em] text-[#171717] sm:text-[36px]">QuickSale</p>
            <h2 className="mt-2 text-[44px] font-bold leading-[1.02] tracking-[-0.03em] text-[#111111] sm:text-[52px]">
              Welcome back.
            </h2>
          </header>

          <form className="space-y-6 sm:space-y-7" onSubmit={handleSubmit} noValidate>
            <div className="space-y-2.5">
              <label htmlFor="email" className="mb-2 block text-sm font-semibold text-[#111827]">
                Email address
              </label>
              <div className="relative">
                <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9CA3AF]" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="you@example.com"
                  className={`h-12 w-full rounded-xl bg-white pl-10 pr-4 text-sm leading-normal text-[#111827] placeholder:text-[#9CA3AF] shadow-[0_1px_2px_rgba(0,0,0,0.03)] outline-none transition-all duration-200 focus:ring-4 ${
                    errors.email
                      ? 'border border-[#DC2626] focus:border-[#DC2626] focus:ring-[#DC2626]/15'
                      : 'border border-[#D1D5DB] focus:border-[#E8441A] focus:ring-[#E8441A]/15'
                  }`}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
              </div>
              {errors.email ? (
                <p id="email-error" className="mt-2 text-sm text-[#DC2626]">
                  {errors.email}
                </p>
              ) : null}
            </div>

            <div className="space-y-2.5">
              <label htmlFor="password" className="mb-2 block text-sm font-semibold text-[#111827]">
                Password
              </label>
              <div className="relative">
                <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9CA3AF]" />
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="Enter your password"
                  className={`h-12 w-full rounded-xl bg-white pl-10 pr-10 text-sm leading-normal text-[#111827] placeholder:text-[#9CA3AF] shadow-[0_1px_2px_rgba(0,0,0,0.03)] outline-none transition-all duration-200 focus:ring-4 ${
                    errors.password
                      ? 'border border-[#DC2626] focus:border-[#DC2626] focus:ring-[#DC2626]/15'
                      : 'border border-[#D1D5DB] focus:border-[#E8441A] focus:ring-[#E8441A]/15'
                  }`}
                  aria-invalid={Boolean(errors.password)}
                  aria-describedby={errors.password ? 'password-error' : undefined}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B7280] transition hover:text-[#374151]"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              {errors.password ? (
                <p id="password-error" className="mt-2 text-sm text-[#DC2626]">
                  {errors.password}
                </p>
              ) : null}
            </div>

            <button
              type="submit"
              className="mt-2 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#E8441A] text-sm font-semibold text-white transition-all duration-200 hover:bg-[#CF3C16] focus:outline-none focus:ring-4 focus:ring-[#E8441A]/20 active:scale-[0.99]"
            >
              Log In
              <ArrowRight className="h-4 w-4" />
            </button>

            <div className="my-4 flex items-center">
              <div className="grow border-t border-[#E5E7EB]"></div>
              <span className="px-3 text-sm text-[#6B7280]">
                or continue with
              </span>
              <div className="grow border-t border-[#E5E7EB]"></div>
            </div>

            <button
              type="button"
              className="flex h-12 w-full items-center justify-center gap-3 rounded-xl border border-[#D1D5DB] bg-white text-sm font-medium text-[#111827] transition-all duration-200 hover:border-[#9CA3AF] hover:bg-[#FAFAFA]"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.01 5.01 0 0 1-2.17 3.29v2.73h3.5c2.05-1.89 3.31-4.67 3.31-8.03Z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.25-2.72l-3.5-2.73c-.98.66-2.23 1.05-3.75 1.05-2.88 0-5.32-1.94-6.19-4.55H2.2v2.85A11 11 0 0 0 12 23Z"
                  fill="#34A853"
                />
                <path
                  d="M5.81 14.05A6.62 6.62 0 0 1 5.45 12c0-.71.13-1.4.36-2.05V7.1H2.2A11 11 0 0 0 1 12c0 1.77.42 3.44 1.2 4.9l3.61-2.85Z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.4c1.62 0 3.07.56 4.22 1.66l3.16-3.16C17.45 2.09 14.97 1 12 1A11 11 0 0 0 2.2 7.1l3.61 2.85c.87-2.61 3.31-4.55 6.19-4.55Z"
                  fill="#EA4335"
                />
              </svg>
              Continue with Google
            </button>

            <p className="pt-2 text-center text-sm text-[#6B7280]">
              Don&apos;t have an account?{' '}
              <a href="#" className="font-semibold text-[#111827] underline-offset-4 hover:underline">
                Create one
              </a>
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}
