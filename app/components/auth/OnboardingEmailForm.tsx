import { useState, useRef } from "react";
import { patterns, verify } from "@/app/lib/utils";
import { createProfile } from "@/app/lib/api-client/user";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";


export default function OnboardingEmailForm ({ moveToNextTab, userDetails: {email, id} }: { moveToNextTab: () => void; userDetails: UserDetails }){
    const usernameRef = useRef<HTMLInputElement>(null);
    const [error, setError] = useState<null | string>(null);
    const [loading, setLoading] = useState(false);
  
    async function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault();
  
      const username = usernameRef.current?.value || "";
  
      if (username === "") return setError("please enter a username");
  
      if (!verify(username, patterns.username))
        return setError(
          "the username should be a minimum of 6 characters and not more than 30 characters"
        );
      setLoading(true);
      const profileDetails = {
        id: id,
        email: email,
        username: username,
      };
  
      const response = await createProfile(profileDetails);
  
      if (response) setLoading(false);
  
      if (response.error) return setError(response.message);
  
      moveToNextTab();
    }
    
    return (
      <div className="w-full">
        <h2 className="text-mid font-semibold text-center">Create a username</h2>
  
        <form
          className="grid gap-4 mt-4 w-full max-w-[500px] mx-auto"
          onSubmit={(e) => handleFormSubmit(e)}>
          {error && <p className="text-red-400 text-center">{error}</p>}
          <Input placeholder="username" name="username" ref={usernameRef} />
  
          <Button size="lg" disabled={loading}>
            {loading ? (
              <Loader2 className="animate-spin"></Loader2>
            ) : (
              <span>Continue</span>
            )}
          </Button>
        </form>
      </div>
    );
  };