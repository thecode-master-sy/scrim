//convert the whole archetecture into creating and accepting requests
import { Input } from "@/app/components/ui/input";
import ScrimCard from "@/app/components/user/DisplayScrimRoom/ScrimCard";

//lock scrim room when a user joins
export default function Page() {
  return (
    <div className="min-h-screen bg-background md:pt-20">
      <header className="px-4 pt-4">
          <h1 className="text-mid font-semibold text-center">Finding scrims just got easier</h1>

          <div className="mt-4 max-w-xl mx-auto">
            <Input placeholder="search for scrim rooms" name="search"/>
          </div>
      </header>

      <div className="flex gap-4 flex-wrap px-4 mt-4 justify-center">
          <span>call of duty mobile</span>
          <span>efootball mobile</span>
          <span>free fire</span>
          <span>pubg</span>
          <span>cod modern warfare</span>
      </div>

      <div className="grid gap-4 px-4 pt-12 md:grid-cols-3">
          <ScrimCard/>
          <ScrimCard/>
          <ScrimCard/>
      </div>
    </div>
  )
  
}
