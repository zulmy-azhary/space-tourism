import { useCallback, useEffect, useRef } from "react";

export let useClickOutside = (
  state: boolean, handler: () => void
): React.MutableRefObject<HTMLElement | undefined> => {
  let menuRef = useRef<HTMLElement>();

  // When user click outside
  let handlerEvent = (e: Event): void => {
    if (!menuRef.current?.contains(e.target as HTMLElement) && state) {
      handler();
    }
  };

  // When user press esc key
  const handleEscKey = useCallback((e: KeyboardEvent): void => {
    if (e.key === "Escape" && state) {
      handler();
    }
  }, [state]);

  useEffect(() => {
    if (!state) return;

    document.addEventListener("mousedown", handlerEvent);
    document.addEventListener("keydown", handleEscKey);
    // Clean Up
    return () => {
      document.removeEventListener("mousedown", handlerEvent);
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [state]);

  return menuRef;
};
