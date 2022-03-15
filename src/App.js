import "./App.css";
import { useEffect, useState } from "react";
import Data from "./Components/Data/Data";
import MyHeader from "./Components/Header/MyHeader";
import Modal from "./Components/Modal/Modal";
function App() {
  const [data, setData] = useState([]);
  const [cartState, setCartState] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const addCartStateHandler = (el) => {
    if (cartState.find((item) => item.id === el.id)) {
      setCartState((prev) => {
        return prev.map((item) => {
          if (item.id === el.id) {
            console.log(item, el);
            return { ...item, totalCount: item.totalCount + 1 };
          }
          return item;
        });
      });
    } else {
      setCartState((prev) => [...prev, el]);
    }
  };

  const subtractCartStateHandler = (el) => {
    if (cartState.find((item) => item.id === el.id)) {
      setCartState((prev) => {
        return prev.map((item) => {
          if (item.id === el.id && el.totalCount > 0) {
            return { ...item, totalCount: item.totalCount - 1 };
          }
          return item;
        });
      });
    }
  };

  useEffect(() => {
    fetch("https://api.coinstats.app/public/v1/coins?skip=0&limit=10")
      .then((res) => res.json())
      .then((data) => setData(data.coins));
  }, []);

  const addModalCount = (id) => {
    setCartState((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return { ...item, totalCount: item.totalCount + 1 };
        }
        return item;
      })
    );
  };

  const subModalCount = (id) => {
    setCartState((prev) =>
      prev.map((item) => {
        if (item.id === id && item.totalCount !== 0) {
          return { ...item, totalCount: item.totalCount - 1 };
        } else return item;
      })
    );
  };

  const erase = (id) => {
    setCartState((prev) => {
      return prev.filter((item) => {
        return item.id !== id;
      });
    });
  };

  return (
    <div className="app">
      <MyHeader toggleModal={toggleModal}></MyHeader>
      {isModalOpen ? (
        <Modal
          addModalCount={addModalCount}
          subModalCount={subModalCount}
          cartState={cartState}
          erase={erase}
        />
      ) : null}
      <Data
        addCartStateHandler={addCartStateHandler}
        subtractCartStateHandler={subtractCartStateHandler}
        state={data}
      ></Data>
    </div>
  );
}

export default App;
