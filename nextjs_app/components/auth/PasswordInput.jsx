'use client';

import { useState } from 'react';
import { Lock, Eye, EyeOff } from 'lucide-react';

export default function PasswordInput({ value, onChange, error, placeholder = 'Password' }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full">
      <div className="relative">
        <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#C4C0BB]" />
        <input
          type={showPassword ? 'text' : 'password'}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full bg-white px-4 py-3.5 pl-12 rounded-xl text-[#1A1A1A] placeholder:text-[#C4C0BB] text-sm transition-all duration-200 ${
            error
              ? 'border-2 border-[#DC2626] focus:outline-none focus:ring-4 focus:ring-[#DC2626]/10'
              : 'border border-[#E8E4DF] focus:outline-none focus:border-[#E8441A] focus:ring-4 focus:ring-[#E8441A]/10'
          }`}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#9CA3AF] hover:text-[#6B7280] transition-colors"
        >
          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
        </button>
      </div>
      {error && <p className="text-[#DC2626] text-xs mt-1 animate-fadeIn">{error}</p>}
    </div>
  );
}
