import {
  createContext,
  FC,
  useState,
  Dispatch,
  SetStateAction,
  useContext,
} from "react";

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
  const [username, setUsername] = useState<string | undefined>();

  const handleLogout = () => {
    // TODO: also reset session storage
    setUsername(undefined);
  };

  return (
    <Context.Provider
      value={{
        username,
        setUsername,
        handleLogout,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useAuth = () => useContext(Context);
