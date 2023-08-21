import { useBands } from "../../hooks/useBands";

export const useHome = () => {
  const { bands, genres, selectedGenre, orderStrategy, genreListRef, isLoading, inputSearchValue, handleOrderBands, handleSearch, handleCleanSearch, searchValue, handleFilterByGenre, setInputSearchValue, handleInputSearchChange, handleResetInputSearchByGenre, handleGenreChange } = useBands();

  return { bands, genres, selectedGenre, orderStrategy, genreListRef, isLoading, inputSearchValue, setInputSearchValue, handleOrderBands, handleSearch, handleCleanSearch, handleInputSearchChange, handleResetInputSearchByGenre, searchValue, handleFilterByGenre, handleGenreChange };
};
