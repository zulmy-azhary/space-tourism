import { createContext, useEffect, useState } from "react"
import { mediaState } from "../helper";

interface Props {
  children: React.ReactNode;
}

interface BackgroundCtx {
  background: string;
  setBackground: React.Dispatch<React.SetStateAction<string>>;
  path: string;
  setPath: React.Dispatch<React.SetStateAction<string>>;
  devices: string;
}

export const BackgroundContext = createContext<BackgroundCtx>({} as BackgroundCtx);

const BackgroundProvider = ({ children }: Props): JSX.Element => {
  const [background, setBackground] = useState<string>("/assets/home/background-home-desktop.jpg");
  const [path, setPath] = useState<string>("home");
  const devices: string = mediaState("mobile", "tablet", "desktop") as string;

  // Set background state when layout's title component has changed.
  useEffect(() => {
    setBackground(`/assets/${path}/background-${path}-${devices}.jpg`);
  }, [path, devices]);

  return (
    <BackgroundContext.Provider value={{ background, setBackground, path, setPath, devices }}>
      {children}
    </BackgroundContext.Provider>
  )
}

export default BackgroundProvider;