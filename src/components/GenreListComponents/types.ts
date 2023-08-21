export type GenreListProps = {
  genres: string[];
  selectedGenre: string;
  genreListRef: React.RefObject<HTMLUListElement>;
  handleGenreChange: (genre: string) => void;
  handleResetInputSearchByGenre: () => void;
};

export type GenreListItemProps = {
  genre: string;
} & Omit<GenreListProps, "genres">;
