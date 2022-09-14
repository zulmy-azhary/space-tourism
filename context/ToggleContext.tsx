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

  // Set toggle to false when device are on mobile screen.
  useEffect(() => {
    setToggle(false);
  }, [mobile]);

  // Set toggle to false when user try to scrolling while navList was opened.
  useEffect(() => { 
    const scrollHandler = (): void => {
      window.scrollY && setToggle(false);
    }

    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    }
  });

  return (
    <ToggleContext.Provider value={{ toggle, setToggle }}>
      {children}
    </ToggleContext.Provider>
  )
}

export default ToggleProvider