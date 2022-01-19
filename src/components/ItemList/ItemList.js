import React, { useState , useEffect} from "react";
import { Firebase } from "../../firebase/data";
import Item from "../Item/Item";
import "../ItemList/ItemList.css";


function ItemList() {

    const [items, setItems] = useState([]);

    useEffect(() => {
        Firebase.getAll('productos').then(docs => {
            const arr = [];
            docs.forEach(item => {
            const data = item.data();
          
            arr.push(
                <Item
                key={item.id}
                id={item.id}
                title={data.title}
                description={data.description}
                price={data.price}
                pictureUrl={data.pictureUrl}
                />
            );
        });
        setItems(arr);
        });
    }, []);

    return(
        <>
            <div className="items-container">
                {items}
            </div>
        </>
    )
}

export default ItemList
