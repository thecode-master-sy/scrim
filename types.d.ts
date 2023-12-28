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

type ScrimRoom = {
  id: string;
  scrimName: string;
  creatorId: string;
  createdAt: Date;
  description: string;
  status: string;
  categories: string[];
}