import { useEffect, useRef } from "react";

export let useClickOutside = (handler: () => void): React.MutableRefObject<HTMLElement | undefined> => {
  let menuRef = useRef<HTMLElement>();

  useEffect(() => {
    let handlerEvent = (e: Event): void => {
      if (!menuRef.current?.contains(e.target as HTMLElement)) {
        handler();
      }
    };

    document.addEventListener("mousedown", handlerEvent);
    // Clean Up
    return () => {
      document.removeEventListener("mousedown", handlerEvent);
    };
  });

  return menuRef;
};
