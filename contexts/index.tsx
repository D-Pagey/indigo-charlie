import { createContext, FC, Dispatch, SetStateAction, useContext } from "react";
import { useSessionStorage } from "../hooks";

export type ContextTypes = {
  username?: string;
  setUsername: Dispatch<SetStateAction<string | undefined>>;
  handleLogout: () => void;
};

const Context = createContext<ContextTypes>({
  username: undefined,
  setUsername: () => null,
  handleLogout: () => null,
});

type Props = {
  children: JSX.Element;
};

export const Provider: FC<Props> = ({ children }) => {
  const [storedUsername, setStoredUsername] = useSessionStorage({
    key: "username",
    defaultValue: "",
  });

  const handleLogout = () => {
    // @ts-expect-error
    setStoredUsername("");
  };

  return (
    <Context.Provider
      value={{
        // @ts-expect-error
        username: storedUsername,
        // @ts-expect-error
        setUsername: setStoredUsername,
        handleLogout,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useAuth = () => useContext(Context);
