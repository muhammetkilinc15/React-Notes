// Redux TodoSlice
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        {
            id: 1,
            name: "Görev 1"
        },

        {
            id: 2,
            name: "Görev 2"
        },
        {
            id: 3,
            name: "Görev 3"
        },
    ],
    loading: false
};

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: state.todos.length + 1,
                name: action.payload.name
            };
            state.todos.push(newTodo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
        },
        updateTodo: (state, action) => {
            const { id, name } = action.payload;
            const todo = state.todos.find(todo => todo.id === id);
            if (todo) {
                todo.name = name;
            }
        }
    }
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
