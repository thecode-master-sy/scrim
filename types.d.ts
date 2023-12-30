type User = {
  id: string;
  email: string;
  username: string | null;
}

type UserDetails = {
  id?: string;
  email: string;
  username?: string;
  profileImage?: string;
};

type ScrimRoomDetails = {
  scrimName: string;
  description: string;
  status: "pending" | "completed";
  categories: string[]
}

type Message = {
  id: string;
  content: string;
  timeStamp: Date;
  authorId: string;
  scrimId: string;
  author?: User;
}

type ScrimParticipant = {
  id: string;
  participantId: string;
  scrimId: string;
  joinedAt: Date;
  participant?: User;
}

type ScrimRoom = {
  id: string;
  scrimName: string;
  creatorId: string;
  createdAt: Date;
  description: string;
  status: string;
  categories: string[];
  Messages?: Message[];
  ScrimParticipants?: ScrimParticipant[];
  creator?: User;
}