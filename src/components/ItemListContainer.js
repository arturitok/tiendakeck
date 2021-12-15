import "../estilos.css";
import ItemCount from "./ItemCount";
const ItemListContainer = ({ greeting }) => {
  const onAdd = (cantidad) => {
    console.log(`Agregando ${cantidad} artículos al carrito`);
  };
  return (
  <div> 
    <h2 className="product-list">{greeting}</h2>
    <ItemCount  stock={5} initial={1} onAdd={onAdd}/>
  </div>);
};

export default ItemListContainer;
