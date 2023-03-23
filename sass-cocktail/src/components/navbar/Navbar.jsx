import styles from "./index.module.scss";

const Navbar = () => {
  return (
    
    <div className={styles.Navbar}>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Mission</li>
        <li>Contacts</li>
      </ul>
      <img
        src="https://purepng.com/public/uploads/large/purepng.com-cocktailcocktaildrinkgeneric-alcoholic-mixed-drinkbeverage-1411527240706fzrjn.png"
        alt="logo"
      />
      <button>ordina</button>
    </div>
  );
};

export default Navbar;