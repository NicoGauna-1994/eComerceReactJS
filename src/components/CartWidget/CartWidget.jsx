import { BsCart4 } from "react-icons/bs";

const CartWidget = () => {
  return (
    <div>
      <BsCart4 size={30} />
      <span>0</span>
    </div>
  );
};

export default CartWidget;
