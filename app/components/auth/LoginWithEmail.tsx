"use client"
import {Input} from "@/app/components/ui/input";
import {Button} from "@/app/components/ui/button";
import {cn, patterns, verify} from "@/app/lib/utils";
import React, { SetStateAction, useRef, useState } from "react";
import { createOrLoginUser } from "@/app/lib/api-client/user";
import { Loader2 } from "lucide-react";
import VerifyOtpForm from "./VerifyOtp";

type LoginWithEmailProps = {showLoginForm: boolean; setShowLoginForm: React.Dispatch<SetStateAction<boolean>>; shouldCreateUser: boolean} & React.HTMLAttributes<HTMLButtonElement>

export default function LoginWithEmail({showLoginForm, setShowLoginForm, shouldCreateUser, className, ...props}:LoginWithEmailProps) {
    return (
        <div className={cn("", className)}>
            {
                showLoginForm ? (<LoginForm shouldCreateUser/>) : (<Button variant="secondary" className="bg-scrim-pellet-color border border-scrim-pellet-border shadow-sm text-foreground w-full" onClick={() => setShowLoginForm(!showLoginForm)}>Continue with email</Button>)
            }
        </div>
    )
}

const LoginForm = ({shouldCreateUser}: {shouldCreateUser: boolean}) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);
    const [otpFormVisible, setOtpFormVisible] = useState(false);
    const [userDetails, setUserDetails] = useState<UserDetails>({email: ""})

    async function handleSubmit(e:React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const email = inputRef.current ? inputRef.current.value : "";
        
        if(!verify(email, patterns.email)) {
            return setError("this is not a valid email address");
        }

        setUserDetails({email});

        setLoading(true);

        const response = await createOrLoginUser({email}, shouldCreateUser)
        
        if(response.error === null) {
            setLoading(false);
            setOtpFormVisible(true)
        }
    }

    return (
        <div>
            {
                otpFormVisible ? <VerifyOtpForm userDetails={userDetails}/> : (
                    <form onSubmit={(e) => handleSubmit(e)} className="grid gap-4">
                        <p className="text-red-400 text-center">{error}</p>
                        <Input name="email" type="email" placeholder="email" ref={inputRef}/>
                        <Button type="submit" disabled={loading}>
                            {loading ? <Loader2 className="animate-spin"/> : <span>Login</span>}
                        </Button>
                    </form>
                )
            }
        </div>
     )
}