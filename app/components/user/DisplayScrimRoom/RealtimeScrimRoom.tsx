"use client"
import { Users2, MoreVertical } from "lucide-react";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Message, MessageContent, MessageAuthor, MessageTimeLine, MessageText } from "../../ui/message";
import { Pellet, PelletText } from "../../ui/pellet";
import { SideBarButton } from "../../ui/sidebartoggle";
import { TimeLine, TimeLineContent } from "../../ui/timeline";
import { ProfileImage } from "../Profile/profileimage";
import { useMobileRightPanelContext } from "@/app/contexts/PanelProviders";
import { useEffect, useRef, useState } from "react";
import { formatDate } from "@/app/lib/utils";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { RealtimeChannel } from "@supabase/supabase-js";

//some edge cases to solve
//if user is not a member of the scrim room, display a join scrim room modal
//when scrim room is created, it fails to show on the side
//check if the message is not empty
//send the message to the database



export default function RealtimeScrimRoom({scrimRoom, user}: {scrimRoom: ScrimRoom,  user: User}) {
    const mobileRightPanelContext = useMobileRightPanelContext();
    const [channel, setChannel] = useState<RealtimeChannel>();
    const [messages, setMessages] = useState(scrimRoom.Messages ?? []);
    const inputRef = useRef<HTMLInputElement>(null)
    const supabase = createClientComponentClient();

    function displayMessage(payload: any) {
        console.log(payload);
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const newMessageContent = inputRef.current?.value ?? "";
        const newMessage = {
           content: newMessageContent,
            author: {
                username: user.username
            }
        }
       
        if(channel !== undefined) {
            channel.send({
                type: 'broadcast',
                event: 'message',
                payload: newMessage,
            })
        }
    }

    useEffect(() => {
        const channel = supabase.channel(scrimRoom.id, {
            config: {
                broadcast: {
                    self: true
                }
            }
        });

        channel.on('broadcast', { event: 'message' }, ({ payload }) => {
            displayMessage(payload)
            setMessages((prev) => [...prev, payload]);
        });

        channel.subscribe();

        setChannel(channel);

        return () => {
            channel.unsubscribe();
            setChannel(undefined);
        };
    }, [scrimRoom.id])


    
    return (
        <>
            <header className="fixed left-0 right-0 top-0 md:top-[52px] flex justify-between items-center px-4 py-3 border-y border-border bg-scrim-sidebar md:bg-background z-10">
                <div className="flex gap-4 items-center">
                    <div className="block md:hidden">
                        <SideBarButton onClick={mobileRightPanelContext?.togglePanel}/>
                    </div>

                    <h3>{scrimRoom.scrimName}</h3>
                </div>

                <div className="flex gap-4">
                    <Users2 size={20} strokeWidth={2} />
                    <MoreVertical size={20} strokeWidth={2} />
                </div>
            </header>

            <div className="pt-32 pb-[10rem] md:pb-[5rem] px-4 max-h-screen overflow-y-scroll">
                <div>
                    <div className="flex flex-col gap-2">
                        <Pellet selected={false} className="mx-auto">
                        <PelletText>{scrimRoom.creator?.username} created a scrim room</PelletText>
                        </Pellet>

                        <div>
                        <p className="text-sm text-center opacity-70">
                            you can share game links and resources here
                        </p>
                        </div>
                    </div>

                <TimeLine className="mt-7">
                    <TimeLineContent>{formatDate(scrimRoom.createdAt)}</TimeLineContent>
                </TimeLine>

                <div className="mt-7 grid gap-7">
                    {
                        messages?.map((message, index) => (
                            <Message key={index}>
                                <MessageContent>
                                    <ProfileImage />

                                    <div>
                                        <div className="flex gap-2 items-center">
                                            <MessageAuthor>{message?.author?.username}</MessageAuthor>
                                            <MessageTimeLine>Oct 23, 2023 4:12pm</MessageTimeLine>
                                        </div>

                                        <MessageText className="mt-2">{message.content}</MessageText>
                                    </div>
                                </MessageContent>   
                            </Message>
                        ))
                    }
                    
                </div>
                </div>
            </div>

            <footer className="fixed bottom-0 right-0 left-0 px-4 py-3 border-t border-border bg-scrim-sidebar md:bg-background backdrop-blur-md">
                <form className="flex gap-2 items-center" onSubmit={(e) => handleSubmit(e)}>
                    <Input
                        ref={inputRef}
                        className="grow"
                        name="message"
                        placeholder="enter your message"
                    />
                    <Button>Send</Button>
                </form>
            </footer>
        </>
    )
}