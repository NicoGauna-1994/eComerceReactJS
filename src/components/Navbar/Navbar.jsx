import CartWidget from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.containerNavbar}>
      <img
        src="https://res.cloudinary.com/die4tinya/image/upload/v1680491259/tienda-ropa-tienda-ropa-perchas-tienda-boutique-moderna_1150-8886_z6dt5u.jpg"
        alt="Logo de la tienda"
      />
      <ul style={{ display: "flex", listStyle: "none", gap: "30px" }}>
        <a href="">Remeras</a>
        <a href="">Camisas</a>
        <a href="">Pantalones</a>
      </ul>
      <CartWidget />
    </div>
  );
};

export default Navbar;
