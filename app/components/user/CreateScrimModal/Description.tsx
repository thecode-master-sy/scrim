import { useRef, useState } from "react";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { ScrollInFromLeft } from "./ScrollInFromLeft";
import { MoveLeft } from "lucide-react";

export default function Description ({
    setFormData,
    moveToNext,
    moveToPrevious,
  }: {
    setFormData: React.Dispatch<React.SetStateAction<ScrimRoomDetails>>;
    moveToNext: () => void;
    moveToPrevious: () => void;
  }) {
    const descriptionRef = useRef<HTMLInputElement>(null);
    const [error, setError] = useState("");
    function handleSubmit(e: React.FormEvent<HTMLFormElement>){
      e.preventDefault();
      const description = descriptionRef.current ? descriptionRef.current.value : "";
      if(description === "") return setError("please give a little description"); 
      setFormData((prev) => ({...prev, description}));
      moveToNext();
    }
    return (
      <ScrollInFromLeft>
        <header className="grid gap-2">
          <h3 className="text-mid font-bold">Write a little Description</h3>
          <p>
            give a little description of the scrim. you could state the time,
            rules etc
          </p>
        </header>
        <form className="grid gap-4 mt-4" onSubmit={(e) => handleSubmit(e)}>
          <p className="text-red-400">{error}</p>
          <Input
            placeholder="search available scrims"
            name="title"
            ref={descriptionRef}
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
  