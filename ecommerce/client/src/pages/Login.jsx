import { useState, useContext } from 'react'

import axios from 'axios'

import '../styles/auth.css'

import { useNavigate } from 'react-router-dom'

import { AuthContext } from '../AuthContext'

function Login() {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const navigate = useNavigate()

  const { login } = useContext(AuthContext)

  const handleLogin = async(e)=>{

    e.preventDefault()

    try{

      const res = await axios.post(

        'http://localhost:5000/api/auth/login',

        {
          email,
          password,
        }

      )

      login(res.data)

      navigate('/')

    }catch(err){

      console.log(err)

      alert('Login Failed')

    }

  }

  return (

    <div className='auth-container'>

      <form
        className='auth-box'
        onSubmit={handleLogin}
      >

        <h1>Login</h1>

        <input
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e)=>
            setEmail(e.target.value)
          }
        />

        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e)=>
            setPassword(e.target.value)
          }
        />

        <button type='submit'>

          Login

        </button>

      </form>

    </div>

  )

}

export default Login