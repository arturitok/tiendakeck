import Item from "./Item";

const ItemList = ({lista}) => {
    return ( 
        <div id="item-list">
            {lista.map(item=>{
                return (
                    <Item key={item.id} item={item}/>
                )
            })}
        </div>
     );
}

export default ItemList;