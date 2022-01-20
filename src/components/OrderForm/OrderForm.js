import React, { useState } from "react";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "../OrderForm/OrderForm.css";

function OrderForm() {
  const { updateDatos, enviarDatos, orderState, clear } = useCart();
  const [ButtonVisibility, setButtonVisibility] = useState(false);
  const [confirmVisibility, setConfirmVisibility] = useState(true);

  const confirm = () => {
    if (
      orderState.name !== "" &&
      orderState.phone !== "" &&
      orderState.email !== "" &&
      orderState.email === orderState.emailConfirm
    ) {
      setButtonVisibility(true);
      setConfirmVisibility(false);
    }
  };

  return (
    <>
      <div className="input-container">
        <div className="input-data">
          <label className="label-form">Nombre</label>
          <input
            type="text"
            onChange={(event) => updateDatos(event)}
            name="name"
            className="input-form"
          />
        </div>
      </div>

      <div className="input-container">
        <div className="input-data">
          <label className="label-form">Teléfono</label>
          <input
            type="text"
            onChange={(event) => updateDatos(event)}
            name="phone"
            className="input-form"
          />
        </div>
      </div>

      <div className="input-container">
        <div className="input-data">
          <label className="label-form">Email</label>
          <input
            type="text"
            onChange={(event) => updateDatos(event)}
            name="email"
            className="input-form"
          />
        </div>
      </div>

      <div className="input-container">
        <div className="input-data">
          <label className="label-form">Confirmar email</label>
          <input
            type="text"
            onChange={(event) => updateDatos(event)}
            name="emailConfirm"
            className="input-form"
          />
        </div>
      </div>

      {confirmVisibility && (
        <button onClick={confirm} className="payment-confirm">
          Confirmar datos
        </button>
      )}

      {!ButtonVisibility && (
        <div className="campo">Tenés que completar todos los datos.</div>
      )}

      <Link to="/cart/payment">
        {ButtonVisibility && (
          <button
            onClick={clear}
            onSubmit={(event) => enviarDatos(event)}
            className="payment-confirm green"
            type="submit"
          >
            Confirmar pago
          </button>
        )}
      </Link>
    </>
  );
}

export default OrderForm;
