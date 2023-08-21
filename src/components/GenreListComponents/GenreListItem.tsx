import styles from "./GenreListComponents.module.css";
import { GenreListItemProps } from "./types";
import { useGenreListItem } from "./useGenreListItem";

const GenreListItem = ({ handleGenreChange, selectedGenre, genre, handleResetInputSearchByGenre, genreListRef }: GenreListItemProps) => {
  const { buttonRef, handleSelectGenre } = useGenreListItem(handleGenreChange, handleResetInputSearchByGenre, genreListRef);

  return (
    <li className={styles["genre-list__item"]} key={genre}>
      <button ref={buttonRef} className={`${styles["genre-list__item-button"]} ${selectedGenre === genre && styles["genre-list__item-button--active"]}`} type="button" onClick={() => handleSelectGenre(genre)}>
        {genre}
      </button>
    </li>
  );
};

export { GenreListItem };
