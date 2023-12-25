import { useThemeContext } from "@/app/contexts/ThemeContextProvider";
import Image from "next/image"
import lightMode from "@/public/light-mode.png";
import darkMode from "@/public/dark-mode.png";
import { Button } from "../ui/button";

export default function OnboardingUserPreferences ({ moveToNextTab }: { moveToNextTab: () => void }) {
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
                onClick={() => themeContext?.toggleTheme("light")}>
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
                onClick={() => themeContext?.toggleTheme("dark")}>
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