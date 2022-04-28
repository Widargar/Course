import React, {useReducer, useContext} from 'react'
import { Alert } from 'react-native'
import { ScreenContext } from '../screen/screenContext'
import { ADD_TODO, REMOWE_TODO, UPDATE_TODO } from '../type'
import { TodoContext } from './todoContext'
import { todoReducer } from './todoReducer'

export const ToDoState = ({children}) => {
    const initialState = {
        todos: [{id: '1', title: 'To do'},
                {id: '2', title: 'Do ToDo'}]
    }
    const { changeScreen } = useContext(ScreenContext)
    const [state, dispatch] = useReducer(todoReducer, initialState)

    const addTodo = (title) => dispatch({type: ADD_TODO, title: title})

    const removeTodo = (id) => {
        const todo = state.todos.find(t => t.id ===id)
        Alert.alert('Task delete', `You want to delete "${todo.title}" ?`,
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel'),
            style: Platform.OS === 'ios' ? 'cancel' : 'negative'
          },
          {
            text: 'Delete',
            onPress: () => {
                changeScreen(null) 
                dispatch({type: REMOWE_TODO, id: id})},
            style: Platform.OS === 'ios' ? 'destructive' : 'positive'
          }
        ],
        {cancelable: true})}
        
    const updateTodo = (id, title) => dispatch({type: UPDATE_TODO, id: id, title: title})

    return <TodoContext.Provider value={{
        todos: state.todos,
        addTodo, removeTodo, updateTodo
    }}>
        {children}
    </TodoContext.Provider>

}