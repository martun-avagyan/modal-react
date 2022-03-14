import bitcoin from "../../Assets/bitcoin-brands.svg";
import "./MyHeader.css";
import cart from "../../Assets/cart-shopping-solid.svg";

const MyHeader = ({ toggleModal }) => {
  return (
    <nav className="my-navbar">
      <div className="imgLogo">
        <img alt="Dummy" className="logoImg" src={bitcoin} />
      </div>
      <img className="imgLogo" onClick={toggleModal} src={cart} alt="Cart" />
    </nav>
  );
};

export default MyHeader;
