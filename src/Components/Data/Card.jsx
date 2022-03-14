import "./Card.css";
import plus from "../../Assets/plus-solid.svg";
import minus from "../../Assets/minus-solid.svg";

import React, { useState } from "react";

export default function Card({
  element,
  addCartStateHandler,
  subtractCartStateHandler,
}) {
  const [count, setCount] = useState(element.totalCount);

  const add = () => {
    setCount(count + 1);
  };

  const subtract = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="card-wrapper">
      <div className="title">{element.name}</div>
      <img src={element.icon} alt="Coin Icon" className="icon"></img>
      <div className="price">$ {element.price.toFixed(2)}</div>
      <div className="card-bottom-wrapper">
        <img
          src={plus}
          className="my-btn"
          onClick={() => {
            add();
            addCartStateHandler({ ...element, totalCount: count + 1 });
          }}
          alt="Add"
        />
        <div className="counter">{count}</div>
        <img
          src={minus}
          className="my-btn"
          onClick={() => {
            subtract();
            subtractCartStateHandler({ ...element, totalCount: count - 1 });
          }}
          alt="Subtract"
        />
      </div>
    </div>
  );
}
