import { Button } from "../ui/button";
import {useRouter} from "next/navigation";

export default function OnboardingFinalStep(){
    const router = useRouter();
    function navigateToDashboard() {
      router.replace("/dashboard");
    }
    return (
      <div className="mx-auto max-w-[500px]">
        <h2 className="text-mid font-semibold text-center">
          You are good to go!
        </h2>
        <p className="text-center mt-7">start by creating your first scrim</p>
        <Button
          size="lg"
          className="w-full mt-7"
          onClick={() => navigateToDashboard()}>
          Lets Go!
        </Button>
      </div>
    );
  };
  