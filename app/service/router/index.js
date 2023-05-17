import { View, Text } from 'react-native'
import React from 'react'

import{createStackNavigator} from '@react-navigation/stack';

import {Profile,Main} from "../../screen";

const Stack = createStackNavigator();
const Routes = () => {
  return (
    <Stack.Navigator
    initialRouteName='Main'
    >
        <Stack.Screen name="Main" component={Main}
            options={{headerShown:false}}
            
        />
        
    </Stack.Navigator>
  )
}

export default Routes