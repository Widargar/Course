import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { AppText } from '../ui/AppText'

export const Todo = ({ todo, onRemove, onOpen }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.3}
      onPress={() => onOpen(todo.id)}
      onLongPress={onRemove.bind(null, todo.id)}
    >
      <View style={styles.todo}>
<<<<<<< HEAD
        <Text style={styles.title}>{todo.title}</Text>
=======
        <AppText style={styles.title}>{todo.title}</AppText>
>>>>>>> 714bb543e3c2ccab1ae470b063af8c1834f55e4f
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  todo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 5,
    marginBottom: 10
  },
  title: {
<<<<<<< HEAD
    fontFamily: 'montserrat-regular'
=======
    fontSize: 18
>>>>>>> 714bb543e3c2ccab1ae470b063af8c1834f55e4f
  }
})
