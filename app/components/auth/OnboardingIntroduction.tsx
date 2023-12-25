import { Button } from "../ui/button";

export default function OnboardingIntroduction ({ moveToNextTab }: { moveToNextTab: () => void }){
    return (
      <div className="text-center grid gap-4 mx-auto max-w-[500px]">
        <h2 className=" text-mid font-extrabold">Welcome to Scrim</h2>
  
        <p>scrim is a platform where gamers come to search for scrims</p>
  
        <Button size="lg" onClick={moveToNextTab}>
          Get started
        </Button>
      </div>
    );
};