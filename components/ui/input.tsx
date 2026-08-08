import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "h-12 w-full rounded-[var(--radius-lg)] border border-[var(--color-line)] bg-white px-4 text-sm text-[var(--color-ink)] transition-colors placeholder:text-[var(--color-slate-light)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-deep)]/30 focus-visible:border-[var(--color-deep)]",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
