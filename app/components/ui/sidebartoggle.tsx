"use client";
import { AlignJustify } from "lucide-react";

const SideBarButton: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  ...props
}) => {
  return (
    <div
      className="flex p-1 items-center justify-center cursor-pointer"
      {...props}>
      <AlignJustify />
    </div>
  );
};

export { SideBarButton };
