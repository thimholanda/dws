export type SearchBoxProps = {
  handleSearch: (value: string) => void;
  handleCleanSearch: () => void;
  handleInputSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputSearchValue: string;
  setInputSearchValue: (value: React.SetStateAction<string>) => void;
};
