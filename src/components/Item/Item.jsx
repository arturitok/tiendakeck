import React from "react"
import "../Item/Item.css"
import { Link } from "react-router-dom"

function Item({ title, price, pictureUrl, id }) {
  return (
    <div className="items-category-container">
      <div className="item">
        <div
          style={{ backgroundImage: `url(${pictureUrl})` }}
          className="img margin"
        ></div>
        <div className="title margin">{title}</div>
        <div className="price margin">${price}</div>
        <div className="button-container">
          <Link to={`/item/${id}`}>
            <button className="buy-button">Comprar</button>
          </Link>
          <Link to={`/item/${id}`}>
            <button className="detail-view">Detalles</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Item
