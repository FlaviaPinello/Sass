import { useState, useEffect } from "react";
import { GET } from "./utils/http";
import { filteredList } from "./utils/funcs";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Content from "./components/content";
// import Popup from "./components/popup";
// import "./App.scss";
import styles from "./App.module.scss";


function App() {
  const [cocktailList, setCocktailList] = useState([]);
  const [category, setCategory] = useState("Cocktail");
  // const [isPopupVisibile, setPopupVisibility] = useState(false);

  // const onHandleSubmit = (e) => {
  //   e.preventDefault();
  //   setPopupVisibility(true);
  //  };

  useEffect(() => {
    GET("/search.php?f=c").then(({ drinks }) => {
      setCocktailList(() => drinks);
    });
  }, []);

  return (
    <div className={styles.App}>
      <Navbar />
      <Hero setCategory={setCategory} />
      <Content data={filteredList(cocktailList, "strCategory", category)} />

      {/* {isPopupVisibile && (
        <Popup>
          <h3>Notifica!</h3>
          <p>
            Il tuo cocktail è stato ordinato
           </p>
        </Popup>
      )}
     */}
    </div>
  );
}

export default App;
