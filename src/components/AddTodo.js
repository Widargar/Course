import React, { useState } from 'react'
import { View, StyleSheet, TextInput, Button, Alert, Keyboard } from 'react-native'
import { THEME } from '../theme'
import { Ionicons } from '@expo/vector-icons';

export const AddTodo = ({ onSubmit }) => {
  const [value, setValue] = useState('')

  const pressHandler = () => {
    if (value.trim()) {
      onSubmit(value)
      setValue('')
      Keyboard.dismiss()
    } else {
      Alert.alert('ToDo title cannot be empty')
    }
  }

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        onChangeText={setValue}
        value={value}
        placeholder='Enetr ToDo title...'
        autoCorrect={false}
        autoCapitalize='none'
      /> 
      <Ionicons.Button name="add-circle-outline" size={24} color="white" onPress={pressHandler}>
         Add
      </Ionicons.Button>
    </View>
  )
}

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15
  },
  input: {
    width: '70%',
    padding: 10,
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: THEME.MAIN_COLOR,
    fontFamily: 'ptsans-regular'
  }
})
