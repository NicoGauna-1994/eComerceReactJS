import { useState } from "react";

const Form = () => {
  const [userData, setUserData] = useState({
    nombre: "",
    apellido: "",
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const envioDeFormulario = (evento) => {
    evento.preventDefault();
  };

  return (
    <div>
      <h1>éste es el Form</h1>
      <form onSubmit={envioDeFormulario}>
        <input
          type="text"
          placeholder="ingresar nombre"
          name="nombre"
          value={userData.nombre}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="ingresar apellido"
          name="apellido"
          value={userData.apellido}
          onChange={handleChange}
        />

        <button type="submit">Enviar</button>
        <button type="button">Cancelar</button>
      </form>
    </div>
  );
};

export default Form;
