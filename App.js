import React, {useState, useEffect} from 'react'
import useNews from './app/hooks/useNews'

import {NavigationContainer} from '@react-navigation/native'
import AppNavigator from './app/components/navigation/AppNavigator'
import ActivityIndicator from './app/components/common/ActivityIndicator'

const App = ()=>{

  return (
    <NavigationContainer>
      <AppNavigator/>
    </NavigationContainer>
  )
  
}

export default App