"use client"
import { Logo } from "../Logo";
import LoginWithGoogle from "./LoginWithGoogle";
import LoginWithEmail from "./LoginWithEmail";
import {useState} from "react";
import { Button } from "../ui/button";

export default function LoginComponent({shouldCreateUser}: {shouldCreateUser: boolean}) {
  const [showLoginForm, setShowLoginForm] = useState(false);
  return (
    <div className="">
      <div className="mt-4 grid gap-4">
          {!showLoginForm && <LoginWithGoogle className="w-full"/>}
          <LoginWithEmail showLoginForm={showLoginForm} setShowLoginForm={setShowLoginForm} shouldCreateUser/>

          <div>
            {showLoginForm && <Button variant="secondary" onClick={() => setShowLoginForm(!showLoginForm)}>back</Button>}
          </div>
      </div>
    </div>
  );
}
