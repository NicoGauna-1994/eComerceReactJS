import FormCheckout from "./FormCheckout";
import { useFormik } from "formik";
import { useContext, useState } from "react";
import * as Yup from "yup";
import { CartContext } from "../../context/CartContext";
import { dataBase } from "../../firebaseConfig";
import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";

const FormCheckoutContainer = () => {
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);

  const [orderId, SetOrderId] = useState(null);

  const checkoutFn = (data) => {
    let total = getTotalPrice();

    let dataOrder = {
      buyer: data,
      items: cart,
      total: total,
      date: serverTimestamp(),
    };

    const ordersCollection = collection(dataBase, "orders");
    addDoc(ordersCollection, dataOrder).then((res) => SetOrderId(res.id));

    cart.map((product) =>
      updateDoc(doc(dataBase, "products", product.id), {
        stock: product.stock - product.quantity,
      })
    );
    clearCart();
  };

  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      nombre: "",
      email: "",
      telefono: "",
    },
    onSubmit: checkoutFn,

    validationSchema: Yup.object().shape({
      nombre: Yup.string()
        .required("Este campo es obligatorio")
        .min(4, "El nombre debe tener mas de 5 caracteres"),
      email: Yup.string()
        .email("Este no es un email valido")
        .required("Este campo es obligatorio"),
      telefono: Yup.string()
        .required("Este campo es obligatorio")
        .min(4, "El telefono debe tener un minimo de 4 numeros"),
    }),
    validateOnChange: false,
  });

  return (
    <div>
      {cart.length === 0 ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h1>Gracias por su compra!</h1>
        </div>
      ) : (
        <FormCheckout
          errors={errors}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      )}
    </div>

    /*<div>
      
    </div>*/
  );
};

export default FormCheckoutContainer;
