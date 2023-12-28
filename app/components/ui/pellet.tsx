"use client";
import { cn } from "@/app/lib/utils";

const Pellet: React.FC<React.HTMLAttributes<HTMLDivElement> & {selected: boolean}> = ({
  selected,
  className,
  ...props
}) => {
  const defaultClassName = "px-4 py-1 inline-flex gap-4 items-center border border-border rounded-md bg-scrim-input-bg";
  const selectedClassName = selected ? "border-scrim-pellet-selected": "";
  const combinedClassName = cn(defaultClassName,  selectedClassName);
  return (
    <div
      className={cn(
        combinedClassName,
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
  return <span className={cn("opacity-50 text-sm", className)} {...props} />;
};

export { Pellet, PelletText };
