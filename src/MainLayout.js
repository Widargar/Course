import React, {useState, useContext} from 'react'
import { View, StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { Navbar } from './components/Navbar'
import { THEME } from './theme'
import { MainScreen } from './screens/MainScreen'
import { TodoScreen } from './screens/TodoScreen'
import { TodoContext } from './context/todo/todoContext';
import { ScreenContext} from './context/screen/screenContext'

export const MainLayout = () => {
    const {todoId, changeScreen} = useContext(ScreenContext)
    
    return (
        <View>
            <Navbar title='Todo App' />
            <View style={styles.container}>
              { todoId ? <TodoScreen/> : <MainScreen/>}
              </View>
            <StatusBar style='light' translucent={true}/>
            {/* <StatusBar barStyle={'light-content'} hidden={false} backgroundColor={THEME.MAIN_COLOR}/> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      paddingHorizontal: THEME.PADDING_HORIZONTAL,
      paddingVertical: 20
    },
  });