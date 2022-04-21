import React, {useState} from 'react'
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading';
import { MainLayout } from './src/MainLayout';
import { ToDoState } from './src/context/todo/ToDoState';

async function loadApp() {
  await Font.loadAsync({
    'ptsans-bold': require('./assets/fonts/PTSans-Bold.ttf'),
    'ptsans-regular': require('.//assets/fonts/PTSans-Regular.ttf')
  })
}

export default function App() {
  const [isLoading, setIsLoading] = useState(false)

  if(!isLoading) {
    return <AppLoading startAsync={loadApp} 
                  onFinish={() => setIsLoading(true)} 
                  onError={err => console.log(err)} />
  }

  return (
    <ToDoState>
      <MainLayout />
    </ToDoState>
  );
}


