import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'

const Report = () => {

    const [incomeReport, setIncomeReport] = React.useState([])
    const [expenditureReport, setExpenditureReport] = React.useState([])
    const [userid, setUserId] = React.useState("")

    React.useEffect(() => {
        get_user_id()
        get_income()
        get_expenditure()
    }, [userid])

    const get_income = async () => {
        try {
            const {data} = await axios.get(`http://localhost:5000/api/v1/income/${userid}`)
            setIncomeReport(data)
        } catch (e) {
            console.log(e)
        }
    }

    const get_expenditure = async () => {
        try {
            const {data} = await axios.get(`http://localhost:5000/api/v1/expenditures/${userid}`)
            setExpenditureReport(data)
        } catch (e) {
            console.log(e)
        }
    }

    const get_user_id = () => {
        const user_id = localStorage.getItem("usuario")
        const parse = JSON.parse(user_id)
        setUserId(parse[0].id)
    }


  return (
    <div className='container mt-5'>
        <h3 className='text-center mb-3'>Reporte de Ingresos y Egresos</h3>
        <div className='table-responsive'>
            <table className="table table-primary table-striped table-bordered">
                <thead>
                    <tr>
                    <th scope="col">Concepto</th>
                    <th scope="col">Categoría</th>
                    <th scope="col">Monto</th>
                    <th scope="col">Tipo</th>
                    <th scope="col">Fecha</th>
                    <th scope="col">Editar</th>
                    <th scope="col">Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        incomeReport && (
                            incomeReport.map((item, index) => (
                                <tr key={index}>
                                <th key={item.concept}>{item.concept}</th>
                                <th key={item.category_name}>{item.category_name}</th>
                                <th key={item.amount}>${item.amount.toLocaleString("es-CL")}</th>
                                <th key={item.name_type}>{item.name_type}</th>
                                <th key={item.to_char}>{item.to_char}</th>
                                <th key={`${index}mod`}><button type="button" className="btn btn-warning btn-sm">Editar</button></th>
                                <th key={`${index}el`}><button type="button" className="btn btn-danger btn-sm">Eliminar</button></th>
                                </tr>
                            ))
                        )
                    }
                </tbody>
            </table>
        </div>
        
        <div className='table-responsive'>
            <table className=" mt-2 table table-danger table-striped table-bordered">
                <thead>
                    <tr>
                    <th scope="col">Concepto</th>
                    <th scope="col">Categoría</th>
                    <th scope="col">Monto</th>
                    <th scope="col">Tipo</th>
                    <th scope="col">Fecha</th>
                    <th scope="col">Editar</th>
                    <th scope="col">Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        expenditureReport && (
                            expenditureReport.map((item, index) => (
                                <tr key={index}>
                                <th key={item.concept}>{item.concept}</th>
                                <th key={item.category_name}>{item.category_name}</th>
                                <th key={item.amount}>${item.amount.toLocaleString("es-CL")}</th>
                                <th key={item.name_type}>{item.name_type}</th>
                                <th key={item.to_char}>{item.to_char}</th>
                                <th key={`${index}mod`}><button type="button" className="btn btn-warning btn-sm">Editar</button></th>
                                <th key={`${index}el`}><button type="button" className="btn btn-danger btn-sm">Eliminar</button></th>
                                </tr>
                            ))
                        )
                    }
                </tbody>
            </table>
        </div>
        <div className='container d-flex justify-content-center'>
            <Link type='button' to="/" className="btn btn-secondary">Volver</Link>
        </div>
    </div>
  )
}

export default Report