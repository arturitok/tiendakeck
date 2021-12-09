import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting="Acá  podrás elegir los productos" />
    </div>
  );
}

export default App;
