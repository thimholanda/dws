import { BandFilterItemProps } from "./types";
import { FiSquare, FiCheckSquare } from "react-icons/fi";
import styles from "./BandFilterComponents.module.css";

const BandFilterItem = ({ handleOrderBands, label, orderStrategy, orderType }: BandFilterItemProps) => {
  return (
    <li className={styles["band-filter--item-order-by"]}>
      <button className={styles["band-filter--btn-item-order-by"]} onClick={() => handleOrderBands("name")} type="button">
        {label}
        {orderType === orderStrategy ? <FiCheckSquare color="orange" size="1.2rem" /> : <FiSquare size="1.2rem" />}
      </button>
    </li>
  );
};

export { BandFilterItem };
