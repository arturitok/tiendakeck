import { useState } from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({ producto }) => {
  const [cantidad, setQty] = useState(0);

  const onAdd = (cantidad) => {
    console.log(`Agregando ${cantidad} artículos al carrito`);

    setQty(cantidad);
  };

  return (
    <div>
      <h1>Detalle de producto</h1>
      <img src={producto.pictureUrl} alt="thumbnail" />
      <p>Codigo: {producto.id}</p>
      <p>Nombre: {producto.title}</p>
      <p>Descricpión: {producto.description} </p>
      <p>Precio: ${producto.price} </p>
      <p>Unidades Disponibles: {producto.stock}</p>
      <ItemCount stock={producto.stock} initial={1} onAdd={onAdd} />
      <p>Elegiste: {cantidad} unidades</p>
    </div>
  );
};

export default ItemDetail;
