import { Band } from "../../types/types";

export type BandFilterProps = {
  bands: Band[];
  searchValue: string;
  orderStrategy: "name" | "numPlays";
  isLoading: boolean;
  handleOrderBands: (strategy: "name" | "numPlays") => void;
};

export type BandFilterItemProps = {
  label: string;
  orderType: "name" | "numPlays";
  handleOrderBands: (strategy: "name" | "numPlays") => void;
} & Pick<BandFilterProps, "orderStrategy">;

export type BandFilterButtonProps = {
  ariaLabel: string;
  filtersAreVisible: boolean;
  iconButtonOpen: string;
  iconButtonClose: string;
  buttonRef: React.MutableRefObject<HTMLButtonElement | null>;
  onClick: () => void;
};

export type BandFilterSearchResultsProps = {
  bands: Band[];
  searchValue: string;
  isLoading: boolean;
};
