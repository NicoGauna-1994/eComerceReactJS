import CartWidget from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css";
import { Outlet, Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className={styles.containerNavbar}>
        <img
          src="https://res.cloudinary.com/die4tinya/image/upload/v1680491259/tienda-ropa-tienda-ropa-perchas-tienda-boutique-moderna_1150-8886_z6dt5u.jpg"
          onClick={() => navigate("/")}
          alt="Logo de la tienda"
        />
        <ul style={{ display: "flex", listStyle: "none", gap: "30px" }}>
          <Link to="/category/camisas">Camisas</Link>
          <Link to="/category/pantalones">Pantalones</Link>
          <Link to="/">Toda la indumentaria</Link>
        </ul>
        <CartWidget />
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
