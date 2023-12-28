import { MoveLeft, Loader2 } from "lucide-react";
import { Button } from "../../ui/button";
import { Pellet, PelletText } from "../../ui/pellet";
import { useState } from "react";
import { ScrollInFromLeft } from "./ScrollInFromLeft";
import { createScrimRoom } from "@/app/lib/api-client/scrim";
import { useToast } from "@/app/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { useScrimContext } from "@/app/contexts/ScrimRoomContext";


export default function AddTags({
    formData,
    setFormData,
    moveToPrevious,
}: {
    formData: ScrimRoomDetails;
    setFormData: React.Dispatch<React.SetStateAction<ScrimRoomDetails>>;
    moveToPrevious: () => void;
}) {
    const tags = ["call of duty mobile", "free fire", "efootball", "pubg"];
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const { toast } = useToast();
    const router = useRouter()
    const scrimRoomsContext = useScrimContext();

    function addSelectedTag(tag: string) {
      if(selectedTags.includes(tag)) {
          setSelectedTags((prev) => {
            const newArray = prev.filter((item) => item !== tag)

            return newArray
          })
      }else {
        setSelectedTags((prev) => ([...prev, tag]))
      }
    }

    async function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault();
      const categories = selectedTags;
      if(!(selectedTags.length > 0)) {
        return setError("select a least one tag")
      }
      setLoading(true);

      const response = await createScrimRoom({...formData, categories});

      if(response.data) {
        setLoading(false);
        scrimRoomsContext?.addScrimRoom(response.data)
        toast({
          description: "Scrim room created sucessfully.",
        })
        const roomId = response.data.id;
        const scrimRoomPath = `/scrims/${roomId}`
        router.replace(scrimRoomPath);
      }else {
        setLoading(false)
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
        })
      }
    }

    return (
      <ScrollInFromLeft>
        <header className="grid gap-2">
          <h3 className="text-mid font-bold">Add tags</h3>
          <p>
            adding the proper tags would also make it easier for others to find
            your scrim room
          </p>
        </header>
        <div className="grid gap-4 mt-4">
          <p className="text-red-400">{error}</p>
          <div className="flex flex-wrap gap-2">
            {
              tags.map((tag, index) => (
                <Pellet key={index} onClick={() => addSelectedTag(tag)} className="cursor-pointer" selected={selectedTags.includes(tag)}>
                  <PelletText>{tag}</PelletText>
                </Pellet>
              ))
            }
          </div>
  
          <div className="flex justify-between items-center">
            <span
              className="flex items-center gap-4 cursor-pointer"
              onClick={moveToPrevious}>
              <MoveLeft size={24} />
              <span>back</span>
            </span>
            
            <form onSubmit={(e) => handleFormSubmit(e)}>
              <Button>{
                  loading ? <Loader2 className="animate-spin"/> : "Continue"
              }</Button>
            </form>
          </div>
        </div>
      </ScrollInFromLeft>
    );
};