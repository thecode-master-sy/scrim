import Image from "next/image";

//encountered a problem with loading the jfif image
//fixed it by just including the path directly into the image src and removing the public from the front of the url string
const ProfileImage = () => {
  return (
    <div>
      <div className="relative w-[30px] h-[30px] rounded-full overflow-hidden">
        <Image
          src="/defaultprofile.jfif"
          className="cover"
          fill
          alt="defaultprofile"
        />
      </div>
    </div>
  );
};

export { ProfileImage };
