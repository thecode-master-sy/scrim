"use client"
import {cn} from "@/app/lib/utils";
import Image from "next/image";
import { Button } from "../ui/button";
import GoogleIcon from "@/public/google-icon.svg";

type LoginWithGoogleProps = React.HTMLAttributes<HTMLButtonElement>

export default function LoginWithGoogle({className, ...props}: LoginWithGoogleProps) {
    
    return (
        <Button className={cn("gap-4", className)} {...props}>
            <div>
                <Image src={GoogleIcon} alt="google icon"/>
            </div>
            <span>Continue with google</span>
        </Button>
    )
}
