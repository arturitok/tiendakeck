import Item from "../Item/Item"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router"
import { db } from "../../firebase/config"
import { getDocs, query, collection, where } from "firebase/firestore"
import "./ItemList.css"

function ItemList() {
  const [productState, setProductState] = useState()
  const { categoryId } = useParams()

  useEffect(() => {
    const productosCollection = collection(db, "productos")
    let consulta = ""
    if (categoryId) {
      consulta = query(
        productosCollection,
        where("category", "==", categoryId),
        where("stock", ">", 0)
      )
    } else {
      consulta = query(productosCollection, where("stock", ">", 0))
    }
      getDocs(consulta).then((docs) => {
      const arr = []
      docs.forEach((item) => {
        const data = item.data()
        arr.push(
          <Item
            key={item.id}
            id={item.id}
            title={data.title}
            price={data.price}
            description={data.description}
            pictureUrl={data.pictureUrl}
          />
        )
      })
      setProductState(arr)
    })
  }, [categoryId])

  return <div className="items-container">{productState}</div>
}

export default ItemList

