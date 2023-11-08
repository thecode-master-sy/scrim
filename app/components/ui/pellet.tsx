"use client";
import { cn } from "@/app/lib/utils";

const Pellet: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "px-4 py-1 inline-flex gap-4 items-center border border-border rounded-md bg-scrim-input-bg",
        className
      )}
      {...props}
    />
  );
};

const PelletText: React.FC<React.HTMLAttributes<HTMLSpanElement>> = ({
  className,
  ...props
}) => {
  return <span className={cn("opacity-50", className)} {...props} />;
};

export { Pellet, PelletText };
