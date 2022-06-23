import React from 'react'
import { Link } from 'react-router-dom'

const Report = () => {
  return (
    <div className='container mt-5'>
        <h3 className='text-center'>Reporte de Ingresos y Egresos</h3>
        <table className="table">
            <thead>
                <tr>
                <th scope="col">Concepto</th>
                <th scope="col">Categoría</th>
                <th scope="col">Monto</th>
                <th scope="col">Fecha</th>
                <th scope="col">Tipo</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th>Arroz</th>
                <th>Comida</th>
                <td>$10.000</td>
                <td>22/06/2022</td>
                <td>Egreso</td>
                </tr>
            </tbody>
        </table>
        <div className='container d-flex justify-content-center'>
            <Link type='button' to="/" className="btn btn-secondary">Volver</Link>
        </div>
    </div>
  )
}

export default Report