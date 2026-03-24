import React from 'react';
import { cn } from '@/lib/utils';

interface BentoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  gradient?: boolean;
}

export function BentoCard({ className, gradient, children, ...props }: BentoCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[2rem] p-8 md:p-10 shadow-soft hover:shadow-soft-hover transition-all duration-500 group",
        gradient ? "bg-gradient-to-br from-brand-light-gray to-white" : "bg-white",
        className
      )}
      {...props}
    >
      {/* Decorative background circle that scales on hover */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-light-blue rounded-full blur-3xl opacity-50 group-hover:scale-150 transition-transform duration-700 ease-in-out" />
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
