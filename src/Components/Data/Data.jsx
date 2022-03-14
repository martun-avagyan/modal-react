import React from "react";
import "./Data.css";
import Card from "../Data/Card";

export default function Data({
  state,
  addCartStateHandler,
  subtractCartStateHandler,
}) {
  return (
    <div className="data">
      {state.map((el) => {
        return (
          <Card
            subtractCartStateHandler={subtractCartStateHandler}
            addCartStateHandler={addCartStateHandler}
            key={el.id}
            element={{ ...el, totalCount: 0 }}
          />
        );
      })}
    </div>
  );
}
