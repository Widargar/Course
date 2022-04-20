import React, {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Alert } from 'react-native';
import { Navbar } from './src/components/Navbar'
import { MainScreen } from './src/screens/MainScreen'
import { TodoScreen } from './src/screens/TodoScreen'
import { Platform } from 'react-native-web';

export default function App() {
  const [todoId, setTodoId] = useState('2')
  const [todos, setTodos] = useState([
    {id: '1', title: 'To do'},
    {id: '2', title: 'Do ToDo'}
  ])

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
    <MainScreen todos={todos} addTodo={addTodo} removeTodo={removeTodo} openToDo={setTodoId}/>
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
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20
  },
});
