import styles from "./Header.module.css";

import { HeaderProps } from "./types";

const Header = ({ children }: HeaderProps) => {
  return <header className={styles.header}>{children}</header>;
};

export { Header };
