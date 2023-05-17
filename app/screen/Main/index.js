import { View, Text, Button } from 'react-native'
import React from 'react'

import{createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from '../Profile';
import Home from '../Home';
import { HomeIcon } from '../../assets/images';

const Tab = createBottomTabNavigator();
const Main = ({navigation,route}) => {
  return (
    <View style={{flex:1}}>
   
      <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown:false,
        tabBarActiveTintColor:"#04325F",
        tabBarInactiveTintColor:"#CED1D4",
        tabBarIcon:({focused,color,size})=>{
            let tabBarIcon={
                Home: 
                <HomeIcon width={size} height={size} fill={color}/>
            };
            return <View>{tabBarIcon[route.name]}</View>
        },
        tabBarStyle:{
            paddingBottom:10,
            paddingTop:10,
            height:70
        }
      })
      }
      >
        <Tab.Screen name='Home' component={Home}/>
        <Tab.Screen name='Profile' component={Profile}/>
      </Tab.Navigator>
    </View>
  )
}

export default Main