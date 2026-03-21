'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Check, Loader2 } from 'lucide-react';
import { type MouseEventHandler } from 'react';

type AnimatedButtonStatus = 'idle' | 'loading' | 'success';

type AnimatedButtonProps = {
  label: string;
  status: AnimatedButtonStatus;
  type?: 'button' | 'submit' | 'reset';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  disabled?: boolean;
};

export default function AnimatedButton({
  label,
  status,
  type = 'submit',
  onClick,
  className,
  disabled,
}: AnimatedButtonProps) {
  const isMorphing = status !== 'idle';

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled || isMorphing}
      animate={{ width: isMorphing ? 56 : '100%', borderRadius: isMorphing ? 999 : 16 }}
      transition={{ type: 'spring', stiffness: 220, damping: 20 }}
      className={[
        'relative flex h-14 items-center justify-center overflow-hidden font-semibold text-white shadow-[0_8px_24px_rgba(139,92,246,0.25)]',
        'bg-gradient-to-r from-[#fb7185] via-[#f43f5e] to-[#8b5cf6] focus:outline-none',
        'focus:shadow-[0_0_0_4px_rgba(244,63,94,0.2)] enabled:hover:-translate-y-0.5 enabled:hover:shadow-[0_14px_32px_rgba(139,92,246,0.3)]',
        'disabled:cursor-not-allowed disabled:opacity-95',
        className ?? '',
      ].join(' ')}
    >
      <motion.span
        aria-hidden="true"
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute inset-0 rounded-full border border-white/40"
      />

      <AnimatePresence mode="wait" initial={false}>
        {status === 'idle' ? (
          <motion.span
            key="label"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="text-sm tracking-[0.01em]"
          >
            {label}
          </motion.span>
        ) : null}

        {status === 'loading' ? (
          <motion.span
            key="loading"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="flex h-8 w-8 items-center justify-center"
          >
            <Loader2 className="h-5 w-5 animate-spin" />
          </motion.span>
        ) : null}

        {status === 'success' ? (
          <motion.span
            key="success"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="flex h-8 w-8 items-center justify-center"
          >
            <Check className="h-5 w-5" />
          </motion.span>
        ) : null}
      </AnimatePresence>
    </motion.button>
  );
}
