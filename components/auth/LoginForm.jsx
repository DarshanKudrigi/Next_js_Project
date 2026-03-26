'use client';

import { useState } from 'react';
import { Mail, ArrowRight, Loader } from 'lucide-react';
import PasswordInput from './PasswordInput';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!password.trim()) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
        setEmail('');
        setPassword('');
      }, 1500);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (errors.email) {
      setErrors({ ...errors, email: '' });
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (errors.password) {
      setErrors({ ...errors, password: '' });
    }
  };

  return (
    <>
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes googleIconPop {
          0%, 100% {
            transform: scale(1) rotate(0deg);
          }
          50% {
            transform: scale(1.15) rotate(12deg);
          }
        }
        
        @keyframes googleGlow {
          from {
            box-shadow: 0 0 0 0 rgba(232, 68, 26, 0.1);
          }
          to {
            box-shadow: 0 0 0 8px rgba(232, 68, 26, 0);
          }
        }
        
        @keyframes googleShimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 300ms ease-out forwards;
        }
        
        .animate-fadeUp {
          animation: fadeUp 400ms ease-out forwards;
        }
        
        .animate-slideUp {
          animation: slideUp 300ms ease-out forwards;
        }
        
        .google-button-icon {
          transition: all 300ms cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        .google-button-wrapper:hover .google-button-icon {
          animation: googleIconPop 600ms ease-out;
        }
        
        .google-button-wrapper:active .google-button-icon {
          transform: scale(0.9);
        }
      `}</style>

      <form onSubmit={handleSubmit} className="w-full max-w-md animate-fadeUp">
        {/* Trust Badge */}
        <div className="mb-6 inline-block">
          <span className="bg-[#FFF3EE] text-[#E8441A] text-xs font-medium rounded-full px-3 py-1">
            ✦ Trusted by 2M+ shoppers
          </span>
        </div>

        {/* Logo */}
        <h1
          style={{ fontFamily: 'var(--font-playfair)' }}
          className="text-3xl font-bold text-[#1A1A1A] tracking-tight"
        >
          QuickSale
        </h1>

        {/* Heading */}
        <h2
          style={{ fontFamily: 'var(--font-playfair)' }}
          className="text-4xl font-bold text-[#1A1A1A] mt-3 tracking-tight"
        >
          Welcome back.
        </h2>

        {/* Subtext */}
        <p className="text-sm text-[#9CA3AF] mt-3 mb-8">
          Log in to continue your QuickSale experience.
        </p>

        {/* Email Field */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-[#374151] mb-2">
            Email address
          </label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#C4C0BB]" />
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="you@example.com"
              className={`w-full bg-white px-4 py-3.5 pl-12 rounded-xl text-[#1A1A1A] placeholder:text-[#C4C0BB] text-sm transition-all duration-200 ${
                errors.email
                  ? 'border-2 border-[#DC2626] focus:outline-none focus:ring-4 focus:ring-[#DC2626]/10'
                  : 'border border-[#E8E4DF] focus:outline-none focus:border-[#E8441A] focus:ring-4 focus:ring-[#E8441A]/10'
              }`}
            />
          </div>
          {errors.email && (
            <p className="text-[#DC2626] text-xs mt-1 animate-fadeIn">{errors.email}</p>
          )}
        </div>

        {/* Password Field */}
        <div className="mb-3">
          <label className="block text-sm font-semibold text-[#374151] mb-2">
            Password
          </label>
          <PasswordInput
            value={password}
            onChange={handlePasswordChange}
            error={errors.password}
            placeholder="Enter your password"
          />
        </div>

        {/* Forgot Password Link */}
        <div className="flex justify-end mb-6">
          <a href="#" className="text-[#E8441A] text-xs font-medium hover:underline transition-all">
            Forgot password?
          </a>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-[#E8441A] text-white font-bold text-sm tracking-wide py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-[#C73A15] active:scale-[0.99] hover:scale-[1.01] transition-all duration-200 disabled:opacity-70"
        >
          {isLoading ? (
            <Loader className="w-4 h-4 animate-spin" />
          ) : (
            <>
              Log In
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>

        {/* Divider */}
        <div className="flex items-center gap-4 my-6">
          <div className="flex-1 h-px bg-[#EDE9E4]"></div>
          <span className="text-[#B0A99F] text-xs">or continue with</span>
          <div className="flex-1 h-px bg-[#EDE9E4]"></div>
        </div>

        {/* Google Button */}
        <button
          type="button"
          className="google-button-wrapper w-full bg-white border-2 border-[#E8E4DF] text-[#374151] font-semibold text-sm py-3.5 rounded-xl flex items-center justify-center gap-3 hover:border-[#E8441A] hover:bg-[#FFF9F6] active:scale-[0.99] hover:scale-[1.01] transition-all duration-200 shadow-sm hover:shadow-md group"
        >
          <svg className="w-4 h-4 google-button-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
          </svg>
          <span className="group-hover:text-[#E8441A] transition-colors duration-200">Continue with Google</span>
        </button>

        {/* Sign Up Row */}
        <div className="text-center mt-6">
          <span className="text-[#9CA3AF] text-sm">
            Don't have an account?{' '}
            <a href="#" className="text-[#E8441A] font-semibold hover:underline transition-all">
              Create one
            </a>
          </span>
        </div>
      </form>

      {/* Success Toast */}
      {showSuccess && (
        <div className="fixed bottom-6 right-6 bg-[#1A1A1A] text-white px-4 py-3 rounded-xl text-sm animate-slideUp flex items-center gap-2 shadow-lg">
          <span>✓</span>
          <span>Logged in successfully!</span>
        </div>
      )}
    </>
  );
}
