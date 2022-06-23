import React from 'react'
import Report from './Report'

const IncomeForm = () => {
  return (
    <>
    <div className='container mt-5'>
        <h1 className='text-center'>Formulario de Ingresos y Egresos</h1>
        <div className="row">
            <div className="col-12 col-sm-6">
                    <form className=''>
                    <label className="form-label mt-2">Tipo:</label>
                        <select name="type" className="form-select">
                            <option value="1">Selecciona una opción</option>
                            <option value="2">Ingreso</option>
                            <option value="3">Egreso</option>
                        </select>

                        <label className="form-label mt-2">Categoría:</label>
                        <select name="category" className="form-select">
                            <option value="1">Selecciona una opción</option>
                            <option value="2">Comida</option>
                            <option value="3">Luz</option>
                            <option value="4">Agua</option>
                        </select>

                        <label className="form-label">Concepto:</label>
                        <input className='form-control' name='concept' type="text" />

                        <label className="form-label">Fecha:</label>
                        <input type="date" name='date' className="form-control" />

                        <label className="form-label">Cantidad:</label>
                        <input type="number" name='amount' className="form-control" placeholder='Monto' />
                        <button type='submit' className="btn btn-primary mt-2">Enviar</button>
                    </form>
            </div>
            <div className="col-12 col-sm-6">
                <h3 className="text-center">BALANCE</h3>
                <ul className="list-group">
                    <li className=" text-center list-group-item active">$500.000</li>
                </ul>
            </div>
        </div>
    </div>
    <Report/>
    </>
  )
}

export default IncomeForm