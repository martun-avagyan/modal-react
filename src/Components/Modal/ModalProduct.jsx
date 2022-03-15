import React from "react";
import plus from "../../Assets/plus-solid.svg";
import minus from "../../Assets/minus-solid.svg";
import trash from "../../Assets/trash.svg";
import "./ModalProduct.css";

const ModalProduct = ({ el, addModalCount, subModalCount }) => {
  console.log(el);

  return (
    <div className="modal-content-wrapper">
      <div>{el.name}</div>
      <img src={el.icon} alt="Coin Icon"></img>
      <div> Total Price: {el.price * el.totalCount}</div>
      <div>{el.totalCount}</div>
      <div className="modal-btns">
        <img
          src={plus}
          onClick={() => addModalCount(el.id)}
          className="my-btn"
          alt="Add"
        />
        <img
          src={minus}
          onClick={() => subModalCount(el.id)}
          className="my-btn"
          alt="Subtract"
        />
        <img src={trash} className="my-btn" alt="Delete" />
      </div>
    </div>
  );
};

export default ModalProduct;
