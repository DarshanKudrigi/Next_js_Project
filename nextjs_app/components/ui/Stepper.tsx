'use client';

import { motion } from 'framer-motion';

type StepperProps = {
  steps: string[];
  currentStep: number;
};

export default function Stepper({ steps, currentStep }: StepperProps) {
  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="mb-7">
      <div className="mb-3 flex items-center justify-between text-xs font-medium text-[#7b7280]">
        <span>Step {currentStep + 1}</span>
        <span>{steps[currentStep]}</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-white/55">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-[#fb7185] via-[#f43f5e] to-[#8b5cf6]"
          initial={{ width: '0%' }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        />
      </div>
      <div className="mt-3 flex gap-2">
        {steps.map((step, index) => (
          <div
            key={step}
            className={[
              'rounded-full px-3 py-1 text-[11px] font-medium transition-all duration-200',
              index === currentStep
                ? 'bg-white/70 text-[#374151] shadow-sm'
                : 'bg-white/40 text-[#9ca3af]',
            ].join(' ')}
          >
            {step}
          </div>
        ))}
      </div>
    </div>
  );
}
