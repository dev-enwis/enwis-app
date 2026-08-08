"use client";

import * as React from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ErrorStateProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  /** Called when user clicks "Qayta urinish". Omit to hide the retry button. */
  onRetry?: () => void;
  retryLabel?: string;
}

/**
 * Standard error state for failed API loads. Never render raw backend JSON —
 * pass a human-readable description (e.g. from getApiErrorMessage).
 */
const ErrorState = React.forwardRef<HTMLDivElement, ErrorStateProps>(
  (
    {
      title = "Xatolik yuz berdi",
      description = "Ma'lumotni yuklab bo'lmadi. Iltimos, qayta urinib ko'ring.",
      onRetry,
      retryLabel = "Qayta urinish",
      className,
      ...props
    },
    ref
  ) => (
    <div
      ref={ref}
      role="alert"
      className={cn(
        "flex flex-col items-center justify-center gap-3 px-6 py-12 text-center",
        className
      )}
      {...props}
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-danger-light)] text-[var(--color-danger)]">
        <AlertTriangle size={26} aria-hidden="true" />
      </div>
      <h3 className="text-base font-semibold text-[var(--color-ink)] text-balance">{title}</h3>
      <p className="max-w-sm text-sm leading-relaxed text-[var(--color-slate)] text-pretty">
        {description}
      </p>
      {onRetry ? (
        <Button variant="outline" size="sm" onClick={onRetry} className="mt-2">
          <RefreshCw size={15} aria-hidden="true" />
          {retryLabel}
        </Button>
      ) : null}
    </div>
  )
);
ErrorState.displayName = "ErrorState";

export { ErrorState };
