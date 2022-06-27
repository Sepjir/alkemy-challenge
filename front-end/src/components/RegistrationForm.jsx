import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'

const RegistrationForm = () => {

  const uri = "https://ignacio-finanzas-app.herokuapp.com/"
  const uriLocal = "http://localhost:5000/"

  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")

  const registerUser = async (e) => {
    e.preventDefault()
    await axios.post(`${uri}api/v1/users`, {data:{
      name: name,
      email: email,
      password: password
    }}).then(() => {
      window.location.href = "/login"
    }).catch((e) => {
      console.log(e)
    })
  }
 
  return (
    <div className='container'>
        <h1 className='text-center mt-5'>Formulario de Registro</h1>
            <div className="container mt-3 d-flex justify-content-center">
            <div className="row">
                <div className="col-12">
                    <form onSubmit={(e) => registerUser(e)}>
                    <label className="form-label">Nombre:</label>
                    <input type="text" name='name' onChange={e => setName(e.target.value)} value={name} className='form-control' />


                    <label className="form-label">Mail:</label>
                    <input type="email" name='email' onChange={e => setEmail(e.target.value)} value={email} className='form-control' />


                    <label className="form-label">Contraseña:</label>
                    <input type="password" name='password' onChange={e => setPassword(e.target.value)} value={password} className='form-control' />

                    <label className="form-label">Repita su Contraseña:</label>
                    <input type="password" name='password2' className='form-control' />

                    <button type='submit' className='mt-2 mx-2 btn btn-outline-success'>Registrar</button>
                    <Link type='button' to="/login" className='mt-2 mx-2 btn btn-outline-primary'>Iniciar Sesión</Link>
                    </form>
                </div>
            </div>
            </div>

    </div>
  )
}

export default RegistrationForm