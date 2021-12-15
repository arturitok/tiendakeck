import { useState } from "react";
import "../estilos.css";

//Defino 4 botones 
//ButtonAdd para agregar 
//ButtonSuma incrementa el contador
//ButtonResta decrementa el contador
//ButtonReset resetea el contador al valor initial que viene como prop
function ButtonAdd(props) {
  return (
    <button className="cart-button" onClick={props.onClickFunc}>
      Agregar al carrito
    </button>
  );
}

function ButtonSuma(props) {
  return (
    <button className="spin-button" onClick={props.onClickFunc}>
      +
    </button>
  );
}

function ButtonResta(props) {
  return (
    <button className="spin-button" onClick={props.onClickFunc}>
      -
    </button>
  );
}
function ButtonReset(props) {
  return (
    <button className="cart-button" onClick={props.onClickFunc}>
      Reset
    </button>
  );
}
//La funci{on que mostrará el contador
function Display(props) {
  return <label className="counter-text">{props.message}</label>;
}

/* ************************* */

//la función ItemCount pedida
const ItemCount = ({ stock, initial, onAdd }) => {
  const [counter, setCounter] = useState(1);
  function setInitial() {
    return setCounter(initial)
  }

  function incrementCounter() {
    return setCounter(counter < stock ? counter + 1 : counter);
  }
  let decrementCounter = () => setCounter(counter - 1);

  if (counter < 2) {
    decrementCounter = () => setCounter(1);
  }
  const addItem = () => {
    onAdd(counter)
  }
  return (
    <div>
      <ButtonReset onClickFunc={setInitial} />
      <ButtonSuma onClickFunc={incrementCounter} />
      <Display message={counter} />
      <ButtonResta onClickFunc={decrementCounter} />
      <ButtonAdd onClickFunc={addItem} />
    </div>
  )
}

export default ItemCount;

