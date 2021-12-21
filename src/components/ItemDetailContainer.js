import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";

const productoInicial = {
  id: 2,
  title: "Camisa Búlgara",
  description: "Camisa muy divertida",
  price: 200,
  pictureUrl: "http://placehold.it/500x300",
  category: "2",
  stock: 10,
};

const ItemDetailContainer = () => {
  let [producto, getItem] = useState([]);

  useEffect(() => {
    const promesa = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productoInicial);
      }, 2000);
    });
    promesa
      .then((response) => {
        console.log("Todo OK");
        getItem(response);
      })
      .catch(() => {
        console.log("Error");
      });
  }, []);
  return (
    <div>
      <hr></hr>
      <ItemDetail producto={producto} />
    </div>
  );
};

export default ItemDetailContainer;
