import { createContext, useContext, useState } from "react"
import { v4 as uuidv4 } from "uuid"

const CartContext = createContext()

export const useCart = () => useContext(CartContext)

export const CartProvider = (props) => {
  const [products, setProducts] = useState([])

  const addItem = (datos, cantidad) => {
    if (isInCart(datos)) {
      const productsCopy = [...products]
      let found = productsCopy.find((p) => p.id === datos.id)
      found.quantity += cantidad
      setProducts(productsCopy)
    } else {
      setProducts((state) => {
        return [...state, { ...datos, quantity: cantidad }]
      })
    }
  }

  const removeItem = (product) => {
    const productosFiltrados = products.filter((elem) => elem !== product)
    setProducts(productosFiltrados)
  }

  const isInCart = (datoBuscado) => {
    if (products?.find((elemento) => elemento.id === datoBuscado.id)) {
      return true
    }
  }

  const totalItems = () => {
    let sum = 0
    products.forEach((item) => {
      sum += item.quantity
    })
    return sum
  }

  const totalPrice = () => {
    let sum = 0
    products.forEach((item) => {
      sum += item.quantity * item.price
    })
    return sum
  }
  
  const newOrder = {
    items: [products],
    date: new Date().toString(),
    totalItems: totalItems(),
    totalPrice: totalPrice(),
    IDOrder: uuidv4(),
  }

  const [orderState, setOrderState] = useState({
    ...newOrder,
    name: "",
    email: "",
    emailConfirm: "",
    phone: "",
  })

  const updateDatos = (event) => {
    event.preventDefault()
    setOrderState({
      ...orderState,
      ...newOrder,
      [event.target.name]: event.target.value,
      
    })
  }

  const enviarDatos = (event) => {
    event.preventDefault()
  }

  function clear() {
    setProducts([])
    setOrderState({
      ...newOrder,
      name: "",
      email: "",
      emailConfirm: "",
      phone: "",
    })
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
  )
}
