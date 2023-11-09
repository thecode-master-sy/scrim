"use client";
import { Logo } from "@/app/components/Logo";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { cn, patterns, verify } from "@/app/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { useState } from "react";
import * as React from "react";
import lightMode from "@/public/light-mode.png";
import darkMode from "@/public/dark-mode.png";
import Image from "next/image";
import { hankoApi as hankoApiUrl } from "@/app/lib/hanko/HankoAuth";
import { createUser } from "@/app/lib/api-client/user";
import { useThemeContext } from "@/app/contexts/ThemeContextProvider";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

const Hanko = dynamic(() => import("@/app/lib/hanko/HankoAuth"), {
  ssr: false,
});

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <div>
        <Logo className="font-extrabold" />
      </div>

      <div className="flex grow">
        <div className="mx-auto my-auto w-full">
          <OnboardingComponent />
        </div>
      </div>
    </div>
  );
}

const TabOne = ({ moveToNextTab }: { moveToNextTab: () => void }) => {
  return (
    <div className="text-center grid gap-4 mx-auto max-w-[500px]">
      <h2 className=" text-mid font-extrabold">Welcome to Scrim</h2>

      <p>scrim is a platform where gamers come to search for scrims</p>

      <Button size="lg" onClick={moveToNextTab}>
        Get started
      </Button>
    </div>
  );
};

const TabTwo = ({ moveToNextTab }: { moveToNextTab: () => void }) => {
  const usernameRef = React.useRef<HTMLInputElement>(null);
  const [error, setError] = useState<null | string>(null);

  async function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const username = usernameRef.current?.value || "";

    if (username === "") return setError("please enter a username");

    if (!verify(username, patterns.username))
      return setError(
        "the username should be a minimum of 6 characters and not more than 30 characters"
      );

    // const { id, email } = await getHankoUser();

    // if (id === null || email === null)
    //   return setError("something went wrong please retry");

    // const newUser = {
    //   id: id,
    //   email: email,
    //   username: username,
    // };

    // const response = await createUser(newUser)

    // console.log(response);

    moveToNextTab();
  }
  return (
    <div className="w-full">
      <h2 className="text-mid font-semibold text-center">Create a username</h2>

      <form
        className="grid gap-4 mt-4 w-full max-w-[500px] mx-auto"
        onSubmit={(e) => handleFormSubmit(e)}>
        {error && <p className="text-red-400 text-center">{error}</p>}
        <Input placeholder="username" name="username" ref={usernameRef} />

        <Button size="lg">
          <span>Continue</span>
        </Button>
      </form>
    </div>
  );
};

const TabThree = ({ moveToNextTab }: { moveToNextTab: () => void }) => {
  const themeContext = useThemeContext();

  return (
    <div className="mx-auto w-full max-w-[600px]">
      <h2
        className="text-mid font-semibold text-center
      ">
        Choose your preferred theme
      </h2>

      <p className="text-center mt-4">
        your preferred theme can be changed anytime from the settings page
      </p>

      <div className="mt-7">
        <div className="grid grid-cols-2 gap-2 items-center ">
          <div className="cursor-pointer">
            <div
              className={`flex px-4 py-10 justify-center align-center bg-scrim-white rounded-md hover:border-2 hover:border-scrim-button-stroke ${
                themeContext?.theme === "light"
                  ? "border-2  border-scrim-button-stroke"
                  : ""
              }`}
              onClick={() => themeContext?.setTheme("light")}>
              <Image
                width={100}
                height={100}
                src={lightMode}
                alt="light-mode"
              />
            </div>
            <p
              className={`text-center mt-2 ${
                themeContext?.theme === "light" ? "text-primary-dark" : ""
              }`}>
              Light mode
            </p>
          </div>
          <div className="cursor-pointer">
            <div
              className={`flex px-4 py-10 justify-center align-center bg-scrim-input-bg-dark rounded-md hover:border-2 hover:border-scrim-button-stroke ${
                themeContext?.theme === "dark"
                  ? "border-2  border-scrim-button-stroke"
                  : ""
              }`}
              onClick={() => themeContext?.setTheme("dark")}>
              <Image width={100} height={100} src={darkMode} alt="dark mode" />
            </div>
            <p
              className={`text-center mt-2 ${
                themeContext?.theme === "dark" ? "text-primary-dark" : ""
              }`}>
              Dark mode
            </p>
          </div>
        </div>
      </div>

      <Button size="lg" className="w-full mt-7" onClick={moveToNextTab}>
        <span>Continue</span>
      </Button>
    </div>
  );
};

const TabFour = () => {
  const router = useRouter();
  function navigateToDashboard() {
    router.replace("/dashboard");
  }
  return (
    <div className="mx-auto max-w-[500px]">
      <h2 className="text-mid font-semibold text-center">
        You are good to go!
      </h2>
      <p className="text-center mt-7">start by creating your first scrim</p>
      <Button
        size="lg"
        className="w-full mt-7"
        onClick={() => navigateToDashboard()}></Button>
    </div>
  );
};

const indicatorVariants = cva("w-2 h-2 rounded-full", {
  variants: {
    variant: {
      default: "bg-scrim-background-light-400 opacity-40",
      active: "bg-scrim-background-light-400 ",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface IndicatorProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof indicatorVariants> {}

const Indicator: React.FC<IndicatorProps> = ({
  variant,
  className,
  ...props
}) => {
  return <div className={cn(indicatorVariants({ variant, className }))}></div>;
};

const OnboardingComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(
    <TabOne moveToNextTab={MoveToNextTab} />
  );
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const slidesArray = React.useMemo(
    () => [
      <TabOne moveToNextTab={MoveToNextTab} key={Math.random()} />,
      <TabTwo moveToNextTab={MoveToNextTab} key={Math.random()} />,
      <TabThree moveToNextTab={MoveToNextTab} key={Math.random()} />,
      <TabFour key={Math.random()} />,
    ],
    []
  );

  function MoveToNextTab() {
    setCurrentSlideIndex((prevSlideIndex) => prevSlideIndex + 1);
  }

  React.useEffect(() => {
    setCurrentSlide(slidesArray[currentSlideIndex]);
  }, [slidesArray, currentSlideIndex]);

  let indicatorArray: number[] = [];

  slidesArray.forEach((slides, index) => indicatorArray.push(index));

  return (
    <div>
      {currentSlide}
      <div className="flex justify-center gap-2 items-center mt-4">
        {indicatorArray.map((indicator, index) =>
          currentSlideIndex === indicator ? (
            <Indicator
              variant="active"
              className="cursor-pointer"
              key={index}
            />
          ) : (
            <Indicator className="cursor-pointer" key={index} />
          )
        )}
      </div>
    </div>
  );
};

const getHankoUser = async () => {
  const hankoApi = new Hanko(hankoApiUrl ?? "");

  const userDetails = hankoApi
    ? await hankoApi.user.getCurrent()
    : { id: null, email: null };

  console.log(userDetails);

  return userDetails;
};
