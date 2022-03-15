import "./Modal.css";
import ModalProduct from "./ModalProduct";

export default function Modal({
  erase,
  cartState,
  addModalCount,
  subModalCount,
}) {
  return (
    <div className="myModal">
      {cartState.map((el) => (
        <ModalProduct
          erase={erase}
          key={el.id}
          addModalCount={addModalCount}
          subModalCount={subModalCount}
          el={el}
        />
      ))}
    </div>
  );
}
