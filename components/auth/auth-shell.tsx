import * as React from "react";
import { Logo } from "@/components/ui/logo";
import { cn } from "@/lib/utils";

/**
 * Shared building blocks for all authentication surfaces (login, register,
 * forgot-password, OTP). One shell + one card = every auth page reads as the
 * same product. Pages keep their own form logic; only chrome lives here.
 */

/** Ambient layered background: volt/deep glows + faint grid on mist. */
export function AuthAmbient({ className }: { className?: string }) {
  return (
    <>
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute -top-40 right-[-10%] h-[560px] w-[560px] rounded-full bg-[var(--color-volt)]/15 blur-[120px]",
          className
        )}
      />
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute top-40 left-[-15%] h-[420px] w-[420px] rounded-full bg-[var(--color-deep)]/10 blur-[100px]",
          className
        )}
      />
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)] bg-[linear-gradient(var(--color-line)_1px,transparent_1px),linear-gradient(90deg,var(--color-line)_1px,transparent_1px)] bg-[size:64px_64px] opacity-40",
          className
        )}
      />
    </>
  );
}

interface AuthShellProps {
  children: React.ReactNode;
  /** Hide the centered logo (e.g. when a split layout already shows it). */
  showLogo?: boolean;
  className?: string;
}

/** Full-screen centered column on mist with ambient background + logo. */
export function AuthShell({ children, showLogo = true, className }: AuthShellProps) {
  return (
    <div
      className={cn(
        "relative min-h-screen flex items-center justify-center bg-[var(--color-mist)] px-4 py-12 overflow-hidden",
        className
      )}
    >
      <AuthAmbient />
      <div className="relative z-10 w-full max-w-md">
        {showLogo && (
          <div className="text-center mb-8">
            <div className="inline-flex justify-center">
              <Logo />
            </div>
          </div>
        )}
        {children}
      </div>
    </div>
  );
}

/** The shared white auth card. */
export function AuthCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-[var(--radius-2xl)] border border-[var(--color-line)] bg-white p-8 shadow-[var(--shadow-soft-md)]",
        className
      )}
    >
      {children}
    </div>
  );
}

/** Danger alert used at the top of auth cards. */
export function AuthErrorAlert({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      role="alert"
      className={cn(
        "mb-5 p-3.5 rounded-[var(--radius-lg)] bg-[var(--color-danger-light)] text-[var(--color-danger)] text-sm font-medium",
        className
      )}
    >
      {children}
    </div>
  );
}
