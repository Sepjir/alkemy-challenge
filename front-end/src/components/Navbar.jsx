import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar navbar-dark bg-dark'>
        <div className='container d-flex justify-content-end'>
            <NavLink className="mx-2 btn btn-outline-primary" to="/" >Inicio</NavLink>
            <NavLink className="mx-2 btn btn-outline-primary" to="/dashboard">Dashboard</NavLink>
            <NavLink className="mx-2 btn btn-outline-primary" to='/login'>Cerrar Sesión</NavLink>
        </div>
    </nav>
  )
}

export default Navbar