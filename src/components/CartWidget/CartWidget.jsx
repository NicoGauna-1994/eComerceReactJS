import { useContext } from "react";
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  return (
    <Link to="/cart">
      <div>
        <span>{cart.length}</span>
        <BsCart4 size={30} />
      </div>
    </Link>
  );
};

export default CartWidget;
