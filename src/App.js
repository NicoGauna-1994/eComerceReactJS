import "./App.css";
import ItemList from "./components/ItemList/ItemList";
import Navbar from "./components/Navbar/Navbar";

function App() {
  let saludo = "Primer Pre-Entrega: M. Nicolás Gauna / Comisión 39650";

  return (
    <div className="App">
      <Navbar />
      <ItemList saludo={saludo} />
    </div>
  );
}

export default App;
