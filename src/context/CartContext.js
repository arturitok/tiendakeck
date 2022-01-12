import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = (props) => {
  const [products, setProducts] = useState([]);

  const addItem = (data, cantidad) => {
    if (isInCart(data)) {
      products.map((prod) => {
        if (prod.id === data.id) {
          return (prod.quantity += cantidad);
        }
      });
    } else {
      setProducts((state) => {
        return [...state, { ...data, quantity: cantidad }];
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
    products.reduce((acumulador, items) => acumulador + items.price * items.quantity, 0);

  return (
    <CartContext.Provider
      value={{ addItem, removeItem, clear, products, totalItems, totalPrice }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
