import { BandFilterSearchResultsProps } from "./types";

const BandFilterSearchResults = ({ bands, searchValue, isLoading }: BandFilterSearchResultsProps) => {
  if (isLoading) {
    return <span>Loading...</span>;
  }
  return (
    <span>
      {bands && <strong>{bands.length}</strong>} result{bands.length !== 1 && "s"}{" "}
      {searchValue && (
        <>
          for <strong>"{searchValue}"</strong>
        </>
      )}
    </span>
  );
};

export { BandFilterSearchResults };
