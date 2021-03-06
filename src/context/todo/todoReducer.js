import { ADD_TODO, REMOWE_TODO, UPDATE_TODO } from "../type"

const handlers = {
    [ADD_TODO]: (state, {title}) => ({
        ...state, todos: [...state.todos, {
        id: Date.now().toString(),
        title: title
      }]}),

    [REMOWE_TODO]: (state, {id}) => ({
        ...state, todos: state.todos.filter(todo => todo.id !== id)
    }),

    [UPDATE_TODO]: (state, {id, title}) => ({
        ...state, todos: state.todos.map(todo => {
            if (todo.id === id){
                todo.title = title
            }
            return todo
            })
        }),

    DEFAULT: state => state
}

export const todoReducer = (state, action) => {
    // switch (action.type){
    //     case ADD_TODO: 
    //         return {...state, todos: [...state.todos, {
    //             id: Date.now().toString(),
    //             title: action.title
    //           }]}
    //     case UPDATE_TODO: 
    //         return {...state, todos: state.todos.map(todo => {
    //                     if (todo.id === action.id){
    //                         todo.title = action.title
    //                     }
    //                     return todo
    //                 })}
    //     case REMOWE_TODO: 
    //         return {...state, todos: state.todos.filter(todo => todo.id !== action.id)}
    //     default:
    //         return state
    // }

    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
}