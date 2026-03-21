'use client';

import { motion } from 'framer-motion';
import { type ChangeEvent, type InputHTMLAttributes, type ReactNode, useId } from 'react';

type InputFieldProps = {
  label: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  icon?: ReactNode;
  id?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'id'>;

export default function InputField({
  label,
  value,
  onChange,
  error,
  icon,
  id,
  type = 'text',
  className,
  ...rest
}: InputFieldProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  return (
    <div className={className}>
      <div className="group relative">
        {icon ? (
          <div className="pointer-events-none absolute left-3 top-1/2 z-10 -translate-y-1/2 text-[#8b7f88]">
            {icon}
          </div>
        ) : null}
        <input
          id={inputId}
          type={type}
          value={value}
          onChange={onChange}
          placeholder=" "
          className={[
            'peer h-14 w-full rounded-2xl border bg-white/55 px-4 pt-5 text-[15px] text-[#1f2937] outline-none backdrop-blur-xl',
            'transition-all duration-200 focus:border-[#f43f5e]/65 focus:shadow-[0_0_0_4px_rgba(244,63,94,0.15)]',
            icon ? 'pl-11' : '',
            error ? 'border-[#ef7f8f]' : 'border-white/60',
          ].join(' ')}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${inputId}-error` : undefined}
          {...rest}
        />
        <label
          htmlFor={inputId}
          className={[
            'pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 rounded-md px-1 text-sm text-[#6b7280]',
            'origin-left transition-all duration-200',
            'peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm',
            'peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:bg-[#fff1f2] peer-focus:text-xs peer-focus:text-[#374151]',
            'peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:-translate-y-1/2 peer-not-placeholder-shown:bg-[#fff1f2] peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-[#374151]',
            icon ? 'left-10' : '',
          ].join(' ')}
        >
          {label}
        </label>
      </div>
      {error ? (
        <motion.p
          id={`${inputId}-error`}
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-2 text-xs font-medium text-[#be4d67]"
        >
          {error}
        </motion.p>
      ) : null}
    </div>
  );
}
