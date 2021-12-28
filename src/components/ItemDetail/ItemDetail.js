import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../ItemDetail/ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";

function ItemDetail({ title, price, pictureUrl, description }) {
  const [itemCountVisible, setItemCountVisible] = useState(true);
  const [buyButtonVisibility, setBuyButtonVisibility] = useState(true);
  const [itemsCount, setItemsCount] = useState(0);

  const onAdd = (count) => {
    setItemsCount(count);
  };

  const onAddToCart = () => {
    setItemCountVisible(false);
    setBuyButtonVisibility(false);
  };

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

          {itemCountVisible && (
            <ItemCount stock={10} initial={0} onAdd={onAdd} />
          )}
          {buyButtonVisibility && (
            <button onClick={onAddToCart} className="cart-button">
              Agregar al carrito
            </button>
          )}
          {!buyButtonVisibility && (
            <div className="contenedor-terminar-compra">
              <h1>x{itemsCount} Unidades</h1>
              <Link to="/cart">
                <button className="buy-button">Terminar compra</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
