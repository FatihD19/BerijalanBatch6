import { View} from 'react-native'
import React, {Fragment} from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { useEffect} from 'react';
import* as Font from 'expo-font';
import* as SplashScreen from 'expo-splash-screen';
import fonts from './app/assets/fonts';

import IndexLayout from './app/index';


const App = () => {
    useEffect(() => {
     async function loadFonts() {
        try {
            await Font.loadAsync(fonts)
        } catch (e) {
            console.warn(e);
        }finally{
            await SplashScreen.hideAsync();
        }
        
      }
      loadFonts();
    }, []);
  return (
    <Fragment>
        <SafeAreaProvider>
           <IndexLayout/>
        </SafeAreaProvider>
    </Fragment>
  )
}

export default App