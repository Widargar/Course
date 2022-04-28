import React, {useState, useEffect, useContext} from 'react'
import { StyleSheet, View, FlatList, Image, Dimensions } from 'react-native'
import { AddTodo } from '../components/AddTodo'
import { Todo } from '../components/Todo'
import { ScreenContext } from '../context/screen/screenContext'
import { TodoContext } from '../context/todo/todoContext'
import { THEME } from '../theme'

export const MainScreen = ({ openToDo }) => {
  const [deviceWidth, setDeviceWidth] = useState(Dimensions.get('window').width - (2 * THEME.PADDING_HORIZONTAL))
  const {addTodo, todos, removeTodo} = useContext(TodoContext)
  const {changeScreen} = useContext(ScreenContext)

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
      {todos.length ? 
        <View style={{width: deviceWidth}}>
          <FlatList
            keyExtractor={item => item.id.toString()}
            data={todos}
            renderItem={({ item }) => <Todo todo={item} onRemove={removeTodo} onOpen={changeScreen}/>}
          />
        </View> :
        <View style={styles.imageWrapper}>
          <Image style={styles.image} source={require('../../assets/no_items.png')}/>
        </View>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  imageWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
    padding: 10
  },
  image: {
    resizeMode: 'cover',
    height: '100%',
    width: '100%'
  }
})
