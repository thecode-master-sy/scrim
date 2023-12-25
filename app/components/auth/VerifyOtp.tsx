"use client";
import { useState, useRef } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import { verifyOtp } from "@/app/lib/api-client/user";
import { useRouter } from "next/navigation";

export default function VerifyOtpForm({userDetails}:{userDetails: UserDetails}) {
    const [loading, setLoading] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const [error, setError] = useState("");
    const router = useRouter();

    async function handleSubmit(e:React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setLoading(true);
        const token = inputRef.current ? inputRef.current.value : ""
        const response = await verifyOtp(userDetails, token);

        if(response.session) {
            setLoading(false)
            router.replace("/welcome");
        }

        console.log(response)
    }

    return (
        <form className="grid gap-4" onSubmit={(e) => handleSubmit(e)}>
            <p>{error}</p>
            <p className="text-center">a six digit verification code was sent to your email, check your inbox and copy the code</p>
            <Input name="otpcode" type="text" placeholder="enter verification code" ref={inputRef}/> 
            <Button type="submit">
                {loading ? <Loader2 className="animate-spin"/> : "verify"}
            </Button>
        </form>
    )
}