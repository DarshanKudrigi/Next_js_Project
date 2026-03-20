'use client';

import { useState } from 'react';
import PasswordInput from './PasswordInput';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [touchedFields, setTouchedFields] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFieldChange = (field) => {
    if (errors[field]) {
      setErrors({ ...errors, [field]: '' });
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    handleFieldChange('email');
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    handleFieldChange('password');
  };

  const handleFieldBlur = (field) => {
    setTouchedFields({ ...touchedFields, [field]: true });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage('');

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setSuccessMessage('Logged in successfully!');
      setEmail('');
      setPassword('');
      setTouchedFields({});
    }, 1500);
  };

  const handleGoogleClick = () => {
    // Google login handler - can be extended for actual OAuth
    console.log('Google login clicked');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Logo & Tagline */}
      <div className="text-center space-y-1">
        <h1 className="text-4xl font-bold text-[#E8441A] font-playfair">
          QuickSale
        </h1>
        <p className="text-sm text-[#6B7280] font-nunito">
          Shop fast. Shop smart.
        </p>
      </div>

      {/* Heading */}
      <div className="space-y-1 text-center">
        <h2 className="text-3xl font-bold text-[#1A1A1A] font-playfair">
          Welcome back
        </h2>
        <p className="text-sm text-[#6B7280]">Log in to your account</p>
      </div>

      {/* Email Field */}
      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium text-[#1A1A1A]">
          Email address
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          onBlur={() => handleFieldBlur('email')}
          placeholder="you@example.com"
          className={`w-full px-4 py-3 rounded-lg border bg-white text-[#1A1A1A] outline-none transition-all duration-200 focus:ring-2 focus:ring-offset-0 ${
            errors.email
              ? 'border-[#DC2626] focus:border-[#DC2626] focus:ring-[#DC2626]/20'
              : 'border-[#E0DDD8] focus:border-[#E8441A] focus:ring-[#E8441A]/20'
          }`}
        />
        {errors.email && (
          <p className="text-sm text-[#DC2626] font-medium">{errors.email}</p>
        )}
      </div>

      {/* Password Field */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <PasswordInput
            id="password"
            value={password}
            onChange={handlePasswordChange}
            onBlur={() => handleFieldBlur('password')}
            error={errors.password}
          />
        </div>
        <a
          href="/forgot-password"
          className="block text-right text-sm text-[#E8441A] hover:text-[#C73A15] transition-colors duration-200 font-medium"
        >
          Forgot password?
        </a>
      </div>

      {/* Login Button */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-[#E8441A] text-white py-3 rounded-lg font-semibold text-base hover:bg-[#C73A15] active:scale-[0.99] disabled:opacity-75 transition-all duration-200 flex items-center justify-center h-12 cursor-pointer"
      >
        {isLoading ? (
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
        ) : (
          'Log In'
        )}
      </button>

      {/* Success Message */}
      {successMessage && (
        <div className="text-center p-3 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-sm text-green-700 font-medium">{successMessage}</p>
        </div>
      )}

      {/* Divider */}
      <div className="flex items-center gap-3">
        <div className="flex-1 h-px bg-[#EEEBE6]" />
        <span className="text-sm text-[#9CA3AF] font-nunito">or</span>
        <div className="flex-1 h-px bg-[#EEEBE6]" />
      </div>

      {/* Google Button */}
      <button
        type="button"
        onClick={handleGoogleClick}
        className="w-full bg-white border border-[#E0DDD8] text-[#1A1A1A] py-3 rounded-lg font-medium text-base hover:bg-[#FAFAF8] hover:border-[#C0BDB8] transition-all duration-200 flex items-center justify-center gap-3"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            fill="#4285F4"
          />
          <path
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            fill="#34A853"
          />
          <path
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            fill="#FBBC05"
          />
          <path
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            fill="#EA4335"
          />
        </svg>
        Continue with Google
      </button>

      {/* Sign Up Link */}
      <p className="text-center text-sm text-[#6B7280]">
        New to QuickSale?{' '}
        <a
          href="/signup"
          className="text-[#E8441A] hover:text-[#C73A15] font-semibold transition-colors duration-200"
        >
          Sign up
        </a>
      </p>
    </form>
  );
}
