"use client";
import React from "react";

const useLocalStorage = (key: string, initialValue: any) => {
  const [localStorageValue, setValue] = React.useState(() => {
    if (typeof localStorage !== undefined && localStorage.getItem(key))
      return JSON.parse(localStorage.getItem(key) ?? "");

    localStorage.setItem(key, JSON.stringify(initialValue));

    return initialValue;
  });

  const setLocalStorageValue = (valueOrFn: any) => {
    let newValue;
    if (typeof valueOrFn === "function") {
      newValue = valueOrFn(localStorageValue);
    } else {
      newValue = valueOrFn;
    }

    if (typeof localStorage !== undefined) {
      localStorage.setItem(key, JSON.stringify(newValue));
    }

    setValue(newValue);
  };

  return [localStorageValue, setLocalStorageValue];
};

export default useLocalStorage;
