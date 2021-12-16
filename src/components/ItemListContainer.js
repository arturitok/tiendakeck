import "../estilos.css";
import { useState } from "react";
import ItemCount from "./ItemCount";

const ItemListContainer = ({ greeting }) => {
  const [cantidad, setQty] =useState(0)
  const onAdd = (cantidad) => {
    console.log(`Agregando ${cantidad} artículos al carrito`);
    setQty(cantidad)
  };
  return (
  <div> 
    <h2 className="product-list">{greeting}</h2>
    <p>Elegiste: {cantidad} unidades</p>
    <ItemCount  stock={5} initial={1} onAdd={onAdd}/>
  </div>);
};

export default ItemListContainer;
