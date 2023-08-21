import { BandItem } from ".";
import { Band } from "../../types/types";
import styles from "./BandListComponents.module.css";

import noResultsImg from "../../assets/icon-no-results.png";

const BandList = ({ bands }: { bands: Band[] }) => {
  return (
    <nav className={styles["band-list"]} aria-label="bands list">
      {bands.length > 0 ? (
        <ul className={styles["band-list-ul"]}>{bands.length > 0 && bands.map((band) => <BandItem key={band.id} band={band} />)}</ul>
      ) : (
        <div className={styles["band-list__no-results"]}>
          <span>No results to show</span>
          <img className={styles["band-list__no-results-image"]} src={noResultsImg} alt="no results to show" />
        </div>
      )}
    </nav>
  );
};

export { BandList };
