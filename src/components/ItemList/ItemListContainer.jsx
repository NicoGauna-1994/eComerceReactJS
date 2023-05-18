import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { dataBase } from "../../firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore";
import FadeLoader from "react-spinners/FadeLoader";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    let consulta;
    const itemCollection = collection(dataBase, "products");

    if (categoryName) {
      const itemsCollectionFiltered = query(
        itemCollection,
        where("category", "==", categoryName)
      );
      consulta = itemsCollectionFiltered;
    } else {
      consulta = itemCollection;
    }

    getDocs(consulta)
      .then((res) => {
        const products = res.docs.map((product) => {
          return {
            ...product.data(),
            id: product.id,
          };
        });
        setItems(products);
      })
      .catch((err) => console.log(err));
  }, [categoryName]);

  return (
    <div>
      {items.length === 0 ? (
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
        <ItemList items={items} />
      )}
    </div>
  );
};

export default ItemListContainer;
