import React from "react"
import "../Cart/Cart.css"
import { Link } from "react-router-dom"
import { useCart } from "../../context/CartContext"
import OrderForm from "../OrderForm/OrderForm"

function Carrito() {
  const { removeItem, products, clear, totalItems, totalPrice } = useCart()

  return (
    <div className="product-block">
      {products.length > 0 ? 
        <>
          {products.map((elem) => 
            <div key={elem.id}>
              <div className="product-container"  >

                <h1>
                  {elem.title} - {elem.quantity} unidades
                </h1>
                <div className="total-container">
                  <h1>${elem.price * elem.quantity}</h1>
                  <button
                    className="del-button"
                    onClick={() => removeItem(elem)}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          )}
          <h1>
            Subtotal: ${totalPrice()} ({totalItems()} unidades)
          </h1>
          <button className="empty" onClick={() => clear(products.elem)}>
            Vaciar carrito
          </button>
          <div className="campo">Ingresá tus datos para efectuar el pago.</div>

          <div className="buy-container">
            <OrderForm />
          </div>
        </>
       : 
        <>
          <h3 className="no-items">No hay productos en tu carrito.</h3>
          <Link to="/">
            <button className="back-shop">Volver a la tienda</button>
          </Link>
        </>
      }
    </div>
  )
}

export default Carrito
