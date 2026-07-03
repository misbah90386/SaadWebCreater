import React from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';

interface ProgressProps {
  currentStep: number;
  totalSteps: number;
  stepLabels: string[];
}

export default function FormProgress({ currentStep, totalSteps, stepLabels }: ProgressProps) {
  const percentage = (currentStep / totalSteps) * 100;

  return (
    <div className="w-full space-y-4" id="form-progress-stepper">
      {/* Progress Bar Container */}
      <div className="relative">
        {/* Background Track */}
        <div className="h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden border border-zinc-800/40">
          <motion.div 
            className="h-full bg-gradient-to-r from-brand-gold via-brand-gold-light to-brand-gold-dark rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </div>
      </div>

      {/* Grid of Steps */}
      <div className="grid grid-cols-6 gap-2">
        {stepLabels.map((label, idx) => {
          const stepNumber = idx + 1;
          const isCompleted = currentStep > stepNumber;
          const isActive = currentStep === stepNumber;

          return (
            <div key={idx} className="flex flex-col items-center text-center space-y-1">
              <div className="relative flex items-center justify-center">
                {/* Step Circle */}
                <motion.div 
                  className={`w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center text-[11px] font-bold border transition-all duration-300 ${
                    isCompleted 
                      ? 'bg-brand-gold/10 border-brand-gold text-brand-gold shadow-md shadow-yellow-950/10'
                      : isActive
                      ? 'bg-brand-gold border-brand-gold-light text-black shadow-lg shadow-yellow-900/30 font-extrabold scale-110'
                      : 'bg-zinc-950 border-zinc-800 text-zinc-500'
                  }`}
                  animate={isActive ? { scale: [1, 1.08, 1] } : {}}
                  transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
                >
                  {isCompleted ? (
                    <Check className="w-4 h-4 stroke-[3]" />
                  ) : (
                    <span>{stepNumber}</span>
                  )}
                </motion.div>
                
                {/* Dynamic Aura for active step */}
                {isActive && (
                  <span className="absolute inset-0 rounded-full bg-brand-gold/20 animate-ping -z-10"></span>
                )}
              </div>
              
              {/* Step Label */}
              <span className={`text-[9px] md:text-xs font-medium truncate max-w-[65px] md:max-w-full hidden md:block transition-colors duration-300 ${
                isActive ? 'text-brand-gold font-bold' : isCompleted ? 'text-brand-gold-light' : 'text-zinc-500'
              }`}>
                {label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
