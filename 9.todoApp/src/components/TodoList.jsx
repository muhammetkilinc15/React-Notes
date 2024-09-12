import React from 'react'
import Todo from './Todo'

function TodoList({todos,onRemoveTodo,updateTodo}) {
    return (
        <div className='mt-5 p-4' style={{border:'1px solid grey'}}>
            <div className='row'>
                <div className='col-sm-12'>
                   
                    
                    {
                

                       todos && todos.map((todo) => {
                        return <Todo key={todo.id} todo={todo} onRemoveTodo= {onRemoveTodo} updateTodo={updateTodo}/>;
                      })
                    }
                </div>
            </div>

        </div>
    )
}

export default TodoList