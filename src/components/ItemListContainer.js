import "../estilos.css";
import { useState, useEffect } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

const productList = [
  {
    id: 1,
    title: "Camisa Hawaiana",
    description: "Camisa con muchas flores",
    price: 100,
    pictureUrl: "http://placehold.it/500x300",
    categoria: "1",
  },
  {
    id: 2,
    title: "Camisa Alemana",
    description: "Camisa con pocos colores",
    price: 200,
    pictureUrl: "http://placehold.it/500x300",
    categoria: "2",
  },
];

const ItemListContainer = ({ greeting }) => {
  const [cantidad, setQty] = useState(0);

  let [lista, setLista] = useState([]);

  useEffect(() => {
    const promesa = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productList)
      }, 2000)
    })
    promesa
    .then ((productos)=>{
      console.log ("Todo OK")
      setLista(productos)
      console.log(productos)
    })
    .catch (()=>{
      console.log ("Error")
    })
    
  }, []);
    

  const onAdd = (cantidad) => {
    console.log(`Agregando ${cantidad} artículos al carrito`);
    setQty(cantidad);
  };

  return (
    <div>
     <h2 className="product-list">{greeting}</h2>
      <p>Elegiste: {cantidad} unidades</p>
      <ItemList lista={lista} />
      <ItemCount stock={5} initial={1} onAdd={onAdd} />
    </div>
  );
};

export default ItemListContainer;
