import styles from "./index.modules.scss";

const Popup = ({ children }) => {
  return <div className={styles.Popup}>{children}</div>;
};

export default Popup;