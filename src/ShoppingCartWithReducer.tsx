import { useReducer } from "react"

const initialState = {
  items: [],
  totalAmount: 0,
  totalItems: 0
}

const reducer = (state, action) => {
  switch(action.type) {
    default:
      return state;    
  }

}

export const ShoppingCartWithReducer = () => {

  const [state, dispatch] = useReducer(reducer, initialState) 

  const products = [
    { id: 1, name: "Smartwatch", price: 99 },
    { id: 2, name: "Macbook Pro", price: 49.90 },
    { id: 3, name: "PRS SE Custom 24", price: 60 },
  ]

  return (
    <>
      <h2>Shopping Cart</h2>
      {products.map((product) => (
        <h3>{product.name} - R$ {product.price.toFixed(2)}</h3>
      ))}
    </>
  )
}