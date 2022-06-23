import React from 'react'

const LoginForm = () => {
  return (
    <>
        <div className="container text-center">
          <h1 className='mt-5'>Inicio de Sesión</h1>
        </div>
        <div className="container mt-3 d-flex justify-content-center">
          <div className="row">
            <div className="col-12">
                <form>
                  <label className="form-label">Mail</label>
                  <input type="email" className='form-control' />
                  <label className="form-label">Password</label>
                  <input type="password" className='form-control' />
                  <button type='submit' className='mt-2 btn btn-outline-primary'>Acceder</button>
                </form>
            </div>
          </div>
        </div>
    </>
  )
}

export default LoginForm