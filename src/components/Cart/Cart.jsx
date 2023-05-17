import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Cart = ({
  cart,
  deleteProductById,
  total,
  clearCartWithAlert,
  navigate,
}) => {
  return (
    <div>
      {cart.map((product) => {
        return (
          <div key={product.id} style={{ border: "2px solid black" }}>
            <h3>{product.title}</h3>
            <h4>{product.price}</h4>
            <h4>{product.quantity}</h4>
            <Button
              variant="text"
              onClick={() => deleteProductById(product.id)}
            >
              Eliminar
            </Button>
          </div>
        );
      })}

      {cart.length === 0 ? (
        <h1>El carrito se encuentra vacio</h1>
      ) : (
        <h1>El total del carrito es {total}</h1>
      )}

      {cart.length > 0 ? (
        <Button variant="outlined" onClick={clearCartWithAlert}>
          Vaciar carrito
        </Button>
      ) : (
        <Link to="/">
          <Button variant="outlined">Agregar productos al carrito</Button>
        </Link>
      )}

      {cart.length > 0 && (
        <Button variant="contained" onClick={() => navigate("/checkout")}>
          Confirmar compra
        </Button>
      )}
    </div>
  );
};

export default Cart;
