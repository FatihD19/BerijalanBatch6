import { View} from 'react-native'
import React from 'react'

import Text from "./component/Text"
import Profile from './screen/Profile'

import {SafeAreaProvider} from "react-native-safe-area-context";
import { NavigationContainer } from '@react-navigation/native';

import Routes from "./service/router"
const AppNavigator = Routes;
const IndexLayout = () => {

  return (
  <SafeAreaProvider style={{flex:1}}>
    <NavigationContainer>
      <AppNavigator/>
    </NavigationContainer>
  </SafeAreaProvider>
  )
}

export default IndexLayout