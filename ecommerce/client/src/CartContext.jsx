import { createContext, useState } from 'react'

export const CartContext = createContext()

function CartProvider({ children }) {

  const [cart,setCart] = useState([])

  const addToCart = (product)=>{

    setCart((prevCart)=>([
      ...prevCart,
      product
    ]))

  }

  const removeFromCart = (index)=>{

    const updatedCart = [...cart]

    updatedCart.splice(index,1)

    setCart(updatedCart)

  }

  return (

    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
      }}
    >

      {children}

    </CartContext.Provider>

  )

}

export default CartProvider