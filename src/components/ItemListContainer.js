import "../estilos.css";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";

const productList = [
  {
    id: 1,
    title: "Camisa Hawaiana",
    description: "Camisa con muchas flores",
    price: 100,
    pictureUrl: "http://placehold.it/350x65",
    categoria: "1",
  },
  {
    id: 2,
    title: "Camisa Alemana",
    description: "Camisa con pocos colores",
    price: 200,
    pictureUrl: "http://placehold.it/350x65",
    categoria: "2",
  },
];

const ItemListContainer = ({ greeting }) => {
  let [lista, setLista] = useState([]);

  useEffect(() => {
    const promesa = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productList);
      }, 2000);
    });
    promesa
      .then((productos) => {
        console.log("Todo OK");
        setLista(productos);
        console.log(productos);
      })
      .catch(() => {
        console.log("Error");
      });
  }, []);

  return (
    <div>
      <h1 className="product-list">{greeting}</h1>
      <ItemList lista={lista} />
    </div>
  );
};

export default ItemListContainer;
