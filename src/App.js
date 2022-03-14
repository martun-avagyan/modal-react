import "./App.css";
import { useEffect, useState } from "react";

import Data from "./Components/Data/Data";
import MyHeader from "./Components/Header/MyHeader";
function App() {
  const [data, setData] = useState([]);
  const [cartState, setCartState] = useState([]);
  console.log(cartState);

  const addCartStateHandler = (el) => {
    console.log(el);
    setCartState((prev) => [...prev, el]);
  };

  useEffect(() => {
    fetch("https://api.coinstats.app/public/v1/coins?skip=0&limit=10")
      .then((res) => res.json())
      .then((data) => setData(data.coins));
  }, []);

  return (
    <div className="app">
      <MyHeader></MyHeader>
      <Data addCartStateHandler={addCartStateHandler} state={data}></Data>
    </div>
  );
}

export default App;
