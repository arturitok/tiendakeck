import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "../Payment/Payment.css";

function Payment() {
  const { orderState, clear } = useCart();

  return (
    <div className="payment">
      <div className="payment-container">
        <div className="pago-realizado">
          El pago se realizó correctamente. Gracias por la compra
        </div>
        <div className="date-id">
          Código de la operacion: {orderState.IDOrder}
        </div>
        <div className="date-id">Fecha: {orderState.date}</div>
        <div className="order-detail">Detalle de la compra</div>
        <div>
          {orderState.items[0].map((element) => (
            <>
              <div className="order-detail-child">
                {element.title} - ${element.price} | {element.quantity}{" "}
                Artículos
              </div>
            </>
          ))}
        </div>
        <div className="order-detail-child subtotal">
          Total: ${orderState.totalPrice} | {orderState.totalItems} Unidades
        </div>

        <div className="order-detail">Tus datos registrados</div>
        <div className="buyer">{orderState.name}</div>
        <div className="buyer">{orderState.phone}</div>
        <div className="buyer">{orderState.email}</div>
      </div>
      <Link to="/">
        <button onClick={clear} className="back-shop margin-top">
          Seguir comprando
        </button>
      </Link>
    </div>
  );
}

export default Payment;
