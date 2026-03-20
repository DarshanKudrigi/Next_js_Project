'use client';

import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

export default function PasswordInput({
  value,
  onChange,
  error,
  onBlur,
  id = 'password',
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-medium text-quicksale-primary">
        Password
      </label>
      <div className="relative">
        <input
          type={showPassword ? 'text' : 'password'}
          id={id}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder="Enter your password"
          className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-0 ${
            error
              ? 'border-quicksale-error focus:ring-quicksale-error'
              : 'border-quicksale-input-border focus:border-quicksale-brand focus:ring-quicksale-brand/20'
          }`}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-quicksale-muted hover:text-quicksale-primary transition-colors duration-200"
          aria-label={showPassword ? 'Hide password' : 'Show password'}
        >
          {showPassword ? (
            <EyeOff size={20} />
          ) : (
            <Eye size={20} />
          )}
        </button>
      </div>
      {error && (
        <p className="text-sm text-quicksale-error font-medium">{error}</p>
      )}
    </div>
  );
}
