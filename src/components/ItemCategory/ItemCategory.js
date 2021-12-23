import React from "react";
import { Link } from "react-router-dom";
import "../ItemCategory/ItemCategory.css";

function ItemCategory({ title, price, pictureUrl, id }) {
  return (
    <div className="items-category-container">
      <div className="item-category">
        <div
          style={{ backgroundImage: `url(${pictureUrl})` }}
          className="img-category margin"
        ></div>
        <div className="title-category margin">{title}</div>
        <div className="price-category margin">{price}</div>
        <div className="contenedor-botones-category">
          <Link to={`/item/${id}`}>
            <button className="comprar">Comprar</button>
          </Link>
          <Link to={`/item/${id}`}>
            <button className="ver-detalle">Detalle</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ItemCategory;
