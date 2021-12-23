import React from "react";
import "../ItemDetail/ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";

function ItemDetail({ title, price, pictureUrl, description }) {
  return (
    <div className="div">
      <div className="container-detail">
        <div
          style={{ backgroundImage: `url(${pictureUrl})` }}
          className="img-detail"
        ></div>
        <div className="informacion-detail">
          <div className="title-detail">{title}</div>
          <div className="description-detail">{description}</div>
          <div className="price-detail">{price}</div>
          <ItemCount
            stock={10}
            initial={1}
            onAdd={(count) => {
              console.log("¡Agregado! artículos: " + count);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
