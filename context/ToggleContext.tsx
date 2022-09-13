import React, { createContext, useContext, useEffect, useState } from "react"
import { MediaContext } from ".";

interface Props {
  children: React.ReactNode;
}

interface ToggleCtx {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ToggleContext = createContext<ToggleCtx>({} as ToggleCtx);

const ToggleProvider = ({ children }: Props): JSX.Element => {
  const [toggle, setToggle] = useState<boolean>(false);
  const { mobile } = useContext(MediaContext);

  useEffect(() => {
    setToggle(false);
  }, [mobile]);

  return (
    <ToggleContext.Provider value={{ toggle, setToggle }}>
      {children}
    </ToggleContext.Provider>
  )
}

export default ToggleProvider