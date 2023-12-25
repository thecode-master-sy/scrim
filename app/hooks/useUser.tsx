"use client";
import useLocalStorage from "./useLocalStorage";

type userReturnValue = {
  user: UserDetails;
  setUser: Function;
};

const useUser = (): userReturnValue => {
  const [user, setUser] = useLocalStorage("user", {});

  return { user, setUser };
};

export { useUser };
