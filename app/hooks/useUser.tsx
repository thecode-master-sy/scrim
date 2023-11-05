import useLocalStorage from "./useLocalStorage";

type userReturnValue = {
  user: User;
  setUser: Function;
};

const useUser = (): userReturnValue => {
  const [user, setUser] = useLocalStorage("user", {});

  return { user, setUser };
};

export { useUser };
