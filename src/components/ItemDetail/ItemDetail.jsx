import { Link } from "react-router-dom";
import CounterContainer from "../Counter/CounterContainer";

const ItemDetail = ({ product, onAdd, cantidadTotal }) => {
  return (
    <div>
      <img src={product.img} alt="imagen del producto" />
      <h1>{product.title}</h1>
      <h2>{product.description}</h2>
      {product.stock > 0 ? (
        <CounterContainer
          stock={product.stock}
          onAdd={onAdd}
          initial={cantidadTotal}
        />
      ) : (
        <h3>No hay stock</h3>
      )}

      <Link to="/">Volver al home</Link>
    </div>
  );
};

export default ItemDetail;
