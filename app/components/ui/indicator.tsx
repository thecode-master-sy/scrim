import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/app/lib/utils";

const indicatorVariants = cva("w-2 h-2 rounded-full", {
    variants: {
      variant: {
        default: "bg-scrim-background-light-400 opacity-40",
        active: "bg-scrim-background-light-400 ",
      },
    },
    defaultVariants: {
      variant: "default",
    },
});

interface IndicatorProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof indicatorVariants> {}

export const Indicator: React.FC<IndicatorProps> = ({
  variant,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(indicatorVariants({ variant, className }))}
      {...props}></div>
  );
};