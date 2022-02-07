import React from "react"
import { Link } from "react-router-dom"
import { useCart } from "../../context/CartContext"
import "../Payment/Payment.css"

function Payment() {
  const { orderState, clear } = useCart()
 
  return (
    <div className="payment">
      <div className="payment-container">
        <div className="payment-made">
          El pago se realizó correctamente. Gracias por tu compra
        </div>
        <div className="date-id">
          Código de seguimiento: {orderState.IDOrder}
        </div>
        <div className="date-id">Fecha: {orderState.date}</div>
        <div className="order-detail">Detalle de la compra</div>
        <div>
          {orderState.items[0].map((element) => (
           
              <div className="order-detail-child" key={element.id}>
                {element.title} - ${element.price} | {element.quantity}{" "}
                Unidades
           
            </div>
          ))}
        </div>
        <div className="order-detail-child subtotal">
          Total: ${orderState.totalPrice} | {orderState.totalItems} Unidades
        </div>
        <div className="order-detail">Tus datos registrados</div>
        <div className="buyer">Nombre  : {orderState.name}</div>
        <div className="buyer">Telefono: {orderState.phone}</div>
        <div className="buyer">e-mail  :{orderState.email}</div>
      </div>
      <Link to="/">
        <button onClick={clear} className="back-shop margin-top">
          Seguir comprando
        </button>
      </Link>
    </div>
  )
}

export default Payment
