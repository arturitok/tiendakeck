import { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = (props) => {
  const [products, setProducts] = useState([]);

  const addItem = (datos, cantidad) => {
    if (isInCart(datos)) {
      products.map((prod) => {
        if (prod.id === datos.id) {
          return (prod.quantity += cantidad);
        }
      });
    } else {
      setProducts((state) => {
        return [...state, { ...datos, quantity: cantidad }];
      });
    }
  };

  const removeItem = (product) => {
    const productosFiltrados = products.filter((elem) => elem !== product);
    setProducts(productosFiltrados);
  };

  function clear() {
    setProducts([]);
  }

  const isInCart = (datoBuscado) => {
    if (products?.find((elemento) => elemento.id === datoBuscado.id)) {
      return true;
    }
  };

  const totalItems = () =>
    products.reduce((acumulador, items) => acumulador + items.quantity, 0);
  const totalPrice = () =>
    products.reduce(
      (acumulador, items) => acumulador + items.price * items.quantity,
      0
    );
  const newOrder = {
    items: [products],
    date: new Date().toString(),
    totalItems: totalItems(),
    totalPrice: totalPrice(),
    IDOrder: uuidv4(),
  };

  const [orderState, setOrderState] = useState({
    ...newOrder,
    name: "",
    email: "",
    emailConfirm: "",
    phone: "",
  });

  const updateDatos = (event) => {
    event.preventDefault();
    setOrderState({
      ...orderState,
      ...newOrder,
      [event.target.name]: event.target.value,
    });
  };

  const enviarDatos = (event) => {
    event.preventDefault();
  };

  function clear() {
    setProducts([]);
    setOrderState({
      ...newOrder,
      name: "",
      email: "",
      emailConfirm: "",
      phone: "",
    });
  }

  return (
    <CartContext.Provider
      value={{
        addItem,
        removeItem,
        clear,
        products,
        totalItems,
        totalPrice,
        updateDatos,
        enviarDatos,
        orderState,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
