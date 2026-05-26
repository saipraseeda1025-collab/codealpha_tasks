import { useContext } from 'react'

import { CartContext } from '../CartContext'

import Navbar from '../components/Navbar'

import '../styles/cart.css'

function Cart() {

  const { cart, removeFromCart } =
  useContext(CartContext)

  const totalPrice = cart.reduce(

    (total,item)=> total + item.price,

    0

  )

  return (

    <div>

      <Navbar />

      <div className='cart-container'>

        <h1>Your Cart</h1>

        {

          cart.length === 0 ? (

            <h2>Cart Is Empty</h2>

          ) : (

            cart.map((item,index)=>(

              <div
                className='cart-item'
                key={index}
              >

                <img
                  src={item.image}
                  alt=''
                />

                <div>

                  <h2>{item.name}</h2>

                  <p>₹ {item.price}</p>

                </div>

                <button
                  onClick={()=>
                    removeFromCart(index)
                  }
                >

                  Remove

                </button>

              </div>

            ))

          )

        }

        <h2 className='total'>

          Total: ₹ {totalPrice}

        </h2>

      </div>

    </div>

  )

}

export default Cart