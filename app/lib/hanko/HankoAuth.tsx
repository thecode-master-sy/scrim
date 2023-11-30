"use client";

import { useEffect, useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { register, Hanko } from "@teamhanko/hanko-elements";
import { useUser } from "@/app/hooks/useUser";

export const hankoApi = process.env.NEXT_PUBLIC_HANKO_API_URL;

export default function HankoAuth() {
  const router = useRouter();
  const { setUser } = useUser();

  const [hanko, setHanko] = useState<Hanko>();

  useEffect(() => {
    import("@teamhanko/hanko-elements").then(({ Hanko }) =>
      setHanko(new Hanko(hankoApi ?? ""))
    );
  }, []);

  const redirectAfterLogin = useCallback(async () => {
    // successfully logged in, redirect to a page in your application
    const userDetails = await hanko?.user.getCurrent();
    setUser({ id: userDetails?.id, email: userDetails?.email });
    return router.replace("/welcome");
  }, [router]);

  //redirect the user after login in with hanko event callbacks
  useEffect(
    () =>
      hanko?.onAuthFlowCompleted(async () => {
        await redirectAfterLogin();
      }),
    [hanko, redirectAfterLogin]
  );

  useEffect(() => {
    register(hankoApi ?? "", {
      shadow: false,
      injectStyles: false,
    }).catch((error) => {
      // handle error
    });
  }, []);

  return <hanko-auth />;
}
