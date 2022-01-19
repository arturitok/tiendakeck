import ItemCategory from "../ItemCategory/ItemCategory";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Firebase } from "../../firebase/data";

function ItemCategoryList() {
  const [productState, setProductState] = useState();
  const { categoryId } = useParams();
  useEffect(() => {
    Firebase.getAll("productos", {
      field: "category",
      condition: "==",
      value: categoryId,
    }).then((docs) => {
      const arr = [];
      docs.forEach((item) => {
        const data = item.data();
        arr.push(
          <ItemCategory
            key={item.id}
            id={item.id}
            title={data.title}
            price={data.price}
            description={data.description}
            pictureUrl={data.pictureUrl}
          />
        );
      });
      setProductState(arr);
    });
  }, [categoryId]);

  return <div className="items-container">{productState}</div>;
}

export default ItemCategoryList;
