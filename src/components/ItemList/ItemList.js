import React, { useState, useEffect } from "react";
import Item from "../Item/Item";

import "../ItemList/ItemList.css";

const productos = [
  {
    id: "1",
    title: "Body Animalitos",
    description:
      "Body en tela de algodón y bambú. Botones pañaleros para mayor comodidad",
    price: "$1200",
    category: "ropa",
    stock: "10",
    pictureUrl: "https://placekitten.com/200/300",
  },
  {
    id: "2",
    title: "Remera Coatí",
    description:
      "Remera super fresca de morley de algodón con estampas variadas",
    price: "$950",
    category: "juegos",
    stock: "10",
    pictureUrl: "https://placedog.net/200",
  },
  {
    id: "3",
    title: "Pantalón Yaguá",
    description:
      "Pantalón tipo cargo de tela tipo paper, botamangas desmontables. ",
    price: "$495",
    category: "ropa",
    stock: "10",
    pictureUrl: "https://placekitten.com/200/300",
  },
  {
    id: "4",
    title: "Camisa Yaguareté",
    description: "Camisa mangas largas, bolsillos al frente tipo guayabera",
    price: "$1495",
    category: "juegos",
    stock: "10",
    pictureUrl: "https://placedog.net/200",
  },
  {
    id: "5",
    title: "Short Pitogué",
    description: "Short de algodón y lycra, elastizado y con protección UV",
    price: "$495",
    category: "ropa",
    stock: "10",
    pictureUrl: "https://placekitten.com/200/300",
  },
  {
    id: "6",
    title: "Medias Cabureí",
    description: "Medias de media caña, en algodón y spandex.",
    price: "$695",
    category: "juegos",
    stock: "10",
    pictureUrl: "https://placedog.net/200",
  },
  {
    id: "7",
    title: "Calza Ñandú",
    description:
      "Calza tipo cocota. Largo ciclista con refuerzo en entrepierna",
    price: "$950",
    category: "ropa",
    stock: "10",
    pictureUrl: "https://placekitten.com/200/300",
  },
  {
    id: "8",
    title: "Arrastre Tatú",
    description:
      "Juguete de arrastre en madera recuperada. Con forma de tatú y articulaciones.",
    price: "$705",
    category: "juegos",
    stock: "10",
    pictureUrl: "https://placedog.net/200",
  },
  {
    id: "9",
    title: "Yoyo Yarará",
    description:
      "Yoyo de madera de yacaratiá. Diseños de animales autóctonos en el cuerpo.",
    price: "$830",
    category: "ropa",
    stock: "10",
    pictureUrl: "https://placekitten.com/200/300",
  },
  {
    id: "10",
    title: "Rompecabezas Moconá",
    description: "Rompecabezas de 200 piezas con motivos selváticos.",
    price: "$1245",
    category: "juegos",
    stock: "10",
    pictureUrl: "https://placedog.net/200",
  },
  {
    id: "11",
    title: "Caminador Aguará",
    description: "Juguete de apoyo para iniciar los primeros pasos",
    price: "$1950",
    category: "ropa",
    stock: "10",
    pictureUrl: "https://placekitten.com/200/300",
  },
  {
    id: "12",
    title: "Autito Cachapé",
    description: "Autíto de empuje, réplica de Rastrojero año 78.",
    price: "$1495",
    category: "juegos",
    stock: "10",
    pictureUrl: "https://placedog.net/200",
  },
];

function ItemList() {
  const catalogoProductos = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(
          productos.map((productos) => (
            <Item
              id={productos.id}
              key={productos.id}
              title={productos.title}
              price={productos.price}
              pictureUrl={productos.pictureUrl}
            />
          ))
        );
      }, 2000);
    });
  };

  useEffect(catalogoProductos, []);

  const [itemsState, setItemsState] = useState();

  catalogoProductos().then((result) => setItemsState(result));

  return (
    <>
      <div className="items-container">{itemsState}</div>
    </>
  );
}

export default ItemList;