import React, { useState, useEffect } from "react";
import "../ItemCount/ItemCount.css";

function ItemCount({ stock, onAdd, initial }) {
  const [count, setCount] = useState(initial);

  const incrementar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrementar = () => {
    if (count > initial) {
      setCount(count - 1);
    }
  };

  useEffect(() => {
    onAdd(count);
  }, [count]);

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
    </div>
  );
}

export default ItemCount;
