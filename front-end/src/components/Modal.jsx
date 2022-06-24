import React from 'react'

const Modal = ({id, content}) => {
    const [concept, setConcept] = React.useState(content[1])
    const [amount, setAmount] = React.useState(content[2])





  return (
    <div>
        <div className="modal fade" id={id} aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{`${content[3]}: ${content[1]}`}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form action={`http://localhost:5000/api/v1/income/${content[0]}`} method='POST'>
                            <label className="form-label">Concepto:</label>
                            <input type="text" className='form-control' name='concept' onChange={e =>setConcept(e.target.value)} value={concept} />
                            <label className="form-label">Monto:</label>
                            <input type="number" className='form-control' name='amount' onChange={e => setAmount(e.target.value)} value={amount} min="0" />
                            <input type="hidden" name='originValue' value={content[2]} />
                            <input type="hidden" name="nameType" value={content[3]} />
                            <input type="hidden" name="userid" value={content[4]} />
                                <div className='mt-2 d-flex justify-content-end'>
                                <button type="button" className="mx-2 btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                    <button type="button" className="mx-2 btn btn-danger">Eliminar</button>
                                    <button type="submit" className="mx-2 btn btn-warning">Guardar Cambios</button>
                                </div>
                        </form>
                    </div>
                </div>
            </div>
         </div>
    </div>
  )
}

export default Modal