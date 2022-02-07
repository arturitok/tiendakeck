import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"
import NavBar from "./components/NavBar/NavBar"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import ItemList from "./components/ItemList/ItemList"
import Cart from "./components/Cart/Cart"
import { CartProvider } from "./context/CartContext"
import Payment from "./components/Payment/Payment"

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemList />} />
          <Route path="/category/:categoryId" element={<ItemList />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/cart/payment" element={<Payment />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
