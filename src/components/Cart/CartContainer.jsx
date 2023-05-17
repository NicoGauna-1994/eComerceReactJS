import React, { useContext } from "react";
import Cart from "./Cart";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CartContainer = () => {
  const { cart, clearCart, deleteProductById, getTotalPrice } =
    useContext(CartContext);

  let total = getTotalPrice();

  const navigate = useNavigate();

  const clearCartWithAlert = () => {
    Swal.fire({
      title: "¿Está seguro de querer vaciar el carrito?",
      text: "no podra revertir esta accion",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, quiero vaciarlo",
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Listo!", "Carrito eliminado", "success");
      }
    });
  };

  return (
    <div>
      <Cart
        cart={cart}
        deleteProductById={deleteProductById}
        total={total}
        clearCartWithAlert={clearCartWithAlert}
        navigate={navigate}
      />
    </div>
  );
};

export default CartContainer;
