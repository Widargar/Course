import React, { useState } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { THEME } from '../theme'
import { AppCard } from '../ui/AppCard'
import { EditModal } from '../components/EditModal'

export const TodoScreen = ({goBack, todo, onRemove, onSave}) => {
  const [isVisible, setIsVisible] = useState(false)
  
  const saveHandler = title => {
    onSave(todo.id, title)
    setIsVisible(false)
  } 
  return (
    <View>
      <EditModal visible={isVisible} onCancel={() => setIsVisible(false)} value={todo.title} onSave={saveHandler}/>
      <AppCard style={styles.card}> 
        <Text style={styles.title}>{todo.title}</Text>
        <Button title='Edit' onPress={() => setIsVisible(true)}/>
      </AppCard>
      <View style={styles.buttonView}>
        <View style={styles.button}>
          <Button title='Go back' color={THEME.GREY_COLOR} onPress={goBack} style={styles.button}/>
        </View>
        <View style={styles.button}>
          <Button title='Delete' color={THEME.RED_COLOR} onPress={() => onRemove(todo.id)} style={styles.button}/>
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
    width: '40%'
  },
  title: {
    fontSize: 20
  }
})
