import React, { createContext, useState, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([{
        id: 1,
        text: "Learn React",
        completed: true
    },
    {
        id: 2,
        text: "Learn MVC",
        completed: true
    }
    ])

    const addTodo = (text) => 
    setTodos((prev) => [...prev, { id: uuidv4(), completed: false, text: text }]);

const toggleTodo = (id) => {
    const cloned_todos = [...todos]; //referansını etkilememek icin cloneladı
    const itemIndex = cloned_todos.findIndex(todo => todo.id === id);
    console.log(itemIndex);

    const item = todos[itemIndex];
    console.log(item);
    item.completed = !item.completed;

    setTodos(cloned_todos);
}

    const values = {
        todos,
        setTodos,
        addTodo,
        toggleTodo
    }

    return <TodoContext.Provider value={values}>{children} </TodoContext.Provider>
}

//contexti doğrudan kullanabilmek icin özellestirilmis hooks yazıyoruz.
export const useTodo = () => {
    const context = useContext(TodoContext);

    if (context === undefined) {
        throw new Error("useTodo hook must be call inside TodoProvider component");
    }
    return context;
}