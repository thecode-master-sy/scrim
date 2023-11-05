"use client";
import { cn } from "@/app/lib/utils";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

interface ScrimLinkProps
  extends React.HTMLAttributes<HTMLAnchorElement>,
    LinkProps {
  activeStyles?: string;
}

const DesktopNavBarContainer: React.FC<
  React.HTMLAttributes<HTMLDivElement>
> = ({ className, ...props }) => {
  return <div className={cn("hidden md:block", className)} {...props}></div>;
};

const ScrimLink: React.FC<ScrimLinkProps> = ({
  className,
  activeStyles,
  href,
  ...props
}) => {
  const pathname = usePathname();

  const defaultStyles = href !== pathname ? "opacity-80" : activeStyles;
  return (
    <Link className={cn(defaultStyles, className)} href={href} {...props} />
  );
};

export { DesktopNavBarContainer, ScrimLink };
