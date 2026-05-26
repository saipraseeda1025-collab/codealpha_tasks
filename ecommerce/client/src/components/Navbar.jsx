import { Link, useNavigate } from 'react-router-dom'

import '../styles/navbar.css'

import { useContext } from 'react'

import { CartContext } from '../CartContext'
import { AuthContext } from '../AuthContext'

function Navbar() {

  const { cart } = useContext(CartContext)

  const { isLoggedIn, logout } =
  useContext(AuthContext)

  const navigate = useNavigate()

  const handleLogout = ()=>{

    logout()

    navigate('/login')

  }

  return (

    <div className='navbar'>

      <h1 className='logo'>ShopX</h1>

      <div className='nav-links'>

        <Link to='/'>
          Home
        </Link>

        {

          isLoggedIn ? (

            <button
              className='logout-btn'
              onClick={handleLogout}
            >

              Logout

            </button>

          ) : (

            <>

              <Link to='/register'>
                Register
              </Link>

              <Link to='/login'>
                Login
              </Link>

            </>

          )

        }

        <Link to='/cart'>

          Cart ({cart.length})

        </Link>

      </div>

    </div>

  )

}

export default Navbar