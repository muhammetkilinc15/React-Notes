import React, { useState } from 'react'
import '../App.css'
function TodoCreate({onCreateTodo}) {
    const [newTodo,setNewTodo] = useState('')

    const clearInput = ()=>{
        setNewTodo('')
    }
    
    const createTodo = () => {
        if (!newTodo || !newTodo.content || newTodo.content.trim() === "") return; 
        const request = {
            id: Math.floor(Math.random() * 999999999),
            content: newTodo.content
        };
        onCreateTodo(request);
        clearInput();
    };
    

    return (
        <div className='row'>
            <h3 className='text-danger'>TODO APP</h3>
            <div className="col-lg-12">
                <input type="text" className='form-control' placeholder='görev gir' value={newTodo} 
                onChange={(e) => setNewTodo(e.target.value)}/>
            </div>
            <div className="offset-4 mt-3 text-center">
                <button className="btn btn-secondary" onClick={createTodo}>Todo oluştur</button>
            </div>

        </div>
    )
}

export default TodoCreate