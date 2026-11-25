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
    { id: "36ebaad0-4ecc-4edf-af03-28c38842333b", name: "Smartwatch", price: 99 },
    { id: "040bd15b-4fc6-4dfd-aa3a-71b917323448", name: "Macbook Pro", price: 49.90 },
    { id: "64bd8758-216b-4f1e-81d7-a7fc2bd90a4e", name: "PRS SE Custom 24", price: 60 },
  ]

  return (
    <>
      <h2>Shopping Cart</h2>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name} - R$ {product.price.toFixed(2)}</h3>
        </div>
      ))}
    </>
  )
}