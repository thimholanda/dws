import { Audio } from "react-loader-spinner";
import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <Audio height="50" width="50" color="#f04d25" ariaLabel="audio-loading" wrapperStyle={{}} wrapperClass="wrapper-class" visible={true} />
    </div>
  );
};

export { Loader };
