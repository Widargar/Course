import React, {useState, useContext} from 'react'
import { View, StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { Navbar } from './components/Navbar'
import { THEME } from './theme'
import { MainScreen } from './screens/MainScreen'
import { TodoScreen } from './screens/TodoScreen'
import { TodoContext } from './context/todo/todoContext';

export const MainLayout = () => {
    const todosContext = useContext(TodoContext)
    const [todoId, setTodoId] = useState(null)
    const [todos, setTodos] = useState([])

    const addTodo = title => {
        setTodos(prev => [
          ...prev,
          {
            id: Date.now().toString(),
            title
          }
        ])
    }
    
    const removeTodo = id  => {
        const todo = todos.find(t => t.id === id)
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
              setTodoId(null)
              setTodos(prev => prev.filter(todo => todo.id !== id))},
            style: Platform.OS === 'ios' ? 'destructive' : 'positive'
          }
        ],
        {cancelable: true})
      }
    
    const updateTodo = (id, title) => {
        setTodos(old => old.map(todo => {
          if(todo.id === id) {
            todo.title = title
          }
          return todo
        }))
      }

    const openToDo = id => {
        setTodoId(id)
      }
    
    const goBack = () => {
        setTodoId(null)
      }
    
    let content = (
        <MainScreen todos={todosContext.todos} addTodo={addTodo} removeTodo={removeTodo} openToDo={setTodoId}/>
      )
    
    if (todoId) {
        const pressedTodo = todos.find(todo => todo.id === todoId)
        content = <TodoScreen goBack={goBack} todo={pressedTodo} onRemove={removeTodo} onSave={updateTodo}/>
      }

    return (
        <View>
            <Navbar title='Todo App' />
            <View style={styles.container}>{content}</View>
            <StatusBar style='auto'/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      paddingHorizontal: THEME.PADDING_HORIZONTAL,
      paddingVertical: 20
    },
  });