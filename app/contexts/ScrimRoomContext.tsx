"use client";
import { createContext, useContext, useState } from "react";

type ScrimContextType = {
    scrimRooms: ScrimRoom[];
    updateScrimRooms: (scrimRooms: ScrimRoom[]) => void;
    addScrimRoom: (room: ScrimRoom) => void;
}

const ScrimContext = createContext<ScrimContextType | null>(null);

export function useScrimContext() {
    return useContext(ScrimContext);
}

export default function ScrimRoomsProvider({children}: {children:React.ReactNode}) {
    const [scrimRooms, setScrimRooms] = useState<ScrimRoom[]>([]);
    function updateScrimRooms(scrimRooms: ScrimRoom[]) {
        setScrimRooms((prev) => ([...scrimRooms]))
    }
    function addScrimRoom(room:ScrimRoom) {
        const isDuplicated = scrimRooms.find((scrimRoom) => scrimRoom.id = room.id);
        if(isDuplicated) return;
        setScrimRooms((prev) => ([...prev, room]))
    }
    return (
         <ScrimContext.Provider value={{scrimRooms, updateScrimRooms, addScrimRoom}}>
            {children}
        </ScrimContext.Provider>
    )
    
}