import { ProfileImage } from "./profileimage";

const ProfileComponent = () => {
  const username = "Heisenberg";
  return (
    <div className="flex justify-between items-center">
      <div>
        <p>{username}</p>
      </div>

      <div>
        <ProfileImage />
      </div>
    </div>
  );
};

export { ProfileComponent };
