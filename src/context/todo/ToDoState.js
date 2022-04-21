import React, {useReducer} from 'react'
import { TodoContext } from './todoContext'
import { todoReducer } from './todoReducer'

export const ToDoState = ({children}) => {
    const initialState = {
        todos: [{id: '1', title: 'To do'},
                {id: '2', title: 'Do ToDo'}]
    }
    const [state, dispatch] = useReducer(todoReducer, initialState)

    return <TodoContext.Provider value={{
        todos: state.todos
    }}>
        {children}
    </TodoContext.Provider>

}