import React, { useState } from "react";
import "../ItemCount/ItemCount.css";

function ItemCount({ stock, onAdd, initial }) {
  const [count, setCount] = useState(initial);

  const incrementar = () => {
    if (count < stock) {
      setCount(count + 1);
      onAdd(count);
    }
  };

  const decrementar = () => {
    if (count > initial) {
      setCount(count - 1);
    }
  };

  return (
    <div className="contenedor">
      <div className="contador">
        <button className="botones" onClick={decrementar}>
          -
        </button>
        <div className="cantidad">{count}</div>
        <button className="botones" onClick={incrementar}>
          +
        </button>
      </div>

      <button className="cart-button">Agregar al carrito</button>
    </div>
  );
}

export default ItemCount;
