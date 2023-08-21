import { createContext } from "react";

import { Band } from "../../types/types";

type BandsContext = {
  bands: Band[];
  bandsRef: Band[];
  genreListRef: React.RefObject<HTMLUListElement>;
  searchValue: string;
  inputSearchValue: string;
  setInputSearchValue: React.Dispatch<React.SetStateAction<string>>;
  genres: string[];
  selectedGenre: string;
  orderStrategy: "name" | "numPlays";
  isLoading: boolean;
  handleOrderBands: (strategy: "name" | "numPlays") => void;
  handleSearch: (value: string) => void;
  handleCleanSearch: () => void;
  handleFilterByGenre: (genre: string) => void;
  handleGenreChange: (value: string) => void;
  handleInputSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleResetInputSearchByGenre: () => void;
};

export const bandsContext = createContext({} as BandsContext);
