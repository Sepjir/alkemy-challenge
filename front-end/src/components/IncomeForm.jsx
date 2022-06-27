import React from 'react'
import Report from './Report'
import axios from 'axios'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'


const IncomeForm = () => {
    const [userid, setUserId] = React.useState("")
    const [concept, setConcept] = React.useState("")
    const [amount, setAmount] = React.useState("")
    const [type, setType] = React.useState([])
    const [type2, setType2] = React.useState("1")
    const [category, setCategory] = React.useState([])
    const [category2, setCategory2] = React.useState("")
    const [balance, setBalance] = React.useState([])
    const [date, setDate] = React.useState(moment(Date.now()).format('YYYY-MM-DD'))
    const navigate = useNavigate()

    const uri = "https://ignacio-finanzas-app.herokuapp.com/"
    const uriLocal = "http://localhost:5000/"

    React.useEffect(() => {
        get_category()
        get_user_id()
        get_type()
        get_balance()

    }, [])
    
    
    const get_user_id = () => {
        const user_id = localStorage.getItem("usuario")
        const parse = JSON.parse(user_id)
        setUserId(parse[0].id)
    }

    const get_type = async () => {
        const {data} = await axios.get(`${uri}api/v1/type`)
        setType(data)
        
    }

    const get_category = async () => {
        const {data} = await axios.get(`${uri}api/v1/categories`)
        setCategory(data)
    }

    const get_balance = async () => {
        const user = localStorage.getItem("usuario")
        const parse = JSON.parse(user)
        const {data} = await axios.get(`${uri}api/v1/balance/${parse[0].id}`)
        setBalance(data)
    }

    const add_income = async (e) => {
        e.preventDefault()
        try {
            await axios.post(`${uri}api/v1/income`, {data: {
                userid: userid,
                amount: amount,
                typeName: type2,
                date: date, 
                category: category2,
                concept: concept
            
            }}).then(() => {
                    window.location.href = "/dashboard"
            }).catch((e) => {
                console.log(e)
            })
        } catch (e) {
            console.log(e)
        }
    }
    
  return (
    <>
    <div className='container mt-5'>
        <h1 className='text-center'>Formulario de Ingresos y Egresos</h1>
        <div className="row">
            <div className="col-12 col-sm-6">
                    <form onSubmit={add_income}>
                    <label className="form-label mt-2">Tipo:</label>
                        <select name="type" onChange={e => setType2(e.target.value)} value={type2} className="form-select" required>
                            <option value="0" >Selecciona una opción</option>
                            {
                                type ? (
                                    
                                    type.map((item) => (
                                        <option key={item.id} value={item.id}>{item.name_type}</option>
                                    ))
                                ): null
                            }
                        </select>

                        <label className="form-label mt-2">Categoría:</label>
                        <select name="category" onChange={e => setCategory2(e.target.value)} value={category2} className="form-select" required>
                            <option value="0" defaultValue="0">Selecciona una opción</option>
                            {
                                type2 === "1" ? (
                                    category.filter((item) => item.type_id === 1).map(item => (
                                        <option key={item.id} value={item.id}>{item.category_name}</option>
                                    ))
                                ): (
                                    category.filter((item) => item.type_id === 2).map(item => (
                                        <option key={item.id} value={item.id}>{item.category_name}</option>
                                    ))
                                )
                            }
                        </select>

                        <label className="form-label">Concepto:</label>
                        <input className='form-control' onChange={e => setConcept(e.target.value)} value={concept} name='concept' type="text" required/>

                        <label className="form-label">Fecha:</label>
                        <input type="date" name='date' onChange={e => setDate(e.target.value)} value={date} className="form-control" required/>

                        <label className="form-label">Cantidad:</label>
                        <input type="number" name='amount' onChange={e => setAmount(e.target.value)} value={amount}  className="form-control" placeholder='Monto' min="0" required/>
                        <input type="hidden" value={userid} name='userid' />
                        <button type='submit' className="btn btn-primary mt-2">Enviar</button>
                    </form>
            </div>
            <div className="col-12 col-sm-6">
                <h3 className="text-center">BALANCE</h3>
                <ul className="list-group">
                    {
                        balance && (
                            balance.map((item, index) => (
                                <li key={index} className=" text-center list-group-item active fw-bold">${item.amount.toLocaleString('es-CL')}</li>
                            ))
                        )
                    }
                </ul>
            </div>
        </div>
    </div>
    <Report/>
    </>
  )
}

export default IncomeForm