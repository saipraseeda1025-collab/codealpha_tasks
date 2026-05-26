import { useState } from 'react'

import axios from 'axios'

import '../styles/auth.css'

function Register() {

  const [username,setUsername] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const handleRegister = async(e)=>{

    e.preventDefault()

    try{

      await axios.post(

        'http://localhost:5000/api/auth/register',

        {
          username: username,
          email: email,
          password: password,
        }

      )

      alert('Registration Successful')

    }catch(err){

      console.log(err)

      alert('Registration Failed')

    }

  }

  return (

    <div className='auth-container'>

      <form
        className='auth-box'
        onSubmit={handleRegister}
      >

        <h1>Create Account</h1>

        <input
          type='text'
          placeholder='Username'
          value={username}
          onChange={(e)=>
            setUsername(e.target.value)
          }
        />

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

          Register

        </button>

      </form>

    </div>

  )

}

export default Register