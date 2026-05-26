import '../styles/product.css'

import { useContext } from 'react'

import { CartContext } from '../CartContext'

function ProductCard({ product }) {

  const { addToCart } =
  useContext(CartContext)

  return (

    <div className='product-card'>

      <img
        src={product.image}
        alt=''
      />

      <div className='product-content'>

        <h2>{product.name}</h2>

        <p>₹ {product.price}</p>

        <button
          onClick={()=>
            addToCart(product)
          }
        >

          Add To Cart

        </button>

      </div>

    </div>

  )

}

export default ProductCard