import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, View, FlatList, Image } from 'react-native'
import { AddTodo } from '../components/AddTodo'
import { Todo } from '../components/Todo'

export const MainScreen = ({ addTodo, todos, removeTodo, openToDo }) => {
  return (

    <View>
      <AddTodo onSubmit={addTodo} />
      {todos.length  ?
        <FlatList
        keyExtractor={item => item.id.toString()}
        data={todos}
        renderItem={({ item }) => <Todo todo={item} onRemove={removeTodo} onOpen={openToDo}/>}
      /> :
        <View style={styles.imageWrapper}>
          <Image source={require('../../assets/no_tems.png')} style={styles.image}/>
        </View>
      }
      <StatusBar style='auto'/>
    </View>
  )
}

const styles = StyleSheet.create({
  imageWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    height: 300
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  }
})
