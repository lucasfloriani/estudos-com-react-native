import 'react-native-gesture-handler'

import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import ProductsScreen from './src/screens/Products'
import ProductScreen from './src/screens/Product'
import LoginScreen from './src/screens/Login'

const Stack = createStackNavigator()

const AuthStack = () => (
  <Stack.Navigator headerMode="none" initialRouteName="Products">
    <Stack.Screen name="Login" component={LoginScreen} />
  </Stack.Navigator>
)

const AppStack = () => (
  <Stack.Navigator headerMode="none" initialRouteName="Products">
    <Stack.Screen name="Products" component={ProductsScreen} />
    <Stack.Screen name="Product" component={ProductScreen} />
  </Stack.Navigator>
)

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsAuthenticated(true)
    }, 500)
  }, [])

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  )
}
