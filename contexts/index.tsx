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
};

const Context = createContext<ContextTypes>({
  username: undefined,
  setUsername: () => null,
});

type Props = {
  children: JSX.Element;
};

export const Provider: FC<Props> = ({ children }) => {
  const [username, setUsername] = useState<string>();

  return (
    <Context.Provider
      value={{
        username,
        setUsername,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useAuth = () => useContext(Context);
