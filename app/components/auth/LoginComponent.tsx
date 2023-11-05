"use client";

import HankoAuth from "@/app/lib/hanko/HankoAuth";
import { Logo } from "../Logo";

export default function LoginComponent() {
  return (
    <div className="mx-auto my-auto w-full max-w-[25rem]">
      <div>
        <div className="flex justify-center">
          <Logo />
        </div>
      </div>
      <div className="mt-4">
        <HankoAuth />
      </div>
    </div>
  );
}
