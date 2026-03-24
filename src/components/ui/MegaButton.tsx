"use client";
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import React from 'react';

type OmittedEvents = "onAnimationStart" | "onDrag" | "onDragStart" | "onDragEnd" | "ref";

interface MegaButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, OmittedEvents> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

export const MegaButton = React.forwardRef<HTMLButtonElement, MegaButtonProps>(
  ({ className, variant = 'primary', fullWidth, children, ...props }, ref) => {
    
    const baseStyles = "relative inline-flex items-center justify-center font-bold overflow-hidden rounded-full transition-all duration-300";
    
    const variants = {
      primary: "bg-brand-orange text-white shadow-soft hover:shadow-soft-hover",
      secondary: "bg-brand-midnight text-white shadow-soft hover:shadow-soft-hover",
      outline: "bg-transparent text-brand-midnight border-2 border-brand-midnight/10 hover:border-brand-orange hover:text-brand-orange"
    };

    const sizes = "px-8 py-4 text-lg";

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          baseStyles,
          variants[variant],
          sizes,
          fullWidth && "w-full",
          className
        )}
        {...props}
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          {children}
        </span>
      </motion.button>
    );
  }
);

MegaButton.displayName = 'MegaButton';
