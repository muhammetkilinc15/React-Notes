import React, { useState } from 'react';
import { CiCircleRemove } from 'react-icons/ci';
import { FaEdit, FaCheck } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { removeTodo, updateTodo } from '../redux/TodoSlice'; // Redux aksiyonları

function Todo({ todo }) {
    const [editable, setEditable] = useState(false);
    const [uptTodo, setUptTodo] = useState(todo.name); // `todo.name`'ı başlangıç değeri olarak kullanın
    const dispatch = useDispatch();

    const handleUpdate = () => {
        if (uptTodo.trim()) {
            dispatch(updateTodo({ id: todo.id, name: uptTodo })); // Güncelleme işlevini çağır
            setEditable(false); // Düzenleme modundan çık
        }
    };

    const handleRemove = () => {
        dispatch(removeTodo({ id: todo.id })); // Silme işlevini çağır
    };

    return (
        <div className='row mt-3 p-1 text-white' style={{ backgroundColor: 'grey' }}>
            <input type="hidden" value={todo.id} />
            <div className='col-sm-10'>
                {
                    editable
                        ? <input
                            type="text"
                            className='form-control'
                            value={uptTodo}
                            onChange={(e) => setUptTodo(e.target.value)}
                        />
                        : <p className='text-start'>{uptTodo}</p>
                }
            </div>
            <div className='col-sm-2'>
                <div className='row'>
                    <div className='col-sm-6'>
                        <CiCircleRemove
                            style={{ fontSize: '30px' }}
                            onClick={handleRemove} // Silme işlevini çağır
                        />
                    </div>
                    <div className='col-sm-6'>
                        {
                            editable
                                ? <FaCheck
                                    style={{ fontSize: '30px' }}
                                    onClick={handleUpdate} // Güncelleme işlevini çağır
                                />
                                : <FaEdit
                                    style={{ fontSize: '30px' }}
                                    onClick={() => setEditable(true)} // Düzenleme moduna geç
                                />
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Todo;
