"use client";
import React from "react";

const useLocalStorage = (key: string, initialValue: any) => {
  const [localStorageValue, setValue] = React.useState(() => {
    try {
      const value = localStorage ? localStorage.getItem(key) : "";
      if (value) {
        return JSON.parse(value);
      }

      localStorage && localStorage.setItem(key, JSON.stringify(initialValue));
      return initialValue;
    } catch (error) {
      localStorage && localStorage.setItem(key, JSON.stringify(initialValue));
      return "initialValue";
    }
  });

  const setLocalStorageValue = (valueOrFn: any) => {
    let newValue;
    if (typeof valueOrFn === "function") {
      newValue = valueOrFn(localStorageValue);
    } else {
      newValue = valueOrFn;
    }

    localStorage && localStorage.setItem(key, JSON.stringify(newValue));
    setValue(newValue);
  };

  return [localStorageValue, setLocalStorageValue];
};

export default useLocalStorage;
