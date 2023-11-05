import { cn } from "../lib/utils";

export const Logo: React.FC<React.HTMLAttributes<HTMLHeadElement>> = ({
  className,
  ...props
}) => {
  return (
    <h1
      className={cn("text-logo font-extrabold gradient-text", className)}
      {...props}>
      Scrim
    </h1>
  );
};
