import React from "react";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer'
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting="Acá  podrás elegir los productos" />
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
