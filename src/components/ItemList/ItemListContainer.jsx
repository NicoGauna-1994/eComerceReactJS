import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { products } from "../ProductsMock";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    const productFiltered = products.filter(
      (prod) => prod.category === categoryName
    );
    const tarea = new Promise((resolve, reject) => {
      resolve(categoryName ? productFiltered : products);
    });

    tarea
      .then((res) => setItems(res))
      .catch((error) => console.log("catch: ", error));
  }, [categoryName]);

  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
