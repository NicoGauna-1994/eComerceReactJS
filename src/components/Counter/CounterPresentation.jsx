import { Button } from "@mui/material";
const CounterPresentation = ({ sumar, restar, counter, onAdd }) => {
  return (
    <div style={{ display: "flex", gap: "30px", marginBottom: "20px" }}>
      <Button onClick={sumar} variant="contained">
        +
      </Button>
      <h3>{counter}</h3>
      <Button onClick={restar} variant="contained">
        -
      </Button>
      <Button onClick={() => onAdd(counter)} variant="outlined">
        Agregar al carrito
      </Button>
    </div>
  );
};

export default CounterPresentation;
