'use client';

import { motion } from 'framer-motion';

type PasswordStrengthProps = {
  password: string;
};

function evaluatePassword(password: string) {
  let score = 0;

  if (password.length >= 8) score += 1;
  if (/[A-Z]/.test(password) && /[a-z]/.test(password)) score += 1;
  if (/\d/.test(password) || /[^A-Za-z0-9]/.test(password)) score += 1;

  if (password.length === 0) {
    return { score: 0, label: 'Too short', color: 'from-[#f5b8c1] to-[#ef9aa9]', width: '10%' };
  }

  if (score <= 1) {
    return { score, label: 'Weak', color: 'from-[#f8b9a8] to-[#f5a49a]', width: '35%' };
  }

  if (score === 2) {
    return { score, label: 'Medium', color: 'from-[#f7b97f] to-[#e9a662]', width: '68%' };
  }

  return { score, label: 'Strong', color: 'from-[#b9d6b4] to-[#8dcfbc]', width: '100%' };
}

export default function PasswordStrength({ password }: PasswordStrengthProps) {
  const strength = evaluatePassword(password);

  return (
    <div className="mt-3">
      <div className="mb-1 flex items-center justify-between text-xs">
        <span className="text-[#6b7280]">Password strength</span>
        <span className="font-medium text-[#4b5563]">{strength.label}</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-white/60">
        <motion.div
          className={`h-full rounded-full bg-gradient-to-r ${strength.color}`}
          initial={{ width: '0%' }}
          animate={{ width: strength.width }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}
