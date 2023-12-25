"use client"
import { useState, useMemo, useEffect } from "react";
import { Indicator } from "../ui/indicator";
import OnboardingIntroduction from "./OnboardingIntroduction";
import OnboardingEmailForm from "./OnboardingEmailForm";
import OnboardingFinalStep from "./OnboardingFinalStep";
import OnboardingUserPreferences from "./OnboardingUserPreferences";

export default function OnboardingComponent({userDetails}: {userDetails: UserDetails}) {
    const [currentSlide, setCurrentSlide] = useState(
      <OnboardingIntroduction moveToNextTab={MoveToNextTab} />
    );
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const [previousSlidesArray, setPreviousSidesArray] = useState<Number[]>(
      []
    );
    const slidesArray = useMemo(
      () => [
        <OnboardingIntroduction moveToNextTab={MoveToNextTab} key={Math.random()} />,
        <OnboardingEmailForm moveToNextTab={MoveToNextTab} userDetails={userDetails} key={Math.random()} />,
        <OnboardingUserPreferences moveToNextTab={MoveToNextTab} key={Math.random()} />,
        <OnboardingFinalStep key={Math.random()} />,
      ],
      []
    );
    //when user clicks on a previous visited slide indicator it sets it to be that slide;
    //user cannot move to a not previously visited tab by clicking the tab indicatior
  
    function MoveToNextTab() {
      setCurrentSlideIndex((prevSlideIndex) => prevSlideIndex + 1);
    }
  
    useEffect(() => {
      let tempArray = [...previousSlidesArray];
  
      if (!tempArray.includes(currentSlideIndex))
        tempArray.push(currentSlideIndex);
      setPreviousSidesArray(tempArray);
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
                onClick={() => {
                  previousSlidesArray.includes(indicator) &&
                    setCurrentSlideIndex(indicator);
                }}
              />
            ) : (
              <Indicator
                className="cursor-pointer"
                key={index}
                onClick={() => {
                  previousSlidesArray.includes(indicator) &&
                    setCurrentSlideIndex(indicator);
                }}
              />
            )
          )}
        </div>
      </div>
    );
  };