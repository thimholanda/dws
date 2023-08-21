import { useEffect, useRef, useState } from "react";

export const useBandFilter = () => {
  const [filtersAreVisible, setFiltersAreVisible] = useState(false);

  const bandFilterRef = useRef<HTMLElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const onClickOutside = () => {
    setFiltersAreVisible(false);
  };

  useEffect(() => {
    const handleEventOutside = (e: Event) => {
      if (e.type === "click") {
        const targetElement = e.target as Node;

        if (buttonRef.current && buttonRef.current.contains(targetElement)) {
          return;
        }
        if (bandFilterRef.current && !bandFilterRef.current.contains(targetElement)) {
          onClickOutside();
        }
      } else if (e.type === "scroll") {
        onClickOutside();
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && filtersAreVisible) {
        setFiltersAreVisible(false);
      }
    };

    document.addEventListener("click", handleEventOutside);
    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("scroll", handleEventOutside);

    return () => {
      document.removeEventListener("click", handleEventOutside);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("scroll", handleEventOutside);
    };
  }, [filtersAreVisible]);

  return { bandFilterRef, buttonRef, filtersAreVisible, setFiltersAreVisible };
};
