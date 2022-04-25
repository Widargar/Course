import React, {useState} from 'react'
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
  })
}

export default function App() {
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
