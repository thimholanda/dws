import { RefObject, useRef } from "react";

export const useGenreListItem = (handleGenreChange: (genre: string) => void, handleResetInputSearchByGenre: () => void, genreListRef: RefObject<HTMLElement>) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleSelectGenre = (genre: string) => {
    handleGenreChange(genre);
    handleResetInputSearchByGenre();

    const leftPos = buttonRef.current!.offsetLeft;
    const centerOffset = (genreListRef.current!.offsetWidth - buttonRef.current!.offsetWidth) / 2;
    genreListRef.current!.scrollLeft = leftPos - centerOffset;
  };

  return { buttonRef, handleSelectGenre };
};
