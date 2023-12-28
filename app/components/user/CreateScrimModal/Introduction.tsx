import { Button } from "../../ui/button";
import { ScrollInFromLeft } from "./ScrollInFromLeft";

export default function Introduction({ moveToNext }: { moveToNext: () => void }){
    return (
      <ScrollInFromLeft>
        <header className="grid gap-2">
          <h3 className="text-mid font-bold">Create a new scrim</h3>
          <p>
            A scrim a friendly match between gamers. create a scrim room where you
            can share links to other gamers who want to play a friendly match with
            you
          </p>
        </header>
        <Button className="w-full mt-4" onClick={moveToNext}>
          Continue
        </Button>
      </ScrollInFromLeft>
    );
  };