export const useSearchBox = (handleCleanSearch: () => void, setInputSearchValue: (value: React.SetStateAction<string>) => void, handleSearch: (value: string) => void, inputSearchValue: string) => {
  const handleCleanBtn = () => {
    handleCleanSearch();
    setInputSearchValue("");
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch(inputSearchValue);
    }
  };

  return { handleCleanBtn, handleKeyUp };
};
