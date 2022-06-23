import React from 'react'
import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <div className='mt-5 container'>
        <h1 className='text-center'>Bienvenidos</h1>
            <div className="container mt-5 text-center">
                <div className="row">
                    <div className="col-12">
                        <Link className='mx-2 btn btn-primary' to="/login">Iniciar Sesión</Link>
                        <Link className="mx-2 btn btn-success" to="/register">Registrarse</Link>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Welcome