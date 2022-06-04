import {
  createContext,
  FC,
  useState,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
} from "react";
import { useSessionStorage } from "../hooks";

export type ContextTypes = {
  username?: string;
  setUsername: Dispatch<SetStateAction<string | undefined>>;
  handleLogout: () => void;
  isSSR: boolean;
};

const Context = createContext<ContextTypes>({
  username: undefined,
  setUsername: () => null,
  handleLogout: () => null,
  isSSR: true,
});

type Props = {
  children: JSX.Element;
};

export const Provider: FC<Props> = ({ children }) => {
  const [isSSR, setIsSSR] = useState(true);
  const [storedUsername, setStoredUsername] = useSessionStorage({
    key: "username",
    defaultValue: "",
  });

  useEffect(() => {
    setIsSSR(false);
  }, []);

  const handleLogout = () => {
    // @ts-expect-error
    setStoredUsername("");
  };

  if (isSSR) return null;

  return (
    <Context.Provider
      value={{
        // @ts-expect-error
        username: storedUsername,
        // @ts-expect-error
        setUsername: setStoredUsername,
        handleLogout,
        isSSR,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useAuth = () => useContext(Context);
