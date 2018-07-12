import React from 'react'
import { StatusBar, View } from 'react-native'

import Landing from './src/screens/Landing'

const App = () => (
  <View style={{ flex : 1 }}>
    <StatusBar barStyle="light-content" />
    <Landing />
  </View>
)

export default App
