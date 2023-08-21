import { BandFilterButtonProps } from "./types";
import styles from "./BandFilterComponents.module.css";

const BandFilterButton = ({ ariaLabel, buttonRef, filtersAreVisible, iconButtonOpen, iconButtonClose, onClick }: BandFilterButtonProps) => (
  <button onClick={() => onClick()} aria-label={ariaLabel} ref={buttonRef} className={styles["band-filter__btn-order-by"]} type="button" aria-expanded={filtersAreVisible}>
    <img className={styles["band-filter__image-order-by"]} width="70" src={filtersAreVisible ? iconButtonClose : iconButtonOpen} alt="show and hidden filter buttons" />
  </button>
);

export { BandFilterButton };
