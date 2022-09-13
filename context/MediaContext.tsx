import { createContext } from "react"
import { device } from "../helper";
import { useMediaQuery } from "../hooks/useMediaQuery";

interface Props {
  children: React.ReactNode;
}

interface MediaCtx {
  mobile: boolean;
  tablet: boolean;
  desktop: boolean;
}

export const MediaContext = createContext<MediaCtx>({
  mobile: false,
  tablet: false,
  desktop: false,
});

const MediaProvider = ({ children }: Props): JSX.Element => {
  const mobile = useMediaQuery(device.mobile.mediaQuery);
  const tablet = useMediaQuery(device.tablet.mediaQuery);
  const desktop = useMediaQuery(device.desktop.mediaQuery);
  
  return (
    <MediaContext.Provider value={{ mobile, tablet, desktop }}>
      {children}
    </MediaContext.Provider>
  )
}

export default MediaProvider;