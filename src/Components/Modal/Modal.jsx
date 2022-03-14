import "./Modal.css";
import ModalProduct from "./ModalProduct";

export default function Modal({ cartState }) {
  return (
    <div className="myModal">
      {cartState.map((el) => (
        <ModalProduct el={el} />
      ))}
    </div>
  );
}
