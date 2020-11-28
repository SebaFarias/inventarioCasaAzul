import React , {useState} from 'react'
import { connect } from 'react-redux'

const Login = ({ login }) => {

const [ data , setData ] = useState({})

  const handleChange = e => {
    setData( prevState => {
      return {
        ...prevState,
        [e.target.id]: e.target.value ,
      }
    })
  }
  const handleSubmit = e => {
    e.preventDefault()
    login(data)
  }

  return(
    <form method="POST" onSubmit={handleSubmit}> 
      <div className="from_group">
        <label>
          Correo
          <input 
            type="email"
            id="emailLogin"
            name="emailLogin"
            onChange={handleChange}
          ></input>
        </label>
      </div>
      <div className="from_group">
        <label>
          Contraseña
          <input 
            type="password"
            id="passwordLogin"
            name="passwordLogin"
            onChange={handleChange}
          ></input>
        </label>
      </div>
      <div className="form_group">
        <button type="submit"> Sign in </button>
      </div>
    </form>
  )
}

const loginComponent = connect()(Login)
export {loginComponent as Login}