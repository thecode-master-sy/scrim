import { Users2, MoreVertical, ArrowRight } from "lucide-react";
import { SideBarToggle } from "@/app/components/ui/sidebartoggle";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";
import { ProfileImage } from "@/app/components/user/profileimage";
import { Pellet, PelletText } from "@/app/components/ui/pellet";
import { TimeLine, TimeLineContent } from "@/app/components/ui/timeline";
import {
  Message,
  MessageAuthor,
  MessageContent,
  MessageText,
  MessageTimeLine,
} from "@/app/components/ui/message";

interface ScrimProps {
  scrimID: string;
}

export default function Page({ params: { scrimID } }: { params: ScrimProps }) {
  const ID = scrimID.split("-")[0];

  return (
    <div className="relative min-h-screen">
      <header className="fixed left-0 right-0 top-0 md:top-[52px] flex justify-between items-center px-4 py-3 border-y border-border bg-scrim-sidebar md:bg-background z-10">
        <div className="flex gap-4 items-center">
          <div className="block md:hidden">
            <SideBarToggle />
          </div>

          <h3>1 v 1 snipers only 9 pm</h3>
        </div>

        <div className="flex gap-4">
          <Users2 />
          <MoreVertical />
        </div>
      </header>

      <div className="pt-32 px-4 max-h-screen overflow-y-scroll">
        <div>
          <div className="flex">
            <Pellet className="mx-auto">
              <ProfileImage />
              <PelletText>Heisenberg created a scrim room</PelletText>
            </Pellet>
          </div>

          <TimeLine className="mt-7">
            <TimeLineContent>Oct 2, 2023 6:15pm</TimeLineContent>
          </TimeLine>

          <div className="mt-7 grid gap-7">
            <Message>
              <MessageContent>
                <ProfileImage />

                <div>
                  <div className="flex gap-2 items-center">
                    <MessageAuthor>Heisenberg</MessageAuthor>
                    <MessageTimeLine>Oct 23, 2023 4:12pm</MessageTimeLine>
                  </div>

                  <MessageText className="mt-2">Sending Link Now</MessageText>
                </div>
              </MessageContent>
            </Message>

            <Message>
              <MessageContent>
                <ProfileImage />

                <div>
                  <div className="flex gap-2 items-center">
                    <MessageAuthor>Heisenberg</MessageAuthor>
                    <MessageTimeLine>Oct 23, 2023 4:12pm</MessageTimeLine>
                  </div>

                  <MessageText className="mt-2">Sending Link Now</MessageText>
                </div>
              </MessageContent>
            </Message>

            <Message>
              <MessageContent>
                <ProfileImage />

                <div>
                  <div className="flex gap-2 items-center">
                    <MessageAuthor>Heisenberg</MessageAuthor>
                    <MessageTimeLine>Oct 23, 2023 4:12pm</MessageTimeLine>
                  </div>

                  <MessageText className="mt-2">Sending Link Now</MessageText>
                </div>
              </MessageContent>
            </Message>

            <Message>
              <MessageContent>
                <ProfileImage />

                <div>
                  <div className="flex gap-2 items-center">
                    <MessageAuthor>Heisenberg</MessageAuthor>
                    <MessageTimeLine>Oct 23, 2023 4:12pm</MessageTimeLine>
                  </div>

                  <MessageText className="mt-2">Sending Link Now</MessageText>
                </div>
              </MessageContent>
            </Message>

            <Message>
              <MessageContent>
                <ProfileImage />

                <div>
                  <div className="flex gap-2 items-center">
                    <MessageAuthor>Heisenberg</MessageAuthor>
                    <MessageTimeLine>Oct 23, 2023 4:12pm</MessageTimeLine>
                  </div>

                  <MessageText className="mt-2">Sending Link Now</MessageText>
                </div>
              </MessageContent>
            </Message>

            <Message>
              <MessageContent>
                <ProfileImage />

                <div>
                  <div className="flex gap-2 items-center">
                    <MessageAuthor>Heisenberg</MessageAuthor>
                    <MessageTimeLine>Oct 23, 2023 4:12pm</MessageTimeLine>
                  </div>

                  <MessageText className="mt-2">Sending Link Now</MessageText>
                </div>
              </MessageContent>
            </Message>

            <Message>
              <MessageContent>
                <ProfileImage />

                <div>
                  <div className="flex gap-2 items-center">
                    <MessageAuthor>Heisenberg</MessageAuthor>
                    <MessageTimeLine>Oct 23, 2023 4:12pm</MessageTimeLine>
                  </div>

                  <MessageText className="mt-2">Sending Link Now</MessageText>
                </div>
              </MessageContent>
            </Message>

            <Message>
              <MessageContent>
                <ProfileImage />

                <div>
                  <div className="flex gap-2 items-center">
                    <MessageAuthor>Heisenberg</MessageAuthor>
                    <MessageTimeLine>Oct 23, 2023 4:12pm</MessageTimeLine>
                  </div>

                  <MessageText className="mt-2">Sending Link Now</MessageText>
                </div>
              </MessageContent>
            </Message>

            <Message>
              <MessageContent>
                <ProfileImage />

                <div>
                  <div className="flex gap-2 items-center">
                    <MessageAuthor>Heisenberg</MessageAuthor>
                    <MessageTimeLine>Oct 23, 2023 4:12pm</MessageTimeLine>
                  </div>

                  <MessageText className="mt-2">Sending Link Now</MessageText>
                </div>
              </MessageContent>
            </Message>

            <Message>
              <MessageContent>
                <ProfileImage />

                <div>
                  <div className="flex gap-2 items-center">
                    <MessageAuthor>Heisenberg</MessageAuthor>
                    <MessageTimeLine>Oct 23, 2023 4:12pm</MessageTimeLine>
                  </div>

                  <MessageText className="mt-2">Sending Link Now</MessageText>
                </div>
              </MessageContent>
            </Message>

            <Message>
              <MessageContent>
                <ProfileImage />

                <div>
                  <div className="flex gap-2 items-center">
                    <MessageAuthor>Heisenberg</MessageAuthor>
                    <MessageTimeLine>Oct 23, 2023 4:12pm</MessageTimeLine>
                  </div>

                  <MessageText className="mt-2">Sending Link Now</MessageText>
                </div>
              </MessageContent>
            </Message>
          </div>
        </div>
      </div>

      <footer className="fixed bottom-[4.5rem] md:bottom-0 right-0 left-0 px-4 py-3 border-t border-border bg-scrim-sidebar md:bg-background backdrop-blur-md">
        <form className="flex gap-2 items-center">
          <Input
            className="grow"
            name="message"
            placeholder="enter your message"
          />
          <Button>Send</Button>
        </form>
      </footer>
    </div>
  );
}
