import axios from 'axios'
import React from 'react'
import Modal from './Modal'
import { v4 as uuidv4 } from 'uuid';

const Report = () => {

    const [incomeReport, setIncomeReport] = React.useState([])
    const [expenditureReport, setExpenditureReport] = React.useState([])
    const [userid, setUserId] = React.useState("")

    React.useEffect(() => {
        get_user_id()
        get_income(userid)
        get_expenditure(userid)
    }, [userid])

    const get_income = async (id) => {
        try {
            const {data} = await axios.get(`http://localhost:5000/api/v1/income/${id}`)
            setIncomeReport(data)
        } catch (e) {
            console.log(e)
        }
    }

    const get_expenditure = async (id) => {
        try {
            const {data} = await axios.get(`http://localhost:5000/api/v1/expenditures/${id}`)
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
        <h3 className='text-center mb-4'>Reporte de Ingresos y Egresos</h3>
        <div className='table-responsive'>
            <table className="text-center table table-primary table-striped table-bordered">
                <thead>
                    <tr>
                    <th scope="col">Concepto</th>
                    <th scope="col">Categoría</th>
                    <th scope="col">Monto</th>
                    <th scope="col">Tipo</th>
                    <th scope="col">Fecha</th>
                    <th scope="col">Editar</th>
                    <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        incomeReport && (
                            incomeReport.map((item, index) => (
                                    <tr key={uuidv4()}>
                                    <th key={uuidv4()}>{item.concept}</th>
                                    <th key={uuidv4()}>{item.category_name}</th>
                                    <th key={uuidv4()}>${item.amount.toLocaleString("es-CL")}</th>
                                    <th key={uuidv4()}>{item.name_type}</th>
                                    <th key={uuidv4()}>{item.to_char}</th>
                                    <th key={uuidv4()}><button type="button" data-bs-toggle="modal" data-bs-target={`#idi${index}`} className="btn btn-warning btn-sm">Editar</button>
                                    </th>
                                    <Modal key={uuidv4()} id={`idi${index}`} content={[item.id, item.concept, item.amount, item.name_type, userid]}/>
                                    </tr>
                                
                            ))
                        )
                    }
                </tbody>
            </table>
        </div>
        
        <div className='table-responsive'>
            <table className="text-center mt-2 table table-danger table-striped table-bordered">
                <thead>
                    <tr>
                    <th scope="col">Concepto</th>
                    <th scope="col">Categoría</th>
                    <th scope="col">Monto</th>
                    <th scope="col">Tipo</th>
                    <th scope="col">Fecha</th>
                    <th scope="col">Editar</th>
                    <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        expenditureReport && (
                            expenditureReport.map((item, index) => (
                                <tr key={uuidv4()}>
                                <th key={uuidv4()}>{item.concept}</th>
                                <th key={uuidv4()}>{item.category_name}</th>
                                <th key={uuidv4()}>${item.amount.toLocaleString("es-CL")}</th>
                                <th key={uuidv4()}>{item.name_type}</th>
                                <th key={uuidv4()}>{item.to_char}</th>
                                <th key={uuidv4()}><button type="button" className="btn btn-warning btn-sm"  data-bs-toggle="modal" data-bs-target={`#ide${index}`}>Editar</button>
                                </th>
                                <Modal key={uuidv4()} id={`ide${index}`} content={[item.id, item.concept, item.amount, item.name_type, userid]}/>
                                </tr>

                            ))
                        )
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Report