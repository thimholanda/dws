import { BandFilterProps } from "./types";
import { BandFilterItem, BandFilterSearchResults, BandFilterButton } from ".";
import { useBandFilter } from "./useBandFilter";

import iconOrderBy from "../../assets/icon-order-by.png";
import iconOrderByClose from "../../assets/icon-order-by-close.png";
import styles from "./BandFilterComponents.module.css";

const BandFilter = ({ bands, handleOrderBands, searchValue, orderStrategy = "name", isLoading }: BandFilterProps) => {
  const { bandFilterRef, buttonRef, filtersAreVisible, setFiltersAreVisible } = useBandFilter();

  return (
    <div className={styles["band-filter"]}>
      <BandFilterSearchResults isLoading={isLoading} bands={bands} searchValue={searchValue} />

      {bands.length > 1 && (
        <>
          <BandFilterButton ariaLabel="open filter menu" buttonRef={buttonRef} filtersAreVisible={filtersAreVisible} iconButtonOpen={iconOrderBy} iconButtonClose={iconOrderByClose} onClick={() => setFiltersAreVisible(!filtersAreVisible)} />

          {filtersAreVisible && (
            <nav ref={bandFilterRef} className={styles["band-filter--container-order-by"]} role="menu" aria-label="bands ordering">
              <ul className={styles["band-filter--list-order-by"]}>
                <BandFilterItem orderType="name" orderStrategy={orderStrategy} handleOrderBands={() => handleOrderBands("name")} label="sort by name" />
                <BandFilterItem orderType="numPlays" orderStrategy={orderStrategy} handleOrderBands={() => handleOrderBands("numPlays")} label="sort by popularity" />
              </ul>
            </nav>
          )}
        </>
      )}
    </div>
  );
};

export { BandFilter };
