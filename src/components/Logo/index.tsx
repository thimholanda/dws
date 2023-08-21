import { LogoProps } from "./types";
import styles from "./Logo.module.css";
import { Link } from "react-router-dom";

const Logo = ({ image, altText }: LogoProps) => {
  return (
    <Link aria-label="back to home" to="/">
      <h1>
        <img className={styles.logo} src={image} alt={altText} />
      </h1>
    </Link>
  );
};

export { Logo };
