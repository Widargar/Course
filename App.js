import React, {useState} from 'react'
<<<<<<< HEAD
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Alert } from 'react-native';
import { Navbar } from './src/components/Navbar'
import { MainScreen } from './src/screens/MainScreen'
import { TodoScreen } from './src/screens/TodoScreen'
import { Platform } from 'react-native';
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading';

async function loadApplication() {
  await Font.loadAsync({
    'montserrat-bold': require('./src/fonts/Montserrat-Bold.ttf'),
    'montserrat-regular': require('./src/fonts/Montserrat-Regular.ttf')
=======
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading';
import { MainLayout } from './src/MainLayout';
import { ToDoState } from './src/context/todo/ToDoState';

async function loadApp() {
  await Font.loadAsync({
    'ptsans-bold': require('./assets/fonts/PTSans-Bold.ttf'),
    'ptsans-regular': require('.//assets/fonts/PTSans-Regular.ttf')
>>>>>>> 714bb543e3c2ccab1ae470b063af8c1834f55e4f
  })
}

export default function App() {
<<<<<<< HEAD
  const [isLoaded, setIsLoaded] = useState(false)
  const [todoId, setTodoId] = useState(null)
  const [todos, setTodos] = useState([
    {id: '1', title: 'To do'},
    {id: '2', title: 'Do ToDo'}
  ])

  if (!isLoaded){
    return(
      <AppLoading startAsync={loadApplication}
        onError={err => console.log(err)}
        onFinish={() => setIsLoaded(true)}/>
    ) 
  }

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
=======
  const [isLoading, setIsLoading] = useState(false)

  if(!isLoading) {
    return <AppLoading startAsync={loadApp} 
                  onFinish={() => setIsLoading(true)} 
                  onError={err => console.log(err)} />
>>>>>>> 714bb543e3c2ccab1ae470b063af8c1834f55e4f
  }

  return (
    <ToDoState>
      <MainLayout />
    </ToDoState>
  );
}


