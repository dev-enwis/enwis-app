import * as React from "react";
import type { LucideIcon } from "lucide-react";
import { Inbox } from "lucide-react";
import { cn } from "@/lib/utils";

interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: LucideIcon;
  title: string;
  description?: string;
  /** Optional CTA — pass a <Button> (or any node) */
  action?: React.ReactNode;
}

/**
 * Standard empty state: icon in a mist circle, title, description, optional CTA.
 * Use anywhere a list/table/search comes back with no data instead of a bare
 * "Nothing found" string.
 */
const EmptyState = React.forwardRef<HTMLDivElement, EmptyStateProps>(
  ({ icon: Icon = Inbox, title, description, action, className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex flex-col items-center justify-center gap-3 px-6 py-12 text-center",
        className
      )}
      {...props}
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-mist)] text-[var(--color-volt)]">
        <Icon size={26} aria-hidden="true" />
      </div>
      <h3 className="text-base font-semibold text-[var(--color-ink)] text-balance">{title}</h3>
      {description ? (
        <p className="max-w-sm text-sm leading-relaxed text-[var(--color-slate)] text-pretty">
          {description}
        </p>
      ) : null}
      {action ? <div className="mt-2">{action}</div> : null}
    </div>
  )
);
EmptyState.displayName = "EmptyState";

export { EmptyState };
