import React, { createContext, useState, useContext } from 'react';

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

    const values = {
        todos,
        setTodos,
    }

    return <TodoContext.Provider value={values}>{children} </TodoContext.Provider>
}

//contexti doğrudan kullanabilmek icin özellestirilmis hooks yazıyoruz.
export const useTodo = () => {
const context = useContext(TodoContext);

if(context === undefined) {
    throw new Error("useTodo hook must be call inside TodoProvider component");
}
return context;
}