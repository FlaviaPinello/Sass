import styles from "./index.module.scss";

const Card = ({ data }) => {
  return (
    <div className={styles.Card}>
      <img src={data.strDrinkThumb} alt={data.strDrink} />
      <div className={styles.text}>
        <h2>{data.strDrink}</h2>
        <ul>
          <li>{data.strIngredient1}</li>
          <li>{data.strIngredient2}</li>
          <li>{data.strIngredient3}</li>
          <li>{data.strIngredient4}</li>
        </ul>
      </div>
    </div>
  );
};

export default Card;