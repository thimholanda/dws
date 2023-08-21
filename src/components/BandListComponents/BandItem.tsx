import { Band } from "../../types/types";
import styles from "./BandListComponents.module.css";
import { Link } from "react-router-dom";
import { BsMusicNoteList } from "react-icons/bs";

const BandItem = ({ band }: { band: Band }) => {
  return (
    <li className={styles["band-list__item"]}>
      <Link className={styles["band-list__item-link"]} to={`band/${band.id}`}>
        <div>
          <img className={styles["band-list__item-image"]} width="80" height="80" src={band.image} alt={band.name} />
        </div>
        <div className={styles["band-list__item-infos"]}>
          <h2 className={styles["band-list__item-name"]}>{band.name}</h2>
          <h3 className={styles["band-list__item-plays"]}>
            <BsMusicNoteList /> {band.numPlays.toLocaleString("en")} plays
          </h3>
          <h4 className={styles["band-list__item-genre"]}>{band.genre}</h4>
        </div>
      </Link>
    </li>
  );
};

export { BandItem };
