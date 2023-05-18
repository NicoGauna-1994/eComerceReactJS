import { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";
import { dataBase } from "../../firebaseConfig";
import { getDoc, collection, doc } from "firebase/firestore";
import FadeLoader from "react-spinners/FadeLoader";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});

  const { agregarAlCarrito, getQuantityById } = useContext(CartContext);

  const { id } = useParams();

  useEffect(() => {
    const itemCollection = collection(dataBase, "products");
    const refDoc = doc(itemCollection, id);
    getDoc(refDoc)
      .then((res) =>
        setProduct({
          ...res.data(),
          id: res.id,
        })
      )
      .catch((err) => console.log(err));
  }, [id]);

  const onAdd = (cantidad) => {
    let data = {
      ...product,
      quantity: cantidad,
    };

    agregarAlCarrito(data);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Agregado al carrito",
      showConfirmButton: false,
      timer: 1000,
    });
  };

  let cantidadTotal = getQuantityById(product.id);

  return (
    <div>
      {!product.img ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <FadeLoader
            color="#fa8072"
            height={25}
            margin={5}
            radius={10}
            speedMultiplier={1}
            width={2}
          />
        </div>
      ) : (
        <ItemDetail
          product={product}
          onAdd={onAdd}
          cantidadTotal={cantidadTotal}
        />
      )}
    </div>
  );
};

export default ItemDetailContainer;
