import "./Modal.css";
import ModalProduct from "./ModalProduct";

export default function Modal({
  cartState,
  addModalCount,
  subModalCount,
  addCartStateHandler,
  subtractCartStateHandler,
}) {
  return (
    <div className="myModal">
      {cartState.map((el) => (
        <ModalProduct
          key={el.id}
          addModalCount={addModalCount}
          subModalCount={subModalCount}
          el={el}
        />
      ))}
    </div>
  );
}
