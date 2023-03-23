import Card from "../card";
import styles from "./index.module.scss";
const Content = ({ data }) => {
  return (
    <div className={styles.Content}>
      {data.map((cocktail) => (
        <Card data={cocktail} />
      ))}
    </div>
  );
};

export default Content;