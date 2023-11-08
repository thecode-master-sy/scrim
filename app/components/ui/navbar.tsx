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

const MobileNavBarContainer: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "md:hidden fixed bottom-0 left-0 right-0 w-full",
        className
      )}
      {...props}
    />
  );
};

const MobileNavBar: React.FC<React.HTMLAttributes<HTMLUListElement>> = ({
  className,
  ...props
}) => {
  return (
    <ul
      className={cn(
        "flex w-full border-t border-border justify-between items-center py-1 px-4 bg-scrim-white/30 backdrop-blur-md",
        className
      )}
      {...props}
    />
  );
};

const MobileNavListElement: React.FC<React.HTMLAttributes<HTMLLIElement>> = ({
  className,
  ...props
}) => {
  return <li className={cn("", className)} {...props} />;
};

export {
  DesktopNavBarContainer,
  MobileNavBarContainer,
  MobileNavBar,
  MobileNavListElement,
  ScrimLink,
};
