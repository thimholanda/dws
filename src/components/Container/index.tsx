import styles from "./Container.module.css";
import { ContainerProps } from "./types";

const Container = ({ children, paddingTop = "0" }: ContainerProps) => {
  return (
    <div style={{ paddingTop }} className={styles.container}>
      {children}
    </div>
  );
};

export { Container };
