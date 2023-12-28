"use client"
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import AddTags from "./AddTags";
import Introduction from "./Introduction";
import Description from "./Description";
import Title from "./Title";

export default function ModalContent(){
    const [selectedTabIndex, setSelectedTabIndex] = useState(0);

    const [formData, setFormData] = useState<ScrimRoomDetails>({
        scrimName: "",
        description: "",
        status: "pending",
        categories: []
    })

    // useEffect(() => {
    //     console.log(formData);
    // }, [formData])
   
    const tabs = [
      <Introduction moveToNext={moveToNext} key={Math.random()} />,
      <Title
        moveToNext={moveToNext}
        moveToPrevious={moveToPrevious}
        setFormData={setFormData}
        key={Math.random()}
      />,
      <Description
        setFormData={setFormData}
        moveToNext={moveToNext}
        moveToPrevious={moveToPrevious}
        key={Math.random()}
      />,
      <AddTags
        formData={formData}
        setFormData={setFormData}
        moveToPrevious={moveToPrevious}
        key={Math.random()}
      />,
    ];
    function moveToNext() {
      setSelectedTabIndex((prev) => prev + 1);
    }
    function moveToPrevious() {
      setSelectedTabIndex((prev) => prev - 1);
    }
  
    return (
      <motion.div>
        <AnimatePresence mode="wait" initial={false}>
          {tabs[selectedTabIndex]}
        </AnimatePresence>
      </motion.div>
    );
  };