"use client";
import { cn } from "@/app/lib/utils";

const TimeLine: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div className={cn("flex items-center gap-4", className)} {...props}>
      <span className="border-b border-separator grow" />
      {children}
      <span className="border-b border-separator grow" />
    </div>
  );
};

const TimeLineContent: React.FC<React.HTMLAttributes<HTMLSpanElement>> = ({
  className,
  ...props
}) => {
  return <span className={cn("opacity-50 text-sm", className)} {...props} />;
};

export { TimeLine, TimeLineContent };
