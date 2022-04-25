<<<<<<< HEAD
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, View, FlatList, Image } from 'react-native'
=======
import React, {useState, useEffect} from 'react'
import { StyleSheet, View, FlatList, Image, Dimensions } from 'react-native'
>>>>>>> 714bb543e3c2ccab1ae470b063af8c1834f55e4f
import { AddTodo } from '../components/AddTodo'
import { Todo } from '../components/Todo'
import { THEME } from '../theme'

export const MainScreen = ({ addTodo, todos, removeTodo, openToDo }) => {
  const [deviceWidth, setDeviceWidth] = useState(Dimensions.get('window').width - (2 * THEME.PADDING_HORIZONTAL))

  useEffect(() => {
    const update = () => {
      const width = Dimensions.get('window').width - (2 * THEME.PADDING_HORIZONTAL)
      setDeviceWidth(width )
    }
    Dimensions.addEventListener('change', update)

    return () => {
      Dimensions.removeEventListener('change', update)
    }
  })
  

  return (

    <View>
      <AddTodo onSubmit={addTodo} />
<<<<<<< HEAD
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
=======
      {todos.length ? 
        <View style={{width: deviceWidth}}>
          <FlatList
            keyExtractor={item => item.id.toString()}
            data={todos}
            renderItem={({ item }) => <Todo todo={item} onRemove={removeTodo} onOpen={openToDo}/>}
          />
        </View> :
        <View style={styles.imageWrapper}>
          <Image style={styles.image} source={require('../../assets/no_items.png')}/>
        </View>
      }
>>>>>>> 714bb543e3c2ccab1ae470b063af8c1834f55e4f
    </View>
  )
}

const styles = StyleSheet.create({
  imageWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
<<<<<<< HEAD
    padding: 10,
    height: 300
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
=======
    height: 300,
    padding: 10
  },
  image: {
    resizeMode: 'cover',
    height: '100%',
    width: '100%'
>>>>>>> 714bb543e3c2ccab1ae470b063af8c1834f55e4f
  }
})
