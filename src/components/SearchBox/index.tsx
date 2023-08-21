import { IoCloseSharp, IoSearchSharp } from "react-icons/io5";
import styles from "./SearchBox.module.css";
import { SearchBoxProps } from "./types";
import { useSearchBox } from "./useSearchBox";

const SearchBox = ({ handleSearch, handleCleanSearch, handleInputSearchChange, setInputSearchValue, inputSearchValue }: SearchBoxProps) => {
  const { handleCleanBtn, handleKeyUp } = useSearchBox(handleCleanSearch, setInputSearchValue, handleSearch, inputSearchValue);

  return (
    <div className={styles["search-box"]}>
      <button className={`${styles["search-box__btn"]} ${inputSearchValue.length === 0 ? styles["search-box__btn--hidden"] : ""}`} type="button" onClick={handleCleanBtn} disabled={!inputSearchValue.length}>
        <IoCloseSharp size="1.4rem" />
      </button>

      <input value={inputSearchValue} onChange={handleInputSearchChange} onKeyUp={handleKeyUp} size={1} className={styles["search-box__input"]} type="text" />

      <button className={styles["search-box__btn"]} type="button" onClick={() => handleSearch(inputSearchValue)} disabled={!inputSearchValue.length}>
        <IoSearchSharp size="1.4rem" />
      </button>
    </div>
  );
};

export { SearchBox };
