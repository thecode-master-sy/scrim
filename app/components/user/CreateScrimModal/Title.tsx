import { MoveLeft } from "lucide-react";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { ScrollInFromLeft } from "./ScrollInFromLeft";
import { patterns, verify } from "@/app/lib/utils";
import { useRef, useState } from "react";

export default function Title({
    setFormData,
    moveToNext,
    moveToPrevious,
  }: {
    setFormData: React.Dispatch<React.SetStateAction<ScrimRoomDetails>>
    moveToNext: () => void;
    moveToPrevious: () => void;
  }){
      const titleRef = useRef<HTMLInputElement>(null);
      const [error, setError] = useState("");
      function handleFormSubmit(e:React.FormEvent<HTMLFormElement>) {
          e.preventDefault();
          const scrimName = titleRef.current ? titleRef.current.value : "";
  
          if(!verify(scrimName, patterns.name)) return setError("the scrim name should contain only letters");
  
          setFormData((prev) => ({...prev, scrimName}));
  
          moveToNext();
      }
      return (
        <ScrollInFromLeft>
          <header className="grid gap-2">
            <h3 className="text-mid font-bold">Give it a title</h3>
            <p>
              a descriptive title would make it easier for other to find your room
            </p>
          </header>
          <form className="grid gap-4 mt-4" onSubmit={(e) => handleFormSubmit(e)}>
            <Input
              placeholder="search available scrims"
              name="title"
              ref={titleRef}
            />
    
            <div className="flex justify-between items-center">
              <span
                className="flex items-center gap-4 cursor-pointer"
                onClick={moveToPrevious}>
                <MoveLeft size={24} />
                <span>back</span>
              </span>
  
              <Button>Continue</Button>
            </div>
          </form>
        </ScrollInFromLeft>
      );
  };