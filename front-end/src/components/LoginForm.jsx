import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'

const LoginForm = () => {
  const navigate = useNavigate()
  const [mail, setMail] = React.useState("")
  const [pass, setPass] = React.useState("")
  const [error, setError] = React.useState(null)

  const validateData = async (e) => {
    e.preventDefault()
    if (!mail.trim()) {
      setError("Falta e-mail")
      return
    }if (!pass.trim()) {
      setError("Falta contraseña")
    }
    setError(null)
    setMail("")
    setPass("")
    login()
    
  }

  const login = React.useCallback(async () => {
    try {
      const {data} = await axios.get(`http://localhost:5000/api/v1/user/${mail}`)
      if (data[0].mail === mail && data[0].pass === pass) {
        localStorage.setItem("usuario", JSON.stringify(data))
        navigate("/dashboard")
      }
    } catch (e) {
      console.log(e)
    }
  }, [mail, pass, navigate])


  return (
    <>
        <div className="container text-center">
          <h1 className='mt-5'>Inicio de Sesión</h1>
        </div>
        <div className="container mt-3 d-flex justify-content-center">
          <div className="row">
            <div className="col-12">
              {
                error && (
                  <div className="alert alert-danger">
                    {error}
                  </div>
                )
              }
                <form onSubmit={validateData}>
                  <label className="form-label">Mail</label>
                  <input type="email" name='mail' onChange={e => setMail(e.target.value)} value={mail} className='form-control' />

                  <label className="form-label">Password</label>
                  <input type="password" name='password' onChange={e => setPass(e.target.value)} value={pass} className='form-control' />
                  <button type='submit' className='mt-2 mx-2 btn btn-outline-primary'>Acceder</button>
                  <Link to="/register" className='mt-2 mx-2 btn btn-outline-success'>Registrarse</Link>
                </form>
            </div>
          </div>
        </div>
    </>
  )
}

export default LoginForm