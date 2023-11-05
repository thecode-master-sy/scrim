"use client";
import { AlignJustify } from "lucide-react";

const SideBarToggle: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  ...props
}) => {
  return (
    <div className="flex p-1 items-center justify-center" {...props}>
      <AlignJustify />
    </div>
  );
};

export { SideBarToggle };
