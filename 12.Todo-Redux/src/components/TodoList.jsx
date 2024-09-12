import React from 'react';
import Todo from './Todo'; // Bileşeni doğru yoldan import edin
import { useSelector } from 'react-redux';

function TodoList() {
    const { todos } = useSelector((store) => store.todos);

    console.log(todos);

    return (
        <div>
            {
                todos && todos.map((todo) => (
                    <Todo key={todo.id} todo={todo} /> // Anahtar özelliğini ekleyin ve JSX'i parantez içinde döndürün
                ))
            }
        </div>
    );
}

export default TodoList;
