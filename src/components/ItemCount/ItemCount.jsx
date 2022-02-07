import React, { useState, useEffect } from "react"
import "../ItemCount/ItemCount.css"

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial)

  const incrementar = () => {
    if (count < stock) {
      setCount(count + 1)
    }
  }

  const decrementar = () => {
    if (count > initial) {
      setCount(count - 1)
    }
  }

  useEffect(() => {
    onAdd(count)
  })

  return (
    <div className="counter-container">
      <div className="counter">
        <button className="counter-buttons" onClick={decrementar}>
          -
        </button>
        <div className="counter-quantity">{count}</div>
        <button className="counter-buttons" onClick={incrementar}>
          +
        </button>
      </div>
    </div>
  )
}

export default ItemCount
