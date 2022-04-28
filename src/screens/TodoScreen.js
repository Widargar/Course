import React, { useState, useContext } from 'react'
import { StyleSheet, View, Text, Button, Dimensions } from 'react-native'
import { THEME } from '../theme'
import { AppCard } from '../ui/AppCard'
import { EditModal } from '../components/EditModal'
import  {AppTextBold } from '../ui/AppTextBold'
import { AppButton } from '../ui/AppButton'
import { FontAwesome, AntDesign} from '@expo/vector-icons'
import { TodoContext } from '../context/todo/todoContext'
import { ScreenContext } from '../context/screen/screenContext'

export const TodoScreen = () => {
  const [isVisible, setIsVisible] = useState(false)
  const {todos, updateTodo, removeTodo} = useContext(TodoContext)
  const {todoId, changeScreen} = useContext(ScreenContext)

  const todo = todos.find(t => t.id === todoId)
  
  const saveHandler = title => {
    updateTodo(todo.id, title)
    setIsVisible(false)
  } 
  return (
    <View>
      <EditModal visible={isVisible} onCancel={() => setIsVisible(false)} value={todo.title} onSave={saveHandler}/>
      <AppCard style={styles.card}> 
        <AppTextBold style={styles.title}>{todo.title}</AppTextBold>
        <AppButton onPress={() => setIsVisible(true)}>
          <FontAwesome name='edit' size={15}/>
        </AppButton>
      </AppCard>
      <View style={styles.buttonView}>
        <View style={styles.button}>
          <AppButton color={THEME.GREY_COLOR} onPress={() => changeScreen(null)}>
            <AntDesign name='back' size={18} color='white'/>
          </AppButton>
        </View>
        <View style={styles.button}>
          <AppButton color={THEME.RED_COLOR} onPress={() => removeTodo(todo.id)}>
            {/* <FontAwesome name='remove' size={20} color='white'/> */}
            Delete
          </AppButton>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  card: {
    marginBottom: 15,
    padding: 15
  },
  button: {
    // width: '40%'
    // width: Dimensions.get('window').width / 3
    width: Dimensions.get('window').width > 400 ? 190 : 120
  },
  title: {
    fontSize: 20
  }
})
