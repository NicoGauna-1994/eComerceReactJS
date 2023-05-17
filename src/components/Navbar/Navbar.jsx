import CartWidget from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { dataBase } from "../../firebaseConfig";
import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const categoriesCollection = collection(dataBase, "categories");
    getDocs(categoriesCollection)
      .then((res) => {
        let categoriesResult = res.docs.map((category) => {
          return {
            ...category.data(),
            id: category.id,
          };
        });
        setCategories(categoriesResult);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className={styles.containerNavbar}>
        <img
          src="https://res.cloudinary.com/die4tinya/image/upload/v1680491259/tienda-ropa-tienda-ropa-perchas-tienda-boutique-moderna_1150-8886_z6dt5u.jpg"
          onClick={() => navigate("/")}
          alt="Logo de la tienda"
        />
        <div
          style={{
            display: "flex",
            gap: "30px",
            alignItems: "center",
          }}
        >
          {categories.map((category) => {
            return (
              <Link key={category.id} to={category.path}>
                {category.title}
              </Link>
            );
          })}
        </div>
        <CartWidget />
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
