import React from 'react'
import { Link } from 'react-router-dom'

const RegistrationForm = () => {
  return (
    <div className='container'>
        <h1 className='text-center mt-5'>Formulario de Registro</h1>
            <div className="container mt-3 d-flex justify-content-center">
            <div className="row">
                <div className="col-12">
                    <form action='http://localhost:5000/api/v1/users' method='POST'>
                    <label className="form-label">Nombre:</label>
                    <input type="text" name='name' className='form-control' />


                    <label className="form-label">Mail:</label>
                    <input type="email" name='email' className='form-control' />


                    <label className="form-label">Contraseña:</label>
                    <input type="password" name='password' className='form-control' />

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