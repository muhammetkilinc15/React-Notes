import React, { useState } from 'react'
import { CiCircleRemove } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
function Todo({ todo, onRemoveTodo, updateTodo }) {
    const { id, content } = todo;

    const removeTodo = () => {
        onRemoveTodo(id)
    }

    const uptateTodo = () => {
        updateTodo(todo)
    }
    const [editable, setEditable] = useState(false)

    const [uptTodo, setUptTodo] = useState(content)
    return (
        <div className='row mt-3 p-1 text-white' style={{ backgroundColor: 'grey' }} >
            <input type="hidden" value={id} />
            <div className='col-sm-10'>
                {
                    editable ? <input type="text" className='form-control' value={uptTodo}
                        onChange={(e) => setUptTodo(e.target.value)}
                    /> : <p className='text-start'>{uptTodo}</p>
                }

            </div>
            <div className='col-sm-2'>
                <div className='row'>
                    <div className='col-sm-6'>
                        <CiCircleRemove style={{ fontSize: '30px' }} onClick={removeTodo} />
                    </div>
                    <div className='col-sm-6'>
                        {
                            editable ? <FaCheck style={{ fontSize: '30px' }} onClick={() => { setEditable(false), uptateTodo }} /> :
                                <FaEdit style={{ fontSize: '30px' }} onClick={() => setEditable(true)} />
                        }


                    </div>
                </div>

            </div>

        </div>
    )
}

export default Todo