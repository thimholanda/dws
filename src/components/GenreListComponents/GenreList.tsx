import { GenreListItem } from ".";
import styles from "./GenreListComponents.module.css";
import { GenreListProps } from "./types";

const GenreList = ({ genres, selectedGenre, handleGenreChange, handleResetInputSearchByGenre, genreListRef }: GenreListProps) => {
  return (
    <nav style={{ position: "relative" }}>
      <ul ref={genreListRef} className={styles["genre-list"]}>
        {genres.map((genre) => (
          <GenreListItem genreListRef={genreListRef} handleResetInputSearchByGenre={handleResetInputSearchByGenre} key={genre} genre={genre} handleGenreChange={handleGenreChange} selectedGenre={selectedGenre} />
        ))}
      </ul>
    </nav>
  );
};

export { GenreList };
