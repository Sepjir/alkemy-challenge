import axios from 'axios'
import React from 'react'
import { v4 as uuidv4 } from 'uuid';

const Modal = ({id, content}) => {
    const [concept, setConcept] = React.useState(content[1])
    const [amount, setAmount] = React.useState(content[2])

    const deleteIncomeExpenditure = async (id) => {
            await axios.delete(`http://localhost:5000/api/v1/income/${id}`, {data: {
            userid: content[4],
            amount: content[2]
        }}).then(() => {
            window.location.href = "http://localhost:3000/dashboard"
        }).catch((e) => {
            console.log(e)
        })

    }



  return (
    <th key={uuidv4()}>
        <div key={uuidv4()} className="modal fade" id={id} aria-hidden="true">
            <div key={uuidv4()} className="modal-dialog">
                <div key={uuidv4()} className="modal-content">
                    <div key={uuidv4()} className="modal-header">
                        <h5 key={uuidv4()} className="modal-title" id="exampleModalLabel">{`${content[3]}: ${content[1]}`}</h5>
                        <button key={uuidv4()} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div key={uuidv4()} className="modal-body">
                        <form key={uuidv4()} action={`http://localhost:5000/api/v1/income/${content[0]}`} method='POST'>
                            <label key={uuidv4()} className="form-label">Concepto:</label>
                            <input key={uuidv4()} type="text" className='form-control' name='concept' onChange={e =>setConcept(e.target.value)} value={concept} />
                            <label key={uuidv4()} className="form-label">Monto:</label>
                            <input key={uuidv4()} type="number" className='form-control' name='amount' onChange={e => setAmount(e.target.value)} value={amount} min="0" />
                            <input key={uuidv4()} type="hidden" name='originValue' value={content[2]} />
                            <input key={uuidv4()} type="hidden" name="nameType" value={content[3]} />
                            <input key={uuidv4()} type="hidden" name="userid" value={content[4]} />
                                <div key={uuidv4()} className='mt-2 d-flex justify-content-end'>
                                <button key={uuidv4()} type="button" className="mx-2 btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                    <button key={uuidv4()} type="button" onClick={() => deleteIncomeExpenditure(`${content[0]}`)} className="mx-2 btn btn-danger">Eliminar</button>
                                    <button key={uuidv4()} type="submit" className="mx-2 btn btn-warning">Guardar Cambios</button>
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