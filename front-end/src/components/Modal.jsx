import axios from 'axios'
import React from 'react'
import { v4 as uuidv4 } from 'uuid';

const Modal = ({id, content}) => {
    const [concept, setConcept] = React.useState(content[1])
    const [amount, setAmount] = React.useState(content[2])

    const uri = "https://ignacio-finanzas-app.herokuapp.com/"
    const uriLocal = "http://localhost:5000/"

    const deleteIncomeExpenditure = async (id) => {
            await axios.delete(`${uri}api/v1/income/${id}`, {data: {
            userid: content[4],
            amount: content[2],
            typeName: content[3]
        }}).then(() => {
            window.location.href = "/dashboard"
        }).catch((e) => {
            console.log(e)
        })

    }

    const modIncomesExpenditures = async (e, id) => {
        e.preventDefault()
        await axios.put(`${uri}api/v1/income/${id}`, {data: {
            userid: content[4],
            nameType: content[3],
            originValue: content[2],
            concept: concept,
            amount: amount

        }}).then(() => {
            window.location.href = "/dashboard"
        }).catch((e) => {
            console.log(e)
        })
    }
 


  return (
    <th>
        <div className="modal fade" id={id} aria-hidden="true">
            <div className="modal-dialog">
                <div  className="modal-content">
                    <div  className="modal-header">
                        <h5  className="modal-title" id="exampleModalLabel">{`${content[3]}: ${content[1]}`}</h5>
                        <button  type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div  className="modal-body">
                        <form  onSubmit={(e) => modIncomesExpenditures(e,`${content[0]}`)}>
                            <label className="form-label">Concepto:</label>
                            <input type="text" className='form-control' name='concept' onChange={e =>setConcept(e.target.value)} value={concept} />
                            <label className="form-label">Monto:</label>
                            <input type="number" className='form-control' name='amount' onChange={e => setAmount(e.target.value)} value={amount} min="0" />
                            <input type="hidden" name='originValue' value={content[2]} />
                            <input type="hidden" name="nameType" value={content[3]} />
                            <input type="hidden" name="userid" value={content[4]} />
                                <div className='mt-2 d-flex justify-content-end'>
                                <button type="button" className="mx-2 btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                    <button type="button" onClick={() => deleteIncomeExpenditure(`${content[0]}`)} className="mx-2 btn btn-danger">Eliminar</button>
                                    <button type="submit" className="mx-2 btn btn-warning">Guardar Cambios</button>
                                </div>
                        </form>
                    </div>
                </div>
            </div>
         </div>
    </th>
  )
}

export default Modal