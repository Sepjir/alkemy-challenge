import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const [user, setUser] = React.useState([])


  React.useEffect(() => {
    get_user()
  }, [])

  const get_user = () => {
    const user = localStorage.getItem("usuario")
    const parseUser = JSON.parse(user)
    setUser(parseUser)
  }

  const log_off = () => {
    localStorage.clear("usuario")
    window.location.href = "/"
  }


  return (
    <nav className='navbar navbar-dark bg-dark'>
        <div className='container d-flex justify-content-end'>
            
            {
              user ? (
                <>
                  <NavLink className="mx-2 btn btn-outline-primary" to="/dashboard">Dashboard</NavLink>
                  <NavLink className="mx-2 btn btn-outline-primary" onClick={() => log_off()} to='/login'>Cerrar Sesión</NavLink>
                </>
              ) : (
                <>
                  <NavLink className="mx-2 btn btn-outline-primary" to="/" >Inicio</NavLink>
                  <NavLink className="mx-2 btn btn-outline-primary" to="/login" >Iniciar Sesión</NavLink>
                  <NavLink className="mx-2 btn btn-outline-primary" to="/register" >Registro</NavLink>
                </>
              )
            }
        </div>
    </nav>
  )
}

export default Navbar